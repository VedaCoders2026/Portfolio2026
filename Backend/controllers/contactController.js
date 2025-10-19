// controllers/contactController.js
const sql = require('mssql');
const Joi = require('joi');

exports.createContactMessage = async (req, res) => {
  const { name, email, mobile, purpose, message } = req.body;

  // Joi validation
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().allow(null, ''),
    purpose: Joi.string().allow(null, ''),
    message: Joi.string().allow(null, ''),
  });

  const { error: validationError } = schema.validate(req.body);
  if (validationError) {
    return res.status(400).json({ error: 'Validation failed', details: validationError.details });
  }

  try {
    const result = await req.dbPool.request()
      .input('name', sql.NVarChar(sql.MAX), name)
      .input('email', sql.NVarChar(sql.MAX), email)
      .input('mobile', sql.NVarChar(sql.MAX), mobile)
      .input('purpose', sql.NVarChar(sql.MAX), purpose)
      .input('message', sql.NVarChar(sql.MAX), message)
      .input('ts', sql.DateTime2, new Date())
      .query(`
        INSERT INTO dbo.contacts (name, email, mobile, purpose, message, ts)
        OUTPUT INSERTED.*
        VALUES (@name, @email, @mobile, @purpose, @message, @ts)
      `);

    const data = result.recordset[0];
    res.status(201).json(data);
  } catch (error) {
    console.error('MSSQL Error:', error);
    return res.status(500).json({ error: 'Failed to save contact message', details: error.message });
  }
};