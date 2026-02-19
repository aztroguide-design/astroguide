/* ========================================================================== */
/* ASTROGUIDE GENERATOR (ENGLISH VERSION - MERGED & STYLED)                   */
/* ========================================================================== */

/* -------------------------------------------------------------------------- */
/* 1. DATA CONSTANTS & TRANSLATIONS (DEFINED ONCE AT TOP)                     */
/* -------------------------------------------------------------------------- */

const PLANET_EN = {
    "Sun": "Sun", "Moon": "Moon", "Mars": "Mars", "Mercury": "Mercury",
    "Jupiter": "Jupiter", "Venus": "Venus", "Saturn": "Saturn", "Rahu": "Rahu",
    "Ketu": "Ketu", "Ascendant": "Ascendant"
};

const SIGNS_EN = [
    "", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const NAKSHATRAS_EN = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha",
    "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
    "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

const YOGAS_EN = [
    "Vishkumbha", "Priti", "Ayushman", "Saubhagya", "Sobhana", "Atiganda", "Sukarma", "Dhriti", "Shula",
    "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshan", "Vajra", "Siddhi", "Vyatipata", "Variyan",
    "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti"
];

const KARANAS_EN = [
    "Bava", "Balava", "Kaulava", "Taitila", "Gara", "Vanija", "Vishti",
    "Shakuni", "Chatushpada", "Naga", "Kimstughna"
];

const VARAS_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
    const name = document.getElementById('name').value || "User";
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const lat = parseFloat(document.getElementById('lat').value) || 28.61;
    const lng = parseFloat(document.getElementById('lng').value) || 77.20;

    if (!date || !time) { alert("Please enter Date and Time"); return; }

    birthDateObj = new Date(date + 'T' + time);
    calculatePlanets(date, time, lat, lng);

    const container = document.getElementById('reportContainer');
    container.innerHTML = '<div style="text-align:center; padding:50px;"><h2>Generating Report...</h2><div style="font-size:30px;">🕉️</div></div>';

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
        container.appendChild(createPage19());  // 5 Year Chart

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
/* 5. PAGE GENERATORS (COMPLETE SET: 1 TO END)                                */
/* -------------------------------------------------------------------------- */

// --- BRAND HEADER HELPER ---
function addBrandHeader(p) {
    const brand = document.createElement('div');
    brand.className = 'brand-header';
    brand.innerText = 'ASTROGUIDE';
    p.appendChild(brand);
}

// --- COVER PAGE ---
function createCoverPage(name, date, time) {
    const p = document.createElement('div'); p.className = 'page';
    p.innerHTML = `
        <div style="border: 8px double #f57c00; height: 85%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px; margin-top: 20px;">
            <h1 style="font-size:48px; color:#d35400; margin:0;">ASTROGUIDE</h1>
            <h2 style="font-size:24px; color:#555; font-weight:normal;">Complete Vedic Horoscope Report</h2>
            <div style="font-size:80px; margin:40px; color:#f57c00;">🕉️</div>
            <div style="font-size:18px; line-height:2;">
                <b>Name:</b><br>
                <span style="font-size:28px; color:#d35400;">${name}</span><br>
                ${new Date(date).toDateString()} | ${time}
            </div>
        </div>`;
    return p;
}

// --- PAGE 1: BASIC DETAILS ---
function createPage1(name, date, time) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const sun = getPlanet("Sun").lon;
    const moon = getPlanet("Moon").lon;
    
    const getTithi = () => { let t = Math.floor(((moon - sun + 360) % 360) / 12) + 1; return `Tithi ${t}`; };
    const getYoga = () => YOGAS_EN[Math.floor((sun + moon) % 360 / 13.333)] || "";
    const getNak = () => NAKSHATRAS_EN[Math.floor(moon / 13.333333)] || "";
    const getKarana = () => KARANAS_EN[Math.floor((moon - sun + 360) % 360 / 6) % 11] || "";
    const getDay = () => VARAS_EN[new Date(date).getDay()];
    const getSign = (lon) => SIGNS_EN[Math.floor(lon / 30) + 1];
    const getPlanetLord = (lon) => PLANET_EN[getPlanetLordName(Math.floor(lon/30)+1)] || getPlanetLordName(Math.floor(lon/30)+1);

    const row = (l, v) => `<tr><td style="font-weight:bold; color:#555;">${l}</td><td>${v}</td></tr>`;
    
    p.innerHTML += `<div class="header"><h1>Basic Astrological Details</h1></div>
        <div class="flex-row"><div class="half-width"><div class="section-title">Birth Details</div><table>${row("Date", date)}${row("Time", time)}${row("Latitude", document.getElementById('lat').value)}${row("Longitude", document.getElementById('lng').value)}${row("Ayanamsha", "Lahiri (" + ayanamsaVal.toFixed(2) + "°)")}</table></div>
        <div class="half-width"><div class="section-title">Panchang</div><table>${row("Tithi", getTithi())}${row("Yoga", getYoga())}${row("Nakshatra", getNak())}${row("Karana", getKarana())}${row("Day", getDay())}</table></div></div>
        <div class="flex-row" style="margin-top:20px;"><div class="half-width"><div class="section-title">Ghat Chakra</div><table>${row("Moon Sign", getSign(moon))}${row("Yoni", "Gau")}${row("Gana", "Manushya")}${row("Nadi", "Madhya")}</table></div>
        <div class="half-width"><div class="section-title">Avakahada Chakra</div><table>${row("Ascendant", getSign(getPlanet("Ascendant").lon))}${row("Ascendant Lord", getPlanetLord(getPlanet("Ascendant").lon))}${row("Rashi Lord", getPlanetLord(moon))}${row("Nakshatra Lord", PLANET_EN[getNakshatra(moon).lord] || getNakshatra(moon).lord)}${row("Varna", "Vipra")}</table></div></div><div class="footer-num">Page 1</div>`;
    return p;
}

// --- PAGE 2: PLANETARY POSITIONS ---
function createPage2() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let rows = globalPlanets.map(pl => {
        let s = Math.floor(pl.lon / 30) + 1; 
        let nak = getNakshatra(pl.lon); 
        let status = pl.speed < 0 ? "(Retro)" : "";
        let pName = PLANET_EN[pl.name] || pl.name;
        let sName = SIGNS_EN[s];
        let pLord = PLANET_EN[getPlanetLordName(s)] || getPlanetLordName(s);
        let nakName = NAKSHATRAS_EN[nak.id] || nak.name;
        let nakLord = PLANET_EN[nak.lord] || nak.lord;

        return `<tr><td><b>${pName}</b> ${status}</td><td>${sName}</td><td>${formatDeg(pl.lon)}</td><td>${pLord}</td><td>${nakName}</td><td>${nakLord}</td><td>${s}</td></tr>`;
    }).join('');
    
    let cards = globalPlanets.filter(pl => pl.name !== 'Ascendant').map(pl => {
        let nature = ["Jupiter", "Venus", "Mercury", "Moon"].includes(pl.name) ? "Benefic" : "Malefic";
        let pName = PLANET_EN[pl.name] || pl.name;
        let sName = SIGNS_EN[Math.floor(pl.lon/30)+1];
        return `<div class="planet-card"><div class="planet-icon">●</div><div class="planet-info"><b>${pName}</b><span>${sName}</span><div class="${nature.includes('Benefic') ? 'status-benefic' : 'status-malefic'}">${nature}</div></div></div>`;
    }).join('');
    
    p.innerHTML += `<div class="header"><h1>Planetary Positions</h1></div><table><thead><tr><th>Planet</th><th>Sign</th><th>Degree</th><th>Lord</th><th>Nakshatra</th><th>Nak Lord</th><th>House</th></tr></thead><tbody>${rows}</tbody></table><div class="section-title">Planet Details</div><div class="planet-card-grid">${cards}</div><div class="footer-num">Page 2</div>`;
    return p;
}

// --- PAGE 3: MAIN CHARTS ---
function createPage3() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    p.innerHTML += `<div class="header"><h1>Horoscope Charts</h1></div><div class="section-title">Lagna Chart (D1)</div><div class="flex-row"><div style="flex:1"><div id="chartD1" class="chart-grid" style="width:100%; max-width:400px;"></div></div><div style="flex:0.6; padding:15px; background:#fffcf5; border:1px dashed #ffd54f; font-size:11px;"><b>Analysis:</b><br>The Lagna chart represents your physical body and general personality.</div></div><br><div class="flex-row"><div class="half-width"><div class="section-title">Moon Chart</div><div id="chartMoon" class="chart-grid"></div></div><div class="half-width"><div class="section-title">Navamsha Chart (D9)</div><div id="chartD9" class="chart-grid"></div></div></div><div class="footer-num">Page 3</div>`;
    setTimeout(() => { renderChart('chartD1', calculateVargaPositions(1)); renderChart('chartD9', calculateVargaPositions(9)); renderChart('chartMoon', calculateVargaPositions(1)); }, 50);
    return p;
}

// --- PAGE 4: CUSPS ---
function createPage4() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let asc = getPlanet("Ascendant").lon;
    let rows = "";
    for (let i = 1; i <= 12; i++) {
        let mid = (asc + (i - 1) * 30) % 360;
        let signId = Math.floor(mid/30)+1;
        rows += `<tr><td>${i}</td><td>${SIGNS_EN[signId]}</td><td>${formatDeg(mid)}</td><td>${SIGNS_EN[Math.floor(((mid+15)%360)/30)+1]}</td><td>${formatDeg((mid + 15) % 360)}</td></tr>`;
    }
    p.innerHTML += `<div class="header"><h1>House Cusps</h1></div><div style="text-align:center;color:#f57c00;margin-bottom:10px;">Ascendant: ${formatDeg(asc)}</div><table><thead><tr><th>House</th><th>Sign</th><th>Cusp Mid</th><th>Sign</th><th>Cusp End</th></tr></thead><tbody>${rows}</tbody></table><div class="flex-row"><div class="half-width"><div class="section-title">Chalit Chart</div><div id="chartChalit" class="chart-grid"></div></div><div class="half-width" style="padding:20px; font-size:11px;">Chalit chart shows the actual house occupancy of planets.</div></div><div class="footer-num">Page 4</div>`;
    setTimeout(() => renderChart('chartChalit', calculateVargaPositions(1)), 50);
    return p;
}

// --- PAGES 5-6: DIVISIONAL CHARTS ---
function createVargaPage(divisors, pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let grids = divisors.map(d => `<div style="text-align:center;"><div style="font-weight:bold;font-size:11px;margin-bottom:2px;">D-${d}</div><div id="varga${d}_p${pageNum}" class="chart-grid" style="width:150px; height:250px; font-size:8px;"></div></div>`).join('');
    p.innerHTML += `<div class="header"><h1>Divisional Charts</h1></div><div style="display:grid; grid-template-columns:repeat(3,1fr); row-gap:20px; column-gap:10px; justify-items:center; margin-top:20px;">${grids}</div><div class="footer-num">Page ${pageNum}</div>`;
    setTimeout(() => divisors.forEach(d => renderChart(`varga${d}_p${pageNum}`, calculateVargaPositions(d))), 50);
    return p;
}

// --- PAGE 7: FRIENDSHIP ---
function createPage7() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const pl = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"];
    const translateList = (list) => list.map(x => PLANET_EN[x] || x).join(", ");
    const genTable = () => pl.map(x => `<tr><td><b>${PLANET_EN[x]}</b></td><td>${translateList(FRIENDSHIPS[x].f)}</td><td>${translateList(FRIENDSHIPS[x].n)}</td><td>${translateList(FRIENDSHIPS[x].e)}</td></tr>`).join('');
    p.innerHTML += `<div class="header"><h1>Maitri Chakra (Friendship)</h1></div><div class="section-title">Permanent Friendship</div><table><thead><tr><th>Planet</th><th>Friends</th><th>Neutral</th><th>Enemies</th></tr></thead><tbody>${genTable()}</tbody></table><br><div class="section-title">Temporal Friendship</div><table><thead><tr><th>Planet</th><th>Friends</th><th>Neutral</th><th>Enemies</th></tr></thead><tbody>${genTable()}</tbody></table><div class="footer-num">Page 7</div>`;
    return p;
}

// --- PAGE 8: KP ---
function createPage8() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const topRows = globalPlanets.map(pl => {
        let s = Math.floor(pl.lon / 30) + 1;
        let pName = PLANET_EN[pl.name] || pl.name;
        let sName = SIGNS_EN[s];
        let pLord = PLANET_EN[getPlanetLordName(s)] || getPlanetLordName(s);
        let status = pl.speed < 0 ? "Yes" : ""; 
        return `<tr><td style="font-weight:bold;">${pName}</td><td style="color:${pl.speed<0?'red':'inherit'}">${status}</td><td>${sName}</td><td>${formatFullDeg(pl.lon)}</td><td>${pLord}</td><td>${s}</td></tr>`;
    }).join('');
    
    const bottomRows = globalPlanets.map(pl => {
        let nak = getNakshatra(pl.lon);
        let pName = PLANET_EN[pl.name] || pl.name;
        let nakName = NAKSHATRAS_EN[nak.id] || nak.name;
        let nakLord = PLANET_EN[nak.lord] || nak.lord;
        let subLord = PLANET_EN[VIM_LORDS[(nak.id+2)%9]] || VIM_LORDS[(nak.id+2)%9];
        let ssLord = PLANET_EN[VIM_LORDS[(nak.id+4)%9]] || VIM_LORDS[(nak.id+4)%9];
        return `<tr><td style="font-weight:bold;">${pName}</td><td>${nakName}</td><td>${nakLord}</td><td>${nak.charan}</td><td>${subLord}</td><td>${ssLord}</td></tr>`;
    }).join('');
    
    p.innerHTML += `<div class="header"><h1>KP Planetary Details</h1></div><table><thead><tr><th>Planet</th><th>Retro</th><th>Sign</th><th>Degree</th><th>Lord</th><th>House</th></tr></thead><tbody>${topRows}</tbody></table><br><table><thead><tr><th>Planet</th><th>Nakshatra</th><th>Nak Lord</th><th>Pada</th><th>Sub Lord</th><th>Sub-Sub Lord</th></tr></thead><tbody>${bottomRows}</tbody></table><div class="footer-num">Page 8</div>`;
    return p;
}

// --- PAGE 9: VIMSHOTTARI I ---
function createPage9() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const dashas = calcVimshottari().slice(0, 6);
    const createCol = (d) => {
        const adList = getAntardashaDates(d.lord, d.start);
        const mdName = PLANET_EN[d.lord] || d.lord;
        let h = `<div class="dasha-col"><div class="dasha-header"><div class="dasha-planet">${mdName}</div><div class="dasha-time">${d.start}</div><div class="dasha-time">${d.end}</div></div>`;
        adList.forEach(ad => {
            let adName = PLANET_EN[ad.lord] || ad.lord;
            h += `<div class="ad-row"><span class="ad-planet">${adName}</span><span class="ad-date">${ad.date}</span></div>`; 
        });
        return h + `</div>`;
    };
    p.innerHTML += `<div class="header"><h1>Vimshottari Dasha - I</h1></div><div class="dasha-grid" style="margin-top:30px;">${dashas.slice(0,3).map(createCol).join('')}</div><div class="dasha-grid">${dashas.slice(3,6).map(createCol).join('')}</div><div class="footer-num">Page 9</div>`;
    return p;
}

// --- PAGE 10: VIMSHOTTARI II ---
function createPage10() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const dashas = calcVimshottari().slice(6, 9);
    const createCol = (d) => {
        const adList = getAntardashaDates(d.lord, d.start);
        const mdName = PLANET_EN[d.lord] || d.lord;
        let h = `<div class="dasha-col"><div class="dasha-header"><div class="dasha-planet">${mdName}</div><div class="dasha-time">${d.start}</div><div class="dasha-time">${d.end}</div></div>`;
        adList.forEach(ad => {
            let adName = PLANET_EN[ad.lord] || ad.lord;
            h += `<div class="ad-row"><span class="ad-planet">${adName}</span><span class="ad-date">${ad.date}</span></div>`; 
        });
        return h + `</div>`;
    };
    let currentData = getCurrentDashaData();
    let currMD = PLANET_EN[currentData.md.lord] || currentData.md.lord;
    let currAD = PLANET_EN[currentData.ad.lord] || currentData.ad.lord;
    p.innerHTML += `<div class="header"><h1>Vimshottari Dasha - II</h1></div><div class="dasha-grid" style="margin-top:30px;">${dashas.map(createCol).join('')}</div><div class="section-title" style="margin-top:40px;">Current Dasha</div><table class="current-dasha-table"><thead><tr><th>Dasha</th><th>Planet</th><th>Start Date</th><th>End Date</th></tr></thead><tbody><tr><td><b>Mahadasha</b></td><td>${currMD}</td><td>${currentData.md.start}</td><td>${currentData.md.end}</td></tr><tr style="background:#ffebee;"><td><b>Antardasha</b></td><td>${currAD}</td><td>${currentData.ad.start}</td><td>${currentData.ad.end}</td></tr><tr><td><b>Pratyantar</b></td><td>-</td><td>-</td><td>-</td></tr></tbody></table><div class="footer-num">Page 10</div>`;
    return p;
}

// --- PAGE 11: KALSARPA (MERGED) ---
function createKalsarpaPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const kData = checkKalsarpa();
    const types = ["Anant", "Kulik", "Vasuki", "Shankhpal", "Padma", "Mahapadma", "Takshak", "Karkotak", "Shankhchood", "Ghatak", "Vishdhar", "Sheshnaag"];
    const gridHtml = types.map((t, i) => {
        let activeClass = (kData.present && kData.typeId === (i+1)) ? "active" : "";
        return `<div class="kalsarp-btn ${activeClass}">${t}</div>`;
    }).join('');
    const statusText = kData.present ? "Kalsarpa Dosha Present" : "Kalsarpa Dosha Absent";
    let reportText = kData.present 
        ? `In your horoscope, <b>${kData.name} Kalsarpa Dosha</b> is present. All planets are hemmed between Rahu and Ketu. This may cause obstacles in success and unrest in married life. Performing proper remedies can reduce the effects.`
        : `Your horoscope is free from <b>Kalsarpa Dosha</b>. You will not face issues related to this specific dosha.`;

    p.innerHTML += `<div class="header"><h1>Kalsarpa Dosha</h1></div>
        <div style="display:flex; gap:15px; margin-bottom:15px;">
            <div style="flex:1;">
               <div class="section-title">Dosha Types</div>
               <div class="dosha-grid" style="grid-template-columns: repeat(3, 1fr); font-size:9px;">${gridHtml}</div>
            </div>
            <div style="flex:1; display:flex; flex-direction:column; justify-content:center; text-align:center;">
               <span class="face-icon ${kData.present ? 'face-sad' : 'face-happy'}" style="font-size:40px;">${kData.present ? '☹' : '☺'}</span>
               <div style="font-weight:bold; color:#333; margin-top:5px;">${statusText}</div>
               <div style="font-size:10px; color:#666;">${kData.present ? kData.name : "N/A"}</div>
            </div>
        </div>
        <div class="section-title">Analysis</div>
        <p style="font-size:11px; line-height:1.6; text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px;">${reportText}</p>
        <div class="section-title" style="margin-top:20px;">Remedies</div>
        <div class="remedy-box"><ul><li>Perform Rudrabhishekam to Lord Shiva.</li><li>Install a Kalsarpa Yantra in your pooja room.</li><li>Perform Dosha Nivarana Pooja on Wednesday or Friday.</li><li>Donate red or black lentils to the poor.</li><li>Wear an 8 or 9 Mukhi Rudraksha.</li></ul></div>
        <div class="footer-num">Page ${pageNum}</div>`;
    return p;
}

// --- PAGE 12: MANGLIK (MERGED) ---
function createManglikPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const mData = checkManglik();
    const statusText = mData.isManglik 
        ? 'Manglik Dosha (Kuja Dosha) detected in your chart. Horoscope matching is required before marriage as the dosha effect is present.' 
        : 'Mars is well placed in your chart. You are Non-Manglik and free from Kuja Dosha.';
    const houseReasons = mData.reasonsHouse.length > 0 ? mData.reasonsHouse.join('<br>') : "No negative placements.";

    p.innerHTML += `<div class="header"><h1>Manglik Dosha Analysis</h1></div>
        <div style="display:flex; gap:20px; align-items:center; margin-bottom:20px;">
            <div style="flex:1; text-align:center;">
                <div class="progress-container"><div class="progress-bar" style="width:${mData.percent}%">${mData.percent}%</div></div>
                <div style="font-weight:bold; font-size:12px; margin-top:5px;">Dosha Severity</div>
            </div>
            <div style="flex:2; font-size:11px; text-align:justify; background:#fff3e0; padding:10px; border-radius:5px;">
                ${statusText}
            </div>
        </div>
        <div class="flex-row">
            <div class="analysis-col">
                <div class="analysis-header">Reasons</div>
                <div class="analysis-list" style="font-size:10px;">${houseReasons}</div>
            </div>
            <div class="analysis-col">
                <div class="analysis-header">Shloka</div>
                <div style="font-style:italic; font-size:10px; text-align:center; padding-top:10px;">Lagne vyaye sukhe vapi saptame va ashtame kuje | <br>Shubha drig yoga heene cha patim hanti na samshayam ||</div>
            </div>
        </div>
        <div class="section-title" style="margin-top:20px;">Remedies</div>
        <div class="remedy-box" style="border-left-color: #d35400;"><ul><li>Install a Mangal Yantra in your pooja room.</li><li>Visit a Hanuman temple every Tuesday and offer vermilion and red flowers.</li><li>Chant Hanuman Mantra: <b>|| Om Shreem Hanumate Namah ||</b></li><li>Observe fasting on Tuesdays.</li><li>Kumbh Vivah (Marriage with pot) is recommended before actual marriage.</li></ul></div>
        <div class="footer-num">Page ${pageNum}</div>`;
    return p;
}

// --- PAGE 13: SADE SATI (MERGED) ---
function createSadeSatiPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const status = getSadeSatiStatus();
    const fullTimeline = getSadeSatiTimeline();
    const timelineRows = fullTimeline.slice(0, 5).map(r => `<tr><td>${r.date}</td><td>${r.satSign}</td><td>${r.phase}</td></tr>`).join('');

    p.innerHTML += `<div class="header"><h1>Sade Sati Analysis</h1></div>
        <div style="display:flex; gap:15px; margin-bottom:20px;">
            <div class="ss-status-card" style="flex:1;">
                <div style="font-size:30px; color:${status.present ? '#e53935' : '#43a047'}; margin-bottom:5px;">${status.present ? '☹' : '☺'}</div>
                <div style="font-weight:bold; font-size:12px;">${status.statusText}</div>
                <div style="font-size:10px; color:#666;">${status.desc}</div>
            </div>
            <div class="ss-table-card" style="flex:1.5;">
                <table style="margin-bottom:0;">
                    <tr><td style="font-weight:bold;">Moon Sign</td><td>${status.moonSign}</td></tr>
                    <tr><td style="font-weight:bold;">Saturn Sign</td><td>${status.saturnSign}</td></tr>
                </table>
            </div>
        </div>
        <div class="section-title">Upcoming Phases</div>
        <table class="ss-timeline-table">
            <thead><tr><th>Date</th><th>Saturn Sign</th><th>Phase</th></tr></thead>
            <tbody>${timelineRows}</tbody>
        </table>
        <div class="section-title" style="margin-top:15px;">Remedies</div>
        <div class="remedy-box-green" style="font-size:10px;">
            <ul>
                <li>Serve your parents and the elderly.</li>
                <li>Recite Hanuman Chalisa daily.</li>
                <li>Observe fasting on Saturdays from sunrise to sunset.</li>
                <li>Donate Urad Dal (black gram), oil, or black sesame seeds to the poor.</li>
                <li>Mantra: "|| Om Sham Shanishcharaya Namah ||"</li>
            </ul>
        </div>
        <div class="footer-num">Page ${pageNum}</div>`;
    return p;
}

// --- PAGE 14: 5 YEAR CHART ---
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
                md: PLANET_EN[md.lord] || md.lord,
                ad: PLANET_EN[ad.lord] || ad.lord,
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
            <td>${d.md === d.ad ? 'Major Shift' : 'Sub Period'}</td>
        </tr>
    `).join('');

    p.innerHTML += `
        <div class="header"><h1>5-Year Personal Chart</h1></div>
        <div class="section-title">Upcoming Periods (${today.getFullYear()} - ${future.getFullYear()})</div>
        <p style="font-size:11px; text-align:center;">This chart shows the major planetary influences for the next 5 years.</p>
        
        <table class="year-chart-table">
            <thead>
                <tr>
                    <th>Dasha (MD-AD)</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
        
        <div class="quote-box">
            "Planets impel, but they do not compel. Use this time wisely."
        </div>
        <div class="footer-num">Page 14</div>`;
    return p;
}

// --- HELPER: REPORT PAGE GENERATOR (With Brand Header) ---
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
                    <div style="font-size:12px; color:#666;">Sanskrit Shloka & Status</div>
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

        <div class="section-title" style="color:#2e7d32; border-color:#2e7d32;">Astrologer's Verdict</div>
        
        <div style="display:flex; gap:15px; margin-bottom:20px;">
            <div style="flex:1;">
                 <div style="background:#f1f8e9; padding:15px; border-radius:8px; border-left:5px solid #43a047; font-size:12px; line-height:1.8; text-align:justify; color:#333;">
                    <span style="font-size:30px; float:left; margin-right:10px; line-height:30px; color:#43a047;">❝</span>
                    ${speakText}
                    <span style="font-size:30px; float:right; margin-left:10px; line-height:0; color:#43a047; margin-top:10px;">❞</span>
                 </div>
            </div>
        </div>

        <div class="section-title" style="color:#d32f2f; border-color:#d32f2f;">Advice & Precautions</div>
        
        <div style="background:#ffebee; padding:15px; border-radius:8px; border:1px dashed #ef5350; display:flex; gap:15px; align-items:center;">
            <div style="font-size:24px;">💡</div>
            <div style="font-size:12px; line-height:1.6; color:#b71c1c; font-weight:500;">
                ${adviceText}
            </div>
        </div>
        
        <div class="footer-num">Page ${pageNum}</div>
    `;
    return p;
}

// --- HELPER: PLANET BUILDER ---
function buildPlanetPage(planetName, pageNum) {
    const data = PLANET_REPORT_DATA[planetName];
    const planetInfo = getPlanet(planetName);
    const signIdx = Math.floor(planetInfo.lon / 30) + 1;
    const signName = SIGNS_EN[signIdx]; 

    const tableHtml = `
        <tr><td><b>Sign</b></td><td><b>${signName}</b></td></tr>
        <tr><td><b>Nakshatra</b></td><td>${getNakshatra(planetInfo.lon).name}</td></tr>
        <tr><td><b>Status</b></td><td>${planetInfo.speed < 0 ? "<span style='color:red'>Retrograde</span>" : "Direct"}</td></tr>
        <tr><td><b>Degree</b></td><td>${formatDeg(planetInfo.lon)}</td></tr>
    `;
    
    const personalizedSpeak = `In your horoscope, ${PLANET_EN[planetName]} is placed in <b>${signName}</b>. ${data.speak}`;
    
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

// --- PAGE 15: ASCENDANT REPORT ---
function createPage20() {
    const ascLon = getPlanet("Ascendant").lon;
    const signIdx = Math.floor(ascLon / 30) + 1;
    const signInfo = SIGN_INFO[signIdx];
    const signName = SIGNS_EN[signIdx];
    
    const rawLord = signInfo.lord;
    const lordName = PLANET_EN[rawLord] ? PLANET_EN[rawLord] : rawLord;

    const tableHtml = `
        <tr><td><b>Lord</b></td><td>${lordName}</td></tr>
        <tr><td><b>Element</b></td><td>${signInfo.element}</td></tr>
        <tr><td><b>Gemstone</b></td><td>${signInfo.gem}</td></tr>
        <tr><td><b>Symbol</b></td><td>${signInfo.sym}</td></tr>
    `;

    const speakText = `Namaste! You are born in <b>${signName}</b> Ascendant. The Ascendant represents your self, personality, and body. 
    ${signName} is ruled by <b>${lordName}</b>. This gives you natural courage and perseverance. You possess leadership qualities and a strong drive to make a mark in society.`;

    const adviceText = `Since your Ascendant Lord is <b>${lordName}</b>, it is beneficial to start important tasks on the day ruled by this planet (${signInfo.day}).`;

    return createReportPage(
        "Ascendant Analysis", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Classic_1635_Schiller_constellation_Capricornus.png/250px-Classic_1635_Schiller_constellation_Capricornus.png", 
        tableHtml,
        "Deham roopam cha gnanam cha varnam chaiva balabalam |<br>Sukham duhkham svabhavancha lagnabhavannirikshayet ||",
        speakText,
        adviceText,
        `Ascendant: ${signName}`,
        15
    );
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

// --- PAGE 25: PRATYANTAR DASHA ---
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
        <div class="footer-num">Page 25</div>`;
    return p;
}

// --- PAGES 26+: FUTURE PREDICTIONS ---
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
                    
                    const mdName = PLANET_EN[md.lord] || md.lord;
                    const adName = PLANET_EN[ad.lord] || ad.lord;
                    const pdName = PLANET_EN[pd.pd] || pd.pd;
                    
                    const pdData = PREDICTION_DB[pd.pd];
                    const themeColor = pdData.color;

                    p.innerHTML += `
                        <div class="header"><h1>Predictions & Remedies</h1></div>
                        
                        <div style="background:${themeColor}15; border-left: 6px solid ${themeColor}; padding:15px; margin-bottom:20px; border-radius:4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                            <div style="font-size:11px; text-transform:uppercase; color:#555; font-weight:bold; letter-spacing:1px;">Time Period</div>
                            <div style="font-size:18px; font-weight:bold; color:#222; margin-top:5px;">
                                ${pd.startStr} <span style="font-size:14px; font-weight:normal; color:#666;">to</span> ${pd.endStr}
                            </div>
                        </div>

                        <div class="dasha-flow">
                            <div class="df-box">
                                <div>Major (MD)</div>
                                <div class="df-planet">${mdName}</div>
                            </div>
                            <div class="df-arrow">➜</div>
                            <div class="df-box">
                                <div>Sub (AD)</div>
                                <div class="df-planet">${adName}</div>
                            </div>
                            <div class="df-arrow">➜</div>
                            <div class="df-box df-active" style="border-color:${themeColor}; background:${themeColor}10;">
                                <div>Current (PD)</div>
                                <div class="df-planet" style="color:${themeColor}; font-size:14px;">${pdName}</div>
                            </div>
                        </div>

                        <div class="section-title" style="color:${themeColor}; border-color:${themeColor};">Astrologer's Analysis</div>

                        <div style="display:flex; gap:20px; margin-bottom:20px; align-items:flex-start;">
                            <div style="flex:0.8; text-align:center;">
                                <div style="background:#fafafa; border-radius:50%; width:70px; height:70px; display:flex; align-items:center; justify-content:center; font-size:35px; border:2px solid ${themeColor}; margin:0 auto;">
                                    ${pdData.icon}
                                </div>
                                <div style="font-size:10px; font-weight:bold; margin-top:5px; color:#555;">${pdName} Effect</div>
                            </div>
                            <div style="flex:3; font-size:12px; text-align:justify; line-height:1.8; color:#333;">
                                <p><strong>Hello!</strong> You are currently under the influence of <b>${mdName}</b> Mahadasha and <b>${pdName}</b> Pratyantar Dasha.</p>
                                <p>${pdData.event}</p>
                            </div>
                        </div>

                        <div class="pred-grid">
                            <div class="pred-item">
                                <div class="pi-head">💰 Career & Finance</div>
                                <div class="pi-body">
                                    ${pdData.career}
                                </div>
                            </div>
                            <div class="pred-item">
                                <div class="pi-head">❤️ Family & Health</div>
                                <div class="pi-body">
                                    ${pdData.family}
                                </div>
                            </div>
                        </div>

                        <div class="section-title" style="margin-top:25px; color:#d35400;">Remedies</div>
                        <div style="background:#fff8e1; padding:15px; border-radius:8px; border:1px dashed #ffa726; display:flex; gap:15px; align-items:center;">
                            <div style="font-size:24px;">🕉️</div>
                            <div style="font-size:11px; line-height:1.6; color:#5d4037;">
                                <b>Astrological Advice:</b><br>
                                ${pdData.remedy}
                            </div>
                        </div>

                        <div class="footer-num">Page ${pageCount}</div>
                    `;
                    pages.push(p);
                    pageCount++;
                }
            });
        });
    });
    return pages;
}
/* ========================================================================== */
/* PART 3: LOGIC, CALCULATIONS & ENGLISH DATA TABLES                          */
/* ========================================================================== */

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
        let pName = PLANET_EN[p.name] ? PLANET_EN[p.name].substr(0, 2) : p.name.substr(0, 2);
        return { n: pName, s: vSign };
    });
}

function renderChart(divId, planets) {
    const div = document.getElementById(divId); if (!div) return; div.innerHTML = '';
    const boxOrder = [{s:12}, {s:1}, {s:2}, {s:3}, {s:11}, {s:0}, {s:0}, {s:4}, {s:10}, {s:0}, {s:0}, {s:5}, {s:9}, {s:8}, {s:7}, {s:6}];
    boxOrder.forEach(b => {
        const cell = document.createElement('div'); cell.className = 'house';
        if (b.s !== 0) {
            cell.innerHTML = `<div class="sign-label">${SIGNS_EN[b.s].substr(0,3)}</div>`;
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
    let name = (typeof NAKSHATRAS_EN !== 'undefined') ? NAKSHATRAS_EN[idx] : "Unknown";
    return { name: name, lord: VIM_LORDS[idx % 9], charan: charan, id: idx }; 
}
function getPlanetLordName(signIdx) { const lords = ["Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"]; return lords[(signIdx - 1) % 12] || ""; }
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

/* --- DOSHA CHECKS --- */
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

/* --- SADE SATI --- */
function getSadeSatiStatus() {
    const now = new Date();
    // Simplified: Saturn in Pisces (Sign 12) from 2025-2027
    let currentSaturnSign = 11; // Aquarius
    if (now.getFullYear() >= 2025 && now.getMonth() > 2) currentSaturnSign = 12; // Pisces

    const moon = getPlanet("Moon").lon;
    const moonSign = Math.floor(moon / 30) + 1;
    let diff = (currentSaturnSign - moonSign + 12) % 12;
    let isSadeSati = (diff === 0 || diff === 1 || diff === 11);
    
    return {
        present: isSadeSati,
        moonSign: SIGNS_EN[moonSign],
        saturnSign: SIGNS_EN[currentSaturnSign],
        statusText: isSadeSati ? "Sade Sati is Present" : "No Sade Sati",
        desc: isSadeSati ? "You are currently undergoing Sade Sati." : "Currently you are free from Sade Sati."
    };
}

function getSadeSatiTimeline() {
    const moon = getPlanet("Moon").lon;
    const moonSignIdx = Math.floor(moon / 30) + 1;
    const birthYear = birthDateObj.getFullYear();
    const rows = [];
    let startY = birthYear + 5; 
    
    const phases = [
        { type: "RISING", sum: "Rise Phase" },
        { type: "PEAK", sum: "Peak Phase" },
        { type: "SETTING", sum: "Setting Phase" }
    ];

    for(let cycle=0; cycle<3; cycle++) {
        let currentY = startY + (cycle * 29);
        phases.forEach(p => {
            let satSignIdx = (moonSignIdx + (p.type==="RISING"?-1:(p.type==="PEAK"?0:1)) - 1 + 12)%12 + 1;
            rows.push({
                moonSign: SIGNS_EN[moonSignIdx],
                satSign: SIGNS_EN[satSignIdx],
                isRetro: Math.random() > 0.8 ? "true" : "false",
                phase: p.type,
                date: "01-01-" + Math.floor(currentY),
                summary: p.sum
            });
            currentY += 2.5;
        });
    }
    return rows;
}

/* -------------------------------------------------------------------------- */
/* 7. ENGLISH DATA TABLES                                                     */
/* -------------------------------------------------------------------------- */

const SIGN_INFO = [
    null,
    { name: "Aries", lord: "Mars", sym: "Ram", element: "Fire", gem: "Coral", day: "Tuesday" },
    { name: "Taurus", lord: "Venus", sym: "Bull", element: "Earth", gem: "Diamond", day: "Friday" },
    { name: "Gemini", lord: "Mercury", sym: "Twins", element: "Air", gem: "Emerald", day: "Wednesday" },
    { name: "Cancer", lord: "Moon", sym: "Crab", element: "Water", gem: "Pearl", day: "Monday" },
    { name: "Leo", lord: "Sun", sym: "Lion", element: "Fire", gem: "Ruby", day: "Sunday" },
    { name: "Virgo", lord: "Mercury", sym: "Virgin", element: "Earth", gem: "Emerald", day: "Wednesday" },
    { name: "Libra", lord: "Venus", sym: "Scales", element: "Air", gem: "Diamond", day: "Friday" },
    { name: "Scorpio", lord: "Mars", sym: "Scorpion", element: "Water", gem: "Coral", day: "Tuesday" },
    { name: "Sagittarius", lord: "Jupiter", sym: "Archer", element: "Fire", gem: "Yellow Sapphire", day: "Thursday" },
    { name: "Capricorn", lord: "Saturn", sym: "Goat", element: "Earth", gem: "Blue Sapphire", day: "Saturday" },
    { name: "Aquarius", lord: "Saturn", sym: "Water Bearer", element: "Air", gem: "Blue Sapphire", day: "Saturday" },
    { name: "Pisces", lord: "Jupiter", sym: "Fish", element: "Water", gem: "Yellow Sapphire", day: "Thursday" }
];

const PLANET_REPORT_DATA = {
    "Sun": {
        title: "Sun Analysis",
        nature: "Soul & Father (Atmakaraka)",
        shloka: "Japa kusuma sankasham kashyapeyam mahadyutim |<br>Tamorim sarva papaghnam pranatosmi divakaram ||",
        speak: "The Sun is the 'King' of the zodiac. A strong Sun in your chart gives you natural leadership qualities. You do not like working under others; leading people gives you satisfaction. Your willpower is very strong. However, sometimes your firmness may appear as arrogance to others.",
        advice: "Respecting your father and adhering to government rules will help you rise higher in life.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sun_symbol.svg/100px-Sun_symbol.svg.png"
    },
    "Moon": {
        title: "Moon Analysis",
        nature: "Mind & Mother (Manokaraka)",
        shloka: "Dadhi shankha tusharabham kshirodarnava sambhavam |<br>Namami shashinam somam shambhormukuta bhushanam ||",
        speak: "The Moon rules the mind. You are very sensitive and emotional. You are easily moved by the suffering of others. Your thoughts change like the tides of the ocean. You love traveling and seeing new places. You share a special bond with your mother.",
        advice: "Stop worrying about small things. Learn to make decisions with your intellect rather than just emotions.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Moon_Symbol.svg/100px-Moon_Symbol.svg.png"
    },
    "Mars": {
        title: "Mars Analysis",
        nature: "Siblings & Energy (Bhratrukaraka)",
        shloka: "Dharani garbha sambhutam vidyut kanti samaprabham |<br>Kumaram shakti hastam tam mangalam pranamamyaham ||",
        speak: "Mars is the 'Commander'. You possess tireless energy. Once you start a task, you do not rest until it is finished. You have more courage than fear. Land and property dealings favor you. However, your temper sits on your nose. Haste can cause you to lose good opportunities.",
        advice: "Be careful while driving vehicles. If you use your energy for constructive work, you will create wonders.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mars_symbol.svg/100px-Mars_symbol.svg.png"
    },
    "Mercury": {
        title: "Mercury Analysis",
        nature: "Intellect & Business (Vidyakaraka)",
        shloka: "Priyangu kalika shyamam rupena pratimam budham |<br>Saumyam saumya gunopetam tam budham pranamamyaham ||",
        speak: "Mercury is the 'Prince'. You are blessed with intelligence, humor, and business acumen. You can easily impress others with your words. You have a good grasp of mathematics, astrology, or accounts. You always like to appear young and cheerful.",
        advice: "Focusing on too many tasks at once may leave them unfinished. Improve your concentration. Take care of your skin.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mercury_symbol.svg/100px-Mercury_symbol.svg.png"
    },
    "Jupiter": {
        title: "Jupiter Analysis",
        nature: "Wealth & Wisdom (Putrakaraka)",
        shloka: "Devanam cha rishinam cha gurum kanchana sannibham |<br>Buddhibhutam trilokesham tam namami brihaspatim ||",
        speak: "Jupiter is the 'Guru' and advisor. You earn respect in society due to Jupiter's grace. You respect traditions and divinity. Even in difficult times, divine help reaches you in some form. You give good advice to others. There will be no shortage of wealth.",
        advice: "Being too good is not always useful. Do not trust everyone blindly. Reduce intake of sweets to protect your liver health.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jupiter_symbol.svg/100px-Jupiter_symbol.svg.png"
    },
    "Venus": {
        title: "Venus Analysis",
        nature: "Spouse & Luxury (Kalatrakaraka)",
        shloka: "Hima kunda mrinalabham daityanam paramam gurum |<br>Sarva shastra pravaktaram bhargavam pranamamyaham ||",
        speak: "Venus is the planet of luxury. You prioritize comfort and luxury in life. You want not only yourself but also your surroundings to be beautiful. You have an interest in arts, music, cinema, or fashion. Love and marriage play a key role in your life.",
        advice: "Do not spend excessively on luxuries. Being respectful towards the opposite gender increases your Venus strength.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Venus_symbol.svg/100px-Venus_symbol.svg.png"
    },
    "Saturn": {
        title: "Saturn Analysis",
        nature: "Karma & Longevity (Ayushkaraka)",
        shloka: "Nilanjana samabhasam raviputram yamagrajam |<br>Chhaya martanda sambhutam tam namami shanaishcharam ||",
        speak: "Saturn is the 'Judge'. Nothing comes easily in your life, but hard work yields lasting results. You are very practical. Laziness is your main enemy. You may prefer solitude or deep thinking. Helping the poor and workers will help you rise in life.",
        advice: "Give up the habit of procrastination. If you remain righteous, Saturn will take you to great heights.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Saturn_symbol.svg/100px-Saturn_symbol.svg.png"
    },
    "Rahu": {
        title: "Rahu Analysis",
        nature: "Illusion & Foreign (Maya)",
        shloka: "Ardha kayam maha viryam chandraditya vimardanam |<br>Simhika garbha sambhutam tam rahum pranamamyaham ||",
        speak: "Rahu is the 'Shadow Planet'. It gives you endless ambition. You think differently from traditional methods. You have a desire to go abroad or excel in technology. Sometimes you may feel fear or illusions that are not real. Sudden gains or losses are a trait of Rahu.",
        advice: "Do not try to achieve success through shortcuts; it is temporary. Worship of Goddess Durga will benefit you.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Rahu_symbol.svg/100px-Rahu_symbol.svg.png"
    },
    "Ketu": {
        title: "Ketu Analysis",
        nature: "Detachment & Wisdom (Mokshakaraka)",
        shloka: "Palasha pushpa sankasham taraka graha mastakam |<br>Raudram raudratmakam ghoram tam ketum pranamamyaham ||",
        speak: "Ketu is the planet of 'Wisdom'. You are spiritually inclined. Sometimes you feel detached from the world and relationships. Your intuition is very strong; you can sense things before they happen. You excel in research, occult, or spiritual fields.",
        advice: "Do not think too much about the past. Worshiping Lord Ganesha removes the confusion in your mind.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ketu_symbol.svg/100px-Ketu_symbol.svg.png"
    },
    "Ascendant": {
        title: "Ascendant Analysis",
        nature: "Self (Lagna)",
        shloka: "",
        speak: "",
        advice: "",
        img: ""
    }
};

const PREDICTION_DB = {
    "Sun": {
        theme: "Confidence & Authority",
        event: "The Sun represents the King. Your confidence will increase significantly during this time. You will gain recognition in society. It is a good time for government work or meeting officials.",
        career: "Expect a promotion or new responsibilities at work. It is a testing time for your leadership qualities.",
        family: "Take care of your father's health. Body heat may increase, leading to eye strain or headaches.",
        remedy: "Perform Surya Namaskar every morning. Listen to Aditya Hridayam.",
        icon: "👑",
        color: "#ff9800"
    },
    "Moon": {
        theme: "Mental State & Travel",
        event: "The Moon rules the mind. Your mind may not be stable during this time. You might overthink small issues. Travel is indicated.",
        career: "You may desire changes in your profession. Work pressure may cause mental fatigue.",
        family: "Take care of your mother's health. Cold, cough, or water-borne diseases are possible.",
        remedy: "Offer milk at a Shiva temple on Mondays. Drinking water from a silver glass calms the mind.",
        icon: "🌙",
        color: "#2196f3"
    },
    "Mars": {
        theme: "Energy & Courage",
        event: "Mars gives you immense energy. You will start tasks with courage. However, you must control your anger. Hasty decisions may lead to conflicts.",
        career: "Great time for those in technical, real estate, or police fields. You will conquer your enemies.",
        family: "Minor conflicts with siblings are possible. Watch out for blood pressure or minor injuries.",
        remedy: "Worship Lord Subramanya or Hanuman on Tuesdays. Donate red lentils.",
        icon: "⚔️",
        color: "#d32f2f"
    },
    "Mercury": {
        theme: "Intellect & Business",
        event: "It is time to show your intellectual strength. Your decisions will be very wise. Favorable time for students and businessmen.",
        career: "Your communication skills will be excellent. Good time to sign business deals.",
        family: "Relatives may visit your home. Skin allergies or nervous weakness may occur.",
        remedy: "Feed green grass or spinach to cows on Wednesdays.",
        icon: "📚",
        color: "#388e3c"
    },
    "Jupiter": {
        theme: "Wisdom & Wealth",
        event: "A positive change is coming into your life due to Jupiter's grace. You will receive blessings from elders. Interest in spirituality will increase.",
        career: "Promotion or salary hike is possible. Golden period for teachers and advisors.",
        family: "Good news regarding children is possible. Avoid excessive sweets to prevent weight gain.",
        remedy: "Visit a Sai Baba or Dattatreya temple on Thursdays. Apply saffron tilak on your forehead.",
        icon: "✨",
        color: "#fbc02d"
    },
    "Venus": {
        theme: "Luxury & Happiness",
        event: "Venus gives you luxuries. You may plan to buy new clothes, jewelry, or a vehicle. Your charm will increase.",
        career: "Excellent for arts, cinema, fashion, and design fields. Atmosphere at the office will be cheerful.",
        family: "Harmony between husband and wife will increase. Marriage proposals for singles.",
        remedy: "Worship Goddess Lakshmi on Fridays.",
        icon: "💎",
        color: "#c2185b"
    },
    "Saturn": {
        theme: "Karma & Hard Work",
        event: "Saturn teaches you patience. Nothing comes easily, but hard work yields lasting results. This is not the time for laziness.",
        career: "Workload will increase. Pressure from superiors is possible. But this lays the foundation for your future.",
        family: "Leg pain or joint issues may trouble you. Old friends may drift away.",
        remedy: "Light a sesame oil lamp under a Peepal tree on Saturdays. Help the disabled.",
        icon: "⚖️",
        color: "#455a64"
    },
    "Rahu": {
        theme: "Illusion & Sudden Change",
        event: "Rahu means illusion. Sudden travels or unexpected expenses may occur. Do not blindly trust new people.",
        career: "Sudden positions in politics or technology may come. But beware of conspiracies.",
        family: "Insomnia or anxiety may trouble you. Be careful with food; gastric issues are possible.",
        remedy: "Worship Goddess Durga. Feed birds or stray dogs.",
        icon: "🌪️",
        color: "#5d4037"
    },
    "Ketu": {
        theme: "Detachment & Spirituality",
        event: "Ketu reduces interest in worldly matters. You may want to spend time alone. Your intuition works well.",
        career: "You may think of quitting your job. Good time for researchers.",
        family: "Fatigue or skin issues may occur. Do not get into unnecessary arguments.",
        remedy: "Worship Lord Ganesha. Donate to ashrams or temples.",
        icon: "🚩",
        color: "#616161"
    }
};