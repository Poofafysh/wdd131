// Temple array with provided data, updated to include alt property
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        alt: "Aba Nigeria Temple"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        alt: "Manti Utah Temple"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        alt: "Payson Utah Temple"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        alt: "Yigo Guam Temple"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        alt: "Washington D.C. Temple"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        alt: "Lima Perú Temple"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        alt: "Mexico City Mexico Temple"
    }
];

// Function to display temples with correct layout (image on left, text on right)
function displayTemples(templeList) {
    const container = document.getElementById("temple-cards");
    container.innerHTML = ""; // Clear previous cards
    templeList.forEach(temple => {
        const card = document.createElement("div");
        card.className = "temple-card";
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
            <div>
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Size: ${temple.area} sq ft</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filter temples based on criteria and update page title
function filterTemples(filter) {
    let filteredTemples;
    let title;
    switch (filter) {
        case "old":
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            title = "Old Temples (Pre-1900)";
            break;
        case "new":
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            title = "New Temples (Post-2000)";
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area > 90000);
            title = "Large Temples (>90,000 sq ft)";
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            title = "Small Temples (<10,000 sq ft)";
            break;
        default:
            filteredTemples = temples; // Home
            title = "Home";
    }
    document.getElementById("page-title").textContent = title;
    displayTemples(filteredTemples);
}

// Event listeners for navigation
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        filterTemples(filter);
    });
});

// Hamburger menu toggle
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("active");
});

// Initial display (Home)
displayTemples(temples);

// Footer updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;