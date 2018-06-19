document.querySelector('#buttonSubmit').addEventListener('click',function makeGrid(event) {
  const rows = document.querySelector('#inputHeight').value;
  const columns = document.querySelector('#inputWidth').value;
  const table = document.querySelector('#pixelCanvas');

  EmptyMatrix();

  for (let i = 0; i < rows; ++i)
  {
    let tr_element = document.createElement('tr');

    tr_element.classList.add('canvas_pixel');

    for (let j = 0; j < columns; ++j)
    {
      let td_element = document.createElement('td');

      td_element.classList.add('canvas_pixel');

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

document.querySelector('#pixelCanvas').addEventListener('click',SetPixelColor);

function SetPixelColor(event) {
 const usr_color = document.querySelector('#colorPicker').value;
 const pixel_color = event.target.style.backgroundColor;

 if (hexToRgb(usr_color) != pixel_color)
 {
     event.target.style.backgroundColor = usr_color;
 }
 else
 {
     event.target.style.backgroundColor = null;
 }
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? ('rgb('+parseInt(result[1], 16)+', '
                          +parseInt(result[2], 16)+', '
                          +parseInt(result[3], 16)+')') : null;
}
