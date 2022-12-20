          
        //   ARRAY MAPPING

// for of loop is similar to array mapping.
// const practicearr=[
//     "element 1",
//     "element 2",
//     "element 3",
//     "element 4",
//     "element 5",
//     "element 6",
//     "element 7",
// ];
// // for(let candidate of practicearr){
// //     console.log(candidate,"of for loop");
// //}
// practicearr.map((candidate)=>{
//     console.log(candidate);
// })

// const findedelement =practicearr.find((candidate)=>{
//     return candidate==="Element 4";
// });
// console.log(findedelement);
const arr=[
    "1",
    "2",
    "3",
    "4",

]
//   arr.map((candidate)=>{
//   console.log(candidate);
//   });
//   const finding=arr.find((candidate)=>{
//   return candidate==="2";});
//   console.log(finding);



const find = arr.find((candidate)=>{
    return candidate==="3";
});
console.log(find);