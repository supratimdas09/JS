// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let len = cars.length;

// let text = "";
// for (let i = 0; i< len; i++)
// {
//     text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;


// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let len = cars.length;

// let i = 2;
// let text = "";

// for (; i < len; i++)
// {
//     text += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;





// let text = "";

// for(let i = 0; i < 10; i++)
// {
//     if(i === 3)
//     {
//         break;
//     }
//     text += "The number is "+ i + "<br>";
// }

// document.getElementById("demo").innerHTML =text;





// let day;
// switch(new Date().getDay())
// {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }
// document.getElementById("demo").innerHTML = "Today is " + day;




// let text = "";
// loop1: for (let j = 1; j < 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {
//     if (i === 3) { break loop1; }
//     text += i + "<br>";
//   }
// }
// document.getElementById("demo").innerHTML = text;





// let text = "";

// for(let i=0; i<=10; i++)
// {
//     if(i === 3)
//     {
//         continue;
//     }
//     text += i * 10 + "<br>";
// }

// document.getElementById("demo").innerHTML = text;





// let x = 5;
// let y = 6;
// let z = x + y;

// document.getElementById("demo").innerHTML = "The  value of z is : "+ z;





// let age = 18;
// let text = "Unknown";

// if( age >= 18){
//     text = "You are an adult";
// }
// else{
//     text = "You are not an adult";
// }

// document.getElementById("demo").innerHTML = "The group is : " + text;



// const cars = [];
// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";

// document.getElementById("demo").innerHTML = cars[0];



// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Opel";
// document.getElementById("demo").innerHTML = cars[0];



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let myList = fruits.toString();
// document.getElementById('demo').innerHTML = myList;



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById('demo').innerHTML = fruits.join("*");



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById('demo').innerHTML = fruits.pop();
// document.getElementById('demo2').innerHTML = fruits;



// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.fontFamily = "verdana";
// h1.style.textTransform = "capitalize";


// let buynow = document.querySelectorAll(".buy-now");
// console.log(buynow);



// let heading = document.querySelector("#heading");
// heading.textContent = "Welcome to my website";


// let lis = document.querySelectorAll("li");
// for(let i=0;i<lis.length;i++)
// {
//     console.log(lis[i].textContent);
// }


// let p = document.querySelector("p");
// p.innerHTML = "<b>Updated</b> by Javascript";


// document.querySelector("img").setAttribute("src", "https://images.unsplash.com/photo-1773847400278-3b409bd5aa76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")


// let a = document.querySelector("a");
// a.href = "https://www.google.com";



// let div = document.querySelector("div");
// div.setAttribute("title", "this is a title");


// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");


// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "New Apple";
// ul.appendChild(li);



// let img = document.createElement("img");
// img.setAttribute(
//     "src",
//     "https://img.freepik.com/premium-vector/default-avatar-profile-icon-gray-placeholder-vector-illustration_514344-14757.jpg?semt=ais_hybrid&w=740&q=80"
// );
// document.querySelector("div").prepend(img);



// let ul = document.querySelector("ul")
// let li = document.querySelector("li");

// ul.removeChild(li);



// let items = document.querySelectorAll("ul li");

// items.forEach((item, index) => {
//   if ((index + 1) % 2 === 0) {
//     item.classList.add("highlight");
//   }
// });




// let p = document.querySelectorAll("p");
// p.forEach((item) => {
//     item.style.fontSize = "20px";
// })




// let p1 = document.querySelector("p");

// p1.addEventListener("click", function(){
//     p1.style.fontSize = "20px";
//     p1.style.fontWeight = "bold";
//     p1.style.color = "red";
// });


// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     p.style.color = "Green";
// })




// let p = document.querySelector('p');
// p.addEventListener("dblclick", function(){
//     p.style.color = "red";
// })



// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     p.style.color = "red";
// })



// let input = document.querySelector("input");
// input.addEventListener("input", function(){
//     console.log("Typed");
    
// })


// let input = document.querySelector("input");
// input.addEventListener("input", function(details){
//     console.log(details.data);    
// })




// let inp = document.querySelector("input");
// inp.addEventListener("input", function(dats){
//     if(dats.data !== null)
//     {
//         console.log(dats.data);        
//     }
// })



// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change", function(dets){
//     console.log(dets.target.value);
    
// })

// sel.addEventListener("change", function(dets){
//     device.textContent = `${dets.target.value} Device Selected`;
// });
