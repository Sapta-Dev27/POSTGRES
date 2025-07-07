import db from "../../db/db.js"

const updateUser = async (name, email) => {
  const updateQuery = `
    UPDATE users 
    SET email = $2
    WHERE name = $1
    RETURNING *;
  `
  try {
    const result = await db.query(updateQuery, [name, email]);
    if (result) {
      console.log("User updated successfully ", result.rows[0]);
      return result.rows[0];
    }
    else {
      console.log("No user found with the given name");
      return null;
    }
  }
  catch (error) {
    console.log("Error updating user", error);
  }
}

export default updateUser;