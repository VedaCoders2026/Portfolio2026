// controllers/projectController.js
const supabase = require("../config/supabase");
const { v2: cloudinary } = require('cloudinary');
const Joi = require('joi');

const projectSchema = Joi.object({
  title: Joi.string().required(),
  type: Joi.string().required(),
  short_desc: Joi.string().required(),
  full_desc: Joi.string().optional(),
  features: Joi.array().items(Joi.string()).optional(),
});

exports.getProjects = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const { data, error, count } = await supabase
    .from('projects')
    .select('*', { count: 'exact' })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('Supabase Error:', error);
    return res.status(500).json({ error: 'Failed to fetch projects', details: error.message });
  }

  res.json({ data, total: count, page, limit });
};

exports.getProjectById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Supabase Error:', error);
    return res.status(404).json({ error: 'Project not found', details: error.message });
  }

  res.json(data);
};

exports.createProject = async (req, res) => {
  const { title, type, short_desc, full_desc, features } = req.body;
  const files = req.files || {};

  const { error: validationError } = projectSchema.validate({ title, type, short_desc, full_desc, features });
  if (validationError) {
    return res.status(400).json({ error: validationError.details[0].message });
  }

  let hero_img, video, gallery = [];
  try {
    if (files.hero_img) {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
        stream.end(files.hero_img[0].buffer);
      });
      hero_img = result.secure_url;
    }

    if (files.video) {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ resource_type: 'video' }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
        stream.end(files.video[0].buffer);
      });
      video = result.secure_url;
    }

    if (files.gallery) {
      gallery = await Promise.all(
        files.gallery.map(file => new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          });
          stream.end(file.buffer);
        }))
      );
    }

    const { data, error } = await supabase.from('projects').insert([
      { title, type, hero_img, video, short_desc, full_desc, gallery, features },
    ]);

    if (error) {
      console.error('Supabase Error:', error);
      return res.status(500).json({ error: 'Failed to create project', details: error.message });
    }

    res.status(201).json(data[0]);
  } catch (error) {
    console.error('Cloudinary Error:', error);
    return res.status(500).json({ error: 'Failed to upload files', details: error.message });
  }
};

exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, type, short_desc, full_desc, features } = req.body;
  const files = req.files || {};

  const { error: validationError } = projectSchema.validate({ title, type, short_desc, full_desc, features });
  if (validationError) {
    return res.status(400).json({ error: validationError.details[0].message });
  }

  let hero_img, video, gallery = [];
  try {
    if (files.hero_img) {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
        stream.end(files.hero_img[0].buffer);
      });
      hero_img = result.secure_url;
    }

    if (files.video) {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ resource_type: 'video' }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
        stream.end(files.video[0].buffer);
      });
      video = result.secure_url;
    }

    if (files.gallery) {
      gallery = await Promise.all(
        files.gallery.map(file => new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          });
          stream.end(file.buffer);
        }))
      );
    }

    const updateData = { title, type, short_desc, full_desc, features };
    if (hero_img) updateData.hero_img = hero_img;
    if (video) updateData.video = video;
    if (gallery.length > 0) updateData.gallery = gallery;

    const { data, error } = await supabase
      .from('projects')
      .update(updateData)
      .eq('id', id);

    if (error) {
      console.error('Supabase Error:', error);
      return res.status(500).json({ error: 'Failed to update project', details: error.message });
    }
    if (!data.length) return res.status(404).json({ error: 'Project not found' });

    res.json(data[0]);
  } catch (error) {
    console.error('Cloudinary Error:', error);
    return res.status(500).json({ error: 'Failed to upload files', details: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Supabase Error:', error);
    return res.status(500).json({ error: 'Failed to delete project', details: error.message });
  }
  if (!data.length) return res.status(404).json({ error: 'Project not found' });

  res.status(204).send();
};