import createTable from './quaries/crud/create.js'
import insertUser from "./quaries/crud/insert.js";
import fetchUsers from "./quaries/crud/fetch.js";
import updateUser from "./quaries/crud/update.js";
import deleteUser from "./quaries/crud/delete.js";

import filterUserData from "./quaries/fiterSort/filterbyName.js";
import filterNameByEmail from "./quaries/fiterSort/filterEmail.js";
import sortUsersByAsending from "./quaries/fiterSort/asendingSort.js"
import sortUsersByDescending from "./quaries/fiterSort/deserndingSort.js";
import pagination from './quaries/fiterSort/pagination.js';


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

const testQuariesWithFilter = async () => {
  try {
    const result = await filterUserData("name LIKE 's%' ")
    if (result) {
      console.log("Data filtered successfully");
    }
  }
  catch (error) {
    console.log(error);
  }
}


const testQuariesWithFilterByEmail = async () => {
  try {
    const result = await filterNameByEmail(" email LIKE 'sp%' ");
    if (result) {
      console.log("Data filtered by email successfully");
    }
  }
  catch (error) {
    console.log(error)
  }
}

const testQuariesWithSortByAsec = async () => {
  try {
    const response = await sortUsersByAsending("id")
    if (response) {
      console.log("Data sorted by ascending order successfully");
    }
  }
  catch (error) {
    console.log(error);
  }
}

const testQuariesWithSortByDesc = async () => {
  try {
    const response = await sortUsersByDescending("id")
    if (response) {
      console.log("Data sorted by descending order successfully");
    }
  }
  catch (error) {
    console.log(error);
  }
}

const testPagination = async () => {
  try {
    const response = await pagination(2, 1);
    if (response) {
      console.log("Data paginated successfully");
    }
  }
  catch (error) {
    console.log(error);
  }
}

const main = async () => {
  //await testQuaries();
  //await testQuariesWithFilter();
  //await testQuariesWithFilterByEmail();
  //await testQuariesWithSortByAsec();
  // await testQuariesWithSortByDesc();
  // await testPagination();
}

main(); 