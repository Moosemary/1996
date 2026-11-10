# Moosemarys hemsida – Welcome to 1996

En autentisk 90-talssajt som ser ut som 1996. Ren HTML/CSS/JS, inga byggsteg, inga ramverk.
Texten är **på svenska**. Humor och kitsch, men med respekt för tidens estetik.

## Beslut (från intervjun)

| Fråga | Beslut |
|---|---|
| Språk | Helt svenska |
| Tema | Moosemarys personliga hemsida (Moosemary = maskot/ägare) |
| Intro | Klicka "Connect" → dial-up-skärm med modem-mp3, sedan laddas sajten |
| Gästbok | Fejkad: förskrivna roliga inlägg + formulär som "skickar" men inget sparas |
| Funktioner | Besöksräknare, marquee/blink/statusrads-scroller, webring + badges, frames + imagemap + musik + muspekar-svans |
| Länksida | Riktiga länkar + humoristiska 90-tals-kommentarer |
| Hosting | Netlify eller Cloudflare Pages (gratis), kod på GitHub i eget repo |
| Design | Kitschigt 1996: grå Netscape-nyanser, texturbakgrund, blå/lila länkar, Times New Roman, 3D-knappar, `<hr>`-linjer, skarpa pixelbilder |

## Befintliga resurser (`resources/`)

- `kindkinder-dial-up-modem-434763.mp3` – modemljudet till introt
- `under-construction90s-90s.gif` – "under construction"-gif
- `under construction.png` – statisk variant
- `wlan.gif` – (okänd, kontrollera vad den visar; kanske modem-/nätverksikon till intro-skärmen)

## Beslutade defaults (godkända – kör med parentesen)

Frågorna nedan är besvarade: **defaults gäller**. Repo-namn avgörs i Steg 0 (fråga då efter GitHub-användarnamn).

### Ursprungliga frågor och defaults

1. GitHub-användarnamn och repo-namn? (`1996`, publikt)
2. Ska Moosemary vara en riktig bild eller bara text? (Text i regnbågsfärger på roterande gif, plus en pixlad älg-ikon som vi ritar/hittar)
3. Besöksräknaren: riktig eller fejkad? (Fejkad men "uppdaterad": börjar på ett kul tal, +1 per besök via `localStorage`)
4. Musik: ingen MIDI-fil finns. (Skapa en kort 8-bitars/MIDI-liknande slinga med Web Audio, av/på-knapp, startar aldrig automatiskt)
5. Egen domän? (Nej, gratis `*.netlify.app` / `*.pages.dev` räcker)

## Filstruktur (mål)

```
1996/
├── index.html            # Modem-intro (Connect-knapp)
├── frameset.html         # Frames: meny + innehåll (valfritt, se steg 4)
├── welcome.html          # "Welcome to 1996"-sidan
├── links.html            # Länksidan
├── construction.html     # Under construction
├── guestbook.html        # Fejkad gästbok
├── about.html            # Om Moosemary + imagemap
├── css/style.css
├── js/{modem.js,counter.js,statusbar.js,trail.js,music.js}
├── resources/            # Befintliga filer + nya bilder/gifs
├── plan.md
└── README.md
```

## Steg

Varje steg är fristående och kan startas i ett nytt chattfönster. Starta med t.ex.
*"Läs plan.md och gör Steg N"*. Varje steg slutar med något som går att öppna i webbläsaren.

### Steg 0 – Repo och grund
- [x] `git init`, `.gitignore` (`.DS_Store`), `README.md`
- [x] Skapa mapparna enligt strukturen, flytta inget i `resources/`
- [x] Skapa `css/style.css` med gemensam 1996-stil: grå textur-bakgrund (generera liten tileable PNG eller CSS-mönster), Times New Roman, blå `#0000EE` / besökt lila `#551A8B` länkar, `<hr>` med 3D-effekt, 3D-knappar (outset/inset-ramar)
- [x] Skapa GitHub-repo (`gh repo create`, fråga innan push) och pusha
- **Klart när:** repot finns på GitHub och en tom stilad sida syns lokalt

### Steg 1 – Modem-intro (`index.html`)
- [x] Grå Windows 95-/Netscape-liknande dialogruta: "Ringer upp 1996…", ikon (`wlan.gif` om den passar)
- [x] Knapp "Connect" (krävs pga autoplay-regler) spelar modem-mp3:n
- [x] Statusrader som dyker upp i takt med ljudet: "Ringer…", "Handskakning…", "Ansluten 28 800 bps"
- [x] Framstegsstapel som kryper fram, därefter redirect till `welcome.html`
- [x] Ingen "Hoppa över"-länk, men Esc hoppar över (tillgänglighet)
- [x] Respektera `prefers-reduced-motion` med en diskret fallback
- **Klart när:** klick → modemljud → landar på `welcome.html`

### Steg 2 – Välkomstsidan (`welcome.html`)
- [x] Rubrik **"Välkommen till 1996!"**
- [x] Kort text: vad World Wide Web är, att det är 1996 (webben ~5 år gammal, CERN 1991), att de flesta är på 28,8k-modem
- [x] Nybörjarguide inspirerad av Netscapes välkomstsida (egna ord): klicka på blå/lila ord, bilder med ram är länkar, bakåt-knappen, hur man hittar tillbaka hit
- [x] Exempellänk ("här är ett exempel") som leder till en rolig mini-sida
- [x] Badges: "Bäst sett med Netscape Navigator 3.0", "Gjord i Anteckningar"
- [x] Marquee-text, `<blink>`-effekt via CSS/JS, roterande Moosemary-gif
- **Klart när:** en nybörjare förstår hur man surfar

### Steg 3 – Länksida (`links.html`)
Riktiga länkar, varje med en kort humoristisk kommentar och "NY!"-blinkgif:
- Space Jam: https://www.spacejam.com/1996/
- Netscape: http://home.mcom.com/home/welcome.html
- CERN – världens första webbsida: https://info.cern.ch/
- Web masters: http://www.netside.net/boba/webmasters.html
- Dole/Kemp – kampanjsida: https://www.dolekemp96.org/main.htm
- **Wayback Machine:** Passagen (OBS: din länk har datum 2026 – kontrollera/ersätt med ett 1996–2000-snapshot), The Old Net https://theoldnet.com/, Web Design Museum https://www.webdesignmuseum.org/
- [ ] Stil: punktlista med små ikoner, kategorier ("Coola sajter", "Historia", "Politik")
- [ ] Rensa/validera att länkarna lever, lägg till `target="_blank"`
- **Klart när:** alla länkar fungerar och sidan känns som en handplockad lista

### Steg 4 – Frames + navigation + imagemap
- [ ] `frameset.html` med vänster menyframe (`nav.html`) och innehållsframe (obs: `<frameset>` är föråldrat men fungerar fortfarande i moderna webbläsare; testa i Chrome/Safari/Firefox. Fallback: `<iframe>`-layout)
- [ ] Meny: Hem, Om Moosemary, Länkar, Gästbok, Under konstruktion
- [ ] `about.html` med imagemap (`<map>`/`<area>`) på en kitschig bild, t.ex. "Klicka på Moosemarys hus"
- **Klart när:** man navigerar hela sajten via menyn utan att tappa ramarna

### Steg 5 – Under construction
- [ ] `construction.html` med `under-construction90s-90s.gif`, texten "Sidan är under konstruktion!", skämtsam text ("Moosemary bygger… med två fingrar")
- [ ] Länkas från menyn och några döda länkar på andra sidor
- **Klart när:** sidan finns och gifen syns

### Steg 6 – Fejkad gästbok (`guestbook.html`)
- [ ] 8–12 förskrivna inlägg med namn, ort, e-post, hemsida, datum 1996 (humor!)
- [ ] Formulär "Skriv i gästboken" (namn, e-post, kommentar) med `Skicka`-knapp
- [ ] Vid "Skicka": 90-tals-dialog "Tack! Din kommentar har sparats" – inget sparas på riktigt; valfri extra rolig fel-/Oj-ruta
- **Klart när:** formuläret beter sig trovärdigt

### Steg 7 – Besöksräknare, scroller, svans, musik
- [ ] `counter.js`: "Du är besökare nr 004 217" med siffer-bilder/odometer-stil, +1 per besök via `localStorage`
- [ ] `statusbar.js`: text som rullar i `document.title`/statusraden (statusraden är borttagen i moderna webbläsare, så rulla titeln eller en egen fejkad statusrad längst ner)
- [ ] `trail.js`: glitter/stjärnor efter muspekaren
- [ ] `music.js`: Web Audio-baserad MIDI-liknande slinga; **av som default**, tydlig knapp "♫ Musik på/av"
- **Klart när:** alla fyra funkar på alla sidor via en delad `<script>`-include

### Steg 8 – Moosemary-gif och webring
- [ ] Roterande/kitschig "MOOSEMARY"-gif (inspiration: http://home.swipnet.se/~w-23622/ – kopiera inte). Skapa t.ex. med CSS 3D-rotation, eller generera animerad GIF via ett script (Python/Pillow)
- [ ] Webring-ruta: "Denna sida tillhör Älgringen ← Föregående | Slumpa | Nästa →" med fejkade/riktiga länkar
- [ ] 88×31-badges: Netscape Now!, Notepad, "Gjord på en Mac/PC", "Bäst sett i 800×600"
- **Klart när:** Moosemary syns på startsidan och webringen finns i sidfoten

### Steg 9 – Humor, polish, tillgänglighet
- [ ] Gå igenom alla sidor: stavning (svenska), kitsch-nivå, konsekvent stil
- [ ] Skämt: "Ladda ner Netscape 3.0 (7 MB, ~45 min)", "Mejla mig: moosemary@…", "Senast uppdaterad: 14 mars 1996"
- [ ] `alt`-texter, tangentbordsnavigering, ljud aldrig automatiskt
- [ ] Testa i Chrome, Safari, Firefox och på mobil (frames funkar sämre; ge fallback)
- **Klart när:** allt är genomgånget och inga trasiga länkar finns

### Steg 10 – Publicering
- [x] Koppla GitHub-repot till **Netlify** eller **Cloudflare Pages** (ingen build, publicera rotkatalogen)
- [x] Verifiera URL, ljud och frames på den publicerade sajten
- [x] Lägg URL i `README.md`
- **Klart när:** sajten är live på en publik adress

## Notis om hosting hos Claude

Jag kan publicera sidor som Claude-artifacts, men de passar bäst för enstaka sidor. De ligger på claude.ai med inbäddad wrapper och är inte optimala för multi-fil-sajter med frames, ljud och egen URL. Därför valdes Netlify/Cloudflare Pages. En artifact kan fortfarande vara en bra förhandsvisning av enstaka sidor.

## Förslag på fler 1996-saker (om du vill ha mer)

- "Senast uppdaterad"-datum och "Mejla mig"-länk
- Sidan "Mina favoritlänkar" med bokmärkesikon
- "Hotlist" / "Cool Site of the Day"
- Fejkad "Laddar bild… 12 kB av 340 kB"-framsteg på stora bilder (interlaced-känsla)
- 404-sida: "Dokumentet innehåller inga data" (autentiskt Netscape-fel)
- Textbaserad "Under konstruktion"-vandringsgif i sidfoten
