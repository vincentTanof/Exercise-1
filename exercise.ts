// Number 1
let rectLength:number = 5;
let rectWidth:number = 3;
let rectArea:number = rectLength * rectWidth;

console.log("The Area of the Rectangle = "+rectArea);


// Number 2
let rectPerimeter:number = (2*rectLength) + (2*rectWidth);

console.log("The Perimeter of the Rectangle = "+rectPerimeter);

// Number 3
let radius:number = 5;
let pi:number = Math.PI;

// diameter
let diameter:number = 2 * radius;
console.log("The Diameter = "+diameter);

// circumference
let circumference:number = diameter * pi;
console.log("The Circumference = "+circumference)

// area
let area:number = pi * radius * radius;
console.log("The Area = "+area);

// Number 4
let angle1:number = 80;
let angle2:number = 65;

// Find remaining angle
let angle3:number = 180 - (angle1+angle2);
console.log("The Last Angle = "+angle3);

// Number 5
let days = 400;

let year = days / 365;

// get number of years -> 1
let yearCount = Math.floor(year);

// check remaining months and days
let remainingMonth = days - 365*yearCount;

let month = remainingMonth / 30;

// get number of months -> 1
let monthCount = Math.floor(month);

// get remaining days -> 5
let remainingDays = remainingMonth - 30*monthCount;

let messageYear = "year";

if(yearCount>1){
    messageYear = "years";
}

let messageMonth = "month";

if(monthCount>1){
    messageMonth = "months";
}

let messageDay = "day";

if(remainingDays>1){
    messageDay = "days";
}

console.log(days + " days has "+yearCount+" " +messageYear+" "+ "and " +monthCount+" " + messageMonth + " and " + remainingDays + " " + messageDay);

// Number 5 cara Kak Bryan
const days5:number = 700;
const years: number = Math.floor((days5 / 365));
const months: number = Math.floor(((days5 % 365) / 30));
const dayss: number = Math.floor(((days5 % 365) %30));
console.log(`${days5} days -> ${years} year, ${months} month, ${dayss} day`);

// Number 6
const date1: Date = new Date("2022-01-20");
const date2: Date = new Date("2022-03-30");
const perbedaanDate = (date2.getTime() - date1.getTime()) / (24 * 3600 * 1000) ;
console.log(perbedaanDate);