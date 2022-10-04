'use strict'

const grades= [{name: 'jhon', grade: 8, sex:'M'},
 { name:'sarah', grade: 12, sex:'F'},
 { name:'Bob', grade:16, sex:'M'},
 { name:'Jhonny', grade:2, sex:'M'},
 {name: 'Cyrus', grade: 4, sex:'M'},
{name:'Paula', grade:18, sex:'F'},
{name:'Jeff', grade: 5, sex:'M'},
{name:'Jennifer', grade: 13, sex:'F'},
{name:'Courtney', grade:15, sex:'F'},
{name:'Jane', grade:9, sex:'F'}]

let isBoy=student=>student.sex==="M";
let isGirl=student=>student.sex==="F";

let getBoys=grades=> (grades.filter(isBoy));
let getGirls=grades=>(grades.filter(isGirl));

let average=grades=>(grades.reduce((acc,curr)=>(acc+curr.grade),0)/grades.length);

let maxGrade=grades=>(Math.max(...grades.map(student=>student.grade)));
let minGrade=grades=>(Math.min(...grades.map(student=>student.grade)));


let classRoomAverage=average(grades);
let boyAverage=average(getBoys(grades));
let girlAverage=average(getGirls(grades));

console.log("class Average Grade:" +classRoomAverage);
console.log("Boy's Average Grade:" + boyAverage);
console.log("Girl's Average Grade:" + girlAverage);

