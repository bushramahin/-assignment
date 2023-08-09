// Task 1
let area = (l:number,w:number)=>{
    let formula = l*w;
    console.log("Area of rectangle is :",formula); 
}
area(2,6)
// Task 2
let vol = (a:number)=>{
    let cube = a**3
    console.log("Volume of cube is :",cube);
}
vol(3)
// Task 3
let num = 0
if(num > 0){
    console.log("given number is positive" , num);
}
else if (num<0){
     console.log("given number is negative" , num);
}
else{
     console.log("given number is zero" , num);
}
// Task 4
let no = 34
if(no%2 == 0){
     console.log("given number is even" , no);
}else{
     console.log("given number is odd" , no);
}
// Task 5
let age = 16;
if(age >= 18){
    console.log("you are eligible for vote");
}
else{
    console.log("you are not eligible for vote");
}
// Task 6
let cal = ((10 + 5) * 3 - 2) / (4 % 3) - 7
console.log(cal);

