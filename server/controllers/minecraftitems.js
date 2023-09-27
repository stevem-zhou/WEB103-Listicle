import { pool } from "../config/database.js";

const getMinecraftItems = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM minecraftitems ORDER BY id ASC"
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {getMinecraftItems}