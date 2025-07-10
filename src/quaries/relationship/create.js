import db from '../../db.js'

const createRelationhip = async( ) => {

  const query = `
    CREATE TABLE IF NOT EXITS posts 
     id SERIAL PRIMARY KEY ,
     title VARCHAR(255) NOT NULL ,
     content TEXT NOT NULL ,
     user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
  `;
  try {
     const result = await db.query(query);
     if(result){
      console.log("Relationship created successfully");
     }
     else {
      console.log("Relationship creation failed");
     }
  }
  catch(error){
    console.log("Error creating relationship:", error);

  }
}

export default createRelationhip;