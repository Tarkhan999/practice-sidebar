"use strict";

// let boxElem=document.querySelector(".box");
//console.log(boxElem.firstElementChild);
//console.log(boxElem.lastElementChild);
// console.log(boxElem.firstElementChild.nextElementSibling);
// console.log(boxElem.children[0]);
// console.log(boxElem.lastElementChild.previousElementSibling.previousElementSibling)
// let h1=document.querySelector("h1");
// console.log(h1.parentNode);

//  let h1=document.querySelector("h1");
// console.log(h1.closest(".test"));

// let btns=document.querySelectorAll("button");
// btns.forEach(btn => {
//     btn.addEventListener("click",function(){
//         alert("Hello");
//     })
// });

// let btns = document.querySelectorAll("button");
// btns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     console.log(this.innerText);
//   });
// });



// let btn=document.querySelector("button");
// btn.addEventListener("dblclick",function(){
//     alert("clicked");
// })

// let btn=document.querySelector("button");
// btn.addEventListener("mouseover",function(){
//     console.log("clicked");
// })

// let btn=document.querySelector("button");
// let div=document.querySelector(".item");
// btn.addEventListener("mouseover",function(){
//     div.style.backgroundColor="green";
// })

// btn.addEventListener("mouseout",function(){
//     div.style.backgroundColor="blue";
// })

// let input=document.querySelector("input");
// input.addEventListener("keyup",function(){
// console.log("tested");
// })

// let input=document.querySelector("input");
// input.addEventListener("keydown",function(){
// console.log("tested");
// })





// let input=document.querySelector("input");
// let validationMsj=document.querySelector("span");
// input.addEventListener("keyup",function(){
//     let inputValue=input.value;
//     if(inputValue==""){
//         validationMsj.classList.remove("d-none");
//     }
//     else{
//         validationMsj.classList.add("d-none");
//     }
// })




//sidebar


// let closeIcon=document.querySelector(".sidebar .icons .close");

// let openIcon=document.querySelector(".sidebar .icons .open");
// let sidebar=document.querySelector(".sidebar");

// openIcon.addEventListener("click",function(){
//   sidebar.classList.remove("move-sidebar");
//   this.classList.add("d-none");
//   this.previousElementSibling.classList.remove("d-none");
// })

// closeIcon.addEventListener("click",function(){
//   sidebar.classList.add("move-sidebar");
//   this.classList.add("d-none");
//   this.nextElementSibling.classList.remove("d-none");
// })