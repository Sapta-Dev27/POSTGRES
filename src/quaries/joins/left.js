import db from '../../db.js';

const outer = async () => {

  const query = `
  SELECT users.id , users.name . post.title
  FROM users
  LEFT JOIN posts ON users.id = posts.user_id
  `

  try {
    const result = db.query(query);
    if (result) {
      console.log("Outer join executed successfully");
      return result.rows;
    }
  }
  catch (error) {
    console.log("Error in outer join:", error);
    return null;
  }
}

export default outer;