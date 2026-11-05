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
- **Stav:** online přes GitHub Pages, repozitář `Xuxa9/bystricko-na-nastence`, adresa https://xuxa9.github.io/bystricko-na-nastence/
- **Doména:** `nanastence.cz` je koupená u Webglobe (DNS spravuje Webglobe). Napojení na GitHub Pages právě nastavujeme.

### Sekce
- **Pohyb a kroužky:** sport, kroužky pro děti, cvičení pro dospělé, jóga, tanec, judo…
- **Místní nabídka:** domácí produkty, výrobky a řemesla, workshopy, sezónní nabídky a přebytky ze zahrad

### Jak to funguje
- Vzhled: **cyklické (nekonečné) karusely** s plakáty, na konci každého je karta „Přidat nabídku“.
- Plakáty jsou dvojího typu: **hotový plakát** (obrázek) nebo **plakát ze šablony** (`template`: pohyb / nabidka / akce).
- `data.js`: pole `offers`, každá nabídka má id, category, title, description, image, template, link,
  location {city, venue, address}, audience ["deti","dospeli"], publishedFrom, expiresAt (formát RRRR-MM-DD).
- `script.js`: vybere platné nabídky podle data, vykreslí karty do karuselů a ovládá karusel (šipky i swipe).
- `style.css`: vzhled. Barvy jsou v proměnných v `:root`, šablony mají třídy `template-*`.
- `images/`: obrázky, zatím `header-posters.png` (pozadí hlavičky).

### Obsah a provoz
- Plakáty zatím zadává autorka ručně do `data.js`.
- V plánu je e-mail pro zasílání nabídek (v kódu je zatím zástupný `vas@email.cz`), zvažuje i Facebookovou stránku.

## Co už jsme udělali
- 2026-11-03: Domluvili jsme, jak spolu budeme pracovat, a založili jsme tento soubor.
- 2026-11-03: Autorka představila projekt a Claude udělal první kontrolu kódu (viz níže).

- 2026-11-04: Projekt je na GitHubu a online přes GitHub Pages.
- 2026-11-05: Druhá kontrola kódu, autorka koupila doménu `nanastence.cz`.

## Na čem právě pracujeme
1. Napojení domény `nanastence.cz` na GitHub Pages (DNS u Webglobe, potom HTTPS). Domluveno na příště, postup už autorka dostala 2026-11-05.

Opravy z kontrol (stav k 2026-11-05):
1. [ ] Hotové plakáty se v kartě ořezávají (výška obrázku 220px + `object-fit: cover`), vyřešit poměr stran. **Odloženo**, až budou nahrané první plakáty.
2. [x] Kategorie karuselu přes `data-category`.
3. [x] Názvy kategorií přes `categoryNames`.
4. [ ] Karusel: rychlé klikání může „rozbít“ pozici, a při málo plakátech se vedle sebe ukazují kopie.
5. [x] Reduced motion se respektuje. **Nová chyba:** bez animace nepřijde `transitionend`, takže karusel po pár kliknutích „dojede na konec“ a zasekne se. Opravit spolu s bodem 4.
6. [x] `data.js`: med má vlastní název a popis.
7. [x] `style.css`: duplicity sloučené, vzhled beze změny (2026-11-05).
8. [x] Hlavička je teď `header-posters.jpg` (0,9 MB), PNG smazán (2026-11-05). Případně ještě zmenšit pod 500 kB.
9. [x] Karty „Přidat nabídku“ smazané z HTML, vytváří je jen JS (`createAddCard`) (2026-11-05).
10. [x] `.gitignore` (`._*`, `.DS_Store`) přidán, `._` soubory z repozitáře pryč (2026-11-05).
11. [ ] Drobnost: v `index.html` na řádku 42 je tlačítko na stejném řádku jako `<div class="carousel">`.

## Nápady a úkoly do budoucna
- Filtrování: děti / dospělí.
- Filtrování podle lokality: Bystřice a okolní obce.
- Karusel **Služby** s filtrováním podle kategorie a lokality.
- Kontaktní formulář a automatizace přidávání nabídek.
- Založit e-mail pro nabídky a nahradit `vas@email.cz`.
- Naučit se Git a nahrát projekt na GitHub (`._*` soubory z macOS dát do `.gitignore`).
