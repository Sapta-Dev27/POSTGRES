import db from '../../db.js';

const insertRelationship = async( title , result , userId) => {
  const query = `
  INSERT into posts( title , content , user_id)
  VALUES($1 , $2 , $3)
  RETURNING *;
  `

  const  insertValues = await db.query(query , [title , result , userId]);
  if(insertValues) {
    console.log("Relationship inserted successfully");
    return insertValues.rows[0];
  }
  else {
    console.log("Relationship insertion failed");
    return null;
  }
}

export default insertRelationship;
 
