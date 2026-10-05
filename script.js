// ===============================
// PORTFOLIO INDRA - JAVASCRIPT
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
            menuBtn.setAttribute("aria-label", "Tutup menu");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
            menuBtn.setAttribute("aria-label", "Buka menu");
        }
    });

    document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");

            const icon = menuBtn.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuBtn.setAttribute("aria-label", "Buka menu");
        });
    });
}


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ===============================
// FOOTER YEAR
// ===============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===============================
// CONTACT FORM -> EMAIL
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const recipient = "indrajunior074@gmail.com";

        const subject = `Pesan Portfolio dari ${name}`;

        const body =
            `Nama: ${name}\n` +
            `Email: ${email}\n\n` +
            `Pesan:\n${message}`;

        const mailtoUrl =
            `mailto:${recipient}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
    });
}


// ===============================
// GALLERY LIGHTBOX
// ===============================

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxPlaceholder = document.getElementById("lightboxPlaceholder");
const lightboxIcon = document.getElementById("lightboxIcon");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");


function openLightbox(item) {

    const image = item.dataset.image || "";
    const title = item.dataset.title || "Gallery";
    const icon =
        item.querySelector("i")?.className ||
        "fa-solid fa-image";

    lightbox.classList.add("active");

    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    lightboxCaption.textContent = title;


    if (image) {

        lightboxImage.src = image;
        lightboxImage.alt = title;

        lightboxImage.classList.add("visible");

        lightboxPlaceholder.classList.remove("visible");

    } else {

        lightboxImage.classList.remove("visible");

        lightboxImage.removeAttribute("src");

        lightboxPlaceholder.classList.add("visible");

        lightboxIcon.className = icon;

        lightboxTitle.textContent = title;
    }
}


function closeLightbox() {

    lightbox.classList.remove("active");

    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


galleryItems.forEach((item) => {

    item.addEventListener("click", () => {

        openLightbox(item);

    });

});


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });

}


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLightbox();

    }

});