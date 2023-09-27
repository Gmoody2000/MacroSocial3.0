// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners and functionality here
    const form = document.getElementById("input-form");
    const apiKey = 'YOUR_API_KEY';
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Get the food name entered by the user
        const foodNameInput = document.getElementById("food-name");
        const foodName = foodNameInput.value;
        
        // Make an API request to fetch nutritional information
        fetch(`https://api.example.com/nutrition?food=${foodName}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                // Process the API response data and update the displayed macros
                const macrosDisplay = document.getElementById("macros-display");
                macrosDisplay.innerHTML = `
                    <h2>Nutritional Information for ${foodName}</h2>
                    <p>Calories: ${data.calories}</p>
                    <p>Protein: ${data.protein}g</p>
                    <p>Carbohydrates: ${data.carbohydrates}g</p>
                    <p>Fat: ${data.fat}g</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});
