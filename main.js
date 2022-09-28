const cohorts =
  '{"name1":"Luke", "name2":"RuthAmara", "name3":"Chima", "name4":"Chinonso", "name5":"Sandra", "name6":"Emeka", "name7":"Ruth", "name8":"Okey", "name9":"Caesar", "name10":"Israel", "name11":"Victor", "name12":"Collins", "name13":"Faith", "name14":"Onyedika", "name15":"Kenneth", "name16":"Chibuike", "name17":"ChineseChikki", "name18":"Emmanuel", "name19":"Dubem", "name20":"Jane"}';
const obj = JSON.parse(cohorts);

document.getElementById("bootcamp").innerHTML =
  obj.name1 +
  ", " +
  obj.name2 +
  " , " +
  obj.name3 +
  ", " +
  obj.name4 +
  ", " +
  obj.name5 +
  ", " +
  obj.name6 +
  ", " +
  obj.name7 +
  ", " +
  obj.name8 +
  ", " +
  obj.name9 +
  ", " +
  obj.name10 +
  ", " +
  obj.name11 +
  ", " +
  obj.name12 +
  ", " +
  obj.name13 +
  ", " +
  obj.name14 +
  ", " +
  obj.name15 +
  ", " +
  obj.name16 +
  "," +
  obj.name17 +
  ", " +
  obj.name18 +
  ", " +
  obj.name19 +
  ", " +
  obj.name20;

// const text = '{ "birth": "2022-07-22" }';
// const abj = JSON.parse(text);
// obj.birth = new Date(abj.birth);
// document.getElementById("camp").innerHTML = abj.birth;

// const myObj = { name: "John", age: 31, city: "New York" };
// const myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);

// const objCohorts = {
//   name1: "Caesar",
//   name2: "Emeka",
//   name3: "Israel",
//   name4: "Okey",
//   name5: "Ruth",
// };
// const myJSON = JSON.stringify(objCohorts);
// localStorage.setItem("testJSON", myJSON);

let groupCohorts = localStorage.getItem("testJSON");
let objCohorts = JSON.parse(groupCohorts);
document.getElementById("grpTwo").innerHTML =
  objCohorts.name1 +
  ", " +
  objCohorts.name2 +
  ", " +
  objCohorts.name3 +
  ", " +
  objCohorts.name4 +
  ", " +
  objCohorts.name5;
