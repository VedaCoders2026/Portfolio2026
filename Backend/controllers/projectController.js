// controllers/projectController.js
const supabase = require("../config/supabase");

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