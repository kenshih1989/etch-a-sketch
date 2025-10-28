let gridSize = 10; //Default grid size

const btnNewGrid = document.querySelector('.btnNewGrid');
btnNewGrid.addEventListener('click', () => {
    gridSize = changeGridSize();
    if (gridSize !== null) {
        clearGrid();
        generateGrid(gridSize);
    }

})

const btnClear = document.querySelector('.btnClear');
btnClear.addEventListener('click', () => {
    clearGrid();
    generateGrid(gridSize);
})

function changeGridSize() {
    gridSize = prompt("Enter the size of the grid between 1 to 100");
    if (gridSize === '') {// Handle empty input
        alert("Please enter a value!");
        return changeGridSize();
    }
    if (!Number.isInteger(Number(gridSize))) {
        alert(`Only integer number is allowed! Please enter again`);
        return changeGridSize();
    } else if (gridSize < 1 || gridSize > 100) {
        alert(`Please enter the size of the grid between 1 to 100`);
        return changeGridSize();
    } else if (gridSize === null) {
        return null; // User cancelled, exit function
    }
    else
        return gridSize;


}

function clearGrid() {
    const container = document.querySelector('.container');
    if (container.hasChildNodes())
        container.replaceChildren(); // Removes all children
}

function generateGrid(gridSize) {
    const container = document.querySelector('.container');

    // Calculate the size of each square based on container width
    let squareSizeWidth = container.clientWidth / gridSize;
    let squareSizeHeight = container.clientHeight / gridSize;
    console.log(`Square Size: ${squareSizeWidth}px x ${squareSizeHeight}px`);

    // Loop to create rows and columns
    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        // Create columns inside each row
        for (let colIndex = 0; colIndex < gridSize; colIndex++) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('column');
            colDiv.style.backgroundColor = 'white'; //Default background color

            // Set the size of the column (square)
            colDiv.style.width = `${squareSizeWidth}px`;
            colDiv.style.height = `${squareSizeHeight}px`;

            colDiv.addEventListener('mouseenter', () => {
                changeBackgroundColor(colDiv)
            });

            // Append the column to the row
            rowDiv.appendChild(colDiv);
        }
        // Append the row to the container
        container.appendChild(rowDiv);
    }
}

function changeBackgroundColor(colDiv) {
    colDiv.style.backgroundColor = randomColor();
}

function randomColor() {
    let r = Math.floor(Math.random() * 256) + 1;
    let g = Math.floor(Math.random() * 256) + 1;
    let b = Math.floor(Math.random() * 256) + 1;

    return `rgb(${r}, ${g}, ${b})`;
}

generateGrid(gridSize);