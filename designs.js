// Select color input
let colorPicker = document.querySelector("#colorPicker");

// Select size input

let canvas = document.querySelector("#pixelCanvas");

// When size is submitted by the user, call makeGrid()
let form = document.querySelector("#sizePicker");
let formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted !");
};

form.addEventListener("submit", makeGrid);

function makeGrid(e) {
    //got precised number of children by using .children rather than .childrenNodes

    //check if the canvas has children if so clear it
    if (canvas.hasChildNodes()) {
        for (let x = canvas.children.length - 1; x >= 0; x--) {
            canvas.removeChild(canvas.children[x]);
        }
    }

    let gridHeight = Number(document.querySelector("#inputHeight").value);

    let gridWidth = Number(document.querySelector("#inputWidth").value);

    //height will adjust table # of tr/row
    for (let i = 0; i < gridHeight; i++) {
        let tr = document.createElement("tr");

        //width will adjust table # of td/columns
        for (let j = 0; j < gridWidth; j++) {
            let td = document.createElement("td");
            tr.append(td);
        }
        canvas.append(tr);
    }

    e.preventDefault();
}

canvas.addEventListener("click", function (e) {
    if (e.target.nodeName === "TD") {
        e.target.style.backgroundColor = colorPicker.value;
    }
});
