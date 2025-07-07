import db from "../../db/db.js"

const filterUserData = async (condition) => {

  const filterDataQuery = `
  SELECT * FROM users
  WHERE  ${condition}
  ` ;

  try {
    const response = await db.query(filterDataQuery);
    if (response) {
      console.log("Filtered data ", response.rows);
      return response.rows
    }
    else {
      console.log("No data found with the given condition");
      return []
    }
  }
  catch (error) {
    console.log(error)
  }
}


export default filterUserData