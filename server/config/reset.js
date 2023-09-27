import { pool } from "./database.js";
import "./dotenv.js";
import minecraftData from "../data/minecraftItems.js";

const createMinecraftItemsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS minecraftitems;

    CREATE TABLE IF NOT EXISTS minecraftitems (
        id SERIAL PRIMARY KEY,
        itemname TEXT NOT NULL,
        description TEXT NOT NULL,
        rarity TEXT NOT NULL,
        image TEXT NOT NULL
    )
`;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 gifts table created successfully");
  } catch (err) {
    console.error("⚠️ error creating gifts table", err);
  }
};

const seedMinecraftItemsTable = async () => {
  await createMinecraftItemsTable();
  minecraftData.forEach((data) => {
    const insertQuery = {
      text: "INSERT INTO minecraftitems (itemname, description, rarity, image) VALUES ($1, $2, $3, $4)",
    };

    const values = [data.itemName, data.description, data.rarity, data.image];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting gift", err);
        return;
      }
      console.log(`✅ ${data.name} added successfully`);
    });
  });
};

seedMinecraftItemsTable()
