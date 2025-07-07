import db from "../../db/db.js";

const filterNameByEmail = async (condition) => {
  const filterDataQuery = `
     SELECT * FROM users 
     WHERE ${condition}
    `;
  try {
    const response = await db.query(filterDataQuery);
    if (response) {
      console.log("Filtered datae by email : ", response.rows)
      return response.rows;
    }
    else {
      console.log("No data found with the given condition");
      return [];
    }
  }
  catch (error) {
    console.log("Error filtering data by email", error);
  }
}

export default filterNameByEmail;