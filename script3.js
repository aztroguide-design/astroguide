/* ========================================================================== */
/* ASTROGUIDE GENERATOR (HINDI VERSION)                                       */
/* ========================================================================== */

/* -------------------------------------------------------------------------- */
/* 1. DATA CONSTANTS & TRANSLATIONS (DEFINED ONCE AT TOP)                     */
/* -------------------------------------------------------------------------- */

const PLANET_HI = {
    "Sun": "सूर्य", "Moon": "चंद्र", "Mars": "मंगल", "Mercury": "बुध",
    "Jupiter": "गुरु", "Venus": "शुक्र", "Saturn": "शनि", "Rahu": "राहु",
    "Ketu": "केतु", "Ascendant": "लग्न"
};

const SIGNS_HI = [
    "", "मेष", "वृषभ", "मिथुन", "कर्क", "सिंह", "कन्या",
    "तुला", "वृश्चिक", "धनु", "मकर", "कुंभ", "मीन"
];

const NAKSHATRAS_HI = [
    "अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशिरा", "आर्द्रा", "पुनर्वसु", "पुष्य", "आश्लेषा",
    "मघा", "पूर्वा फाल्गुनी", "उत्तरा फाल्गुनी", "हस्त", "चित्रा", "स्वाति", "विशाखा", "अनुराधा", "ज्येष्ठा",
    "मूल", "पूर्वाषाढ़ा", "उत्तराषाढ़ा", "श्रवण", "धनिष्ठा", "शतभिषा", "पूर्वा भाद्रपद", "उत्तरा भाद्रपद", "रेवती"
];

const YOGAS_HI = [
    "विष्कम्भ", "प्रीति", "आयुष्मान", "सौभाग्य", "शोभन", "अतिगण्ड", "सुकर्मा", "धृति", "शूल",
    "गण्ड", "वृद्धि", "ध्रुव", "व्याघात", "हर्षण", "वज्र", "सिद्धि", "व्यतीपात", "वरीयान",
    "परिघ", "शिव", "सिद्ध", "साध्य", "शुभ", "शुक्ल", "ब्रह्म", "इन्द्र", "वैधृति"
];

const KARANAS_HI = [
    "बव", "बालव", "कौलव", "तैतिल", "गर", "वणिज", "विष्टि",
    "शकुनि", "चतुष्पाद", "नाग", "किंतुघ्न"
];

const VARAS_HI = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];

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
    const name = document.getElementById('name').value || "जातक";
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const lat = parseFloat(document.getElementById('lat').value) || 28.61;
    const lng = parseFloat(document.getElementById('lng').value) || 77.20;

    if (!date || !time) { alert("कृपया जन्म तिथि और समय दर्ज करें (Please enter Date and Time)"); return; }

    birthDateObj = new Date(date + 'T' + time);
    calculatePlanets(date, time, lat, lng);

    const container = document.getElementById('reportContainer');
    container.innerHTML = '<div style="text-align:center; padding:50px;"><h2>कुंडली रिपोर्ट तैयार हो रही है... (Generating Report...)</h2><div style="font-size:30px;">🕉️</div></div>';

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
            <h1 style="font-size:48px; color:#d35400; margin:0;">एस्ट्रो गाइड (ASTROGUIDE)</h1>
            <h2 style="font-size:24px; color:#555; font-weight:normal;">सम्पूर्ण वैदिक ज्योतिष रिपोर्ट</h2>
            <div style="font-size:80px; margin:40px; color:#f57c00;">🕉️</div>
            <div style="font-size:18px; line-height:2;">
                <b>जातक का नाम:</b><br>
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
    const getTithiHI = () => { let t = Math.floor(((moon - sun + 360) % 360) / 12) + 1; return `तिथि ${t}`; };
    const getYogHI = () => YOGAS_HI[Math.floor((sun + moon) % 360 / 13.333)] || "";
    const getNakHI = () => NAKSHATRAS_HI[Math.floor(moon / 13.333333)] || "";
    const getKaranaHI = () => KARANAS_HI[Math.floor((moon - sun + 360) % 360 / 6) % 11] || "";
    const getDayHI = () => VARAS_HI[new Date(date).getDay()];
    const getSignHI = (lon) => SIGNS_HI[Math.floor(lon / 30) + 1];
    const getPlanetLordHI = (lon) => PLANET_HI[getPlanetLord(Math.floor(lon/30)+1)] || getPlanetLord(Math.floor(lon/30)+1);
    const row = (l, v) => `<tr><td style="font-weight:bold; color:#555;">${l}</td><td>${v}</td></tr>`;
    
    p.innerHTML += `<div class="header"><h1>प्राथमिक ज्योतिष विवरण</h1></div>
        <div class="flex-row"><div class="half-width"><div class="section-title">जन्म विवरण</div><table>${row("दिनांक", date)}${row("समय", time)}${row("अक्षांश", document.getElementById('lat').value)}${row("देशांतर", document.getElementById('lng').value)}${row("अयनांश", "लाहिरी (" + ayanamsaVal.toFixed(2) + "°)")}</table></div>
        <div class="half-width"><div class="section-title">पंचांग</div><table>${row("तिथि", getTithiHI())}${row("योग", getYogHI())}${row("नक्षत्र", getNakHI())}${row("करण", getKaranaHI())}${row("वार", getDayHI())}</table></div></div>
        <div class="flex-row" style="margin-top:20px;"><div class="half-width"><div class="section-title">घट चक्र</div><table>${row("चंद्र राशि", getSignHI(moon))}${row("योनि", "गौ")}${row("गण", "मनुष्य")}${row("नाड़ी", "मध्य")}</table></div>
        <div class="half-width"><div class="section-title">अवकहड़ा चक्र</div><table>${row("लग्न", getSignHI(getPlanet("Ascendant").lon))}${row("लग्नेश", getPlanetLordHI(getPlanet("Ascendant").lon))}${row("राशि स्वामी", getPlanetLordHI(moon))}${row("नक्षत्र स्वामी", PLANET_HI[getNakshatra(moon).lord] || getNakshatra(moon).lord)}${row("वर्ण", "विप्र")}</table></div></div><div class="footer-num">पेज 1</div>`;
    return p;
}

function createPage2() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let rows = globalPlanets.map(pl => {
        let s = Math.floor(pl.lon / 30) + 1; 
        let nak = getNakshatra(pl.lon); 
        let status = pl.speed < 0 ? "(वक्री)" : "";
        let pNameHI = PLANET_HI[pl.name] || pl.name;
        let sNameHI = SIGNS_HI[s];
        let pLordHI = PLANET_HI[getPlanetLord(s)] || getPlanetLord(s);
        let nakNameHI = NAKSHATRAS_HI[nak.id] || nak.name;
        let nakLordHI = PLANET_HI[nak.lord] || nak.lord;
        return `<tr><td><b>${pNameHI}</b> ${status}</td><td>${sNameHI}</td><td>${formatDeg(pl.lon)}</td><td>${pLordHI}</td><td>${nakNameHI}</td><td>${nakLordHI}</td><td>${s}</td></tr>`;
    }).join('');
    let cards = globalPlanets.filter(pl => pl.name !== 'Ascendant').map(pl => {
        let nature = ["Jupiter", "Venus", "Mercury", "Moon"].includes(pl.name) ? "शुभ" : "पाप";
        let pNameHI = PLANET_HI[pl.name] || pl.name;
        let sNameHI = SIGNS_HI[Math.floor(pl.lon/30)+1];
        return `<div class="planet-card"><div class="planet-icon">●</div><div class="planet-info"><b>${pNameHI}</b><span>${sNameHI}</span><div class="${nature.includes('शुभ') ? 'status-benefic' : 'status-malefic'}">${nature}</div></div></div>`;
    }).join('');
    p.innerHTML += `<div class="header"><h1>ग्रह स्थिति</h1></div><table><thead><tr><th>ग्रह</th><th>राशि</th><th>डिग्री</th><th>स्वामी</th><th>नक्षत्र</th><th>नक्षत्र स्वामी</th><th>भाव</th></tr></thead><tbody>${rows}</tbody></table><div class="section-title">ग्रह विवरण</div><div class="planet-card-grid">${cards}</div><div class="footer-num">पेज 2</div>`;
    return p;
}

function createPage3() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    p.innerHTML += `<div class="header"><h1>कुण्डली चक्र</h1></div><div class="section-title">लग्न कुण्डली (D1)</div><div class="flex-row"><div style="flex:1"><div id="chartD1" class="chart-grid" style="width:100%; max-width:400px;"></div></div><div style="flex:0.6; padding:15px; background:#fffcf5; border:1px dashed #ffd54f; font-size:11px;"><b>विश्लेषण:</b><br>लग्न कुण्डली शारीरिक स्वास्थ्य और व्यक्तित्व को दर्शाती है।</div></div><br><div class="flex-row"><div class="half-width"><div class="section-title">चंद्र कुण्डली</div><div id="chartMoon" class="chart-grid"></div></div><div class="half-width"><div class="section-title">नवांश कुण्डली (D9)</div><div id="chartD9" class="chart-grid"></div></div></div><div class="footer-num">पेज 3</div>`;
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
        rows += `<tr><td>${i}</td><td>${SIGNS_HI[signId]}</td><td>${formatDeg(mid)}</td><td>${SIGNS_HI[Math.floor(((mid+15)%360)/30)+1]}</td><td>${formatDeg((mid + 15) % 360)}</td></tr>`;
    }
    p.innerHTML += `<div class="header"><h1>भाव स्पष्ट</h1></div><div style="text-align:center;color:#f57c00;margin-bottom:10px;">लग्न: ${formatDeg(asc)}</div><table><thead><tr><th>भाव</th><th>राशि</th><th>भाव मध्य</th><th>राशि</th><th>भाव संधि</th></tr></thead><tbody>${rows}</tbody></table><div class="flex-row"><div class="half-width"><div class="section-title">चलित चक्र</div><div id="chartChalit" class="chart-grid"></div></div><div class="half-width" style="padding:20px; font-size:11px;">चलित चक्र भाव बल को दर्शाता है।</div></div><div class="footer-num">पेज 4</div>`;
    setTimeout(() => renderChart('chartChalit', calculateVargaPositions(1)), 50);
    return p;
}

function createVargaPage(divisors, pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let grids = divisors.map(d => `<div style="text-align:center;"><div style="font-weight:bold;font-size:11px;margin-bottom:2px;">D-${d}</div><div id="varga${d}_p${pageNum}" class="chart-grid" style="width:150px; height:250px; font-size:8px;"></div></div>`).join('');
    p.innerHTML += `<div class="header"><h1>वर्ग कुण्डली</h1></div><div style="display:grid; grid-template-columns:repeat(3,1fr); row-gap:20px; column-gap:10px; justify-items:center; margin-top:20px;">${grids}</div><div class="footer-num">पेज ${pageNum}</div>`;
    setTimeout(() => divisors.forEach(d => renderChart(`varga${d}_p${pageNum}`, calculateVargaPositions(d))), 50);
    return p;
}

function createPage7() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const pl = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"];
    const translateList = (list) => list.map(x => PLANET_HI[x] || x).join(", ");
    const genTable = () => pl.map(x => `<tr><td><b>${PLANET_HI[x]}</b></td><td>${translateList(FRIENDSHIPS[x].f)}</td><td>${translateList(FRIENDSHIPS[x].n)}</td><td>${translateList(FRIENDSHIPS[x].e)}</td></tr>`).join('');
    p.innerHTML += `<div class="header"><h1>मैत्री चक्र</h1></div><div class="section-title">नैसर्गिक मैत्री</div><table><thead><tr><th>ग्रह</th><th>मित्र</th><th>सम</th><th>शत्रु</th></tr></thead><tbody>${genTable()}</tbody></table><br><div class="section-title">तात्कालिक मैत्री</div><table><thead><tr><th>ग्रह</th><th>मित्र</th><th>सम</th><th>शत्रु</th></tr></thead><tbody>${genTable()}</tbody></table><div class="footer-num">पेज 7</div>`;
    return p;
}

function createPage8() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const topRows = globalPlanets.map(pl => {
        let s = Math.floor(pl.lon / 30) + 1;
        let pNameHI = PLANET_HI[pl.name] || pl.name;
        let sNameHI = SIGNS_HI[s];
        let pLordHI = PLANET_HI[getPlanetLord(s)] || getPlanetLord(s);
        let status = pl.speed < 0 ? "हाँ" : ""; 
        return `<tr><td style="font-weight:bold;">${pNameHI}</td><td style="color:${pl.speed<0?'red':'inherit'}">${status}</td><td>${sNameHI}</td><td>${formatFullDeg(pl.lon)}</td><td>${pLordHI}</td><td>${s}</td></tr>`;
    }).join('');
    const bottomRows = globalPlanets.map(pl => {
        let nak = getNakshatra(pl.lon);
        let pNameHI = PLANET_HI[pl.name] || pl.name;
        let nakNameHI = NAKSHATRAS_HI[nak.id] || nak.name;
        let nakLordHI = PLANET_HI[nak.lord] || nak.lord;
        let subLordHI = PLANET_HI[VIM_LORDS[(nak.id+2)%9]] || VIM_LORDS[(nak.id+2)%9];
        let ssLordHI = PLANET_HI[VIM_LORDS[(nak.id+4)%9]] || VIM_LORDS[(nak.id+4)%9];
        return `<tr><td style="font-weight:bold;">${pNameHI}</td><td>${nakNameHI}</td><td>${nakLordHI}</td><td>${nak.charan}</td><td>${subLordHI}</td><td>${ssLordHI}</td></tr>`;
    }).join('');
    p.innerHTML += `<div class="header"><h1>के.पी. ग्रह विवरण</h1></div><table><thead><tr><th>ग्रह</th><th>वक्री</th><th>राशि</th><th>डिग्री</th><th>स्वामी</th><th>भाव</th></tr></thead><tbody>${topRows}</tbody></table><br><table><thead><tr><th>ग्रह</th><th>नक्षत्र</th><th>नक्षत्र स्वामी</th><th>चरण</th><th>उप स्वामी</th><th>उप-उप स्वामी</th></tr></thead><tbody>${bottomRows}</tbody></table><div class="footer-num">पेज 8</div>`;
    return p;
}

function createPage9() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const dashas = calcVimshottari().slice(0, 6);
    const createCol = (d) => {
        const adList = getAntardashaDates(d.lord, d.start);
        const mdNameHI = PLANET_HI[d.lord] || d.lord;
        let h = `<div class="dasha-col"><div class="dasha-header"><div class="dasha-planet">${mdNameHI}</div><div class="dasha-time">${d.start}</div><div class="dasha-time">${d.end}</div></div>`;
        adList.forEach(ad => {
            let adNameHI = PLANET_HI[ad.lord] || ad.lord;
            h += `<div class="ad-row"><span class="ad-planet">${adNameHI}</span><span class="ad-date">${ad.date}</span></div>`; 
        });
        return h + `</div>`;
    };
    p.innerHTML += `<div class="header"><h1>विंशोत्तरी दशा - I</h1></div><div class="dasha-grid" style="margin-top:30px;">${dashas.slice(0,3).map(createCol).join('')}</div><div class="dasha-grid">${dashas.slice(3,6).map(createCol).join('')}</div><div class="footer-num">पेज 9</div>`;
    return p;
}

function createPage10() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const dashas = calcVimshottari().slice(6, 9);
    const createCol = (d) => {
        const adList = getAntardashaDates(d.lord, d.start);
        const mdNameHI = PLANET_HI[d.lord] || d.lord;
        let h = `<div class="dasha-col"><div class="dasha-header"><div class="dasha-planet">${mdNameHI}</div><div class="dasha-time">${d.start}</div><div class="dasha-time">${d.end}</div></div>`;
        adList.forEach(ad => {
            let adNameHI = PLANET_HI[ad.lord] || ad.lord;
            h += `<div class="ad-row"><span class="ad-planet">${adNameHI}</span><span class="ad-date">${ad.date}</span></div>`; 
        });
        return h + `</div>`;
    };
    let currentData = getCurrentDashaData();
    let currMDHI = PLANET_HI[currentData.md.lord] || currentData.md.lord;
    let currADHI = PLANET_HI[currentData.ad.lord] || currentData.ad.lord;
    p.innerHTML += `<div class="header"><h1>विंशोत्तरी दशा - II</h1></div><div class="dasha-grid" style="margin-top:30px;">${dashas.map(createCol).join('')}</div><div class="section-title" style="margin-top:40px;">वर्तमान दशा विवरण</div><table class="current-dasha-table"><thead><tr><th>दशा</th><th>ग्रह</th><th>आरंभ तिथि</th><th>समाप्ति तिथि</th></tr></thead><tbody><tr><td><b>महादशा</b></td><td>${currMDHI}</td><td>${currentData.md.start}</td><td>${currentData.md.end}</td></tr><tr style="background:#ffebee;"><td><b>अंतर्दशा</b></td><td>${currADHI}</td><td>${currentData.ad.start}</td><td>${currentData.ad.end}</td></tr><tr><td><b>प्रत्यंतर</b></td><td>-</td><td>-</td><td>-</td></tr></tbody></table><div class="footer-num">पेज 10</div>`;
    return p;
}

// --- MERGED KALSARPA PAGE (11) ---
function createKalsarpaPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const kData = checkKalsarpa();
    const types = ["अनंत", "कुलिक", "वासुकी", "शंखपाल", "पद्म", "महापद्म", "तक्षक", "कर्कोटक", "शंखचूड़", "घटक", "विषधर", "शेषनाग"];
    const gridHtml = types.map((t, i) => {
        let activeClass = (kData.present && kData.typeId === (i+1)) ? "active" : "";
        return `<div class="kalsarp-btn ${activeClass}">${t}</div>`;
    }).join('');
    const statusText = kData.present ? "काल सर्प दोष है" : "काल सर्प दोष नहीं है";
    let reportText = kData.present 
        ? `आपकी कुंडली में <b>${kData.name} काल सर्प दोष</b> है। राहु और केतु के मध्य शेष सभी ग्रह आ गए हैं। यह सफलता में बाधा और वैवाहिक जीवन में अशांति पैदा कर सकता है। उचित उपाय करने से इसका प्रभाव कम हो जाता है।`
        : `आपकी कुंडली में <b>काल सर्प दोष नहीं है</b>। आप इस दोष से संबंधित किसी भी समस्या का सामना नहीं करेंगे।`;

    p.innerHTML += `<div class="header"><h1>काल सर्प दोष (Kalsarpa Dosha)</h1></div>
        <div style="display:flex; gap:15px; margin-bottom:15px;">
            <div style="flex:1;">
               <div class="section-title">दोष के प्रकार</div>
               <div class="dosha-grid" style="grid-template-columns: repeat(3, 1fr); font-size:9px;">${gridHtml}</div>
            </div>
            <div style="flex:1; display:flex; flex-direction:column; justify-content:center; text-align:center;">
               <span class="face-icon ${kData.present ? 'face-sad' : 'face-happy'}" style="font-size:40px;">${kData.present ? '☹' : '☺'}</span>
               <div style="font-weight:bold; color:#333; margin-top:5px;">${statusText}</div>
               <div style="font-size:10px; color:#666;">${kData.present ? kData.name : "लागू नहीं"}</div>
            </div>
        </div>
        <div class="section-title">विश्लेषण (Analysis)</div>
        <p style="font-size:11px; line-height:1.6; text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px;">${reportText}</p>
        <div class="section-title" style="margin-top:20px;">उपाय (Remedies)</div>
        <div class="remedy-box"><ul><li>रुद्राभिषेक - भगवान शिव की पूजा करना उत्तम है।</li><li>पूजा घर में काल सर्प यंत्र स्थापित करें।</li><li>बुधवार या शुक्रवार को दोष निवारण पूजा करवाएं।</li><li>गरीबों को काली दाल या काले वस्त्र दान करें।</li><li>8 या 9 मुखी रुद्राक्ष धारण करें।</li></ul></div>
        <div class="footer-num">पेज ${pageNum}</div>`;
    return p;
}

// --- MERGED MANGLIK PAGE (12) ---
function createManglikPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const mData = checkManglik();
    const statusText = mData.isManglik 
        ? 'आपकी कुंडली में मंगल दोष (Manglik Dosha) पाया गया है। दोष का प्रभाव है, इसलिए विवाह से पूर्व कुंडली मिलान आवश्यक है।' 
        : 'आपकी कुंडली में मंगल शुभ स्थिति में है। आप मांगलिक नहीं हैं (Non-Manglik)।';
    const houseReasons = mData.reasonsHouse.length > 0 ? mData.reasonsHouse.join('<br>') : "कोई प्रतिकूल स्थिति नहीं।";

    p.innerHTML += `<div class="header"><h1>मंगल दोष विश्लेषण (Manglik Dosha)</h1></div>
        <div style="display:flex; gap:20px; align-items:center; margin-bottom:20px;">
            <div style="flex:1; text-align:center;">
                <div class="progress-container"><div class="progress-bar" style="width:${mData.percent}%">${mData.percent}%</div></div>
                <div style="font-weight:bold; font-size:12px; margin-top:5px;">दोष की तीव्रता</div>
            </div>
            <div style="flex:2; font-size:11px; text-align:justify; background:#fff3e0; padding:10px; border-radius:5px;">
                ${statusText}
            </div>
        </div>
        <div class="flex-row">
            <div class="analysis-col">
                <div class="analysis-header">कारण (Reasons)</div>
                <div class="analysis-list" style="font-size:10px;">${houseReasons}</div>
            </div>
            <div class="analysis-col">
                <div class="analysis-header">श्लोक</div>
                <div style="font-style:italic; font-size:10px; text-align:center; padding-top:10px;">लग्ने व्यये सुखे वापि सप्तमे वा अष्टमे कुजे | <br>शुभ दृग योग हीने च पतिं हन्ति न संशयम् ||</div>
            </div>
        </div>
        <div class="section-title" style="margin-top:20px;">उपाय (Remedies)</div>
        <div class="remedy-box" style="border-left-color: #d35400;"><ul><li>पूजा घर में मंगल यंत्र स्थापित करें।</li><li>प्रत्येक मंगलवार को हनुमान मंदिर जाएं, सिन्दूर और लाल फूल चढ़ाएं।</li><li>हनुमान मंत्र का जाप करें: <b>|| ॐ श्रीं हनुमते नमः ||</b></li><li>मंगलवार को उपवास रखें।</li><li>विवाह से पूर्व कुंभ विवाह करना शुभ होता है।</li></ul></div>
        <div class="footer-num">पेज ${pageNum}</div>`;
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

    p.innerHTML += `<div class="header"><h1>शनि की साढ़े साती (Sade Sati)</h1></div>
        <div style="display:flex; gap:15px; margin-bottom:20px;">
            <div class="ss-status-card" style="flex:1;">
                <div style="font-size:30px; color:${status.present ? '#e53935' : '#43a047'}; margin-bottom:5px;">${status.present ? '☹' : '☺'}</div>
                <div style="font-weight:bold; font-size:12px;">${status.statusText}</div>
                <div style="font-size:10px; color:#666;">${status.desc}</div>
            </div>
            <div class="ss-table-card" style="flex:1.5;">
                <table style="margin-bottom:0;">
                    <tr><td style="font-weight:bold;">चंद्र राशि</td><td>${status.moonSign}</td></tr>
                    <tr><td style="font-weight:bold;">शनि की स्थिति</td><td>${status.saturnSign}</td></tr>
                </table>
            </div>
        </div>
        <div class="section-title">आगामी चरण (Upcoming Phases)</div>
        <table class="ss-timeline-table">
            <thead><tr><th>दिनांक</th><th>शनि राशि</th><th>चरण का प्रकार</th></tr></thead>
            <tbody>${timelineRows}</tbody>
        </table>
        <div class="section-title" style="margin-top:15px;">उपाय (Remedies)</div>
        <div class="remedy-box-green" style="font-size:10px;">
            <ul>
                <li>माता-पिता और बुजुर्गों की सेवा करें।</li>
                <li>प्रतिदिन हनुमान चालीसा का पाठ करें।</li>
                <li>शनिवार को सूर्योदय से सूर्यास्त तक उपवास रखना शुभ है।</li>
                <li>गरीबों को उड़द की दाल, तेल, काले तिल दान करें।</li>
                <li>मंत्र: "|| ॐ शं शनैश्चराय नमः ||"</li>
            </ul>
        </div>
        <div class="footer-num">पेज ${pageNum}</div>`;
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
                md: PLANET_HI[md.lord] || md.lord,
                ad: PLANET_HI[ad.lord] || ad.lord,
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
            <td>${d.md === d.ad ? 'प्रमुख बदलाव (Major Shift)' : 'अंतर्दशा (Sub Period)'}</td>
        </tr>
    `).join('');

    p.innerHTML += `
        <div class="header"><h1>5 वर्षीय व्यक्तिगत कुंडली</h1></div>
        <div class="section-title">आगामी दशाएं (${today.getFullYear()} - ${future.getFullYear()})</div>
        <p style="font-size:11px; text-align:center;">आने वाले 5 वर्षों के प्रमुख ग्रह प्रभावों को यह चार्ट दर्शाता है।</p>
        
        <table class="year-chart-table">
            <thead>
                <tr>
                    <th>दशा (MD-AD)</th>
                    <th>आरंभ तिथि</th>
                    <th>समाप्ति तिथि</th>
                    <th>दशा का प्रकार</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
        
        <div class="quote-box">
            "ग्रह प्रेरित करते हैं, बाध्य नहीं। इस समय का बुद्धिमानी से उपयोग करें।"
        </div>
        <div class="footer-num">पेज 14</div>`;
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
                    <div style="font-size:12px; color:#666;">संस्कृत श्लोक और ग्रह स्थिति</div>
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

        <div class="section-title" style="color:#2e7d32; border-color:#2e7d32;">ज्योतिषी का विश्लेषण (Astrologer's Verdict)</div>
        
        <div style="display:flex; gap:15px; margin-bottom:20px;">
            <div style="flex:1;">
                 <div style="background:#f1f8e9; padding:15px; border-radius:8px; border-left:5px solid #43a047; font-size:12px; line-height:1.8; text-align:justify; color:#333;">
                    <span style="font-size:30px; float:left; margin-right:10px; line-height:30px; color:#43a047;">❝</span>
                    ${speakText}
                    <span style="font-size:30px; float:right; margin-left:10px; line-height:0; color:#43a047; margin-top:10px;">❞</span>
                 </div>
            </div>
        </div>

        <div class="section-title" style="color:#d32f2f; border-color:#d32f2f;">सुझाव और सावधानियां (Advice)</div>
        
        <div style="background:#ffebee; padding:15px; border-radius:8px; border:1px dashed #ef5350; display:flex; gap:15px; align-items:center;">
            <div style="font-size:24px;">💡</div>
            <div style="font-size:12px; line-height:1.6; color:#b71c1c; font-weight:500;">
                ${adviceText}
            </div>
        </div>
        
        <div class="footer-num">पेज ${pageNum}</div>
    `;
    return p;
}

// --- HELPER: PLANET BUILDER (Fixed Logic) ---
function buildPlanetPage(planetName, pageNum) {
    const data = PLANET_REPORT_DATA[planetName];
    const planetInfo = getPlanet(planetName);
    const signIdx = Math.floor(planetInfo.lon / 30) + 1;
    const signName = SIGNS_HI[signIdx]; 

    const tableHtml = `
        <tr><td><b>स्थित राशि (Sign)</b></td><td><b>${signName}</b></td></tr>
        <tr><td><b>नक्षत्र (Star)</b></td><td>${getNakshatra(planetInfo.lon).name}</td></tr>
        <tr><td><b>स्थिति (Status)</b></td><td>${planetInfo.speed < 0 ? "<span style='color:red'>वक्री (Retrograde)</span>" : "मार्गी (Direct)"}</td></tr>
        <tr><td><b>डिग्री (Degree)</b></td><td>${formatDeg(planetInfo.lon)}</td></tr>
    `;
    
    const personalizedSpeak = `आपकी कुंडली में ${PLANET_HI[planetName]} <b>${signName}</b> राशि में स्थित हैं। ${data.speak}`;
    
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
    const signNameHI = SIGNS_HI[signIdx];
    
    const rawLord = signInfo.lord;
    const lordName = PLANET_HI[rawLord] ? PLANET_HI[rawLord] : rawLord;

    const tableHtml = `
        <tr><td><b>स्वामी (Lord)</b></td><td>${lordName}</td></tr>
        <tr><td><b>तत्व (Element)</b></td><td>${signInfo.element}</td></tr>
        <tr><td><b>भाग्य रत्न (Gem)</b></td><td>${signInfo.gem}</td></tr>
        <tr><td><b>चिन्ह (Symbol)</b></td><td>${signInfo.sym}</td></tr>
    `;

    const speakText = `नमस्ते! आपका जन्म <b>${signNameHI}</b> लग्न में हुआ है। लग्न केवल राशि नहीं है, यह आपके 'व्यक्तित्व' और 'स्वास्थ्य' का दर्पण है। 
    ${signNameHI} राशि के स्वामी <b>${lordName}</b> हैं। इसके प्रभाव से आप स्वभाव से साहसी और दृढ़ निश्चय वाले व्यक्ति हैं। आप किसी भी कार्य को बीच में नहीं छोड़ते।`;

    const adviceText = `चूंकि आपके लग्नेश <b>${lordName}</b> हैं, इसलिए उस ग्रह से संबंधित वार (जैसे ${signInfo.day}) को किसी भी नए कार्य की शुरुआत के लिए चुनना शुभ रहेगा।`;

    return createReportPage(
        "लग्न विश्लेषण (Ascendant Report)", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Classic_1635_Schiller_constellation_Capricornus.png/250px-Classic_1635_Schiller_constellation_Capricornus.png", 
        tableHtml,
        "देहं रूपं च ज्ञानं च वर्णं चैव बलाबलम् |<br>सुखं दुःखं स्वभावंच लग्नभावान्निरीक्षयेत् ||",
        speakText,
        adviceText,
        `लग्न: ${signNameHI} (Ascendant)`,
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
        <div class="header"><h1>प्रत्यंतर दशा (Pratyantar Dasha)</h1></div>
        <div class="section-title">5 वर्षीय विस्तृत भविष्यवाणी</div>
        <p style="font-size:11px; color:#666; text-align:center;">
            ${today.getFullYear()} से ${fiveYearsLater.getFullYear()} तक की विस्तृत उप-उप अवधि
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
                    <th>दशा क्रम (MD-AD-PD)</th>
                    <th>आरंभ तिथि</th>
                    <th>समाप्ति तिथि</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>
        <div class="footer-num">पेज 25</div>`; // Renumbered
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
                    
                    const mdName = PLANET_HI[md.lord] || md.lord;
                    const adName = PLANET_HI[ad.lord] || ad.lord;
                    const pdName = PLANET_HI[pd.pd] || pd.pd;
                    
                    const pdData = PREDICTION_DB[pd.pd];
                    const themeColor = pdData.color;

                    p.innerHTML += `
                        <div class="header"><h1>फल और उपाय</h1></div>
                        
                        <div style="background:${themeColor}15; border-left: 6px solid ${themeColor}; padding:15px; margin-bottom:20px; border-radius:4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                            <div style="font-size:11px; text-transform:uppercase; color:#555; font-weight:bold; letter-spacing:1px;">समय अवधि</div>
                            <div style="font-size:18px; font-weight:bold; color:#222; margin-top:5px;">
                                ${pd.startStr} <span style="font-size:14px; font-weight:normal; color:#666;">से</span> ${pd.endStr}
                            </div>
                        </div>

                        <div class="dasha-flow">
                            <div class="df-box">
                                <div>महादशा</div>
                                <div class="df-planet">${mdName}</div>
                            </div>
                            <div class="df-arrow">➜</div>
                            <div class="df-box">
                                <div>अंतर्दशा</div>
                                <div class="df-planet">${adName}</div>
                            </div>
                            <div class="df-arrow">➜</div>
                            <div class="df-box df-active" style="border-color:${themeColor}; background:${themeColor}10;">
                                <div>प्रत्यंतर</div>
                                <div class="df-planet" style="color:${themeColor}; font-size:14px;">${pdName}</div>
                            </div>
                        </div>

                        <div class="section-title" style="color:${themeColor}; border-color:${themeColor};">ज्योतिषी का विश्लेषण</div>

                        <div style="display:flex; gap:20px; margin-bottom:20px; align-items:flex-start;">
                            <div style="flex:0.8; text-align:center;">
                                <div style="background:#fafafa; border-radius:50%; width:70px; height:70px; display:flex; align-items:center; justify-content:center; font-size:35px; border:2px solid ${themeColor}; margin:0 auto;">
                                    ${pdData.icon}
                                </div>
                                <div style="font-size:10px; font-weight:bold; margin-top:5px; color:#555;">${pdName} का प्रभाव</div>
                            </div>
                            <div style="flex:3; font-size:12px; text-align:justify; line-height:1.8; color:#333;">
                                <p><strong>नमस्ते!</strong> वर्तमान में आप <b>${mdName}</b> की महादशा और <b>${pdName}</b> की प्रत्यंतर दशा में हैं।</p>
                                <p>इस समय ग्रहों के गोचर के अनुसार... ${pdData.event}</p>
                            </div>
                        </div>

                        <div class="pred-grid">
                            <div class="pred-item">
                                <div class="pi-head">💰 आर्थिक और करियर</div>
                                <div class="pi-body">${pdData.career}</div>
                            </div>
                            <div class="pred-item">
                                <div class="pi-head">❤️ परिवार और स्वास्थ्य</div>
                                <div class="pi-body">${pdData.family}</div>
                            </div>
                        </div>

                        <div class="section-title" style="margin-top:25px; color:#d35400;">शांति उपाय</div>
                        <div style="background:#fff8e1; padding:15px; border-radius:8px; border:1px dashed #ffa726; display:flex; gap:15px; align-items:center;">
                            <div style="font-size:24px;">🕉️</div>
                            <div style="font-size:11px; line-height:1.6; color:#5d4037;">
                                <b>ज्योतिष सलाह:</b><br>${pdData.remedy}
                            </div>
                        </div>

                        <div class="footer-num">पेज ${pageCount}</div>
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

/* --- DATA TABLES (TRANSLATED TO HINDI) --- */

const SIGN_INFO = [
    null,
    { name: "मेष", lord: "मंगल", sym: "मेढ़ा", element: "अग्नि", gem: "मूंगा", day: "मंगलवार" },
    { name: "वृषभ", lord: "शुक्र", sym: "बैल", element: "पृथ्वी", gem: "हीरा", day: "शुक्रवार" },
    { name: "मिथुन", lord: "बुध", sym: "मिथुन", element: "वायु", gem: "पन्ना", day: "बुधवार" },
    { name: "कर्क", lord: "चंद्र", sym: "केकड़ा", element: "जल", gem: "मोती", day: "सोमवार" },
    { name: "सिंह", lord: "सूर्य", sym: "सिंह", element: "अग्नि", gem: "माणिक्य", day: "रविवार" },
    { name: "कन्या", lord: "बुध", sym: "कन्या", element: "पृथ्वी", gem: "पन्ना", day: "बुधवार" },
    { name: "तुला", lord: "शुक्र", sym: "तराजू", element: "वायु", gem: "हीरा", day: "शुक्रवार" },
    { name: "वृश्चिक", lord: "मंगल", sym: "बिच्छू", element: "जल", gem: "मूंगा", day: "मंगलवार" },
    { name: "धनु", lord: "गुरु", sym: "धनुर्धर", element: "अग्नि", gem: "पुखराज", day: "गुरुवार" },
    { name: "मकर", lord: "शनि", sym: "मकर", element: "पृथ्वी", gem: "नीलम", day: "शनिवार" },
    { name: "कुंभ", lord: "शनि", sym: "घड़ा", element: "वायु", gem: "नीलम", day: "शनिवार" },
    { name: "मीन", lord: "गुरु", sym: "मछली", element: "जल", gem: "पुखराज", day: "गुरुवार" }
];

/* --- PLANET REPORT DATA (HINDI) --- */
const PLANET_REPORT_DATA = {
    "Sun": {
        title: "सूर्य ग्रह प्रभाव (Sun Analysis)",
        nature: "आत्मकारक और पितृकारक (Soul & Father)",
        shloka: "जपाकुसुम संकाशं काश्यपेयं महाद्युतिम् |<br>तमोऽरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम् ||",
        speak: "जन्म कुंडली में सूर्य 'राजा' के समान है। आपकी कुंडली में सूर्य की स्थिति को देखकर कहा जा सकता है कि आपमें स्वाभाविक रूप से नेतृत्व (Leadership) के गुण हैं। आप किसी के अधीन काम करना पसंद नहीं करते; चार लोगों का मार्गदर्शन करना आपको संतुष्टि देता है। आपमें आत्मविश्वास (Will Power) बहुत प्रबल है। हालांकि, कभी-कभी आपकी बातों में जिद्द अधिक हो सकती है जो दूसरों को अहंकार लग सकती है।",
        advice: "पिता का सम्मान करने और सरकारी नियमों का पालन करने से आप जीवन में और ऊंचाइयों को छुएंगे। क्रोध को कम करने से समाज में अच्छी प्रतिष्ठा मिलेगी।",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sun_symbol.svg/100px-Sun_symbol.svg.png"
    },
    "Moon": {
        title: "चंद्र ग्रह प्रभाव (Moon Analysis)",
        nature: "मनोकारक और मातृकारक (Mind & Mother)",
        shloka: "दधिशंख तुषाराभं क्षीरोदार्णव संभवम् |<br>नमामि शशिनं सोमं शंभोर्मुकुट भूषणम् ||",
        speak: "चंद्रमा 'मन' का स्वामी है। आपकी कुंडली में चंद्रमा के प्रभाव से आप बहुत संवेदनशील (Sensitive) मन के स्वामी हैं। दूसरों के दुख को देखकर आप जल्दी भावुक हो जाते हैं। आपके विचार समुद्र की लहरों की तरह बदलते रहते हैं। आपको यात्रा करना और नई जगहों को देखना पसंद है। माता के साथ आपका विशेष लगाव होगा।",
        advice: "छोटी-छोटी बातों पर चिंता करना (Overthinking) छोड़ दें। भावनात्मक निर्णय लेने के बजाय, बुद्धि से निर्णय लेने का अभ्यास करें।",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Moon_Symbol.svg/100px-Moon_Symbol.svg.png"
    },
    "Mars": {
        title: "मंगल ग्रह प्रभाव (Mars Analysis)",
        nature: "भ्रातृकारक और शक्ति (Siblings & Energy)",
        shloka: "धरणी गर्भ संभूतं विद्युत्कांति समप्रभम् |<br>कुमारं शक्तिहस्तं तं मंगलं प्रणमाम्यहम् ||",
        speak: "मंगल 'सेनापति' है। आपमें अपार ऊर्जा (Energy) है। आप यदि कोई कार्य शुरू करते हैं, तो उसे पूरा किए बिना विश्राम नहीं करते। आपमें साहस अधिक और भय कम है। भूमि और संपत्ति के मामले आपके लिए लाभप्रद रहेंगे। लेकिन, आपका क्रोध आपकी नाक पर रहता है। जल्दबाजी के कारण कुछ अच्छे अवसर खोने का डर है।",
        advice: "वाहन चलाते समय सावधानी बरतें। अपनी ऊर्जा को रचनात्मक कार्यों (Constructive work) में लगाएंगे तो चमत्कार कर सकते हैं।",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mars_symbol.svg/100px-Mars_symbol.svg.png"
    },
    "Mercury": {
        title: "बुध ग्रह प्रभाव (Mercury Analysis)",
        nature: "विद्याकारक और व्यापार (Intellect & Business)",
        shloka: "प्रियंगु कलिकाश्यामं रूपेणा प्रतिमं बुधम् |<br>सौम्यं सौम्यगुणोपेतं तं बुधं प्रणमाम्यहम् ||",
        speak: "बुध 'युवराज' है। आपकी कुंडली में बुध के बल के कारण आपमें बुद्धिमत्ता, हास्य बोध (Humor) और व्यापार कुशलता है। आप अपनी बातों से दूसरों को आसानी से आकर्षित कर लेते हैं। गणित, ज्योतिष, या अकाउंट्स के क्षेत्र में आपकी अच्छी पकड़ होगी। आप हमेशा युवा और ऊर्जावान दिखना पसंद करते हैं।",
        advice: "एक साथ कई कार्यों पर ध्यान केंद्रित करने से कोई भी कार्य पूरा नहीं हो पाएगा। एकाग्रता बढ़ाएं। त्वचा की देखभाल पर ध्यान दें।",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mercury_symbol.svg/100px-Mercury_symbol.svg.png"
    },
    "Jupiter": {
        title: "गुरु ग्रह प्रभाव (Jupiter Analysis)",
        nature: "धनकारक और पुत्रकारक (Wealth & Wisdom)",
        shloka: "देवानां च ऋषीणां च गुरुं कांचन सन्निभम् |<br>बुद्धिभूतं त्रिलोकेशं तं नमामि बृहस्पतिम् ||",
        speak: "गुरु 'मंत्री' और सलाहकार है। आपकी कुंडली में गुरु की कृपा होने से आपको समाज में मान-सम्मान प्राप्त होगा। आपके मन में ईश्वर के प्रति भक्ति और परंपराओं के प्रति आदर है। कठिन समय में भी आपको किसी न किसी रूप में दैवीय सहायता मिल ही जाती है। आप दूसरों को अच्छी सलाह दे सकते हैं। धन की कमी नहीं रहेगी।",
        advice: "अत्यधिक भोलापन काम नहीं आएगा। सभी पर आँख मूंदकर विश्वास न करें। मीठा कम खाएं और लीवर (Liver) के स्वास्थ्य का ध्यान रखें।",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jupiter_symbol.svg/100px-Jupiter_symbol.svg.png"
    },
    "Venus": {
        title: "शुक्र ग्रह प्रभाव (Venus Analysis)",
        nature: "कलत्रकारक और भोग (Spouse & Luxury)",
        shloka: "हिमकुन्द मृणालाभं दैत्यानां परमं गुरुम् |<br>सर्वशास्त्र प्रवक्तां भार्गवं प्रणमाम्यहम् ||",
        speak: "शुक्र 'भोगकारक' है। आप अपने जीवन में सुख-सुविधाओं और विलासिता को महत्व देते हैं। आप न केवल स्वयं सुंदर दिखना चाहते हैं, बल्कि अपने आसपास का वातावरण भी सुंदर रखना चाहते हैं। कला, संगीत, सिनेमा या फैशन में आपकी रुचि हो सकती है। वैवाहिक जीवन और प्रेम संबंध आपके जीवन में महत्वपूर्ण भूमिका निभाते हैं।",
        advice: "विलासिता पर सीमा से अधिक खर्च न करें। विपरीत लिंग के प्रति सम्मान रखने से आपका शुक्र बलवान होगा।",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Venus_symbol.svg/100px-Venus_symbol.svg.png"
    },
    "Saturn": {
        title: "शनि ग्रह प्रभाव (Saturn Analysis)",
        nature: "आयुषकारक और कर्म (Karma & Longevity)",
        shloka: "नीलांजन समाभासं रविपुत्रं यमाग्रजम् |<br>छायामार्तण्ड संभूतं तं नमामि शनैश्चरम् ||",
        speak: "शनि 'न्यायाधीश' है। आपके जीवन में कुछ भी आसानी से नहीं मिलता, लेकिन कड़ी मेहनत के बाद जो परिणाम मिलते हैं वे स्थायी होते हैं। आप बहुत व्यावहारिक (Practical) सोच रखते हैं। आलस्य आपका मुख्य शत्रु है। शनि के प्रभाव से आप एकांत में रहना या गहराई से सोचना पसंद करते हैं। गरीबों और मजदूरों की मदद करने से आप जीवन में उन्नति करेंगे।",
        advice: "काम को टालने की आदत (Procrastination) छोड़ दें। न्यायप्रिय रहेंगे तो शनि आपको ऊंचाइयों पर ले जाएंगे।",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Saturn_symbol.svg/100px-Saturn_symbol.svg.png"
    },
    "Rahu": {
        title: "राहु ग्रह प्रभाव (Rahu Analysis)",
        nature: "माया और विदेश (Illusion & Foreign)",
        shloka: "अर्धकायं महावीर्यं चंद्रादित्य विमर्दनम् |<br>सिंहिका गर्भ संभूतं तं राहुं प्रणमाम्यहम् ||",
        speak: "राहु 'छाया ग्रह' है। यह आपको असीमित महत्वाकांक्षाएं (Ambition) देता है। आप पारंपरिक तरीकों से हटकर सोचते हैं। विदेश जाने की इच्छा या टेक्नोलॉजी के क्षेत्र में आगे बढ़ने की तड़प आपमें होगी। कभी-कभी आपके मन में अज्ञात भय या भ्रम उत्पन्न हो सकते हैं। अचानक लाभ या हानि राहु का लक्षण है।",
        advice: "गलत रास्तों से सफलता पाने की कोशिश न करें; वह अस्थायी होती है। दुर्गा देवी की आराधना आपके लिए शुभ रहेगी।",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Rahu_symbol.svg/100px-Rahu_symbol.svg.png"
    },
    "Ketu": {
        title: "केतु ग्रह प्रभाव (Ketu Analysis)",
        nature: "मोक्षकारक और ज्ञान (Detachment & Wisdom)",
        shloka: "पलाश पुष्प संकाशं तारकाग्रह मस्तकम् |<br>रौद्रं रौद्रात्मकं घोरं तं केतुं प्रणमाम्यहम् ||",
        speak: "केतु 'ज्ञानकारक' है। आपमें आध्यात्मिक चिंतन अधिक होगा। कभी-कभी आपको इस संसार और रिश्तों से विरक्ति महसूस हो सकती है। आपकी अंतर्दृष्टि (Intuition) बहुत प्रबल है; आप होने वाली घटनाओं का पहले ही आभास कर सकते हैं। आप शोध (Research), मंत्र-तंत्र या आध्यात्मिक क्षेत्रों में सफलता प्राप्त करेंगे।",
        advice: "बीती बातों के बारे में अधिक न सोचें। गणपति की आराधना करने से आपके मन की उलझनें दूर होंगी।",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ketu_symbol.svg/100px-Ketu_symbol.svg.png"
    },

    "Ascendant": {
        title: "लग्न विश्लेषण",
        nature: "लग्न (Self)",
        shloka: "",
        speak: "",
        advice: "",
        img: ""
    }
};

/* --- PREDICTION DATABASE (HINDI) --- */
const PREDICTION_DB = {
    "Sun": {
        theme: "आत्मविश्वास और सत्ता",
        event: "सूर्य राजा है। इस समय आपमें आत्मविश्वास अत्यधिक बढ़ जाएगा। लोगों के बीच आपको पहचान मिलने का यह समय है। सरकारी कार्यों के लिए या अधिकारियों से मिलने के लिए यह बहुत उपयुक्त समय है। हालांकि, आपकी बातों में थोड़ा अहंकार झलकने का डर है, सावधान रहें।",
        career: "नौकरी में पदोन्नति या नई जिम्मेदारियां मिलने की संभावना है। आपके नेतृत्व गुणों की यह परीक्षा की घड़ी है। आपकी कही बातों का महत्व बढ़ेगा।",
        family: "पिता के स्वास्थ्य का ध्यान रखें। शरीर में गर्मी (Heat) बढ़ने की संभावना है, जिससे आंखों में जलन या सिरदर्द हो सकता है। पानी अधिक पिएं।",
        remedy: "प्रतिदिन सुबह सूर्य नमस्कार करें। 'आदित्य हृदय स्तोत्र' सुनना बाधाओं को दूर करने में सहायक होगा। गरीबों को गेहूं दान करें।",
        icon: "👑",
        color: "#ff9800"
    },
    "Moon": {
        theme: "मानसिक स्थिति और यात्राएं",
        event: "चंद्रमा मन का कारक है। इस समय आपका मन एक जगह स्थिर नहीं रहेगा। छोटी-छोटी बातों पर भी अधिक सोचने की संभावना है। आपको यात्रा करने का योग बन रहा है। रचनात्मक क्षेत्र में काम करने वालों के लिए यह बेहतरीन समय है।",
        career: "कार्यक्षेत्र में बदलाव की इच्छा हो सकती है। काम के दबाव के कारण मानसिक थकान हो सकती है। अपने सहकर्मियों के साथ भावनाओं में बहे बिना काम पर ध्यान दें।",
        family: "माता के स्वास्थ्य का ध्यान रखें। सर्दी, खांसी या जल जनित रोग हो सकते हैं। रात के समय अकेले यात्रा न करें।",
        remedy: "सोमवार को शिव मंदिर में दूध चढ़ाएं। चांदी के गिलास में पानी पीने से मन शांत रहेगा।",
        icon: "🌙",
        color: "#2196f3"
    },
    "Mars": {
        theme: "शक्ति और साहस",
        event: "मंगल आपको अपार ऊर्जा देता है। आप किसी भी कार्य को साहस के साथ शुरू करेंगे। लेकिन, आपको अपने क्रोध पर नियंत्रण रखना होगा। जल्दबाजी में लिए गए निर्णय झगड़ों का कारण बन सकते हैं। भूमि या संपत्ति खरीदने के प्रयास सफल होंगे।",
        career: "तकनीकी, रियल एस्टेट या पुलिस विभाग में काम करने वालों के लिए यह राजयोग है। शत्रुओं पर आप विजय प्राप्त करेंगे। प्रतियोगी परीक्षाओं के लिए यह अच्छा समय है।",
        family: "भाई-बहनों के साथ छोटे-मोटे झगड़े हो सकते हैं। रक्तचाप (BP) या छोटी-मोटी चोट लगने की आशंका है। वाहन चलाते समय सावधानी रखें।",
        remedy: "मंगलवार को सुब्रह्मण्य स्वामी या हनुमान जी की पूजा करें। लाल मसूर की दाल दान करें।",
        icon: "⚔️",
        color: "#d32f2f"
    },
    "Mercury": {
        theme: "बुद्धिमत्ता और व्यापार",
        event: "यह आपकी बुद्धि बल को साबित करने का समय है। आपके द्वारा लिए गए निर्णय बहुत बुद्धिमानी पूर्ण होंगे। छात्रों और व्यापारियों के लिए यह बहुत अनुकूल समय है। नई चीजें सीखने की रुचि बढ़ेगी।",
        career: "आपके संचार कौशल (Communication Skills) अद्भुत होंगे। व्यावसायिक सौदे (Deals) पक्के करने के लिए यह सही समय है। अकाउंट्स और मीडिया क्षेत्र के लोगों को लाभ होगा।",
        family: "रिश्तेदारों के आने से घर में खुशी का माहौल रहेगा। त्वचा संबंधित एलर्जी हो सकती है। तंत्रिका तंत्र (Nervous System) कमजोर न हो, इसका ध्यान रखें।",
        remedy: "बुधवार को गायों को हरी घास या पालक खिलाएं। विष्णु सहस्रनाम का पाठ करें।",
        icon: "📚",
        color: "#388e3c"
    },
    "Jupiter": {
        theme: "ज्ञान और धन",
        event: "गुरु की कृपा से आपके जीवन में एक अच्छा बदलाव आने वाला है। बड़ों का आशीर्वाद आपको मिलेगा। दैवीय चिंतन बढ़ेगा। पहले रुके हुए कार्य अब पूरे होंगे। यह बहुत शुभ समय है।",
        career: "नौकरी में पदोन्नति या वेतन वृद्धि की संभावना है। शिक्षकों, वकीलों और सलाहकारों के लिए यह स्वर्णिम काल है। धन लाभ के योग हैं।",
        family: "संतानहीन दंपतियों को शुभ समाचार मिल सकता है। मीठा कम खाएं, वजन बढ़ने की संभावना है।",
        remedy: "गुरुवार को साईं बाबा या दत्तात्रेय स्वामी के दर्शन करें। माथे पर केसर का तिलक लगाएं।",
        icon: "✨",
        color: "#fbc02d"
    },
    "Venus": {
        theme: "विलासिता और आनंद",
        event: "शुक्र आपको भोग-विलास प्रदान करता है। आप नए कपड़े, आभूषण या वाहन खरीदने का विचार करेंगे। आपके चेहरे पर तेज बढ़ेगा। विपरीत लिंग के लोगों से सहयोग मिलेगा।",
        career: "कला, सिनेमा, फैशन और डिजाइनिंग क्षेत्र के लोगों के लिए यह समय अद्भुत रहेगा। कार्यालय में माहौल बहुत खुशनुमा रहेगा।",
        family: "पति-पत्नी के बीच प्रेम बढ़ेगा। अविवाहित लोगों के लिए विवाह के प्रस्ताव आएंगे। मधुमेह (Diabetes) के रोगियों को सावधान रहना चाहिए।",
        remedy: "शुक्रवार को लक्ष्मी देवी की पूजा करें। गरीब सुहागिन महिलाओं को हल्दी, कुमकुम दान करें।",
        icon: "💎",
        color: "#c2185b"
    },
    "Saturn": {
        theme: "कर्म और कड़ी मेहनत",
        event: "शनि देव आपको धैर्य सिखाएंगे। कोई भी काम आसानी से नहीं होगा, कड़ी मेहनत के बाद ही फल मिलेगा। यह आलस्य का समय नहीं है। आप जितना परिश्रम करेंगे, उतना ही बड़ा फल मिलेगा।",
        career: "काम का बोझ बढ़ेगा। अधिकारियों का दबाव हो सकता है। लेकिन डरें नहीं, यह आपके भविष्य की नींव है। गैरकानूनी कार्यों से दूर रहें।",
        family: "पैरों में दर्द या जोड़ों का दर्द परेशान कर सकता है। पुराने मित्र दूर हो सकते हैं। बुजुर्गों की सेवा करें।",
        remedy: "शनिवार को पीपल के पेड़ के नीचे तिल के तेल का दीपक जलाएं। विकलांगों या मजदूरों की मदद करें।",
        icon: "⚖️",
        color: "#455a64"
    },
    "Rahu": {
        theme: "भ्रम और अचानक बदलाव",
        event: "राहु मतलब माया। इस समय आपको जो नहीं है वह दिखेगा, और जो है वह नहीं दिखेगा। अचानक यात्राएं या अप्रत्याशित खर्च आ सकते हैं। नए लोगों पर आंख मूंदकर भरोसा न करें। विदेश जाने की कोशिश करने वालों के लिए यह अच्छा समय है।",
        career: "राजनीति या टेक्नोलॉजी क्षेत्र में काम करने वालों को अचानक पद मिल सकते हैं। लेकिन षड्यंत्र करने वाले आपके आसपास होंगे, सावधान रहें।",
        family: "अनिद्रा या अज्ञात भय (Anxiety) आपको परेशान कर सकता है। खान-पान में सावधानी बरतें, गैस्ट्रिक समस्याएं हो सकती हैं।",
        remedy: "दुर्गा देवी की पूजा करें। पक्षियों या आवारा कुत्तों को भोजन दें। 'ॐ दुं दुर्गायै नमः' का जाप करें।",
        icon: "🌪️",
        color: "#5d4037"
    },
    "Ketu": {
        theme: "वैराग्य और आध्यात्मिकता",
        event: "केतु आपकी सांसारिक चीजों में रुचि कम करता है। अकेले रहने का मन करेगा। आपकी अंतर्दृष्टि (Intuition) बहुत सटीक काम करेगी। यह धार्मिक कार्यों, योग और ध्यान के लिए बहुत अच्छा समय है।",
        career: "नौकरी छोड़ने का विचार आ सकता है। आपके काम को कोई पहचान नहीं रहा है, ऐसा सोचकर दुखी न हों। शोध (Research) करने वालों के लिए यह अच्छा समय है।",
        family: "शरीर में थकान, दर्द या त्वचा संबंधी समस्याएं हो सकती हैं। किसी से भी अनावश्यक बहस न करें।",
        remedy: "गणपति की पूजा करें। आश्रमों या मंदिरों में दान दें। कुत्तों को भोजन देना शुभ होता है।",
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
        let pNameHI = PLANET_HI[p.name] ? PLANET_HI[p.name].substr(0, 2) : p.name.substr(0, 2);
        return { n: pNameHI, s: vSign };
    });
}

function renderChart(divId, planets) {
    const div = document.getElementById(divId); if (!div) return; div.innerHTML = '';
    const boxOrder = [{s:12}, {s:1}, {s:2}, {s:3}, {s:11}, {s:0}, {s:0}, {s:4}, {s:10}, {s:0}, {s:0}, {s:5}, {s:9}, {s:8}, {s:7}, {s:6}];
    boxOrder.forEach(b => {
        const cell = document.createElement('div'); cell.className = 'house';
        if (b.s !== 0) {
            cell.innerHTML = `<div class="sign-label">${SIGNS_HI[b.s]}</div>`;
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
    let name = (typeof NAKSHATRAS_HI !== 'undefined') ? NAKSHATRAS_HI[idx] : "Unknown";
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

function getSadeSatiStatus() {
    const now = new Date();
    let currentSaturnSign = 11; // Aquarius (approx)
    if (now.getFullYear() >= 2025 && now.getMonth() > 2) currentSaturnSign = 12; // Pisces
    const moon = getPlanet("Moon").lon;
    const moonSign = Math.floor(moon / 30) + 1;
    let diff = (currentSaturnSign - moonSign + 12) % 12;
    let isSadeSati = (diff === 0 || diff === 1 || diff === 11);
    
    // Using English text here for internal logic is fine, 
    // because the display text is handled in the `createSadeSatiPage` (Part 1) function
    // where we used boolean flags to determine what to show in Hindi.
    return { present: isSadeSati, moonSign: SIGNS_HI[moonSign], saturnSign: SIGNS_HI[currentSaturnSign], statusText: isSadeSati ? "Sade Sati is Present" : "No Sade Sati", desc: isSadeSati ? "You are currently undergoing Sade Sati." : "Currently you are free from Sade Sati." };
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
            rows.push({ moonSign: SIGNS_HI[moonSignIdx], satSign: SIGNS_HI[satSignIdx], isRetro: Math.random() > 0.8 ? "true" : "false", phase: p.type, date: "01-01-" + Math.floor(currentY), summary: p.sum });
            currentY += 2.5;
        });
    }
    return rows;
}