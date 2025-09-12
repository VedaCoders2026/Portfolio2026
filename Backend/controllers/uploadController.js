const cloudinary = require('cloudinary').v2;
const supabase = require('../config/supabase');

exports.uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file provided' });
  }

  const stream = cloudinary.uploader.upload_stream(
    { resource_type: 'image' },
    async (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Cloudinary upload failed', details: error });
      }

      // Store URL in Supabase
      const { data, error: dbError } = await supabase
        .from('uploads')
        .insert({ url: result.secure_url, type: 'image' });

      if (dbError) {
        return res.status(500).json({ error: 'Supabase insert failed', details: dbError });
      }

      res.json({ message: 'Image uploaded successfully', url: result.secure_url, supabaseData: data });
    }
  );

  // Pipe the buffer to the stream
  stream.end(req.file.buffer);
};

exports.uploadVideo = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file provided' });
  }

  const stream = cloudinary.uploader.upload_stream(
    { resource_type: 'video' },
    async (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Cloudinary upload failed', details: error });
      }

      // Store URL in Supabase
      const { data, error: dbError } = await supabase
        .from('uploads')
        .insert({ url: result.secure_url, type: 'video' });

      if (dbError) {
        return res.status(500).json({ error: 'Supabase insert failed', details: dbError });
      }

      res.json({ message: 'Video uploaded successfully', url: result.secure_url, supabaseData: data });
    }
  );

  // Pipe the buffer to the stream
  stream.end(req.file.buffer);
};