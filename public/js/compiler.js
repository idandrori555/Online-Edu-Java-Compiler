// Compiler functionality
const output = document.getElementById("output");

// Global compile function
window.compile = function() {
    // Get the code from the editor
    const code = window.getEditor().getValue();
    
    // Show compiling indicator
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = '<div class="compiling-indicator"><div class="spinner"></div> Compiling...</div>';
    
    // Disable compile button during compilation
    const compileButton = document.querySelector('.compile-button');
    if (compileButton) {
        compileButton.disabled = true;
        compileButton.classList.add('compiling');
    }
    
    // Send the code to the server for compilation
    fetch('/api/java', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code }),
    })
    .then(response => response.json())
    .then(data => {
        // Display the output
        outputElement.textContent = data.out;
        
        // Re-enable compile button
        if (compileButton) {
            compileButton.disabled = false;
            compileButton.classList.remove('compiling');
        }
    })
    .catch(error => {
        // Display any errors
        outputElement.textContent = 'Error: ' + error.message;
        
        // Re-enable compile button
        if (compileButton) {
            compileButton.disabled = false;
            compileButton.classList.remove('compiling');
        }
    });
};

// Function to setup the compile button
window.setupCompileButton = function() {
    // Create compile button
    const compileButton = document.createElement('button');
    compileButton.className = 'compile-button';
    compileButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Compile';
    compileButton.onclick = window.compile;
    
    // Add button to the document
    document.querySelector('.panel-tabs').appendChild(compileButton);
};

// Add compile button immediately
document.addEventListener('DOMContentLoaded', function() {
    window.setupCompileButton();
    
    // Add CSS for the compile button
    const style = document.createElement('style');
    style.textContent = `
        .compile-button {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 15px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: all 0.2s ease;
            z-index: 1000;
        }
        
        .compile-button:hover {
            background-color: #45a049;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .compile-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 3px rgba(0,0,0,0.2);
        }
        
        .compile-button svg {
            width: 16px;
            height: 16px;
        }
        
        /* Hide problems tab */
        .problems-tab {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
}); 