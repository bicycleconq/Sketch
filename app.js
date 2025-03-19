const wrap = document.querySelector(".container");
const button = document.querySelector('button');

function createGrid(num){
    // Remove the existing grid if it exists
    wrap.innerHTML = '';

    // Calculate the size of each square based on the number of squares per side
    const squareSize = 960 / num;  // 960px is the fixed size of the pad


    for (let i =0; i < num * num; i++){
        const square = document.createElement("div");
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Initialize the square with a random color
        square.dataset.opacity = 1; 

        function randomColor() {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            return `rgb(${red}, ${green}, ${blue})`;
        }

        square.style.backgroundColor = randomColor();

        // Add hover effect to darken the square progressively
        square.addEventListener('mouseenter', () => {
            // Decrease opacity by 10% each time (max 1 to 0 opacity)
            if (square.dataset.opacity > 0) {
                square.dataset.opacity = Math.max(0, square.dataset.opacity - 0.1);
                square.style.opacity = square.dataset.opacity;
            }
        });

        wrap.appendChild(square);
    }
}

button.addEventListener('click', () => {
    const input = prompt("Enter the number of squares per side (max 100):");

    // Convert the input to a number
    let gridSize = parseInt(input);

    
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        gridSize = 16; // Default value if invalid input
    }

    // Create the new grid with the specified size
    createGrid(gridSize);
})

createGrid(16) // default value
