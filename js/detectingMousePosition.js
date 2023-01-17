// Get the canvas element reference
const board = document.getElementById("board");

// Getting the 2d context from the canvas element
const context = board.getContext("2d");

// Fill the backaground of the board
board.style.backgroundColor = "#ac7";

// Setting widht and height for the board 
board.width = window.innerWidth;
board.height = window.innerHeight;

function getMousePosition(e) {
    // Getting relative position of the mouse cursor in the context
    let [x, y] = [e.offsetX, e.offsetY];

    // Send position to print it
    printMousePosition(x, y);
}

function printMousePosition(x, y) {
    //Clearing the context view to avoid overwriting the mouse position 
    context.clearRect(0, 0, board.width, board.height);
            
    // Printing pointer position
    context.fillText(`X = ${x}, Y = ${y}`, 2, 10);
}

board.addEventListener("mousemove", getMousePosition);

board.addEventListener("mouseout", () => context.clearRect(0, 0, board.width, board.height))