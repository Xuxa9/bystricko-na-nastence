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
        id: "bystrice-pohyb-bosu-1",
        category: "pohyb",
        title: "BOSU – Sport4u",
        description: "Cvičení na balančních podložkách BOSU.",
        details: [
            "Každou středu 18:00–19:00.",
            "Pro všechny věkové kategorie, intenzita podle kondice.",
            "Cena: 80 Kč za lekci."
        ],
        image: "",
        template: "pohyb",
        link: "https://sport4u-je.cz/bosu/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "ZŠ T. G. Masaryka (vchod z boku)",
            address: ""
        },
        audience: ["dospeli"],
        publishedFrom: "2026-11-12",
        expiresAt: "2027-06-30"
    },
    {
        id: "bystrice-pohyb-sportacek-1",
        category: "pohyb",
        title: "Sportáček – Sport4u",
        description: "Pohybová průprava pro nejmenší: hry s padákem a míčem, rytmika.",
        details: [
            "Pro děti 3–7 let.",
            "Čtvrtek 15:30–17:00."
        ],
        image: "",
        template: "pohyb",
        link: "https://sport4u-je.cz/krouzky/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["deti"],
        publishedFrom: "2026-11-12",
        expiresAt: "2027-06-30"
    },

    {
        id: "bystrice-pohyb-aerobik-1",
        category: "pohyb",
        title: "Aerobik – Sport4u",
        description: "Aerobikové kroky, skoky a práce s hudbou.",
        details: [
            "Příprava aerobiku, 8–11 let.",
            "Soutěžní aerobik, dívky od 12 let."
        ],
        image: "",
        template: "pohyb",
        link: "https://sport4u-je.cz/krouzky/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["deti"],
        publishedFrom: "2026-11-12",
        expiresAt: "2027-06-30"
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

    {
        id: "bystrice-pohyb-fotbal-1",
        category: "pohyb",
        title: "Fotbal – SK Bystřice",
        description: "Fotbalový klub s týmy od nejmenších po dospělé.",
        details: [
            "Předpřípravka, přípravka, žáci, dorost.",
            "Muži A a B."
        ],
        image: "",
        template: "pohyb",
        link: "https://www.skbnp.cz/sluzby/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["deti", "dospeli"],
        publishedFrom: "2026-11-12",
        expiresAt: "2027-06-30"
    },


    {
        id: "bystrice-pohyb-hokej-1",
        category: "pohyb",
        title: "Hokej pro děti – BK Zubři",
        description: "Nábor dětí do hokeje na zimním stadionu v Bystřici.",
        details: [
            "Škola bruslení od 4 do 8 let.",
            "Přípravka a mladší žáci."
        ],
        image: "",
        template: "pohyb",
        link: "https://bkzubribystrice.cz/nabor/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "Zimní stadion",
            address: "Nový dvůr 1489"
        },
        audience: ["deti"],
        publishedFrom: "2026-11-12",
        expiresAt: "2027-03-31"
    },

        {
        id: "bystrice-pohyb-judo-1",
        category: "pohyb",
        title: "Judo pro všechny",
        description: "Judo pro děti i dospělé.",
        details: [
            "Už od 4 let."
        ],
        image: "",
        template: "pohyb",
        link: "https://www.facebook.com/p/Judo-pro-v%C5%A1echny-Karel-Pro%C4%8Dka-100057288895582/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["deti", "dospeli"],
        publishedFrom: "2026-11-12",
        expiresAt: "2027-06-30"
    },


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

    {
        id: "bystrice-pohyb-pilates-1",
        category: "pohyb",
        title: "Pilates – SportActive",
        description: "Pilates, zdravá záda a funkční pohyb.",
        details: [
            "Rezervace přes web."
        ],
        image: "",
        template: "pohyb",
        link: "https://sport-active.cz/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["dospeli"],
        publishedFrom: "2026-11-12",
        expiresAt: "2027-06-30"
    },


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

     /* FIT KLOKAN */
    {
        id: "bystrice-pohyb-jumping-1",
        category: "pohyb",
        title: "Jumping®",
        description: "Cvičení na trampolínách se spolkem Fit Klokan.",
        details: [
            "Lekce 60 minut.",
            "Přihlášení přes rezervační systém na webu."
        ],
        image: "",
        template: "pohyb",
        link: "https://www.fitklokan.cz/rezervace-jumping/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["dospeli"],
        publishedFrom: "2026-11-10",
        expiresAt: "2027-06-30"
    },

    /* OUTDOOR DOMANÍN */
    {
        id: "domanin-pohyb-lanovy-park-1",
        category: "pohyb",
        title: "Lanový park Domanín",
        description: "",
        details: [],
        image: "images/domanin-pohyb-lanovy-park-1.jpg",
        template: "",
        link: "https://www.outdoordomanin.cz/",
        location: {
            city: "Domanín",
            venue: "Lanový park u Borovinky",
            address: ""
        },
        audience: ["deti", "dospeli"],
        publishedFrom: "2026-11-12",
        expiresAt: "2027-10-31"
    },

    /* DANCE STYLE */
    {
        id: "bystrice-pohyb-street-dance-1",
        category: "pohyb",
        title: "Street dance – Dance Style",
        description: "Taneční skupiny pro děti a mládež.",
        details: [
            "Od 5 do 25 let, skupiny podle věku.",
        ],
        image: "",
        template: "pohyb",
        link: "https://dancestyle-bnp.webnode.cz/skupiny/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "",
            address: ""
        },
        audience: ["deti"],
        publishedFrom: "2026-11-12",
        expiresAt: "2027-06-30"
    },


    /* NABIDKA */
    {
        id: "bystrice-nabidka-lampionovy-pruvod-1",
        category: "nabidka",
        pinned: true,
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

        /* KVÍZ HARENDA */
    {
        id: "bystrice-nabidka-kviz-1",
        category: "nabidka",
        title: "Hospodský kvíz – Harenda",
        description: "Týmová vědomostní hra.",
        details: [
            "Každou středu 18:00–20:00.",
            "Jednou za měsíc tematický speciál.",
            "Přihlášení na webu."
        ],
        image: "",
        template: "akce",
        link: "https://www.facebook.com/groups/kvizharenda/",
        location: {
            city: "Bystřice nad Pernštejnem",
            venue: "Harenda",
            address: ""
        },
        audience: ["dospeli"],
        publishedFrom: "2026-11-12",
        expiresAt: "2026-12-31"
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