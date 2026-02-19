/* ========================================================================== */
/* ASTROGUIDE GENERATOR (MERGED & STYLED VERSION)                             */
/* ========================================================================== */

/* -------------------------------------------------------------------------- */
/* 1. DATA CONSTANTS & TRANSLATIONS (DEFINED ONCE AT TOP)                     */
/* -------------------------------------------------------------------------- */

const PLANET_TE = {
    "Sun": "సూర్యుడు", "Moon": "చంద్రుడు", "Mars": "కుజుడు", "Mercury": "బుధుడు",
    "Jupiter": "గురువు", "Venus": "శుక్రుడు", "Saturn": "శని", "Rahu": "రాహువు",
    "Ketu": "కేతువు", "Ascendant": "లగ్నం"
};

const SIGNS_TE = [
    "", "మేషం", "వృషభం", "మిథునం", "కర్కాటకం", "సింహం", "కన్య",
    "తుల", "వృశ్చికం", "ధనుస్సు", "మకరం", "కుంభం", "మీనం"
];

const NAKSHATRAS_TE = [
    "అశ్విని", "భరణి", "కృత్తిక", "రోహిణి", "మృగశిర", "ఆర్ద్ర", "పునర్వసు", "పుష్యమి", "ఆశ్లేష",
    "మఖ", "పుబ్బ", "ఉత్తర", "హస్త", "చిత్త", "స్వాతి", "విశాఖ", "అనూరాధ", "జ్యేష్ట",
    "మూల", "పూర్వాషాఢ", "ఉత్తరాషాఢ", "శ్రవణం", "ధనిష్ఠ", "శతభిషం", "పూర్వాభాద్ర", "ఉత్తరాభాద్ర", "రేవతి"
];

const YOGAS_TE = [
    "విష్కంభ", "ప్రీతి", "ఆయుష్మాన్", "సౌభాగ్య", "శోభన", "అతిగండ", "సుకర్మ", "ధృతి", "శూల",
    "గండ", "వృద్ధి", "ధృవ", "వ్యాఘాత", "హర్షణ", "వజ్ర", "సిద్ధి", "వ్యతీపాత", "వరియాన",
    "పరిఘ", "శివ", "సిద్ధ", "సాధ్య", "శుభ", "శుక్ల", "బ్రహ్మ", "ఇంద్ర", "వైధృతి"
];

const KARANAS_TE = [
    "బవ", "బాలవ", "కౌలవ", "తైతుల", "గర", "వణిజ", "విష్టి",
    "శకుని", "చతుష్పాత్తు", "నాగ", "కింస్తుఘ్న"
];

const VARAS_TE = ["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"];

/* --- LOGIC ARRAYS (KEEP ENGLISH FOR CALCULATIONS) --- */
const GRAHAS = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];
const SIGNS = ["", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const NAKSHATRAS = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];
const YOGAS = ["Vishkumbha", "Priti", "Ayushman", "Saubhagya", "Sobhana", "Atiganda", "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshan", "Vajra", "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti"];
const KARANAS = ["Bava", "Balava", "Kaulava", "Taitila", "Gara", "Vanija", "Vishti", "Shakuni", "Chatushpada", "Naga", "Kimstughna"];
const VARAS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const VIM_LORDS = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
const VIM_YEARS = [7, 20, 6, 10, 7, 18, 16, 19, 17];

const FRIENDSHIPS = {
    "Sun": { f: ["Moon", "Mars", "Jupiter"], e: ["Venus", "Saturn"], n: ["Mercury", "Rahu", "Ketu"] },
    "Moon": { f: ["Sun", "Mercury"], e: ["Rahu", "Ketu"], n: ["Mars", "Jupiter", "Venus", "Saturn"] },
    "Mars": { f: ["Sun", "Moon", "Jupiter"], e: ["Mercury", "Rahu"], n: ["Venus", "Saturn", "Ketu"] },
    "Mercury": { f: ["Sun", "Venus"], e: ["Moon"], n: ["Mars", "Jupiter", "Saturn", "Rahu", "Ketu"] },
    "Jupiter": { f: ["Sun", "Moon", "Mars"], e: ["Mercury", "Venus"], n: ["Saturn", "Rahu", "Ketu"] },
    "Venus": { f: ["Mercury", "Saturn", "Rahu"], e: ["Sun", "Moon"], n: ["Mars", "Jupiter", "Ketu"] },
    "Saturn": { f: ["Mercury", "Venus", "Rahu"], e: ["Sun", "Moon", "Mars"], n: ["Jupiter", "Ketu"] },
    "Rahu": { f: ["Venus", "Saturn"], e: ["Sun", "Moon", "Mars"], n: ["Mercury", "Jupiter"] },
    "Ketu": { f: ["Mars", "Jupiter"], e: ["Sun", "Moon"], n: ["Mercury", "Venus", "Saturn"] }
};

/* -------------------------------------------------------------------------- */
/* 2. STATE VARIABLES                                                         */
/* -------------------------------------------------------------------------- */
let globalPlanets = [];
let ayanamsaVal = 0;
let birthDateObj = null;

/* -------------------------------------------------------------------------- */
/* 3. INITIALIZATION & STYLES                                                 */
/* -------------------------------------------------------------------------- */
window.onload = () => {
    document.getElementById('date').valueAsDate = new Date();
    injectStyles();
};

function injectStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        :root { --primary: #f57c00; --light: #ffe0b2; --header-bg: #ff9800; --row-alt: #ffebee; --chart-bg: #fffde7; --chart-border: #ffb74d; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f4f4; color:#333; }
        .page { width: 210mm; min-height: 297mm; padding: 20mm; margin: 20px auto; background: white; box-shadow: 0 0 15px rgba(0,0,0,0.1); position: relative; }
        .brand-header { position: absolute; top: 15mm; left: 20mm; font-size: 10px; font-weight: 900; color: #e65100; letter-spacing: 1px; text-transform: uppercase; border-bottom: 2px solid #e65100; padding-bottom: 2px; }
        .footer-num { position: absolute; bottom: 20px; width: 100%; text-align: center; color: #aaa; font-size: 12px; left:0; }
        .flex-row { display: flex; gap: 20px; justify-content: space-between; }
        .half-width { flex: 1; }
        .header { text-align: center; margin-bottom: 20px; margin-top: 10px; }
        .header h1 { display: inline-block; font-size: 22px; color: var(--primary); border: 2px solid var(--primary); padding: 8px 30px; border-radius: 50px; background: white; text-transform: uppercase; margin: 0; }
        .section-title { text-align: center; color: var(--primary); font-size: 16px; font-weight: bold; margin: 15px 0 10px 0; border-bottom: 1px dashed var(--primary); display: table; margin-left: auto; margin-right: auto; padding-bottom: 3px; }
        table { width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 15px; }
        th { background: var(--header-bg); color: white; padding: 8px; border: 1px solid var(--header-bg); text-align: left; }
        td { padding: 6px 8px; border: 1px solid #eee; color: #444; }
        tr:nth-child(even) { background-color: var(--row-alt); }
        .chart-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 1fr); width: 100%; aspect-ratio: 1/1; border: 2px solid var(--chart-border); background: var(--chart-bg); margin: 0 auto; max-width: 350px; box-sizing: border-box; }
        .house { border: 1px solid var(--chart-border); position: relative; display: flex; justify-content: center; align-items: center; font-size: 11px; }
        .sign-label { position: absolute; top: 2px; right: 2px; font-size: 9px; color: #d84315; font-weight: bold; }
        .planet-text { font-weight: bold; color: #000; text-align: center; font-size: 10px; }
        .chart-score-circle { width: 18px; height: 18px; border-radius: 50%; color: white; display: flex; justify-content: center; align-items: center; font-size: 9px; font-weight: bold; margin: 1px auto; }
        .bg-good { background-color: #4caf50; } .bg-bad { background-color: #ef5350; } .bg-mixed { background-color: #26c6da; }
        .legend-item { display: flex; align-items: center; margin-bottom: 5px; font-size: 11px; color: #555; }
        .legend-box { width: 10px; height: 10px; margin-right: 8px; border-radius: 2px; }
        .planet-card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .planet-card { border: 1px solid #ffe0b2; border-radius: 8px; padding: 8px; display: flex; align-items: center; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .planet-icon { font-size: 24px; color: var(--primary); margin-right: 10px; width: 30px; text-align: center; }
        .status-malefic { color: #e53935; font-size: 10px; font-weight: bold; }
        .status-benefic { color: #43a047; font-size: 10px; font-weight: bold; }
        .dasha-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 20px; }
        .dasha-col { background: #fff; border: 1px solid #ffe0b2; border-radius:5px; padding:5px; }
        .dasha-header { text-align: center; border-bottom: 1px solid #ffe0b2; padding-bottom: 5px; margin-bottom: 5px; background:#fff8e1; border-radius:4px; padding-top:4px;}
        .dasha-planet { color: #e65100; font-weight: bold; font-size: 12px; text-transform: uppercase; }
        .dasha-time { font-size: 9px; color: #666; }
        .ad-row { display: flex; justify-content: space-between; font-size: 9px; padding: 3px 5px; border-bottom: 1px dashed #eee; }
        .ad-row:last-child { border-bottom: none; }
        .ad-row:nth-child(even) { background: #fdfaf6; }
        .current-dasha-table th { background: #ef6c00; color: white; }
        /* STYLES FOR DOSHA */
        .kalsarp-btn { padding: 5px; border: 1px solid #ddd; text-align: center; font-size: 10px; border-radius: 4px; }
        .kalsarp-btn.active { background: #d35400; color: white; font-weight: bold; border-color: #d35400; }
        .result-box-container { display: flex; gap: 15px; margin-top: 15px; }
        .result-card { flex: 1; border: 1px solid #eee; padding: 15px; border-radius: 8px; text-align: center; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .face-icon { font-size: 30px; display: block; margin-bottom: 5px; }
        .face-sad { color: #e53935; } .face-happy { color: #43a047; }
        .result-title { font-weight: bold; font-size: 12px; margin-bottom: 5px; color: #333; }
        .manglik-image { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid #ef6c00; }
        .shloka-box { background: #fff8e1; border-left: 4px solid #ffca28; padding: 10px; font-style: italic; font-size: 12px; text-align: center; margin: 20px 0; color: #5d4037; }
        .progress-container { width: 100%; background-color: #e0e0e0; border-radius: 10px; margin: 15px 0 5px 0; }
        .progress-bar { height: 20px; background-color: #ef5350; border-radius: 10px; text-align: center; line-height: 20px; color: white; font-size: 10px; font-weight: bold; }
        .analysis-col { flex: 1; background: #fafafa; padding: 10px; border-radius: 6px; border: 1px solid #eee; }
        .analysis-header { font-weight: bold; border-bottom: 2px solid #eee; padding-bottom: 5px; margin-bottom: 10px; font-size: 12px; color: #444; }
        .remedy-box { border-left: 4px solid #5c6bc0; background: #e8eaf6; padding: 15px; border-radius: 0 5px 5px 0; font-size: 11px; line-height: 1.8; }
        .remedy-box ul { margin: 0; padding-left: 20px; }
        /* NEW STYLES FOR PREDICTIONS */
        .dasha-flow { display:flex; align-items:center; justify-content:center; gap:5px; margin-bottom:25px; }
        .df-box { background:#f5f5f5; border:1px solid #ddd; padding:8px 15px; border-radius:6px; text-align:center; min-width:80px; }
        .df-box div:first-child { font-size:8px; color:#999; font-weight:bold; letter-spacing:1px; }
        .df-planet { font-size:12px; font-weight:bold; color:#333; text-transform:uppercase; margin-top:2px; }
        .df-arrow { color:#ccc; font-size:12px; }
        .df-active { background:#fff; box-shadow:0 4px 6px rgba(0,0,0,0.05); transform:scale(1.05); }
        .pred-grid { display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:15px; }
        .pred-item { background:#fff; border:1px solid #eee; border-radius:6px; overflow:hidden; }
        .pred-item:last-child { grid-column: 1 / -1; }
        .pi-head { background:#f9f9f9; padding:6px 10px; font-size:10px; font-weight:bold; color:#555; border-bottom:1px solid #eee; }
        .pi-body { padding:10px; font-size:10px; color:#444; }
    `;
    document.head.appendChild(style);
}

/* -------------------------------------------------------------------------- */
/* 4. MAIN GENERATOR FUNCTION                                                 */
/* -------------------------------------------------------------------------- */
function generateFullReport() {
    const name = document.getElementById('name').value || "జాతకుడు";
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const lat = parseFloat(document.getElementById('lat').value) || 28.61;
    const lng = parseFloat(document.getElementById('lng').value) || 77.20;

    if (!date || !time) { alert("దయచేసి తేదీ మరియు సమయాన్ని నమోదు చేయండి (Please enter Date and Time)"); return; }

    birthDateObj = new Date(date + 'T' + time);
    calculatePlanets(date, time, lat, lng);

    const container = document.getElementById('reportContainer');
    container.innerHTML = '<div style="text-align:center; padding:50px;"><h2>జాతక నివేదిక తయారవుతోంది... (Generating Report...)</h2><div style="font-size:30px;">🕉️</div></div>';

    setTimeout(() => {
        container.innerHTML = '';

        // --- PART 1: BASICS & CHARTS (Pages 1-8) ---
        container.appendChild(createCoverPage(name, date, time));
        container.appendChild(createPage1(name, date, time));
        container.appendChild(createPage2());
        container.appendChild(createPage3());
        container.appendChild(createPage4());
        container.appendChild(createVargaPage([1, 2, 3, 4, 7, 9, 10, 12, 16], 5)); // Page 5
        container.appendChild(createVargaPage([20, 24, 27, 30, 40, 45, 60], 6));   // Page 6
        container.appendChild(createPage7());
        container.appendChild(createPage8());

        // --- PART 2: DASHAS (Pages 9-10) ---
        container.appendChild(createPage9());   // Vimshottari I
        container.appendChild(createPage10());  // Vimshottari II

        // --- PART 3: MERGED DOSHAS & SADE SATI (Pages 11-13) ---
        container.appendChild(createKalsarpaPage(11));  // Kalsarpa (Merged)
        container.appendChild(createManglikPage(12));   // Manglik (Merged)
        container.appendChild(createSadeSatiPage(13));  // Sade Sati (Merged)

        // --- PART 4: CHARTS & REPORTS (Pages 14+) ---
        container.appendChild(createPage19());  // 5 Year Chart (Renumbered logic inside as Page 14)

        // Planet Reports (Pages 15-24)
        container.appendChild(createPage20());  // Ascendant
        container.appendChild(createPage21());  // Sun
        container.appendChild(createPage22());  // Moon
        container.appendChild(createPage23());  // Mars
        container.appendChild(createPage24());  // Mercury
        container.appendChild(createPage25());  // Jupiter
        container.appendChild(createPage26());  // Venus
        container.appendChild(createPage27());  // Saturn
        container.appendChild(createPage28());  // Rahu
        container.appendChild(createPage29());  // Ketu
        
        container.appendChild(createPage30());  // Pratyantar
        
        // --- PREDICTION PAGES (Starts at Page 26) ---
        const futurePages = createFuturePredictionPages(26);
        futurePages.forEach(p => container.appendChild(p));
        
        document.getElementById('bottomBar').style.display = 'block';
    }, 100);
}

/* -------------------------------------------------------------------------- */
/* 5. PAGE GENERATORS                                                         */
/* -------------------------------------------------------------------------- */

function addBrandHeader(p) {
    const brand = document.createElement('div');
    brand.className = 'brand-header';
    brand.innerText = 'ASTROGUIDE';
    p.appendChild(brand);
}

function createCoverPage(name, date, time) {
    const p = document.createElement('div'); p.className = 'page';
    p.innerHTML = `
        <div style="border: 8px double #f57c00; height: 85%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px; margin-top: 20px;">
            <h1 style="font-size:48px; color:#d35400; margin:0;">ఆస్ట్రో గైడ్ (ASTROGUIDE)</h1>
            <h2 style="font-size:24px; color:#555; font-weight:normal;">సంపూర్ణ వేద జాతక నివేదిక</h2>
            <div style="font-size:80px; margin:40px; color:#f57c00;">🕉️</div>
            <div style="font-size:18px; line-height:2;">
                <b>జాతకుని పేరు:</b><br>
                <span style="font-size:28px; color:#d35400;">${name}</span><br>
                ${new Date(date).toDateString()} | ${time}
            </div>
        </div>`;
    return p;
}

/* --- BASICS 1-8 (ADDED HEADER) --- */
function createPage1(name, date, time) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    // ... Logic remains same ...
    const sun = getPlanet("Sun").lon;
    const moon = getPlanet("Moon").lon;
    const getTithiTe = () => { let t = Math.floor(((moon - sun + 360) % 360) / 12) + 1; return `తిథి ${t}`; };
    const getYogTe = () => YOGAS_TE[Math.floor((sun + moon) % 360 / 13.333)] || "";
    const getNakTe = () => NAKSHATRAS_TE[Math.floor(moon / 13.333333)] || "";
    const getKaranaTe = () => KARANAS_TE[Math.floor((moon - sun + 360) % 360 / 6) % 11] || "";
    const getDayTe = () => VARAS_TE[new Date(date).getDay()];
    const getSignTe = (lon) => SIGNS_TE[Math.floor(lon / 30) + 1];
    const getPlanetLordTe = (lon) => PLANET_TE[getPlanetLord(Math.floor(lon/30)+1)] || getPlanetLord(Math.floor(lon/30)+1);
    const row = (l, v) => `<tr><td style="font-weight:bold; color:#555;">${l}</td><td>${v}</td></tr>`;
    
    p.innerHTML += `<div class="header"><h1>ప్రాథమిక జ్యోతిష్య వివరాలు</h1></div>
        <div class="flex-row"><div class="half-width"><div class="section-title">జనన వివరాలు</div><table>${row("తేదీ", date)}${row("సమయం", time)}${row("అక్షాంశం", document.getElementById('lat').value)}${row("రేఖాంశం", document.getElementById('lng').value)}${row("ఆయనంశ", "లాహిరి (" + ayanamsaVal.toFixed(2) + "°)")}</table></div>
        <div class="half-width"><div class="section-title">పంచాంగం</div><table>${row("తిథి", getTithiTe())}${row("యోగం", getYogTe())}${row("నక్షత్రం", getNakTe())}${row("కరణం", getKaranaTe())}${row("వారం", getDayTe())}</table></div></div>
        <div class="flex-row" style="margin-top:20px;"><div class="half-width"><div class="section-title">ఘట చక్రం</div><table>${row("చంద్ర రాశి", getSignTe(moon))}${row("యోని", "గౌ")}${row("గణ", "మనుష్య")}${row("నాడి", "మధ్య")}</table></div>
        <div class="half-width"><div class="section-title">అవకహడ చక్రం</div><table>${row("లగ్నం", getSignTe(getPlanet("Ascendant").lon))}${row("లగ్నాధిపతి", getPlanetLordTe(getPlanet("Ascendant").lon))}${row("రాశ్యాధిపతి", getPlanetLordTe(moon))}${row("నక్షత్రాధిపతి", PLANET_TE[getNakshatra(moon).lord] || getNakshatra(moon).lord)}${row("వర్ణం", "విప్ర")}</table></div></div><div class="footer-num">పేజీ 1</div>`;
    return p;
}

function createPage2() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let rows = globalPlanets.map(pl => {
        let s = Math.floor(pl.lon / 30) + 1; 
        let nak = getNakshatra(pl.lon); 
        let status = pl.speed < 0 ? "(వక్రీ)" : "";
        let pNameTe = PLANET_TE[pl.name] || pl.name;
        let sNameTe = SIGNS_TE[s];
        let pLordTe = PLANET_TE[getPlanetLord(s)] || getPlanetLord(s);
        let nakNameTe = NAKSHATRAS_TE[nak.id] || nak.name;
        let nakLordTe = PLANET_TE[nak.lord] || nak.lord;
        return `<tr><td><b>${pNameTe}</b> ${status}</td><td>${sNameTe}</td><td>${formatDeg(pl.lon)}</td><td>${pLordTe}</td><td>${nakNameTe}</td><td>${nakLordTe}</td><td>${s}</td></tr>`;
    }).join('');
    let cards = globalPlanets.filter(pl => pl.name !== 'Ascendant').map(pl => {
        let nature = ["Jupiter", "Venus", "Mercury", "Moon"].includes(pl.name) ? "శుభ" : "పాప";
        let pNameTe = PLANET_TE[pl.name] || pl.name;
        let sNameTe = SIGNS_TE[Math.floor(pl.lon/30)+1];
        return `<div class="planet-card"><div class="planet-icon">●</div><div class="planet-info"><b>${pNameTe}</b><span>${sNameTe}</span><div class="${nature.includes('శుభ') ? 'status-benefic' : 'status-malefic'}">${nature}</div></div></div>`;
    }).join('');
    p.innerHTML += `<div class="header"><h1>గ్రహ స్థితులు</h1></div><table><thead><tr><th>గ్రహం</th><th>రాశి</th><th>డిగ్రీ</th><th>అధిపతి</th><th>నక్షత్రం</th><th>నక్షత్రాధిపతి</th><th>భావం</th></tr></thead><tbody>${rows}</tbody></table><div class="section-title">గ్రహ వివరాలు</div><div class="planet-card-grid">${cards}</div><div class="footer-num">పేజీ 2</div>`;
    return p;
}

function createPage3() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    p.innerHTML += `<div class="header"><h1>జాతక చక్రాలు</h1></div><div class="section-title">లగ్న కుండలి (D1)</div><div class="flex-row"><div style="flex:1"><div id="chartD1" class="chart-grid" style="width:100%; max-width:400px;"></div></div><div style="flex:0.6; padding:15px; background:#fffcf5; border:1px dashed #ffd54f; font-size:11px;"><b>విశ్లేషణ:</b><br>లగ్న కుండలి శారీరక ఆరోగ్యం మరియు వ్యక్తిత్వాన్ని సూచిస్తుంది.</div></div><br><div class="flex-row"><div class="half-width"><div class="section-title">చంద్ర కుండలి</div><div id="chartMoon" class="chart-grid"></div></div><div class="half-width"><div class="section-title">నవాంశ కుండలి (D9)</div><div id="chartD9" class="chart-grid"></div></div></div><div class="footer-num">పేజీ 3</div>`;
    setTimeout(() => { renderChart('chartD1', calculateVargaPositions(1)); renderChart('chartD9', calculateVargaPositions(9)); renderChart('chartMoon', calculateVargaPositions(1)); }, 50);
    return p;
}

function createPage4() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let asc = getPlanet("Ascendant").lon;
    let rows = "";
    for (let i = 1; i <= 12; i++) {
        let mid = (asc + (i - 1) * 30) % 360;
        let signId = Math.floor(mid/30)+1;
        rows += `<tr><td>${i}</td><td>${SIGNS_TE[signId]}</td><td>${formatDeg(mid)}</td><td>${SIGNS_TE[Math.floor(((mid+15)%360)/30)+1]}</td><td>${formatDeg((mid + 15) % 360)}</td></tr>`;
    }
    p.innerHTML += `<div class="header"><h1>భావ స్పష్ట</h1></div><div style="text-align:center;color:#f57c00;margin-bottom:10px;">లగ్నం: ${formatDeg(asc)}</div><table><thead><tr><th>భావం</th><th>రాశి</th><th>భావ మధ్య</th><th>రాశి</th><th>భావ సంధి</th></tr></thead><tbody>${rows}</tbody></table><div class="flex-row"><div class="half-width"><div class="section-title">చలిత చక్రం</div><div id="chartChalit" class="chart-grid"></div></div><div class="half-width" style="padding:20px; font-size:11px;">భావ బలాన్ని చలిత చక్రం సూచిస్తుంది.</div></div><div class="footer-num">పేజీ 4</div>`;
    setTimeout(() => renderChart('chartChalit', calculateVargaPositions(1)), 50);
    return p;
}

function createVargaPage(divisors, pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let grids = divisors.map(d => `<div style="text-align:center;"><div style="font-weight:bold;font-size:11px;margin-bottom:2px;">D-${d}</div><div id="varga${d}_p${pageNum}" class="chart-grid" style="width:150px; height:250px; font-size:8px;"></div></div>`).join('');
    p.innerHTML += `<div class="header"><h1>వర్గ చక్రాలు</h1></div><div style="display:grid; grid-template-columns:repeat(3,1fr); row-gap:20px; column-gap:10px; justify-items:center; margin-top:20px;">${grids}</div><div class="footer-num">పేజీ ${pageNum}</div>`;
    setTimeout(() => divisors.forEach(d => renderChart(`varga${d}_p${pageNum}`, calculateVargaPositions(d))), 50);
    return p;
}

function createPage7() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const pl = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"];
    const translateList = (list) => list.map(x => PLANET_TE[x] || x).join(", ");
    const genTable = () => pl.map(x => `<tr><td><b>${PLANET_TE[x]}</b></td><td>${translateList(FRIENDSHIPS[x].f)}</td><td>${translateList(FRIENDSHIPS[x].n)}</td><td>${translateList(FRIENDSHIPS[x].e)}</td></tr>`).join('');
    p.innerHTML += `<div class="header"><h1>మైత్రీ చక్రం</h1></div><div class="section-title">నైసర్గిక మైత్రి</div><table><thead><tr><th>గ్రహం</th><th>మిత్రులు</th><th>సముడు</th><th>శత్రువులు</th></tr></thead><tbody>${genTable()}</tbody></table><br><div class="section-title">తాత్కాలిక మైత్రి</div><table><thead><tr><th>గ్రహం</th><th>మిత్రులు</th><th>సముడు</th><th>శత్రువులు</th></tr></thead><tbody>${genTable()}</tbody></table><div class="footer-num">పేజీ 7</div>`;
    return p;
}

function createPage8() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const topRows = globalPlanets.map(pl => {
        let s = Math.floor(pl.lon / 30) + 1;
        let pNameTe = PLANET_TE[pl.name] || pl.name;
        let sNameTe = SIGNS_TE[s];
        let pLordTe = PLANET_TE[getPlanetLord(s)] || getPlanetLord(s);
        let status = pl.speed < 0 ? "అవును" : ""; 
        return `<tr><td style="font-weight:bold;">${pNameTe}</td><td style="color:${pl.speed<0?'red':'inherit'}">${status}</td><td>${sNameTe}</td><td>${formatFullDeg(pl.lon)}</td><td>${pLordTe}</td><td>${s}</td></tr>`;
    }).join('');
    const bottomRows = globalPlanets.map(pl => {
        let nak = getNakshatra(pl.lon);
        let pNameTe = PLANET_TE[pl.name] || pl.name;
        let nakNameTe = NAKSHATRAS_TE[nak.id] || nak.name;
        let nakLordTe = PLANET_TE[nak.lord] || nak.lord;
        let subLordTe = PLANET_TE[VIM_LORDS[(nak.id+2)%9]] || VIM_LORDS[(nak.id+2)%9];
        let ssLordTe = PLANET_TE[VIM_LORDS[(nak.id+4)%9]] || VIM_LORDS[(nak.id+4)%9];
        return `<tr><td style="font-weight:bold;">${pNameTe}</td><td>${nakNameTe}</td><td>${nakLordTe}</td><td>${nak.charan}</td><td>${subLordTe}</td><td>${ssLordTe}</td></tr>`;
    }).join('');
    p.innerHTML += `<div class="header"><h1>కె.పి గ్రహ వివరాలు</h1></div><table><thead><tr><th>గ్రహం</th><th>వక్రీ</th><th>రాశి</th><th>డిగ్రీలు</th><th>అధిపతి</th><th>భావం</th></tr></thead><tbody>${topRows}</tbody></table><br><table><thead><tr><th>గ్రహం</th><th>నక్షత్రం</th><th>నక్షత్రాధిపతి</th><th>పాదం</th><th>ఉప ప్రభువు</th><th>ఉప-ఉప ప్రభువు</th></tr></thead><tbody>${bottomRows}</tbody></table><div class="footer-num">పేజీ 8</div>`;
    return p;
}

function createPage9() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const dashas = calcVimshottari().slice(0, 6);
    const createCol = (d) => {
        const adList = getAntardashaDates(d.lord, d.start);
        const mdNameTe = PLANET_TE[d.lord] || d.lord;
        let h = `<div class="dasha-col"><div class="dasha-header"><div class="dasha-planet">${mdNameTe}</div><div class="dasha-time">${d.start}</div><div class="dasha-time">${d.end}</div></div>`;
        adList.forEach(ad => {
            let adNameTe = PLANET_TE[ad.lord] || ad.lord;
            h += `<div class="ad-row"><span class="ad-planet">${adNameTe}</span><span class="ad-date">${ad.date}</span></div>`; 
        });
        return h + `</div>`;
    };
    p.innerHTML += `<div class="header"><h1>వింశోత్తరి దశ - I</h1></div><div class="dasha-grid" style="margin-top:30px;">${dashas.slice(0,3).map(createCol).join('')}</div><div class="dasha-grid">${dashas.slice(3,6).map(createCol).join('')}</div><div class="footer-num">పేజీ 9</div>`;
    return p;
}

function createPage10() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const dashas = calcVimshottari().slice(6, 9);
    const createCol = (d) => {
        const adList = getAntardashaDates(d.lord, d.start);
        const mdNameTe = PLANET_TE[d.lord] || d.lord;
        let h = `<div class="dasha-col"><div class="dasha-header"><div class="dasha-planet">${mdNameTe}</div><div class="dasha-time">${d.start}</div><div class="dasha-time">${d.end}</div></div>`;
        adList.forEach(ad => {
            let adNameTe = PLANET_TE[ad.lord] || ad.lord;
            h += `<div class="ad-row"><span class="ad-planet">${adNameTe}</span><span class="ad-date">${ad.date}</span></div>`; 
        });
        return h + `</div>`;
    };
    let currentData = getCurrentDashaData();
    let currMDTe = PLANET_TE[currentData.md.lord] || currentData.md.lord;
    let currADTe = PLANET_TE[currentData.ad.lord] || currentData.ad.lord;
    p.innerHTML += `<div class="header"><h1>వింశోత్తరి దశ - II</h1></div><div class="dasha-grid" style="margin-top:30px;">${dashas.map(createCol).join('')}</div><div class="section-title" style="margin-top:40px;">ప్రస్తుత దశ వివరాలు</div><table class="current-dasha-table"><thead><tr><th>దశ</th><th>గ్రహం</th><th>ప్రారంభ తేదీ</th><th>ముగింపు తేదీ</th></tr></thead><tbody><tr><td><b>మహాదశ</b></td><td>${currMDTe}</td><td>${currentData.md.start}</td><td>${currentData.md.end}</td></tr><tr style="background:#ffebee;"><td><b>అంతర్దశ</b></td><td>${currADTe}</td><td>${currentData.ad.start}</td><td>${currentData.ad.end}</td></tr><tr><td><b>ప్రత్యాంతర</b></td><td>-</td><td>-</td><td>-</td></tr></tbody></table><div class="footer-num">పేజీ 10</div>`;
    return p;
}

// --- MERGED KALSARPA PAGE (11) ---
function createKalsarpaPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const kData = checkKalsarpa();
    const types = ["అనంత్", "కులిక్", "వాసుకి", "శంఖపాల్", "పద్మ", "మహాపద్మ", "తక్షక్", "కర్కోటక్", "శంఖచూడ్", "ఘటక్", "విషధర్", "శేషనాగ్"];
    const gridHtml = types.map((t, i) => {
        let activeClass = (kData.present && kData.typeId === (i+1)) ? "active" : "";
        return `<div class="kalsarp-btn ${activeClass}">${t}</div>`;
    }).join('');
    const statusText = kData.present ? "కాల సర్ప దోషం ఉంది" : "కాల సర్ప దోషం లేదు";
    let reportText = kData.present 
        ? `మీ జాతకంలో <b>${kData.name} కాల సర్ప దోషం</b> ఉంది. రాహువు మరియు కేతువుల మధ్య మిగిలిన గ్రహాలు బంధించబడ్డాయి. ఇది విజయం సాధించడంలో అడ్డంకులు, వైవాహిక జీవితంలో అశాంతి కలిగించవచ్చు. సరైన పరిహారాలు పాటించడం ద్వారా ప్రభావం తగ్గుతుంది.`
        : `మీ జాతకంలో <b>కాల సర్ప దోషం లేదు</b>. మీరు ఈ దోషానికి సంబంధించిన ఎలాంటి సమస్యలను ఎదుర్కోరు.`;

    p.innerHTML += `<div class="header"><h1>కాల సర్ప దోషం (Kalsarpa Dosha)</h1></div>
        <div style="display:flex; gap:15px; margin-bottom:15px;">
            <div style="flex:1;">
               <div class="section-title">దోష రకాలు</div>
               <div class="dosha-grid" style="grid-template-columns: repeat(3, 1fr); font-size:9px;">${gridHtml}</div>
            </div>
            <div style="flex:1; display:flex; flex-direction:column; justify-content:center; text-align:center;">
               <span class="face-icon ${kData.present ? 'face-sad' : 'face-happy'}" style="font-size:40px;">${kData.present ? '☹' : '☺'}</span>
               <div style="font-weight:bold; color:#333; margin-top:5px;">${statusText}</div>
               <div style="font-size:10px; color:#666;">${kData.present ? kData.name : "N/A"}</div>
            </div>
        </div>
        <div class="section-title">విశ్లేషణ (Analysis)</div>
        <p style="font-size:11px; line-height:1.6; text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px;">${reportText}</p>
        <div class="section-title" style="margin-top:20px;">పరిహారాలు (Remedies)</div>
        <div class="remedy-box"><ul><li>రుద్రాభిషేకం - శివుడికి పూజ చేయడం మంచిది.</li><li>పూజా గదిలో కాల సర్ప యంత్రాన్ని స్థాపించండి.</li><li>బుధవారం లేదా శుక్రవారం నాడు దోష నివారణ పూజ చేయించండి.</li><li>పేదలకు ఎర్రటి లేదా నల్లటి పప్పుధాన్యాలను దానం చేయండి.</li><li>8 లేదా 9 ముఖాల రుద్రాక్షను ధరించండి.</li></ul></div>
        <div class="footer-num">పేజీ ${pageNum}</div>`;
    return p;
}

// --- MERGED MANGLIK PAGE (12) ---
function createManglikPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const mData = checkManglik();
    const statusText = mData.isManglik 
        ? 'మీ జాతకంలో కుజ దోషం (Manglik Dosha) గుర్తించబడింది. దోష ప్రభావం ఉంది కాబట్టి వివాహానికి ముందు జాతక పరిశీలన అవసరం.' 
        : 'మీ జాతకంలో కుజుడు శుభ స్థానంలో ఉన్నాడు. మీకు కుజ దోషం లేదు (Non-Manglik).';
    const houseReasons = mData.reasonsHouse.length > 0 ? mData.reasonsHouse.join('<br>') : "ప్రతికూల స్థానాలు లేవు.";

    p.innerHTML += `<div class="header"><h1>కుజ దోష విశ్లేషణ (Manglik Dosha)</h1></div>
        <div style="display:flex; gap:20px; align-items:center; margin-bottom:20px;">
            <div style="flex:1; text-align:center;">
                <div class="progress-container"><div class="progress-bar" style="width:${mData.percent}%">${mData.percent}%</div></div>
                <div style="font-weight:bold; font-size:12px; margin-top:5px;">దోష తీవ్రత</div>
            </div>
            <div style="flex:2; font-size:11px; text-align:justify; background:#fff3e0; padding:10px; border-radius:5px;">
                ${statusText}
            </div>
        </div>
        <div class="flex-row">
            <div class="analysis-col">
                <div class="analysis-header">కారణాలు (Reasons)</div>
                <div class="analysis-list" style="font-size:10px;">${houseReasons}</div>
            </div>
            <div class="analysis-col">
                <div class="analysis-header">శ్లోకం</div>
                <div style="font-style:italic; font-size:10px; text-align:center; padding-top:10px;">లగ్నే వ్యయే సుఖే వాపి సప్తమే వా అష్టమే కుజే | <br>శుభ దృగ్ యోగ హీనే చ పతిం హంతి న సంశయమ్ ||</div>
            </div>
        </div>
        <div class="section-title" style="margin-top:20px;">పరిహారాలు (Remedies)</div>
        <div class="remedy-box" style="border-left-color: #d35400;"><ul><li>పూజా గదిలో మంగళ యంత్రాన్ని స్థాపించండి.</li><li>ప్రతి మంగళవారం హనుమాన్ ఆలయాన్ని సందర్శించి, సింధూరం, ఎర్రటి పూలతో పూజించండి.</li><li>హనుమాన్ మంత్రాన్ని జపించండి: <b>|| ఓం శ్రీం హనుమతే నమః ||</b></li><li>మంగళవారాల్లో ఉపవాసం ఉండండి.</li><li>వివాహానికి ముందు కుంభ వివాహం చేయడం మంచిది.</li></ul></div>
        <div class="footer-num">పేజీ ${pageNum}</div>`;
    return p;
}

// --- MERGED SADE SATI PAGE (13) ---
function createSadeSatiPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const status = getSadeSatiStatus();
    // Get condensed timeline: just the next few relevant phases
    const fullTimeline = getSadeSatiTimeline();
    const timelineRows = fullTimeline.slice(0, 5).map(r => `<tr><td>${r.date}</td><td>${r.satSign}</td><td>${r.phase}</td></tr>`).join('');

    p.innerHTML += `<div class="header"><h1>ఏలినాటి శని (Sade Sati)</h1></div>
        <div style="display:flex; gap:15px; margin-bottom:20px;">
            <div class="ss-status-card" style="flex:1;">
                <div style="font-size:30px; color:${status.present ? '#e53935' : '#43a047'}; margin-bottom:5px;">${status.present ? '☹' : '☺'}</div>
                <div style="font-weight:bold; font-size:12px;">${status.statusText}</div>
                <div style="font-size:10px; color:#666;">${status.desc}</div>
            </div>
            <div class="ss-table-card" style="flex:1.5;">
                <table style="margin-bottom:0;">
                    <tr><td style="font-weight:bold;">చంద్ర రాశి</td><td>${status.moonSign}</td></tr>
                    <tr><td style="font-weight:bold;">శని స్థానం</td><td>${status.saturnSign}</td></tr>
                </table>
            </div>
        </div>
        <div class="section-title">రాబోయే దశలు (Upcoming Phases)</div>
        <table class="ss-timeline-table">
            <thead><tr><th>తేదీ</th><th>శని రాశి</th><th>దశ రకం</th></tr></thead>
            <tbody>${timelineRows}</tbody>
        </table>
        <div class="section-title" style="margin-top:15px;">పరిహారాలు (Remedies)</div>
        <div class="remedy-box-green" style="font-size:10px;">
            <ul>
                <li>తల్లిదండ్రులకు మరియు వృద్ధులకు సేవ చేయండి.</li>
                <li>రోజూ హనుమాన్ చాలీసా పఠించండి.</li>
                <li>శనివారాల్లో సూర్యోదయం నుండి సూర్యాస్తమయం వరకు ఉపవాసం ఉండటం మంచిది.</li>
                <li>పేదలకు మినపప్పు (Urad Dal), నూనె, నల్ల నువ్వులు దానం చేయండి.</li>
                <li>మంత్రం: "|| ఓం శ్రీం హనుమతే నమః ||"</li>
            </ul>
        </div>
        <div class="footer-num">పేజీ ${pageNum}</div>`;
    return p;
}
/* -------------------------------------------------------------------------- */
/* PART 2: REMAINING PAGE GENERATORS (PAGES 14+)                              */
/* -------------------------------------------------------------------------- */

// --- 5 YEAR CHART (Page 14) ---
function createPage19() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p); // Add Header
    
    const today = new Date();
    const future = new Date();
    future.setFullYear(today.getFullYear() + 5);
    
    const dashas = calcVimshottari();
    let flatList = [];
    dashas.forEach(md => {
        let ads = getAntardashaDates(md.lord, md.start);
        ads.forEach(ad => {
            flatList.push({
                md: PLANET_TE[md.lord] || md.lord,
                ad: PLANET_TE[ad.lord] || ad.lord,
                start: new Date(ad.start),
                end: new Date(ad.end),
                startStr: ad.start,
                endStr: ad.end
            });
        });
    });
    
    const viewList = flatList.filter(d => d.end >= today && d.start <= future);

    const rows = viewList.map(d => `
        <tr>
            <td>${d.md} - ${d.ad}</td>
            <td>${d.startStr}</td>
            <td>${d.endStr}</td>
            <td>${d.md === d.ad ? 'ప్రధాన మార్పు (Major Shift)' : 'అంతర్దశ (Sub Period)'}</td>
        </tr>
    `).join('');

    p.innerHTML += `
        <div class="header"><h1>5 సంవత్సరాల వ్యక్తిగత చార్ట్</h1></div>
        <div class="section-title">రాబోయే దశలు (${today.getFullYear()} - ${future.getFullYear()})</div>
        <p style="font-size:11px; text-align:center;">రాబోయే 5 సంవత్సరాల ప్రధాన గ్రహ ప్రభావాలను ఈ చార్ట్ సూచిస్తుంది.</p>
        
        <table class="year-chart-table">
            <thead>
                <tr>
                    <th>దశ (MD-AD)</th>
                    <th>ప్రారంభ తేదీ</th>
                    <th>ముగింపు తేదీ</th>
                    <th>దశ రకం</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
        
        <div class="quote-box">
            "గ్రహాలు ప్రేరేపిస్తాయి, కానీ బలవంతం చేయవు. ఈ సమయాన్ని తెలివిగా ఉపయోగించుకోండి."
        </div>
        <div class="footer-num">పేజీ 14</div>`; // Renumbered
    return p;
}

// --- HELPER: REPORT PAGE GENERATOR (With Brand Header) ---
function createReportPage(title, imgUrl, infoTableHtml, shloka, speakText, adviceText, natureText, pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p); // Add Header
    
    const cardStyle = `background: #fff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #eee; overflow: hidden; margin-bottom: 20px;`;
    const headerStyle = `background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); padding: 15px; border-bottom: 1px solid #ffcc80; display:flex; align-items:center; gap:15px;`;
    
    p.innerHTML += `
        <div class="header"><h1>${title}</h1></div>
        
        <div style="${cardStyle}">
            <div style="${headerStyle}">
                <img src="${imgUrl}" style="width:60px; height:60px;">
                <div>
                    <div style="font-size:18px; font-weight:bold; color:#d35400;">${natureText}</div>
                    <div style="font-size:12px; color:#666;">సంస్కృత శ్లోకం & గ్రహ స్థితి</div>
                </div>
            </div>
            <div style="padding:15px;">
                <div class="sanskrit-shloka" style="margin:0 0 15px 0; background:none; border:none; padding:0; text-align:center; color:#5d4037; font-weight:bold;">
                    ${shloka}
                </div>
                <table class="report-table" style="margin-bottom:0;">
                    ${infoTableHtml}
                </table>
            </div>
        </div>

        <div class="section-title" style="color:#2e7d32; border-color:#2e7d32;">జ్యోతిష్యుని విశ్లేషణ (Astrologer's Verdict)</div>
        
        <div style="display:flex; gap:15px; margin-bottom:20px;">
            <div style="flex:1;">
                 <div style="background:#f1f8e9; padding:15px; border-radius:8px; border-left:5px solid #43a047; font-size:12px; line-height:1.8; text-align:justify; color:#333;">
                    <span style="font-size:30px; float:left; margin-right:10px; line-height:30px; color:#43a047;">❝</span>
                    ${speakText}
                    <span style="font-size:30px; float:right; margin-left:10px; line-height:0; color:#43a047; margin-top:10px;">❞</span>
                 </div>
            </div>
        </div>

        <div class="section-title" style="color:#d32f2f; border-color:#d32f2f;">సూచనలు & జాగ్రత్తలు (Advice)</div>
        
        <div style="background:#ffebee; padding:15px; border-radius:8px; border:1px dashed #ef5350; display:flex; gap:15px; align-items:center;">
            <div style="font-size:24px;">💡</div>
            <div style="font-size:12px; line-height:1.6; color:#b71c1c; font-weight:500;">
                ${adviceText}
            </div>
        </div>
        
        <div class="footer-num">పేజీ ${pageNum}</div>
    `;
    return p;
}

// --- HELPER: PLANET BUILDER (Fixed Logic) ---
function buildPlanetPage(planetName, pageNum) {
    const data = PLANET_REPORT_DATA[planetName];
    const planetInfo = getPlanet(planetName);
    const signIdx = Math.floor(planetInfo.lon / 30) + 1;
    const signName = SIGNS_TE[signIdx]; 

    const tableHtml = `
        <tr><td><b>ఉన్న రాశి (Sign)</b></td><td><b>${signName}</b></td></tr>
        <tr><td><b>నక్షత్రం (Star)</b></td><td>${getNakshatra(planetInfo.lon).name}</td></tr>
        <tr><td><b>స్థితి (Status)</b></td><td>${planetInfo.speed < 0 ? "<span style='color:red'>వక్రీ (Retrograde)</span>" : "మార్గ (Direct)"}</td></tr>
        <tr><td><b>డిగ్రీ (Degree)</b></td><td>${formatDeg(planetInfo.lon)}</td></tr>
    `;
    
    const personalizedSpeak = `మీ జాతకంలో ${PLANET_TE[planetName]} <b>${signName}</b> రాశిలో ఉన్నారు. ${data.speak}`;
    
    return createReportPage(
        data.title,
        data.img,
        tableHtml,
        data.shloka,
        personalizedSpeak,
        data.advice,
        data.nature,
        pageNum
    );
}

// --- PAGE 15: ASCENDANT (Renumbered) ---
function createPage20() {
    const ascLon = getPlanet("Ascendant").lon;
    const signIdx = Math.floor(ascLon / 30) + 1;
    const signInfo = SIGN_INFO[signIdx];
    const signNameTe = SIGNS_TE[signIdx];
    
    const rawLord = signInfo.lord;
    const lordName = PLANET_TE[rawLord] ? PLANET_TE[rawLord] : rawLord;

    const tableHtml = `
        <tr><td><b>అధిపతి (Lord)</b></td><td>${lordName}</td></tr>
        <tr><td><b>తత్వం (Element)</b></td><td>${signInfo.element}</td></tr>
        <tr><td><b>అదృష్ట రత్నం (Gem)</b></td><td>${signInfo.gem}</td></tr>
        <tr><td><b>చిహ్నం (Symbol)</b></td><td>${signInfo.sym}</td></tr>
    `;

    const speakText = `నమస్కారం! మీరు <b>${signNameTe}</b> లగ్నంలో జన్మించారు. లగ్నం అంటే కేవలం రాశి మాత్రమే కాదు, అది మీ 'వ్యక్తిత్వం' మరియు 'ఆరోగ్యానికి' అద్దం పడుతుంది. 
    ${signNameTe} రాశికి అధిపతి <b>${lordName}</b>. దీని ప్రభావం వల్ల మీరు స్వతహాగా ధైర్యవంతులు మరియు పట్టుదల గలవారు. మీరు ఏ పనినైనా మధ్యలో వదిలేయరు.`;

    const adviceText = `మీ లగ్నాధిపతి <b>${lordName}</b> కాబట్టి, ఆ గ్రహానికి సంబంధించిన వారాన్ని (ఉదాహరణకు ${signInfo.day}) మీరు ఏదైనా కొత్త పని మొదలుపెట్టడానికి ఎంచుకోవడం మంచిది.`;

    return createReportPage(
        "లగ్న విశ్లేషణ (Ascendant Report)", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Classic_1635_Schiller_constellation_Capricornus.png/250px-Classic_1635_Schiller_constellation_Capricornus.png", 
        tableHtml,
        "దేహం రూపం చ జ్ఞానం చ వర్ణం చైవ బలాబలమ్ |<br>సుఖం దుఃఖం స్వభావంచ లగ్నభావాన్నిరీక్షయేత్ ||",
        speakText,
        adviceText,
        `లగ్నం: ${signNameTe} (Ascendant)`,
        15 // Renumbered Page 15
    );
}

// --- PLANET PAGES 16-24 (Renumbered) ---
function createPage21() { return buildPlanetPage("Sun", 16); }
function createPage22() { return buildPlanetPage("Moon", 17); }
function createPage23() { return buildPlanetPage("Mars", 18); }
function createPage24() { return buildPlanetPage("Mercury", 19); }
function createPage25() { return buildPlanetPage("Jupiter", 20); }
function createPage26() { return buildPlanetPage("Venus", 21); }
function createPage27() { return buildPlanetPage("Saturn", 22); }
function createPage28() { return buildPlanetPage("Rahu", 23); }
function createPage29() { return buildPlanetPage("Ketu", 24); }

// --- PAGE 25: PRATYANTAR (Renumbered) ---
function createPage30() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p); // Add Header
    
    const today = new Date();
    const fiveYearsLater = new Date();
    fiveYearsLater.setFullYear(today.getFullYear() + 5);

    const dashas = calcVimshottari(); 
    let tableRows = "";

    dashas.forEach(md => {
        if(new Date(md.end) >= today) {
            let ads = getAntardashaDates(md.lord, md.start);
            ads.forEach(ad => {
                if(new Date(ad.end) >= today) {
                    let pds = getPratyantarDetails(md.lord, ad.lord, ad.start);
                    pds.forEach(d => {
                        if(d.end >= today && d.start <= fiveYearsLater) {
                            tableRows += `
                            <tr>
                                <td style="font-weight:bold; color:#333;">
                                    ${d.md} &raquo; ${d.ad} &raquo; <span style="color:#e65100;">${d.pd}</span>
                                </td>
                                <td>${d.startStr}</td>
                                <td>${d.endStr}</td>
                            </tr>`;
                        }
                    });
                }
            });
        }
    });

    p.innerHTML += `
        <div class="header"><h1>Pratyantar Dasha</h1></div>
        <div class="section-title">5-Year Detailed Forecast</div>
        <p style="font-size:11px; color:#666; text-align:center;">
            Detailed sub-sub periods from ${today.getFullYear()} to ${fiveYearsLater.getFullYear()}
        </p>

        <style>
            .pd-table { width: 100%; border-collapse: collapse; font-size: 11px; margin-top: 15px; }
            .pd-table th { background: #5c6bc0; color: white; padding: 8px; text-align: left; }
            .pd-table td { border-bottom: 1px solid #eee; padding: 6px; }
            .pd-table tr:nth-child(even) { background: #e8eaf6; }
        </style>

        <table class="pd-table">
            <thead>
                <tr>
                    <th>Dasha Hierarchy (MD-AD-PD)</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>
        <div class="footer-num">Page 25</div>`; // Renumbered
    return p;
}

// --- PAGES 26+: PREDICTIONS (Renumbered) ---
function createFuturePredictionPages(startPageNum) {
    const pages = [];
    const today = new Date();
    const fiveYearsLater = new Date();
    fiveYearsLater.setFullYear(today.getFullYear() + 5);

    const dashas = calcVimshottari();
    let pageCount = startPageNum;

    dashas.forEach(md => {
        if(new Date(md.end) < today) return; 

        let ads = getAntardashaDates(md.lord, md.start);
        ads.forEach(ad => {
            if(new Date(ad.end) < today) return;

            let pds = getPratyantarDetails(md.lord, ad.lord, ad.start);
            pds.forEach(pd => {
                if (pd.end >= today && pd.start <= fiveYearsLater) {
                    
                    const p = document.createElement('div');
                    p.className = 'page';
                    addBrandHeader(p); // Add Header
                    
                    const mdName = PLANET_TE[md.lord] || md.lord;
                    const adName = PLANET_TE[ad.lord] || ad.lord;
                    const pdName = PLANET_TE[pd.pd] || pd.pd;
                    
                    const pdData = PREDICTION_DB[pd.pd];
                    const themeColor = pdData.color;

                    p.innerHTML += `
                        <div class="header"><h1>ఫలితాలు & పరిహారాలు</h1></div>
                        
                        <div style="background:${themeColor}15; border-left: 6px solid ${themeColor}; padding:15px; margin-bottom:20px; border-radius:4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                            <div style="font-size:11px; text-transform:uppercase; color:#555; font-weight:bold; letter-spacing:1px;">కాల నిర్ణయం</div>
                            <div style="font-size:18px; font-weight:bold; color:#222; margin-top:5px;">
                                ${pd.startStr} <span style="font-size:14px; font-weight:normal; color:#666;">నుండి</span> ${pd.endStr}
                            </div>
                        </div>

                        <div class="dasha-flow">
                            <div class="df-box">
                                <div>మహాదశ</div>
                                <div class="df-planet">${mdName}</div>
                            </div>
                            <div class="df-arrow">➜</div>
                            <div class="df-box">
                                <div>అంతర్దశ</div>
                                <div class="df-planet">${adName}</div>
                            </div>
                            <div class="df-arrow">➜</div>
                            <div class="df-box df-active" style="border-color:${themeColor}; background:${themeColor}10;">
                                <div>ప్రత్యాంతర</div>
                                <div class="df-planet" style="color:${themeColor}; font-size:14px;">${pdName}</div>
                            </div>
                        </div>

                        <div class="section-title" style="color:${themeColor}; border-color:${themeColor};">జ్యోతిష్యుని విశ్లేషణ</div>

                        <div style="display:flex; gap:20px; margin-bottom:20px; align-items:flex-start;">
                            <div style="flex:0.8; text-align:center;">
                                <div style="background:#fafafa; border-radius:50%; width:70px; height:70px; display:flex; align-items:center; justify-content:center; font-size:35px; border:2px solid ${themeColor}; margin:0 auto;">
                                    ${pdData.icon}
                                </div>
                                <div style="font-size:10px; font-weight:bold; margin-top:5px; color:#555;">${pdName} ప్రభావం</div>
                            </div>
                            <div style="flex:3; font-size:12px; text-align:justify; line-height:1.8; color:#333;">
                                <p><strong>నమస్కారం!</strong> ప్రస్తుతం మీరు <b>${mdName}</b> మహాదశలో మరియు <b>${pdName}</b> ప్రత్యాంతర దశలో ఉన్నారు.</p>
                                <p>ఈ సమయంలో గ్రహ సంచారం బట్టి చూస్తే... ${pdData.event}</p>
                            </div>
                        </div>

                        <div class="pred-grid">
                            <div class="pred-item">
                                <div class="pi-head">💰 ఆర్థికం & వృత్తి</div>
                                <div class="pi-body">${pdData.career}</div>
                            </div>
                            <div class="pred-item">
                                <div class="pi-head">❤️ కుటుంబం & ఆరోగ్యం</div>
                                <div class="pi-body">${pdData.family}</div>
                            </div>
                        </div>

                        <div class="section-title" style="margin-top:25px; color:#d35400;">శాంతి పరిహారాలు</div>
                        <div style="background:#fff8e1; padding:15px; border-radius:8px; border:1px dashed #ffa726; display:flex; gap:15px; align-items:center;">
                            <div style="font-size:24px;">🕉️</div>
                            <div style="font-size:11px; line-height:1.6; color:#5d4037;">
                                <b>జ్యోతిష్య సలహా:</b><br>${pdData.remedy}
                            </div>
                        </div>

                        <div class="footer-num">పేజీ ${pageCount}</div>
                    `;
                    pages.push(p);
                    pageCount++;
                }
            });
        });
    });
    return pages;
}

/* -------------------------------------------------------------------------- */
/* 6. LOGIC & HELPERS (CRITICAL FOR CALCULATIONS)                             */
/* -------------------------------------------------------------------------- */

function calculatePlanets(dateStr, timeStr, lat, lng) {
    const dt = new Date(dateStr + 'T' + timeStr);
    const j2000 = new Date('2000-01-01T12:00:00Z');
    const dayDiff = (dt - j2000) / 86400000;
    ayanamsaVal = 23.85 + (0.01396 * (dayDiff / 365.25));

    const observer = new Astronomy.Observer(lat, lng, 0);
    const gmst = Astronomy.SiderealTime(dt); 
    const lmst = (gmst * 15 + lng) % 360;    
    const ramc = lmst * (Math.PI / 180);
    const eps = 23.4392911 * (Math.PI / 180); 
    const latRad = lat * (Math.PI / 180);    
    const top = Math.cos(ramc);
    const bottom = -Math.sin(ramc) * Math.cos(eps) - Math.tan(latRad) * Math.sin(eps);
    let ascRad = Math.atan2(top, bottom);
    let ascLonTropical = (ascRad * 180 / Math.PI + 360) % 360;
    let finalAsc = (ascLonTropical - ayanamsaVal + 360) % 360;

    globalPlanets = [{ name: "Ascendant", lon: finalAsc, speed: 0 }];
    
    [{ k: "Sun", b: Astronomy.Body.Sun }, { k: "Moon", b: Astronomy.Body.Moon }, { k: "Mars", b: Astronomy.Body.Mars }, 
     { k: "Mercury", b: Astronomy.Body.Mercury }, { k: "Jupiter", b: Astronomy.Body.Jupiter }, 
     { k: "Venus", b: Astronomy.Body.Venus }, { k: "Saturn", b: Astronomy.Body.Saturn }].forEach(p => {
        const eq = Astronomy.Equator(p.b, dt, observer, true, true);
        const ecl = Astronomy.Ecliptic(eq.vec);
        let speed = Astronomy.Ecliptic(Astronomy.Equator(p.b, new Date(dt.getTime() + 3600000), observer, true, true).vec).elon - ecl.elon;
        globalPlanets.push({ name: p.k, lon: (ecl.elon - ayanamsaVal + 360) % 360, speed: speed });
    });
    
    let nodeMean = (125.04452 - 1934.136261 * (dayDiff / 36525)) % 360;
    let rahuLon = (nodeMean - ayanamsaVal + 360) % 360;
    if (rahuLon < 0) rahuLon += 360;
    globalPlanets.push({ name: "Rahu", lon: rahuLon, speed: -0.05 });
    globalPlanets.push({ name: "Ketu", lon: (rahuLon + 180) % 360, speed: -0.05 });
}

function calculateVargaPositions(v) {
    return globalPlanets.map(p => {
        let lon = p.lon;
        let sign = Math.floor(lon / 30);
        let vSign = (v === 9) ? (Math.floor(lon / 3.333) % 12) + 1 : (sign + 1);
        if(v === 1) vSign = sign + 1;
        let pNameTe = PLANET_TE[p.name] ? PLANET_TE[p.name].substr(0, 2) : p.name.substr(0, 2);
        return { n: pNameTe, s: vSign };
    });
}

function renderChart(divId, planets) {
    const div = document.getElementById(divId); if (!div) return; div.innerHTML = '';
    const boxOrder = [{s:12}, {s:1}, {s:2}, {s:3}, {s:11}, {s:0}, {s:0}, {s:4}, {s:10}, {s:0}, {s:0}, {s:5}, {s:9}, {s:8}, {s:7}, {s:6}];
    boxOrder.forEach(b => {
        const cell = document.createElement('div'); cell.className = 'house';
        if (b.s !== 0) {
            cell.innerHTML = `<div class="sign-label">${SIGNS_TE[b.s]}</div>`;
            planets.forEach(pl => { if (pl.s === b.s) cell.innerHTML += `<div class="planet-text">${pl.n}</div>`; });
        } else { cell.style.background = "transparent"; cell.style.border = "none"; }
        div.appendChild(cell);
    });
}

/* --- GENERAL UTILS --- */
function getPlanet(name) { return globalPlanets.find(p => p.name === name) || { lon: 0 }; }
function getSign(lon) { return Math.floor(lon / 30) + 1; }
function formatDeg(lon) { return `${Math.floor(lon % 30)}° ${Math.round(((lon % 30) % 1) * 60)}'`; }
function formatFullDeg(lon) { let d=Math.floor(lon); let m=Math.floor((lon-d)*60); let s=Math.round(((lon-d)*60-m)*60); return `${d}:${m}:${s}`; }
function getNakshatra(lon) { 
    let idx = Math.floor(lon / 13.333333); 
    let charan = Math.floor((lon % 13.333333) / 3.333333) + 1; 
    let name = (typeof NAKSHATRAS_TE !== 'undefined') ? NAKSHATRAS_TE[idx] : "Unknown";
    return { name: name, lord: VIM_LORDS[idx % 9], charan: charan, id: idx }; 
}
function getPlanetLord(signIdx) { const lords = ["Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"]; return lords[(signIdx - 1) % 12] || ""; }
function formatDate(d) { return d.toISOString().split('T')[0]; }

/* --- DASHA CALCULATIONS --- */
function calcVimshottari() { 
    let moon = getPlanet("Moon").lon;
    let nak = getNakshatra(moon);
    let fraction = ((nak.id + 1) * 13.333333 - moon) / 13.333333;
    let startLordIdx = nak.id % 9;
    let balanceYears = VIM_YEARS[startLordIdx] * fraction;

    let d = []; 
    let listStart = new Date(birthDateObj);
    let firstEnd = new Date(birthDateObj);
    firstEnd.setDate(firstEnd.getDate() + Math.round(balanceYears * 365.2425));
    
    d.push({ lord: VIM_LORDS[startLordIdx], start: formatDate(listStart), end: formatDate(firstEnd) });
    
    let runningDate = firstEnd;
    for(let i=1; i<9; i++) {
        let idx = (startLordIdx + i) % 9;
        let years = VIM_YEARS[idx];
        let endDate = new Date(runningDate);
        endDate.setDate(endDate.getDate() + Math.round(years * 365.2425));
        d.push({ lord: VIM_LORDS[idx], start: formatDate(runningDate), end: formatDate(endDate) });
        runningDate = endDate;
    }
    return d;
}

function getAntardashaDates(mdLord, mdStartDateStr) {
    let mdIdx = VIM_LORDS.indexOf(mdLord);
    let mdYears = VIM_YEARS[mdIdx];
    let currentStart = new Date(mdStartDateStr);
    let adList = [];
    for(let i=0; i<9; i++) {
        let adIdx = (mdIdx + i) % 9;
        let adLord = VIM_LORDS[adIdx];
        let adYears = VIM_YEARS[adIdx];
        let fractionYears = (mdYears * adYears) / 120;
        let daysToAdd = fractionYears * 365.2425;
        let endDate = new Date(currentStart);
        endDate.setDate(endDate.getDate() + Math.round(daysToAdd));
        adList.push({ lord: adLord, date: formatDate(endDate), start: formatDate(currentStart), end: formatDate(endDate) });
        currentStart = endDate;
    }
    return adList;
}

function getCurrentDashaData() {
    let now = new Date();
    let dashas = calcVimshottari();
    let currentMD = dashas.find(d => new Date(d.start) <= now && new Date(d.end) >= now) || dashas[0];
    let adList = getAntardashaDates(currentMD.lord, currentMD.start);
    let currentAD = adList.find(ad => new Date(ad.start) <= now && new Date(ad.end) >= now) || adList[0];
    return { md: currentMD, ad: currentAD };
}

function getPratyantarDetails(mdLord, adLord, adStartStr) {
    let mdIdx = VIM_LORDS.indexOf(mdLord);
    let adIdx = VIM_LORDS.indexOf(adLord);
    let mdYears = VIM_YEARS[mdIdx];
    let adYears = VIM_YEARS[adIdx];
    
    let currentStart = new Date(adStartStr);
    let pdList = [];

    // Pratyantar starts with the Antardasha Lord
    for(let i=0; i<9; i++) {
        let pdIdx = (adIdx + i) % 9;
        let pdLord = VIM_LORDS[pdIdx];
        let pdYears = VIM_YEARS[pdIdx];
        
        // Formula: (MD * AD * PD) / 14400 = Duration in Years
        let fractionYears = (mdYears * adYears * pdYears) / 14400;
        let daysToAdd = fractionYears * 365.2425;
        
        let endDate = new Date(currentStart);
        endDate.setDate(endDate.getDate() + Math.round(daysToAdd));
        
        pdList.push({
            md: mdLord,
            ad: adLord,
            pd: pdLord,
            start: new Date(currentStart),
            end: new Date(endDate),
            startStr: currentStart.toISOString().split('T')[0],
            endStr: endDate.toISOString().split('T')[0]
        });
        currentStart = endDate;
    }
    return pdList;    
}

/* -------------------------------------------------------------------------- */
/* 7. DATA TABLES (FOR REPORTS & PREDICTIONS)                                 */
/* -------------------------------------------------------------------------- */

const SIGN_INFO = [
    null,
    { name: "మేషం", lord: "కుజుడు", sym: "పొట్టేలు", element: "అగ్ని", gem: "పగడం", day: "మంగళవారం" },
    { name: "వృషభం", lord: "శుక్రుడు", sym: "ఎద్దు", element: "భూమి", gem: "వజ్రం", day: "శుక్రవారం" },
    { name: "మిథునం", lord: "బుధుడు", sym: "మిధున", element: "వాయువు", gem: "పచ్చ", day: "బుధవారం" },
    { name: "కర్కాటకం", lord: "చంద్రుడు", sym: "ఎండ్రకాయ", element: "జల", gem: "ముత్యం", day: "సోమవారం" },
    { name: "సింహం", lord: "సూర్యుడు", sym: "సింహం", element: "అగ్ని", gem: "కెంపు", day: "ఆదివారం" },
    { name: "కన్య", lord: "బుధుడు", sym: "కన్య", element: "భూమి", gem: "పచ్చ", day: "బుధవారం" },
    { name: "తుల", lord: "శుక్రుడు", sym: "త్రాసు", element: "వాయువు", gem: "వజ్రం", day: "శుక్రవారం" },
    { name: "వృశ్చికం", lord: "కుజుడు", sym: "తేలు", element: "జల", gem: "పగడం", day: "మంగళవారం" },
    { name: "ధనుస్సు", lord: "గురువు", sym: "విలుకాడు", element: "అగ్ని", gem: "కనకపుష్యరాగం", day: "గురువారం" },
    { name: "మకరం", lord: "శని", sym: "మొసలి", element: "భూమి", gem: "నీలం", day: "శనివారం" },
    { name: "కుంభం", lord: "శని", sym: "కుండ", element: "వాయువు", gem: "నీలం", day: "శనివారం" },
    { name: "మీనం", lord: "గురువు", sym: "చేపలు", element: "జల", gem: "కనకపుష్యరాగం", day: "గురువారం" }
];

/* --- NEW ASTROLOGER-STYLE PLANETARY DATA (TELUGU) --- */
const PLANET_REPORT_DATA = {
    "Sun": {
        title: "సూర్య గ్రహ ప్రభావం (Sun Analysis)",
        nature: "ఆత్మకారకుడు & పితృకారకుడు (Soul & Father)",
        shloka: "జపాకుసుమ సంకాశం కాశ్యపేయం మహాద్యుతిమ్ |<br>తమోఽరిం సర్వపాపఘ్నం ప్రణతోఽస్మి దివాకరమ్ ||",
        speak: "జాతక చక్రంలో సూర్యుడు 'రాజు' వంటివాడు. మీ జాతకంలో రవి స్థితిని బట్టి చూస్తే, మీకు సహజంగానే నాయకత్వ లక్షణాలు మెండుగా ఉన్నాయి. మీరు ఎవరి కింద పని చేయడానికి ఇష్టపడరు; నలుగురిని నడిపించడమే మీకు తృప్తినిస్తుంది. మీలో ఆత్మవిశ్వాసం (Will Power) చాలా బలంగా ఉంది. అయితే, ఒక్కోసారి మీ మాటలో పట్టుదల ఎక్కువై అది ఇతరులకు అహంకారంగా కనిపించవచ్చు.",
        advice: "మీరు తండ్రి గారిని గౌరవించడం ద్వారా మరియు ప్రభుత్వ నియమాలను పాటించడం ద్వారా మీ జీవితంలో మరింత ఎత్తుకు ఎదుగుతారు. కోపాన్ని తగ్గించుకుంటే సమాజంలో మంచి పేరు వస్తుంది.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sun_symbol.svg/100px-Sun_symbol.svg.png"
    },
    "Moon": {
        title: "చంద్ర గ్రహ ప్రభావం (Moon Analysis)",
        nature: "మనోకారకుడు & మాతృకారకుడు (Mind & Mother)",
        shloka: "దధిశంఖ తుషారాభం క్షీరోదార్ణవ సంభవమ్ |<br>నమామి శశినం సోమం శంభోర్ముకుట భూషణమ్ ||",
        speak: "చంద్రుడు 'మనస్సు'కు అధిపతి. మీ జాతకంలో చంద్రుని ప్రభావం వల్ల మీరు చాలా సున్నితమైన మనసు కలవారు (Sensitive). ఇతరుల కష్టాలను చూసి మీరు త్వరగా చలించిపోతారు. మీ ఆలోచనలు సముద్రపు అలల వలె మారుతూ ఉంటాయి. మీకు ప్రయాణాలు చేయడం, కొత్త ప్రదేశాలు చూడటం అంటే ఇష్టం. తల్లి గారితో మీకు ప్రత్యేకమైన అనుబంధం ఉంటుంది.",
        advice: "మీరు చిన్న విషయాలకు ఆందోళన చెందడం (Overthinking) మానేయాలి. భావోద్వేగ నిర్ణయాలు కాకుండా, బుద్ధితో నిర్ణయాలు తీసుకోవడం అలవాటు చేసుకోండి.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Moon_Symbol.svg/100px-Moon_Symbol.svg.png"
    },
    "Mars": {
        title: "కుజ గ్రహ ప్రభావం (Mars Analysis)",
        nature: "భ్రాతృకారకుడు & శక్తి (Siblings & Energy)",
        shloka: "ధరణీ గర్భ సంభూతం విద్యుత్కాంతి సమప్రభమ్ |<br>కుమారం శక్తిహస్తం తం మంగళం ప్రణమామ్యహమ్ ||",
        speak: "కుజుడు 'సేనాధిపతి'. మీలో అలుపెరగని శక్తి (Energy) ఉంది. మీరు ఏదైనా పని మొదలుపెడితే, అది పూర్తయ్యే వరకు విశ్రమించరు. మీకు ధైర్యం ఎక్కువ, భయం తక్కువ. భూమి, ఆస్తి వ్యవహారాలు మీకు బాగా కలిసి వస్తాయి. అయితే, మీ కోపం ముక్కు మీద ఉంటుంది. తొందరపాటుతనం వల్ల కొన్ని మంచి అవకాశాలను కోల్పోయే ప్రమాదం ఉంది.",
        advice: "వాహనాలు నడిపేటప్పుడు జాగ్రత్త అవసరం. మీ శక్తిని నిర్మాణాత్మకమైన పనులకు (Constructive work) ఉపయోగిస్తే అద్భుతాలు సృష్టిస్తారు.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mars_symbol.svg/100px-Mars_symbol.svg.png"
    },
    "Mercury": {
        title: "బుధ గ్రహ ప్రభావం (Mercury Analysis)",
        nature: "విద్యాకారకుడు & వ్యాపారం (Intellect & Business)",
        shloka: "ప్రియంగు కలికాశ్యామం రూపేణా ప్రతిమం బుధమ్ |<br>సౌమ్యం సౌమ్యగుణోపేతం తం బుధం ప్రణమామ్యహమ్ ||",
        speak: "బుధుడు 'యువరాజు'. మీ జాతకంలో బుధ బలం వల్ల మీకు తెలివితేటలు, హాస్య చతురత (Humor) మరియు వ్యాపార దక్షత ఉన్నాయి. మీరు మాటలతో ఇతరులను ఇట్టే ఆకట్టుకుంటారు. గణితం, జ్యోతిష్యం, లేదా అకౌంట్స్ రంగంలో మీకు మంచి పట్టు ఉంటుంది. మీరు ఎప్పుడూ యవ్వనంగా, ఉల్లాసంగా కనిపించడానికి ఇష్టపడతారు.",
        advice: "ఒకేసారి అనేక పనుల మీద దృష్టి పెట్టడం వల్ల ఏదీ పూర్తి కాకపోవచ్చు. ఏకాగ్రత పెంచుకోండి. చర్మ సంరక్షణ పట్ల శ్రద్ధ వహించండి.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mercury_symbol.svg/100px-Mercury_symbol.svg.png"
    },
    "Jupiter": {
        title: "గురు గ్రహ ప్రభావం (Jupiter Analysis)",
        nature: "ధనకారకుడు & పుత్రకారకుడు (Wealth & Wisdom)",
        shloka: "దేవానాం చ ఋషీణాం చ గురుం కాంచన సన్నిభమ్ |<br>బుద్ధిభూతం త్రిలోకేశం తం నమామి బృహస్పతిమ్ ||",
        speak: "గురువు 'మంత్రి' మరియు సలహాదారు. మీ జాతకంలో గురువు అనుగ్రహం ఉండటం వల్ల మీకు సమాజంలో గౌరవ మర్యాదలు దక్కుతాయి. మీకు దైవ భక్తి, సాంప్రదాయాలంటే గౌరవం ఉంటుంది. కష్టకాలంలో కూడా మీకు ఏదో ఒక రూపంలో దైవిక సహాయం అందుతుంది. మీరు ఇతరులకు మంచి సలహాలు ఇవ్వగలరు. ధనానికి లోటు ఉండదు.",
        advice: "అతి మంచితనం పనికిరాదు. అందరినీ గుడ్డిగా నమ్మవద్దు. తీపి పదార్థాలు తగ్గించి, కాలేయ (Liver) ఆరోగ్యాన్ని కాపాడుకోండి.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jupiter_symbol.svg/100px-Jupiter_symbol.svg.png"
    },
    "Venus": {
        title: "శుక్ర గ్రహ ప్రభావం (Venus Analysis)",
        nature: "కళత్రకారకుడు & భోగాలు (Spouse & Luxury)",
        shloka: "హిమకుంద మృణాలాభం దైత్యానాం పరమం గురుమ్ |<br>సర్వశాస్త్ర ప్రవక్తారం భార్గవం ప్రణమామ్యహమ్ ||",
        speak: "శుక్రుడు 'భోగకారకుడు'. మీ జీవితంలో సౌకర్యాలకు, విలాసాలకు ప్రాముఖ్యత ఇస్తారు. మీరు అందంగా ఉండటమే కాకుండా, మీ చుట్టూ ఉన్న వాతావరణం కూడా అందంగా ఉండాలని కోరుకుంటారు. కళలు, సంగీతం, సినిమా లేదా ఫ్యాషన్ పట్ల మీకు ఆసక్తి ఉంటుంది. వివాహ జీవితం మరియు ప్రేమ వ్యవహారాలు మీ జీవితంలో కీలక పాత్ర పోషిస్తాయి.",
        advice: "విలాసాలకు హద్దులు దాటి ఖర్చు చేయవద్దు. వ్యతిరేక లింగం వారి పట్ల గౌరవంగా ఉండటం వల్ల మీ శుక్ర బలం పెరుగుతుంది.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Venus_symbol.svg/100px-Venus_symbol.svg.png"
    },
    "Saturn": {
        title: "శని గ్రహ ప్రభావం (Saturn Analysis)",
        nature: "ఆయుష్కారకుడు & కర్మ (Karma & Longevity)",
        shloka: "నీలాంజన సమాభాసం రవిపుత్రం యమాగ్రజమ్ |<br>ఛాయామార్తాండ సంభూతం తం నమామి శనైశ్చరమ్ ||",
        speak: "శని 'న్యాయమూర్తి'. మీ జీవితంలో ఏదీ సులభంగా రాదు, కానీ కష్టపడితే శాశ్వతంగా నిలిచిపోయే ఫలితాలు వస్తాయి. మీరు చాలా ఆచరణాత్మకంగా (Practical) ఆలోచిస్తారు. బద్ధకం మీ ప్రధాన శత్రువు. శని ప్రభావం వల్ల మీరు ఒంటరిగా ఉండటానికి లేదా లోతుగా ఆలోచించడానికి ఇష్టపడతారు. మీరు పేదవారికి, పనివారికి సహాయం చేయడం వల్ల జీవితంలో ఎదుగుతారు.",
        advice: "పనిని వాయిదా వేసే అలవాటును (Procrastination) వదిలేయండి. న్యాయబద్ధంగా ఉంటే శని మిమ్మల్ని ఉన్నత శిఖరాలకు చేరుస్తాడు.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Saturn_symbol.svg/100px-Saturn_symbol.svg.png"
    },
    "Rahu": {
        title: "రాహు గ్రహ ప్రభావం (Rahu Analysis)",
        nature: "మాయ & విదేశీ యానం (Illusion & Foreign)",
        shloka: "అర్ధకాయం మహావీర్యం చంద్రాదిత్య విమర్దనమ్ |<br>సింహికా గర్భ సంభూతం తం రాహుం ప్రణమామ్యహమ్ ||",
        speak: "రాహువు 'ఛాయా గ్రహం'. ఇది మీకు అంతులేని కోరికలను (Ambition) ఇస్తుంది. మీరు సాంప్రదాయ పద్ధతులకు భిన్నంగా ఆలోచిస్తారు. విదేశాలకు వెళ్లాలనే కోరిక లేదా టెక్నాలజీ రంగంలో రాణించాలనే తపన మీకు ఉంటుంది. ఒక్కోసారి మీ మనస్సులో లేనిపోని భయాలు లేదా భ్రమలు కలుగుతాయి. ఆకస్మిక లాభాలు లేదా నష్టాలు రాహువు లక్షణం.",
        advice: "అడ్డదారులు తొక్కి విజయం సాధించాలనుకోవద్దు; అది తాత్కాలికమే. దుర్గా దేవి ఆరాధన మీకు మేలు చేస్తుంది.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Rahu_symbol.svg/100px-Rahu_symbol.svg.png"
    },
    "Ketu": {
        title: "కేతు గ్రహ ప్రభావం (Ketu Analysis)",
        nature: "మోక్షకారకుడు & జ్ఞానం (Detachment & Wisdom)",
        shloka: "పలాశ పుష్ప సంకాశం తారకాగ్రహ మస్తకమ్ |<br>రౌద్రం రౌద్రాత్మకం ఘోరం తం కేతుం ప్రణమామ్యహమ్ ||",
        speak: "కేతువు 'జ్ఞానకారకుడు'. మీలో ఆధ్యాత్మిక చింతన ఎక్కువగా ఉంటుంది. కొన్నిసార్లు మీకు ఈ ప్రపంచం మీద, బంధాల మీద విరక్తి కలుగుతుంది. మీకు అంతర్దృష్టి (Intuition) చాలా బలంగా ఉంటుంది; జరగబోయేది ముందుగానే పసిగట్టగలరు. మీరు పరిశోధన, మంత్ర తంత్రాలు లేదా ఆధ్యాత్మిక రంగాల్లో రాణిస్తారు.",
        advice: "గతించిన విషయాల గురించి ఎక్కువగా ఆలోచించవద్దు. గణపతి ఆరాధన వల్ల మీ మనస్సులోని గందరగోళం తొలగిపోతుంది.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ketu_symbol.svg/100px-Ketu_symbol.svg.png"
    },

    "Ascendant": {
        title: "లగ్న విశ్లేషణ",
        nature: "లగ్నం (Self)",
        shloka: "",
        speak: "",
        advice: "",
        img: ""
    }
};

/* --- PREDICTION DATABASE --- */
const PREDICTION_DB = {
    "Sun": {
        theme: "ఆత్మవిశ్వాసం & అధికారం",
        event: "సూర్యుడు అంటే రాజు. ఈ సమయంలో మీలో ఆత్మవిశ్వాసం అమాంతం పెరుగుతుంది. నలుగురిలో మీకు గుర్తింపు లభించే సమయం ఇది. ప్రభుత్వ పనులకు లేదా అధికారులను కలవడానికి ఇది చాలా అనువైన కాలం. అయితే, మీ మాటలో కాస్త అహంకారం తొంగిచూసే ప్రమాదం ఉంది, జాగ్రత్త.",
        career: "ఉద్యోగంలో ప్రమోషన్ లేదా కొత్త బాధ్యతలు స్వీకరించే అవకాశం ఉంది. మీ నాయకత్వ లక్షణాలకు ఇది పరీక్షా సమయం. మీరు చెప్పిన మాటకు విలువ పెరుగుతుంది.",
        family: "తండ్రి గారి ఆరోగ్యం పట్ల శ్రద్ధ వహించండి. శరీరంలో వేడి (Heat) పెరిగే అవకాశం ఉంది, కాబట్టి కళ్ళ మంటలు లేదా తలనొప్పి రావచ్చు. నీరు ఎక్కువగా తాగండి.",
        remedy: "ప్రతి రోజూ ఉదయం సూర్య నమస్కారం చేయండి. 'ఆదిత్య హృదయం' వినడం వల్ల మీ ఆటంకాలు తొలగిపోతాయి. పేదలకు గోధుమలు దానం చేయండి.",
        icon: "👑",
        color: "#ff9800"
    },
    "Moon": {
        theme: "మానసిక స్థితి & ప్రయాణాలు",
        event: "చంద్రుడు మనస్సును పాలిస్తాడు. ఈ సమయంలో మీ మనస్సు ఒక చోట నిలకడగా ఉండదు. చిన్న విషయానికి కూడా ఎక్కువగా ఆలోచించే అవకాశం ఉంది. మీకు ప్రయాణాలు చేసే యోగం కనిపిస్తోంది. సృజనాత్మక రంగంలో ఉన్నవారికి ఇది అద్భుతమైన సమయం.",
        career: "వృత్తిలో మార్పులు కోరుకుంటారు. పని ఒత్తిడి వల్ల మానసిక అలసట కలగవచ్చు. మీ సహోద్యోగులతో భావోద్వేగాలకు లోనుకాకుండా పని మీద దృష్టి పెట్టండి.",
        family: "తల్లి గారి ఆరోగ్యం గురించి జాగ్రత్త వహించండి. జలుబు, దగ్గు లేదా నీటి సంబంధిత ఇబ్బందులు రావచ్చు. రాత్రి వేళల్లో ఒంటరిగా ప్రయాణించవద్దు.",
        remedy: "సోమవారం నాడు శివాలయంలో పాలు సమర్పించండి. వెండి గ్లాసులో నీరు త్రాగడం వల్ల మనస్సు ప్రశాంతంగా ఉంటుంది.",
        icon: "🌙",
        color: "#2196f3"
    },
    "Mars": {
        theme: "శక్తి & ధైర్యం",
        event: "కుజుడు మీకు అపారమైన శక్తిని ఇస్తాడు. మీరు ఏ పనినైనా ధైర్యంగా మొదలుపెడతారు. కానీ, మీ కోపాన్ని అదుపులో ఉంచుకోవాలి. తొందరపాటు నిర్ణయాలు తీసుకుంటే అది గొడవలకు దారితీయవచ్చు. భూమి లేదా ఆస్తి కొనుగోలు ప్రయత్నాలు ఫలిస్తాయి.",
        career: "సాంకేతిక, రియల్ ఎస్టేట్ లేదా పోలీస్ రంగంలో ఉన్నవారికి ఇది రాజయోగం. మీ శత్రువులపై మీరు విజయం సాధిస్తారు. పోటీ పరీక్షలకు ఇది మంచి సమయం.",
        family: "సోదరులతో చిన్నపాటి గొడవలు రావచ్చు. రక్తపోటు (BP) లేదా చిన్నపాటి గాయాలు అయ్యే సూచనలు ఉన్నాయి. వాహనం నడిపేటప్పుడు జాగ్రత్త.",
        remedy: "మంగళవారం నాడు సుబ్రమణ్య స్వామిని లేదా హనుమంతుడిని పూజించండి. ఎర్రటి కందిపప్పును దానం చేయండి.",
        icon: "⚔️",
        color: "#d32f2f"
    },
    "Mercury": {
        theme: "తెలివితేటలు & వ్యాపారం",
        event: "ఇది మీ బుద్ధి బలాన్ని చూపించాల్సిన సమయం. మీరు తీసుకునే నిర్ణయాలు చాలా తెలివిగా ఉంటాయి. విద్యార్థులకు మరియు వ్యాపారస్తులకు ఇది చాలా అనుకూలమైన కాలం. కొత్త విషయాలు నేర్చుకోవాలనే ఆసక్తి పెరుగుతుంది.",
        career: "మీ కమ్యూనికేషన్ స్కిల్స్ అద్భుతంగా ఉంటాయి. వ్యాపార ఒప్పందాలు (Deals) కుదుర్చుకోవడానికి ఇది సరైన సమయం. అకౌంట్స్ మరియు మీడియా రంగం వారికి లాభాలు ఉంటాయి.",
        family: "బంధువుల రాక వల్ల ఇంట్లో సందడి నెలకొంటుంది. చర్మ సంబంధిత అలర్జీలు రావచ్చు. నాడీ వ్యవస్థ బలహీనపడకుండా చూసుకోండి.",
        remedy: "బుధవారం నాడు ఆవులకు పచ్చ గడ్డి లేదా పాలకూర తినిపించండి. విష్ణు సహస్రనామం పఠించండి.",
        icon: "📚",
        color: "#388e3c"
    },
    "Jupiter": {
        theme: "జ్ఞానం & సంపద",
        event: "గురువు అనుగ్రహం వల్ల మీ జీవితంలోకి ఒక మంచి మార్పు రాబోతోంది. పెద్దల ఆశీస్సులు మీకు లభిస్తాయి. దైవ చింతన పెరుగుతుంది. గతంలో ఆగిపోయిన పనులు ఇప్పుడు పూర్తవుతాయి. ఇది చాలా శుభప్రదమైన సమయం.",
        career: "ఉద్యోగంలో ప్రమోషన్ లేదా జీతం పెరిగే అవకాశం ఉంది. ఉపాధ్యాయులు, న్యాయవాదులు మరియు సలహాదారులకు ఇది బంగారు కాలం. ధన లాభం కనిపిస్తోంది.",
        family: "సంతానం లేని వారికి శుభవార్త వినే అవకాశం ఉంది. తీపి పదార్థాలు ఎక్కువగా తినడం తగ్గించండి, బరువు పెరిగే అవకాశం ఉంది.",
        remedy: "గురువారం నాడు సాయిబాబా లేదా దత్తాత్రేయ స్వామిని దర్శించుకోండి. నుదిటిపై కుంకుమ పువ్వు (Saffron) తిలకం ధరించండి.",
        icon: "✨",
        color: "#fbc02d"
    },
    "Venus": {
        theme: "విలాసం & ఆనందం",
        event: "శుక్రుడు మీకు భోగభాగ్యాలను ఇస్తాడు. మీరు కొత్త బట్టలు, ఆభరణాలు లేదా వాహనం కొనుగోలు చేసే ఆలోచనలో ఉంటారు. మీ ముఖంలో కళ (Tejas) పెరుగుతుంది. వ్యతిరేక లింగం వారి నుండి సహకారం లభిస్తుంది.",
        career: "కళలు, సినిమా, ఫ్యాషన్ మరియు డిజైనింగ్ రంగంలో ఉన్నవారికి అద్భుతంగా ఉంటుంది. ఆఫీసులో వాతావరణం చాలా ఉల్లాసంగా ఉంటుంది.",
        family: "భార్యాభర్తల మధ్య అన్యోన్యం పెరుగుతుంది. పెళ్లి కాని వారికి వివాహ సంబంధాలు కుదురుతాయి. షుగర్ (Diabetes) ఉన్నవారు జాగ్రత్తగా ఉండాలి.",
        remedy: "శుక్రవారం నాడు లక్ష్మీ దేవికి పూజ చేయండి. పేద సుమంగళి స్త్రీలకు పసుపు, కుంకుమ ఇవ్వండి.",
        icon: "💎",
        color: "#c2185b"
    },
    "Saturn": {
        theme: "కర్మ & కఠిన శ్రమ",
        event: "శని దేవుడు మీకు ఓపికను నేర్పిస్తాడు. ఏ పని కూడా సులభంగా అవ్వదు, కఠిన శ్రమ తర్వాతే ఫలితం దక్కుతుంది. ఇది సోమరితనానికి సమయం కాదు. మీరు ఎంత కష్టపడితే అంత గొప్ప ఫలితం ఉంటుంది.",
        career: "పని భారం పెరుగుతుంది. అధికారుల నుండి ఒత్తిడి ఉండవచ్చు. కానీ భయపడవద్దు, ఇది మీ భవిష్యత్తుకు పునాది. చట్ట వ్యతిరేక పనులకు దూరంగా ఉండండి.",
        family: "కాళ్ళ నొప్పులు లేదా కీళ్ళ వాతం ఇబ్బంది పెట్టవచ్చు. పాత స్నేహితులు దూరమయ్యే అవకాశం ఉంది. వృద్ధులకు సేవ చేయండి.",
        remedy: "శనివారం నాడు రావి చెట్టు కింద నువ్వుల నూనెతో దీపం వెలిగించండి. వికలాంగులకు లేదా పనివారికి సహాయం చేయండి.",
        icon: "⚖️",
        color: "#455a64"
    },
    "Rahu": {
        theme: "భ్రమ & ఆకస్మిక మార్పులు",
        event: "రాహువు అంటేనే మాయ. ఈ సమయంలో మీకు లేనిది ఉన్నట్టు, ఉన్నది లేనట్టు అనిపిస్తుంది. ఆకస్మిక ప్రయాణాలు లేదా ఊహించని ఖర్చులు రావచ్చు. కొత్త వ్యక్తులను గుడ్డిగా నమ్మవద్దు. విదేశీ ప్రయత్నాలు చేసేవారికి ఇది మంచి సమయం.",
        career: "రాజకీయాల్లో లేదా టెక్నాలజీ రంగంలో ఉన్నవారికి ఆకస్మిక పదవులు రావచ్చు. కానీ కుట్రలు చేసే వారు మీ చుట్టూ ఉంటారు, జాగ్రత్త.",
        family: "నిద్రలేమి లేదా తెలియని భయం (Anxiety) మిమ్మల్ని వేధించవచ్చు. ఆహార విషయంలో జాగ్రత్త, గ్యాస్ట్రిక్ సమస్యలు రావచ్చు.",
        remedy: "దుర్గా దేవిని పూజించండి. పక్షులకు లేదా వీధి కుక్కలకు ఆహారం వేయండి. 'ఓం దుం దుర్గాయై నమః' అని జపించండి.",
        icon: "🌪️",
        color: "#5d4037"
    },
    "Ketu": {
        theme: "వైరాగ్యం & ఆధ్యాత్మికత",
        event: "కేతువు మీకు ప్రాపంచిక విషయాలపై ఆసక్తిని తగ్గిస్తాడు. ఒంటరిగా గడపాలనిపిస్తుంది. మీకు అంతర్దృష్టి (Intuition) బాగా పనిచేస్తుంది. ఇది దైవ కార్యాలకు, యోగా మరియు ధ్యానానికి చాలా మంచి సమయం.",
        career: "ఉద్యోగం మానేయాలనే ఆలోచన రావచ్చు. మీ పనిని ఎవరూ గుర్తించడం లేదని బాధపడకండి. రీసెర్చ్ చేసేవారికి ఇది మంచి కాలం.",
        family: "శరీరంలో అలసట, నొప్పులు లేదా చర్మ సమస్యలు రావచ్చు. ఎవరితోనూ అనవసర వాదనలు పెట్టుకోవద్దు.",
        remedy: "గణపతిని పూజించండి. ఆశ్రమాలు లేదా దేవాలయాలకు విరాళం ఇవ్వండి. కుక్కలకు ఆహారం పెట్టడం మంచిది.",
        icon: "🚩",
        color: "#616161"
    }
};
// --- PAGE 14: 5 YEAR CHART (Renumbered) ---
function createPage19() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    
    const today = new Date();
    const future = new Date();
    future.setFullYear(today.getFullYear() + 5);
    
    const dashas = calcVimshottari();
    let flatList = [];
    dashas.forEach(md => {
        let ads = getAntardashaDates(md.lord, md.start);
        ads.forEach(ad => {
            flatList.push({
                md: PLANET_TE[md.lord] || md.lord,
                ad: PLANET_TE[ad.lord] || ad.lord,
                start: new Date(ad.start),
                end: new Date(ad.end),
                startStr: ad.start,
                endStr: ad.end
            });
        });
    });
    
    const viewList = flatList.filter(d => d.end >= today && d.start <= future);

    const rows = viewList.map(d => `
        <tr>
            <td>${d.md} - ${d.ad}</td>
            <td>${d.startStr}</td>
            <td>${d.endStr}</td>
            <td>${d.md === d.ad ? 'ప్రధాన మార్పు (Major Shift)' : 'అంతర్దశ (Sub Period)'}</td>
        </tr>
    `).join('');

    p.innerHTML += `
        <div class="header"><h1>5 సంవత్సరాల వ్యక్తిగత చార్ట్</h1></div>
        <div class="section-title">రాబోయే దశలు (${today.getFullYear()} - ${future.getFullYear()})</div>
        <p style="font-size:11px; text-align:center;">రాబోయే 5 సంవత్సరాల ప్రధాన గ్రహ ప్రభావాలను ఈ చార్ట్ సూచిస్తుంది.</p>
        
        <table class="year-chart-table">
            <thead>
                <tr>
                    <th>దశ (MD-AD)</th>
                    <th>ప్రారంభ తేదీ</th>
                    <th>ముగింపు తేదీ</th>
                    <th>దశ రకం</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
        <div class="footer-num">పేజీ 14</div>`;
    return p;
}

/* --- HELPER: REPORT PAGE GENERATOR --- */
function createReportPage(title, imgUrl, infoTableHtml, shloka, speakText, adviceText, natureText, pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    
    const cardStyle = `background: #fff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #eee; overflow: hidden; margin-bottom: 20px;`;
    const headerStyle = `background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); padding: 15px; border-bottom: 1px solid #ffcc80; display:flex; align-items:center; gap:15px;`;
    
    p.innerHTML += `
        <div class="header"><h1>${title}</h1></div>
        <div style="${cardStyle}">
            <div style="${headerStyle}">
                <img src="${imgUrl}" style="width:60px; height:60px;">
                <div>
                    <div style="font-size:18px; font-weight:bold; color:#d35400;">${natureText}</div>
                    <div style="font-size:12px; color:#666;">సంస్కృత శ్లోకం & గ్రహ స్థితి</div>
                </div>
            </div>
            <div style="padding:15px;">
                <div class="sanskrit-shloka" style="margin:0 0 15px 0; background:none; border:none; padding:0; text-align:center; color:#5d4037; font-weight:bold;">${shloka}</div>
                <table class="report-table" style="margin-bottom:0;">${infoTableHtml}</table>
            </div>
        </div>
        <div class="section-title" style="color:#2e7d32; border-color:#2e7d32;">జ్యోతిష్యుని విశ్లేషణ</div>
        <div style="display:flex; gap:15px; margin-bottom:20px;">
            <div style="flex:1;">
                 <div style="background:#f1f8e9; padding:15px; border-radius:8px; border-left:5px solid #43a047; font-size:12px; line-height:1.8; text-align:justify; color:#333;">
                    <span style="font-size:30px; float:left; margin-right:10px; line-height:30px; color:#43a047;">❝</span>${speakText}<span style="font-size:30px; float:right; margin-left:10px; line-height:0; color:#43a047; margin-top:10px;">❞</span>
                 </div>
            </div>
        </div>
        <div class="section-title" style="color:#d32f2f; border-color:#d32f2f;">సూచనలు & జాగ్రత్తలు</div>
        <div style="background:#ffebee; padding:15px; border-radius:8px; border:1px dashed #ef5350; display:flex; gap:15px; align-items:center;">
            <div style="font-size:24px;">💡</div>
            <div style="font-size:12px; line-height:1.6; color:#b71c1c; font-weight:500;">${adviceText}</div>
        </div>
        <div class="footer-num">పేజీ ${pageNum}</div>`;
    return p;
}

function buildPlanetPage(planetName, pageNum) {
    const data = PLANET_REPORT_DATA[planetName];
    const planetInfo = getPlanet(planetName);
    const signIdx = Math.floor(planetInfo.lon / 30) + 1;
    const signName = SIGNS_TE[signIdx]; 
    const tableHtml = `<tr><td><b>ఉన్న రాశి</b></td><td><b>${signName}</b></td></tr><tr><td><b>నక్షత్రం</b></td><td>${getNakshatra(planetInfo.lon).name}</td></tr><tr><td><b>స్థితి</b></td><td>${planetInfo.speed < 0 ? "<span style='color:red'>వక్రీ (Retrograde)</span>" : "మార్గ (Direct)"}</td></tr><tr><td><b>డిగ్రీ</b></td><td>${formatDeg(planetInfo.lon)}</td></tr>`;
    const personalizedSpeak = `మీ జాతకంలో ${PLANET_TE[planetName]} <b>${signName}</b> రాశిలో ఉన్నారు. ${data.speak}`;
    return createReportPage(data.title, data.img, tableHtml, data.shloka, personalizedSpeak, data.advice, data.nature, pageNum);
}

// --- PAGE 15: ASCENDANT ---
function createPage20() {
    const ascLon = getPlanet("Ascendant").lon;
    const signIdx = Math.floor(ascLon / 30) + 1;
    const signInfo = SIGN_INFO[signIdx];
    const signNameTe = SIGNS_TE[signIdx];
    const rawLord = signInfo.lord;
    const lordName = PLANET_TE[rawLord] ? PLANET_TE[rawLord] : rawLord;
    const tableHtml = `<tr><td><b>అధిపతి</b></td><td>${lordName}</td></tr><tr><td><b>తత్వం</b></td><td>${signInfo.element}</td></tr><tr><td><b>అదృష్ట రత్నం</b></td><td>${signInfo.gem}</td></tr><tr><td><b>చిహ్నం</b></td><td>${signInfo.sym}</td></tr>`;
    const speakText = `నమస్కారం! మీరు <b>${signNameTe}</b> లగ్నంలో జన్మించారు. లగ్నం అంటే కేవలం రాశి మాత్రమే కాదు, అది మీ 'వ్యక్తిత్వం' మరియు 'ఆరోగ్యానికి' అద్దం పడుతుంది. ${signNameTe} రాశికి అధిపతి <b>${lordName}</b>. దీని ప్రభావం వల్ల మీరు స్వతహాగా ధైర్యవంతులు మరియు పట్టుదల గలవారు.`;
    const adviceText = `మీ లగ్నాధిపతి <b>${lordName}</b> కాబట్టి, ఆ గ్రహానికి సంబంధించిన వారాన్ని (ఉదాహరణకు ${signInfo.day}) మీరు ఏదైనా కొత్త పని మొదలుపెట్టడానికి ఎంచుకోవడం మంచిది.`;
    return createReportPage("లగ్న విశ్లేషణ (Ascendant Report)", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Classic_1635_Schiller_constellation_Capricornus.png/250px-Classic_1635_Schiller_constellation_Capricornus.png", tableHtml, "దేహం రూపం చ జ్ఞానం చ వర్ణం చైవ బలాబలమ్ |<br>సుఖం దుఃఖం స్వభావంచ లగ్నభావాన్నిరీక్షయేత్ ||", speakText, adviceText, `లగ్నం: ${signNameTe}`, 15);
}

// --- PLANET PAGES 16-24 ---
function createPage21() { return buildPlanetPage("Sun", 16); }
function createPage22() { return buildPlanetPage("Moon", 17); }
function createPage23() { return buildPlanetPage("Mars", 18); }
function createPage24() { return buildPlanetPage("Mercury", 19); }
function createPage25() { return buildPlanetPage("Jupiter", 20); }
function createPage26() { return buildPlanetPage("Venus", 21); }
function createPage27() { return buildPlanetPage("Saturn", 22); }
function createPage28() { return buildPlanetPage("Rahu", 23); }
function createPage29() { return buildPlanetPage("Ketu", 24); }

// --- PAGE 25: PRATYANTAR ---
function createPage30() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const today = new Date();
    const fiveYearsLater = new Date();
    fiveYearsLater.setFullYear(today.getFullYear() + 5);
    const dashas = calcVimshottari(); 
    let tableRows = "";
    dashas.forEach(md => {
        if(new Date(md.end) >= today) {
            let ads = getAntardashaDates(md.lord, md.start);
            ads.forEach(ad => {
                if(new Date(ad.end) >= today) {
                    let pds = getPratyantarDetails(md.lord, ad.lord, ad.start);
                    pds.forEach(d => {
                        if(d.end >= today && d.start <= fiveYearsLater) {
                            tableRows += `<tr><td style="font-weight:bold; color:#333;">${d.md} &raquo; ${d.ad} &raquo; <span style="color:#e65100;">${d.pd}</span></td><td>${d.startStr}</td><td>${d.endStr}</td></tr>`;
                        }
                    });
                }
            });
        }
    });
    p.innerHTML += `<div class="header"><h1>Pratyantar Dasha</h1></div><div class="section-title">5-Year Detailed Forecast</div><table class="pd-table"><thead><tr><th>Dasha Hierarchy (MD-AD-PD)</th><th>Start Date</th><th>End Date</th></tr></thead><tbody>${tableRows}</tbody></table><div class="footer-num">Page 25</div>`;
    return p;
}

// --- PAGES 26+: PREDICTIONS ---
function createFuturePredictionPages(startPageNum) {
    const pages = [];
    const today = new Date();
    const fiveYearsLater = new Date();
    fiveYearsLater.setFullYear(today.getFullYear() + 5);
    const dashas = calcVimshottari();
    let pageCount = startPageNum;
    dashas.forEach(md => {
        if(new Date(md.end) < today) return; 
        let ads = getAntardashaDates(md.lord, md.start);
        ads.forEach(ad => {
            if(new Date(ad.end) < today) return;
            let pds = getPratyantarDetails(md.lord, ad.lord, ad.start);
            pds.forEach(pd => {
                if (pd.end >= today && pd.start <= fiveYearsLater) {
                    const p = document.createElement('div');
                    p.className = 'page';
                    addBrandHeader(p);
                    const mdName = PLANET_TE[md.lord] || md.lord;
                    const adName = PLANET_TE[ad.lord] || ad.lord;
                    const pdName = PLANET_TE[pd.pd] || pd.pd;
                    const pdData = PREDICTION_DB[pd.pd];
                    const themeColor = pdData.color;
                    p.innerHTML += `<div class="header"><h1>ఫలితాలు & పరిహారాలు</h1></div><div style="background:${themeColor}15; border-left: 6px solid ${themeColor}; padding:15px; margin-bottom:20px; border-radius:4px;"><div style="font-size:11px; text-transform:uppercase; color:#555; font-weight:bold; letter-spacing:1px;">కాల నిర్ణయం</div><div style="font-size:18px; font-weight:bold; color:#222; margin-top:5px;">${pd.startStr} <span style="font-size:14px; font-weight:normal; color:#666;">నుండి</span> ${pd.endStr}</div></div><div class="dasha-flow"><div class="df-box"><div>మహాదశ</div><div class="df-planet">${mdName}</div></div><div class="df-arrow">➜</div><div class="df-box"><div>అంతర్దశ</div><div class="df-planet">${adName}</div></div><div class="df-arrow">➜</div><div class="df-box df-active" style="border-color:${themeColor}; background:${themeColor}10;"><div>ప్రత్యాంతర</div><div class="df-planet" style="color:${themeColor}; font-size:14px;">${pdName}</div></div></div><div class="section-title" style="color:${themeColor}; border-color:${themeColor};">జ్యోతిష్యుని విశ్లేషణ</div><div style="display:flex; gap:20px; margin-bottom:20px; align-items:flex-start;"><div style="flex:0.8; text-align:center;"><div style="background:#fafafa; border-radius:50%; width:70px; height:70px; display:flex; align-items:center; justify-content:center; font-size:35px; border:2px solid ${themeColor}; margin:0 auto;">${pdData.icon}</div><div style="font-size:10px; font-weight:bold; margin-top:5px; color:#555;">${pdName} ప్రభావం</div></div><div style="flex:3; font-size:12px; text-align:justify; line-height:1.8; color:#333;"><p><strong>నమస్కారం!</strong> ప్రస్తుతం మీరు <b>${mdName}</b> మహాదశలో మరియు <b>${pdName}</b> ప్రత్యాంతర దశలో ఉన్నారు.</p><p>ఈ సమయంలో గ్రహ సంచారం బట్టి చూస్తే... ${pdData.event}</p></div></div><div class="pred-grid"><div class="pred-item"><div class="pi-head">💰 ఆర్థికం & వృత్తి</div><div class="pi-body">${pdData.career}</div></div><div class="pred-item"><div class="pi-head">❤️ కుటుంబం & ఆరోగ్యం</div><div class="pi-body">${pdData.family}</div></div></div><div class="section-title" style="margin-top:25px; color:#d35400;">శాంతి పరిహారాలు</div><div style="background:#fff8e1; padding:15px; border-radius:8px; border:1px dashed #ffa726; display:flex; gap:15px; align-items:center;"><div style="font-size:24px;">🕉️</div><div style="font-size:11px; line-height:1.6; color:#5d4037;"><b>జ్యోతిష్య సలహా:</b><br>${pdData.remedy}</div></div><div class="footer-num">పేజీ ${pageCount}</div>`;
                    pages.push(p);
                    pageCount++;
                }
            });
        });
    });
    return pages;
}

/* ========================================================================== */
/* LOGIC HELPERS & DATABASES (CRITICAL - DO NOT REMOVE)                       */
/* ========================================================================== */

// --- DOSHA CHECKS ---
function checkKalsarpa() {
    let rahu = getPlanet("Rahu").lon;
    let otherPlanets = globalPlanets.filter(p => !["Rahu", "Ketu", "Ascendant"].includes(p.name));
    let leftSide = true; let rightSide = true;
    otherPlanets.forEach(p => { let dist = (p.lon - rahu + 360) % 360; if (dist > 180) leftSide = false; if (dist < 180) rightSide = false; });
    let present = leftSide || rightSide;
    let asc = getPlanet("Ascendant").lon;
    let rahuHouse = Math.floor(((rahu - asc + 360) % 360) / 30) + 1;
    const names = ["Anant", "Kulik", "Vasuki", "Shankhpal", "Padma", "Mahapadma", "Takshak", "Karkotak", "Shankhchood", "Ghatak", "Vishdhar", "Sheshnaag"];
    return { present: present, name: present ? names[rahuHouse - 1] : "None", direction: leftSide ? "Descending" : "Ascending", typeId: rahuHouse };
}

function checkManglik() {
    let asc = getPlanet("Ascendant").lon;
    const malefics = ["Mars", "Sun", "Saturn", "Rahu", "Ketu"];
    const housesToCheck = [1, 2, 4, 7, 8, 12];
    let reasonsHouse = []; let reasonsAspect = []; let score = 0;
    malefics.forEach(pName => {
        let pLon = getPlanet(pName).lon;
        let hAsc = Math.floor(((pLon - asc + 360) % 360) / 30) + 1;
        if (housesToCheck.includes(hAsc)) { reasonsHouse.push(`Planet ${pName} is in House ${hAsc}`); if (pName === "Mars") score += 20; else score += 5; }
        let dist = (pLon - asc + 360) % 360;
        let housePos = Math.floor(dist/30) + 1;
        if(housePos === 1) reasonsAspect.push(`${pName} in 1st aspects 7th House`);
        if(pName === "Mars" && (housePos === 12 || housePos === 4)) reasonsAspect.push(`Mars in ${housePos} aspects 7th House`);
    });
    return { percent: Math.min(score, 100), isManglik: score > 15, reasonsHouse: reasonsHouse, reasonsAspect: reasonsAspect };
}

// --- SADE SATI ---
function getSadeSatiStatus() {
    const now = new Date();
    let currentSaturnSign = 11; // Aquarius (approx)
    if (now.getFullYear() >= 2025 && now.getMonth() > 2) currentSaturnSign = 12; // Pisces
    const moon = getPlanet("Moon").lon;
    const moonSign = Math.floor(moon / 30) + 1;
    let diff = (currentSaturnSign - moonSign + 12) % 12;
    let isSadeSati = (diff === 0 || diff === 1 || diff === 11);
    return { present: isSadeSati, moonSign: SIGNS_TE[moonSign], saturnSign: SIGNS_TE[currentSaturnSign], statusText: isSadeSati ? "Sade Sati is Present" : "No Sade Sati", desc: isSadeSati ? "You are currently undergoing Sade Sati." : "Currently you are free from Sade Sati." };
}

function getSadeSatiTimeline() {
    const moon = getPlanet("Moon").lon;
    const moonSignIdx = Math.floor(moon / 30) + 1;
    const birthYear = birthDateObj.getFullYear();
    const rows = [];
    let startY = birthYear + 5; 
    const phases = [{ type: "RISING", sum: "Rise Phase" }, { type: "PEAK", sum: "Peak Phase" }, { type: "SETTING", sum: "Setting Phase" }];
    for(let cycle=0; cycle<3; cycle++) {
        let currentY = startY + (cycle * 29);
        phases.forEach(p => {
            let satSignIdx = (moonSignIdx + (p.type==="RISING"?-1:(p.type==="PEAK"?0:1)) - 1 + 12)%12 + 1;
            rows.push({ moonSign: SIGNS_TE[moonSignIdx], satSign: SIGNS_TE[satSignIdx], isRetro: Math.random() > 0.8 ? "true" : "false", phase: p.type, date: "01-01-" + Math.floor(currentY), summary: p.sum });
            currentY += 2.5;
        });
    }
    return rows;
}

// --- CALCULATIONS ---
function calculatePlanets(dateStr, timeStr, lat, lng) {
    const dt = new Date(dateStr + 'T' + timeStr);
    const j2000 = new Date('2000-01-01T12:00:00Z');
    const dayDiff = (dt - j2000) / 86400000;
    ayanamsaVal = 23.85 + (0.01396 * (dayDiff / 365.25));
    const observer = new Astronomy.Observer(lat, lng, 0);
    const gmst = Astronomy.SiderealTime(dt); 
    const lmst = (gmst * 15 + lng) % 360;    
    const ramc = lmst * (Math.PI / 180);
    const eps = 23.4392911 * (Math.PI / 180); 
    const latRad = lat * (Math.PI / 180);    
    const top = Math.cos(ramc);
    const bottom = -Math.sin(ramc) * Math.cos(eps) - Math.tan(latRad) * Math.sin(eps);
    let ascRad = Math.atan2(top, bottom);
    let ascLonTropical = (ascRad * 180 / Math.PI + 360) % 360;
    let finalAsc = (ascLonTropical - ayanamsaVal + 360) % 360;
    globalPlanets = [{ name: "Ascendant", lon: finalAsc, speed: 0 }];
    [{ k: "Sun", b: Astronomy.Body.Sun }, { k: "Moon", b: Astronomy.Body.Moon }, { k: "Mars", b: Astronomy.Body.Mars }, { k: "Mercury", b: Astronomy.Body.Mercury }, { k: "Jupiter", b: Astronomy.Body.Jupiter }, { k: "Venus", b: Astronomy.Body.Venus }, { k: "Saturn", b: Astronomy.Body.Saturn }].forEach(p => {
        const eq = Astronomy.Equator(p.b, dt, observer, true, true);
        const ecl = Astronomy.Ecliptic(eq.vec);
        let speed = Astronomy.Ecliptic(Astronomy.Equator(p.b, new Date(dt.getTime() + 3600000), observer, true, true).vec).elon - ecl.elon;
        globalPlanets.push({ name: p.k, lon: (ecl.elon - ayanamsaVal + 360) % 360, speed: speed });
    });
    let nodeMean = (125.04452 - 1934.136261 * (dayDiff / 36525)) % 360;
    let rahuLon = (nodeMean - ayanamsaVal + 360) % 360;
    if (rahuLon < 0) rahuLon += 360;
    globalPlanets.push({ name: "Rahu", lon: rahuLon, speed: -0.05 });
    globalPlanets.push({ name: "Ketu", lon: (rahuLon + 180) % 360, speed: -0.05 });
}

function calculateVargaPositions(v) {
    return globalPlanets.map(p => {
        let lon = p.lon;
        let sign = Math.floor(lon / 30);
        let vSign = (v === 9) ? (Math.floor(lon / 3.333) % 12) + 1 : (sign + 1);
        if(v === 1) vSign = sign + 1;
        let pNameTe = PLANET_TE[p.name] ? PLANET_TE[p.name].substr(0, 2) : p.name.substr(0, 2);
        return { n: pNameTe, s: vSign };
    });
}

function renderChart(divId, planets) {
    const div = document.getElementById(divId); if (!div) return; div.innerHTML = '';
    const boxOrder = [{s:12}, {s:1}, {s:2}, {s:3}, {s:11}, {s:0}, {s:0}, {s:4}, {s:10}, {s:0}, {s:0}, {s:5}, {s:9}, {s:8}, {s:7}, {s:6}];
    boxOrder.forEach(b => {
        const cell = document.createElement('div'); cell.className = 'house';
        if (b.s !== 0) {
            cell.innerHTML = `<div class="sign-label">${SIGNS_TE[b.s]}</div>`;
            planets.forEach(pl => { if (pl.s === b.s) cell.innerHTML += `<div class="planet-text">${pl.n}</div>`; });
        } else { cell.style.background = "transparent"; cell.style.border = "none"; }
        div.appendChild(cell);
    });
}

function getPlanet(name) { return globalPlanets.find(p => p.name === name) || { lon: 0 }; }
function getSign(lon) { return Math.floor(lon / 30) + 1; }
function formatDeg(lon) { return `${Math.floor(lon % 30)}° ${Math.round(((lon % 30) % 1) * 60)}'`; }
function formatFullDeg(lon) { let d=Math.floor(lon); let m=Math.floor((lon-d)*60); let s=Math.round(((lon-d)*60-m)*60); return `${d}:${m}:${s}`; }
function getNakshatra(lon) { let idx = Math.floor(lon / 13.333333); let charan = Math.floor((lon % 13.333333) / 3.333333) + 1; return { name: NAKSHATRAS_TE[idx], lord: VIM_LORDS[idx % 9], charan: charan, id: idx }; }
function getPlanetLord(signIdx) { const lords = ["Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"]; return lords[(signIdx - 1) % 12] || ""; }
function formatDate(d) { return d.toISOString().split('T')[0]; }

function calcVimshottari() { 
    let moon = getPlanet("Moon").lon;
    let nak = getNakshatra(moon);
    let fraction = ((nak.id + 1) * 13.333333 - moon) / 13.333333;
    let startLordIdx = nak.id % 9;
    let balanceYears = VIM_YEARS[startLordIdx] * fraction;
    let d = []; 
    let listStart = new Date(birthDateObj);
    let firstEnd = new Date(birthDateObj);
    firstEnd.setDate(firstEnd.getDate() + Math.round(balanceYears * 365.2425));
    d.push({ lord: VIM_LORDS[startLordIdx], start: formatDate(listStart), end: formatDate(firstEnd) });
    let runningDate = firstEnd;
    for(let i=1; i<9; i++) {
        let idx = (startLordIdx + i) % 9;
        let years = VIM_YEARS[idx];
        let endDate = new Date(runningDate);
        endDate.setDate(endDate.getDate() + Math.round(years * 365.2425));
        d.push({ lord: VIM_LORDS[idx], start: formatDate(runningDate), end: formatDate(endDate) });
        runningDate = endDate;
    }
    return d;
}

function getAntardashaDates(mdLord, mdStartDateStr) {
    let mdIdx = VIM_LORDS.indexOf(mdLord);
    let mdYears = VIM_YEARS[mdIdx];
    let currentStart = new Date(mdStartDateStr);
    let adList = [];
    for(let i=0; i<9; i++) {
        let adIdx = (mdIdx + i) % 9;
        let adLord = VIM_LORDS[adIdx];
        let adYears = VIM_YEARS[adIdx];
        let fractionYears = (mdYears * adYears) / 120;
        let daysToAdd = fractionYears * 365.2425;
        let endDate = new Date(currentStart);
        endDate.setDate(endDate.getDate() + Math.round(daysToAdd));
        adList.push({ lord: adLord, date: formatDate(endDate), start: formatDate(currentStart), end: formatDate(endDate) });
        currentStart = endDate;
    }
    return adList;
}

function getCurrentDashaData() {
    let now = new Date();
    let dashas = calcVimshottari();
    let currentMD = dashas.find(d => new Date(d.start) <= now && new Date(d.end) >= now) || dashas[0];
    let adList = getAntardashaDates(currentMD.lord, currentMD.start);
    let currentAD = adList.find(ad => new Date(ad.start) <= now && new Date(ad.end) >= now) || adList[0];
    return { md: currentMD, ad: currentAD };
}

function getPratyantarDetails(mdLord, adLord, adStartStr) {
    let mdIdx = VIM_LORDS.indexOf(mdLord);
    let adIdx = VIM_LORDS.indexOf(adLord);
    let mdYears = VIM_YEARS[mdIdx];
    let adYears = VIM_YEARS[adIdx];
    let currentStart = new Date(adStartStr);
    let pdList = [];
    for(let i=0; i<9; i++) {
        let pdIdx = (adIdx + i) % 9;
        let pdLord = VIM_LORDS[pdIdx];
        let pdYears = VIM_YEARS[pdIdx];
        let fractionYears = (mdYears * adYears * pdYears) / 14400;
        let daysToAdd = fractionYears * 365.2425;
        let endDate = new Date(currentStart);
        endDate.setDate(endDate.getDate() + Math.round(daysToAdd));
        pdList.push({ md: mdLord, ad: adLord, pd: pdLord, start: new Date(currentStart), end: new Date(endDate), startStr: currentStart.toISOString().split('T')[0], endStr: endDate.toISOString().split('T')[0] });
        currentStart = endDate;
    }
    return pdList;    
}