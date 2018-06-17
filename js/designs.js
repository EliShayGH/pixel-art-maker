// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const sizePickerElement = document.querySelector('#sizePicker');
const rows_input = document.querySelector('#inputHeight');
const columns_input = document.querySelector('#inputWidth');
const button = document.querySelector('#buttonSubmit');

button.addEventListener('click',function(event){
    console.log('click');
    makeGrid();
    event.preventDefault();
    const rows = rows_input.value;
    const columns = columns_input.value;
    console.log('hello my matrix is ' + rows + '/' + columns);
});
//
// sizePickerElement.addEventListener('submit',function(event){
//     console.log('sumbited');
//     event.preventDefault();
// });


function makeGrid() {
  const rows = document.querySelector('#inputHeight').value;
  const columns = document.querySelector('#inputWidth').value;
  const table = document.querySelector('#pixelCanvas');

  // document.querySelector(table).remove('tr');
  // document.querySelector(table).remove('td');

  for (let i = 0; i < rows; ++i)
  {
    let tr_element = document.createElement('tr');

    for (let j = 0; j < columns; ++j)
    {
      let td_element = document.createElement('td');
      tr_element.appendChild(td_element);
    }
    table.appendChild(tr_element);
  }
}
