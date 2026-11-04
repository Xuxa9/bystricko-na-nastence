/* 
Jak bude vypadat běžné přidání nového plakátu?
Například přijde nabídka na keramický workshop. Uděláš tři věci:
1. Uložíš obrázek jako images/keramika.jpg.
2. Do data.js přidáš jednu novou položku s názvem, popisem, obrázkem a odkazem.
3. Uložíš soubor a obnovíš stránku.


{
    id: "kategorie-misto-poradove-cislo",

    // Zařazení do karuselu
    category: "pohyb",

    // Základní informace
    title: "Jóga pro dospělé",
    description: "Pravidelné lekce jógy v Bystřici.",
    details: [
        "Každé úterý a čtvrtek",
        "17:30–18:30",
        "Cena: 150 Kč za lekci"
    ],

    // Obrázek nebo automatická šablona
    image: "",
    template: "pohyb" nebo nabidka a nebo akce

    // Odkaz na pořadatele
    link: "https://example.cz",

    // Místo konání
    location: {
        city: "Bystřice nad Pernštejnem",
        venue: "Komunitní centrum",
        address: ""
    },

    // Pro koho je nabídka určena
    audience: ["dospeli"],

    // Platnost zveřejnění
    publishedFrom: "2026-11-01",
    expiresAt: "2027-03-31"
}

*/
/* POHYB */
const offers = [
    {
        id: "pohyb-bystrice-001",
        category: "pohyb",
        title: "Kroužky DDM Bystřice nad Pernštejnem",
        description: "Vyberte si z aktuální nabídky kroužků.",
        details: [
        "Technické, estetické nebo sportovní zaměření.",
        ],
        image: "",
        template: "pohyb",
        link: "https://www.ddmbystricenp.cz",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "DDM",
            address: ""
        },
        audience: ["dospeli","deti"],
        publishedFrom: "2026-10-01",
        expiresAt: "2027-03-31"
    },

    {
        id: "pohyb-bystrice-002",
        category: "pohyb",
        title: "Cvičení pro ženy",
        description: "Pilates a bodystyling.",
        details: [
        "Pilates pondělí a středa",
        "Bodystyling úterý a čtvrtek",
        "17:00–18:00",
        "Cena: 50 Kč za lekci"
        ],
        image: "",
        template: "pohyb",
        link: "https://www.ddmbystricenp.cz/cviceni-pro-zeny",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "DDM",
            address: ""
        },
        audience: ["dospeli"],
        publishedFrom: "2026-10-01",
        expiresAt: "2027-03-31"
    },

    {
        id: "pohyb-bystrice-003",
        category: "pohyb",
        title: "Peak gym",
        description: "Klubové fitko v Bystřici.",
         details: [
        "Ještě neotevřeno.",
        ],
        image: "",
        template: "pohyb",
        link: "https://www.facebook.com/p/Peak-Gym-Byst%C5%99ice-nP-61591245212179/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: "K Pernštejnu 625 59301 Bystrice nad Pernstejnem, Czech Republic"
        },
        audience: ["dospeli"],
        publishedFrom: "2026-10-01",
        expiresAt: "2027-03-31"
    },

    /* NABIDKA */
    {
        id: "med-bystrice-001",
        category: "nabidka",
        title: "Prodej medu",
        description: "Pravý lesní med.",
         details: [
        "Cena: 250 Kč",
        ],image: "",
        template: "nabidka",
        link: "",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["dospeli"],
        publishedFrom: "2026-10-01",
        expiresAt: "2026-12-31"
    }
];