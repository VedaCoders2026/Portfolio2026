const supabase = require("../config/supabase");
const Joi = require('joi');

exports.createContactMessage = async (req, res) => {
  const { name, email, mobile, purpose, message } = req.body;

  try {
    // Insert into Supabase contact table
    const { data, error } = await supabase.from('contacts').insert([
      {
        name: name,
        email: email,
        mobile: mobile,
        purpose: purpose,
        message: message,
        ts: new Date().toISOString(),
      },
    ]).select().single();

    if (error) {
      console.error('Supabase Error:', error);
      return res.status(500).json({ error: 'Failed to save contact message', details: error.message });
    }

    res.status(201).json(data);
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Failed to process request', details: error.message });
  }
};