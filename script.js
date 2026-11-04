

/* =====================================
   1. VÝBĚR AKTUÁLNĚ PLATNÝCH NABÍDEK
===================================== */
const categoryNames = {
    pohyb: "Pohyb a kroužky",
    nabidka: "Místní nabídka",
    sluzby: "Služby"
};

function getActiveOffers() {
    // Použijeme místní kalendářní datum.
    const now = new Date();
    const today = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0")
    ].join("-");

    return offers.filter(offer =>
        offer.publishedFrom <= today &&
        offer.expiresAt >= today
    );
}


/* =====================================
   2. VYTVOŘENÍ KARTY NABÍDKY
===================================== */

function createOfferCard(offer, index = 0) {
    const card = document.createElement("article");
    card.className = "offer-card";

    // Barvy a velikosti dekorativních tvarů
const colorsOne = {
    pohyb: ["#c6cbb5", "#d2dce0", "#c9c0d2", "#bfc9bc"],
    nabidka: ["#ddc3a3", "#d5b7b0", "#d0bfae", "#e0c9ae"]
};

const colorsTwo = {
    pohyb: ["#a6ad91", "#aebfc5", "#b5a9c2", "#a5b29f"],
    nabidka: ["#d8a184", "#c99e98", "#bda58e", "#c9a47e"]
};

// Dekorace se použije jen u podporovaných šablon
const palette = offer.template;
const colorIndex = index % 4;

if (colorsOne[palette] && colorsTwo[palette]) {
    card.style.setProperty("--color-one", colorsOne[palette][colorIndex]);
    card.style.setProperty("--color-two", colorsTwo[palette][colorIndex]);

    const sizes = [
        [120, 170, 230, 150],
        [160, 130, 190, 170],
        [190, 150, 140, 210],
        [140, 190, 210, 130]
    ];

    const size = sizes[colorIndex];

    card.style.setProperty("--shape-one-width", `${size[0]}px`);
    card.style.setProperty("--shape-one-height", `${size[1]}px`);
    card.style.setProperty("--shape-two-width", `${size[2]}px`);
    card.style.setProperty("--shape-two-height", `${size[3]}px`);
}

    if (offer.template) {
        card.classList.add(`template-${offer.template}`);
    }

    if (offer.image) {
        const img = document.createElement("img");
        img.src = offer.image;
        img.alt = offer.title;
        img.loading = "lazy";
        card.appendChild(img);
    }

    const info = document.createElement("div");
    info.className = "offer-info";

    const category = document.createElement("span");
    category.className = "offer-category";
    category.textContent = categoryNames[offer.category] || offer.category;

    const title = document.createElement("h3");
    title.textContent = offer.title;

    const description = document.createElement("p");
    description.textContent = offer.description;

    const location = document.createElement("p");
    location.className = "offer-location";

    const locationParts = [
        offer.location?.venue,
        offer.location?.city
    ].filter(Boolean);

    location.textContent = locationParts.join(", ");

    info.append(category, title, description);

    if (offer.details?.length) {
    const details = document.createElement("ul");
    details.className = "offer-details";

    offer.details.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        details.appendChild(li);
    });

    info.appendChild(details);
}

    if (location.textContent) {
        info.appendChild(location);
    }

    if (offer.link) {
        const link = document.createElement("a");
        link.className = "offer-link";
        link.href = offer.link;
        link.textContent = "Více informací ↗";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        info.appendChild(link);
    }

    card.appendChild(info);
    return card;
}


/* =====================================
   3. KARTA PRO PŘIDÁNÍ NABÍDKY
===================================== */

function createAddCard(category) {
    const card = document.createElement("article");
    card.className = "offer-card add-card";

    const symbol = document.createElement("div");
    symbol.className = "add-symbol";
    symbol.textContent = "+";

    const title = document.createElement("h3");
    title.textContent = category === "pohyb"
        ? "Chcete tu být také?"
        : "Máte co nabídnout?";

    const description = document.createElement("p");
    description.textContent = category === "pohyb"
        ? "Pošlete nám svou nabídku a pomozte rozšířit místní přehled."
        : "Dejte o sobě vědět lidem z Bystřicka.";

    const link = document.createElement("a");
    link.className = "offer-link";
    link.href = category === "pohyb"
        ? "mailto:vas@email.cz?subject=Nabidka%20na%20Bystricko%20na%20nastence"
        : "mailto:vas@email.cz?subject=Mistni%20nabidka";
    link.textContent = "Přidat nabídku ↗";

    card.append(symbol, title, description, link);
    return card;
}


/* =====================================
   4. VYKRESLENÍ NABÍDEK DO KARUSELŮ
===================================== */

function renderOffers() {
    const activeOffers = getActiveOffers();

    document.querySelectorAll("[data-carousel]").forEach(carousel => {
        const track = carousel.querySelector(".carousel-track");
        const category = carousel.dataset.category;

        track.replaceChildren();

        activeOffers
            .filter(offer => offer.category === category)
            .forEach((offer, index) => {
              track.appendChild(createOfferCard(offer, index));
            });

        // Karta pro přidání nabídky zůstane vždy na konci.
        track.appendChild(createAddCard(category));
    });
}


/* =====================================
   5. KARUSEL S NEKONEČNÝM POSOUVÁNÍM
===================================== */

function initCarousels() {
    document.querySelectorAll("[data-carousel]").forEach(carousel => {
        const track = carousel.querySelector(".carousel-track");
        const windowElement = carousel.querySelector(".carousel-window");
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");

        const originalCards = Array.from(track.children);
        const originalCount = originalCards.length;

        if (originalCount <= 1) return;

        // Kopie na obou stranách umožní plynulé opakování.
        originalCards.forEach(card => {
            track.appendChild(card.cloneNode(true));
        });

        originalCards.slice().reverse().forEach(card => {
            track.insertBefore(card.cloneNode(true), track.firstChild);
        });

        const allCards = Array.from(track.children);
        let index = originalCount;
        let startX = 0;
        let currentX = 0;

        function updatePosition(animate = true) {
            const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
            ).matches;

            track.style.transition = animate && !reduceMotion
            ? "transform 0.4s ease"
            : "none";

            const card = allCards[index];
            if (!card) return;

            const offset = card.offsetLeft - track.offsetLeft;
            track.style.transform = `translateX(-${offset}px)`;
        }

        function move(direction) {
            index += direction;
            updatePosition(true);
        }

        nextButton.addEventListener("click", () => move(1));
        prevButton.addEventListener("click", () => move(-1));

        track.addEventListener("transitionend", () => {
            if (index >= originalCount * 2) {
                index -= originalCount;
                updatePosition(false);
            } else if (index < originalCount) {
                index += originalCount;
                updatePosition(false);
            }
        });

        windowElement.addEventListener("touchstart", event => {
            startX = event.touches[0].clientX;
            currentX = startX;
        }, { passive: true });

        windowElement.addEventListener("touchmove", event => {
            currentX = event.touches[0].clientX;
        }, { passive: true });

        windowElement.addEventListener("touchend", () => {
            const difference = currentX - startX;

            if (Math.abs(difference) > 45) {
                move(difference < 0 ? 1 : -1);
            }
        });

        window.addEventListener("resize", () => updatePosition(false));
        updatePosition(false);
    });
}


/* =====================================
   6. SPUŠTĚNÍ WEBU
===================================== */

renderOffers();
initCarousels();
