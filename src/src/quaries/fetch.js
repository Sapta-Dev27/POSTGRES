import db from '../db/db.js'

const fetchUsers = async () => {
  const fetchQuery = `
   SELECT * FROM users
   `;
  try {
    const result = await db.query(fetchQuery);
    if (result && result.rowCount > 0) {
      console.log("Users fetched successfully", result.rows);
    }
    else {
      console.log("No users found");
      return null;
    }
  }
  catch (error) {
    console.log("Error fetching users", error);
  }
}

export default fetchUsers;