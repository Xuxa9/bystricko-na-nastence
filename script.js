

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

    // Lehké natočení lístku – každý trochu jinak, podle pořadí
    const tilts = [-1.2, 0.8, -0.6, 1.1];
    card.style.setProperty("--tilt", `${tilts[index % 4]}deg`);

    if (offer.template) {
        card.classList.add(`template-${offer.template}`);
    }

        if (offer.image) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "poster-open";
        button.dataset.link = offer.link || "";
        button.setAttribute("aria-label", `Zvětšit plakát: ${offer.title}`);

        const img = document.createElement("img");
        img.src = offer.image;
        img.alt = offer.title;
        img.loading = "lazy";

        button.appendChild(img);
        card.appendChild(button);
    }

    const info = document.createElement("div");
    info.className = "offer-info";

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

    info.append(title, description);

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

    // Popisek s klikací e-mailovou adresou
    const emailLink = document.createElement("a");
    emailLink.href = category === "pohyb"
        ? "mailto:nanastence@email.cz?subject=Nabidka%20na%20Bystricko%20na%20nastence"
        : "mailto:nanastence@email.cz?subject=Mistni%20nabidka";
    emailLink.textContent = "nanastence@email.cz";

    const description = document.createElement("p");
    description.append("Stačí poslat jeden e-mail na ", emailLink, ".");

    // Odkaz na pravidla s podrobným postupem
    const rulesLink = document.createElement("a");
    rulesLink.className = "offer-link";
    rulesLink.href = "pravidla.html";
    rulesLink.textContent = "Jak na to →";

    card.append(symbol, title, description, rulesLink);
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

                let isMoving = false;

        // Když jsme v kopiích, skočíme nenápadně zpět na originály.
        function wrapIndex() {
            if (index >= originalCount * 2) {
                index -= originalCount;
                updatePosition(false);
            } else if (index < originalCount) {
                index += originalCount;
                updatePosition(false);
            }
        }

        function move(direction) {
            if (isMoving) return; // během animace další kliky ignorujeme

            index += direction;

            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduceMotion) {
                updatePosition(false);
                wrapIndex(); // bez animace nepřijde transitionend, srovnáme hned
                return;
            }

            isMoving = true;
            updatePosition(true);
        }

        nextButton.addEventListener("click", () => move(1));

        prevButton.addEventListener("click", () => move(-1));

        track.addEventListener("transitionend", event => {
            if (event.target !== track) return; // jen animace samotného pásu
            isMoving = false;
            wrapIndex();
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
   6. ZVĚTŠENÍ PLAKÁTU
===================================== */

function initPosterDialog() {
    const dialog = document.querySelector("#poster-dialog");
    if (!dialog) return;

    const dialogImg = dialog.querySelector(".poster-dialog-img");
    const dialogLink = dialog.querySelector(".poster-dialog-link");
    const closeButton = dialog.querySelector(".poster-close");

    // Jeden posluchač pro všechny plakáty – funguje i pro kopie v karuselu.
    document.addEventListener("click", event => {
        const button = event.target.closest(".poster-open");
        if (!button) return;

        const img = button.querySelector("img");
        dialogImg.src = img.src;
        dialogImg.alt = img.alt;

        if (button.dataset.link) {
            dialogLink.href = button.dataset.link;
            dialogLink.hidden = false;
        } else {
            dialogLink.hidden = true;
        }

        dialog.showModal();
    });

    closeButton.addEventListener("click", () => dialog.close());

    // Klik na tmavé pozadí mimo plakát okno zavře.
    dialog.addEventListener("click", event => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
}

/* =====================================
   7. SPUŠTĚNÍ WEBU
===================================== */

renderOffers();
initCarousels();
initPosterDialog();
