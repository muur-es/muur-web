// muur site script
/* every page opens at the top, unless the link points to a section (#work, #contact) */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
let _moved = false;   // once the visitor scrolls, never jump back
["wheel", "touchstart", "keydown", "pointerdown"].forEach(ev => addEventListener(ev, () => { _moved = true; }, { once: true, passive: true }));
function toTop() { if (!location.hash && !_moved) window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }
toTop();
addEventListener("pageshow", toTop);
addEventListener("load", toTop);
const I18N = {
 "en": {
  "nav.work": "Work",
  "nav.services": "Services",
  "nav.studio": "Studio",
  "nav.contact": "Contact",
  "nav.menu": "Menu",
  "nav.close": "Close",
  "hero.title": "Houses and renovations in the Valencia region.",
  "m1": "We aim to make architecture — first — for people. Because, although it should always be so, it usually isn't.",
  "m2": "And second — or also first — we want to build architecture that lasts and is rooted in its place.",
  "m3": "We look back: we respect and learn from traditional architecture. At the same time, we look ahead. We know what technology makes possible, and we look to the future with enthusiasm.",
  "m4": "So we draw on tradition and use technology to create architecture that takes root and holds up over time. Architecture that does not need replacing in a few years, and that, with small adjustments and improvements along the way, can last for decades and generations.",
  "hero.start": "Start a project",
  "s1.title": "New homes",
  "s1.text": "Single-family houses and apartment buildings, for private clients and developers, from the first study of the plot to the end of construction.",
  "s2.title": "Renovations",
  "s2.text": "Complete or partial renovations of apartments and houses.",
  "s3.title": "Feasibility studies",
  "s3.text": "Before you buy: what can be built or changed, what the planning rules allow and roughly what it would cost.",
  "s4.title": "Technical services",
  "s4.text": "Energy-efficiency advice and certificates, change of use and technical documentation.",
  "studio.p1": "<strong>muur</strong> is an architecture studio in Valencia. We have 14 years of experience and have worked on projects in Spain, the United Kingdom and the Netherlands.",
  "studio.p2": "We work in Spanish, English and (a little) Dutch, and we put every decision in writing.",
  "contact.text": "Tell us what you want to do and where, and we will call you for a first conversation.",
  "ch.email": "Email",
  "ch.phone": "Phone",
  "ch.wa": "WhatsApp",
  "copy": "Copy",
  "copied": "Copied",
  "selected": "Selected",
  "f.type": "What do you need?",
  "f.name": "Name",
  "f.email": "Email",
  "f.budget": "Budget",
  "b0": "Select",
  "b1": "Up to €100,000",
  "b2": "€100,000 – 250,000",
  "b3": "€250,000 – 500,000",
  "b4": "More than €500,000",
  "f.msg": "Message",
  "f.msg.ph": "What would you like to do, and when?",
  "f.privacy": "We use your details only to answer your enquiry. More in our <a href=\"privacidad.html\">privacy policy</a> (in Spanish).",
  "f.send": "Send",
  "f.note": "",
  "f.sending": "Sending…",
  "f.sent": "Thank you. Your message has been sent and we will get back to you.",
  "f.need": "Please add your email so we can reply.",
  "f.error": "The message could not be sent. Please write to architecture@muur.es.",
  "foot.privacy": "Privacy",
  "foot.legal": "Legal notice",
  "p.all": "All projects",
  "p.next": "Next project",
  "p.cta.title": "Planning to build or renovate?",
  "p.cta": "Start a project",
  "type.new": "New build",
  "type.int": "Interior",
  "type.multi": "Multi-family housing",
  "type.ren": "Renovation",
  "model": "Study model",
  "loc.zeeland": "Zeeland, the Netherlands",
  "nst.title": "House renovation in Zeeland",
  "nst.intro": "The renovation of a small freestanding house in the garden of a former residential complex, to gain usable space under the roof.",
  "nst.b1": "The house belongs to a residential complex built in the late 1940s, after the Second World War, for elderly people: a three-storey, U-shaped apartment block around a central garden. The house is not part of the block. It stands on its own in the middle of the garden, with nothing attached to it except a row of storage sheds at the back. It was originally the complex's laundry, with a small office for its management.",
  "nst.b2": "Over time the complex and the house changed use. Today the house belongs to our clients, who asked us for a renovation to simplify it and make better use of the space.",
  "nst.b3": "Although it is freestanding, the house is small: about 72 m² over the ground and first floors. Upstairs, the space under the pitched roof is limited.",
  "nst.b4": "The project mainly simplifies the first floor, so that its two bedrooms are more efficient and more comfortable to live in. To achieve this, the stair moves and now arrives in the centre of the house, on its axis, right under the ridge. The landing takes the highest part, leaving the lower spaces under the roof for the beds.",
  "nst.b5": "The heating is also renewed: the new boiler moves to the ground floor, and the kitchen and other elements are relocated to make room for the stair. Even so, it is not an expensive renovation, partly because the clients carry out some of the work themselves.",
  "cal.title": "Garden design and lift addition",
  "cal.intro": "An almost surgical intervention in a village house: a new lift so its owners can keep living there for many years to come.",
  "cal.b1": "The house faces the village's central square, but much of its life turns towards its garden. On the first floor, the kitchen, dining room and main bedroom open onto it.",
  "cal.b2": "On the ground floor, the garden is reached mostly from a side street. It is a secondary entrance, but the one the owners use most: the house's parking is there too. From there you enter the garden and climb a stair to the kitchen.",
  "cal.b3": "The owners are getting older and need a lift. Fitting one in was not easy: the garden is not large, although it is very well used and very beautiful. We made model studies to decide with them where it should go.",
  "cal.b4": "The solution comes in two phases. First, the lift goes up to the first floor, to the kitchen. Later, if needed, it will be extended to the second floor.",
  "cal.b5": "With the works under way, the materials of the garden are being reconsidered and the whole garden improved, as it is somewhat neglected today.",
  "cat.title": "House for Marije",
  "cat.intro": "A single-storey house that turns its back on the approach and opens completely to the surrounding hills.",
  "cat.b1": "From the approach the facade is almost a wall: only the front door shows. It is once you step inside that the house opens up and the landscape reaches every room. No room is without a view of the hills.",
  "cat.b2": "The plan follows a very simple structure. That regularity makes construction more straightforward and helps keep costs down, and it also gives the house a clear layout that is easy to read from inside.",
  "cat.b3": "The living area brings together sitting room, dining room and kitchen in a single space. A curtain can divide it when needed, without losing the sense of space the rest of the time. At each end of the house, a covered porch extends this space outdoors.",
  "cat.b4": "There are three bedrooms. The children's two simple rooms share a bathroom. The main bedroom, with its own bathroom, sits at the opposite end of the house, so parents and children each have their own part of it.",
  "har.title": "House in the old flour mill",
  "har.intro": "A house on the last empty plot beside the old flour mill, closed to its neighbours and open to the garden and the hills.",
  "har.b1": "The house is designed for a plot still to be developed on the edge of the village, beside the old flour mill. It is the only unbuilt plot in its surroundings. At the back it borders a group of terraced single-family houses; along its whole front it looks out to the hills.",
  "har.b2": "The house forms a closed courtyard: a garden with a pool, divided into two areas by a stone wall towards the back. The perimeter wall separates the house from the terraced houses, keeps out their views and gives the family a quiet, sheltered space.",
  "har.b3": "On the ground floor the house closes to the street and opens to the garden: the living room and kitchen face the courtyard. Only one window, in the dining room, looks out to the hills. It can be seen from the entrance and is the first to welcome those who arrive.",
  "har.b4": "On the first floor the roles are reversed. The facade that opens to the garden below is closed above, to avoid views from the neighbouring houses. Instead, all the bedrooms and the study open to the hills. Thanks to the shape of the roof, the study reaches almost double height, with a very tall bookcase full of books.",
  "har.b5": "The house is built mainly from two materials: dry stone and white render. Inside, traditional local ceramics are added.",
  "rup.title": "Bathroom facing a courtyard",
  "rup.intro": "A bathroom treated as a calm, warm room.",
  "rup.b1": "Large stone-effect tiles with few joints, a floating oak vanity and indirect light from a strip under the mirror and a slot in the ceiling.",
  "vpo.title": "Social housing in Mallorca",
  "vpo.intro": "Our proposal for IBAVI's competition for social housing in Palma de Mallorca.",
  "vpo.b1": "This project was our entry to a competition for social housing in Palma, organised by IBAVI. It did not win a prize.",
  "vpo.b2": "The plot was very long and narrow. Its shape, local, regional and national regulations, including the Spanish building code, and the high housing density required by the brief left little room to arrange the apartments.",
  "vpo.b3": "Orientation also needed great care, above all to the west. A bedroom facing west overheats in summer with the afternoon sun, and then it is impossible to sleep. So we placed the bedrooms facing the street, to the east. The flats have cross ventilation and are reached by an interior gallery open to a garden, which encourages neighbours to meet and a somewhat more shared way of life.",
  "vpo.b4": "The most distinctive element is the facade: a skin of perforated sheet metal, painted white, that lets light through and lights the flats, while from inside you still sense the outdoors. Rhombus patterns are engraved into the sheet, taken from the textiles once made in the factory opposite.",
  "vpo.b5": "Inside, each flat has only a short stretch of facade. To make cross ventilation work, we set one of the bedrooms back from the main facade and created a large terrace, both indoor and outdoor thanks to Mallorca's climate. The set-back bedroom opens onto this terrace, and instead of an interior room without light or ventilation it becomes a good space to live in."
 },
 "nl": {
  "nav.work": "Projecten",
  "nav.services": "Diensten",
  "nav.studio": "Studio",
  "nav.contact": "Contact",
  "nav.menu": "Menu",
  "nav.close": "Sluiten",
  "hero.title": "Woningen en verbouwingen in de regio Valencia.",
  "m1": "We willen architectuur maken — in de eerste plaats — voor mensen. Want hoewel dat altijd zo zou moeten zijn, is het dat meestal niet.",
  "m2": "En in de tweede plaats — of ook in de eerste — willen we architectuur bouwen die blijft en geworteld is in haar plek.",
  "m3": "We kijken terug: we respecteren traditionele architectuur en leren ervan. Tegelijk kijken we vooruit. We kennen de mogelijkheden van technologie en zien de toekomst met vertrouwen tegemoet.",
  "m4": "Zo putten we uit de traditie en gebruiken we technologie om architectuur te maken die wortel schiet en standhoudt. Die over een paar jaar niet vervangen hoeft te worden, en die met kleine aanpassingen en verbeteringen decennia en generaties mee kan.",
  "hero.start": "Start een project",
  "s1.title": "Nieuwbouw",
  "s1.text": "Vrijstaande woningen en appartementengebouwen, voor particulieren en projectontwikkelaars, van de eerste kavelstudie tot het einde van de bouw.",
  "s2.title": "Verbouwingen",
  "s2.text": "Volledige of gedeeltelijke verbouwingen van appartementen en huizen.",
  "s3.title": "Haalbaarheidsstudies",
  "s3.text": "Voordat je koopt: wat er gebouwd of veranderd kan worden, wat de regels toestaan en wat het ongeveer kost.",
  "s4.title": "Technische diensten",
  "s4.text": "Advies over energiebesparing en energielabels, wijziging van gebruik en technische documentatie.",
  "studio.p1": "<strong>muur</strong> is een architectenbureau in Valencia. We hebben 14 jaar ervaring en werkten mee aan projecten in Spanje, het Verenigd Koninkrijk en Nederland.",
  "studio.p2": "We werken in het Spaans, Engels en (een beetje) Nederlands, en we leggen elke beslissing schriftelijk vast.",
  "contact.text": "Vertel ons wat je wilt doen en waar, dan bellen we je voor een eerste gesprek.",
  "ch.email": "E-mail",
  "ch.phone": "Telefoon",
  "ch.wa": "WhatsApp",
  "copy": "Kopieer",
  "copied": "Gekopieerd",
  "selected": "Geselecteerd",
  "f.type": "Waar ben je naar op zoek?",
  "f.name": "Naam",
  "f.email": "E-mail",
  "f.budget": "Budget",
  "b0": "Kies",
  "b1": "Tot € 100.000",
  "b2": "€ 100.000 – 250.000",
  "b3": "€ 250.000 – 500.000",
  "b4": "Meer dan € 500.000",
  "f.msg": "Bericht",
  "f.msg.ph": "Wat wil je doen, en wanneer?",
  "f.privacy": "We gebruiken je gegevens alleen om je aanvraag te beantwoorden. Meer in ons <a href=\"privacidad.html\">privacybeleid</a> (in het Spaans).",
  "f.send": "Versturen",
  "f.note": "",
  "f.sending": "Versturen…",
  "f.sent": "Dank je. Je bericht is verzonden en we nemen contact met je op.",
  "f.need": "Vul je e-mailadres in, zodat we kunnen antwoorden.",
  "f.error": "Het bericht kon niet worden verzonden. Schrijf ons op architecture@muur.es.",
  "foot.privacy": "Privacy",
  "foot.legal": "Juridische informatie",
  "p.all": "Alle projecten",
  "p.next": "Volgend project",
  "p.cta.title": "Plannen om te bouwen of te verbouwen?",
  "p.cta": "Start een project",
  "type.new": "Nieuwbouw",
  "type.int": "Interieur",
  "type.multi": "Meergezinswoningen",
  "type.ren": "Verbouwing",
  "model": "Studiemaquette",
  "loc.zeeland": "Zeeland, Nederland",
  "nst.title": "Verbouwing van een woning in Zeeland",
  "nst.intro": "De verbouwing van een klein vrijstaand huis in de tuin van een voormalig wooncomplex, om bruikbare ruimte onder het dak te winnen.",
  "nst.b1": "Het huis hoort bij een wooncomplex dat eind jaren veertig, na de Tweede Wereldoorlog, werd gebouwd voor ouderen: een U-vormig appartementengebouw van drie verdiepingen rond een binnentuin. Het huis maakt geen deel uit van dat gebouw. Het staat vrij in het midden van de tuin, zonder iets ertegenaan, behalve een rij bergingen aan de achterkant. Oorspronkelijk was het de wasserij van het complex, met een klein kantoor voor het beheer.",
  "nst.b2": "In de loop van de tijd kregen het complex en het huis een andere bestemming. Nu is het huis van onze opdrachtgevers, die ons vroegen om een verbouwing om het te vereenvoudigen en de ruimte beter te benutten.",
  "nst.b3": "Hoewel het vrijstaand is, is het huis klein: ongeveer 72 m² verdeeld over de begane grond en de eerste verdieping. Boven is de ruimte onder het zadeldak beperkt.",
  "nst.b4": "Het ontwerp vereenvoudigt vooral de eerste verdieping, zodat de twee slaapkamers daar efficiënter en beter bewoonbaar worden. Daarvoor verhuist de trap en komt hij uit in het midden van het huis, op de as, precies onder de nok. Zo ligt de overloop op het hoogste punt, en blijven de lagere delen onder het dak over voor de bedden.",
  "nst.b5": "Daarnaast wordt de verwarming vernieuwd: de nieuwe ketel verhuist naar de begane grond, en de keuken en andere onderdelen worden verplaatst om ruimte te maken voor de trap. Toch is het geen dure verbouwing, mede omdat de opdrachtgevers een deel van het werk zelf uitvoeren.",
  "cal.title": "Tuinontwerp en toevoeging van een lift",
  "cal.intro": "Een bijna chirurgische ingreep in een dorpshuis: een nieuwe lift, zodat de eigenaren er nog vele jaren kunnen blijven wonen.",
  "cal.b1": "Het huis ligt aan het centrale dorpsplein, maar leeft voor een groot deel naar de tuin. Op de eerste verdieping openen de keuken, de eetkamer en de hoofdslaapkamer zich naar de tuin.",
  "cal.b2": "Op de begane grond bereik je de tuin vooral vanuit een zijstraat. Het is een achteringang, maar wel degene die de eigenaren het meest gebruiken: daar is ook de parkeerplaats van het huis. Vandaar kom je in de tuin en ga je via een trap naar de keuken.",
  "cal.b3": "De eigenaren worden ouder en hebben een lift nodig. Die inpassen was niet eenvoudig: de tuin is niet groot, al is hij heel goed benut en erg mooi. Met maquettestudies hebben we samen met hen bepaald waar de lift komt.",
  "cal.b4": "De oplossing komt in twee fasen. Eerst gaat de lift tot de eerste verdieping, naar de keuken. Later wordt hij, als dat nodig is, doorgetrokken tot de tweede verdieping.",
  "cal.b5": "Nu de bouw toch plaatsvindt, worden ook de materialen van de tuin opnieuw bekeken en wordt de hele tuin verbeterd, want die is nu wat verwaarloosd.",
  "cat.title": "Huis voor Marije",
  "cat.intro": "Een gelijkvloerse woning die de toegang de rug toekeert en zich volledig opent naar het heuvellandschap.",
  "cat.b1": "Vanaf de toegang is de gevel bijna een muur: alleen de voordeur is te zien. Pas binnen opent het huis zich en komt het landschap in elke ruimte binnen. Geen enkele kamer is zonder uitzicht op de heuvels.",
  "cat.b2": "De plattegrond volgt een heel eenvoudige constructie. Die regelmaat maakt het bouwen eenvoudiger en helpt de kosten te beperken, en geeft het huis tegelijk een heldere indeling die van binnenuit makkelijk te begrijpen is.",
  "cat.b3": "Het woongedeelte brengt zitkamer, eetkamer en keuken samen in één ruimte. Een gordijn kan die ruimte opdelen wanneer dat nodig is, zonder de ruimtelijkheid de rest van de tijd te verliezen. Aan beide uiteinden van het huis verlengt een overdekte veranda deze ruimte naar buiten.",
  "cat.b4": "Er zijn drie slaapkamers. De twee eenvoudige kamers van de kinderen delen een badkamer. De hoofdslaapkamer, met eigen badkamer, ligt aan het andere uiteinde van het huis, zodat ouders en kinderen elk hun eigen deel hebben.",
  "har.title": "Woning in de oude meelfabriek",
  "har.intro": "Een woning op de laatste lege kavel naast de oude meelfabriek, die zich sluit voor de buren en opent naar de tuin en de heuvels.",
  "har.b1": "De woning is ontworpen voor een nog te ontwikkelen kavel aan de rand van het dorp, naast de oude meelfabriek. Het is de enige onbebouwde kavel in de omgeving. Aan de achterzijde grenst hij aan een groep rijwoningen; over de hele voorzijde kijkt hij uit op de heuvels.",
  "har.b2": "De woning vormt een besloten patio: een tuin met zwembad, aan de achterkant in twee delen verdeeld door een stenen muur. De omringende muur scheidt het huis van de rijwoningen, houdt hun blikken buiten en geeft het gezin een rustige, beschutte plek.",
  "har.b3": "Op de begane grond sluit het huis zich af van de straat en opent het zich naar de tuin: woonkamer en keuken kijken uit op de patio. Alleen één raam, in de eetkamer, kijkt naar de heuvels. Het is zichtbaar vanaf de toegang en verwelkomt als eerste wie aankomt.",
  "har.b4": "Op de eerste verdieping draaien de rollen om. De gevel die beneden opengaat naar de tuin, is boven gesloten om inkijk vanuit de buurhuizen te voorkomen. Alle slaapkamers en de werkkamer openen zich daarentegen naar de heuvels. Door de vorm van het dak krijgt de werkkamer bijna een dubbele hoogte, met een zeer hoge boekenkast vol boeken.",
  "har.b5": "De woning is hoofdzakelijk opgebouwd uit twee materialen: droog gestapelde natuursteen en wit pleisterwerk. Binnen komt daar traditioneel keramiek uit de streek bij.",
  "rup.title": "Badkamer aan een patio",
  "rup.intro": "Een badkamer opgevat als een rustige, warme ruimte.",
  "rup.b1": "Grote tegels met een steenachtige afwerking en weinig voegen, een zwevend eikenhouten badmeubel en indirect licht uit een lijn onder de spiegel en een sleuf in het plafond.",
  "vpo.title": "Sociale woningbouw op Mallorca",
  "vpo.intro": "Ons voorstel voor de prijsvraag van IBAVI voor sociale woningbouw in Palma de Mallorca.",
  "vpo.b1": "Dit project was onze inzending voor een prijsvraag voor sociale woningbouw in Palma, uitgeschreven door IBAVI. Het werd niet bekroond.",
  "vpo.b2": "De kavel was zeer langgerekt. De vorm, de lokale, regionale en landelijke regelgeving, waaronder het Spaanse bouwbesluit, en de hoge woningdichtheid die werd gevraagd, lieten weinig ruimte om de appartementen in te delen.",
  "vpo.b3": "Ook de oriëntatie vroeg veel aandacht, vooral naar het westen. Een slaapkamer op het westen warmt in de zomer de hele middag op door de zon, en daarna is slapen onmogelijk. Daarom legden we de slaapkamers aan de straatkant, op het oosten. De woningen hebben dwarsventilatie en zijn bereikbaar via een binnengalerij aan een tuin, die ontmoeting tussen buren en een wat gedeelder leven bevordert.",
  "vpo.b4": "Het meest kenmerkende element is de gevel: een huid van geperforeerd plaatmateriaal, wit geschilderd, die licht doorlaat en de woningen verlicht, terwijl je binnen het buiten blijft voelen. In de plaat zijn ruitvormige motieven gegraveerd, ontleend aan het textiel dat in de fabriek aan de overkant werd gemaakt.",
  "vpo.b5": "Binnen heeft elk appartement maar een korte gevel. Om de dwarsventilatie te laten werken, lieten we een van de slaapkamers terugspringen ten opzichte van de hoofdgevel en maakten we een ruim terras, dankzij het klimaat van Mallorca tegelijk binnen en buiten. De teruggezette slaapkamer opent zich naar dit terras, en wordt zo van een donkere, ongeventileerde binnenruimte een ruimte van kwaliteit."
 },
 "es": {
  "nav.work": "Proyectos",
  "nav.services": "Servicios",
  "nav.studio": "Estudio",
  "nav.contact": "Contacto",
  "nav.menu": "Menú",
  "nav.close": "Cerrar",
  "hero.title": "Viviendas y reformas en la Comunidad Valenciana.",
  "m1": "Aspiramos a hacer arquitectura —primero— para la gente. Porque, aunque así debería ser siempre, habitualmente no lo es.",
  "m2": "Y segundo —o primero también—, buscamos construir arquitectura que dure y que esté enraizada en su lugar.",
  "m3": "Miramos hacia atrás, respetamos y aprendemos de la arquitectura tradicional. Al mismo tiempo, miramos hacia adelante. Sabemos de las posibilidades que trae la tecnología y vemos el futuro con ilusión.",
  "m4": "Así, bebemos de la tradición y utilizamos la tecnología para crear una arquitectura que eche raíces y se mantenga en el tiempo. Que no haga falta reemplazarla en unos años. Que con pequeños ajustes y mejoras en el tiempo, pueda durar décadas y generaciones.",
  "hero.start": "Empieza tu proyecto",
  "s1.title": "Obra nueva",
  "s1.text": "Vivienda unifamiliar y plurifamiliar, para particulares y promotoras, desde el primer estudio del solar hasta el final de la obra.",
  "s2.title": "Reformas",
  "s2.text": "Reformas integrales o parciales de pisos y casas.",
  "s3.title": "Estudios de viabilidad",
  "s3.text": "Antes de comprar: qué se puede construir o cambiar, qué permite la normativa y cuánto costaría.",
  "s4.title": "Servicios técnicos",
  "s4.text": "Asesoría y certificados de eficiencia energética, cambios de uso y documentación técnica.",
  "studio.p1": "<strong>muur</strong> es un estudio de arquitectura en Valencia. Tenemos 14 años de experiencia y hemos participado en proyectos en España, Reino Unido y Países Bajos.",
  "studio.p2": "Trabajamos en español, inglés y (un poco de) holandés, y dejamos cada decisión por escrito.",
  "contact.text": "Cuéntanos qué quieres hacer y dónde, y te llamamos para una primera conversación.",
  "ch.email": "Email",
  "ch.phone": "Teléfono",
  "ch.wa": "WhatsApp",
  "copy": "Copiar",
  "copied": "Copiado",
  "selected": "Seleccionado",
  "f.type": "¿Qué necesitas?",
  "f.name": "Nombre",
  "f.email": "Email",
  "f.budget": "Presupuesto",
  "b0": "Selecciona",
  "b1": "Hasta 100.000 €",
  "b2": "100.000 – 250.000 €",
  "b3": "250.000 – 500.000 €",
  "b4": "Más de 500.000 €",
  "f.msg": "Mensaje",
  "f.msg.ph": "¿Qué te gustaría hacer y para cuándo?",
  "f.privacy": "Usamos tus datos solo para responder a tu consulta. Más información en la <a href=\"privacidad.html\">política de privacidad</a>.",
  "f.send": "Enviar",
  "f.note": "",
  "f.sending": "Enviando…",
  "f.sent": "Gracias. Tu mensaje se ha enviado y te responderemos.",
  "f.need": "Añade tu email para que podamos responderte.",
  "f.error": "No se ha podido enviar el mensaje. Escríbenos a architecture@muur.es.",
  "foot.privacy": "Privacidad",
  "foot.legal": "Aviso legal",
  "p.all": "Todos los proyectos",
  "p.next": "Siguiente proyecto",
  "p.cta.title": "¿Piensas construir o reformar?",
  "p.cta": "Empieza tu proyecto",
  "type.new": "Obra nueva",
  "type.int": "Interiorismo",
  "type.multi": "Vivienda plurifamiliar",
  "type.ren": "Rehabilitación",
  "model": "Maqueta de estudio",
  "loc.zeeland": "Zeeland, Países Bajos",
  "nst.title": "Reforma de casa en Zeeland",
  "nst.intro": "La reforma de una pequeña casa exenta en el jardín de un antiguo complejo residencial, para ganar espacio útil bajo la cubierta.",
  "nst.b1": "La casa pertenece a un complejo residencial construido a finales de los años cuarenta, después de la Segunda Guerra Mundial, para personas mayores: un bloque de apartamentos de tres plantas con forma de U alrededor de un jardín central. La casa no forma parte del bloque. Se levanta sola en el centro del jardín, sin nada adosado salvo una zona de trasteros en su parte trasera. Originalmente era la lavandería del complejo, con una pequeña oficina para su gestión.",
  "nst.b2": "Con el tiempo, el complejo y la casa cambiaron de uso. Hoy la casa pertenece a nuestros clientes, que nos encargaron una reforma para simplificarla y aprovechar mejor el espacio.",
  "nst.b3": "A pesar de ser una casa exenta, es pequeña: unos 72 m² entre planta baja y planta primera. Arriba, el espacio bajo la cubierta a dos aguas es reducido.",
  "nst.b4": "El proyecto simplifica sobre todo la planta primera, para que sus dos dormitorios sean más eficientes y más habitables. Para ello, la escalera cambia de sitio y desembarca en el centro de la casa, en su eje, justo bajo la cumbrera. Así la distribución ocupa la parte más alta, y las zonas más bajas bajo la cubierta quedan para las camas.",
  "nst.b5": "Además, se renueva la calefacción: la caldera nueva se traslada a planta baja, y la cocina y otros elementos se reubican para dejar sitio a la escalera. Aun así, no es una reforma costosa, en parte porque los propios clientes ejecutan una parte de la obra.",
  "cal.title": "Diseño jardín y adición ascensor",
  "cal.intro": "Una intervención casi quirúrgica en una casa de pueblo: un ascensor nuevo para que sus propietarios puedan seguir viviendo en ella muchos años más.",
  "cal.b1": "La casa da a la plaza central del pueblo, pero vive en buena parte hacia su jardín. En planta primera, la cocina, el comedor y el dormitorio principal se abren a él.",
  "cal.b2": "En planta baja, al jardín se llega sobre todo desde una calle secundaria. Es un acceso secundario, pero es el que más usan los propietarios: ahí está también el aparcamiento de la casa. Desde allí se entra al jardín y, por una escalera, se sube a la cocina.",
  "cal.b3": "Los propietarios se están haciendo mayores y necesitan un ascensor. Encajarlo no era fácil: el jardín no es grande, aunque está muy bien aprovechado y es muy bonito. Hicimos estudios con maquetas para decidir con ellos dónde colocarlo.",
  "cal.b4": "La solución se plantea en dos fases. Primero, el ascensor llega hasta la planta primera, a la cocina. Más adelante, si hace falta, se prolongará hasta la planta segunda.",
  "cal.b5": "Aprovechando la obra, se reestudia la materialidad del jardín y se mejora en su totalidad, ya que hoy está algo descuidado.",
  "cat.title": "Casa para Marije",
  "cat.intro": "Una casa en una sola planta que da la espalda al acceso y se abre por completo al paisaje de monte.",
  "cat.b1": "Desde el acceso, la fachada es casi un muro: solo aparece la puerta de entrada. Es al cruzarla cuando la casa se abre y el paisaje entra en todas las estancias. Ninguna habitación queda sin vistas al monte.",
  "cat.b2": "La planta se ordena sobre una estructura muy sencilla. Esa regularidad hace la construcción más directa y ayuda a contener el coste, y a la vez da a la casa una organización clara, fácil de entender desde dentro.",
  "cat.b3": "La zona de día reúne estar, comedor y cocina en un único espacio. Una cortina permite dividirlo cuando hace falta, sin perder la amplitud del conjunto el resto del tiempo. A cada extremo de la casa, un porche cubierto prolonga este espacio hacia el exterior.",
  "cat.b4": "Las habitaciones son tres. Las dos de los hijos, sencillas, comparten un baño. El dormitorio principal, con baño propio, se sitúa en el extremo opuesto de la casa, de modo que padres e hijos tienen cada uno su zona.",
  "har.title": "Casa en la antigua harinera",
  "har.intro": "Una casa en la última parcela libre junto a la antigua harinera, que se cierra a sus vecinos y se abre al jardín y al monte.",
  "har.b1": "La casa se proyecta en una parcela todavía por consolidar, a las afueras del pueblo, junto a la antigua fábrica de harina. Es la única sin construir de su entorno. Por detrás linda con un grupo de viviendas unifamiliares adosadas; por delante, todo su frente mira al monte.",
  "har.b2": "La casa crea un patio cerrado: un jardín con piscina, dividido en dos zonas por un muro de piedra hacia la parte trasera. El muro perimetral separa la casa de las viviendas adosadas, evita sus vistas y crea para la familia un espacio tranquilo y recogido.",
  "har.b3": "En planta baja, la casa se cierra a la calle y se abre al jardín: el salón y la cocina miran al patio. Solo una ventana, la del comedor, se asoma al monte. Se ve desde el acceso y es la primera que recibe a quien llega.",
  "har.b4": "En planta primera los papeles se invierten. La fachada que abajo se abre al jardín, arriba se cierra para evitar las miradas de las casas vecinas. En cambio, todas las habitaciones y el despacho se abren al monte. El despacho, gracias a la forma de la cubierta, alcanza casi una doble altura, con una estantería muy alta llena de libros.",
  "har.b5": "La casa se construye principalmente con dos materiales: piedra seca y revoco blanco. En los interiores se suma la cerámica tradicional de la zona.",
  "rup.title": "Baño hacia un patio",
  "rup.intro": "Un baño pensado como una estancia tranquila y cálida.",
  "rup.b1": "Piezas de gran formato con acabado piedra y pocas juntas, un mueble de roble suspendido y luz indirecta desde una tira bajo el espejo y una ranura en el techo.",
  "vpo.title": "Viviendas VPO en Mallorca",
  "vpo.intro": "Nuestra propuesta para el concurso de viviendas de protección oficial del IBAVI en Palma de Mallorca.",
  "vpo.b1": "Este proyecto fue nuestra propuesta para un concurso de viviendas de protección oficial en Palma, convocado por el IBAVI. No resultó premiada.",
  "vpo.b2": "La parcela era muy alargada. Su forma, la normativa local, autonómica y estatal, incluido el Código Técnico, y la alta densidad de viviendas que pedían las bases dejaban poco margen para organizar los apartamentos.",
  "vpo.b3": "Además, había que cuidar mucho las orientaciones, sobre todo la oeste. Un dormitorio orientado a poniente se recalienta en verano con el sol de toda la tarde, y después es imposible dormir. Por eso orientamos los dormitorios hacia la calle, al este. Las viviendas tienen ventilación cruzada y se accede a ellas por una galería interior abierta a un jardín, que favorece el encuentro entre vecinos y una vida algo más compartida.",
  "vpo.b4": "El elemento más característico es la fachada: una piel de chapa perforada, pintada de blanco, que deja pasar la luz e ilumina las viviendas, con la sensación de estar en el exterior. Sobre la chapa se graban motivos de rombos, propios de los textiles que se fabricaban en la fábrica situada enfrente.",
  "vpo.b5": "En el interior, cada apartamento tiene poca fachada. Para que la ventilación cruzada funcione, retranqueamos una de las habitaciones respecto a la fachada principal y creamos una terraza amplia, a la vez interior y exterior gracias al clima de Mallorca. La habitación retranqueada se abre a esta terraza, y deja de ser un espacio interior sin luz ni ventilación para convertirse en un espacio de calidad."
 }
};
const LANGS = ["en", "nl", "es"];
function getLang() {
  try { const s = localStorage.getItem("muur-lang"); if (LANGS.includes(s)) return s; } catch (e) {}
  const n = (navigator.language || "en").slice(0, 2).toLowerCase();
  return LANGS.includes(n) ? n : "en";
}
let LANG = getLang();
function tr(k) { return (I18N[LANG] && I18N[LANG][k]) || I18N.en[k] || k; }
function applyLang(lang) {
  LANG = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { const v = tr(el.dataset.i18n); if (v.includes("<strong>") || v.includes("<a ")) el.innerHTML = v; else el.textContent = v; });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = tr(el.dataset.i18nPh); });
  document.querySelectorAll(".langs button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false"));
  try { localStorage.setItem("muur-lang", lang); } catch (e) {}
  optical();
}

/* Optical alignment: each text block is shifted by its first glyph's real side-bearing,
   measured by drawing the glyph and scanning pixels, so the visible letter sits on the grid line. */
const _ink = {};
function inkLeft(ch, font, size) {
  const key = font + "|" + ch;
  if (key in _ink) return _ink[key];
  const pad = Math.ceil(size * 0.4), w = Math.ceil(size * 1.2), h = Math.ceil(size * 1.5);
  const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
  const c = cv.getContext("2d", { willReadFrequently: true });
  c.font = font; c.fillStyle = "#000"; c.textBaseline = "alphabetic";
  c.fillText(ch, pad, Math.ceil(size * 1.1));
  const d = c.getImageData(0, 0, w, h).data;
  let r = 0;
  scan: for (let x = 0; x < w; x++) for (let y = 0; y < h; y++) if (d[(y * w + x) * 4 + 3] >= 128) { r = x - pad; break scan; }
  return (_ink[key] = r);
}
function optical() {
  document.querySelectorAll("[data-optical], h1, h2, h3, p, .small, .val, nav a").forEach(el => {
    if (el.closest(".btn, .chips, .langs, .copy, .draft, .svc .arrow")) return;
    const txt = el.textContent.trim();
    if (!txt) return;
    const lead = el.firstChild && el.firstChild.nodeType === 1 ? el.firstChild : el;   // e.g. a bold first word
    const cs = getComputedStyle(lead), size = parseFloat(cs.fontSize);
    const ink = inkLeft(txt[0], `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`, size);
    el.style.marginLeft = ink !== 0 ? (-ink) + "px" : "";
  });
}

document.querySelectorAll(".langs button").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));
applyLang(LANG);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(optical);
let _ot; addEventListener("resize", () => { clearTimeout(_ot); _ot = setTimeout(optical, 120); });

/* small screens: the menu opens as a list under the header */
const menuBtn = document.getElementById("menu-btn"), mainNav = document.getElementById("main-nav");
if (menuBtn && mainNav) {
  const setMenu = open => {
    document.documentElement.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.dataset.i18n = open ? "nav.close" : "nav.menu"; menuBtn.textContent = tr(menuBtn.dataset.i18n);
  };
  menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
  mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
}

/* services preselect the form */
document.querySelectorAll("[data-service]").forEach(a => a.addEventListener("click", () => {
  const r = document.querySelector('input[name="ptype"][value="' + a.dataset.service + '"]');
  if (r) r.checked = true;
}));

/* copy buttons */
document.querySelectorAll(".copy").forEach(b => b.addEventListener("click", () => {
  const el = document.getElementById(b.dataset.copy), txt = el.textContent.trim();
  const reset = () => setTimeout(() => { b.textContent = tr("copy"); }, 1600);
  const fallback = () => {
    const r = document.createRange(); r.selectNodeContents(el);
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    b.textContent = tr("selected"); reset();
  };
  try { navigator.clipboard.writeText(txt).then(() => { b.textContent = tr("copied"); reset(); }, fallback); } catch (e) { fallback(); }
}));

/* contact form: sent to Netlify Forms without leaving the page */
const form = document.getElementById("enquiry");
if (form) form.addEventListener("submit", e => {
  e.preventDefault();
  const note = document.getElementById("form-note"), btn = form.querySelector('button[type="submit"]');
  const say = k => { note.dataset.i18n = k; note.textContent = tr(k); };
  const email = form.querySelector('input[name="email"]');
  if (!email.value.trim() || !email.checkValidity()) { say("f.need"); email.focus(); return; }
  say("f.sending"); btn.disabled = true;
  fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
               body: new URLSearchParams(new FormData(form)).toString() })
    .then(r => { if (!r.ok) throw new Error(r.status); say("f.sent"); form.reset(); })
    .catch(() => say("f.error"))
    .finally(() => { btn.disabled = false; });
});

/* home: the manifesto shrinks if it would run into "muur" on short screens */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const man = document.getElementById("manifesto"), wm = document.getElementById("wordmark");
function fitManifesto() {
  if (!man || !wm || innerWidth < 900) { if (man) man.style.fontSize = ""; return; }
  man.style.fontSize = "";
  let size = parseFloat(getComputedStyle(man).fontSize);
  while (man.getBoundingClientRect().bottom > wm.getBoundingClientRect().top - 32 && size > 14) {
    size -= 0.5; man.style.fontSize = size + "px";
  }
  optical();
}
if (man) {
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitManifesto);
  addEventListener("resize", () => { clearTimeout(fitManifesto._t); fitManifesto._t = setTimeout(fitManifesto, 150); });
  fitManifesto();
}

/* home: at the top the opening shows one still image, a different one on each visit (never a bathroom),
   at its own proportions. While scrolling the frame grows evenly, in size and proportion, from that first
   image to the full screen, where the final image stays; images after the first fill the frame. */
const wall = document.getElementById("wall");
if (wall) {
  const stick = wall.querySelector(".wall-stick"), opening = wall.querySelector(".opening"), box0 = wall.querySelector(".box0");
  const all = [...opening.querySelectorAll("img")];
  const final = all.find(i => i.classList.contains("final"));
  const rest = all.filter(i => i !== final);
  const pool = rest.filter(i => !/\/rup-/.test(i.getAttribute("src")) && !/nst-01|cal-01/.test(i.getAttribute("src")));
  let last = null;
  try { last = localStorage.getItem("muur-start"); } catch (e) {}
  const choices = pool.filter(i => i.getAttribute("src") !== last);
  const start = choices[Math.floor(Math.random() * choices.length)] || pool[0];
  try { localStorage.setItem("muur-start", start.getAttribute("src")); } catch (e) {}
  // the opening image is not shown a second time while scrolling
  const seq = rest.filter(i => i !== start);
  let shown = all.find(i => i.classList.contains("on"));
  const show = el => { if (el === shown) return; shown.classList.remove("on"); el.classList.add("on"); shown = el; };
  show(start);
  const ratio = img => (img.naturalWidth && img.naturalHeight) ? img.naturalWidth / img.naturalHeight : 0.75;
  // the largest rectangle of a given ratio inside a box, sitting on its bottom-right corner
  const fit = (r, bw, bh, right, bottom) => {
    let w = bh * r, h = bh;
    if (w > bw) { w = bw; h = bw / r; }
    return { w, h, right, bottom };
  };
  const END = 0.92;      // share of the scroll after which the final image stays
  const onScroll = () => {
    const r = wall.getBoundingClientRect(), span = wall.offsetHeight - stick.offsetHeight;
    const p = span > 0 ? Math.max(0, Math.min(1, -r.top / span)) : 0;
    if (p <= 0.005) show(start);
    else if (p >= END) show(final);
    else show(seq[Math.min(seq.length - 1, Math.floor(p / END * seq.length))]);
    if (innerWidth < 900) { opening.style.cssText = ""; return; }
    const S = opening.getBoundingClientRect(), B = box0.getBoundingClientRect();
    const a = fit(ratio(start), B.width, B.height, B.right - S.left, B.bottom - S.top);
    const z = { w: S.width, h: S.height, right: S.width, bottom: S.height };   // the final image covers the screen
    const e = Math.min(1, p / END);
    const w = a.w + (z.w - a.w) * e, h = a.h + (z.h - a.h) * e;
    const right = a.right + (z.right - a.right) * e, bottom = a.bottom + (z.bottom - a.bottom) * e;
    opening.style.setProperty("--x", (right - w).toFixed(1) + "px");
    opening.style.setProperty("--y", (bottom - h).toFixed(1) + "px");
    opening.style.setProperty("--w", w.toFixed(1) + "px");
    opening.style.setProperty("--h", h.toFixed(1) + "px");
  };
  all.forEach(i => { if (!i.complete) i.addEventListener("load", onScroll, { once: true }); });
  addEventListener("resize", onScroll);
  if (!reduce) addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
