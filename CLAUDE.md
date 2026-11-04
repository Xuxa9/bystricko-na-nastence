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
- **Stav:** zatím jen lokálně, později se bude pushovat na GitHub

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

## Na čem právě pracujeme
Opravy z první kontroly (2026-11-03), postupně po jedné:
1. [ ] Hotové plakáty se v kartě ořezávají (výška obrázku 180px + `object-fit: cover`), vyřešit poměr stran.
2. [ ] Kategorie karuselu se pozná podle `#movement-title`, nahradit atributem `data-category` (kvůli dalším karuselům).
3. [ ] Popisek kategorie v kartě je jen „ano/ne“ (pohyb, nebo nabídka), nahradit přehledem názvů kategorií.
4. [ ] Karusel: rychlé klikání může „rozbít“ pozici, a při málo plakátech se vedle sebe ukazují kopie.
5. [ ] JS přepisuje `transition`, takže se ignoruje nastavení „omezit pohyb“ (prefers-reduced-motion).
6. [ ] `data.js`: druhá nabídka (`med-bystrice-001`) má zkopírovaný název a popis z DDM.
7. [ ] `style.css`: `.offer-card` a `.add-card` jsou definované dvakrát s jinými hodnotami, sjednotit.
8. [ ] `header-posters.png` má 3 MB, zmenšit a zkomprimovat.
9. [ ] Karty „Přidat nabídku“ jsou v HTML i v JS (duplicita textů a e-mailu).

## Nápady a úkoly do budoucna
- Filtrování: děti / dospělí.
- Filtrování podle lokality: Bystřice a okolní obce.
- Karusel **Služby** s filtrováním podle kategorie a lokality.
- Kontaktní formulář a automatizace přidávání nabídek.
- Založit e-mail pro nabídky a nahradit `vas@email.cz`.
- Naučit se Git a nahrát projekt na GitHub (`._*` soubory z macOS dát do `.gitignore`).
