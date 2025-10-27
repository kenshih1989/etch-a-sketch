const container = document.querySelector('.container');
let gridSize = 25; // Number of rows/columns in the grid

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
        
        // Set the size of the column (square)
        colDiv.style.width = `${squareSizeWidth}px`;   // Set width of each square
        colDiv.style.height = `${squareSizeHeight}px`; // Set height of each square
        
        // Append the column to the row
        rowDiv.appendChild(colDiv);
    }

    // Append the row to the container
    container.appendChild(rowDiv);
}