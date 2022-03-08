console.dir(document);

//changing innerText and innerHTML
const listedItem = Array.prototype.slice.call(document.getElementsByClassName('listedItem'));

listedItem[5].style.color = "red";
listedItem[5].style.backgroundColor = "yellow";

listedItem[5].innerText = "<em>Item 4 Changed.</em>";
console.log(listedItem[5].textContent);
listedItem[5].innerHTML = "<em>Item 4 Changed.</em>";
console.log(listedItem[5].textContent);

console.log(listedItem);

//changing attribute
const link = document.querySelector("a");

link.getAttribute("href");
link.setAttribute("href", "https://www.facebook.com/rko.jishan");

//changing className and adding another className
link.className = "link";
link.classList.add("a");
//console.log(link);

const a = document.querySelector(".a");
console.log(a)

//traversing to next sinbling through children method
const orderedList = document.querySelector("#ol1");
const orderedListChildren = [...orderedList.childNodes];

console.log(orderedListChildren);
console.log(orderedListChildren[0].nextElementSibling.nextElementSibling.parentElement.parentElement.textContent);

//nodeName and NodeType method
//nodeType values:
    // 1 - Element
    // 2 - Attribute (deprecated)
    // 3 - Text node
    // 8 - Comment
    // 9 - Document itself
    // 10 - Doctype
console.log(orderedListChildren[7].nodeName);
console.log(orderedListChildren[7].nodeType);

//creating element
const newLi = document.createElement("li");
newLi.id = "li9";
newLi.classList.add("listedItem");
newLi.appendChild(document.createTextNode("<em>Item 5 added.</em>"));
newLi.innerHTML = "<em>Item 5 added.</em>";

console.log(newLi);
orderedList.appendChild(newLi);
console.log([...orderedList.children]);
console.log(orderedList);

//updating element
const heading = document.querySelector("h1");

const newHeading = document.createElement("h1");
newHeading.appendChild(document.createTextNode("DOM Manipulation"));
newHeading.id = "h1";

const headingParent = heading.parentElement;

//headingParent.replaceChild(newHeading, heading);
heading.replaceWith(newHeading);

console.log(headingParent.firstElementChild);

//removing element
//newLi.remove();
orderedList.removeChild(orderedList.lastElementChild);

console.log(orderedList.lastElementChild);

//DOM event
// orderedList.lastElementChild.addEventListener("click", function(event) {
//     console.log(event);
//     alert("Item 4 Changed.");
// });
