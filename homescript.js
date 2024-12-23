function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}

var modal = document.getElementById("myModal");
var minimizedChat = document.getElementById("minimizedChat");

// Show the modal on page load
window.onload = function() {
    modal.style.display = "block"; // Show the modal
}

// Minimize function
function minimizeChat() {
    modal.style.display = "none"; // Hide the modal
    minimizedChat.style.display = "block"; 
    document.getElementById("userProblem").value = ""; 
}

// Close button functionality
document.getElementById("closeBtn").onclick = minimizeChat; // Close button minimizes chat
document.getElementById("minimizeBtn").onclick = minimizeChat; // Minimize button

// Restore modal when minimized chat box is clicked
function restoreModal() {
    minimizedChat.style.display = "none"; // Hide the minimized chat box
    modal.style.display = "block"; // Show the modal again
}

// Submit button functionality
document.getElementById("submitBtn").onclick = function() {
    var problem = document.getElementById("userProblem").value;
    if (problem) {
        alert("Thank you for sharing your problem: " + problem);
        minimizeChat();
    } else {
        alert("Please enter your problem.");
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}