//adding event
function eventInfo(event) {
    console.log(event);
    console.log("Type: ", event.type);
    console.log("Target: ", event.target);
    console.log("Text: ", event.target.innerText);
    console.log("offset-X: ", event.offsetX);
    console.log("offset-Y: ", event.offsetY);
    console.log("client-X: ", event.clientX);
    console.log("client-Y: ", event.clientY);
    console.log("Clicked " + event.target.innerText);
}

//orderedList.lastElementChild.addEventListener("click", eventInfo);

//console.log(orderedListChildren)
[...orderedList.children].forEach(child => child.addEventListener("click", eventInfo));

//