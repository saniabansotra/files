 /////ARRAY OF AN OBJECT////
// The array that is used to store data of objects is called array of an object.

const resultModels = [
    {
      name: "Ashutosh Mishra 1",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college_name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 2",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college_name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 3",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college_name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 4",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college_name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 5",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college_name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 6",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college_name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 7",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college_name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 8",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
  ];

// console.log(resultModels[4].name);
// for(let i=0;i<7;i++){
//     resultModels[i].age="50";
// }
// console.log(resultModels);


// for(let a of resultModels){
//     if(a.name==="Ashutosh Mishra 3"){
//     a.rollno="1000";
//     }}
// console.log(resultModels);

// for(let a of resultModels){
//     if(a.name==="Ashutosh Mishra 7"){
//     a.college_name="IIT Bombay";
//     }}
// console.log(resultModels);

// resultModels.map((candidate)=>{
//    candidate.age="50";
// })



resultModels.map((candidate)=>{
  if(candidate.name ==="Ashutosh Mishra 6"){
    candidate.college_name="IIT Bombay";
  }
});
console.log(resultModels);