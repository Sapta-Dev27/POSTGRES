import db from "../../db/db";

const innerJoin = async () => {
  const query = `
    SELECT users.id , users.name ,post.title 
    FROM usersb
    INNER JOIN posts ON users.id = posts.users_id
    `

  try {
    const result = await db.query(query);
    if (result) {
      console.log("Inner join executed successfully");
      return result.rows;
    }
  }
  catch (error) {
    console.log("Error in inner join:", error);
    return null;
  }
}

export default innerJoin;