//Exercise - 1
const jSFile = document.querySelector("script");

const div = document.createElement("div");
div.classList.add("container");
div.id = "container";
jSFile.insertAdjacentElement("beforebegin", div);

const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.innerText = "Product List";
div.appendChild(h1);

const ul = document.createElement("ul");
ul.className = "product-collection";
ul.classList.add("mb-3");
div.appendChild(ul);

const li = document.createElement("li");
li.classList.add("product-collection-item");
li.id = "sample";
li.innerText = "Shoes";
ul.appendChild(li);

// console.log(ul);
// console.log(document.querySelector("body"));

//Exercise - 2
const button = document.createElement("button");
button.id = "button";
button.innerText = "Click Here";
jSFile.insertAdjacentElement("beforebegin", button);

const p = document.createElement("p");
p.id = "p";
p.classList.add("p");
jSFile.insertAdjacentElement("beforebegin", p);

button.addEventListener("click", event => {
    console.log("clicked on the button");
});

button.addEventListener("dblclick", event => {
    console.log("double clicked on the button");
});

document.addEventListener("keydown", event => {
    p.textContent += ` ${event.code}`;
});

document.addEventListener("keyup", event => {
    p.textContent += ` ${event.code}`;
});

document.addEventListener("keypress", event => {
    p.textContent += ` ${event.code}`;
});

//Exercise - 4
const div2 = document.createElement("div");
div2.classList.add("container-2");
div2.id = "container-2";
// div.insertAdjacentElement("beforebegin", div2);
document.querySelector("body").insertBefore(div2, div);

div2.insertAdjacentHTML("afterBegin", "<h1 class = 'h1-2'>This is inserted using insertAdjacentHTML & insertBefore</h1>");
const newH1 = document.querySelector(".h1-2");

const newP = document.createElement("p");
newH1.insertAdjacentElement("afterEnd", newP);
newP.innerText = "This is inserted using insertAdjacentElement";

// console.log(newP);