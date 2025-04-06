// Product array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate product options
function populateProducts() {
    const productSelect = document.getElementById("product-name");
    if (productSelect) {
        // Ensure the placeholder matches the scrambled text
        productSelect.querySelector("option[disabled]").textContent = "Pick an Item ...";
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
}

// Update feedback counter on confirmation page
function updateReviewCounter() {
    const reviewCountElement = document.getElementById("review-count");
    if (reviewCountElement) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem("reviewCount", reviewCount);
        reviewCountElement.textContent = reviewCount;
    }
}

// Update last modified date in footer
function updateLastModified() {
    const lastModifiedElements = document.querySelectorAll("#lastModified");
    lastModifiedElements.forEach(element => {
        element.textContent = document.lastModified;
    });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    populateProducts();
    updateReviewCounter();
    updateLastModified();
});