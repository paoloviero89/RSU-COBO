# App RSU COBO

Web app installabile sul telefono (Android e iPhone) con tre sezioni:

- **Aggiornamenti**: notizie dagli incontri con l'azienda e dalle assemblee
- **Contratto**: le proposte per il contratto interno e a che punto sono
- **Contatti**: delegati RSU, orari e luogo della saletta sindacale

Funziona anche senza rete: mostra l'ultima versione scaricata.

Il pulsante col **QR code** in alto a destra mostra il codice da far inquadrare ai colleghi, permette di inviare o copiare il link e apre il **volantino A4** da stampare per la bacheca. Il QR si genera da solo con l'indirizzo reale dell'app: non va configurato.

---

## Prima di pubblicare: cosa diventa pubblico

Con l'account gratuito, GitHub Pages pubblica solo da repository **pubblici**:

- **il sito** è raggiungibile da chiunque abbia il link (i motori di ricerca sono esclusi, ma questo non lo protegge);
- **i file del repository** sono leggibili da chiunque su github.com, compresa la cronologia delle modifiche. Anche ciò che cancellate resta visibile nelle versioni precedenti.

Quindi:

- pubblicate solo ciò che appendereste nella bacheca sindacale in mensa. **Le proposte per il contratto le leggerà anche l'azienda**;
- per **nomi, telefoni ed email dei delegati** chiedete prima il consenso di ciascuno. Il numero personale è facoltativo: si può lasciare vuoto o mettere un numero di servizio;
- niente nomi di lavoratori o casi personali negli aggiornamenti.

---

## 1. Pubblicare l'app (una volta sola)

1. Create un account su https://github.com (gratuito).
2. In alto a destra: **+ → New repository**.
   - Repository name: ad esempio `rsu-cobo` (diventa parte dell'indirizzo)
   - Visibilità: **Public**
   - Premete **Create repository**.
3. Nella pagina del repository vuoto, cliccate **uploading an existing file**.
4. Trascinate **il contenuto** della cartella `rsu-app`, non la cartella stessa: `index.html`, `volantino.html`, `app.js`, `stile.css`, `sw.js`, `manifest.webmanifest`, `robots.txt`, `README.md` e le cartelle `dati`, `fonts`, `icone`, `lib`. Poi premete **Commit changes**.
5. Andate in **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main**, cartella **/ (root)** → **Save**
6. Dopo 1–2 minuti, in cima alla stessa pagina compare l'indirizzo, del tipo:
   `https://vostro-utente.github.io/rsu-cobo/`

Il file nascosto `.nojekyll` può non essere caricato trascinando: non è un problema, l'app funziona lo stesso.

---

## 2. Installarla sul telefono

Aprite l'indirizzo dal telefono, poi:

- **iPhone (Safari)**: pulsante **Condividi** → **Aggiungi alla schermata Home**
- **Android (Chrome)**: compare il pulsante **Installa** nell'app. In alternativa: menu **⋮** → **Installa app** oppure **Aggiungi a schermata Home**

Compare l'icona rossa **RSU** e l'app si apre a schermo intero.

---

## 3. Aggiornare i contenuti

I contenuti stanno in tre file di testo nella cartella `dati`:

| File | Sezione dell'app |
|---|---|
| `dati/aggiornamenti.md` | Aggiornamenti |
| `dati/proposte.md` | Contratto |
| `dati/contatti.md` | Contatti |

### Da computer o telefono, sul sito di GitHub

1. Aprite il file e premete la **matita** (Edit) in alto a destra.
2. Scrivete. La scheda **Preview** mostra come viene il testo.
3. Premete **Commit changes**, poi di nuovo **Commit changes**.

Dopo circa un minuto i telefoni vedono la novità alla prossima apertura dell'app.

In cima a ogni file c'è un riquadro con le istruzioni (tra `<!--` e `-->`). Non compare nell'app: lasciatelo lì come promemoria.

### Le regole, in breve

- **Ogni voce inizia con `# Titolo`**: un cancelletto, uno spazio, il titolo.
- **Subito sotto**, senza righe vuote in mezzo, le informazioni nella forma `chiave: valore`, ad esempio `data: 25/10/2026`.
- Poi **una riga vuota** e il testo libero:
  - una riga vuota separa i paragrafi;
  - le righe che iniziano con `- ` diventano un elenco;
  - `**parole**` diventa **grassetto**;
  - i link `https://...` diventano cliccabili.
- **Le date** si scrivono come vi viene naturale: `25/10/2026` oppure `25/10/26`.
- **Per cancellare una voce**, eliminate tutto dal suo `#` fino al `#` successivo.

### Esempio: `aggiornamenti.md`

```markdown
# Incontro sul premio di risultato
data: 20/11/2026
tipo: Incontro con l'azienda

Punti discussi:
- indicatori 2027
- calendario degli incontri

Prossimo incontro: **4 dicembre**.
```

- `tipo` è facoltativo e libero (es. *Assemblea*, *Comunicazione*).
- `in evidenza: sì` fissa la notizia in cima, con il bordo rosso.
- L'ordine nel file non conta: l'app mostra prima le più recenti. Le notizie degli ultimi 7 giorni hanno l'etichetta **Nuovo**.

### Esempio: `proposte.md`

```markdown
# Più welfare convertibile
ambito: Welfare aziendale
stato: presentata
aggiornato: 20/11/2026
richiesta: Portare la quota welfare annua da 500 € a 800 €

Perché è importante, dati a supporto...
```

Valori per `stato`:

| Scrivete | Nell'app compare |
|---|---|
| `bozza` | In preparazione |
| `presentata` | Presentata all'azienda |
| `trattativa` | In trattativa |
| `ottenuta` | Ottenuta |
| `respinta` | Non accolta |

### Esempio: `contatti.md`

Il file ha tre sezioni fisse: lasciate i titoli `# Saletta sindacale`, `# Delegati RSU` e `# Altri contatti`. Le persone e le voci sotto le sezioni iniziano con **due** cancelletti `## `.

```markdown
# Saletta sindacale
luogo: Primo piano, accanto alla mensa
note: Fuori orario, scrivete a un delegato.

- Martedì: 12:30 – 13:30
- Giovedì: 16:30 – 17:30

# Delegati RSU

## Mario Rossi
ruolo: Delegato RSU
reparto: Produzione
telefono: 333 1234567
email: mario.rossi@example.com

# Altri contatti

## Sede territoriale
Via ..., Brescia
https://...
```

- Con gli orari scritti come `12:30 – 13:30`, l'app indica da sola se la saletta è **aperta ora**, **apre oggi alle…** o è **chiusa per oggi**. Per più fasce nello stesso giorno: `- Lunedì: 9:00 – 10:00, 14:00 – 15:00`.
- `telefono` ed `email` sono facoltativi: se ci sono, compaiono i pulsanti per chiamare o scrivere.

### Editor consigliati

- **Sito di GitHub (matita)**: il più semplice, funziona anche da telefono, con anteprima.
- **github.dev**: nella pagina del repository premete il tasto `.` (punto). Si apre un editor completo nel browser, comodo per modificare più file insieme.
- **Visual Studio Code** o **Obsidian** sul computer, se preferite lavorare in locale con GitHub Desktop.

---

## 4. Modificare l'app stessa (raro)

Se cambiate `index.html`, `stile.css`, `app.js` o `volantino.html`, aprite `sw.js` e aumentate il numero in `const VERSIONE = "rsu-v3";` (es. `"rsu-v4"`). Così i telefoni scaricano la nuova versione. Per i file in `dati` non serve.

- **Nome dell'app**: si cambia in `manifest.webmanifest` (`name`, `short_name`) e in `index.html` (`<title>` e `apple-mobile-web-app-title`).
- **Icone**: stanno nella cartella `icone`.
- **Colori**: in cima a `stile.css` ci sono `--fim-verde` e `--fim-rosso`, ripetuti nel blocco per il tema scuro, dove si chiamano `--bar` e `--hot`. Altri due punti da cambiare:
  - il verde in `theme-color` in `index.html` e in `manifest.webmanifest`;
  - i colori `--verde` e `--rosso` in cima a `volantino.html`.
- **Logo**: l'app usa solo i colori, non il logo FIM. Se volete inserire il logo ufficiale, chiedetelo alla vostra struttura territoriale e mettetelo nella cartella `icone`.
