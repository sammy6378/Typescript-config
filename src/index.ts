
//arrays in typescript
// const array1:[string,number,boolean]=["simon",10,true]
// //array1.push(false)
// array1.pop()
// //array1.shift()
// array1.unshift("kelvin")
// console.log(array1);

//readonly
//type
// type ageof = "string";
// let age: ageof = "simon";
// console.log(age);

// interface details {
//     name:string;
//     age:number;
//     gender:string;
// }

// interface details2 extends details {
//     course:string,
//     unit:{
//         unit1package:string,
//         unit2:string
//     }
// }

// const person:details2 = {
//     name:"simon",
//     age:10,
//     gender:"male",
//     course:"cs",
//     unit:{
//         unit1package:"unit1",
//         unit2:"unit2"
//     }

// }
// console.log(person);

type person ={
    name:string,
    age:number,
    gender:string,
    course:string,
    id:number
}

type courses = person & {
    cs:string[],
    maths:string[],
    english:string[]
}

let student : courses ={
    name: "Samuel",
    age: 10,
    gender: "male",
    course: "cs",
    id:41325157,
    cs:["cs1","cs2","cs3"],
    maths:["maths1","maths2","maths3"],
    english:["english1","english2","english3"]
}

console.log(student);