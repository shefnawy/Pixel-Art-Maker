// Select color input
let colorInput = document.getElementById("colorPicker");
// Select size input
let sizePicker = document.getElementById("sizePicker");
let pixelCanvas = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
makeGrid();

//submit button
sizePicker.onsubmit = function(e) {
  e.preventDefault();
  pixelCanvas.firstElementChild.remove();
  makeGrid();
};

//make grid function
function makeGrid() {
  // Your code goes here!
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  for (let i = 0; i < height; i++) {
    let row = pixelCanvas.insertRow(i);
    for (let j = 0; j < width; j++) {
      let column = row.insertCell(j);
      column.addEventListener("click", e => {
        column.style.backgroundColor = colorInput.value;
      });
    }
  }
}
