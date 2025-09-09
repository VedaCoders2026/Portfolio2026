// controllers/projectController.js
import { supabase } from "../config/db.js";

// Get all projects
export const getProjects = async (req, res) => {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
};

// Get project by ID (with features + gallery if you added JSON fields)
export const getProjectById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return res.status(404).json({ error: "Project not found" });

  res.json(data);
};

// Create new project
export const createProject = async (req, res) => {
  const { title, type, hero_img, video, short_desc, full_desc, gallery, features } =
    req.body;

  const { data, error } = await supabase.from("projects").insert([
    {
      title,
      type,
      hero_img,
      video,
      short_desc,
      full_desc,
      gallery,
      features,
    },
  ]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json(data);
};
