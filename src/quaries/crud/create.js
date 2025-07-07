import db from  "../../db/db.js"

const createTable = async () => {
  const createTableQuery = `
     CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY ,
      name VARCHAR(50) UNIQUE NOT NULL ,
      email VARCHAR(25) UNIQUE NOT NULL )
    `;
  try {
    const result = await db.query(createTableQuery);
    if (result) {
      console.log("Table created successfully");
    }
  }
  catch (error) {
    console.log("Error creating table", error);
  }
}

export default createTable;