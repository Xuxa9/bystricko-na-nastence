/* 
Jak bude vypadat běžné přidání nového plakátu?
Například přijde nabídka na keramický workshop. Uděláš tři věci:
1. Uložíš obrázek jako images/keramika.jpg.
2. Do data.js přidáš jednu novou položku s názvem, popisem, obrázkem a odkazem.
3. Uložíš soubor a obnovíš stránku.


{
    id: "lokace-kategorie-o-co-jde-cislo",   // např. bystrice-pohyb-sokol-badminton-1

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
        id: "pohyb-bystrice-DDM-1",
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
        expiresAt: "2156-01-01"
    },

    {
        id: "pohyb-bystrice-DDM-2",
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
        expiresAt: "2156-01-01"
    },
/*
    {
        id: "pohyb-bystrice-posilovna-1",
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
        expiresAt: "2156-01-01"
    },
*/
    {
        id: "pohyb-bystrice-areal-4",
        category: "pohyb",
        title: "Areál sportu s.r.o.",
        description: "Sportovní hala nabízí:",
        details: [
        "squash, bowling, kuželky, vnitřní bazén, posilovnu, horolezeckou stěnu, tělocvičnu.",
        ],
        image: "",
        template: "pohyb",
        link: "https://www.arealsportu.cz/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "Areál sportu s.r.o.",
            address: ""
        },
        audience: ["dospeli","deti"],
        publishedFrom: "2026-10-01",
        expiresAt: "2156-01-01"
    },

        /* SOKOL – oddíly TJ Sokol Bystřice nad Pernštejnem */
    {
        id: "bystrice-pohyb-badminton-1",
        category: "pohyb",
        title: "Badminton",
        description: "Oddíl badmintonu TJ Sokol Bystřice nad Pernštejnem.",
        details: [
            "Pro dospělé i mládež do 18 let.",
            "Hraje se hlavně pro zdraví a pro radost."
        ],
        image: "",
        template: "pohyb",
        link: "https://www.sokolbystricenp.eu/badminton/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["deti", "dospeli"],
        publishedFrom: "2026-11-09",
        expiresAt: "2027-06-30"
    },

    {
        id: "bystrice-pohyb-basketbal-1",
        category: "pohyb",
        title: "Basketbal a míčové hry",
        description: "Oddíl basketbalu a míčových her TJ Sokol Bystřice nad Pernštejnem.",
        details: [
            "Basketbal pro dospělé a mládež.",
            "Míčové hry pro děti 4–9 let."
        ],
        image: "",
        template: "pohyb",
        link: "https://www.sokolbystricenp.eu/basketbal/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["deti", "dospeli"],
        publishedFrom: "2026-11-09",
        expiresAt: "2027-06-30"
    },

    {
        id: "bystrice-pohyb-posilovna-2",
        category: "pohyb",
        title: "Posilovna Sokol",
        description: "Posilovna TJ Sokol Bystřice nad Pernštejnem.",
        details: [
            "Pro členy i veřejnost."
        ],
        image: "",
        template: "pohyb",
        link: "https://www.sokolbystricenp.eu/posilovna/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["dospeli"],
        publishedFrom: "2026-11-09",
        expiresAt: "2027-06-30"
    },

    {
        id: "bystrice-pohyb-serm-1",
        category: "pohyb",
        title: "Šerm",
        description: "Rodinný šermířský oddíl TJ Sokol Bystřice nad Pernštejnem.",
        details: [
            "Sportovní šerm fleretem.",
            "Pro děti od 8 let i dospělé."
        ],
        image: "",
        template: "pohyb",
        link: "https://www.sokolbystricenp.eu/serm/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["deti", "dospeli"],
        publishedFrom: "2026-11-09",
        expiresAt: "2027-06-30"
    },

    {
        id: "bystrice-pohyb-stolni-tenis-1",
        category: "pohyb",
        title: "Stolní tenis",
        description: "Oddíl stolního tenisu TJ Sokol Bystřice nad Pernštejnem.",
        details: [
            "Pro děti i dospělé.",
            "V Bystřici se hraje od roku 1938."
        ],
        image: "",
        template: "pohyb",
        link: "https://www.sokolbystricenp.eu/stolni-tenis/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["deti", "dospeli"],
        publishedFrom: "2026-11-09",
        expiresAt: "2027-06-30"
    },

    {
        id: "bystrice-pohyb-volejbal-1",
        category: "pohyb",
        title: "Volejbal",
        description: "Volejbalový oddíl TJ Sokol Bystřice nad Pernštejnem.",
        details: [
            "Pro děti, dorost a ženy."
        ],
        image: "",
        template: "pohyb",
        link: "https://www.sokolbystricenp.eu/volejbal/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["deti", "dospeli"],
        publishedFrom: "2026-11-09",
        expiresAt: "2027-06-30"
    },


    /* NABIDKA */
    {
        id: "bystrice-nabidka-lampionovy-pruvod-1",
        category: "nabidka",
        title: "Lampionový průvod",
        description: "",
        details: [],
        image: "images/bystrice-nabidka-lampionovy-pruvod-akce-1.jpg",
        template: "",
        link: "",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["deti", "dospeli"],
        publishedFrom: "2026-11-09",
        expiresAt: "2026-11-13"
    },

    {
        id: "med-bystrice-001",
        category: "nabidka",
        title: "Prodej medu",
        description: "Pravý lesní med.",
         details: [
        "Cena: 250 Kč.",
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