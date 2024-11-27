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

// Function to display reviews
function displayReviews() {
    const reviewsContainer = document.getElementById('reviews-container');

    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        reviewDiv.innerHTML = `
            <h3>${review.album}</h3>
            <h4>by ${review.artist}</h4>
            <p>${review.review}</p>
        `;

        reviewsContainer.appendChild(reviewDiv);
    });
}

// Call the function when the page loads
window.onload = displayReviews;
