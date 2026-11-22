const v=[{id:"135",label:"1-3-5",degrees:[1,3,5],lesson:0},{id:"72",label:"7-2",degrees:[7,2],lesson:1},{id:"46",label:"4-6",degrees:[4,6],lesson:2},{id:"all",label:"Tutti",degrees:[1,2,3,4,5,6,7],lesson:null}],f=e=>v.find(i=>i.id===e);function S(e){return e<3?v[e].id:"all"}function D(e,i){return!0}const b=3;function x(e,i,a=Math.random){const t=e.slice(-b),o=i.length>1&&t.length===b&&t.every(n=>n===t[0])?t[0]:null;for(;;){const n=i[Math.floor(a()*i.length)%i.length];if(n!==o)return n}}const C=8,R=e=>e>=C-1,w=8,A=["135","72","46"];function E(e,i=w){return e/i>=.8}function $(e){return e.length===A.length&&e.every(i=>E(i))}function N(e,i){return i==="exam"?[...f("all").degrees]:[...f(e).degrees]}function K(e,i,a,t){if(e==="all")return{title:"Esame del Gradus I",lines:["Tre blocchi da 8 domande: 1-3-5, poi 7-2, poi 4-6.","Rispondi tra tutti e sette i gradi, senza bordone.","Si supera con 7 giuste su 8 in ogni blocco.","Superato: il Gradus I è completo e il filo della spirale cresce."],advice:a<3?"M∂ster consiglia di arrivarci dopo gli esamini dei tre gruppi.":null};const o=f(e).label;return{title:`Esamino · ${o}`,lines:[`8 domande sui gradi ${o}, senza bordone.`,"La cadenza suona quando cambia la tonalità; «Riascolta» la fa sentire quando vuoi.","Si supera con 7 giuste su 8.","Superato: M∂ster ti propone il gruppo successivo."],advice:i<t?"M∂ster consiglia di arrivarci alla bandierina ⚑ delle tacche.":null}}function O(e,i,a){const t=v.filter(n=>n.id!=="all").map((n,r)=>({group:n.id,title:`Gradi ${n.label}`,note:r<e?"Esamino superato":`${r===e?"In corso":"Da fare"} · gradino: ${a(n.id)}`,state:r<e?"done":r===e?"now":"todo"})),o={group:"all",title:"Tutti i gradi · Esame del Gradus I",note:i?"Esame superato · ripasso sempre aperto":`Tre blocchi da 8, 7 giuste su 8 in ciascuno · gradino: ${a("all")}`,state:i?"done":e>=3?"now":"todo"};return[...t,o]}const I=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function m(e){return I(e).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g,"$1<em>$2</em>")}const z=e=>e.trim().replace(/^\||\|$/g,"").split("|").map(i=>i.trim());function y(e){const i=[],a=e.replace(/\r/g,"").split(`
`);let t=[],o=null;const n=()=>{t.length&&i.push(`<p>${m(t.join(" "))}</p>`),t=[],o&&i.push(`<${o.tag}>${o.items.map(r=>`<li>${m(r)}</li>`).join("")}</${o.tag}>`),o=null};for(let r=0;r<a.length;r++){const c=a[r],d=/^(#{1,3}) (.+)$/.exec(c),p=/^[-*] (.+)$/.exec(c),l=/^\d+\. (.+)$/.exec(c);if(!c.trim())n();else if(d)n(),i.push(`<h${d[1].length}>${m(d[2])}</h${d[1].length}>`);else if(c.startsWith("|")&&/^\|[\s|:-]+\|$/.test(a[r+1]??"")){n();const s=z(c),u=[];for(r+=2;r<a.length&&a[r].startsWith("|");)u.push(z(a[r++]));r--,i.push(`<table><thead><tr>${s.map(h=>`<th>${m(h)}</th>`).join("")}</tr></thead><tbody>${u.map(h=>`<tr>${h.map(L=>`<td>${m(L)}</td>`).join("")}</tr>`).join("")}</tbody></table>`)}else if(p||l){const s=p?"ul":"ol";(t.length||o&&o.tag!==s)&&n(),o??(o={tag:s,items:[]}),o.items.push((p??l)[1])}else o&&/^\s+\S/.test(c)?o.items[o.items.length-1]+=` ${c.trim()}`:(o&&n(),t.push(c.trim()))}return n(),i.join(`
`)}function J(e){const i=e.replace(/\r/g,"").split(/^## /m),a=y(i[0]),t=i.slice(1).map(o=>{const n=o.indexOf(`
`),r=n<0?o:o.slice(0,n),c=n<0?"":o.slice(n+1);return`<details class="topic"><summary>${m(r.trim())}</summary>${y(c)}</details>`});return[a,...t].join(`
`)}const V=`# Il metodo nel dettaglio

Come funziona RAVEL e perché. Tocca un argomento per aprirlo; tocca di nuovo il titolo per chiuderlo.

## 1. L'orecchio relativo e la tonica

Quasi nessuno ricorda le altezze esatte di una melodia; tutti ne ricordano le relazioni. Per questo riconosciamo una canzone anche se parte più in alto o più in basso. (McDermott, Lehr, Oxenham, «Is Relative Pitch Specific to Pitch?»)

Anche i neonati riconoscono una melodia trasposta. L'altezza relativa, dunque, nasce senza addestramento: RAVEL allena qualcosa che c'è già. (McDermott, Lehr, Oxenham; McDermott e Oxenham, «Music perception, pitch, and the auditory system»)

L'orecchio assoluto, cioè riconoscere una nota senza riferimenti, è raro: una divulgazione dell'American Psychological Association parla di circa una persona su 10.000 negli Stati Uniti. (Dingfelder, «Most people show elements of absolute pitch») RAVEL non lo insegna e non lo richiede.

Dentro una tonalità i suoni non sono tutti uguali. Negli esperimenti di Carol Krumhansl e Kessler chi ascolta giudica la tonica il suono più adatto, poi il 3 e il 5; i gradi della scala più degli altri suoni. (Krumhansl e Kessler, «Tracing the dynamic changes in perceived tonal organization…»)

Questa gerarchia è anche una gerarchia di tensione: i gradi meno stabili «chiedono» di proseguire. (Maimon, Lamy, Eitan, «Tonal hierarchy and tonal valence») È ciò che nell'app chiamiamo tonica, riposo e tensione: la tonica è il centro attorno a cui girano tutti gli altri suoni; quando la musica ci arriva, chi ascolta si sente a casa.

Gary Karpinski ne trae la conseguenza didattica: la prima cosa che fa chi ascolta è trovare la tonica, e ogni grado prende la sua funzione dal rapporto con lei. (Karpinski, «A Cognitive Basis for Choosing a Solmization System») Per questo in RAVEL ogni suono si sente dopo la tonica, mai da solo.

## 2. Perché i numeri dei gradi e il do mobile

In RAVEL si pensa e si risponde con i numeri dei gradi, 1–7; si canta con il do mobile; le note reali si chiamano C–B. Tre nomi, tre compiti: il ruolo, il canto, il tasto.

Il numero dice il ruolo del suono rispetto alla tonica e non cambia con la tonalità. È il nome più diretto di ciò che l'orecchio relativo sente.

Il do mobile mette il do sulla tonica. Karpinski lo raccomanda per l'ascolto proprio perché segue il processo mentale: prima la tonica, poi tutto il resto a partire da lei. (Karpinski, «A Cognitive Basis…»)

Karpinski è onesto su un punto: gli studi che confrontano i sistemi di solfeggio danno risultati discordi e non conclusivi. La sua tesi poggia sulla ricerca sulla percezione, non su quei confronti. RAVEL non afferma che il do mobile «funziona meglio»; afferma che corrisponde a come si ascolta.

Il do mobile è anche la base del metodo di Zoltán Kodály, nelle scuole ungheresi dal 1945. (UNESCO, «Safeguarding of the folk music heritage by the Kodály concept»; voce «Kodály method» di Wikipedia, fonte secondaria)

Perché «ti» e non «si». In Italia do, re, mi sono i nomi dei tasti (do fisso); per non confonderli, i tasti si chiamano C–B. Il 7 si canta «ti» perché «si» è anche un tasto e perché così ogni sillaba ha un'iniziale diversa: è la ragione storica del cambio nel tonic sol-fa inglese. (The Canadian Encyclopedia, «Solmization»)

Le sillabe cromatiche seguono l'uso standard: salendo di, ri, fi, si, li; scendendo ra, me, se, le, te. Per questo «si» tornerà, come 5 alzato, tra il 5 e il 6.

**Il minore.** Karpinski raccomanda per l'ascolto il minore con il do sulla tonica, non quello con il la. RAVEL fa così: nel minore la tonica resta 1 e do; si risponde 1–7, e accanto al 3 e al 6 compare un piccolo ♭ («più basso che nel maggiore»); il colore lo dicono anche le sillabe me e le. Anche i modi tengono la tonica su 1 e do.

## 3. Il percorso: spirale, Core e materie a scelta

Il percorso è costruito come un piano di studi: un percorso obbligatorio, il Core, e materie a scelta su binari separati.

Il Core: gradi nel contesto, in maggiore e in minore; modi; basso e funzioni armoniche; cromatismo; modulazione; intervalli, anche composti; tastiera di base; orecchio interno.

Le materie a scelta: ritmo avanzato (Time & Rhythm, con le sillabe Takadimi), lettura cantata a prima vista, musica senza tonalità, schemi e partimento, polifonia e timbri, area direttore (traspositori, chiavi, partitura). Non bloccano il Core, ma hanno livelli propri: un livello avanzato di una materia non si supera mentre il Core è al livello base. Si scelgono dal Piano di studi.

Il percorso è a spirale: più argomenti avanzano insieme e insieme portano al livello successivo. Il Core è l'asse della spirale: la linea che sale dal basso fino in cima. Le materie a scelta sono fili sottili che si avvolgono attorno a lui, e si fanno più intensi a ogni Gradus superato. Ogni tappa si chiama Gradus; in cima, staccato, c'è il Parnassum.

Non devi pianificare nulla: premi «Ascendi» e il passo successivo lo sceglie l'app. In ogni Gradus si comincia dalla Lezione del Maestro con gli esercizi propedeutici; superati quelli, il Gradus si apre direttamente sull'esercizio completo.

Ogni nodo è propedeutico ai successivi. Se l'app vede una lacuna in un nodo già superato, torna indietro e la fa riassimilare.

Chi è già avanti non deve rifare il cammino del principiante: ciò che aiuta chi comincia può diventare un peso per chi è esperto (effetto di inversione con l'esperienza). (Kalyuga, Ayres, Chandler e Sweller, «The expertise reversal effect») Per questo il percorso si adatterà al livello reale.

## 4. La Lezione del Maestro e i tre esami

Prima l'esperienza, poi il nome. Ogni nodo si apre con la Lezione del Maestro: non si comincia con un quiz senza aver dato i mezzi per risolverlo.

La lezione ha tre parti. Ascolta: schede brevi, ognuna con un suono che dimostra da solo ciò che dice il testo. Canta con me: si cantano i gradi nuovi, uno alla volta. Prova: si risponde da soli.

La lezione si può ripetere quanto si vuole, oppure saltare per andare subito all'esercizio. Agli esami si passa quando ci si sente pronti.

I gradi arrivano a gruppi, non uno alla volta: un grado si capisce nel suo gruppo. L'ordine segue Karpinski: 1-3-5, poi 7-2, poi 4-6, poi tutti e sette insieme. Nella Prova compaiono solo gradi già trattati.

Ogni nodo si supera in tre esami, tutti e tre, senza verifiche a campione: **percepire** (riconoscere ciò che senti), **riprodurre** (cantarlo o suonarlo), **anticipare** (sentire dentro di te ciò che verrà, prima che suoni).

**Nella Prova si risponde solo toccando.** Ricantare la nota appena sentita non prova che la riconosci: il microfono trova il grado al posto tuo. La voce resta in «Canta con me» e, in futuro, nell'esame «riprodurre».

## 5. Il dono: quando una risposta è un automatismo

Lo scopo è la percezione immediata, non un'informazione da richiamare e calcolare. Lo chiamiamo dono.

La teoria del carico cognitivo dà una spiegazione utile. Ogni informazione nuova passa da una memoria di lavoro piccola e breve; ciò che è già in memoria a lungo termine, ben organizzato, si usa senza quei limiti. (Sweller, van Merriënboer, Paas, «Cognitive Architecture and Instructional Design: 20 Years Later»)

Un grado diventa un dono quando non va più «ragionato»: lo riconosci come riconosci una voce. Per questo la padronanza si misura dal tempo di risposta, dentro la musica, a tempo. Il cronometro resta nascosto: non vedrai mai secondi sullo schermo.

Un calcolo all'inizio è accettato, se serve a costruire la percezione; poi deve sparire. Il traguardo non è sapere la regola, ma non averne più bisogno.

## 6. Come si studia: poco alla volta, poco e spesso, mettendosi alla prova

**Poco alla volta.** La memoria di lavoro regge pochi elementi nuovi. Per questo ogni lezione porta pochi gradi, con esempi ascoltati prima degli esercizi. (Sweller, van Merriënboer, Paas)

**Poco e spesso.** Una grande rassegna di 317 esperimenti mostra che distribuire lo studio nel tempo fa ricordare meglio che concentrarlo in una volta; l'intervallo migliore cresce con il tempo per cui si vuole ricordare. (Cepeda, Pashler, Vul, Wixted, Rohrer, «Distributed practice in verbal recall tasks»)

**Mettendosi alla prova.** In una rassegna su dieci tecniche di studio, autoverifica e pratica distribuita risultano le più utili; rileggere e sottolineare, tra le meno utili. (Dunlosky, Rawson, Marsh, Nathan, Willingham, «Improving Students' Learning With Effective Learning Techniques») Per questo in RAVEL si risponde sempre: rispondere è studiare.

**Il limite, detto chiaro.** Queste prove riguardano soprattutto parole e studio in generale. Nella musica i pochi studi sono meno netti.

In uno studio su 100 principianti al pianoforte, pause di pochi minuti tra le ripetizioni non hanno dato alcun vantaggio; gli autori notano che in tempi così brevi c'era poco da dimenticare. (Wiseheart, D'Souza, Chae, «Lack of spacing effects during piano learning»)

In un altro studio, l'autoverifica per memorizzare melodie al pianoforte ha dato vantaggi piccoli, non significativi, su campioni piccoli. (Telesco, Karaca, Ewing, Gilbert, Lipitz, Weinstein-Jones, «Does Retrieval Practice Enhance Memorization of Piano Melodies?») Nessuno dei due riguarda l'orecchio.

Quindi per l'orecchio questi principi sono un'ipotesi ragionevole, non un fatto dimostrato. RAVEL li adotta e li mette alla prova.

**Senza punizioni.** Nessuna penalità per i giorni saltati, durata delle sessioni libera. È una scelta di metodo, pensata anche per chi fatica a seguire un programma rigido, non un risultato della ricerca.

## 7. Canto e bordone

**Il canto.** Nel metodo Kodály il canto è la base dell'educazione musicale, e il suono viene prima del segno. (voce «Kodály method» di Wikipedia, fonte secondaria) RAVEL lo segue: si canta con il do mobile, e la voce serve all'esame «riprodurre».

Cantare e sentire, però, non sono la stessa abilità. Chi canta stonato spesso distingue le altezze bene quanto chi canta intonato: il problema sta nel tradurre il suono in voce, non nel sentirlo. (Pfordresher e Brown, «Poor-pitch singing in the absence of "tone deafness"») Per questo in RAVEL un canto stonato non dice che l'orecchio è debole, e il canto non è l'unica prova.

C'è anche un limite pratico: se ripeti la nota appena sentita, il microfono trova il grado per te. Per questo il canto, da solo, non basta come prova di percezione.

**Il bordone.** È la tonica tenuta, grave e continua: un riferimento sempre presente, che aiuta a sentire ogni grado rispetto alla tonica. Viene dal metodo di Francesco Villa, «L'Orecchio Tonale».

Il bordone è di sola tonica, senza la quinta: la quinta stride con il 4 e con gli accordi di sottodominante e dominante. Se lo accendi, resta continuo anche sotto la cadenza, come un pedale di tonica.

Senza cuffie il bordone tace mentre canti: il microfono lo scambierebbe per la tua voce. Con le cuffie resta acceso.

**Bordone guidato.** Nell'Ascolta è spento; in «Canta con me» è acceso; nella Prova lo decide l'app, acceso nei primi quattro esercizi e spento negli altri quattro, con il punteggio diviso. Negli esami è sempre spento.

**Dopo, con gli accordi.** Per sentire gli accordi come un tutto, il Do/Ti Test: si tiene cantato il do e si passa al ti quando l'accordo lo chiede. (Stevens, «The Do/Ti Test», in Chenette, *Foundations of Aural Skills*) Arriva con gli esercizi sugli accordi.

## 8. Cosa non facciamo, e perché

**Intervalli isolati come punto di partenza.** Riconoscere intervalli, o anche gradi, fuori contesto dice sorprendentemente poco su come si ascolta una melodia: molti studenti non trasferiscono quell'abilità. (Lake, «Interval and Scale-Degree Strategies in Melodic Perception») Per questo in RAVEL anche i gradi si sentono sempre dopo la cadenza, dentro la tonalità. In musica tonale l'errore tipico non è sbagliare la distanza, ma sbagliare il grado. (Castro, «Playing With Motives: Aural Skills Exercises for Tonal Structure»)

Detto per onestà: Lake accetta gli esercizi isolati come primo passo, purché legati poi a note e melodie vere. RAVEL sceglie di partire subito dal contesto.

Gli intervalli restano nel Core, anche composti, ma dentro la tonalità. Lake osserva che il pensiero per intervalli serve davvero nella musica atonale: lì entra, nella materia a scelta «musica senza tonalità». La strategia ideale, scrive, è flessibile.

**Le canzoni degli intervalli** («la quarta è l'inizio di…»). Lake le chiama una stampella da superare: la risposta deve diventare quasi istantanea. Ricordare una canzone e confrontarla è proprio il calcolo che RAVEL vuole evitare.

**I ragionamenti scala-accordo** («è il terzo grado, quindi l'accordo è…»). Sono regole da applicare, non percezione: il contrario del dono. Le funzioni si sentono come riposo e tensione, prima di avere un nome.

**Un nodo per ogni scala o modo.** Allenarsi su molte scale diverse diventa riconoscimento di schemi, non orecchio. I suoni si riconoscono anche nel contesto modale, con la tonica sempre 1.

**Accordi prima del tempo.** Nelle lezioni sui gradi gli accordi danno solo il senso della tonalità; diventano argomento più avanti, nel loro Gradus.

## 9. Che cosa è ancora ipotesi

- Che la pratica distribuita e l'autoverifica funzionino per l'orecchio come per le parole (argomento 6).
- Che il do mobile sia migliore del do fisso o dei soli numeri: gli studi non lo dicono (argomento 2).
- Che cantare migliori la percezione: pratica didattica antica, prova scientifica non trovata (argomento 7).
- Che il tempo di risposta misuri davvero un automatismo: la soglia è ancora da fissare (argomento 5).
- Che l'ordine 1-3-5, 7-2, 4-6 sia il migliore per tutti: è una scelta di metodo, non un risultato sperimentale.
- Che accettare sia il puro sia il temperato sia la regola giusta per chi canta: è una scelta ragionevole, da mettere alla prova (argomento 10).
- Che i traguardi in cents di Intonation siano quelli giusti, anche con l'altoparlante del telefono (argomento 10).

RAVEL è in prova: senza account e senza salvare la tua voce. Le risposte dei tester diranno, col tempo, che cosa funziona.

## 10. Intonation: sentire se una nota è giusta

Intonation è una materia a scelta. Non chiede quale grado senti, ma se una nota è giusta, o un poco più alta (crescente) o più bassa (calante). Tre livelli: una nota sul bordone o all'unisono; un grado stonato in una frase; una voce stonata in un accordo.

**Il cent.** Le piccole distanze tra i suoni si misurano in cents. Tra due tasti vicini del pianoforte ci sono 100 cents; in un'ottava, 1200. L'unità è stata introdotta da Alexander J. Ellis nel 1885. (HyperPhysics, «The Use of Cents…»; voce «Cent (music)» di Wikipedia, fonte secondaria)

**Dal grande al piccolo.** Si comincia da circa 40 cents, una distanza che si sente bene, e si scende fino al traguardo del livello: 12 cents nel primo, 18 nel secondo, 10 nel terzo. In uno studio sull'ascolto, chi si era allenato passando da distinzioni facili a distinzioni difficili rispondeva meglio, e generalizzava meglio, di chi si era allenato solo su quelle difficili, pur avendone fatte di meno. (Liu, Mercado, Church, Orduña, «The Easy-to-Hard Effect…»)

La distanza si regola da sola: dopo due risposte giuste di fila si stringe, dopo una sbagliata si allarga un poco. È una scala adattiva classica della psicoacustica: si assesta dove si risponde giusto circa sette volte su dieci. Così l'esercizio non è mai troppo facile né troppo difficile. (Levitt, «Transformed Up-Down Methods in Psychoacoustics»)

Allenarsi serve. In uno studio, chi non suonava partiva con soglie più di sei volte più grandi di quelle di musicisti di formazione classica; con un allenamento mirato, di circa 4–8 ore in tutto, le raggiungeva. (Micheyl, Delhommeau, Perrot, Oxenham, «Influence of musical and psychoacoustical training on pitch discrimination»)

**Con cosa ascolti.** Con l'altoparlante del telefono i traguardi si fermano a 15 cents; sotto servono cuffie o casse buone. È una soglia prudente, scelta da noi, non un risultato della ricerca.

**Puro e temperato.** Il pianoforte usa il temperamento equabile: tra due tasti vicini ci sono sempre 100 cents. Gli intervalli puri nascono da rapporti semplici tra le frequenze: l'ottava 2:1, la 5ª 3:2, la 3ª maggiore 5:4. Fatto il calcolo (1200 per il logaritmo in base 2 del rapporto), la 3ª maggiore pura misura circa 386 cents, quella del pianoforte 400: 14 cents di differenza. La 5ª pura supera quella del pianoforte di 2 cents. Unisono e ottava sono uguali nei due sistemi.

Chi canta senza accompagnamento non segue con esattezza nessuno dei due. Negli studi sul canto a cappella, dai quartetti ai cori, gli intervalli cantati cadono spesso vicino al temperato, oppure tra il puro e il temperato. (Dai e Dixon, «Intonation Trajectories within Tones in Unaccompanied Soprano, Alto, Tenor, Bass Quartet Singing», con la loro rassegna degli studi precedenti)

Per questo in Intonation, a cappella e sul bordone, sono giusti tutti e due; con il pianoforte vale il temperato. Stonata è solo una nota fuori da entrambi. Dopo la risposta l'app dice quale dei due hai sentito.

**I battimenti.** Quando due suoni hanno frequenze molto vicine, il volume sale e scende con regolarità: sono i battimenti. I battimenti al secondo sono pari alla differenza tra le due frequenze: 500 e 496 Hz battono 4 volte al secondo. Quando le frequenze coincidono, i battimenti spariscono; gli accordatori di pianoforte li usano per intonare gli unisoni. (Simon Fraser University, Sonic Studio, «Beats») Per esempio, con una nota a 262 Hz, la stessa nota crescente di 8 cents batte circa una volta al secondo: un'onda lenta, facile da seguire.

Nei suoni veri i battimenti nascono anche tra le armoniche, i suoni più deboli contenuti in ogni nota. Sulla chitarra, quando la corda di la è accordata con quella di mi, la terza armonica della prima smette di battere con la quarta armonica della seconda. (Physclips, UNSW, «Interference beats and Tartini tones») Per questo, nel terzo livello, si può riprodurre anche con la manopola d'accordatura: si gira finché l'onda rallenta e si ferma.

**Perché sempre lo stesso timbro.** Altezza e timbro non sono del tutto separati. In uno studio, i cambi di timbro disturbavano il giudizio sull'altezza, e i cambi di altezza quello sul timbro, tanto più quanto più grande era il cambio. (Caruso e Balaban, «Pitch and timbre interfere when both are parametrically varied»)

Anche la brillantezza conta. In uno studio, suoni di tromba e di voce di tenore sono stati sentiti in media 15–20 cents più alti di suoni di viola alla stessa frequenza. (Vurma e altri, «Does timbre affect pitch?», riferito da Vurma 2014) In un altro, chi ascoltava non riconosceva con sicurezza nemmeno 40 cents di differenza quando la nota più alta aveva il timbro più scuro. (Vurma, «Timbre-induced pitch shift…») Sono misure su suoni e ascoltatori precisi, non una regola fissa. Ma bastano per una scelta: nei tre livelli il timbro è uno solo, morbido, così l'orecchio segue solo l'altezza. I timbri diversi arrivano dopo.

**Il microfono e «La tua intonazione».** Quando canti, il microfono misura di quanti cents la tua voce è sopra o sotto, e te lo mostra dopo la risposta. Alla fine di ogni livello puoi mettere alla prova la tua voce; se resta dentro il traguardo, il filo della tua intonazione si accende.

Non blocca nulla: si avanza con l'orecchio. Sentire e cantare intonato sono abilità diverse: chi canta stonato spesso distingue le altezze bene quanto chi canta intonato. (Pfordresher e Brown, argomento 7) Fermare l'orecchio per aspettare la voce sarebbe ingiusto e scoraggiante; questa è una scelta di metodo, non un risultato della ricerca. Il microfono resta facoltativo e la voce non si salva.

## 11. Fonti

Parafrasi nostre.

| Autori | Titolo | Dove | Argomento |
| --- | --- | --- | --- |
| Josh H. McDermott, Andriana J. Lehr, Andrew J. Oxenham | «Is Relative Pitch Specific to Pitch?» | *Psychological Science* 19 (2008) — https://pmc.ncbi.nlm.nih.gov/articles/PMC2841133 | 1 |
| Josh H. McDermott, Andrew J. Oxenham | «Music perception, pitch, and the auditory system» | *Current Opinion in Neurobiology* 18 (2008) — https://mcdermottlab.mit.edu/papers/McDermott_Oxenham_2008_pitch_music_CONB_review.pdf | 1 |
| S. F. Dingfelder | «Most people show elements of absolute pitch» | *Monitor on Psychology* 36.2, American Psychological Association (2005) — https://www.apa.org/monitor/feb05/absolute | 1 |
| Carol L. Krumhansl, E. J. Kessler | «Tracing the dynamic changes in perceived tonal organization in a spatial representation of musical keys» | *Psychological Review* 89 (1982) | 1 |
| Maimon, Lamy, Eitan | «Tonal hierarchy and tonal valence: explicit and implicit measures» | preprint arXiv 2103.09709 — https://arxiv.org/abs/2103.09709 | 1 |
| Gary S. Karpinski | «A Cognitive Basis for Choosing a Solmization System» | *Music Theory Online* 27.2 (2021) — https://www.mtosmt.org/ojs/index.php/mto/article/view/616/148 | 1, 2 |
| UNESCO | «Safeguarding of the folk music heritage by the Kodály concept» | Registro delle buone pratiche (2016) — https://ich.unesco.org/en/BSP/safeguarding-of-the-folk-music-heritage-by-the-kodaly-concept-01177 | 2 |
| Wikipedia (fonte secondaria) | «Kodály method» | https://en.wikipedia.org/wiki/Kod%C3%A1ly_method | 2, 7 |
| The Canadian Encyclopedia | «Solmization» | https://thecanadianencyclopedia.ca/en/article/solmization-emc | 2 |
| John Sweller, Jeroen J. G. van Merriënboer, Fred Paas | «Cognitive Architecture and Instructional Design: 20 Years Later» | *Educational Psychology Review* 31 (2019) | 5, 6 |
| Slava Kalyuga, Paul Ayres, Paul Chandler, John Sweller | «The expertise reversal effect» | *Educational Psychologist* 38 (2003) | 3 |
| Nicholas J. Cepeda, Harold Pashler, Edward Vul, John T. Wixted, Doug Rohrer | «Distributed practice in verbal recall tasks: A review and quantitative synthesis» | *Psychological Bulletin* 132 (2006) | 6 |
| Dunlosky, Rawson, Marsh, Nathan, Willingham | «Improving Students' Learning With Effective Learning Techniques» | *Psychological Science in the Public Interest* 14 (2013) | 6 |
| M. Wiseheart, A. A. D'Souza, J. Chae | «Lack of spacing effects during piano learning» | *PLoS ONE* 12 (2017) — https://pmc.ncbi.nlm.nih.gov/articles/PMC5553926 | 6 |
| Paula Telesco, Meltem Karaca, Hannah Ewing, Kelsey Gilbert, Sarah Lipitz, Jude Weinstein-Jones | «Does Retrieval Practice Enhance Memorization of Piano Melodies?» | *College Music Symposium* 61.2 (2021) | 6 |
| Peter Q. Pfordresher, Steven Brown | «Poor-pitch singing in the absence of "tone deafness"» | *Music Perception* 25 (2007) | 7, 10 |
| Daniel Stevens, in Timothy Chenette (a cura di) | «The Do/Ti Test», *Foundations of Aural Skills* (2022, CC BY-SA 4.0) | https://uen.pressbooks.pub/auralskills/chapter/the-do-ti-test/ | 7 |
| William E. Lake | «Interval and Scale-Degree Strategies in Melodic Perception» | *Journal of Music Theory Pedagogy* | 8 |
| David Castro | «Playing With Motives: Aural Skills Exercises for Tonal Structure» | *Journal of Music Theory Pedagogy* | 8 |
| Wikipedia (fonte secondaria) | «Cent (music)» | https://en.wikipedia.org/wiki/Cent_(music) | 10 |
| HyperPhysics, Georgia State University | «The Use of Cents for Expressing Musical Intervals» | https://hyperphysics.gsu.edu/hbase/Music/cents.html | 10 |
| E. H. Liu, E. Mercado, B. A. Church, I. Orduña | «The Easy-to-Hard Effect in Human (Homo sapiens) and Rat (Rattus norvegicus) Auditory Identification» | *Journal of Comparative Psychology* 122 (2008) — https://doi.org/10.1037/0735-7036.122.2.132 | 10 |
| H. Levitt | «Transformed Up-Down Methods in Psychoacoustics» | *Journal of the Acoustical Society of America* 49 (1971) — https://doi.org/10.1121/1.1912375 | 10 |
| C. Micheyl, K. Delhommeau, X. Perrot, A. J. Oxenham | «Influence of musical and psychoacoustical training on pitch discrimination» | *Hearing Research* 219 (2006) — https://doi.org/10.1016/j.heares.2006.05.004 | 10 |
| J. Dai, S. Dixon | «Intonation Trajectories within Tones in Unaccompanied Soprano, Alto, Tenor, Bass Quartet Singing» | *Journal of the Acoustical Society of America* (2019) — https://webspace.eecs.qmul.ac.uk/s.e.dixon/pub/2019/DaiDixon-JASA-Quartet-AcceptedVersion.pdf | 10 |
| Simon Fraser University, Sonic Studio | «Beats» | https://www.sfu.ca/sonic-studio-webdav/handbook/Beats.html | 10 |
| Physclips, University of New South Wales | «Interference beats and Tartini tones» | https://www.animations.physics.unsw.edu.au/jw/beats.htm | 10 |
| Valeria C. Caruso, Evan Balaban | «Pitch and timbre interfere when both are parametrically varied» | *PLoS ONE* 9 (2014) — https://doaj.org/article/16ad18275952488aa31dd12dbd48047a | 10 |
| A. Vurma | «Timbre-induced pitch shift from the perspective of Signal Detection Theory: the impact of musical expertise, silence interval, and pitch region» | *Frontiers in Psychology* 5 (2014) — https://www.frontiersin.org/articles/10.3389/fpsyg.2014.00044/full | 10 |
| Vurma e altri (riferito da Vurma 2014) | «Does timbre affect pitch?: Estimations by musicians and non-musicians» | 2011 | 10 |
`;function B(e,i=250){const a=e.filter(n=>Number.isFinite(n)&&Math.abs(n)<=i).sort((n,r)=>n-r);if(a.length<4)return null;const t=a.length>>1,o=a.length%2?a[t]:(a[t-1]+a[t])/2;return Math.round(o)}const P="ravel.progress.v1",g={lessonsPassed:0,gradusPassed:0,pendingGrow:!1,calibration:null,setupDone:!1,headphones:!1,sing:!0};function G(e){try{const i=e?.getItem(P);return i?{...g,...JSON.parse(i)}:{...g}}catch{return{...g}}}function W(e,i){try{e?.setItem(P,JSON.stringify(i))}catch{}}function U(e,i,a){if(!e.setupDone)return{kind:"setup"};if(q(e,a))return{kind:"calibrate"};const t=Math.min(e.lessonsPassed,i);return{kind:"exercise",group:S(t),exam:t>=i&&e.gradusPassed===0}}function q(e,i){if(!e.calibration)return!0;if(!i)return!1;const a=e.calibration.output;return a.sampleRate!==i.sampleRate||Math.abs(a.outputLatencyMs-i.outputLatencyMs)>30}function M(e,i,a,t){return a<t-1||i!==e.lessonsPassed?e:{...e,lessonsPassed:e.lessonsPassed+1}}function H(e,i,a,t){return M(e,i,a,t)}function Y(e,i){return!i||e.gradusPassed>0?e:{...e,gradusPassed:1,pendingGrow:!0}}function T(e,i){return e>=60?!0:e>=24&&i>0&&e/i>.5}function k(e,i,a){return i<e.left||i>e.right||a<e.top||a>e.bottom}function _(e,i){const a=()=>{e.style.transform="",e.open&&e.close()};e.addEventListener("click",l=>{l.target===e&&k(e.getBoundingClientRect(),l.clientX,l.clientY)&&a()}),i?.addEventListener("click",a),e.addEventListener("cancel",()=>e.style.transform="");const t=e.querySelectorAll(".grip, .sheet-head");let o=0,n=0,r=!1;const c=l=>{if(!r)return;const s=Math.max(0,l.clientY-o);e.style.transform=`translateY(${s}px)`},d=l=>{if(!r)return;r=!1;const s=l.clientY-o;e.style.transition="transform 0.18s ease-out",T(s,performance.now()-n)?a():e.style.transform="",setTimeout(()=>e.style.transition="",200),window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d)},p=l=>{r=!0,o=l,n=performance.now()};for(const l of t)l.style.touchAction="none",l.addEventListener("touchstart",s=>{const u=s.touches?.[0];!u||(s.target.closest?.("button")??null)||p(u.clientY)},{passive:!0}),l.addEventListener("touchmove",s=>{if(!r)return;s.preventDefault();const u=s.touches?.[0];u&&(e.style.transform=`translateY(${Math.max(0,u.clientY-o)}px)`)},{passive:!1}),l.addEventListener("touchend",s=>{if(!r)return;const u=s.changedTouches?.[0];d({clientY:u?u.clientY:o})}),l.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&(s.target.closest("button")||(p(s.clientY),window.addEventListener("pointermove",c),window.addEventListener("pointerup",d),window.addEventListener("pointercancel",d)))})}export{C as E,v as G,U as a,q as b,B as c,J as d,K as e,D as f,f as g,A as h,N as i,H as j,S as k,G as l,_ as m,x as n,$ as o,O as p,Y as q,M as r,W as s,w as t,R as u,E as v,V as w};
