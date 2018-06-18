// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

document.querySelector('#buttonSubmit').addEventListener('click',function makeGrid(event) {
  const rows = document.querySelector('#inputHeight').value;
  const columns = document.querySelector('#inputWidth').value;
  const table = document.querySelector('#pixelCanvas');

  EmptyMatrix();

  for (let i = 0; i < rows; ++i)
  {
    let tr_element = document.createElement('tr');

    for (let j = 0; j < columns; ++j)
    {
      let td_element = document.createElement('td');
      tr_element.appendChild(td_element);
    }

    table.appendChild(tr_element);

    event.preventDefault();
  }
});

function EmptyMatrix() {
  const tr_node_list = document.querySelectorAll('table tr');

  for (let i = 0; i < tr_node_list.length; ++i)
  {
    document.querySelector('table').removeChild(tr_node_list[i]);
  }
}
