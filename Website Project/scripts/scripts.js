// Ride array with sports bike ride data, using local images
const rides = [
    {
        rideName: "Fern Hill Freeway",
        location: "Hillsboro to Forest Grove",
        date: "2025, April, 5",
        distance: 40,
        imageUrl: "images/ride-1.jpg",
        alt: "Fern Hill Freeway Ride",
        difficulty: "easy"
    },
    {
        rideName: "Pumpkin Ridge Loop",
        location: "Helvetia to Banks",
        date: "2025, April, 12",
        distance: 55,
        imageUrl: "images/ride-2.jpg",
        alt: "Pumpkin Ridge Loop Ride",
        difficulty: "medium"
    },
    {
        rideName: "Woodland Loop",
        location: "Hillsboro to Yamhill",
        date: "2025, April, 19",
        distance: 62,
        imageUrl: "images/ride-3.webp",
        alt: "Woodland Loop Ride",
        difficulty: "hard"
    }
];


function displayRides(rideList) {
    const container = document.getElementById("ride-cards");
    if (container) {
        container.innerHTML = "";
        rideList.forEach(ride => {
            const card = document.createElement("div");
            card.className = "ride-card";
            card.innerHTML = `
                <img src="${ride.imageUrl}" alt="${ride.alt}" loading="lazy">
                <div>
                    <h3>${ride.rideName}</h3>
                    <p>Location: ${ride.location}</p>
                    <p>Date: ${ride.date}</p>
                    <p>Distance: ${ride.distance} miles</p>
                    <p>Difficulty: ${ride.difficulty}</p>
                </div>
            `;
            container.appendChild(card);
        });
    }
}


function displayFeaturedRide() {
    const container = document.getElementById("featured-ride-card");
    if (container) {
        const featuredRide = rides[0];
        container.innerHTML = `
            <div class="featured-ride-card">
                <img src="${featuredRide.imageUrl}" alt="${featuredRide.alt}" loading="lazy">
                <div>
                    <h3>${featuredRide.rideName}</h3>
                    <p>Location: ${featuredRide.location}</p>
                    <p>Date: ${featuredRide.date}</p>
                    <p>Distance: ${featuredRide.distance} miles</p>
                    <p>Difficulty: ${featuredRide.difficulty}</p>
                </div>
            </div>
        `;
    }
}


function filterRides(filter) {
    let filteredRides;
    let title;
    switch (filter) {
        case "easy":
            filteredRides = rides.filter(ride => ride.difficulty === "easy");
            title = "Easy Rides";
            break;
        case "medium":
            filteredRides = rides.filter(ride => ride.difficulty === "medium");
            title = "Medium Rides";
            break;
        case "hard":
            filteredRides = rides.filter(ride => ride.difficulty === "hard");
            title = "Hard Rides";
            break;
        default:
            filteredRides = rides;
            title = "Upcoming Rides";
    }
    const pageTitle = document.getElementById("page-title");
    if (pageTitle) pageTitle.textContent = title;
    displayRides(filteredRides);
}


document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        window.location.href = href;
    });
});


const difficultyFilter = document.getElementById("difficulty-filter");
if (difficultyFilter) {
    difficultyFilter.addEventListener("change", e => {
        const filter = e.target.value;
        filterRides(filter);
    });
}


document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("active");
});


const form = document.getElementById("membership-form");
if (form) {

    const savedData = localStorage.getItem("membershipForm");
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById("name").value = data.name || "";
        document.getElementById("email").value = data.email || "";
        document.getElementById("bike").value = data.bike || "";
        document.getElementById("experience").value = data.experience || "";
    }

    form.addEventListener("submit", e => {
        e.preventDefault();
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            bike: document.getElementById("bike").value,
            experience: document.getElementById("experience").value
        };
        localStorage.setItem("membershipForm", JSON.stringify(formData));
        document.getElementById("form-message").textContent = "Thank you for joining! We'll contact you soon.";
        form.reset();
    });
}


displayRides(rides);
displayFeaturedRide();


document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;