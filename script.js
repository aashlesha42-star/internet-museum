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
