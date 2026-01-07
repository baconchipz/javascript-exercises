const container = document.querySelector('#container'); // Select the container div

    const content = document.createElement("div"); //create a new div, storing it in variable content
    content.classList.add("content"); //add a class to content div
    content.textContent = "This is the glorious text-content!"; //add some text to content div

    const content2 = document.createElement("p");
    content2.classList.add("content1");
    content2.textContent = "Hey i'm red!";
    content2.style.cssText = "color: red;"; //inline style to make text red"

    const content3 = document.createElement("h3"); //element, class, text
    content3.classList.add("content3");
    content3.textContent = "I'm a blue h3!";
    content3.style.cssText = "color: blue;"; //inline style to make text blue"

const contatiner2 = document.createElement("div"); //create a new div, storing it in variable container2
contatiner2.style.cssText = "border: 2px solid black; background-color: pink;"; //add style to container2 div

    const heading1 = document.createElement("h1");
    heading1.textContent = "I'm in a div"; //add text to heading1
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "ME TOO!"; //add text to paragraph1
    contatiner2.appendChild(heading1); //append heading1 to container2
    contatiner2.appendChild(paragraph1); //append paragraph1 to container2

container.appendChild(contatiner2); //append container2 to main container





container.appendChild(content); //finally apend div to container
container.appendChild(content2);
container.appendChild(content3);

const btn = document.querySelector('#btn'); //select button with id btn
function alertFunction() {
    alert("YAY YOU DID IT!"); //function to alert message //using named functions is best
} 
// btn.addEventListener('click', alertFunction); // select button and add click event listener that triggers alertFunction
btn.addEventListener("click", function (e){
    console.log(e.target); //log event target to console
    e.target.style.background = "blue"; //change button background to blue on click
    // e is a event object that contains info about the event that occurred, in this case e is the click event
})
console.log("Hello! The script is running!");

const buttons = document.querySelectorAll('#container2 button'); //select all buttons inside container2, descendant selector
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id); //alert the id of the button that was clicked
    });
});
//1. select container 
//2. create new element
//3. add class to element
//4. add text to element
//5. insert element into selected contained
