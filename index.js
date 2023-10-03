let countEl = document.getElementById("count-el")  //Model of the h2 tag in the HTML document written in Javascript
let saveEl = document.getElementById("save-el")
let count = 0
function increment () {
    count += 1
    countEl.textContent = count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr //innerText content are not human readable, an alternative is textContent
    countEl.textContent = 0
    count = 0
}



//Basic Challenge on Arithmetric Operators
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
//document.getElementById("count-el").innerText = 5 // We used this element to change the text inside the html tag