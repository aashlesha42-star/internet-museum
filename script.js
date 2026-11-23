// ==========================================
// VELTRIX-Ω7 | INTERNET MUSEUM
// INTERACTIVE EXHIBITION SYSTEM
// ==========================================


// EXHIBITION DATABASE

const exhibitionData = {

    "LOST WEBSITES": {
        category: "DIGITAL ARCHIVE / WEB HISTORY",
        year: "ERA: 1990s–2000s",
        number: "ARCHIVE_001",
        fact: "Early websites often used simple HTML layouts, table-based designs, bright backgrounds and animated GIFs. They show how the internet looked before modern web design."
    },

    "FORGOTTEN TRENDS": {
        category: "DIGITAL ARCHIVE / INTERNET CULTURE",
        year: "ERA: 2000s–2010s",
        number: "ARCHIVE_002",
        fact: "Internet trends spread through forums, blogs, videos and early social networks. Many popular online trends disappeared quickly but remain part of internet culture."
    },

    "VINTAGE TECHNOLOGY": {
        category: "DIGITAL ARCHIVE / TECHNOLOGY",
        year: "ERA: 1970s–2000s",
        number: "ARCHIVE_003",
        fact: "Home computers, CRT monitors, floppy disks and early mobile phones changed how people accessed and stored digital information."
    },

    "DIGITAL MEMORIES": {
        category: "DIGITAL ARCHIVE / COMMUNITY STORIES",
        year: "PERSONAL DIGITAL HISTORY",
        number: "ARCHIVE_004",
        fact: "Personal digital memories help document how people used old websites, online games, devices and digital communities."
    }

};


// MODAL ELEMENTS

const archiveModal = document.getElementById("archiveModal");

const closeModal = document.getElementById("closeModal");

const modalOkay = document.getElementById("modalOkay");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalCategory = document.getElementById("modalCategory");

const modalYear = document.getElementById("modalYear");

const modalFact = document.getElementById("modalFact");

const modalImage = document.getElementById("modalImage");


// OPEN EXHIBITION

document.querySelectorAll(".explore-card").forEach(button => {

    button.addEventListener("click", function () {

        const title = this.dataset.title || "DIGITAL ARCHIVE";

        const description = this.dataset.description || "Explore this digital exhibition.";

        const exhibition = exhibitionData[title.toUpperCase()] || {};

        modalTitle.textContent = title;

        modalDescription.textContent = description;

        modalCategory.textContent =
            exhibition.category || "DIGITAL ARCHIVE / DISCOVERY";

        modalYear.textContent =
            exhibition.year || "ERA: UNKNOWN";

        modalFact.textContent =
            exhibition.fact || "This archive preserves a piece of digital history.";

        modalImage.innerHTML = "";

        const archiveNumber = document.createElement("span");

        archiveNumber.textContent =
            exhibition.number || "ARCHIVE_000";

        modalImage.appendChild(archiveNumber);

        archiveModal.classList.add("show");

    });

});


// CLOSE EXHIBITION

function closeExhibition() {

    if (archiveModal) {
        archiveModal.classList.remove("show");
    }

}

if (closeModal) {
    closeModal.addEventListener("click", closeExhibition);
}

if (modalOkay) {
    modalOkay.addEventListener("click", closeExhibition);
}

if (archiveModal) {

    archiveModal.addEventListener("click", function (event) {

        if (event.target === archiveModal) {
            closeExhibition();
        }

    });

}


// ESCAPE KEY

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeExhibition();
    }

});


// SEARCH ARCHIVES

const searchInput =
    document.getElementById("archiveSearch") ||
    document.getElementById("searchInput") ||
    document.querySelector('input[type="search"]');

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        document.querySelectorAll(".explore-card").forEach(button => {

            const card = button.closest(".archive-card, .collection-card") ||
                button.parentElement;

            const cardText = (
                button.textContent + " " +
                (button.dataset.title || "") + " " +
                (button.dataset.description || "")
            ).toLowerCase();

            card.style.display = cardText.includes(searchText)
                ? ""
                : "none";

        });

    });

}


// MOBILE NAVIGATION

const menuToggle =
    document.getElementById("menuToggle") ||
    document.querySelector(".menu-toggle");

const navLinks =
    document.getElementById("navLinks") ||
    document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}


// DIGITAL MEMORY BUTTON

const memoryButton = document.getElementById("memoryButton");

if (memoryButton) {

    memoryButton.addEventListener("click", function () {

        modalTitle.textContent = "DIGITAL MEMORIES";

        modalCategory.textContent =
            "VELTRIX-Ω7 / COMMUNITY ARCHIVE";

        modalYear.textContent =
            "STATUS: MEMORY COLLECTION";

        modalDescription.textContent =
            "Some of the internet's most interesting history lives in people's memories.";

        modalFact.textContent =
            "This space will become a collection of stories about old websites, games, online communities and technology.";

        modalImage.innerHTML = "<span>MEMORY_001</span>";

        archiveModal.classList.add("show");

    });

}


// CURRENT YEAR

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// SYSTEM STATUS

console.log("VELTRIX-Ω7 SYSTEM ONLINE");

console.log("DIGITAL EXHIBITION DATABASE LOADED");

console.log("ALL ARCHIVES READY");

// ==========================================
// VELTRIX-Ω7 | TIME MACHINE ENGINE
// ==========================================

const yearSlider = document.getElementById("yearSlider");

const selectedYear = document.getElementById("selectedYear");

const selectedEra = document.getElementById("selectedEra");

const timeTitle = document.getElementById("timeTitle");

const timeDescription = document.getElementById("timeDescription");

const timeCoordinates = document.getElementById("timeCoordinates");


// HISTORICAL DATABASE

const timeArchives = {

    1990: {
        era: "THE EARLY INTERNET",
        title: "THE BEGINNING OF A NEW WORLD",
        description: "The internet was developing beyond research networks. The World Wide Web was proposed in 1989, setting the stage for a new way to access information."
    },

    1995: {
        era: "THE WEB REVOLUTION",
        title: "WEBSITES ENTER EVERYDAY LIFE",
        description: "More people began exploring the World Wide Web. Personal websites, early search engines and online communities started gaining attention."
    },

    2000: {
        era: "THE EARLY DIGITAL AGE",
        title: "THE DOT-COM ERA",
        description: "The internet was becoming a major part of everyday life. Websites, online services and digital businesses were expanding rapidly."
    },

    2005: {
        era: "THE VIDEO REVOLUTION",
        title: "A NEW WAY TO SHARE",
        description: "Online video-sharing became increasingly popular. People could now upload, discover and share videos with audiences around the world."
    },

    2010: {
        era: "THE SOCIAL WEB",
        title: "EVERYONE GOES SOCIAL",
        description: "Social networking and smartphones changed how people communicated, shared photographs and discovered online content."
    },

    2015: {
        era: "THE MOBILE INTERNET",
        title: "THE INTERNET IN YOUR POCKET",
        description: "Mobile apps, streaming services and online communities became central to everyday digital experiences."
    },

    2020: {
        era: "THE CONNECTED WORLD",
        title: "A DIGITAL-FIRST ERA",
        description: "Video meetings, online learning, cloud services and digital communication became especially important around the world."
    }

};


// UPDATE TIME MACHINE

function updateTimeMachine() {

    if (!yearSlider) return;

    const year = Number(yearSlider.value);

    const archive = timeArchives[year];

    if (!archive) return;

    selectedYear.textContent = year;

    selectedEra.textContent = archive.era;

    timeTitle.textContent = archive.title;

    timeDescription.textContent = archive.description;

    timeCoordinates.textContent = year + " / ONLINE";

}


// SLIDER EVENT

if (yearSlider) {

    yearSlider.addEventListener("input", updateTimeMachine);

    updateTimeMachine();

}
