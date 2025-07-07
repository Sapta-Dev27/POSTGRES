import db from "../../db/db.js"

const insertUser = async (name , email) => {
  const insertQuery = `
  INSERT INTO users (name ,email )
  VALUES ( $1 , $2) 
  RETURNING *;
  `
  try {
    const result = await db.query(insertQuery, [name, email]);
    if (result && result.rowCount > 0) {
      console.log("Data inserted successfully ", result.rows);
      return result.rows;
    }
    else {
      console.log("No data inserted");
      return null;
    }

  }
  catch (error) {
    console.log("Error inserting user", error);
  }
}

export default insertUser