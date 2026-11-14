# Poznámky k projektu

Tento soubor si vede Claude. Zapisuje sem, o jaký projekt jde, co už je hotové a na čem se právě pracuje.
Claude Code ho načte automaticky při každém spuštění, takže se nemusí vše vysvětlovat znovu.

## Jak spolu pracujeme
- Komunikujeme česky. Claude je rádce a učitel.
- Claude **kontroluje** existující kód a dává zpětnou vazbu.
- Nový kód Claude **připraví jako ukázku, vysvětlí ho a řekne, kam přesně ho vložit**.
  Do souborů ho vkládá autorka **sama ručně**. Claude její soubory s kódem needituje.
- Postupujeme po malých krocích a po každé změně ji vyzkoušíme v prohlížeči.

## O projektu
**Bystřicko na nástěnce** (pracovní název)

Jednoduchý lokální web, digitální nástěnka. Na jednom místě propojuje obyvatele Bystřice nad Pernštejnem
a okolí (asi 8 000 obyvatel) s místními aktivitami, službami a nabídkami. Informace jsou dnes roztroušené
po webech, Facebooku, plakátech a výlepových plochách. Web je jen **křižovatka**, odkazuje na pořadatele.
Začít jednoduše, později rozšiřovat.

- **Umístění:** flashka `NO NAME`, složka `kodovani`
- **Stav:** online na **https://nanastence.cz** (GitHub Pages, repozitář `Xuxa9/bystricko-na-nastence`).
- **Doména:** `nanastence.cz` u Webglobe (DNS spravuje Webglobe). Napojená na GitHub Pages, HTTPS vynucené,
  doména ověřená v GitHub účtu. Záznamy ve Webglobe nemazat: 4× A, CNAME `www`, TXT `_github-pages-challenge-xuxa9`,
  MX a SPF TXT (e-mail). Certifikát Let's Encrypt obnovuje GitHub sám.

### Sekce
- **Pohyb a kroužky:** sport, kroužky pro děti, cvičení pro dospělé, jóga, tanec, judo…
- **Místní nabídka:** domácí produkty, výrobky a řemesla, workshopy, sezónní nabídky a přebytky ze zahrad

### Jak to funguje
- Vzhled: **cyklické (nekonečné) karusely** s plakáty, na konci každého je karta „Přidat nabídku“.
- Plakáty jsou dvojího typu: **hotový plakát** (obrázek) nebo **plakát ze šablony** (`template`: pohyb / nabidka / akce).
- `data.js`: pole `offers`, každá nabídka má id, category, title, description, image, template, link,
  location {city, venue, address}, audience ["deti","dospeli"], publishedFrom, expiresAt (formát RRRR-MM-DD).
- **Pravidlo pro `id` (rozhodnuto 2026-11-09):** `lokace-kategorie-o-co-jde-cislo`, např. `bystrice-pohyb-badminton-1`.
  Malá písmena, bez diakritiky, vše oddělené pomlčkami. Číslo `1`, vyšší (`2`, `3`…) jen když stejná kombinace už existuje.
  ID musí být jedinečné a po zapsání do evidence se nemění.
- `script.js`: vybere platné nabídky podle data, vykreslí karty do karuselů a ovládá karusel (šipky i swipe).
- `style.css`: vzhled. Barvy jsou v proměnných v `:root`, šablony mají třídy `template-*`.
- `images/`: obrázky, zatím `header-posters.jpg` (pozadí hlavičky).
- `CNAME`: obsahuje `nanastence.cz`, potřebuje ho GitHub Pages. Nemazat.

### Obsah a provoz
- Plakáty zatím zadává autorka ručně do `data.js`.
- E-mail pro zasílání nabídek: `nanastence@email.cz` (Seznam), v kódu v `script.js` (`createAddCard`).
  E-mail na vlastní doméně autorka nechce. Zvažuje i Facebookovou stránku.

## Co už jsme udělali
- 2026-11-03: Domluvili jsme, jak spolu budeme pracovat, a založili jsme tento soubor.
- 2026-11-03: Autorka představila projekt a Claude udělal první kontrolu kódu (viz níže).

- 2026-11-04: Projekt je na GitHubu a online přes GitHub Pages.
- 2026-11-05: Druhá kontrola kódu, autorka koupila doménu `nanastence.cz`.
- 2026-11-05: Doména napojená: 4× A na `185.199.108–111.153`, `www` CNAME na `xuxa9.github.io.`, soubor `CNAME` v repozitáři. http://nanastence.cz funguje. MX a SPF záznamy Webglobe zůstaly (e-mail).
- 2026-11-07: **Doména hotová.** Certifikát vydán (po znovuzadání domény v Pages), Enforce HTTPS zapnuté
  (http → https funguje), doména ověřená přes TXT („Verified“ v GitHub účtu).
- 2026-11-08: **Informační stránky online** (commit `ae4fb5d`): sekce „O projektu“ na hlavní stránce,
  `pravidla.html` a `ochrana-udaju.html`, odkazy v patičce. Úkoly A1 a částečně A3 (forma souhlasu) splněny.

## Plánované nabídky k přidání (zadáno 2026-11-09)
**Pohyb:** Peak gym (zakomentovaný v `data.js`), Judo pro všechny (Karel Pročka), Sport4u kroužky (sport4u-je.cz/krouzky/),
Freedom Art akce (freedomart.cz/akce/), Sport Active (sport-active.cz), Animal flow, Dance Style (dancestyle-bnp.webnode.cz),
Outdoor Domanín (outdoordomanin.cz), Zimák Bystřice (zimakbystrice.cz), kroužky hokej, fotbal a tenis.
**Místní nabídka:** centrum Kopretina, sádrové odlitky (paní …), workshop háčkování, lampionový průvod, jóga Alahotel, + 2 další.
**Přidáno:** Fit Klokan Jumping® (`bystrice-pohyb-jumping-1`, 2026-11-10, převzato z webu, místo cvičení neověřeno).
Lanový park Domanín (`domanin-pohyb-lanovy-park-1`, 2026-11-12, plakát, souhlas e-mailem, na plakátu jméno/e-mail/mobil kontaktní osoby, do 2027-10-31).
Lokace v ID a `city` = skutečná obec (Domanín), kvůli budoucímu filtru obcí.
2026-11-12: přidáno kvíz Harenda, street dance, judo, BOSU, Sportáček, aerobik, hokej, fotbal, pilates, atletika (24 nabídek).
Freedom Art vyřazen (daleko). Čeká se: tenis (od kamarádky), jóga (SMS), Animal flow, včelař, škola bruslení (další kurz).
**Evidence:** `/Volumes/NO NAME/evidence-nabidky.xlsx` (listy evidence-pohyb, evidence-nabidka, cas, evidence-sluzby).
Záloha je v **Google Docs** a obsahuje jen ID nabídek a data, žádné osobní údaje (proto Google ani Apple v `ochrana-udaju.html` nejsou). iCloud autorka nemá.
Claude do ní na požádání zapisuje (openpyxl ve venv ve scratchpadu, vždy předtím záloha). Lístky bez souhlasu: jména trenérů/lektorů neuvádět.
**Pravidlo autorky:** do evidence se **nepíšou konkrétní e-maily ani telefony** (ani firemní). Do sloupce „Kontakt / web“ jen odkaz na web/FB.
Kontakty zůstávají jen v e-mailové schránce. (2026-11-14 Claude omylem zapsal 2 firemní e-maily, odstraněno.)
Prodej medu (`med-bystrice-001`) v evidenci zatím chybí.
Evidence (tabulka) zatím nezaložena, autorka pošle aktuální verzi, pak Claude doplní řádky (Fit Klokan, čas za 3.–9. 11.: kód 281, obsah 207, admin. 69 min).
Postup: přidávat po skupinách, po každé skupině commit. Jednorázové akce mají `expiresAt` = den akce,
sezónní (zimák) jen na sezónu. Když bude jednorázových akcí hodně, zvážit třetí karusel „Akce“ (šablona `akce` už existuje).
**Rozhodnuto 2026-11-09:** filtr ani karusel „Akce“ zatím ne. Autorka řadí akce ručně na začátek části NABIDKA
v `data.js` (pořadí v poli = pořadí v karuselu). Filtr (vyžaduje přepracování karuselu na překreslování) až s filtry děti/dospělí a obce.

## Evidence a čas (úkol B4, rozšířeno 2026-11-09)
Tabulka bokem (Excel/Numbers/Google Sheets), **mimo složku `kodovani`**, protože obsahuje kontakty a repozitář je veřejný. Zálohovat jinam než jen na flashku.
- **List „Nabídky“:** ID (stejné jako v `data.js`), název, kategorie, pořadatel, kontakt/web, zdroj (poslali / převzato z webu),
  typ (plakát / šablona), od, do, osloveno (datum), odpověď, souhlas (ano / ne / není potřeba), datum souhlasu,
  osobní údaje na plakátu (ano/ne), stav (aktivní / ukončeno / smazáno z webu + datum), poznámka.
  Měsíčně: vyfiltrovat prošlé → smazat z `data.js` (+ obrázek), e-mail do složky „Nabídky – ukončené“.
- **List „Čas“:** datum, minuty, typ činnosti (kód webu / obsah / administrativa a e-maily / učení), poznámka. Měsíční součty.
  Hodí se i jako doklad dobrovolnické práce, např. pro případnou žádost o podporu od města.

## Stav 2026-11-09
- Karusel: šipky znovu fungují (chyběly `click` listenery), rychlé klikání a reduced motion jsou opravené. Kopie při málo kartách jsou odložené.
- Přidáno 6 oddílů Sokola jako samostatné lístky bez místa (místo se může měnit kvůli nové sokolovně).
  Autorka zvažuje poslat e-mail jednotlivým oddílům (text je v konverzaci 2026-11-09).
- Některá ID v `data.js` ještě nejsou podle nového pravidla (`pohyb-bystrice-DDM-1`, `pohyb-bystrice-DDM-2`,
  `pohyb-bystrice-areal-4`, `bystrice-pohyb-posilovna-2`, `med-bystrice-001`). Nespěchá.
- 2026-11-09: Hlavička vyměněna (stejný název `header-posters.jpg`, 0,9 MB), bez čitelných telefonních čísel (Claude ověřil).
  **Otevřená otázka:** starý obrázek s čísly je pořád v historii Gitu. Autorka zatím nerozhodla, jestli historii čistit
  (vyžaduje přepis historie a force push, Claude provede krok po kroku).

## Nový vzhled karet: HOTOVO 2026-11-09 (kroky 1–5)
Kruhy a štítek kategorie jsou smazané. Lístky jsou papír se stínem, stříbrný připínáček (jen karty bez obrázku,
selektor `.offer-card:not(.add-card):not(:has(img))`) a natočení přes `--tilt` z JS (`tilts[index % 4]`).
Karta „Přidat“ je žlutý papírek (`--tilt` v CSS, 240px, `align-self: flex-start`) s textem „Stačí poslat jeden e-mail na …“
a odkazem „Jak na to →“ na `pravidla.html`. `.offer-card` má teď `overflow: visible`, `.carousel-track` má `padding: 16px 0 32px`.
**Plakáty s obrázkem hotové 2026-11-09:** přirozená výška (`height: auto`, `max-height: 440px`, `contain`),
`.carousel-track` má `align-items: flex-start`, text karty se u plakátu skrývá (`.offer-card:has(img) .offer-info`), izolepa přes rohy.
Obrázek je v `<button class="poster-open">` s `data-link`. Zvětšení řeší `<dialog id="poster-dialog">` v `index.html`
a `initPosterDialog()` v `script.js` (jeden posluchač na `document`, kvůli kopiím v karuselu). Odkaz je vidět jen ve zvětšení,
zavírá se křížkem, klávesou Esc nebo klikem vedle.
První plakát: lampionový průvod (poslán e-mailem 2026-11-09, „k uveřejnění“ = souhlas), visí do 2026-11-13.

### Původní zadání (pro referenci)
Autorka viděla náhled a vybrala **variantu A** (krémové pozadí zůstává, barevnost dodají plakáty). Korek ne.
Náhled byl jen dočasný soubor mimo projekt, proto jsou hlavní hodnoty tady:
- **Lístky ze šablony:** papír `#fffdf7`, `border-radius: 2px`, stín `0 1px 2px rgba(0,0,0,.12), 0 8px 18px rgba(40,25,10,.12)`,
  `padding-top` asi 30px kvůli připínáčku. **Bez štítku kategorie a bez barevných kruhů**
  (smazat `colorsOne`/`colorsTwo`/`sizes` v `script.js`, `category` span a `template-*::before/::after` ve `style.css`).
- **Stříbrný připínáček:** `::before`, 20×20px, nahoře uprostřed (`top: -7px`),
  `radial-gradient(circle at 35% 30%, #fff 0%, #e4e7ea 22%, #a9b0b7 58%, #6d747b 100%)`,
  stín `1px 3px 4px rgba(0,0,0,.35), inset -1px -1px 2px rgba(0,0,0,.25)`.
- **Natočení:** `transform: rotate(var(--tilt))`, hodnoty asi −1,2° / 0,8° / −0,6° / 1,1° (podle `index % 4` v JS).
  Najetí myší: `rotate(0) translateY(-3px)`. Respektovat `prefers-reduced-motion`.
- **Karta „Přidat“ = žlutý nalepovací papírek:** `linear-gradient(#fbf4c4, #f7eeb1)`, bez připínáčku, o něco menší,
  natočení asi 1,8°, nahoře tmavší „lepicí“ proužek `rgba(200,175,60,.12)` 22px, stín `6px 10px 14px -6px rgba(40,25,10,.3)`.
  Text: „Tady může viset vaše nabídka“.
- **Hotové plakáty (až budou):** izolepa přes horní rohy (`rgba(255,252,235,.62)`, 74×24px, ±35°), přirozená výška.
- **Technicky:** `.carousel-track` dostane `align-items: flex-start` a padding nahoře a dole, aby `overflow: hidden`
  neuřízl připínáčky a natočené rohy. Postupovat po malých krocích: 1) smazat kruhy a štítek, 2) papír a stín,
  3) připínáček, 4) natočení, 5) žlutý papírek.

## Drobnosti k dořešení
- `ochrana-udaju.html`: „Platné od 9. listopadu 2026“, ale zveřejněno 8. 11. Opravit datum, případně nechat.
- **Pokud se na web přidá cokoli cizího** (analytika, mapy, FB tlačítko, Google Fonts), upravit v `ochrana-udaju.html` odstavec „Návštěvníci webu“ (teď: žádné cookies ani měření).

## Hotovo: informační stránky (podklady a rozhodnutí)
1. [x] Informační stránky: **O projektu**, **Pravidla pro zveřejňování plakátů**, **Ochrana osobních údajů** (2026-11-08).
   Postup: a) domluvit umístění a zobrazení, b) kód, c) samotné texty.
   - a) **Rozhodnuto (2026-11-08):** krátká sekce „O projektu“ na hlavní stránce pod karusely (`#o-projektu`).
     `pravidla.html` a `ochrana-udaju.html` jsou samostatné stránky, odkazy na ně v patičce.
   - **Správce osobních údajů:** Zuzana Horáková, fyzická osoba, kontakt `nanastence@email.cz`.
     (Pozor: v Gitu je jméno autora commitů jiné. Do textů na web patří **Zuzana Horáková**.)
   - **Souhlas se zveřejněním:** věta v e-mailu, žádné PDF. E-mail je zároveň doklad.
   - **Uchovávání e-mailů:** po dobu zveřejnění, pak **nejdéle 2 roky po ukončení**. Na požádání smazat dříve.
     Postup v Seznamu: složky „Nabídky – zveřejněné“ (nemazat) a „Nabídky – ukončené“ (sem přesunout
     při odstranění nabídky z `data.js`). Ukončené mazat hromadně **jednou ročně**.
   - **Citlivé údaje na plakátech:** nezakazovat, autorka je spravuje opatrněji. Pozor: smazaný obrázek
     zůstává v historii GitHubu, a **stejně tak text v `data.js`**. Šablona proti tomu NEchrání (opraveno 2026-11-08).
     Telefon lektora na plakátu (např. jóga) je běžný kontaktní údaj zveřejněný se souhlasem, ne „citlivý údaj“ podle GDPR.
     **Rozhodnutí autorky (2026-11-08):** žádné citlivé údaje (čl. 9 GDPR) a **žádné fotky dětí**.
     Jen běžné osobní údaje na plakátu (jméno a kontakt lektora/pořadatele).
     Při odvolání souhlasu: smazat z webu a na výslovné přání vyčistit i historii repozitáře (Claude pomůže).
   - Při úklidu nabídek mazat z `data.js` i obrázky z `images/` (skryté plakáty jsou jinak pořád veřejně dostupné).

## Další úkoly (zadáno 2026-11-05)
Pořadí: nejdřív A (právní a komunikační základ), teprve potom se začnou přidávat skutečné plakáty, pak B.

**A. Před přidáním plakátů**
1. [x] **Ochrana osobních údajů** (hotovo 2026-11-08): sepsat a zveřejnit na webu. Obsah: kdo je správce, účel zveřejňování,
   práva lidí, jak požádat o úpravu nebo odstranění plakátu, jak dlouho se data uchovávají.
   Hlavně **stručně a srozumitelně**.
2. [x] (hotovo 2026-11-08, text je v konverzaci) **Šablona e-mailu** pro první oslovení (sportovní kluby, jóga, kroužky…): představit projekt, vysvětlit,
   že jde o **bezplatnou službu**, nabídnout zveřejnění plakátu, požádat o zaslání plakátu a o souhlas
   se zveřejněním (hlavně když jsou na plakátu osobní údaje).
3. [x] **Souhlas se zveřejněním** (hotovo 2026-11-08): samostatná šablona není potřeba, stačí věta
   „Souhlasím se zveřejněním na nanastence.cz.“ v e-mailu od odesílatele (je i v `pravidla.html`).
   Když nabídka přijde jinak (telefon, Messenger), požádat o potvrzení e-mailem.

**B. Po přidání plakátů**
4. [ ] **Evidence** zveřejněných plakátů a souhlasů.
5. [x] **Pravidla pro přijímání a odmítání plakátů** (hotovo 2026-11-08, `pravidla.html`, část „Co nezveřejňuji“).
6. [x] **Zvětšení plakátu** po kliknutí na kartu v karuselu (hotovo 2026-11-09).
7. [ ] **Upravit popis karuselu „Místní nabídka“.** Zatím bude sloužit pro všechno, co není pohyb a kroužky
   (workshop, lampionový průvod, reklama na centrum pro děti, nabídka sádrových odlitků…).

Opravy z kontrol (stav k 2026-11-05):
1. [x] Hotové plakáty se neořezávají, mají přirozenou výšku (hotovo 2026-11-09).
   Varianta A4 + `object-fit: contain` **zrušena** (2026-11-08). Autorka chce **plakáty v přirozené velikosti**:
   stejná šířka, zarovnané nahoře „na jednu linku“, spodek různě dlouhý, jako na skutečné nástěnce.
   Technicky: `height: auto` u obrázku a `align-items: flex-start` u `.carousel-track`, plus strop `max-height`.
   **Rozhodnuto (2026-11-08), spojíme obě varianty:**
   - plakáty s obrázkem: přirozená výška, zarovnané nahoře, **izolepa** přes horní rohy (`::before`/`::after`),
     stín a jemné natočení (−1° až +1°, podle pořadí jako dřív barvy),
   - karty ze šablony: **připínáček** místo izolepy,
   - **barevné kruhy u šablon smazat** (autorce se nelíbí): `colorsOne`/`colorsTwo`/`sizes` v `script.js`
     a pravidla `template-*::before/::after` ve `style.css`.
   Pořadí: nejdřív zvětšení po kliknutí (B6), pak přirozená výška, nakonec izolepa a připínáčky.
2. [x] Kategorie karuselu přes `data-category`.
3. [x] Názvy kategorií přes `categoryNames`.
4. [~] Karusel: rychlé klikání **opraveno** (`isMoving`, 2026-11-09). Kopie při málo kartách **vědomě odloženo**,
   autorka čeká, že se to vyřeší přibývajícími nabídkami. Pozor u nových karuselů (např. Služby) s málo kartami.
   Návrh řešení: když `track.scrollWidth <= windowElement.clientWidth`, nevytvářet kopie a skrýt šipky
   (pozor: `.carousel-button` má `display: grid`, takže atribut `hidden` potřebuje `.carousel-button[hidden] { display: none; }`).
5. [x] Reduced motion se respektuje a zaseknutí bez `transitionend` je opravené (`wrapIndex`, 2026-11-09).
6. [x] `data.js`: med má vlastní název a popis.
7. [x] `style.css`: duplicity sloučené, vzhled beze změny (2026-11-05).
8. [x] Hlavička je teď `header-posters.jpg` (0,9 MB), PNG smazán (2026-11-05). Případně ještě zmenšit pod 500 kB.
9. [x] Karty „Přidat nabídku“ smazané z HTML, vytváří je jen JS (`createAddCard`) (2026-11-05).
10. [x] `.gitignore` (`._*`, `.DS_Store`) přidán, `._` soubory z repozitáře pryč (2026-11-05).
11. [ ] Drobnost: v `index.html` na řádku 42 je tlačítko na stejném řádku jako `<div class="carousel">`.

## Zaměření a odlišení (rozhodnuto 2026-11-14)
- Autorka našla podobný web **regionbystricko.cz** a chce se od něj odlišit.
- **Karusel Služby nebude.** Místo něj bude karusel **Letní tábory**, viditelný jen **od 1. 1. do konce prázdnin (31. 8.)**.
  Technicky: tábory mají `publishedFrom`/`expiresAt` v tomto rozmezí, prázdný karusel se celý skryje (zatím neřešeno).
- Zaměření: **malé místní subjekty**, sportovní aktivity, workshopy, malé místní akce. Ne velké firmy a služby.
- Propagace: autorka zvažuje vylepit vlastní plakát na veřejném místě (případně s QR kódem na web).
- Evidence: list `evidence-sluzby` zatím zůstává, případně přejmenovat na tábory.

## Rozpracováno 2026-11-14
1. Žluté lístečky „Přidat“ (`createAddCard`): nový text.
2. `pravidla.html`: zmínit **pravidelnou spolupráci**, upravit „Co zveřejňuji“ (bez služeb, + tábory), přidat nabídky
   převzaté z veřejných zdrojů. Duplicitní odstavec „Plakáty zveřejňuji tak, jak je pošlete…“ (ř. 59 a 79), chybí mezera „zveřejněním,například“.
3. `ochrana-udaju.html`: doplnit (právní základ, převzaté informace bez souhlasu, právo námitky, stížnost u ÚOOÚ,
   evidence v Excelu (bez kontaktů, jen lokálně), předávání do USA (jen GitHub), datum platnosti, čárka na konci seznamu práv).
4. Viditelnost: Google Search Console, Seznam Webmaster, `sitemap.xml`, `robots.txt`, Open Graph (náhled při sdílení), favicon.
5. Návštěvnost **bez cookies**: návrh GoatCounter (zdarma pro nekomerční weby), případně Cloudflare Web Analytics.
   Po přidání upravit v `ochrana-udaju.html` odstavec „Návštěvníci webu“.

## Nápady a úkoly do budoucna
- Filtrování: děti / dospělí.
- Filtrování podle lokality: Bystřice a okolní obce.
- ~~Karusel Služby~~ zrušeno 2026-11-14, nahrazen karuselem Letní tábory.
- Kontaktní formulář a automatizace přidávání nabídek. Položky formuláře jsou stejné jako v `pravidla.html`, část
  „Jak poslat nabídku“ (kam patří, název, popis, místo, od–do, podrobnosti, pro koho, odkaz, obrázek, souhlas).
  GitHub Pages formuláře sám neodesílá, bude potřeba externí služba.
