```javascript
// ======================================
// VELTRIX-Ω7 | INTERNET MUSEUM
// MAIN INTERACTIVE SYSTEM
// ======================================


// PAGE LOADER

window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hide");
        }

    }, 1500);

});


// ENTER MUSEUM

function enterMuseum() {

    const archives = document.getElementById("archives");

    if (archives) {
        archives.scrollIntoView({
            behavior: "smooth"
        });
    }

}


// SCROLL TO ARCHIVES

function scrollToArchives() {

    const archives = document.getElementById("archives");

    if (archives) {
        archives.scrollIntoView({
            behavior: "smooth"
        });
    }

}


// NAVIGATION ACTIVE EFFECT

const navigationLinks = document.querySelectorAll(".navbar nav a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// ARCHIVE CARD INTERACTION

const archiveCards = document.querySelectorAll(".archive-card");

archiveCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transition = "0.4s";

    });

});


// DIGITAL SYSTEM STATUS

console.log("================================");
console.log("VELTRIX-Ω7");
console.log("DIGITAL ARCHIVE SYSTEM ONLINE");
console.log("================================");


// CURRENT YEAR

const footerYear = document.querySelector("footer p:last-child");

if (footerYear) {

    footerYear.textContent =
        "© " + new Date().getFullYear() +
        " VELTRIX DIGITAL ARCHIVES";

}
```
