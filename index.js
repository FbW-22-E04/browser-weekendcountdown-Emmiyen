const form = document.querySelector("form");
console.log(form);

const p = document.querySelector("p");
const input = document.querySelector('input')
const button = document.querySelector('button')

let date = new Date()
const weekday = date.getDay
let dayArray = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday']
const today = dayArray[weekday -1]

const remeining = 5 - weekday
console.log(remeining);

form.addEventListener('submit', (e) =>{
    const userName = input.value
e.preventDefault()
p.textContent = `Hallo ${userName}. Today is. Olny 3 days to weekend`
})




// form.addEventListener("submit", (event) => {
// console.log("submit here");
// console.log(userName.value);
// event.preventDefault();
// alert(`Hello ${userName.value}`);
// let today = new Date(Date.now());
// console.log(today.getDay());
// const daysLeft = 6 - today.getDay();
// console.log(daysLeft);
// console.log(today.toLocaleDateString("en-EN", { weekday: "long" }));
// }); 