import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
})

const query = async (text, params) => {

  try {

    const start = Date.now();

    const result = await pool.query(text, params);

    const duration = Date.now() - start;
    console.log("Executed is ", duration)

    console.log(`Executed query : ${JSON.stringify({ text, params, rows: result.rowCount })}`)
    return result;
  }
  catch (error) {
    console.log('Error executing query', error);
  }

}
const db = {
  query
};

export default db;