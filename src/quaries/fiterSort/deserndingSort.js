import db from "../../db/db.js";

const descendingSort = async (column, value = "DESC") => {

  const sortQuery = `
   SELECT * FROM users
   ORDER BY ${column} ${value}
  `
  try {
    const response = await db.query(sortQuery);
    if (response) {
      console.log("Data sorted in descending order: ", response.rows);
      return response.rows;
    }
    else {
      console.log("No data found to sort");
      return [];
    }
  }
  catch (error) {
    console.log("Error sorting data in descending order", error);

  }
}
export default descendingSort;