const canvas = document.getElementById("pixelCanvas");
// Select color input
// select size input

// when size is submitted y the user, call makeGrid()
function submitForm(){
  const rows = document.getElementById("inputHeight").value;
  const cols = document.getElementById("inputWidth").value;
  makeGrid(rows, cols);
}

function makeGrid(rows, cols) {

  canvas.innerHTML = '';

  for (let i = 0; i< rows; i++){

    let row = canvas.insertRow(i);
    for (let j = 0; j< cols; j++){
      let cell = row.insertCell(j);
      cell.addEventListener('click', function(event){
        event.preventDefault();
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });

    }
  }

}
submitForm();
