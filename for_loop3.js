          
        //   ARRAY MAPPING

// for of loop is similar to array mapping.
const practicearr=[
    "element 1",
    "element 2",
    "element 3",
    "element 4",
    "element 5",
    "element 6",
    "element 7",
];
for(let candidate of practicearr){
    console.log(candidate,"of for loop");
}
practicearr.map((candidate)=>{
    console.log(candidate);
})

const findedelement =practicearr.find((candidate)=>{
    return candidate==="Element 4";
});
console.log(findedelement);
  