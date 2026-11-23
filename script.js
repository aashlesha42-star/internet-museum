/* =====================================
   INTERNET MUSEUM
   INTERACTIVE SYSTEM 2.0
===================================== */


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});


/* ARCHIVE SEARCH */

const searchInput = document.getElementById("archiveSearch");

const collectionCards = document.querySelectorAll(".collection-card");

const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase().trim();

    let visibleCards = 0;

    collectionCards.forEach(function (card) {

        const searchableText = card.dataset.search.toLowerCase();

        if (searchableText.includes(searchValue)) {

            card.style.display = "block";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });

    if (visibleCards === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});


/* ARCHIVE PREVIEW MODAL */

const archiveModal = document.getElementById("archiveModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const closeModal = document.getElementById("closeModal");

const modalOkay = document.getElementById("modalOkay");


/* OPEN ARCHIVE */

document.querySelectorAll(".explore-card").forEach(function (button) {

    button.addEventListener("click", function () {

        const title = button.dataset.title;

        const description = button.dataset.description;

        modalTitle.textContent = title;

        modalDescription.textContent = description;

        archiveModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* CLOSE MODAL FUNCTION */

function hideModal() {

    archiveModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* CLOSE BUTTON */

closeModal.addEventListener("click", hideModal);

modalOkay.addEventListener("click", hideModal);


/* CLOSE WHEN CLICKING OUTSIDE */

archiveModal.addEventListener("click", function (event) {

    if (event.target === archiveModal) {

        hideModal();

    }

});


/* CLOSE USING ESCAPE */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        hideModal();

    }

});


/* MEMORY BUTTON */

document.getElementById("memoryButton").addEventListener("click", function () {

    modalTitle.textContent = "PRESERVE YOUR MEMORY";

    modalDescription.textContent =
        "Your memories deserve a place in internet history. " +
        "The community memory submission system will be introduced " +
        "in a future update.";

    archiveModal.classList.add("show");

    document.body.style.overflow = "hidden";

});


/* CURRENT YEAR */

document.getElementById("copyright").textContent =
    "© " + new Date().getFullYear() + " INTERNET MUSEUM";


/* SYSTEM INITIALIZATION */

console.log("--------------------------------");

console.log("INTERNET MUSEUM");

console.log("VERSION 2.0");

console.log("ARCHIVE SYSTEM ONLINE");

console.log("SEARCH SYSTEM ONLINE");

console.log("INTERACTIVE ARCHIVES ONLINE");

console.log("--------------------------------");
