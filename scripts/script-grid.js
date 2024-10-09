
const container = document.querySelector("#container");

let customSizeGrid = 0;
let maxSize = 100;
let gridItemSize = 34;

document.body.onload = addElement(16);


function addElement(gridSize) {
    if (gridSize <= maxSize) {

        let gridRealSize = gridItemSize * gridSize;
        container.style.width = `${gridRealSize}px`;
                container.style.height = `${gridRealSize}px`;
        
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const gridItem = document.createElement("div");
                gridItem.classList.add("grid-item");
                gridItem.addEventListener('mouseover',
                    hover
                )
                container.appendChild(gridItem);
            }
        }
    }
}

function hover(){
    this.style.backgroundColor = getRandomHexColor();
}


function getRandomHexColor() {
    const randomValue = Math.floor(Math.random() * 16777215);
    return "#" + randomValue.toString(16).padStart(6, '0');
 }


 function ClearContainer(){
    container.innerHTML = '';
 }

 function UserInput(){
    customSizeGrid = prompt("Enter how many squares should be on a side (max 100): ")
 }

 function CreateCustomGrid(){
    ClearContainer();

    UserInput();
    
    addElement(customSizeGrid);
 }

