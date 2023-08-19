// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get the publish button element
    var publishBtn = document.getElementById("publishBtn");

    // Add an event listener to the publish button
    publishBtn.addEventListener("click", function () {
        var titleInput = document.getElementById("exampleFormControlInput1");
        var contentTextarea = document.getElementById("exampleFormControlTextarea1");

        var title = titleInput.value;
        var content = contentTextarea.value;

        if (title && content) {
            // Create a new blog card with the entered title and content
            createBlogCard(title, content);

            // Clear the input fields
            titleInput.value = "";
            contentTextarea.value = "";
        }
    });

    // Function to create a new blog card
    function createBlogCard(title, content) {
        var cardContainer = document.querySelector(".crud-container");

        var newCard = document.createElement("div");
        newCard.className = "card";
        newCard.innerHTML = `
            <div class="middle2">
                <h1>${title}</h1>
                <p>Posted on ${getCurrentDate()}</p>
            </div>
            <div class="para">${content}</div>
            <button class="edit" name="edit">edit</button>
            <button class="delete" name="delete">delete</button>
            <br><br>
        `;

        cardContainer.appendChild(newCard);
    }

    // Function to get the current date in the format: Month Day, Year
    function getCurrentDate() {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString(undefined, options);
    }

    // Add event listeners to edit and delete buttons (delegated to card container)
    document.querySelector(".crud-container").addEventListener("click", function (event) {
        if (event.target.classList.contains("edit")) {
            // Handle edit button click
            var card = event.target.closest(".card");
            var title = card.querySelector(".middle2 h1").textContent;
            var content = card.querySelector(".para").textContent;

            // Populate the input fields with the card content for editing
            document.getElementById("exampleFormControlInput1").value = title;
            document.getElementById("exampleFormControlTextarea1").value = content;
        } else if (event.target.classList.contains("delete")) {
            // Handle delete button click
            var card = event.target.closest(".card");
            card.remove();
        }
    });
});



// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get the publish button element
    var publishBtn = document.getElementById("publishBtn");

    // Add an event listener to the publish button
    publishBtn.addEventListener("click", function () {
        var titleInput = document.getElementById("exampleFormControlInput1");
        var contentTextarea = document.getElementById("exampleFormControlTextarea1");

        var title = titleInput.value;
        var content = contentTextarea.value;

        if (title && content) {
            // Create a new blog card with the entered title and content
            createBlogCard(title, content);

            // Clear the input fields
            titleInput.value = "";
            contentTextarea.value = "";
        }
    });

    // Function to create a new blog card
    function createBlogCard(title, content) {
        var cardContainer = document.querySelector(".crud-container");

        var newCard = document.createElement("div");
        newCard.className = "card";
        newCard.innerHTML= `
            <img src="placeholder-image.jpg" alt="image" width="90px" height="90px">
            <div class="middle2">
                <h1>${title}</h1>
                <p>Posted on ${getCurrentDate()}</p>
            </div>
            <div class="para">${content}</div>
            <button class="edit" name="edit">edit</button>
            <button class="delete" name="delete">delete</button>
            <br><br>
        `;

        cardContainer.appendChild(newCard);
    }

    // Function to get the current date in the format: Month Day, Year
    function getCurrentDate() {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString(undefined, options);
    }

    // Add event listeners to edit and delete buttons (delegated to card container)
    document.querySelector(".crud-container").addEventListener("click", function (event) {
        if (event.target.classList.contains("edit")) {
            // Handle edit button click
            var card = event.target.closest(".card");
            var title = card.querySelector(".middle2 h1").textContent;
            var content = card.querySelector(".para").textContent;

            // Populate the input fields with the card content for editing
            document.getElementById("exampleFormControlInput1").value = title;
            document.getElementById("exampleFormControlTextarea1").value = content;
        } else if (event.target.classList.contains("delete")) {
            // Handle delete button click
            var card = event.target.closest(".card");
            card.remove();
        }
    });
});

