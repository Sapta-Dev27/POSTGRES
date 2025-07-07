import db from "../../db/db.js";

const pagination = async (limit , offset) => {

  const paginationQury =
  `
  SELECT  * from USERS
  LIMIT $1 OFFSET $2 
  `
   try {
      const response = await db.query(paginationQury, [limit, offset]);
      if (response){
        console.log("Data paginated: ", response.rows);
        return response.rows;
      }
      else{
        console.log("No data found for pagination");
        return [];
      }
   }
   catch(error){
    console.log("Error in pagination: ", error);
   }
}

export default pagination