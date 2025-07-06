import createTable from "./src/quaries/create.js"
import insertUser from "./src/quaries/insert.js";
import fetchUsers from "./src/quaries/fetch.js";
import updateUser from "./src/quaries/update.js";
import deleteUser from "./src/quaries/delete.js";

const testQuaries = async () => {
  try {
    await createTable();
    await insertUser("saptadev27", "saptadev27@gmail.com")
    await insertUser("saptadev37", "saptadev37@gmail.com")
    await insertUser("saptadev47", "saptadev47@gmail.com")
    await insertUser("saptadev57", "saptadev57@gmail.com")
    await insertUser("saptadev67", "saptadev67@gmail.com")

    await updateUser("saptadev27", "sapta@gmail.com")
    await deleteUser("saptadev67");

    await fetchUsers();
  }
  catch (error) {
    console.log(error);
  }
}

const main = async () => {
  await testQuaries();
}

main();