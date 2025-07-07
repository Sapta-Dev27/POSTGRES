import db from '../../db/db.js';

const deleteUser = async (name) => {
  const deleteQuery = `
   DELETE FROM users 
   WHERE name = $1
   RETURNING *
   `;
  try {
    const result = await db.query(deleteQuery, [name]);
    if (result) {
      console.log("User deleted successfully ", result.rows[0]);
      return result.rows[0];
    }
    else {
      console.log("No user found with the given name");
      return null;
    }
  }
  catch (error) {
    console.log("Error deleting user", error);
  }
}

export default deleteUser