/* ========================================================================== */
/* ASTROGUIDE GENERATOR (KANNADA VERSION)                                     */
/* ========================================================================== */

/* -------------------------------------------------------------------------- */
/* 1. DATA CONSTANTS & TRANSLATIONS (DEFINED ONCE AT TOP)                     */
/* -------------------------------------------------------------------------- */

const PLANET_KA = {
    "Sun": "సూర్యుడు (Suryudu)", // Phonetic match for Kannada: ಸూర్య (Surya)
    "Sun": "ಸూర్ಯ", "Moon": "ಚಂದ್ರ", "Mars": "ಕುಜ", "Mercury": "ಬುಧ",
    "Jupiter": "ಗುರು", "Venus": "ಶುಕ್ರ", "Saturn": "ಶನಿ", "Rahu": "ರಾಹು",
    "Ketu": "ಕೇತು", "Ascendant": "ಲಗ್ನ"
};

const SIGNS_KA = [
    "", "ಮೇಷ", "ವೃಷಭ", "ಮಿಥುನ", "ಕರ್ಕಾಟಕ", "ಸಿಂಹ", "ಕನ್ಯಾ",
    "ತುಲಾ", "ವೃಶ್ಚಿಕ", "ಧನು", "ಮಕರ", "ಕುಂಭ", "ಮೀನ"
];

const NAKSHATRAS_KA = [
    "ಅಶ್ವಿನಿ", "ಭರಣಿ", "ಕೃತ್ತಿಕಾ", "ರೋಹಿಣಿ", "ಮೃಗಶಿರ", "ಆರ್ದ್ರಾ", "ಪುನರ್ವಸು", "ಪುಷ್ಯ", "ಆಶ್ಲೇಷ",
    "ಮಖಾ", "ಪುಬ್ಬಾ", "ಉತ್ತರ", "ಹಸ್ತ", "ಚಿತ್ತಾ", "ಸ್ವಾತಿ", "ವಿಶಾಖ", "ಅನುರಾಧ", "ಜ್ಯೇಷ್ಠ",
    "ಮೂಲ", "ಪೂರ್ವಾಷಾಢ", "ಉತ್ತರಾಷಾಢ", "ಶ್ರವಣ", "ಧನಿಷ್ಠ", "ಶತಭಿಷ", "ಪೂರ್ವಾಭಾದ್ರ", "ಉತ್ತರಾಭಾದ್ರ", "ರೇವತಿ"
];

const YOGAS_KA = [
    "ವಿಷ್ಕಂಭ", "ಪ್ರೀತಿ", "ಆಯುಷ್ಮಾನ್", "ಸೌಭಾಗ್ಯ", "ಶೋಭನ", "ಅತಿಗಂಡ", "ಸುಕರ್ಮ", "ಧೃತಿ", "ಶೂಲ",
    "ಗಂಡ", "ವೃದ್ಧಿ", "ಧ್ರುವ", "ವ್ಯಾಘಾತ", "ಹರ್ಷಣ", "ವಜ್ರ", "ಸಿದ್ಧಿ", "ವ್ಯತೀಪಾತ", "ವರೀಯಾನ್",
    "ಪರಿಘ", "ಶಿವ", "ಸಿದ್ಧ", "ಸಾಧ್ಯ", "ಶುಭ", "ಶುಕ್ಲ", "ಬ್ರಹ್ಮ", "ಇಂದ್ರ", "ವೈಧೃತಿ"
];

const KARANAS_KA = [
    "ಬವ", "ಬಾಲವ", "ಕೌಲವ", "ತೈತುಲ", "ಗರ", "ವಣಿಜ", "ವಿಷ್ಟಿ",
    "ಶಕುನಿ", "ಚತುಷ್ಪಾದ", "ನಾಗ", "ಕಿಂಸ್ತುಘ್ನ"
];

const VARAS_KA = ["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"];

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
    const name = document.getElementById('name').value || "ಜಾತಕರು"; // Jataka (User)
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const lat = parseFloat(document.getElementById('lat').value) || 28.61;
    const lng = parseFloat(document.getElementById('lng').value) || 77.20;

    if (!date || !time) { alert("ದಯವಿಟ್ಟು ದಿನಾಂಕ ಮತ್ತು ಸಮಯವನ್ನು ನಮೂದಿಸಿ (Please enter Date and Time)"); return; }

    birthDateObj = new Date(date + 'T' + time);
    calculatePlanets(date, time, lat, lng);

    const container = document.getElementById('reportContainer');
    container.innerHTML = '<div style="text-align:center; padding:50px;"><h2>ಜಾತಕ ವರದಿ ತಯಾರಾಗುತ್ತಿದೆ... (Generating Report...)</h2><div style="font-size:30px;">🕉️</div></div>';

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
            <h1 style="font-size:48px; color:#d35400; margin:0;">ಆಸ್ಟ್ರೋ ಗೈಡ್ (ASTROGUIDE)</h1>
            <h2 style="font-size:24px; color:#555; font-weight:normal;">ಸಂಪೂರ್ಣ ವೇದ ಜಾತಕ ವರದಿ</h2>
            <div style="font-size:80px; margin:40px; color:#f57c00;">🕉️</div>
            <div style="font-size:18px; line-height:2;">
                <b>ಜಾತಕರ ಹೆಸರು:</b><br>
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
    const getTithiKa = () => { let t = Math.floor(((moon - sun + 360) % 360) / 12) + 1; return `ತಿಥಿ ${t}`; };
    const getYogKa = () => YOGAS_KA[Math.floor((sun + moon) % 360 / 13.333)] || "";
    const getNakKa = () => NAKSHATRAS_KA[Math.floor(moon / 13.333333)] || "";
    const getKaranaKa = () => KARANAS_KA[Math.floor((moon - sun + 360) % 360 / 6) % 11] || "";
    const getDayKa = () => VARAS_KA[new Date(date).getDay()];
    const getSignKa = (lon) => SIGNS_KA[Math.floor(lon / 30) + 1];
    const getPlanetLordKa = (lon) => PLANET_KA[getPlanetLord(Math.floor(lon/30)+1)] || getPlanetLord(Math.floor(lon/30)+1);
    const row = (l, v) => `<tr><td style="font-weight:bold; color:#555;">${l}</td><td>${v}</td></tr>`;
    
    p.innerHTML += `<div class="header"><h1>ಪ್ರಾಥಮಿಕ ಜ್ಯೋತಿಷ್ಯ ವಿವರಗಳು</h1></div>
        <div class="flex-row"><div class="half-width"><div class="section-title">ಜನನ ವಿವರಗಳು</div><table>${row("ದಿನಾಂಕ", date)}${row("ಸಮಯ", time)}${row("ಅಕ್ಷಾಂಶ", document.getElementById('lat').value)}${row("ರೇಖಾಂಶ", document.getElementById('lng').value)}${row("ಅಯನಾಂಶ", "ಲಾಹಿರಿ (" + ayanamsaVal.toFixed(2) + "°)")}</table></div>
        <div class="half-width"><div class="section-title">ಪಂಚಾಂಗ</div><table>${row("ತಿಥಿ", getTithiKa())}${row("ಯೋಗ", getYogKa())}${row("ನಕ್ಷತ್ರ", getNakKa())}${row("ಕರಣ", getKaranaKa())}${row("ವಾರ", getDayKa())}</table></div></div>
        <div class="flex-row" style="margin-top:20px;"><div class="half-width"><div class="section-title">ಘಟ ಚಕ್ರ</div><table>${row("ಚಂದ್ರ ರಾಶಿ", getSignKa(moon))}${row("ಯೋನಿ", "ಗೌ")}${row("ಗಣ", "ಮನುಷ್ಯ")}${row("ನಾಡಿ", "ಮಧ್ಯ")}</table></div>
        <div class="half-width"><div class="section-title">ಅವಕಹಡ ಚಕ್ರ</div><table>${row("ಲಗ್ನ", getSignKa(getPlanet("Ascendant").lon))}${row("ಲಗ್ನಾಧಿಪತಿ", getPlanetLordKa(getPlanet("Ascendant").lon))}${row("ರಾಶ್ಯಾಧಿಪತಿ", getPlanetLordKa(moon))}${row("ನಕ್ಷತ್ರಾಧಿಪತಿ", PLANET_KA[getNakshatra(moon).lord] || getNakshatra(moon).lord)}${row("ವರ್ಣ", "ವಿಪ್ರ")}</table></div></div><div class="footer-num">ಪುಟ 1</div>`;
    return p;
}

function createPage2() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let rows = globalPlanets.map(pl => {
        let s = Math.floor(pl.lon / 30) + 1; 
        let nak = getNakshatra(pl.lon); 
        let status = pl.speed < 0 ? "(ವಕ್ರ)" : "";
        let pNameKa = PLANET_KA[pl.name] || pl.name;
        let sNameKa = SIGNS_KA[s];
        let pLordKa = PLANET_KA[getPlanetLord(s)] || getPlanetLord(s);
        let nakNameKa = NAKSHATRAS_KA[nak.id] || nak.name;
        let nakLordKa = PLANET_KA[nak.lord] || nak.lord;
        return `<tr><td><b>${pNameKa}</b> ${status}</td><td>${sNameKa}</td><td>${formatDeg(pl.lon)}</td><td>${pLordKa}</td><td>${nakNameKa}</td><td>${nakLordKa}</td><td>${s}</td></tr>`;
    }).join('');
    let cards = globalPlanets.filter(pl => pl.name !== 'Ascendant').map(pl => {
        let nature = ["Jupiter", "Venus", "Mercury", "Moon"].includes(pl.name) ? "ಶುಭ" : "ಪಾಪ";
        let pNameKa = PLANET_KA[pl.name] || pl.name;
        let sNameKa = SIGNS_KA[Math.floor(pl.lon/30)+1];
        return `<div class="planet-card"><div class="planet-icon">●</div><div class="planet-info"><b>${pNameKa}</b><span>${sNameKa}</span><div class="${nature.includes('ಶುಭ') ? 'status-benefic' : 'status-malefic'}">${nature}</div></div></div>`;
    }).join('');
    p.innerHTML += `<div class="header"><h1>ಗ್ರಹ ಸ್ಥಿತಿಗಳು</h1></div><table><thead><tr><th>ಗ್ರಹ</th><th>ರಾಶಿ</th><th>ಡಿಗ್ರಿ</th><th>ಅಧಿಪತಿ</th><th>ನಕ್ಷತ್ರ</th><th>ನಕ್ಷತ್ರಾಧಿಪತಿ</th><th>ಭಾವ</th></tr></thead><tbody>${rows}</tbody></table><div class="section-title">ಗ್ರಹ ವಿವರಗಳು</div><div class="planet-card-grid">${cards}</div><div class="footer-num">ಪುಟ 2</div>`;
    return p;
}

function createPage3() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    p.innerHTML += `<div class="header"><h1>ಜಾತಕ ಚಕ್ರಗಳು</h1></div><div class="section-title">ಲಗ್ನ ಕುಂಡಲಿ (D1)</div><div class="flex-row"><div style="flex:1"><div id="chartD1" class="chart-grid" style="width:100%; max-width:400px;"></div></div><div style="flex:0.6; padding:15px; background:#fffcf5; border:1px dashed #ffd54f; font-size:11px;"><b>ವಿಶ್ಲೇಷಣೆ:</b><br>ಲಗ್ನ ಕುಂಡಲಿ ದೈಹಿಕ ಆರೋಗ್ಯ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವವನ್ನು ಸೂಚಿಸುತ್ತದೆ.</div></div><br><div class="flex-row"><div class="half-width"><div class="section-title">ಚಂದ್ರ ಕುಂಡಲಿ</div><div id="chartMoon" class="chart-grid"></div></div><div class="half-width"><div class="section-title">ನವಾಂಶ ಕುಂಡಲಿ (D9)</div><div id="chartD9" class="chart-grid"></div></div></div><div class="footer-num">ಪುಟ 3</div>`;
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
        rows += `<tr><td>${i}</td><td>${SIGNS_KA[signId]}</td><td>${formatDeg(mid)}</td><td>${SIGNS_KA[Math.floor(((mid+15)%360)/30)+1]}</td><td>${formatDeg((mid + 15) % 360)}</td></tr>`;
    }
    p.innerHTML += `<div class="header"><h1>ಭಾವ ಸ್ಪಷ್ಟ</h1></div><div style="text-align:center;color:#f57c00;margin-bottom:10px;">ಲಗ್ನ: ${formatDeg(asc)}</div><table><thead><tr><th>ಭಾವ</th><th>ರಾಶಿ</th><th>ಭಾವ ಮಧ್ಯ</th><th>ರಾಶಿ</th><th>ಭಾವ ಸಂಧಿ</th></tr></thead><tbody>${rows}</tbody></table><div class="flex-row"><div class="half-width"><div class="section-title">ಚಲಿತ ಚಕ್ರ</div><div id="chartChalit" class="chart-grid"></div></div><div class="half-width" style="padding:20px; font-size:11px;">ಭಾವ ಬಲವನ್ನು ಚಲಿತ ಚಕ್ರ ಸೂಚಿಸುತ್ತದೆ.</div></div><div class="footer-num">ಪುಟ 4</div>`;
    setTimeout(() => renderChart('chartChalit', calculateVargaPositions(1)), 50);
    return p;
}

function createVargaPage(divisors, pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let grids = divisors.map(d => `<div style="text-align:center;"><div style="font-weight:bold;font-size:11px;margin-bottom:2px;">D-${d}</div><div id="varga${d}_p${pageNum}" class="chart-grid" style="width:150px; height:250px; font-size:8px;"></div></div>`).join('');
    p.innerHTML += `<div class="header"><h1>ವರ್ಗ ಚಕ್ರಗಳು</h1></div><div style="display:grid; grid-template-columns:repeat(3,1fr); row-gap:20px; column-gap:10px; justify-items:center; margin-top:20px;">${grids}</div><div class="footer-num">ಪುಟ ${pageNum}</div>`;
    setTimeout(() => divisors.forEach(d => renderChart(`varga${d}_p${pageNum}`, calculateVargaPositions(d))), 50);
    return p;
}

function createPage7() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const pl = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"];
    const translateList = (list) => list.map(x => PLANET_KA[x] || x).join(", ");
    const genTable = () => pl.map(x => `<tr><td><b>${PLANET_KA[x]}</b></td><td>${translateList(FRIENDSHIPS[x].f)}</td><td>${translateList(FRIENDSHIPS[x].n)}</td><td>${translateList(FRIENDSHIPS[x].e)}</td></tr>`).join('');
    p.innerHTML += `<div class="header"><h1>ಮೈತ್ರಿ ಚಕ್ರ</h1></div><div class="section-title">ನೈಸರ್ಗಿಕ ಮೈತ್ರಿ</div><table><thead><tr><th>ಗ್ರಹ</th><th>ಮಿತ್ರರು</th><th>ಸಮ</th><th>ಶತ್ರುಗಳು</th></tr></thead><tbody>${genTable()}</tbody></table><br><div class="section-title">ತಾತ್ಕಾಲಿಕ ಮೈತ್ರಿ</div><table><thead><tr><th>ಗ್ರಹ</th><th>ಮಿತ್ರರು</th><th>ಸಮ</th><th>ಶತ್ರುಗಳು</th></tr></thead><tbody>${genTable()}</tbody></table><div class="footer-num">ಪುಟ 7</div>`;
    return p;
}

function createPage8() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const topRows = globalPlanets.map(pl => {
        let s = Math.floor(pl.lon / 30) + 1;
        let pNameKa = PLANET_KA[pl.name] || pl.name;
        let sNameKa = SIGNS_KA[s];
        let pLordKa = PLANET_KA[getPlanetLord(s)] || getPlanetLord(s);
        let status = pl.speed < 0 ? "ಹೌದು" : ""; 
        return `<tr><td style="font-weight:bold;">${pNameKa}</td><td style="color:${pl.speed<0?'red':'inherit'}">${status}</td><td>${sNameKa}</td><td>${formatFullDeg(pl.lon)}</td><td>${pLordKa}</td><td>${s}</td></tr>`;
    }).join('');
    const bottomRows = globalPlanets.map(pl => {
        let nak = getNakshatra(pl.lon);
        let pNameKa = PLANET_KA[pl.name] || pl.name;
        let nakNameKa = NAKSHATRAS_KA[nak.id] || nak.name;
        let nakLordKa = PLANET_KA[nak.lord] || nak.lord;
        let subLordKa = PLANET_KA[VIM_LORDS[(nak.id+2)%9]] || VIM_LORDS[(nak.id+2)%9];
        let ssLordKa = PLANET_KA[VIM_LORDS[(nak.id+4)%9]] || VIM_LORDS[(nak.id+4)%9];
        return `<tr><td style="font-weight:bold;">${pNameKa}</td><td>${nakNameKa}</td><td>${nakLordKa}</td><td>${nak.charan}</td><td>${subLordKa}</td><td>${ssLordKa}</td></tr>`;
    }).join('');
    p.innerHTML += `<div class="header"><h1>ಕೆ.ಪಿ ಗ್ರಹ ವಿವರಗಳು</h1></div><table><thead><tr><th>ಗ್ರಹ</th><th>ವಕ್ರ</th><th>ರಾಶಿ</th><th>ಡಿಗ್ರಿ</th><th>ಅಧಿಪತಿ</th><th>ಭಾವ</th></tr></thead><tbody>${topRows}</tbody></table><br><table><thead><tr><th>ಗ್ರಹ</th><th>ನಕ್ಷತ್ರ</th><th>ನಕ್ಷತ್ರಾಧಿಪತಿ</th><th>ಪಾದ</th><th>ಉಪ ಪ್ರಭು</th><th>ಉಪ-ಉಪ ಪ್ರಭು</th></tr></thead><tbody>${bottomRows}</tbody></table><div class="footer-num">ಪುಟ 8</div>`;
    return p;
}

function createPage9() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const dashas = calcVimshottari().slice(0, 6);
    const createCol = (d) => {
        const adList = getAntardashaDates(d.lord, d.start);
        const mdNameKa = PLANET_KA[d.lord] || d.lord;
        let h = `<div class="dasha-col"><div class="dasha-header"><div class="dasha-planet">${mdNameKa}</div><div class="dasha-time">${d.start}</div><div class="dasha-time">${d.end}</div></div>`;
        adList.forEach(ad => {
            let adNameKa = PLANET_KA[ad.lord] || ad.lord;
            h += `<div class="ad-row"><span class="ad-planet">${adNameKa}</span><span class="ad-date">${ad.date}</span></div>`; 
        });
        return h + `</div>`;
    };
    p.innerHTML += `<div class="header"><h1>ವಿಂಶೋತ್ತರಿ ದಶಾ - I</h1></div><div class="dasha-grid" style="margin-top:30px;">${dashas.slice(0,3).map(createCol).join('')}</div><div class="dasha-grid">${dashas.slice(3,6).map(createCol).join('')}</div><div class="footer-num">ಪುಟ 9</div>`;
    return p;
}

function createPage10() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const dashas = calcVimshottari().slice(6, 9);
    const createCol = (d) => {
        const adList = getAntardashaDates(d.lord, d.start);
        const mdNameKa = PLANET_KA[d.lord] || d.lord;
        let h = `<div class="dasha-col"><div class="dasha-header"><div class="dasha-planet">${mdNameKa}</div><div class="dasha-time">${d.start}</div><div class="dasha-time">${d.end}</div></div>`;
        adList.forEach(ad => {
            let adNameKa = PLANET_KA[ad.lord] || ad.lord;
            h += `<div class="ad-row"><span class="ad-planet">${adNameKa}</span><span class="ad-date">${ad.date}</span></div>`; 
        });
        return h + `</div>`;
    };
    let currentData = getCurrentDashaData();
    let currMDKa = PLANET_KA[currentData.md.lord] || currentData.md.lord;
    let currADKa = PLANET_KA[currentData.ad.lord] || currentData.ad.lord;
    p.innerHTML += `<div class="header"><h1>ವಿಂಶೋತ್ತರಿ ದಶಾ - II</h1></div><div class="dasha-grid" style="margin-top:30px;">${dashas.map(createCol).join('')}</div><div class="section-title" style="margin-top:40px;">ಪ್ರಸ್ತುತ ದಶಾ ವಿವರಗಳು</div><table class="current-dasha-table"><thead><tr><th>ದಶಾ</th><th>ಗ್ರಹ</th><th>ಪ್ರಾರಂಭ ದಿನಾಂಕ</th><th>ಮುಕ್ತಾಯ ದಿನಾಂಕ</th></tr></thead><tbody><tr><td><b>ಮಹಾದಶಾ</b></td><td>${currMDKa}</td><td>${currentData.md.start}</td><td>${currentData.md.end}</td></tr><tr style="background:#ffebee;"><td><b>ಅಂತರ್ದಶಾ</b></td><td>${currADKa}</td><td>${currentData.ad.start}</td><td>${currentData.ad.end}</td></tr><tr><td><b>ಪ್ರತ್ಯಾಂತರ</b></td><td>-</td><td>-</td><td>-</td></tr></tbody></table><div class="footer-num">ಪುಟ 10</div>`;
    return p;
}

// --- MERGED KALSARPA PAGE (11) ---
function createKalsarpaPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const kData = checkKalsarpa();
    const types = ["ಅನಂತ", "ಕುಳಿಕ", "ವಾಸುಕಿ", "ಶಂಖಪಾಲ", "ಪದ್ಮ", "ಮಹಾಪದ್ಮ", "ತಕ್ಷಕ", "ಕರ್ಕೋಟಕ", "ಶಂಖಚೂಡ", "ಘಟಕ", "ವಿಷಧರ", "ಶೇಷನಾಗ"];
    const gridHtml = types.map((t, i) => {
        let activeClass = (kData.present && kData.typeId === (i+1)) ? "active" : "";
        return `<div class="kalsarp-btn ${activeClass}">${t}</div>`;
    }).join('');
    const statusText = kData.present ? "ಕಾಲ ಸರ್ಪ ದೋಷ ಇದೆ" : "ಕಾಲ ಸರ್ಪ ದೋಷ ಇಲ್ಲ";
    let reportText = kData.present 
        ? `ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿ <b>${kData.name} ಕಾಲ ಸರ್ಪ ದೋಷ</b> ಇದೆ. ರಾಹು ಮತ್ತು ಕೇತುಗಳ ಮಧ್ಯೆ ಉಳಿದ ಗ್ರಹಗಳು ಬಂದಿತವಾಗಿವೆ. ಇದು ಯಶಸ್ಸನ್ನು ಸಾಧಿಸಲು ಅಡೆತಡೆಗಳು, ವೈವಾಹಿಕ ಜೀವನದಲ್ಲಿ ಅಶಾಂತಿ ಉಂಟುಮಾಡಬಹುದು. ಸರಿಯಾದ ಪರಿಹಾರಗಳನ್ನು ಪಾಲಿಸುವುದರಿಂದ ಪ್ರಭಾವ ಕಡಿಮೆಯಾಗುತ್ತದೆ.`
        : `ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿ <b>ಕಾಲ ಸರ್ಪ ದೋಷ ಇಲ್ಲ</b>. ನೀವು ಈ ದೋಷಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ಸಮಸ್ಯೆಗಳನ್ನು ಎದುರಿಸುವುದಿಲ್ಲ.`;

    p.innerHTML += `<div class="header"><h1>ಕಾಲ ಸರ್ಪ ದೋಷ (Kalsarpa Dosha)</h1></div>
        <div style="display:flex; gap:15px; margin-bottom:15px;">
            <div style="flex:1;">
               <div class="section-title">ದೋಷ ವಿಧಗಳು</div>
               <div class="dosha-grid" style="grid-template-columns: repeat(3, 1fr); font-size:9px;">${gridHtml}</div>
            </div>
            <div style="flex:1; display:flex; flex-direction:column; justify-content:center; text-align:center;">
               <span class="face-icon ${kData.present ? 'face-sad' : 'face-happy'}" style="font-size:40px;">${kData.present ? '☹' : '☺'}</span>
               <div style="font-weight:bold; color:#333; margin-top:5px;">${statusText}</div>
               <div style="font-size:10px; color:#666;">${kData.present ? kData.name : "N/A"}</div>
            </div>
        </div>
        <div class="section-title">ವಿಶ್ಲೇಷಣೆ (Analysis)</div>
        <p style="font-size:11px; line-height:1.6; text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px;">${reportText}</p>
        <div class="section-title" style="margin-top:20px;">ಪರಿಹಾರಗಳು (Remedies)</div>
        <div class="remedy-box"><ul><li>ರುದ್ರಾಭಿಷೇಕ - ಶಿವನಿಗೆ ಪೂಜೆ ಮಾಡುವುದು ಒಳ್ಳೆಯದು.</li><li>ಪೂಜಾ ಕೋಣೆಯಲ್ಲಿ ಕಾಲ ಸರ್ಪ ಯಂತ್ರವನ್ನು ಸ್ಥಾಪಿಸಿ.</li><li>ಬುಧವಾರ ಅಥವಾ ಶುಕ್ರವಾರ ದೋಷ ನಿವಾರಣಾ ಪೂಜೆ ಮಾಡಿಸಿ.</li><li>ಬಡವರಿಗೆ ಕಪ್ಪು ಧಾನ್ಯಗಳನ್ನು ದಾನ ಮಾಡಿ.</li><li>8 ಅಥವಾ 9 ಮುಖದ ರುದ್ರಾಕ್ಷಿಯನ್ನು ಧರಿಸಿ.</li></ul></div>
        <div class="footer-num">ಪುಟ ${pageNum}</div>`;
    return p;
}

// --- MERGED MANGLIK PAGE (12) ---
function createManglikPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const mData = checkManglik();
    const statusText = mData.isManglik 
        ? 'ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿ ಕುಜ ದೋಷ (Manglik Dosha) ಗುರುತಿಸಲಾಗಿದೆ. ದೋಷ ಪ್ರಭಾವವಿದೆ, ಆದ್ದರಿಂದ ವಿವಾಹಕ್ಕೆ ಮುನ್ನ ಜಾತಕ ಪರಿಶೀಲನೆ ಅಗತ್ಯ.' 
        : 'ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿ ಕುಜನು ಶುಭ ಸ್ಥಾನದಲ್ಲಿದ್ದಾನೆ. ನಿಮಗೆ ಕುಜ ದೋಷ ಇಲ್ಲ (Non-Manglik).';
    const houseReasons = mData.reasonsHouse.length > 0 ? mData.reasonsHouse.join('<br>') : "ಪ್ರತಿಕೂಲ ಸ್ಥಾನಗಳಿಲ್ಲ.";

    p.innerHTML += `<div class="header"><h1>ಕುಜ ದೋಷ ವಿಶ್ಲೇಷಣೆ (Manglik Dosha)</h1></div>
        <div style="display:flex; gap:20px; align-items:center; margin-bottom:20px;">
            <div style="flex:1; text-align:center;">
                <div class="progress-container"><div class="progress-bar" style="width:${mData.percent}%">${mData.percent}%</div></div>
                <div style="font-weight:bold; font-size:12px; margin-top:5px;">ದೋಷ ತೀವ್ರತೆ</div>
            </div>
            <div style="flex:2; font-size:11px; text-align:justify; background:#fff3e0; padding:10px; border-radius:5px;">
                ${statusText}
            </div>
        </div>
        <div class="flex-row">
            <div class="analysis-col">
                <div class="analysis-header">ಕಾರಣಗಳು (Reasons)</div>
                <div class="analysis-list" style="font-size:10px;">${houseReasons}</div>
            </div>
            <div class="analysis-col">
                <div class="analysis-header">ಶ್ಲೋಕ</div>
                <div style="font-style:italic; font-size:10px; text-align:center; padding-top:10px;">ಲಗ್ನೇ ವ್ಯಯೇ ಸುಖೇ ವಾಪಿ ಸಪ್ತಮೇ ವಾ ಅಷ್ಟಮೇ ಕುಜೇ | <br>ಶುಭ ದೃಗ್ ಯೋಗ ಹೀನೇ ಚ ಪತಿಂ ಹಂತಿ ನ ಸಂಶಯಮ್ ||</div>
            </div>
        </div>
        <div class="section-title" style="margin-top:20px;">ಪರಿಹಾರಗಳು (Remedies)</div>
        <div class="remedy-box" style="border-left-color: #d35400;"><ul><li>ಪೂಜಾ ಕೋಣೆಯಲ್ಲಿ ಮಂಗಳ ಯಂತ್ರವನ್ನು ಸ್ಥಾಪಿಸಿ.</li><li>ಪ್ರತಿ ಮಂಗಳವಾರ ಹನುಮಾನ್ ದೇವಸ್ಥಾನಕ್ಕೆ ಹೋಗಿ, ಸಿಂಧೂರ, ಕೆಂಪು ಹೂವುಗಳಿಂದ ಪೂಜಿಸಿ.</li><li>ಹನುಮಾನ್ ಮಂತ್ರವನ್ನು ಜಪಿಸಿ: <b>|| ಓಂ ಶ್ರೀಂ ಹನುಮತೇ ನಮಃ ||</b></li><li>ಮಂಗಳವಾರಗಳಂದು ಉಪವಾಸವಿರಿ.</li><li>ವಿವಾಹಕ್ಕೆ ಮುನ್ನ ಕುಂಭ ವಿವಾಹ ಮಾಡುವುದು ಒಳ್ಳೆಯದು.</li></ul></div>
        <div class="footer-num">ಪುಟ ${pageNum}</div>`;
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

    p.innerHTML += `<div class="header"><h1>ಸಾಡೇ ಸಾತಿ (Sade Sati)</h1></div>
        <div style="display:flex; gap:15px; margin-bottom:20px;">
            <div class="ss-status-card" style="flex:1;">
                <div style="font-size:30px; color:${status.present ? '#e53935' : '#43a047'}; margin-bottom:5px;">${status.present ? '☹' : '☺'}</div>
                <div style="font-weight:bold; font-size:12px;">${status.statusText}</div>
                <div style="font-size:10px; color:#666;">${status.desc}</div>
            </div>
            <div class="ss-table-card" style="flex:1.5;">
                <table style="margin-bottom:0;">
                    <tr><td style="font-weight:bold;">ಚಂದ್ರ ರಾಶಿ</td><td>${status.moonSign}</td></tr>
                    <tr><td style="font-weight:bold;">ಶನಿ ಸ್ಥಾನ</td><td>${status.saturnSign}</td></tr>
                </table>
            </div>
        </div>
        <div class="section-title">ಮುಂಬರುವ ಹಂತಗಳು (Upcoming Phases)</div>
        <table class="ss-timeline-table">
            <thead><tr><th>ದಿನಾಂಕ</th><th>ಶನಿ ರಾಶಿ</th><th>ಹಂತದ ವಿಧ</th></tr></thead>
            <tbody>${timelineRows}</tbody>
        </table>
        <div class="section-title" style="margin-top:15px;">ಪರಿಹಾರಗಳು (Remedies)</div>
        <div class="remedy-box-green" style="font-size:10px;">
            <ul>
                <li>ತಂದೆ-ತಾಯಿ ಮತ್ತು ಹಿರಿಯರಿಗೆ ಸೇವೆ ಮಾಡಿ.</li>
                <li>ಪ್ರತಿದಿನ ಹನುಮಾನ್ ಚಾಲೀಸಾ ಪಠಿಸಿ.</li>
                <li>ಶನಿವಾರದಂದು ಸೂರ್ಯೋದಯದಿಂದ ಸೂರ್ಯಾಸ್ತದವರೆಗೆ ಉಪವಾಸವಿರುವುದು ಒಳ್ಳೆಯದು.</li>
                <li>ಬಡವರಿಗೆ ಉದ್ದಿನ ಬೇಳೆ, ಎಣ್ಣೆ, ಕಪ್ಪು ಎಳ್ಳು ದಾನ ಮಾಡಿ.</li>
                <li>ಮಂತ್ರ: "|| ಓಂ ಶಂ ಶನೈಶ್ಚರಾಯ ನಮಃ ||"</li>
            </ul>
        </div>
        <div class="footer-num">ಪುಟ ${pageNum}</div>`;
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
                md: PLANET_KA[md.lord] || md.lord,
                ad: PLANET_KA[ad.lord] || ad.lord,
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
            <td>${d.md === d.ad ? 'ಪ್ರಮುಖ ಬದಲಾವಣೆ (Major Shift)' : 'ಅಂತರ್ದಶಾ (Sub Period)'}</td>
        </tr>
    `).join('');

    p.innerHTML += `
        <div class="header"><h1>5 ವರ್ಷಗಳ ವೈಯಕ್ತಿಕ ಚಾರ್ಟ್</h1></div>
        <div class="section-title">ಮುಂಬರುವ ದಶಾಗಳು (${today.getFullYear()} - ${future.getFullYear()})</div>
        <p style="font-size:11px; text-align:center;">ಮುಂಬರುವ 5 ವರ್ಷಗಳ ಪ್ರಮುಖ ಗ್ರಹ ಪ್ರಭಾವಗಳನ್ನು ಈ ಚಾರ್ಟ್ ಸೂಚಿಸುತ್ತದೆ.</p>
        
        <table class="year-chart-table">
            <thead>
                <tr>
                    <th>ದಶಾ (MD-AD)</th>
                    <th>ಪ್ರಾರಂಭ ದಿನಾಂಕ</th>
                    <th>ಮುಕ್ತಾಯ ದಿನಾಂಕ</th>
                    <th>ದಶಾ ವಿಧ</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
        
        <div class="quote-box">
            "ಗ್ರಹಗಳು ಪ್ರೇರೇಪಿಸುತ್ತವೆ, ಆದರೆ ಒತ್ತಾಯಿಸುವುದಿಲ್ಲ. ಈ ಸಮಯವನ್ನು ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಬಳಸಿ."
        </div>
        <div class="footer-num">ಪುಟ 14</div>`;
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
                    <div style="font-size:12px; color:#666;">ಸಂಸ್ಕೃತ ಶ್ಲೋಕ & ಗ್ರಹ ಸ್ಥಿತಿ</div>
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

        <div class="section-title" style="color:#2e7d32; border-color:#2e7d32;">ಜ್ಯೋತಿಷಿಯ ವಿಶ್ಲೇಷಣೆ (Astrologer's Verdict)</div>
        
        <div style="display:flex; gap:15px; margin-bottom:20px;">
            <div style="flex:1;">
                 <div style="background:#f1f8e9; padding:15px; border-radius:8px; border-left:5px solid #43a047; font-size:12px; line-height:1.8; text-align:justify; color:#333;">
                    <span style="font-size:30px; float:left; margin-right:10px; line-height:30px; color:#43a047;">❝</span>
                    ${speakText}
                    <span style="font-size:30px; float:right; margin-left:10px; line-height:0; color:#43a047; margin-top:10px;">❞</span>
                 </div>
            </div>
        </div>

        <div class="section-title" style="color:#d32f2f; border-color:#d32f2f;">ಸಲಹೆಗಳು & ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು (Advice)</div>
        
        <div style="background:#ffebee; padding:15px; border-radius:8px; border:1px dashed #ef5350; display:flex; gap:15px; align-items:center;">
            <div style="font-size:24px;">💡</div>
            <div style="font-size:12px; line-height:1.6; color:#b71c1c; font-weight:500;">
                ${adviceText}
            </div>
        </div>
        
        <div class="footer-num">ಪುಟ ${pageNum}</div>
    `;
    return p;
}

// --- HELPER: PLANET BUILDER (Fixed Logic) ---
function buildPlanetPage(planetName, pageNum) {
    const data = PLANET_REPORT_DATA[planetName];
    const planetInfo = getPlanet(planetName);
    const signIdx = Math.floor(planetInfo.lon / 30) + 1;
    const signName = SIGNS_KA[signIdx]; 

    const tableHtml = `
        <tr><td><b>ಇರುವ ರಾಶಿ (Sign)</b></td><td><b>${signName}</b></td></tr>
        <tr><td><b>ನಕ್ಷತ್ರ (Star)</b></td><td>${getNakshatra(planetInfo.lon).name}</td></tr>
        <tr><td><b>ಸ್ಥಿತಿ (Status)</b></td><td>${planetInfo.speed < 0 ? "<span style='color:red'>ವಕ್ರ (Retrograde)</span>" : "ಮಾರ್ಗ (Direct)"}</td></tr>
        <tr><td><b>ಡಿಗ್ರಿ (Degree)</b></td><td>${formatDeg(planetInfo.lon)}</td></tr>
    `;
    
    const personalizedSpeak = `ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿ ${PLANET_KA[planetName]} <b>${signName}</b> ರಾಶಿಯಲ್ಲಿದ್ದಾರೆ. ${data.speak}`;
    
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
    const signNameKa = SIGNS_KA[signIdx];
    
    const rawLord = signInfo.lord;
    const lordName = PLANET_KA[rawLord] ? PLANET_KA[rawLord] : rawLord;

    const tableHtml = `
        <tr><td><b>ಅಧಿಪತಿ (Lord)</b></td><td>${lordName}</td></tr>
        <tr><td><b>ತತ್ವ (Element)</b></td><td>${signInfo.element}</td></tr>
        <tr><td><b>ಅದೃಷ್ಟ ರತ್ನ (Gem)</b></td><td>${signInfo.gem}</td></tr>
        <tr><td><b>ಚಿಹ್ನೆ (Symbol)</b></td><td>${signInfo.sym}</td></tr>
    `;

    const speakText = `ನಮಸ್ಕಾರ! ನೀವು <b>${signNameKa}</b> ಲಗ್ನದಲ್ಲಿ ಜನಿಸಿದ್ದೀರಿ. ಲಗ್ನ ಎಂದರೆ ಕೇವಲ ರಾಶಿ ಮಾತ್ರವಲ್ಲ, ಅದು ನಿಮ್ಮ 'ವ್ಯಕ್ತಿತ್ವ' ಮತ್ತು 'ಆರೋಗ್ಯ'ವನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ. 
    ${signNameKa} ರಾಶಿಯ ಅಧಿಪತಿ <b>${lordName}</b>. ಇದರ ಪ್ರಭಾವದಿಂದ ನೀವು ಸ್ವಭಾವತಃ ಧೈರ್ಯವಂತರು ಮತ್ತು ಛಲವುಳ್ಳವರು. ನೀವು ಯಾವುದೇ ಕೆಲಸವನ್ನು ಅರ್ಧಕ್ಕೆ ಬಿಡುವುದಿಲ್ಲ.`;

    const adviceText = `ನಿಮ್ಮ ಲಗ್ನಾಧಿಪತಿ <b>${lordName}</b> ಆಗಿರುವುದರಿಂದ, ಆ ಗ್ರಹಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ವಾರವನ್ನು (ಉದಾಹರಣೆಗೆ ${signInfo.day}) ನೀವು ಯಾವುದೇ ಹೊಸ ಕೆಲಸ ಪ್ರಾರಂಭಿಸಲು ಆರಿಸಿಕೊಳ್ಳುವುದು ಒಳ್ಳೆಯದು.`;

    return createReportPage(
        "ಲಗ್ನ ವಿಶ್ಲೇಷಣೆ (Ascendant Report)", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Classic_1635_Schiller_constellation_Capricornus.png/250px-Classic_1635_Schiller_constellation_Capricornus.png", 
        tableHtml,
        "ದೇಹಂ ರೂಪಂ ಚ ಜ್ಞಾನಂ ಚ ವರ್ಣಂ ಚೈವ ಬಲಾಬಲಮ್ |<br>ಸುಖಂ ದುಃಖಂ ಸ್ವಭಾವಂಚ ಲಗ್ನಭಾವಾನ್ನಿರೀಕ್ಷಯೇತ್ ||",
        speakText,
        adviceText,
        `ಲಗ್ನ: ${signNameKa} (Ascendant)`,
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
        <div class="header"><h1>ಪ್ರತ್ಯಾಂತರ ದಶಾ (Pratyantar Dasha)</h1></div>
        <div class="section-title">5 ವರ್ಷಗಳ ವಿವರವಾದ ಭವಿಷ್ಯ</div>
        <p style="font-size:11px; color:#666; text-align:center;">
            ${today.getFullYear()} ರಿಂದ ${fiveYearsLater.getFullYear()} ರವರೆಗಿನ ವಿವರವಾದ ಉಪ-ಉಪ ಅವಧಿಗಳು
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
                    <th>ದಶಾ ಕ್ರಮ (MD-AD-PD)</th>
                    <th>ಪ್ರಾರಂಭ ದಿನಾಂಕ</th>
                    <th>ಮುಕ್ತಾಯ ದಿನಾಂಕ</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>
        <div class="footer-num">ಪುಟ 25</div>`; // Renumbered
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
                    
                    const mdName = PLANET_KA[md.lord] || md.lord;
                    const adName = PLANET_KA[ad.lord] || ad.lord;
                    const pdName = PLANET_KA[pd.pd] || pd.pd;
                    
                    const pdData = PREDICTION_DB[pd.pd];
                    const themeColor = pdData.color;

                    p.innerHTML += `
                        <div class="header"><h1>ಫಲಿತಾಂಶಗಳು & ಪರಿಹಾರಗಳು</h1></div>
                        
                        <div style="background:${themeColor}15; border-left: 6px solid ${themeColor}; padding:15px; margin-bottom:20px; border-radius:4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                            <div style="font-size:11px; text-transform:uppercase; color:#555; font-weight:bold; letter-spacing:1px;">ಕಾಲ ನಿರ್ಣಯ</div>
                            <div style="font-size:18px; font-weight:bold; color:#222; margin-top:5px;">
                                ${pd.startStr} <span style="font-size:14px; font-weight:normal; color:#666;">ಇಂದ</span> ${pd.endStr}
                            </div>
                        </div>

                        <div class="dasha-flow">
                            <div class="df-box">
                                <div>ಮಹಾದಶಾ</div>
                                <div class="df-planet">${mdName}</div>
                            </div>
                            <div class="df-arrow">➜</div>
                            <div class="df-box">
                                <div>ಅಂತರ್ದಶಾ</div>
                                <div class="df-planet">${adName}</div>
                            </div>
                            <div class="df-arrow">➜</div>
                            <div class="df-box df-active" style="border-color:${themeColor}; background:${themeColor}10;">
                                <div>ಪ್ರತ್ಯಾಂತರ</div>
                                <div class="df-planet" style="color:${themeColor}; font-size:14px;">${pdName}</div>
                            </div>
                        </div>

                        <div class="section-title" style="color:${themeColor}; border-color:${themeColor};">ಜ್ಯೋತಿಷಿಯ ವಿಶ್ಲೇಷಣೆ</div>

                        <div style="display:flex; gap:20px; margin-bottom:20px; align-items:flex-start;">
                            <div style="flex:0.8; text-align:center;">
                                <div style="background:#fafafa; border-radius:50%; width:70px; height:70px; display:flex; align-items:center; justify-content:center; font-size:35px; border:2px solid ${themeColor}; margin:0 auto;">
                                    ${pdData.icon}
                                </div>
                                <div style="font-size:10px; font-weight:bold; margin-top:5px; color:#555;">${pdName} ಪ್ರಭಾವ</div>
                            </div>
                            <div style="flex:3; font-size:12px; text-align:justify; line-height:1.8; color:#333;">
                                <p><strong>ನಮಸ್ಕಾರ!</strong> ಪ್ರಸ್ತುತ ನೀವು <b>${mdName}</b> ಮಹಾದಶಾ ಮತ್ತು <b>${pdName}</b> ಪ್ರತ್ಯಾಂತರ ದಶಾದಲ್ಲಿದ್ದೀರಿ.</p>
                                <p>ಈ ಸಮಯದಲ್ಲಿ ಗ್ರಹ ಸಂಚಾರವನ್ನು ಆಧರಿಸಿ... ${pdData.event}</p>
                            </div>
                        </div>

                        <div class="pred-grid">
                            <div class="pred-item">
                                <div class="pi-head">💰 ಆರ್ಥಿಕ & ವೃತ್ತಿ</div>
                                <div class="pi-body">${pdData.career}</div>
                            </div>
                            <div class="pred-item">
                                <div class="pi-head">❤️ ಕುಟುಂಬ & ಆರೋಗ್ಯ</div>
                                <div class="pi-body">${pdData.family}</div>
                            </div>
                        </div>

                        <div class="section-title" style="margin-top:25px; color:#d35400;">ಶಾಂತಿ ಪರಿಹಾರಗಳು</div>
                        <div style="background:#fff8e1; padding:15px; border-radius:8px; border:1px dashed #ffa726; display:flex; gap:15px; align-items:center;">
                            <div style="font-size:24px;">🕉️</div>
                            <div style="font-size:11px; line-height:1.6; color:#5d4037;">
                                <b>ಜ್ಯೋತಿಷ್ಯ ಸಲಹೆ:</b><br>${pdData.remedy}
                            </div>
                        </div>

                        <div class="footer-num">ಪುಟ ${pageCount}</div>
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

/* --- DATA TABLES (TRANSLATED TO KANNADA) --- */

const SIGN_INFO = [
    null,
    { name: "ಮೇಷ", lord: "ಕುಜ", sym: "ಟಗರು", element: "ಅಗ್ನಿ", gem: "ಹವಳ", day: "ಮಂಗಳವಾರ" },
    { name: "ವೃಷಭ", lord: "ಶುಕ್ರ", sym: "ಎತ್ತು", element: "ಭೂಮಿ", gem: "ವಜ್ರ", day: "ಶುಕ್ರವಾರ" },
    { name: "ಮಿಥುನ", lord: "ಬುಧ", sym: "ಮಿಥುನ", element: "ವಾಯು", gem: "ಪಚ್ಚೆ", day: "ಬುಧವಾರ" },
    { name: "ಕರ್ಕಾಟಕ", lord: "ಚಂದ್ರ", sym: "ಏಡಿ", element: "ಜಲ", gem: "ಮುತ್ತು", day: "ಸೋಮವಾರ" },
    { name: "ಸಿಂಹ", lord: "ಸೂರ್ಯ", sym: "ಸಿಂಹ", element: "ಅಗ್ನಿ", gem: "ಮಾಣಿಕ್ಯ", day: "ಭಾನುವಾರ" },
    { name: "ಕನ್ಯಾ", lord: "ಬುಧ", sym: "ಕನ್ಯೆ", element: "ಭೂಮಿ", gem: "ಪಚ್ಚೆ", day: "ಬುಧವಾರ" },
    { name: "ತುಲಾ", lord: "ಶುಕ್ರ", sym: "ತಕ್ಕಡಿ", element: "ವಾಯು", gem: "ವಜ್ರ", day: "ಶುಕ್ರವಾರ" },
    { name: "ವೃಶ್ಚಿಕ", lord: "ಕುಜ", sym: "ಚೇಳು", element: "ಜಲ", gem: "ಹವಳ", day: "ಮಂಗಳವಾರ" },
    { name: "ಧನು", lord: "ಗುರು", sym: "ಬಿಲ್ಲುಗಾರ", element: "ಅಗ್ನಿ", gem: "ಪುಷ್ಯರಾಗ", day: "ಗುರುವಾರ" },
    { name: "ಮಕರ", lord: "ಶನಿ", sym: "ಮೊಸಳೆ", element: "ಭೂಮಿ", gem: "ನೀಲಂ", day: "ಶನಿವಾರ" },
    { name: "ಕುಂಭ", lord: "ಶನಿ", sym: "ಮಡಿಕೆ", element: "ವಾಯು", gem: "ನೀಲಂ", day: "ಶನಿವಾರ" },
    { name: "ಮೀನ", lord: "ಗುರು", sym: "ಮೀನು", element: "ಜಲ", gem: "ಪುಷ್ಯರಾಗ", day: "ಗುರುವಾರ" }
];

/* --- PLANET REPORT DATA (KANNADA) --- */
const PLANET_REPORT_DATA = {
    "Sun": {
        title: "ಸೂರ್ಯ ಗ್ರಹ ಪ್ರಭಾವ (Sun Analysis)",
        nature: "ಆತ್ಮಕಾರಕ & ಪಿತೃಕಾರಕ (Soul & Father)",
        shloka: "ಜಪಾಕುಸುಮ ಸಂಕಾಶಂ ಕಾಶ್ಯಪೇಯಂ ಮಹಾದ್ಯುತಿಮ್ |<br>ತಮೋಽರಿಂ ಸರ್ವಪಾಪಘ್ನಂ ಪ್ರಣತೋಽಸ್ಮಿ ದಿವಾಕರಮ್ ||",
        speak: "ಜಾತಕ ಚಕ್ರದಲ್ಲಿ ಸೂರ್ಯ 'ರಾಜ'ನಂತೆ. ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿ ರವಿ ಸ್ಥಿತಿಯನ್ನು ನೋಡಿದರೆ, ನಿಮಗೆ ಸಹಜವಾಗಿಯೇ ನಾಯಕತ್ವದ ಗುಣಗಳು ಹೆಚ್ಚಿವೆ. ನೀವು ಯಾರ ಕೆಳಗೂ ಕೆಲಸ ಮಾಡಲು ಇಷ್ಟಪಡುವುದಿಲ್ಲ; ನಾಲ್ಕು ಜನರನ್ನು ಮುನ್ನಡೆಸುವುದೇ ನಿಮಗೆ ತೃಪ್ತಿ. ನಿಮ್ಮಲ್ಲಿ ಆತ್ಮವಿಶ್ವಾಸ (Will Power) ತುಂಬಾ ಬಲವಾಗಿದೆ. ಆದರೆ, ಒಮ್ಮೊಮ್ಮೆ ನಿಮ್ಮ ಮಾತಿನಲ್ಲಿ ಹಠ ಹೆಚ್ಚಾಗಿ ಅದು ಇತರರಿಗೆ ಅಹಂಕಾರದಂತೆ ಕಾಣಬಹುದು.",
        advice: "ನೀವು ತಂದೆಯವರನ್ನು ಗೌರವಿಸುವ ಮೂಲಕ ಮತ್ತು ಸರ್ಕಾರಿ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸುವ ಮೂಲಕ ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಇನ್ನಷ್ಟು ಎತ್ತರಕ್ಕೆ ಬೆಳೆಯುತ್ತೀರಿ. ಕೋಪವನ್ನು ಕಡಿಮೆ ಮಾಡಿಕೊಂಡರೆ ಸಮಾಜದಲ್ಲಿ ಒಳ್ಳೆ ಹೆಸರು ಬರುತ್ತದೆ.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sun_symbol.svg/100px-Sun_symbol.svg.png"
    },
    "Moon": {
        title: "ಚಂದ್ರ ಗ್ರಹ ಪ್ರಭಾವ (Moon Analysis)",
        nature: "ಮನೋಕಾರಕ & ಮಾತೃಕಾರಕ (Mind & Mother)",
        shloka: "ದಧಿಶಂಖ ತುಷಾರಾಭಂ ಕ್ಷೀರೋದಾರ್ಣವ ಸಂಭವಮ್ |<br>ನಮಾಮಿ ಶಶಿನಂ ಸೋಮಂ ಶಂಭೋರ್ಮುಕುಟ ಭೂಷಣಮ್ ||",
        speak: "ಚಂದ್ರ 'ಮನಸ್ಸಿಗೆ' ಅಧಿಪತಿ. ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿ ಚಂದ್ರನ ಪ್ರಭಾವದಿಂದ ನೀವು ತುಂಬಾ ಸೂಕ್ಷ್ಮ ಮನಸ್ಸಿನವರು (Sensitive). ಇತರರ ಕಷ್ಟಗಳನ್ನು ನೋಡಿ ನೀವು ಬೇಗನೆ ಕರಗುತ್ತೀರಿ. ನಿಮ್ಮ ಆಲೋಚನೆಗಳು ಸಮುದ್ರದ ಅಲೆಗಳಂತೆ ಬದಲಾಗುತ್ತಿರುತ್ತವೆ. ನಿಮಗೆ ಪ್ರಯಾಣ ಮಾಡುವುದು, ಹೊಸ ಸ್ಥಳಗಳನ್ನು ನೋಡುವುದು ಇಷ್ಟ. ತಾಯಿಯವರೊಂದಿಗೆ ನಿಮಗೆ ವಿಶೇಷ ಬಾಂಧವ್ಯವಿರುತ್ತದೆ.",
        advice: "ನೀವು ಸಣ್ಣ ವಿಷಯಗಳಿಗೆ ಚಿಂತಿಸುವುದನ್ನು (Overthinking) ಬಿಡಬೇಕು. ಭಾವನಾತ್ಮಕ ನಿರ್ಧಾರಗಳಲ್ಲದೆ, ಬುದ್ಧಿಯಿಂದ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವುದನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿಕೊಳ್ಳಿ.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Moon_Symbol.svg/100px-Moon_Symbol.svg.png"
    },
    "Mars": {
        title: "ಕುಜ ಗ್ರಹ ಪ್ರಭಾವ (Mars Analysis)",
        nature: "ಭ್ರಾತೃಕಾರಕ & ಶಕ್ತಿ (Siblings & Energy)",
        shloka: "ಧರಣೀ ಗರ್ಭ ಸಂಭೂತಂ ವಿದ್ಯುತ್ಕಾಂತಿ ಸಮಪ್ರಭಮ್ |<br>ಕುಮಾರಂ ಶಕ್ತಿಹಸ್ತಂ ತಂ ಮಂಗಳಂ ಪ್ರಣಮಾಮ್ಯಹಮ್ ||",
        speak: "ಕುಜ 'ಸೇನಾಧಿಪತಿ'. ನಿಮ್ಮಲ್ಲಿ ಅದಮ್ಯ ಶಕ್ತಿ (Energy) ಇದೆ. ನೀವು ಯಾವುದೇ ಕೆಲಸ ಪ್ರಾರಂಭಿಸಿದರೆ, ಅದು ಪೂರ್ಣಗೊಳ್ಳುವವರೆಗೂ ವಿಶ್ರಮಿಸುವುದಿಲ್ಲ. ನಿಮಗೆ ಧೈರ್ಯ ಹೆಚ್ಚು, ಭಯ ಕಡಿಮೆ. ಭೂಮಿ, ಆಸ್ತಿ ವ್ಯವಹಾರಗಳು ನಿಮಗೆ ಚೆನ್ನಾಗಿ ಕೂಡಿ ಬರುತ್ತವೆ. ಆದರೆ, ನಿಮ್ಮ ಕೋಪ ಮೂಗಿನ ಮೇಲಿರುತ್ತದೆ. ಆತುರದ ನಿರ್ಧಾರಗಳಿಂದ ಕೆಲವು ಒಳ್ಳೆಯ ಅವಕಾಶಗಳನ್ನು ಕಳೆದುಕೊಳ್ಳುವ ಅಪಾಯವಿದೆ.",
        advice: "ವಾಹನಗಳನ್ನು ಚಲಾಯಿಸುವಾಗ ಜಾಗ್ರತೆ ಅಗತ್ಯ. ನಿಮ್ಮ ಶಕ್ತಿಯನ್ನು ರಚನಾತ್ಮಕ ಕೆಲಸಗಳಿಗೆ (Constructive work) ಬಳಸಿದರೆ ಅದ್ಭುತಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೀರಿ.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mars_symbol.svg/100px-Mars_symbol.svg.png"
    },
    "Mercury": {
        title: "ಬುಧ ಗ್ರಹ ಪ್ರಭಾವ (Mercury Analysis)",
        nature: "ವಿದ್ಯಾಕಾರಕ & ವ್ಯಾಪಾರ (Intellect & Business)",
        shloka: "ಪ್ರಿಯಂಗು ಕಲಿಕಾಶ್ಯಾಮಂ ರೂಪೇಣಾ ಪ್ರತಿಮಂ ಬುಧಮ್ |<br>ಸೌಮ್ಯಂ ಸೌಮ್ಯಗುಣೋಪೇತಂ ತಂ ಬುಧಂ ಪ್ರಣಮಾಮ್ಯಹಮ್ ||",
        speak: "ಬುಧ 'ಯುವರಾಜ'. ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿ ಬುಧ ಬಲದಿಂದಾಗಿ ನಿಮಗೆ ಬುದ್ಧಿವಂತಿಕೆ, ಹಾಸ್ಯ ಪ್ರಜ್ಞೆ (Humor) ಮತ್ತು ವ್ಯಾಪಾರ ಕೌಶಲ್ಯಗಳಿವೆ. ನೀವು ಮಾತುಗಳಿಂದ ಇತರರನ್ನು ಸುಲಭವಾಗಿ ಆಕರ್ಷಿಸುತ್ತೀರಿ. ಗಣಿತ, ಜ್ಯೋತಿಷ್ಯ, ಅಥವಾ ಅಕೌಂಟ್ಸ್ ಕ್ಷೇತ್ರದಲ್ಲಿ ನಿಮಗೆ ಒಳ್ಳೆ ಹಿಡಿತವಿರುತ್ತದೆ. ನೀವು ಯಾವಾಗಲೂ ಯುವಕರಂತೆ, ಉಲ್ಲಾಸವಾಗಿ ಕಾಣಲು ಇಷ್ಟಪಡುತ್ತೀರಿ.",
        advice: "ಒಂದೇ ಸಮಯದಲ್ಲಿ ಅನೇಕ ಕೆಲಸಗಳ ಮೇಲೆ ಗಮನ ಹರಿಸುವುದರಿಂದ ಯಾವುದೂ ಪೂರ್ಣಗೊಳ್ಳದಿರಬಹುದು. ಏಕಾಗ್ರತೆ ಬೆಳೆಸಿಕೊಳ್ಳಿ. ಚರ್ಮದ ಆರೈಕೆಯ ಬಗ್ಗೆ ಗಮನ ಹರಿಸಿ.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mercury_symbol.svg/100px-Mercury_symbol.svg.png"
    },
    "Jupiter": {
        title: "ಗುರು ಗ್ರಹ ಪ್ರಭಾವ (Jupiter Analysis)",
        nature: "ಧನಕಾರಕ & ಪುತ್ರಕಾರಕ (Wealth & Wisdom)",
        shloka: "ದೇವಾನಾಂ ಚ ಋಷೀಣಾಂ ಚ ಗುರುಂ ಕಾಂಚನ ಸನ್ನಿಭಮ್ |<br>ಬುದ್ಧಿಭೂತಂ ತ್ರಿಲೋಕೇಶಂ ತಂ ನಮಾಮಿ ಬೃಹಸ್ಪತಿಮ್ ||",
        speak: "ಗುರು 'ಮಂತ್ರಿ' ಮತ್ತು ಸಲಹೆಗಾರ. ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿ ಗುರುವಿನ ಅನುಗ್ರಹ ಇರುವುದರಿಂದ ನಿಮಗೆ ಸಮಾಜದಲ್ಲಿ ಗೌರವ ಮರ್ಯಾದೆಗಳು ದೊರೆಯುತ್ತವೆ. ನಿಮಗೆ ದೈವ ಭಕ್ತಿ, ಸಂಪ್ರದಾಯಗಳೆಂದರೆ ಗೌರವ. ಕಷ್ಟಕಾಲದಲ್ಲೂ ನಿಮಗೆ ಯಾವುದೋ ರೂಪದಲ್ಲಿ ದೈವಿಕ ಸಹಾಯ ಸಿಗುತ್ತದೆ. ನೀವು ಇತರರಿಗೆ ಒಳ್ಳೆಯ ಸಲಹೆಗಳನ್ನು ನೀಡಬಲ್ಲಿರಿ. ಹಣಕ್ಕೆ ಕೊರತೆ ಇರುವುದಿಲ್ಲ.",
        advice: "ಅತಿ ಒಳ್ಳೆಯತನ ಕೆಲಸಕ್ಕೆ ಬರುವುದಿಲ್ಲ. ಎಲ್ಲರನ್ನೂ ಕುರುಡಾಗಿ ನಂಬಬೇಡಿ. ಸಿಹಿ ತಿಂಡಿಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಿ, ಲಿವರ್ (Liver) ಆರೋಗ್ಯವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jupiter_symbol.svg/100px-Jupiter_symbol.svg.png"
    },
    "Venus": {
        title: "ಶುಕ್ರ ಗ್ರಹ ಪ್ರಭಾವ (Venus Analysis)",
        nature: "ಕಳತ್ರಕಾರಕ & ಭೋಗ (Spouse & Luxury)",
        shloka: "ಹಿಮಕುಂದ ಮೃಣಾಲಾಭಂ ದೈತ್ಯಾನಾಂ ಪರಮಂ ಗುರುಮ್ |<br>ಸರ್ವಶಾಸ್ತ್ರ ಪ್ರವಕ್ತಾರಂ ಭಾರ್ಗವಂ ಪ್ರಣಮಾಮ್ಯಹಮ್ ||",
        speak: "ಶುಕ್ರ 'ಭೋಗಕಾರಕ'. ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಸೌಕರ್ಯಗಳಿಗೆ, ವಿಲಾಸಗಳಿಗೆ ಪ್ರಾಮುಖ್ಯತೆ ನೀಡುತ್ತೀರಿ. ನೀವು ಸುಂದರವಾಗಿರುವುದಲ್ಲದೆ, ನಿಮ್ಮ ಸುತ್ತಮುತ್ತಲಿನ ವಾತಾವರಣವೂ ಸುಂದರವಾಗಿರಬೇಕೆಂದು ಬಯಸುತ್ತೀರಿ. ಕಲೆ, ಸಂಗೀತ, ಸಿನಿಮಾ ಅಥವಾ ಫ್ಯಾಷನ್ ಬಗ್ಗೆ ನಿಮಗೆ ಆಸಕ್ತಿ ಇರುತ್ತದೆ. ವೈವಾಹಿಕ ಜೀವನ ಮತ್ತು ಪ್ರೇಮ ವ್ಯವಹಾರಗಳು ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸುತ್ತವೆ.",
        advice: "ವಿಲಾಸಗಳಿಗೆ ಮಿತಿಮೀರಿ ಖರ್ಚು ಮಾಡಬೇಡಿ. ವಿರುದ್ಧ ಲಿಂಗದವರ ಬಗ್ಗೆ ಗೌರವದಿಂದ ಇರುವುದರಿಂದ ನಿಮ್ಮ ಶುಕ್ರ ಬಲ ಹೆಚ್ಚುತ್ತದೆ.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Venus_symbol.svg/100px-Venus_symbol.svg.png"
    },
    "Saturn": {
        title: "ಶನಿ ಗ್ರಹ ಪ್ರಭಾವ (Saturn Analysis)",
        nature: "ಆಯುಷ್ಕಾರಕ & ಕರ್ಮ (Karma & Longevity)",
        shloka: "ನೀಲಾಂಜನ ಸಮಾಭಾಸಂ ರವಿಪುತ್ರಂ ಯಮಾಗ್ರಜಮ್ |<br>ಛಾಯಾಮಾರ್ತಾಂಡ ಸಂಭೂತಂ ತಂ ನಮಾಮಿ ಶನೈಶ್ಚರಮ್ ||",
        speak: "ಶನಿ 'ನ್ಯಾಯಾಧೀಶ'. ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಯಾವುದೂ ಸುಲಭವಾಗಿ ಬರುವುದಿಲ್ಲ, ಆದರೆ ಕಷ್ಟಪಟ್ಟರೆ ಶಾಶ್ವತವಾಗಿ ಉಳಿಯುವ ಫಲಿತಾಂಶಗಳು ಸಿಗುತ್ತವೆ. ನೀವು ತುಂಬಾ ಪ್ರಾಯೋಗಿಕವಾಗಿ (Practical) ಯೋಚಿಸುತ್ತೀರಿ. ಸೋಮಾರಿತನ ನಿಮ್ಮ ಮುಖ್ಯ ಶತ್ರು. ಶನಿ ಪ್ರಭಾವದಿಂದ ನೀವು ಏಕಾಂತವಾಗಿರಲು ಅಥವಾ ಆಳವಾಗಿ ಯೋಚಿಸಲು ಇಷ್ಟಪಡುತ್ತೀರಿ. ನೀವು ಬಡವರಿಗೆ, ಕೆಲಸಗಾರರಿಗೆ ಸಹಾಯ ಮಾಡುವುದರಿಂದ ಜೀವನದಲ್ಲಿ ಬೆಳೆಯುತ್ತೀರಿ.",
        advice: "ಕೆಲಸವನ್ನು ಮುಂದೂಡುವ ಅಭ್ಯಾಸವನ್ನು (Procrastination) ಬಿಡಿ. ನ್ಯಾಯಬದ್ಧವಾಗಿದ್ದರೆ ಶನಿ ನಿಮ್ಮನ್ನು ಉನ್ನತ ಶಿಖರಗಳಿಗೆ ಏರಿಸುತ್ತಾನೆ.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Saturn_symbol.svg/100px-Saturn_symbol.svg.png"
    },
    "Rahu": {
        title: "ರಾಹು ಗ್ರಹ ಪ್ರಭಾವ (Rahu Analysis)",
        nature: "ಮಾಯೆ & ವಿದೇಶಿ ಯಾನ (Illusion & Foreign)",
        shloka: "ಅರ್ಧಕಾಯಂ ಮಹಾವೀರ್ಯಂ ಚಂದ್ರಾದಿತ್ಯ ವಿಮರ್ದನಮ್ |<br>ಸಿಂಹಿಕಾ ಗರ್ಭ ಸಂಭೂತಂ ತಂ ರಾಹುಂ ಪ್ರಣಮಾಮ್ಯಹಮ್ ||",
        speak: "ರಾಹು 'ಛಾಯಾ ಗ್ರಹ'. ಇದು ನಿಮಗೆ ಮಿತಿಯಿಲ್ಲದ ಆಸೆಗಳನ್ನು (Ambition) ನೀಡುತ್ತದೆ. ನೀವು ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನಗಳಿಗೆ ಭಿನ್ನವಾಗಿ ಯೋಚಿಸುತ್ತೀರಿ. ವಿದೇಶಗಳಿಗೆ ಹೋಗಬೇಕೆಂಬ ಆಸೆ ಅಥವಾ ಟೆಕ್ನಾಲಜಿ ಕ್ಷೇತ್ರದಲ್ಲಿ ಬೆಳೆಯಬೇಕೆಂಬ ತುಡಿತ ನಿಮಗೆ ಇರುತ್ತದೆ. ಒಮ್ಮೊಮ್ಮೆ ನಿಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ ಇಲ್ಲಸಲ್ಲದ ಭಯಗಳು ಅಥವಾ ಭ್ರಮೆಗಳು ಉಂಟಾಗುತ್ತವೆ. ಆಕಸ್ಮಿಕ ಲಾಭಗಳು ಅಥವಾ ನಷ್ಟಗಳು ರಾಹು ಲಕ್ಷಣ.",
        advice: "ಅಡ್ಡದಾರಿ ಹಿಡಿದು ಯಶಸ್ಸು ಸಾಧಿಸಲು ಬಯಸಬೇಡಿ; ಅದು ತಾತ್ಕಾಲಿಕ. ದುರ್ಗಾ ದೇವಿಯ ಆರಾಧನೆ ನಿಮಗೆ ಒಳ್ಳೆಯದು.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Rahu_symbol.svg/100px-Rahu_symbol.svg.png"
    },
    "Ketu": {
        title: "ಕೇತು ಗ್ರಹ ಪ್ರಭಾವ (Ketu Analysis)",
        nature: "ಮೋಕ್ಷಕಾರಕ & ಜ್ಞಾನ (Detachment & Wisdom)",
        shloka: "ಪಲಾಶ ಪುಷ್ಪ ಸಂಕಾಶಂ ತಾರಕಾಗ್ರಹ ಮಸ್ತಕಮ್ |<br>ರೌದ್ರಂ ರೌದ್ರಾತ್ಮಕಂ ಘೋರಂ ತಂ ಕೇತುಂ ಪ್ರಣಮಾಮ್ಯಹಮ್ ||",
        speak: "ಕೇತು 'ಜ್ಞಾನಕಾರಕ'. ನಿಮ್ಮಲ್ಲಿ ಆಧ್ಯಾತ್ಮಿಕ ಚಿಂತನೆ ಹೆಚ್ಚಾಗಿರುತ್ತದೆ. ಕೆಲವೊಮ್ಮೆ ನಿಮಗೆ ಈ ಪ್ರಪಂಚದ ಮೇಲೆ, ಸಂಬಂಧಗಳ ಮೇಲೆ ವೈರಾಗ್ಯ ಉಂಟಾಗುತ್ತದೆ. ನಿಮಗೆ ಅಂತಃಪ್ರಜ್ಞೆ (Intuition) ತುಂಬಾ ಬಲವಾಗಿರುತ್ತದೆ; ನಡೆಯುವುದನ್ನು ಮುಂಚಿತವಾಗಿಯೇ ಗ್ರಹಿಸಬಲ್ಲಿರಿ. ನೀವು ಸಂಶೋಧನೆ, ಮಂತ್ರ ತಂತ್ರಗಳು ಅಥವಾ ಆಧ್ಯಾತ್ಮಿಕ ರಂಗಗಳಲ್ಲಿ ಬೆಳೆಯುತ್ತೀರಿ.",
        advice: "ಗತಿಸಿದ ವಿಷಯಗಳ ಬಗ್ಗೆ ಹೆಚ್ಚಾಗಿ ಯೋಚಿಸಬೇಡಿ. ಗಣಪತಿ ಆರಾಧನೆಯಿಂದ ನಿಮ್ಮ ಮನಸ್ಸಿನ ಗೊಂದಲಗಳು ದೂರವಾಗುತ್ತವೆ.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ketu_symbol.svg/100px-Ketu_symbol.svg.png"
    },

    "Ascendant": {
        title: "ಲಗ್ನ ವಿಶ್ಲೇಷಣೆ",
        nature: "ಲಗ್ನ (Self)",
        shloka: "",
        speak: "",
        advice: "",
        img: ""
    }
};

/* --- PREDICTION DATABASE (KANNADA) --- */
const PREDICTION_DB = {
    "Sun": {
        theme: "ಆತ್ಮವಿಶ್ವಾಸ & ಅಧಿಕಾರ",
        event: "ಸೂರ್ಯ ಅಂದರೆ ರಾಜ. ಈ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮಲ್ಲಿ ಆತ್ಮವಿಶ್ವಾಸ ಹೆಚ್ಚಾಗುತ್ತದೆ. ನಾಲ್ಕು ಜನರಲ್ಲಿ ನಿಮಗೆ ಗುರುತಿಸುವಿಕೆ ಸಿಗುವ ಸಮಯ ಇದು. ಸರ್ಕಾರಿ ಕೆಲಸಗಳಿಗೆ ಅಥವಾ ಅಧಿಕಾರಿಗಳನ್ನು ಭೇಟಿಯಾಗಲು ಇದು ತುಂಬಾ ಸೂಕ್ತ ಸಮಯ. ಆದರೆ, ನಿಮ್ಮ ಮಾತಿನಲ್ಲಿ ಸ್ವಲ್ಪ ಅಹಂಕಾರ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಅಪಾಯವಿದೆ, ಎಚ್ಚರ.",
        career: "ಉದ್ಯೋಗದಲ್ಲಿ ಬಡ್ತಿ ಅಥವಾ ಹೊಸ ಜವಾಬ್ದಾರಿಗಳನ್ನು ಸ್ವೀಕರಿಸುವ ಅವಕಾಶವಿದೆ. ನಿಮ್ಮ ನಾಯಕತ್ವದ ಗುಣಗಳಿಗೆ ಇದು ಪರೀಕ್ಷಾ ಸಮಯ. ನೀವು ಹೇಳಿದ ಮಾತಿಗೆ ಬೆಲೆ ಬರುತ್ತದೆ.",
        family: "ತಂದೆಯವರ ಆರೋಗ್ಯದ ಬಗ್ಗೆ ಗಮನ ಹರಿಸಿ. ದೇಹದಲ್ಲಿ ಉಷ್ಣತೆ (Heat) ಹೆಚ್ಚುವ ಸಾಧ್ಯತೆಯಿದೆ, ಆದ್ದರಿಂದ ಕಣ್ಣು ಉರಿ ಅಥವಾ ತಲೆನೋವು ಬರಬಹುದು. ನೀರು ಹೆಚ್ಚಾಗಿ ಕುಡಿಯಿರಿ.",
        remedy: "ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ ಸೂರ್ಯ ನಮಸ್ಕಾರ ಮಾಡಿ. 'ಆದಿತ್ಯ ಹೃದಯಂ' ಕೇಳುವುದರಿಂದ ನಿಮ್ಮ ಅಡೆತಡೆಗಳು ನಿವಾರಣೆಯಾಗುತ್ತವೆ. ಬಡವರಿಗೆ ಗೋಧಿ ದಾನ ಮಾಡಿ.",
        icon: "👑",
        color: "#ff9800"
    },
    "Moon": {
        theme: "ಮಾನಸಿಕ ಸ್ಥಿತಿ & ಪ್ರಯಾಣಗಳು",
        event: "ಚಂದ್ರ ಮನಸ್ಸನ್ನು ಆಳುತ್ತಾನೆ. ಈ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಮನಸ್ಸು ಒಂದೆಡೆ ನಿಲ್ಲುವುದಿಲ್ಲ. ಸಣ್ಣ ವಿಷಯಕ್ಕೂ ಹೆಚ್ಚಾಗಿ ಯೋಚಿಸುವ ಸಾಧ್ಯತೆಯಿದೆ. ನಿಮಗೆ ಪ್ರಯಾಣ ಮಾಡುವ ಯೋಗ ಕಾಣಿಸುತ್ತಿದೆ. ಸೃಜನಶೀಲ ರಂಗದಲ್ಲಿರುವವರಿಗೆ ಇದು ಅದ್ಭುತ ಸಮಯ.",
        career: "ವೃತ್ತಿಯಲ್ಲಿ ಬದಲಾವಣೆಗಳನ್ನು ಬಯಸುತ್ತೀರಿ. ಕೆಲಸದ ಒತ್ತಡದಿಂದ ಮಾನಸಿಕ ಆಯಾಸ ಉಂಟಾಗಬಹುದು. ನಿಮ್ಮ ಸಹೋದ್ಯೋಗಿಗಳೊಂದಿಗೆ ಭಾವೋದ್ವೇಗಕ್ಕೆ ಒಳಗಾಗದೆ ಕೆಲಸದ ಮೇಲೆ ಗಮನ ಹರಿಸಿ.",
        family: "ತಾಯಿಯವರ ಆರೋಗ್ಯದ ಬಗ್ಗೆ ಜಾಗ್ರತೆ ವಹಿಸಿ. ಶೀತ, ಕೆಮ್ಮು ಅಥವಾ ನೀರಿನ ಸಂಬಂಧಿತ ಸಮಸ್ಯೆಗಳು ಬರಬಹುದು. ರಾತ್ರಿ ವೇಳೆ ಒಂಟಿಯಾಗಿ ಪ್ರಯಾಣಿಸಬೇಡಿ.",
        remedy: "ಸೋಮವಾರದಂದು ಶಿವಾಲಯದಲ್ಲಿ ಹಾಲು ಅರ್ಪಿಸಿ. ಬೆಳ್ಳಿ ಲೋಟದಲ್ಲಿ ನೀರು ಕುಡಿಯುವುದರಿಂದ ಮನಸ್ಸು ಶಾಂತವಾಗಿರುತ್ತದೆ.",
        icon: "🌙",
        color: "#2196f3"
    },
    "Mars": {
        theme: "ಶಕ್ತಿ & ಧೈರ್ಯ",
        event: "ಕುಜ ನಿಮಗೆ ಅಪಾರ ಶಕ್ತಿಯನ್ನು ನೀಡುತ್ತಾನೆ. ನೀವು ಯಾವುದೇ ಕೆಲಸವನ್ನು ಧೈರ್ಯವಾಗಿ ಪ್ರಾರಂಭಿಸುತ್ತೀರಿ. ಆದರೆ, ನಿಮ್ಮ ಕೋಪವನ್ನು ಹತೋಟಿಯಲ್ಲಿಟ್ಟುಕೊಳ್ಳಬೇಕು. ಆತುರದ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಂಡರೆ ಅದು ಜಗಳಗಳಿಗೆ ದಾರಿ ಮಾಡಿಕೊಡಬಹುದು. ಭೂಮಿ ಅಥವಾ ಆಸ್ತಿ ಖರೀದಿಸುವ ಪ್ರಯತ್ನಗಳು ಫಲಿಸುತ್ತವೆ.",
        career: "ತಾಂತ್ರಿಕ, ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಅಥವಾ ಪೊಲೀಸ್ ರಂಗದಲ್ಲಿರುವವರಿಗೆ ಇದು ರಾಜಯೋಗ. ನಿಮ್ಮ ಶತ್ರುಗಳ ಮೇಲೆ ನೀವು ಜಯ ಸಾಧಿಸುತ್ತೀರಿ. ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳಿಗೆ ಇದು ಒಳ್ಳೆ ಸಮಯ.",
        family: "ಸಹೋದರರೊಂದಿಗೆ ಸಣ್ಣಪುಟ್ಟ ಜಗಳಗಳು ಬರಬಹುದು. ರಕ್ತದೊತ್ತಡ (BP) ಅಥವಾ ಸಣ್ಣಪುಟ್ಟ ಗಾಯಗಳಾಗುವ ಸೂಚನೆಗಳಿವೆ. ವಾಹನ ಚಲಾಯಿಸುವಾಗ ಜಾಗ್ರತೆ.",
        remedy: "ಮಂಗಳವಾರದಂದು ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯನ್ನು ಅಥವಾ ಹನುಮಂತನನ್ನು ಪೂಜಿಸಿ. ಕೆಂಪು ತೊಗರಿಬೇಳೆಯನ್ನು ದಾನ ಮಾಡಿ.",
        icon: "⚔️",
        color: "#d32f2f"
    },
    "Mercury": {
        theme: "ಬುದ್ಧಿವಂತಿಕೆ & ವ್ಯಾಪಾರ",
        event: "ಇದು ನಿಮ್ಮ ಬುದ್ಧಿ ಬಲವನ್ನು ತೋರಿಸಬೇಕಾದ ಸಮಯ. ನೀವು ತೆಗೆದುಕೊಳ್ಳುವ ನಿರ್ಧಾರಗಳು ತುಂಬಾ ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಕೂಡಿರುತ್ತವೆ. ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮತ್ತು ವ್ಯಾಪಾರಿಗಳಿಗೆ ಇದು ತುಂಬಾ ಅನುಕೂಲಕರ ಕಾಲ. ಹೊಸ ವಿಷಯಗಳನ್ನು ಕಲಿಯಬೇಕೆಂಬ ಆಸಕ್ತಿ ಹೆಚ್ಚುತ್ತದೆ.",
        career: "ನಿಮ್ಮ ಸಂವಹನ ಕೌಶಲ್ಯಗಳು ಅದ್ಭುತವಾಗಿರುತ್ತವೆ. ವ್ಯಾಪಾರ ಒಪ್ಪಂದಗಳನ್ನು (Deals) ಮಾಡಿಕೊಳ್ಳಲು ಇದು ಸರಿಯಾದ ಸಮಯ. ಅಕೌಂಟ್ಸ್ ಮತ್ತು ಮೀಡಿಯಾ ರಂಗದವರಿಗೆ ಲಾಭಗಳಿರುತ್ತವೆ.",
        family: "ಬಂಧುಗಳ ಆಗಮನದಿಂದ ಮನೆಯಲ್ಲಿ ಸಂಭ್ರಮ ನೆಲೆಸುತ್ತದೆ. ಚರ್ಮ ಸಂಬಂಧಿತ ಅಲರ್ಜಿಗಳು ಬರಬಹುದು. ನರಮಂಡಲ ಬಲಹೀನವಾಗದಂತೆ ನೋಡಿಕೊಳ್ಳಿ.",
        remedy: "ಬುಧವಾರದಂದು ಹಸುಗಳಿಗೆ ಹಸಿರು ಹುಲ್ಲು ಅಥವಾ ಪಾಲಕ್ ಸೊಪ್ಪು ತಿನ್ನಿಸಿ. ವಿಷ್ಣು ಸಹಸ್ರನಾಮ ಪಠಿಸಿ.",
        icon: "📚",
        color: "#388e3c"
    },
    "Jupiter": {
        theme: "ಜ್ಞಾನ & ಸಂಪತ್ತು",
        event: "ಗುರುವಿನ ಅನುಗ್ರಹದಿಂದ ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಒಂದು ಒಳ್ಳೆ ಬದಲಾವಣೆ ಬರಲಿದೆ. ಹಿರಿಯರ ಆಶೀರ್ವಾದ ನಿಮಗೆ ಸಿಗುತ್ತದೆ. ದೈವ ಚಿಂತನೆ ಹೆಚ್ಚುತ್ತದೆ. ಹಿಂದೆ ನಿಂತುಹೋದ ಕೆಲಸಗಳು ಈಗ ಪೂರ್ಣಗೊಳ್ಳುತ್ತವೆ. ಇದು ತುಂಬಾ ಶುಭಪ್ರದವಾದ ಸಮಯ.",
        career: "ಉದ್ಯೋಗದಲ್ಲಿ ಬಡ್ತಿ ಅಥವಾ ಸಂಬಳ ಹೆಚ್ಚುವ ಸಾಧ್ಯತೆಯಿದೆ. ಶಿಕ್ಷಕರು, ವಕೀಲರು ಮತ್ತು ಸಲಹೆಗಾರರಿಗೆ ಇದು ಸುವರ್ಣ ಕಾಲ. ಧನ ಲಾಭ ಕಾಣಿಸುತ್ತಿದೆ.",
        family: "ಸಂತಾನವಿಲ್ಲದವರಿಗೆ ಶುಭ ಸುದ್ದಿ ಕೇಳುವ ಅವಕಾಶವಿದೆ. ಸಿಹಿ ತಿಂಡಿಗಳನ್ನು ಹೆಚ್ಚಾಗಿ ತಿನ್ನುವುದನ್ನು ಕಡಿಮೆ ಮಾಡಿ, ತೂಕ ಹೆಚ್ಚುವ ಸಾಧ್ಯತೆಯಿದೆ.",
        remedy: "ಗುರುವಾರದಂದು ಸಾಯಿಬಾಬಾ ಅಥವಾ ದತ್ತಾತ್ರೇಯ ಸ್ವಾಮಿಯನ್ನು ದರ್ಶಿಸಿಕೊಳ್ಳಿ. ಹಣೆಯ ಮೇಲೆ ಕೇಸರಿ ತಿಲಕ ಧರಿಸಿ.",
        icon: "✨",
        color: "#fbc02d"
    },
    "Venus": {
        theme: "ವಿಲಾಸ & ಆನಂದ",
        event: "ಶುಕ್ರ ನಿಮಗೆ ಭೋಗಭಾಗ್ಯಗಳನ್ನು ನೀಡುತ್ತಾನೆ. ನೀವು ಹೊಸ ಬಟ್ಟೆಗಳು, ಆಭರಣಗಳು ಅಥವಾ ವಾಹನ ಖರೀದಿಸುವ ಆಲೋಚನೆಯಲ್ಲಿ ಇರುತ್ತೀರಿ. ನಿಮ್ಮ ಮುಖದಲ್ಲಿ ಕಳೆ (Tejas) ಹೆಚ್ಚುತ್ತದೆ. ವಿರುದ್ಧ ಲಿಂಗದವರಿಂದ ಸಹಕಾರ ಲಭಿಸುತ್ತದೆ.",
        career: "ಕಲೆ, ಸಿನಿಮಾ, ಫ್ಯಾಷನ್ ಮತ್ತು ಡಿಸೈನಿಂಗ್ ರಂಗದಲ್ಲಿರುವವರಿಗೆ ಅದ್ಭುತವಾಗಿರುತ್ತದೆ. ಆಫೀಸಿನಲ್ಲಿ ವಾತಾವರಣ ತುಂಬಾ ಉಲ್ಲಾಸವಾಗಿರುತ್ತದೆ.",
        family: "ಪತಿ-ಪತ್ನಿಯರ ನಡುವೆ ಅನ್ಯೋನ್ಯತೆ ಹೆಚ್ಚುತ್ತದೆ. ಮದುವೆಯಾಗದವರಿಗೆ ವಿವಾಹ ಸಂಬಂಧಗಳು ಕೂಡಿಬರುತ್ತವೆ. ಸಕ್ಕರೆ ಕಾಯಿಲೆ (Diabetes) ಇರುವವರು ಜಾಗ್ರತೆಯಾಗಿರಬೇಕು.",
        remedy: "ಶುಕ್ರವಾರದಂದು ಲಕ್ಷ್ಮೀ ದೇವಿಗೆ ಪೂಜೆ ಮಾಡಿ. ಬಡ ಸುಮಂಗಲಿಯರಿಗೆ ಅರಿಶಿನ, ಕುಂಕುಮ ನೀಡಿ.",
        icon: "💎",
        color: "#c2185b"
    },
    "Saturn": {
        theme: "ಕರ್ಮ & ಕಠಿಣ ಪರಿಶ್ರಮ",
        event: "ಶನಿ ದೇವರು ನಿಮಗೆ ತಾಳ್ಮೆಯನ್ನು ಕಲಿಸುತ್ತಾನೆ. ಯಾವ ಕೆಲಸವೂ ಸುಲಭವಾಗಿ ಆಗುವುದಿಲ್ಲ, ಕಠಿಣ ಪರಿಶ್ರಮದ ನಂತರವೇ ಫಲಿತಾಂಶ ಸಿಗುತ್ತದೆ. ಇದು ಸೋಮಾರಿತನಕ್ಕೆ ಸಮಯವಲ್ಲ. ನೀವು ಎಷ್ಟು ಕಷ್ಟಪಡುತ್ತೀರೋ ಅಷ್ಟು ದೊಡ್ಡ ಫಲಿತಾಂಶ ಇರುತ್ತದೆ.",
        career: "ಕೆಲಸದ ಹೊರೆ ಹೆಚ್ಚುತ್ತದೆ. ಅಧಿಕಾರಿಗಳಿಂದ ಒತ್ತಡ ಇರಬಹುದು. ಆದರೆ ಭಯಪಡಬೇಡಿ, ಇದು ನಿಮ್ಮ ಭವಿಷ್ಯಕ್ಕೆ ಬುನಾದಿ. ಕಾನೂನು ಬಾಹಿರ ಕೆಲಸಗಳಿಂದ ದೂರವಿರಿ.",
        family: "ಕಾಲು ನೋವು ಅಥವಾ ಕೀಲು ವಾತ ತೊಂದರೆ ಕೊಡಬಹುದು. ಹಳೆಯ ಸ್ನೇಹಿತರು ದೂರವಾಗುವ ಸಾಧ್ಯತೆಯಿದೆ. ವೃದ್ಧರಿಗೆ ಸೇವೆ ಮಾಡಿ.",
        remedy: "ಶನಿವಾರದಂದು ಅರಳಿ ಮರದ ಕೆಳಗೆ ಎಳ್ಳೆಣ್ಣೆ ದೀಪ ಹಚ್ಚಿ. ಅಂಗವಿಕಲರಿಗೆ ಅಥವಾ ಕೆಲಸಗಾರರಿಗೆ ಸಹಾಯ ಮಾಡಿ.",
        icon: "⚖️",
        color: "#455a64"
    },
    "Rahu": {
        theme: "ಭ್ರಮೆ & ಆಕಸ್ಮಿಕ ಬದಲಾವಣೆಗಳು",
        event: "ರಾಹು ಎಂದರೆ ಮಾಯೆ. ಈ ಸಮಯದಲ್ಲಿ ನಿಮಗೆ ಇಲ್ಲದಿರುವುದು ಇದ್ದಂತೆ, ಇರುವುದು ಇಲ್ಲದಂತೆ ಅನ್ನಿಸುತ್ತದೆ. ಆಕಸ್ಮಿಕ ಪ್ರಯಾಣಗಳು ಅಥವಾ ಊಹಿಸದ ಖರ್ಚುಗಳು ಬರಬಹುದು. ಹೊಸ ವ್ಯಕ್ತಿಗಳನ್ನು ಕುರುಡಾಗಿ ನಂಬಬೇಡಿ. ವಿದೇಶಿ ಪ್ರಯತ್ನ ಮಾಡುವವರಿಗೆ ಇದು ಒಳ್ಳೆ ಸಮಯ.",
        career: "ರಾಜಕೀಯದಲ್ಲಿ ಅಥವಾ ಟೆಕ್ನಾಲಜಿ ರಂಗದಲ್ಲಿರುವವರಿಗೆ ಆಕಸ್ಮಿಕ ಹುದ್ದೆಗಳು ಬರಬಹುದು. ಆದರೆ ಕುತಂತ್ರ ಮಾಡುವವರು ನಿಮ್ಮ ಸುತ್ತಲೂ ಇರುತ್ತಾರೆ, ಎಚ್ಚರ.",
        family: "ನಿದ್ರಾಹೀನತೆ ಅಥವಾ ತಿಳಿಯದ ಭಯ (Anxiety) ನಿಮ್ಮನ್ನು ಕಾಡಬಹುದು. ಆಹಾರದ ವಿಷಯದಲ್ಲಿ ಜಾಗ್ರತೆ, ಗ್ಯಾಸ್ಟ್ರಿಕ್ ಸಮಸ್ಯೆಗಳು ಬರಬಹುದು.",
        remedy: "ದುರ್ಗಾ ದೇವಿಯನ್ನು ಪೂಜಿಸಿ. ಪಕ್ಷಿಗಳಿಗೆ ಅಥವಾ ಬೀದಿ ನಾಯಿಗಳಿಗೆ ಆಹಾರ ನೀಡಿ. 'ಓಂ ದುಂ ದುರ್ಗಾಯೈ ನಮಃ' ಎಂದು ಜಪಿಸಿ.",
        icon: "🌪️",
        color: "#5d4037"
    },
    "Ketu": {
        theme: "ವೈರಾಗ್ಯ & ಆಧ್ಯಾತ್ಮಿಕತೆ",
        event: "ಕೇತು ನಿಮಗೆ ಪ್ರಾಪಂಚಿಕ ವಿಷಯಗಳ ಮೇಲೆ ಆಸಕ್ತಿಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತಾನೆ. ಒಂಟಿಯಾಗಿ ಕಳೆಯಬೇಕು ಅನ್ನಿಸುತ್ತದೆ. ನಿಮಗೆ ಅಂತಃಪ್ರಜ್ಞೆ (Intuition) ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಇದು ದೈವ ಕಾರ್ಯಗಳಿಗೆ, ಯೋಗ ಮತ್ತು ಧ್ಯಾನಕ್ಕೆ ತುಂಬಾ ಒಳ್ಳೆ ಸಮಯ.",
        career: "ಉದ್ಯೋಗ ಬಿಡಬೇಕೆಂಬ ಆಲೋಚನೆ ಬರಬಹುದು. ನಿಮ್ಮ ಕೆಲಸವನ್ನು ಯಾರೂ ಗುರುತಿಸುತ್ತಿಲ್ಲ ಎಂದು ಬೇಸರ ಪಡಬೇಡಿ. ರಿಸರ್ಚ್ ಮಾಡುವವರಿಗೆ ಇದು ಒಳ್ಳೆ ಕಾಲ.",
        family: "ದೇಹದಲ್ಲಿ ಆಯಾಸ, ನೋವುಗಳು ಅಥವಾ ಚರ್ಮ ಸಮಸ್ಯೆಗಳು ಬರಬಹುದು. ಯಾರೊಂದಿಗೂ ಅನಗತ್ಯ ವಾದಗಳನ್ನು ಮಾಡಬೇಡಿ.",
        remedy: "ಗಣಪತಿಯನ್ನು ಪೂಜಿಸಿ. ಆಶ್ರಮಗಳಿಗೆ ಅಥವಾ ದೇವಸ್ಥಾನಗಳಿಗೆ ದೇಣಿಗೆ ನೀಡಿ. ನಾಯಿಗಳಿಗೆ ಆಹಾರ ನೀಡುವುದು ಒಳ್ಳೆಯದು.",
        icon: "🚩",
        color: "#616161"
    }
};

/* -------------------------------------------------------------------------- */
/* LOGIC HELPERS (UNCHANGED LOGIC)                                            */
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
        let pNameKa = PLANET_KA[p.name] ? PLANET_KA[p.name].substr(0, 2) : p.name.substr(0, 2);
        return { n: pNameKa, s: vSign };
    });
}

function renderChart(divId, planets) {
    const div = document.getElementById(divId); if (!div) return; div.innerHTML = '';
    const boxOrder = [{s:12}, {s:1}, {s:2}, {s:3}, {s:11}, {s:0}, {s:0}, {s:4}, {s:10}, {s:0}, {s:0}, {s:5}, {s:9}, {s:8}, {s:7}, {s:6}];
    boxOrder.forEach(b => {
        const cell = document.createElement('div'); cell.className = 'house';
        if (b.s !== 0) {
            cell.innerHTML = `<div class="sign-label">${SIGNS_KA[b.s]}</div>`;
            planets.forEach(pl => { if (pl.s === b.s) cell.innerHTML += `<div class="planet-text">${pl.n}</div>`; });
        } else { cell.style.background = "transparent"; cell.style.border = "none"; }
        div.appendChild(cell);
    });
}

function getPlanet(name) { return globalPlanets.find(p => p.name === name) || { lon: 0 }; }
function getSign(lon) { return Math.floor(lon / 30) + 1; }
function formatDeg(lon) { return `${Math.floor(lon % 30)}° ${Math.round(((lon % 30) % 1) * 60)}'`; }
function formatFullDeg(lon) { let d=Math.floor(lon); let m=Math.floor((lon-d)*60); let s=Math.round(((lon-d)*60-m)*60); return `${d}:${m}:${s}`; }
function getNakshatra(lon) { 
    let idx = Math.floor(lon / 13.333333); 
    let charan = Math.floor((lon % 13.333333) / 3.333333) + 1; 
    let name = (typeof NAKSHATRAS_KA !== 'undefined') ? NAKSHATRAS_KA[idx] : "Unknown";
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

// --- DOSHA CHECKS (Logic Kept, Return Strings Matched to Telugu Logic but Translated to English for Code Consistency if needed, 
// OR purely Kannada if we assume full translation. Since previous code used mixed return logic, I will keep logic intact.) ---

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

function getSadeSatiStatus() {
    const now = new Date();
    let currentSaturnSign = 11; // Aquarius (approx)
    if (now.getFullYear() >= 2025 && now.getMonth() > 2) currentSaturnSign = 12; // Pisces
    const moon = getPlanet("Moon").lon;
    const moonSign = Math.floor(moon / 30) + 1;
    let diff = (currentSaturnSign - moonSign + 12) % 12;
    let isSadeSati = (diff === 0 || diff === 1 || diff === 11);
    // Returning English logic strings as they are used for internal flags or simple display.
    // The main display text is handled in createSadeSatiPage using these flags.
    return { present: isSadeSati, moonSign: SIGNS_KA[moonSign], saturnSign: SIGNS_KA[currentSaturnSign], statusText: isSadeSati ? "Sade Sati is Present" : "No Sade Sati", desc: isSadeSati ? "You are currently undergoing Sade Sati." : "Currently you are free from Sade Sati." };
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
            rows.push({ moonSign: SIGNS_KA[moonSignIdx], satSign: SIGNS_KA[satSignIdx], isRetro: Math.random() > 0.8 ? "true" : "false", phase: p.type, date: "01-01-" + Math.floor(currentY), summary: p.sum });
            currentY += 2.5;
        });
    }
    return rows;
}