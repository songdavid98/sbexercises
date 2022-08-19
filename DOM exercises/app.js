let container = document.getElementById("container");
console.log(container);

let container2 = document.querySelector("#container");
console.log(container2);

let second = document.querySelectorAll("li.second");
console.log(second);

let olthird = document.querySelector("ol > li.third");
console.log(olthird);

container.innerHTML = "Hello\n" + container.innerHTML;

let footer = document.querySelector(".footer");
footer.classList.add("main");
console.log(footer);
footer.classList.toggle("main");
console.log(footer);

let four = document.createElement('li');
four.innerText = "four";
let ul = document.querySelector("ul");
console.log(ul);
ul.append( four );

let ol = document.querySelector("ol");
for (let li of ol.children) {
    li.style.backgroundColor = "green";
}
footer.innerText = "test";
footer.style.backgroundColor = "pink";
footer.remove();
