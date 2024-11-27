// script.js

// Example reviews array
const reviews = [
    {
        album: "Rhythm Nation 1814",
        artist: "Janet Jackson",
        review: "An absolute masterpiece. Clever production and a cohesive message!"
    },
    {
        album: "Mother's Milk",
        artist: "Red Hot Chili Peppers",
        review: "A powerful mix of metal energy and funk."
    },
    {
        album: "Poison",
        artist: "Bell Biv DeVoe",
        review: "An enjoyable listen, but the production was less impressive than expected."
    }
];

// Function to display reviews on the page
function displayReviews() {
    const reviewsContainer = document.getElementById("reviews-container");

    reviews.forEach(review => {
        // Create a div for each review
        const reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");

        // Create elements for album name and review text
        const albumTitle = document.createElement("h3");
        albumTitle.textContent = review.album;

        const reviewText = document.createElement("p");
        reviewText.textContent = review.review;

        // Append the elements to the review div
        reviewDiv.appendChild(albumTitle);
        reviewDiv.appendChild(reviewText);

        // Append the review div to the reviews container
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Call the function to display reviews when the page loads
window.onload = displayReviews;