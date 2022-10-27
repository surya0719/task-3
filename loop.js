let array=[1,2,3,4,5,6,7,8,9]
for(var i=0;i<array.length;i++){ //--->for loop
    console.log(array[i]);
}



// for in loop
var obj=[{
"name":"surya",
"place":"chennai"
}]                         //---->this line use for in loop
for(var key in obj)
{
    console.log(obj);
}

//for of loop
let movies=[{
    "tamil":"vikram",
    "hindi":"sjhsj",
    "ebglish":"avangers",
    "anime":"your name"    //--->this line use for in loop
}]
for(let index of movies)
{
    console.log(movies);
}
