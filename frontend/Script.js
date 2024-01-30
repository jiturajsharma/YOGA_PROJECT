function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting by default

    // Get form inputs
    var fullNameInput = document.getElementById("fullName");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");

    // Get values
    var fullName = fullNameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();
    var confirmPassword = confirmPasswordInput.value.trim();

    // Simple validation - check if inputs are not empty
    if (!fullName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
    }

    alert("Form submitted successfully!");
}


function scrollToRegistration() {
    var registrationForm = document.getElementById("registrationForm");
    registrationForm.scrollIntoView({ behavior: "smooth" });
}

function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting by default
    // If validation passes, you can submit the form or take other actions
    alert("Form submitted successfully!");
}


function scrollToPricing() {
    // Get the pricing section
    let pricingSection = document.getElementById("pricing-section");

    // Scroll to the pricing section smoothly
    pricingSection.scrollIntoView({ behavior: "smooth" });
}


function animateHeading() {
    const dynamicHeading = document.getElementById("dynamicHeading");
    const texts = ["Discover", "Mindful", "Practices", "Embrace", "Well-Being"];
    let textIndex = 0;

    setInterval(() => {
        let word = texts[textIndex];
        let letters = word.split("");
        let letterIndex = 0;

        // Add letters one by one
        const addInterval = setInterval(() => {
            if (letterIndex < letters.length) {
                dynamicHeading.innerHTML += letters[letterIndex];
                letterIndex++;
            } else {
                clearInterval(addInterval);

                // Remove letters one by one after a delay
                const removeInterval = setInterval(() => {
                    if (letterIndex >= 0) {
                        dynamicHeading.innerHTML = dynamicHeading.innerHTML.slice(0, -1);
                        letterIndex--;
                    } else {
                        clearInterval(removeInterval);

                        // Move to the next word
                        textIndex = (textIndex + 1) % texts.length;
                    }
                }, 100); 
            }
        }, 80); 
    }, 2000); 
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", animateHeading);