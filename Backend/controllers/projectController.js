// controllers/projectController.js
const sql = require('mssql');

exports.getProjects = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  try {
    // Use req.dbPool from server.js middleware
    const result = await req.dbPool.request()
      .input('offset', sql.Int, offset)
      .input('limit', sql.Int, limit)
      .query(`
        SELECT *
        FROM dbo.projects
        ORDER BY created_at DESC
        OFFSET @offset ROWS FETCH NEXT @limit ROWS ONLY
      `);

    const countResult = await req.dbPool.request()
      .query('SELECT COUNT(*) AS total FROM dbo.projects');

    const total = countResult.recordset[0].total;
    const data = result.recordset;

    res.json({ data, total, page, limit });
  } catch (error) {
    console.error('MSSQL Error:', error);
    return res.status(500).json({ error: 'Failed to fetch projects', details: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    // Use req.dbPool from server.js middleware
    const result = await req.dbPool.request()
      .input('id', sql.Numeric(36, 0), id)
      .query('SELECT * FROM dbo.projects WHERE id = @id');

    if (result.recordset.length === 0) {
      return res.status(404).json({ error: 'Project not found', details: 'No project exists with the provided ID' });
    }

    res.json(result.recordset[0]);
  } catch (error) {
    console.error('MSSQL Error:', error);
    return res.status(404).json({ error: 'Project not found', details: error.message });
  }
};