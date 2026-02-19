/* ========================================================================== */
/* ASTROGUIDE GENERATOR (MALAYALAM VERSION)                                   */
/* ========================================================================== */

/* -------------------------------------------------------------------------- */
/* 1. DATA CONSTANTS & TRANSLATIONS (DEFINED ONCE AT TOP)                     */
/* -------------------------------------------------------------------------- */

const PLANET_ML = {
    "Sun": "സൂര്യൻ", "Moon": "ചന്ദ്രൻ", "Mars": "ചൊവ്വ", "Mercury": "ബുധൻ",
    "Jupiter": "വ്യാഴം", "Venus": "ശുക്രൻ", "Saturn": "ശനി", "Rahu": "രാഹു",
    "Ketu": "കേതു", "Ascendant": "ലഗ്നം"
};

const SIGNS_ML = [
    "", "മേടം", "ഇടവം", "മിഥുനം", "കർക്കിടകം", "ചിങ്ങം", "കന്നി",
    "തുലാം", "വൃശ്ചികം", "ധനു", "മകരം", "കുംഭം", "മീനം"
];

const NAKSHATRAS_ML = [
    "അശ്വതി", "ഭരണി", "കാർത്തിക", "രോഹിണി", "മകയിരം", "തിരുവാതിര", "പുണർതം", "പൂയം", "ആയില്യം",
    "മകം", "പൂരം", "ഉത്രം", "അത്തം", "ചിത്തിര", "ചോതി", "വിശാഖം", "അനിഴം", "തൃക്കേട്ട",
    "മൂലം", "പൂരാടം", "ഉത്രാടം", "തിരുവോണം", "അവിട്ടം", "ചതയം", "പൂരുരുട്ടാതി", "ഉത്രട്ടാതി", "രേവതി"
];

const YOGAS_ML = [
    "വിഷ്കംഭം", "പ്രീതി", "ആയുഷ്മാൻ", "സൗഭാഗ്യം", "ശോഭനം", "അതിഗണ്ഡം", "സുകർമ്മം", "ധൃതി", "ശൂലം",
    "ഗണ്ഡം", "വൃദ്ധി", "ധ്രുവം", "വ്യാഘാതം", "ഹർഷണം", "വജ്രം", "സിദ്ധി", "വ്യതീപാതം", "വരീയാൻ",
    "പരിഘം", "ശിവം", "സിദ്ധം", "സാധ്യം", "ശുഭം", "ശുക്ലം", "ബ്രഹ്മം", "ഇന്ദ്രം", "വൈധൃതി"
];

const KARANAS_ML = [
    "ബവ", "ബാലവ", "കൗലവ", "തൈതില", "ഗര", "വണിജ", "വിഷ്ടി",
    "ശകുനി", "ചതുഷ്പാദം", "നാഗ", "കിംസ്തുഘ്നം"
];

const VARAS_ML = ["ഞായറാഴ്ച", "തിങ്കളാഴ്ച", "ചൊവ്വാഴ്ച", "ബുധനാഴ്ച", "വ്യാഴാഴ്ച", "വെള്ളിയാഴ്ച", "ശനിയാഴ്ച"];

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
    const name = document.getElementById('name').value || "ജാതകൻ"; // Jatakan (User)
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const lat = parseFloat(document.getElementById('lat').value) || 9.93; // Kochi default
    const lng = parseFloat(document.getElementById('lng').value) || 76.26;

    if (!date || !time) { alert("ദയവായി ജനന തീയതിയും സമയവും നൽകുക (Please enter Date and Time)"); return; }

    birthDateObj = new Date(date + 'T' + time);
    calculatePlanets(date, time, lat, lng);

    const container = document.getElementById('reportContainer');
    container.innerHTML = '<div style="text-align:center; padding:50px;"><h2>ജാതക റിപ്പോർട്ട് തയ്യാറാക്കുന്നു... (Generating Report...)</h2><div style="font-size:30px;">🕉️</div></div>';

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
            <h1 style="font-size:48px; color:#d35400; margin:0;">ആസ്ട്രോ ഗൈഡ് (ASTROGUIDE)</h1>
            <h2 style="font-size:24px; color:#555; font-weight:normal;">സമ്പൂർണ്ണ വേദ ജാതക റിപ്പോർട്ട്</h2>
            <div style="font-size:80px; margin:40px; color:#f57c00;">🕉️</div>
            <div style="font-size:18px; line-height:2;">
                <b>ജാതകൻ്റെ പേര്:</b><br>
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
    const getTithiML = () => { let t = Math.floor(((moon - sun + 360) % 360) / 12) + 1; return `തിഥി ${t}`; };
    const getYogML = () => YOGAS_ML[Math.floor((sun + moon) % 360 / 13.333)] || "";
    const getNakML = () => NAKSHATRAS_ML[Math.floor(moon / 13.333333)] || "";
    const getKaranaML = () => KARANAS_ML[Math.floor((moon - sun + 360) % 360 / 6) % 11] || "";
    const getDayML = () => VARAS_ML[new Date(date).getDay()];
    const getSignML = (lon) => SIGNS_ML[Math.floor(lon / 30) + 1];
    const getPlanetLordML = (lon) => PLANET_ML[getPlanetLord(Math.floor(lon/30)+1)] || getPlanetLord(Math.floor(lon/30)+1);
    const row = (l, v) => `<tr><td style="font-weight:bold; color:#555;">${l}</td><td>${v}</td></tr>`;
    
    p.innerHTML += `<div class="header"><h1>പ്രാഥമിക ജ്യോതിഷ വിവരങ്ങൾ</h1></div>
        <div class="flex-row"><div class="half-width"><div class="section-title">ജനന വിവരങ്ങൾ</div><table>${row("തീയതി", date)}${row("സമയം", time)}${row("അക്ഷാംശം", document.getElementById('lat').value)}${row("രേഖാംശം", document.getElementById('lng').value)}${row("അയനാംശം", "ലാഹിരി (" + ayanamsaVal.toFixed(2) + "°)")}</table></div>
        <div class="half-width"><div class="section-title">പഞ്ചാംഗം</div><table>${row("തിഥി", getTithiML())}${row("യോഗം", getYogML())}${row("നക്ഷത്രം", getNakML())}${row("കരണം", getKaranaML())}${row("ദിവസം", getDayML())}</table></div></div>
        <div class="flex-row" style="margin-top:20px;"><div class="half-width"><div class="section-title">ഘട ചക്രം</div><table>${row("ചന്ദ്ര രാശി", getSignML(moon))}${row("യോനി", "ഗൗ")}${row("ഗണം", "മനുഷ്യ")}${row("നാഡി", "മധ്യ")}</table></div>
        <div class="half-width"><div class="section-title">അവകഹഡ ചക്രം</div><table>${row("ലഗ്നം", getSignML(getPlanet("Ascendant").lon))}${row("ലഗ്നാധിപൻ", getPlanetLordML(getPlanet("Ascendant").lon))}${row("രാശ്യാധിപൻ", getPlanetLordML(moon))}${row("നക്ഷത്രാധിപൻ", PLANET_ML[getNakshatra(moon).lord] || getNakshatra(moon).lord)}${row("വർണ്ണം", "വിപ്ര")}</table></div></div><div class="footer-num">പേജ് 1</div>`;
    return p;
}

function createPage2() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let rows = globalPlanets.map(pl => {
        let s = Math.floor(pl.lon / 30) + 1; 
        let nak = getNakshatra(pl.lon); 
        let status = pl.speed < 0 ? "(വക്രി)" : "";
        let pNameML = PLANET_ML[pl.name] || pl.name;
        let sNameML = SIGNS_ML[s];
        let pLordML = PLANET_ML[getPlanetLord(s)] || getPlanetLord(s);
        let nakNameML = NAKSHATRAS_ML[nak.id] || nak.name;
        let nakLordML = PLANET_ML[nak.lord] || nak.lord;
        return `<tr><td><b>${pNameML}</b> ${status}</td><td>${sNameML}</td><td>${formatDeg(pl.lon)}</td><td>${pLordML}</td><td>${nakNameML}</td><td>${nakLordML}</td><td>${s}</td></tr>`;
    }).join('');
    let cards = globalPlanets.filter(pl => pl.name !== 'Ascendant').map(pl => {
        let nature = ["Jupiter", "Venus", "Mercury", "Moon"].includes(pl.name) ? "ശുഭ" : "പാപ";
        let pNameML = PLANET_ML[pl.name] || pl.name;
        let sNameML = SIGNS_ML[Math.floor(pl.lon/30)+1];
        return `<div class="planet-card"><div class="planet-icon">●</div><div class="planet-info"><b>${pNameML}</b><span>${sNameML}</span><div class="${nature.includes('ശുഭ') ? 'status-benefic' : 'status-malefic'}">${nature}</div></div></div>`;
    }).join('');
    p.innerHTML += `<div class="header"><h1>ഗ്രഹ സ്ഥിതികൾ</h1></div><table><thead><tr><th>ഗ്രഹം</th><th>രാശി</th><th>ഡിഗ്രി</th><th>അധിപൻ</th><th>നക്ഷത്രം</th><th>നക്ഷത്രാധിപൻ</th><th>ഭാവം</th></tr></thead><tbody>${rows}</tbody></table><div class="section-title">ഗ്രഹ വിവരങ്ങൾ</div><div class="planet-card-grid">${cards}</div><div class="footer-num">പേജ് 2</div>`;
    return p;
}

function createPage3() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    p.innerHTML += `<div class="header"><h1>ജാതക ചക്രങ്ങൾ</h1></div><div class="section-title">ലഗ്ന കുണ്ഡലി (D1)</div><div class="flex-row"><div style="flex:1"><div id="chartD1" class="chart-grid" style="width:100%; max-width:400px;"></div></div><div style="flex:0.6; padding:15px; background:#fffcf5; border:1px dashed #ffd54f; font-size:11px;"><b>വിശകലനം:</b><br>ലഗ്ന കുണ്ഡലി ശാരീരിക ആരോഗ്യത്തെയും വ്യക്തിത്വത്തെയും സൂചിപ്പിക്കുന്നു.</div></div><br><div class="flex-row"><div class="half-width"><div class="section-title">ചന്ദ്ര കുണ്ഡലി</div><div id="chartMoon" class="chart-grid"></div></div><div class="half-width"><div class="section-title">നവാംശ കുണ്ഡലി (D9)</div><div id="chartD9" class="chart-grid"></div></div></div><div class="footer-num">പേജ് 3</div>`;
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
        rows += `<tr><td>${i}</td><td>${SIGNS_ML[signId]}</td><td>${formatDeg(mid)}</td><td>${SIGNS_ML[Math.floor(((mid+15)%360)/30)+1]}</td><td>${formatDeg((mid + 15) % 360)}</td></tr>`;
    }
    p.innerHTML += `<div class="header"><h1>ഭാവ സ്ഫുടം</h1></div><div style="text-align:center;color:#f57c00;margin-bottom:10px;">ലഗ്നം: ${formatDeg(asc)}</div><table><thead><tr><th>ഭാവം</th><th>രാശി</th><th>ഭാവ മധ്യം</th><th>രാശി</th><th>ഭാവ സന്ധി</th></tr></thead><tbody>${rows}</tbody></table><div class="flex-row"><div class="half-width"><div class="section-title">ചലിത ചക്രം</div><div id="chartChalit" class="chart-grid"></div></div><div class="half-width" style="padding:20px; font-size:11px;">ഭാവ ബലത്തെ ചലിത ചക്രം സൂചിപ്പിക്കുന്നു.</div></div><div class="footer-num">പേജ് 4</div>`;
    setTimeout(() => renderChart('chartChalit', calculateVargaPositions(1)), 50);
    return p;
}

function createVargaPage(divisors, pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    let grids = divisors.map(d => `<div style="text-align:center;"><div style="font-weight:bold;font-size:11px;margin-bottom:2px;">D-${d}</div><div id="varga${d}_p${pageNum}" class="chart-grid" style="width:150px; height:250px; font-size:8px;"></div></div>`).join('');
    p.innerHTML += `<div class="header"><h1>വർഗ്ഗ ചക്രങ്ങൾ</h1></div><div style="display:grid; grid-template-columns:repeat(3,1fr); row-gap:20px; column-gap:10px; justify-items:center; margin-top:20px;">${grids}</div><div class="footer-num">പേജ് ${pageNum}</div>`;
    setTimeout(() => divisors.forEach(d => renderChart(`varga${d}_p${pageNum}`, calculateVargaPositions(d))), 50);
    return p;
}

function createPage7() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const pl = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"];
    const translateList = (list) => list.map(x => PLANET_ML[x] || x).join(", ");
    const genTable = () => pl.map(x => `<tr><td><b>${PLANET_ML[x]}</b></td><td>${translateList(FRIENDSHIPS[x].f)}</td><td>${translateList(FRIENDSHIPS[x].n)}</td><td>${translateList(FRIENDSHIPS[x].e)}</td></tr>`).join('');
    p.innerHTML += `<div class="header"><h1>മൈത്രി ചക്രം</h1></div><div class="section-title">നൈസർഗ്ഗിക മൈത്രി</div><table><thead><tr><th>ഗ്രഹം</th><th>മിത്രങ്ങൾ</th><th>സമം</th><th>ശത്രുക്കൾ</th></tr></thead><tbody>${genTable()}</tbody></table><br><div class="section-title">താൽക്കാലിക മൈത്രി</div><table><thead><tr><th>ഗ്രഹം</th><th>മിത്രങ്ങൾ</th><th>സമം</th><th>ശത്രുക്കൾ</th></tr></thead><tbody>${genTable()}</tbody></table><div class="footer-num">പേജ് 7</div>`;
    return p;
}

function createPage8() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const topRows = globalPlanets.map(pl => {
        let s = Math.floor(pl.lon / 30) + 1;
        let pNameML = PLANET_ML[pl.name] || pl.name;
        let sNameML = SIGNS_ML[s];
        let pLordML = PLANET_ML[getPlanetLord(s)] || getPlanetLord(s);
        let status = pl.speed < 0 ? "അതെ" : ""; 
        return `<tr><td style="font-weight:bold;">${pNameML}</td><td style="color:${pl.speed<0?'red':'inherit'}">${status}</td><td>${sNameML}</td><td>${formatFullDeg(pl.lon)}</td><td>${pLordML}</td><td>${s}</td></tr>`;
    }).join('');
    const bottomRows = globalPlanets.map(pl => {
        let nak = getNakshatra(pl.lon);
        let pNameML = PLANET_ML[pl.name] || pl.name;
        let nakNameML = NAKSHATRAS_ML[nak.id] || nak.name;
        let nakLordML = PLANET_ML[nak.lord] || nak.lord;
        let subLordML = PLANET_ML[VIM_LORDS[(nak.id+2)%9]] || VIM_LORDS[(nak.id+2)%9];
        let ssLordML = PLANET_ML[VIM_LORDS[(nak.id+4)%9]] || VIM_LORDS[(nak.id+4)%9];
        return `<tr><td style="font-weight:bold;">${pNameML}</td><td>${nakNameML}</td><td>${nakLordML}</td><td>${nak.charan}</td><td>${subLordML}</td><td>${ssLordML}</td></tr>`;
    }).join('');
    p.innerHTML += `<div class="header"><h1>കെ.പി ഗ്രഹ വിവരങ്ങൾ</h1></div><table><thead><tr><th>ഗ്രഹം</th><th>വക്രി</th><th>രാശി</th><th>ഡിഗ്രി</th><th>അധിപൻ</th><th>ഭാവം</th></tr></thead><tbody>${topRows}</tbody></table><br><table><thead><tr><th>ഗ്രഹം</th><th>നക്ഷത്രം</th><th>നക്ഷത്രാധിപൻ</th><th>പാദം</th><th>ഉപ അധിപൻ</th><th>ഉപ-ഉപ അധിപൻ</th></tr></thead><tbody>${bottomRows}</tbody></table><div class="footer-num">പേജ് 8</div>`;
    return p;
}

function createPage9() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const dashas = calcVimshottari().slice(0, 6);
    const createCol = (d) => {
        const adList = getAntardashaDates(d.lord, d.start);
        const mdNameML = PLANET_ML[d.lord] || d.lord;
        let h = `<div class="dasha-col"><div class="dasha-header"><div class="dasha-planet">${mdNameML}</div><div class="dasha-time">${d.start}</div><div class="dasha-time">${d.end}</div></div>`;
        adList.forEach(ad => {
            let adNameML = PLANET_ML[ad.lord] || ad.lord;
            h += `<div class="ad-row"><span class="ad-planet">${adNameML}</span><span class="ad-date">${ad.date}</span></div>`; 
        });
        return h + `</div>`;
    };
    p.innerHTML += `<div class="header"><h1>വിംശോത്തരി ദശ - I</h1></div><div class="dasha-grid" style="margin-top:30px;">${dashas.slice(0,3).map(createCol).join('')}</div><div class="dasha-grid">${dashas.slice(3,6).map(createCol).join('')}</div><div class="footer-num">പേജ് 9</div>`;
    return p;
}

function createPage10() {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const dashas = calcVimshottari().slice(6, 9);
    const createCol = (d) => {
        const adList = getAntardashaDates(d.lord, d.start);
        const mdNameML = PLANET_ML[d.lord] || d.lord;
        let h = `<div class="dasha-col"><div class="dasha-header"><div class="dasha-planet">${mdNameML}</div><div class="dasha-time">${d.start}</div><div class="dasha-time">${d.end}</div></div>`;
        adList.forEach(ad => {
            let adNameML = PLANET_ML[ad.lord] || ad.lord;
            h += `<div class="ad-row"><span class="ad-planet">${adNameML}</span><span class="ad-date">${ad.date}</span></div>`; 
        });
        return h + `</div>`;
    };
    let currentData = getCurrentDashaData();
    let currMDML = PLANET_ML[currentData.md.lord] || currentData.md.lord;
    let currADML = PLANET_ML[currentData.ad.lord] || currentData.ad.lord;
    p.innerHTML += `<div class="header"><h1>വിംശോത്തരി ദശ - II</h1></div><div class="dasha-grid" style="margin-top:30px;">${dashas.map(createCol).join('')}</div><div class="section-title" style="margin-top:40px;">നിലവിലെ ദശ വിവരങ്ങൾ</div><table class="current-dasha-table"><thead><tr><th>ദശ</th><th>ഗ്രഹം</th><th>ആരംഭ തീയതി</th><th>അവസാന തീയതി</th></tr></thead><tbody><tr><td><b>മഹാദശ</b></td><td>${currMDML}</td><td>${currentData.md.start}</td><td>${currentData.md.end}</td></tr><tr style="background:#ffebee;"><td><b>അന്തർദശ</b></td><td>${currADML}</td><td>${currentData.ad.start}</td><td>${currentData.ad.end}</td></tr><tr><td><b>പ്രത്യാന്തര</b></td><td>-</td><td>-</td><td>-</td></tr></tbody></table><div class="footer-num">പേജ് 10</div>`;
    return p;
}

// --- MERGED KALSARPA PAGE (11) ---
function createKalsarpaPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const kData = checkKalsarpa();
    const types = ["അനന്ത", "കുളിക", "വാസുകി", "ശംഖപാല", "പദ്മ", "മഹാപദ്മ", "തക്ഷക", "കർക്കോടക", "ശംഖചൂഡ", "ഘടക", "വിഷധര", "ശേഷനാഗ"];
    const gridHtml = types.map((t, i) => {
        let activeClass = (kData.present && kData.typeId === (i+1)) ? "active" : "";
        return `<div class="kalsarp-btn ${activeClass}">${t}</div>`;
    }).join('');
    const statusText = kData.present ? "കാല സർപ്പ ദോഷം ഉണ്ട്" : "കാല സർപ്പ ദോഷം ഇല്ല";
    let reportText = kData.present 
        ? `നിങ്ങളുടെ ജാതകത്തിൽ <b>${kData.name} കാല സർപ്പ ദോഷം</b> ഉണ്ട്. രാഹുവിനും കേതുവിനും ഇടയിൽ ബാക്കി ഗ്രഹങ്ങൾ ബന്ധിക്കപ്പെട്ടിരിക്കുന്നു. ഇത് വിജയത്തിന് തടസ്സങ്ങൾ, ദാമ്പത്യ ജീവിതത്തിൽ അശാന്തി എന്നിവ ഉണ്ടാക്കാം. ശരിയായ പരിഹാരങ്ങൾ ചെയ്യുന്നതിലൂടെ സ്വാധീനം കുറയ്ക്കാം.`
        : `നിങ്ങളുടെ ജാതകത്തിൽ <b>കാല സർപ്പ ദോഷം ഇല്ല</b>. ഈ ദോഷവുമായി ബന്ധപ്പെട്ട പ്രശ്നങ്ങൾ നിങ്ങൾ നേരിടേണ്ടി വരില്ല.`;

    p.innerHTML += `<div class="header"><h1>കാല സർപ്പ ദോഷം (Kalsarpa Dosha)</h1></div>
        <div style="display:flex; gap:15px; margin-bottom:15px;">
            <div style="flex:1;">
               <div class="section-title">ദോഷ തരം</div>
               <div class="dosha-grid" style="grid-template-columns: repeat(3, 1fr); font-size:9px;">${gridHtml}</div>
            </div>
            <div style="flex:1; display:flex; flex-direction:column; justify-content:center; text-align:center;">
               <span class="face-icon ${kData.present ? 'face-sad' : 'face-happy'}" style="font-size:40px;">${kData.present ? '☹' : '☺'}</span>
               <div style="font-weight:bold; color:#333; margin-top:5px;">${statusText}</div>
               <div style="font-size:10px; color:#666;">${kData.present ? kData.name : "N/A"}</div>
            </div>
        </div>
        <div class="section-title">വിശകലനം (Analysis)</div>
        <p style="font-size:11px; line-height:1.6; text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px;">${reportText}</p>
        <div class="section-title" style="margin-top:20px;">പരിഹാരങ്ങൾ (Remedies)</div>
        <div class="remedy-box"><ul><li>രുദ്രാഭിഷേകം - ശിവനെ പൂജിക്കുന്നത് നല്ലതാണ്.</li><li>പൂജാ മുറിയിൽ കാല സർപ്പ യന്ത്രം സ്ഥാപിക്കുക.</li><li>ബുധനാഴ്ചയോ വെള്ളിയാഴ്ചയോ ദോഷ പരിഹാര പൂജ നടത്തുക.</li><li>ദരിദ്രർക്ക് കറുത്ത ധാന്യങ്ങൾ ദാനം ചെയ്യുക.</li><li>8 അല്ലെങ്കിൽ 9 മുഖമുള്ള രുദ്രാക്ഷം ധരിക്കുക.</li></ul></div>
        <div class="footer-num">പേജ് ${pageNum}</div>`;
    return p;
}

// --- MERGED MANGLIK PAGE (12) ---
function createManglikPage(pageNum) {
    const p = document.createElement('div'); p.className = 'page';
    addBrandHeader(p);
    const mData = checkManglik();
    const statusText = mData.isManglik 
        ? 'നിങ്ങളുടെ ജാതകത്തിൽ ചൊവ്വാ ദോഷം (Manglik Dosha) കണ്ടെത്തിയിട്ടുണ്ട്. ദോഷ പ്രഭാവം ഉള്ളതിനാൽ വിവാഹത്തിന് മുമ്പ് ജാതക പരിശോധന ആവശ്യമാണ്.' 
        : 'നിങ്ങളുടെ ജാതകത്തിൽ ചൊവ്വ ശുഭ സ്ഥാനത്താണ്. നിങ്ങൾക്ക് ചൊവ്വാ ദോഷം ഇല്ല (Non-Manglik).';
    const houseReasons = mData.reasonsHouse.length > 0 ? mData.reasonsHouse.join('<br>') : "പ്രതികൂല സ്ഥാനങ്ങളില്ല.";

    p.innerHTML += `<div class="header"><h1>ചൊവ്വാ ദോഷ വിശകലനം (Manglik Dosha)</h1></div>
        <div style="display:flex; gap:20px; align-items:center; margin-bottom:20px;">
            <div style="flex:1; text-align:center;">
                <div class="progress-container"><div class="progress-bar" style="width:${mData.percent}%">${mData.percent}%</div></div>
                <div style="font-weight:bold; font-size:12px; margin-top:5px;">ദോഷ തീവ്രത</div>
            </div>
            <div style="flex:2; font-size:11px; text-align:justify; background:#fff3e0; padding:10px; border-radius:5px;">
                ${statusText}
            </div>
        </div>
        <div class="flex-row">
            <div class="analysis-col">
                <div class="analysis-header">കാരണങ്ങൾ (Reasons)</div>
                <div class="analysis-list" style="font-size:10px;">${houseReasons}</div>
            </div>
            <div class="analysis-col">
                <div class="analysis-header">ശ്ലോകം</div>
                <div style="font-style:italic; font-size:10px; text-align:center; padding-top:10px;">ലഗ്നേ വ്യയേ സുഖേ വാപി സപ്തമേ വാ അഷ്ടമേ കുജേ | <br>ശുഭ ദൃഗ് യോഗ ഹീനേ ച പതിം ഹന്തി ന സംശയം ||</div>
            </div>
        </div>
        <div class="section-title" style="margin-top:20px;">പരിഹാരങ്ങൾ (Remedies)</div>
        <div class="remedy-box" style="border-left-color: #d35400;"><ul><li>പൂജാ മുറിയിൽ മംഗള യന്ത്രം സ്ഥാപിക്കുക.</li><li>എല്ലാ ചൊവ്വാഴ്ചയും ഹനുമാൻ ക്ഷേത്രം സന്ദർശിക്കുക, സിന്ദൂരം, ചുവന്ന പൂക്കൾ എന്നിവയാൽ പൂജിക്കുക.</li><li>ഹനുമാൻ മന്ത്രം ജപിക്കുക: <b>|| ഓം ശ്രീം ഹനുമതേ നമഹ ||</b></li><li>ചൊവ്വാഴ്ചകളിൽ ഉപവാസം ഇരിക്കുക.</li><li>വിവാഹത്തിന് മുമ്പ് കുംഭ വിവാഹം ചെയ്യുന്നത് നല്ലതാണ്.</li></ul></div>
        <div class="footer-num">പേജ് ${pageNum}</div>`;
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

    p.innerHTML += `<div class="header"><h1>ഏഴര ശനി (Sade Sati)</h1></div>
        <div style="display:flex; gap:15px; margin-bottom:20px;">
            <div class="ss-status-card" style="flex:1;">
                <div style="font-size:30px; color:${status.present ? '#e53935' : '#43a047'}; margin-bottom:5px;">${status.present ? '☹' : '☺'}</div>
                <div style="font-weight:bold; font-size:12px;">${status.statusText}</div>
                <div style="font-size:10px; color:#666;">${status.desc}</div>
            </div>
            <div class="ss-table-card" style="flex:1.5;">
                <table style="margin-bottom:0;">
                    <tr><td style="font-weight:bold;">ചന്ദ്ര രാശി</td><td>${status.moonSign}</td></tr>
                    <tr><td style="font-weight:bold;">ശനി സ്ഥാനം</td><td>${status.saturnSign}</td></tr>
                </table>
            </div>
        </div>
        <div class="section-title">വരാനിരിക്കുന്ന ഘട്ടങ്ങൾ (Upcoming Phases)</div>
        <table class="ss-timeline-table">
            <thead><tr><th>തീയതി</th><th>ശനി രാശി</th><th>ഘട്ട തരം</th></tr></thead>
            <tbody>${timelineRows}</tbody>
        </table>
        <div class="section-title" style="margin-top:15px;">പരിഹാരങ്ങൾ (Remedies)</div>
        <div class="remedy-box-green" style="font-size:10px;">
            <ul>
                <li>മാതാപിതാക്കളെയും മുതിർന്നവരെയും സേവിക്കുക.</li>
                <li>ദിവസവും ഹനുമാൻ ചാലീസ ജപിക്കുക.</li>
                <li>ശനിയാഴ്ചകളിൽ സൂര്യോദയം മുതൽ സൂര്യാസ്തമയം വരെ ഉപവാസം ഇരിക്കുന്നത് നല്ലതാണ്.</li>
                <li>ദരിദ്രർക്ക് ഉഴുന്ന്, എണ്ണ, കറുത്ത എള്ള് എന്നിവ ദാനം ചെയ്യുക.</li>
                <li>മന്ത്രം: "|| ഓം ശം ശനൈശ്ചരായ നമഹ ||"</li>
            </ul>
        </div>
        <div class="footer-num">പേജ് ${pageNum}</div>`;
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
                md: PLANET_ML[md.lord] || md.lord,
                ad: PLANET_ML[ad.lord] || ad.lord,
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
            <td>${d.md === d.ad ? 'പ്രധാന മാറ്റം (Major Shift)' : 'അന്തർദശ (Sub Period)'}</td>
        </tr>
    `).join('');

    p.innerHTML += `
        <div class="header"><h1>5 വർഷത്തെ വ്യക്തിഗത ചാർട്ട്</h1></div>
        <div class="section-title">വരാനിരിക്കുന്ന ദശകൾ (${today.getFullYear()} - ${future.getFullYear()})</div>
        <p style="font-size:11px; text-align:center;">വരാനിരിക്കുന്ന 5 വർഷത്തെ പ്രധാന ഗ്രഹ സ്വാധീനങ്ങൾ ഈ ചാർട്ട് സൂചിപ്പിക്കുന്നു.</p>
        
        <table class="year-chart-table">
            <thead>
                <tr>
                    <th>ദശ (MD-AD)</th>
                    <th>ആരംഭ തീയതി</th>
                    <th>അവസാന തീയതി</th>
                    <th>ദശ തരം</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
        
        <div class="quote-box">
            "ഗ്രഹങ്ങൾ പ്രേരിപ്പിക്കുന്നു, പക്ഷേ നിർബന്ധിക്കുന്നില്ല. ഈ സമയം ബുദ്ധിപൂർവ്വം ഉപയോഗിക്കുക."
        </div>
        <div class="footer-num">പേജ് 14</div>`;
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
                    <div style="font-size:12px; color:#666;">സംസ്കൃത ശ്ലോകം & ഗ്രഹ സ്ഥിതി</div>
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

        <div class="section-title" style="color:#2e7d32; border-color:#2e7d32;">ജ്യോതിഷിയുടെ വിശകലനം (Astrologer's Verdict)</div>
        
        <div style="display:flex; gap:15px; margin-bottom:20px;">
            <div style="flex:1;">
                 <div style="background:#f1f8e9; padding:15px; border-radius:8px; border-left:5px solid #43a047; font-size:12px; line-height:1.8; text-align:justify; color:#333;">
                    <span style="font-size:30px; float:left; margin-right:10px; line-height:30px; color:#43a047;">❝</span>
                    ${speakText}
                    <span style="font-size:30px; float:right; margin-left:10px; line-height:0; color:#43a047; margin-top:10px;">❞</span>
                 </div>
            </div>
        </div>

        <div class="section-title" style="color:#d32f2f; border-color:#d32f2f;">നിർദ്ദേശങ്ങളും മുൻകരുതലുകളും (Advice)</div>
        
        <div style="background:#ffebee; padding:15px; border-radius:8px; border:1px dashed #ef5350; display:flex; gap:15px; align-items:center;">
            <div style="font-size:24px;">💡</div>
            <div style="font-size:12px; line-height:1.6; color:#b71c1c; font-weight:500;">
                ${adviceText}
            </div>
        </div>
        
        <div class="footer-num">പേജ് ${pageNum}</div>
    `;
    return p;
}

// --- HELPER: PLANET BUILDER (Fixed Logic) ---
function buildPlanetPage(planetName, pageNum) {
    const data = PLANET_REPORT_DATA[planetName];
    const planetInfo = getPlanet(planetName);
    const signIdx = Math.floor(planetInfo.lon / 30) + 1;
    const signName = SIGNS_ML[signIdx]; 

    const tableHtml = `
        <tr><td><b>രാശി (Sign)</b></td><td><b>${signName}</b></td></tr>
        <tr><td><b>നക്ഷത്രം (Star)</b></td><td>${getNakshatra(planetInfo.lon).name}</td></tr>
        <tr><td><b>അവസ്ഥ (Status)</b></td><td>${planetInfo.speed < 0 ? "<span style='color:red'>വക്രി (Retrograde)</span>" : "മാർഗ്ഗി (Direct)"}</td></tr>
        <tr><td><b>ഡിഗ്രി (Degree)</b></td><td>${formatDeg(planetInfo.lon)}</td></tr>
    `;
    
    const personalizedSpeak = `നിങ്ങളുടെ ജാതകത്തിൽ ${PLANET_ML[planetName]} <b>${signName}</b> രാശിയിലാണ്. ${data.speak}`;
    
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
    const signNameML = SIGNS_ML[signIdx];
    
    const rawLord = signInfo.lord;
    const lordName = PLANET_ML[rawLord] ? PLANET_ML[rawLord] : rawLord;

    const tableHtml = `
        <tr><td><b>അധിപൻ (Lord)</b></td><td>${lordName}</td></tr>
        <tr><td><b>തത്വം (Element)</b></td><td>${signInfo.element}</td></tr>
        <tr><td><b>ഭാഗ്യ രത്നം (Gem)</b></td><td>${signInfo.gem}</td></tr>
        <tr><td><b>ചിഹ്നം (Symbol)</b></td><td>${signInfo.sym}</td></tr>
    `;

    const speakText = `നമസ്കാരം! നിങ്ങൾ <b>${signNameML}</b> ലഗ്നത്തിലാണ് ജനിച്ചത്. ലഗ്നം എന്നത് രാശി മാത്രമല്ല, അത് നിങ്ങളുടെ 'വ്യക്തിത്വം', 'ആരോഗ്യം' എന്നിവയെ പ്രതിഫലിപ്പിക്കുന്നു. 
    ${signNameML} രാശിയുടെ അധിപൻ <b>${lordName}</b> ആണ്. ഇതിന്റെ സ്വാധീനത്താൽ നിങ്ങൾ സ്വതവേ ധൈര്യശാലികളും ദൃഢനിശ്ചയമുള്ളവരുമാണ്. നിങ്ങൾ ഒരു ജോലിയും പാതിവഴിയിൽ ഉപേക്ഷിക്കില്ല.`;

    const adviceText = `നിങ്ങളുടെ ലഗ്നാധിപൻ <b>${lordName}</b> ആയതിനാൽ, ആ ഗ്രഹവുമായി ബന്ധപ്പെട്ട ദിവസം (ഉദാഹരണത്തിന് ${signInfo.day}) പുതിയ കാര്യങ്ങൾ തുടങ്ങാൻ തിരഞ്ഞെടുക്കുന്നത് നല്ലതാണ്.`;

    return createReportPage(
        "ലഗ്ന വിശകലനം (Ascendant Report)", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Classic_1635_Schiller_constellation_Capricornus.png/250px-Classic_1635_Schiller_constellation_Capricornus.png", 
        tableHtml,
        "ദേഹം രൂപം ച ജ്ഞാനം ച വർണ്ണം ചൈവ ബലാബലം |<br>സുഖം ദുഃഖം സ്വഭാവഞ്ച ലഗ്നഭാവാന്നിരീക്ഷയേത് ||",
        speakText,
        adviceText,
        `ലഗ്നം: ${signNameML} (Ascendant)`,
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
        <div class="header"><h1>പ്രത്യാന്തര ദശ (Pratyantar Dasha)</h1></div>
        <div class="section-title">5 വർഷത്തെ വിശദമായ പ്രവചനം</div>
        <p style="font-size:11px; color:#666; text-align:center;">
            ${today.getFullYear()} മുതൽ ${fiveYearsLater.getFullYear()} വരെയുള്ള വിശദമായ ഉപ-ഉപ കാലഘട്ടങ്ങൾ
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
                    <th>ദശ ക്രമം (MD-AD-PD)</th>
                    <th>ആരംഭ തീയതി</th>
                    <th>അവസാന തീയതി</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>
        <div class="footer-num">പേജ് 25</div>`; // Renumbered
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
                    
                    const mdName = PLANET_ML[md.lord] || md.lord;
                    const adName = PLANET_ML[ad.lord] || ad.lord;
                    const pdName = PLANET_ML[pd.pd] || pd.pd;
                    
                    const pdData = PREDICTION_DB[pd.pd];
                    const themeColor = pdData.color;

                    p.innerHTML += `
                        <div class="header"><h1>ഫലങ്ങളും പരിഹാരങ്ങളും</h1></div>
                        
                        <div style="background:${themeColor}15; border-left: 6px solid ${themeColor}; padding:15px; margin-bottom:20px; border-radius:4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                            <div style="font-size:11px; text-transform:uppercase; color:#555; font-weight:bold; letter-spacing:1px;">കാലഘട്ടം</div>
                            <div style="font-size:18px; font-weight:bold; color:#222; margin-top:5px;">
                                ${pd.startStr} <span style="font-size:14px; font-weight:normal; color:#666;">മുതൽ</span> ${pd.endStr}
                            </div>
                        </div>

                        <div class="dasha-flow">
                            <div class="df-box">
                                <div>മഹാദശ</div>
                                <div class="df-planet">${mdName}</div>
                            </div>
                            <div class="df-arrow">➜</div>
                            <div class="df-box">
                                <div>അന്തർദശ</div>
                                <div class="df-planet">${adName}</div>
                            </div>
                            <div class="df-arrow">➜</div>
                            <div class="df-box df-active" style="border-color:${themeColor}; background:${themeColor}10;">
                                <div>പ്രത്യാന്തര</div>
                                <div class="df-planet" style="color:${themeColor}; font-size:14px;">${pdName}</div>
                            </div>
                        </div>

                        <div class="section-title" style="color:${themeColor}; border-color:${themeColor};">ജ്യോതിഷിയുടെ വിശകലനം</div>

                        <div style="display:flex; gap:20px; margin-bottom:20px; align-items:flex-start;">
                            <div style="flex:0.8; text-align:center;">
                                <div style="background:#fafafa; border-radius:50%; width:70px; height:70px; display:flex; align-items:center; justify-content:center; font-size:35px; border:2px solid ${themeColor}; margin:0 auto;">
                                    ${pdData.icon}
                                </div>
                                <div style="font-size:10px; font-weight:bold; margin-top:5px; color:#555;">${pdName} പ്രഭാവം</div>
                            </div>
                            <div style="flex:3; font-size:12px; text-align:justify; line-height:1.8; color:#333;">
                                <p><strong>നമസ്കാരം!</strong> നിലവിൽ നിങ്ങൾ <b>${mdName}</b> മഹാദശയിലും <b>${pdName}</b> പ്രത്യാന്തര ദശയിലുമാണ്.</p>
                                <p>ഈ സമയത്ത് ഗ്രഹ സഞ്ചാരത്തെ അടിസ്ഥാനമാക്കി... ${pdData.event}</p>
                            </div>
                        </div>

                        <div class="pred-grid">
                            <div class="pred-item">
                                <div class="pi-head">💰 സാമ്പത്തികം & തൊഴിൽ</div>
                                <div class="pi-body">${pdData.career}</div>
                            </div>
                            <div class="pred-item">
                                <div class="pi-head">❤️ കുടുംബം & ആരോഗ്യം</div>
                                <div class="pi-body">${pdData.family}</div>
                            </div>
                        </div>

                        <div class="section-title" style="margin-top:25px; color:#d35400;">ശാന്തി പരിഹാരങ്ങൾ</div>
                        <div style="background:#fff8e1; padding:15px; border-radius:8px; border:1px dashed #ffa726; display:flex; gap:15px; align-items:center;">
                            <div style="font-size:24px;">🕉️</div>
                            <div style="font-size:11px; line-height:1.6; color:#5d4037;">
                                <b>ജ്യോതിഷ ഉപദേശം:</b><br>${pdData.remedy}
                            </div>
                        </div>

                        <div class="footer-num">പേജ് ${pageCount}</div>
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

/* --- DATA TABLES (TRANSLATED TO MALAYALAM) --- */

const SIGN_INFO = [
    null,
    { name: "മേടം", lord: "ചൊവ്വ", sym: "ആട്", element: "അഗ്നി", gem: "പവിഴം", day: "ചൊവ്വാഴ്ച" },
    { name: "ഇടവം", lord: "ശുക്രൻ", sym: "കാള", element: "ഭൂമി", gem: "വജ്രം", day: "വെള്ളിയാഴ്ച" },
    { name: "മിഥുനം", lord: "ബുധൻ", sym: "മിഥുനം", element: "വായു", gem: "മരതകം", day: "ബുധനാഴ്ച" },
    { name: "കർക്കിടകം", lord: "ചന്ദ്രൻ", sym: "ഞണ്ട്", element: "ജലം", gem: "മുത്ത്", day: "തിങ്കളാഴ്ച" },
    { name: "ചിങ്ങം", lord: "സൂര്യൻ", sym: "സിംഹം", element: "അഗ്നി", gem: "മാണിക്യം", day: "ഞായറാഴ്ച" },
    { name: "കന്നി", lord: "ബുധൻ", sym: "കന്യക", element: "ഭൂമി", gem: "മരതകം", day: "ബുധനാഴ്ച" },
    { name: "തുലാം", lord: "ശുക്രൻ", sym: "ത്രാസ്", element: "വായു", gem: "വജ്രം", day: "വെള്ളിയാഴ്ച" },
    { name: "വൃശ്ചികം", lord: "ചൊവ്വ", sym: "തേൾ", element: "ജലം", gem: "പവിഴം", day: "ചൊവ്വാഴ്ച" },
    { name: "ധനു", lord: "വ്യാഴം", sym: "വില്ലാളി", element: "അഗ്നി", gem: "മഞ്ഞ പുഷ്യരാഗം", day: "വ്യാഴാഴ്ച" },
    { name: "മകരം", lord: "ശനി", sym: "ചീങ്കണ്ണി", element: "ഭൂമി", gem: "ഇന്ദ്രനീലം", day: "ശനിയാഴ്ച" },
    { name: "കുംഭം", lord: "ശനി", sym: "കുടം", element: "വായു", gem: "ഇന്ദ്രനീലം", day: "ശനിയാഴ്ച" },
    { name: "മീനം", lord: "വ്യാഴം", sym: "മത്സ്യം", element: "ജലം", gem: "മഞ്ഞ പുഷ്യരാഗം", day: "വ്യാഴാഴ്ച" }
];

/* --- PLANET REPORT DATA (MALAYALAM) --- */
const PLANET_REPORT_DATA = {
    "Sun": {
        title: "സൂര്യ ഗ്രഹ പ്രഭാവം (Sun Analysis)",
        nature: "ആത്മകാരകൻ & പിതൃകാരകൻ (Soul & Father)",
        shloka: "ജപാകുസുമ സങ്കാശം കാശ്യപേയം മഹാദ്യുതിം |<br>തമോരിം സർവ്വപാപഘ്നം പ്രണതോസ്മി ദിവാകരം ||",
        speak: "ജാതക ചക്രത്തിൽ സൂര്യൻ 'രാജാവ്' ആണ്. നിങ്ങളുടെ ജാതകത്തിൽ സൂര്യന്റെ സ്ഥിതി നോക്കിയാൽ, നിങ്ങൾക്ക് സ്വാഭാവികമായും നേതൃപാടവം കൂടുതലാണ്. മറ്റുള്ളവരുടെ കീഴിൽ ജോലി ചെയ്യാൻ നിങ്ങൾ ഇഷ്ടപ്പെടുന്നില്ല; നാലുപേരെ നയിക്കുന്നതാണ് നിങ്ങൾക്ക് തൃപ്തി. നിങ്ങളിൽ ആത്മവിശ്വാസം (Will Power) വളരെ ശക്തമാണ്. എന്നാൽ, ചിലപ്പോൾ നിങ്ങളുടെ വാക്കുകളിൽ ശാഠ്യം കൂടി അത് മറ്റുള്ളവർക്ക് അഹങ്കാരമായി തോന്നാം.",
        advice: "പിതാവിനെ ബഹുമാനിക്കുന്നതിലൂടെയും സർക്കാർ നിയമങ്ങൾ പാലിക്കുന്നതിലൂടെയും നിങ്ങൾ ജീവിതത്തിൽ കൂടുതൽ ഉയരങ്ങളിൽ എത്തും. ദേഷ്യം കുറച്ചാൽ സമൂഹത്തിൽ നല്ല പേര് ലഭിക്കും.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sun_symbol.svg/100px-Sun_symbol.svg.png"
    },
    "Moon": {
        title: "ചന്ദ്ര ഗ്രഹ പ്രഭാവം (Moon Analysis)",
        nature: "മനോകാരകൻ & മാതൃകാരകൻ (Mind & Mother)",
        shloka: "ദധിശംഖ തുഷാരാഭം ക്ഷീരോദാർണ്ണവ സംഭവം |<br>നമാമി ശശിനം സോമം ശംഭോർമുകുട ഭൂഷണം ||",
        speak: "ചന്ദ്രൻ 'മനസ്സിന്റെ' കാരകനാണ്. നിങ്ങളുടെ ജാതകത്തിൽ ചന്ദ്രന്റെ സ്വാധീനത്താൽ നിങ്ങൾ വളരെ ലോലമായ മനസ്സിനുടമയാണ് (Sensitive). മറ്റുള്ളവരുടെ വിഷമങ്ങൾ കണ്ട് നിങ്ങൾ പെട്ടെന്ന് അലിഞ്ഞുപോകും. നിങ്ങളുടെ ചിന്തകൾ സമുദ്രത്തിലെ തിരമാലകൾ പോലെ മാറിക്കൊണ്ടിരിക്കും. നിങ്ങൾക്ക് യാത്രകൾ ചെയ്യാനും, പുതിയ സ്ഥലങ്ങൾ കാണാനും ഇഷ്ടമാണ്. അമ്മയുമായി നിങ്ങൾക്ക് പ്രത്യേക അടുപ്പമുണ്ടാകും.",
        advice: "ചെറിയ കാര്യങ്ങൾക്ക് വിഷമിക്കുന്നത് (Overthinking) ഒഴിവാക്കണം. വികാരപരമായ തീരുമാനങ്ങൾ എടുക്കാതെ, ബുദ്ധി ഉപയോഗിച്ച് തീരുമാനങ്ങൾ എടുക്കാൻ ശീലിക്കുക.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Moon_Symbol.svg/100px-Moon_Symbol.svg.png"
    },
    "Mars": {
        title: "ചൊവ്വ ഗ്രഹ പ്രഭാവം (Mars Analysis)",
        nature: "ഭ്രാതൃകാരകൻ & ശക്തി (Siblings & Energy)",
        shloka: "ധരണീ ഗർഭ സംഭൂതം വിദ്യുത്കാന്തി സമപ്രഭം |<br>കുമാരം ശക്തിഹസ്തം തം മംഗളം പ്രണമാമ്യഹം ||",
        speak: "ചൊവ്വ 'സേനാധിപതി' ആണ്. നിങ്ങളിൽ അപാരമായ ഊർജ്ജം (Energy) ഉണ്ട്. നിങ്ങൾ ഏതെങ്കിലും ജോലി തുടങ്ങിയാൽ, അത് പൂർത്തിയാകുന്നതുവരെ വിശ്രമിക്കില്ല. നിങ്ങൾക്ക് ധൈര്യം കൂടുതൽ, ഭയം കുറവാണ്. ഭൂമി, വസ്തു ഇടപാടുകൾ നിങ്ങൾക്ക് നന്നായി യോജിക്കും. എന്നാൽ, നിങ്ങളുടെ ദേഷ്യം മൂക്കിൻതുമ്പത്താണ്. എടുത്തുചാട്ടം കാരണം ചില നല്ല അവസരങ്ങൾ നഷ്ടപ്പെടാൻ സാധ്യതയുണ്ട്.",
        advice: "വാഹനങ്ങൾ ഓടിക്കുമ്പോൾ ശ്രദ്ധിക്കണം. നിങ്ങളുടെ ഊർജ്ജം ക്രിയാത്മകമായ കാര്യങ്ങൾക്ക് (Constructive work) ഉപയോഗിച്ചാൽ അത്ഭുതങ്ങൾ സൃഷ്ടിക്കാം.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mars_symbol.svg/100px-Mars_symbol.svg.png"
    },
    "Mercury": {
        title: "ബുധ ഗ്രഹ പ്രഭാവം (Mercury Analysis)",
        nature: "വിദ്യാകാരകൻ & വ്യാപാരം (Intellect & Business)",
        shloka: "പ്ിയംഗു കലികാശ്യാമം രൂപേണാ പ്രതിമം ബുധം |<br>സൗമ്യം സൗമ്യഗുണോപേതം തം ബുധം പ്രണമാമ്യഹം ||",
        speak: "ബുധൻ 'യുവരാജാവ്' ആണ്. നിങ്ങളുടെ ജാതകത്തിൽ ബുധന്റെ ബലം കാരണം നിങ്ങൾക്ക് ബുദ്ധിശക്തി, നർമ്മബോധം (Humor), വ്യാപാര നൈപുണ്യം എന്നിവയുണ്ട്. നിങ്ങൾ വാക്കുകൾ കൊണ്ട് മറ്റുള്ളവരെ എളുപ്പത്തിൽ ആകർഷിക്കും. ഗണിതം, ജ്യോതിഷം, അല്ലെങ്കിൽ അക്കൗണ്ട്സ് മേഖലയിൽ നിങ്ങൾക്ക് നല്ല കഴിവുണ്ടാകും. നിങ്ങൾ എപ്പോഴും ചെറുപ്പമായും ഉന്മേഷത്തോടെയും ഇരിക്കാൻ ആഗ്രഹിക്കുന്നു.",
        advice: "ഒരേ സമയം പല കാര്യങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നത് ഒഴിവാക്കുക, കാരണം ഒന്നും പൂർത്തിയാകില്ല. ഏകാഗ്രത വളർത്തുക. ചർമ്മ സംരക്ഷണത്തിൽ ശ്രദ്ധിക്കുക.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mercury_symbol.svg/100px-Mercury_symbol.svg.png"
    },
    "Jupiter": {
        title: "വ്യാഴ ഗ്രഹ പ്രഭാവം (Jupiter Analysis)",
        nature: "ധനകാരകൻ & പുത്രകാരകൻ (Wealth & Wisdom)",
        shloka: "ദേവാനാം ച ഋഷീണാം ച ഗുരും കാഞ്ചന സന്നിഭം |<br>ബുദ്ധിഭൂതം ത്രിലോേകശം തം നമാമി ബൃഹസ്പതിം ||",
        speak: "വ്യാഴം 'മന്ത്രി'യും ഉപദേശകനുമാണ്. നിങ്ങളുടെ ജാതകത്തിൽ വ്യാഴത്തിന്റെ അനുഗ്രഹം ഉള്ളതിനാൽ നിങ്ങൾക്ക് സമൂഹത്തിൽ ബഹുമാനം ലഭിക്കും. നിങ്ങൾക്ക് ദൈവഭക്തിയും പാരമ്പര്യങ്ങളോട് ബഹുമാനവുമുണ്ട്. കഷ്ടകാലത്തും നിങ്ങൾക്ക് ഏതെങ്കിലും രൂപത്തിൽ ദൈവീക സഹായം ലഭിക്കും. നിങ്ങൾക്ക് മറ്റുള്ളവർക്ക് നല്ല ഉപദേശങ്ങൾ നൽകാൻ കഴിയും. ധനത്തിന് കുറവുണ്ടാവില്ല.",
        advice: "അമിതമായ നന്മ നല്ലതല്ല. എല്ലാവരെയും കണ്ണടച്ച് വിശ്വസിക്കരുത്. മധുരപലഹാരങ്ങൾ കുറയ്ക്കുക, കരൾ (Liver) ആരോഗ്യം സംരക്ഷിക്കുക.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jupiter_symbol.svg/100px-Jupiter_symbol.svg.png"
    },
    "Venus": {
        title: "ശുക്ര ഗ്രഹ പ്രഭാവം (Venus Analysis)",
        nature: "കളത്രകാരകൻ & ഭോഗം (Spouse & Luxury)",
        shloka: "ഹിമകുന്ദ മൃണാലാഭം ദൈത്യാനാം പരമം ഗുരും |<br>സർവ്വശാസ്ത്ര പ്രവക്താരം ഭാർഗ്ഗവം പ്രണമാമ്യഹം ||",
        speak: "ശുക്രൻ 'ഭോഗകാരകൻ' ആണ്. നിങ്ങളുടെ ജീവിതത്തിൽ സൗകര്യങ്ങൾക്കും ആഡംബരങ്ങൾക്കും പ്രാധാന്യം നൽകുന്നു. നിങ്ങൾ സുന്ദരമായിരിക്കാൻ മാത്രമല്ല, നിങ്ങളുടെ ചുറ്റുമുള്ള അന്തരീക്ഷവും സുന്ദരമായിരിക്കാൻ ആഗ്രഹിക്കുന്നു. കല, സംഗീതം, സിനിമ അല്ലെങ്കിൽ ഫാഷൻ എന്നിവയിൽ നിങ്ങൾക്ക് താല്പര്യമുണ്ടാകും. ദാമ്പത്യ ജീവിതവും പ്രണയവും നിങ്ങളുടെ ജീവിതത്തിൽ പ്രധാന പങ്ക് വഹിക്കുന്നു.",
        advice: "ആഡംബരങ്ങൾക്കായി പരിധിവിട്ട് പണം ചെലവാക്കരുത്. എതിർലിംഗത്തിലുള്ളവരോട് ബഹുമാനത്തോടെ പെരുമാറുന്നത് നിങ്ങളുടെ ശുക്രബലം വർദ്ധിപ്പിക്കും.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Venus_symbol.svg/100px-Venus_symbol.svg.png"
    },
    "Saturn": {
        title: "ശനി ഗ്രഹ പ്രഭാവം (Saturn Analysis)",
        nature: "ആയുഷ്കാരകൻ & കർമ്മം (Karma & Longevity)",
        shloka: "നീലാഞ്ജന സമാഭാസം രവിപുത്രം യമാഗ്രജം |<br>ഛായാമാർത്താണ്ഡ സംഭൂതം തം നമാമി ശനൈശ്ചരം ||",
        speak: "ശനി 'ന്യായാധിപൻ' ആണ്. നിങ്ങളുടെ ജീവിതത്തിൽ ഒന്നും എളുപ്പത്തിൽ ലഭിക്കില്ല, എന്നാൽ കഠിനാധ്വാനം ചെയ്താൽ ശാശ്വതമായ ഫലങ്ങൾ ലഭിക്കും. നിങ്ങൾ വളരെ പ്രായോഗികമായി (Practical) ചിന്തിക്കുന്നു. അലസത നിങ്ങളുടെ പ്രധാന ശത്രുവാണ്. ശനിയുടെ സ്വാധീനത്താൽ നിങ്ങൾ ഏകാന്തമായിരിക്കാനും ആഴത്തിൽ ചിന്തിക്കാനും ഇഷ്ടപ്പെടുന്നു. പാവപ്പെട്ടവരെയും തൊഴിലാളികളെയും സഹായിക്കുന്നത് ജീവിതത്തിൽ ഉയർച്ച നൽകും.",
        advice: "ജോലികൾ മാറ്റിവെക്കുന്ന ശീലം (Procrastination) ഒഴിവാക്കുക. നീതിപൂർവ്വം ജീവിച്ചാൽ ശനി നിങ്ങളെ ഉന്നതങ്ങളിൽ എത്തിക്കും.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Saturn_symbol.svg/100px-Saturn_symbol.svg.png"
    },
    "Rahu": {
        title: "രാഹു ഗ്രഹ പ്രഭാവം (Rahu Analysis)",
        nature: "മായ & വിദേശ വാസം (Illusion & Foreign)",
        shloka: "അർദ്ധകായം മഹാവീര്യം ചന്ദ്രാദിത്യ വിമർദ്ദനം |<br>സിംഹികാ ഗർഭ സംഭൂതം തം രാഹും പ്രണമാമ്യഹം ||",
        speak: "രാഹു 'ഛായാ ഗ്രഹം' ആണ്. ഇത് നിങ്ങൾക്ക് അതിരില്ലാത്ത ആഗ്രഹങ്ങൾ (Ambition) നൽകുന്നു. നിങ്ങൾ പരമ്പരാഗത രീതികളിൽ നിന്ന് വ്യത്യസ്തമായി ചിന്തിക്കുന്നു. വിദേശത്ത് പോകാനോ ടെക്നോളജി രംഗത്ത് വളരാനോ ഉള്ള ആഗ്രഹം നിങ്ങൾക്കുണ്ടാകും. ചിലപ്പോൾ നിങ്ങളുടെ മനസ്സിൽ അകാരണമായ ഭയങ്ങളോ ഭ്രമങ്ങളോ ഉണ്ടാകാം. ആകസ്മികമായ ലാഭമോ നഷ്ടമോ രാഹുവിന്റെ ലക്ഷണമാണ്.",
        advice: "കുറുക്കുവഴികളിലൂടെ വിജയം നേടാൻ ശ്രമിക്കരുത്; അത് താൽക്കാലികമാണ്. ദുർഗ്ഗാ ദേവിയെ ആരാധിക്കുന്നത് നല്ലതാണ്.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Rahu_symbol.svg/100px-Rahu_symbol.svg.png"
    },
    "Ketu": {
        title: "കേതു ഗ്രഹ പ്രഭാവം (Ketu Analysis)",
        nature: "മോക്ഷകാരകൻ & ജ്ഞാനം (Detachment & Wisdom)",
        shloka: "പലാശ പുഷ്പ സങ്കാശം താരകാഗ്രഹ മസ്തകം |<br>രൗദ്രം രൗദ്രാത്മകം ഘോരം തം കേതും പ്രണമാമ്യഹം ||",
        speak: "കേതു 'ജ്ഞാനകാരകൻ' ആണ്. നിങ്ങളിൽ ആത്മീയ ചിന്ത കൂടുതലായിരിക്കും. ചിലപ്പോൾ നിങ്ങൾക്ക് ഈ ലോകത്തോടും ബന്ധങ്ങളോടും വിരക്തി തോന്നും. നിങ്ങൾക്ക് അന്തർജ്ഞാനം (Intuition) വളരെ ശക്തമാണ്; നടക്കാൻ പോകുന്നത് മുൻകൂട്ടി അറിയാൻ കഴിയും. ഗവേഷണം, മന്ത്ര തന്ത്രങ്ങൾ അല്ലെങ്കിൽ ആത്മീയ മേഖലകളിൽ നിങ്ങൾ ശോഭിക്കും.",
        advice: "കഴിഞ്ഞുപോയ കാര്യങ്ങളെക്കുറിച്ച് അമിതമായി ചിന്തിക്കരുത്. ഗണപതി ആരാധന നിങ്ങളുടെ മനസ്സിലെ ആശയക്കുഴപ്പങ്ങൾ നീക്കും.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ketu_symbol.svg/100px-Ketu_symbol.svg.png"
    },

    "Ascendant": {
        title: "ലഗ്ന വിശകലനം",
        nature: "ലഗ്നം (Self)",
        shloka: "",
        speak: "",
        advice: "",
        img: ""
    }
};

/* --- PREDICTION DATABASE (MALAYALAM) --- */
const PREDICTION_DB = {
    "Sun": {
        theme: "ആത്മവിശ്വാസം & അധികാരം",
        event: "സൂര്യൻ എന്നാൽ രാജാവാണ്. ഈ സമയത്ത് നിങ്ങളിൽ ആത്മവിശ്വാസം വർദ്ധിക്കും. മറ്റുള്ളവർക്കിടയിൽ നിങ്ങൾക്ക് അംഗീകാരം ലഭിക്കുന്ന സമയമാണിത്. സർക്കാർ കാര്യങ്ങൾക്കോ ഉദ്യോഗസ്ഥരെ കാണാനോ ഇത് വളരെ അനുയോജ്യമായ സമയമാണ്. എന്നാൽ, നിങ്ങളുടെ വാക്കുകളിൽ അല്പം അഹങ്കാരം വരാൻ സാധ്യതയുണ്ട്, ശ്രദ്ധിക്കുക.",
        career: "ജോലിയിൽ സ്ഥാനക്കയറ്റം അല്ലെങ്കിൽ പുതിയ ഉത്തരവാദിത്തങ്ങൾ ലഭിക്കാൻ സാധ്യതയുണ്ട്. നിങ്ങളുടെ നേതൃപാടവത്തിന് ഇത് പരീക്ഷണ സമയമാണ്. നിങ്ങൾ പറയുന്ന വാക്കിന് വില കൂടും.",
        family: "പിതാവിന്റെ ആരോഗ്യത്തിൽ ശ്രദ്ധിക്കുക. ശരീരത്തിൽ ചൂട് (Heat) കൂടാൻ സാധ്യതയുണ്ട്, അതിനാൽ കണ്ണ് എരിച്ചിൽ അല്ലെങ്കിൽ തലവേദന വരാം. വെള്ളം ധാരാളം കുടിക്കുക.",
        remedy: "ദിവസവും രാവിലെ സൂര്യനമസ്കാരം ചെയ്യുക. 'ആദിത്യ ഹൃദയം' കേൾക്കുന്നത് തടസ്സങ്ങൾ നീക്കാൻ സഹായിക്കും. പാവപ്പെട്ടവർക്ക് ഗോതമ്പ് ദാനം ചെയ്യുക.",
        icon: "👑",
        color: "#ff9800"
    },
    "Moon": {
        theme: "മാനസികാവസ്ഥ & യാത്രകൾ",
        event: "ചന്ദ്രൻ മനസ്സിനെ നിയന്ത്രിക്കുന്നു. ഈ സമയത്ത് നിങ്ങളുടെ മനസ്സ് ഒരിടത്തും ഉറച്ചുനിൽക്കില്ല. ചെറിയ കാര്യത്തിന് പോലും അമിതമായി ചിന്തിക്കാൻ സാധ്യതയുണ്ട്. നിങ്ങൾക്ക് യാത്രകൾ ചെയ്യാനുള്ള യോഗം കാണുന്നു. സർഗ്ഗാത്മക രംഗത്തുള്ളവർക്ക് ഇത് മികച്ച സമയമാണ്.",
        career: "തൊഴിലിൽ മാറ്റങ്ങൾ ആഗ്രഹിക്കുന്നു. ജോലിഭാരം കാരണം മാനസിക ക്ഷീണം ഉണ്ടാകാം. സഹപ്രവർത്തകരുമായി വികാരങ്ങൾക്ക് അടിപ്പെടാതെ ജോലികളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക.",
        family: "അമ്മയുടെ ആരോഗ്യം ശ്രദ്ധിക്കുക. ജലദോഷം, ചുമ അല്ലെങ്കിൽ ജല സംബന്ധമായ അസുഖങ്ങൾ വരാം. രാത്രി സമയങ്ങളിൽ ഒറ്റയ്ക്ക് യാത്ര ചെയ്യരുത്.",
        remedy: "തിങ്കളാഴ്ച ശിവക്ഷേത്രത്തിൽ പാൽ സമർപ്പിക്കുക. വെള്ളി ഗ്ലാസിൽ വെള്ളം കുടിക്കുന്നത് മനസ്സിന് ശാന്തി നൽകും.",
        icon: "🌙",
        color: "#2196f3"
    },
    "Mars": {
        theme: "ശക്തി & ധൈര്യം",
        event: "ചൊവ്വ നിങ്ങൾക്ക് അപാരമായ ഊർജ്ജം നൽകുന്നു. നിങ്ങൾ ഏത് ജോലിയും ധൈര്യത്തോടെ തുടങ്ങും. എന്നാൽ, നിങ്ങളുടെ ദേഷ്യം നിയന്ത്രിക്കണം. എടുത്തുചാട്ടം വഴക്കുകൾക്ക് കാരണമാകാം. ഭൂമി അല്ലെങ്കിൽ വസ്തു വാങ്ങാനുള്ള ശ്രമങ്ങൾ വിജയിക്കും.",
        career: "സാങ്കേതിക, റിയൽ എസ്റ്റേറ്റ് അല്ലെങ്കിൽ പോലീസ് രംഗത്തുള്ളവർക്ക് ഇത് രാജയോഗമാണ്. ശത്രുക്കളുടെ മേൽ നിങ്ങൾ വിജയം നേടും. മത്സര പരീക്ഷകൾക്ക് ഇത് നല്ല സമയമാണ്.",
        family: "സഹോദരങ്ങളുമായി ചെറിയ വഴക്കുകൾ ഉണ്ടാകാം. രക്തസമ്മർദ്ദം (BP) അല്ലെങ്കിൽ ചെറിയ പരിക്കുകൾ ഉണ്ടാകാൻ സാധ്യതയുണ്ട്. വാഹനം ഓടിക്കുമ്പോൾ ശ്രദ്ധിക്കുക.",
        remedy: "ചൊവ്വാഴ്ച സുബ്രഹ്മണ്യനെയോ ഹനുമാനേയോ പൂജിക്കുക. ചുവന്ന പരിപ്പ് ദാനം ചെയ്യുക.",
        icon: "⚔️",
        color: "#d32f2f"
    },
    "Mercury": {
        theme: "ബുദ്ധിശക്തി & വ്യാപാരം",
        event: "ഇത് നിങ്ങളുടെ ബുദ്ധിശക്തി തെളിയിക്കേണ്ട സമയമാണ്. നിങ്ങൾ എടുക്കുന്ന തീരുമാനങ്ങൾ വളരെ ബുദ്ധിപരമായിരിക്കും. വിദ്യാർത്ഥികൾക്കും വ്യാപാരികൾക്കും ഇത് വളരെ അനുകൂലമായ കാലമാണ്. പുതിയ കാര്യങ്ങൾ പഠിക്കാനുള്ള താല്പര്യം വർദ്ധിക്കും.",
        career: "നിങ്ങളുടെ ആശയവിനിമയ കഴിവുകൾ മികച്ചതായിരിക്കും. ബിസിനസ്സ് കരാറുകൾ (Deals) ഉറപ്പിക്കാൻ ഇത് അനുയോജ്യമായ സമയമാണ്. അക്കൗണ്ട്സ്, മാധ്യമ രംഗത്തുള്ളവർക്ക് ലാഭം ഉണ്ടാകും.",
        family: "ബന്ധുക്കളുടെ വരവ് വീട്ടിൽ സന്തോഷം നിറയ്ക്കും. ചർമ്മ സംബന്ധമായ അലർജികൾ വരാം. നാഡീവ്യൂഹം ബലഹീനമാകാതെ നോക്കുക.",
        remedy: "ബുധനാഴ്ച പശുക്കൾക്ക് പച്ച പുല്ല് അല്ലെങ്കിൽ ചീര നൽകുക. വിഷ്ണു സഹസ്രനാമം ജപിക്കുക.",
        icon: "📚",
        color: "#388e3c"
    },
    "Jupiter": {
        theme: "ജ്ഞാനം & സമ്പത്ത്",
        event: "വ്യാഴത്തിന്റെ അനുഗ്രഹത്താൽ നിങ്ങളുടെ ജീവിതത്തിൽ നല്ലൊരു മാറ്റം വരാൻ പോകുന്നു. മുതിർന്നവരുടെ അനുഗ്രഹം നിങ്ങൾക്ക് ലഭിക്കും. ദൈവചിന്ത വർദ്ധിക്കും. മുമ്പ് മുടങ്ങിപ്പോയ കാര്യങ്ങൾ ഇപ്പോൾ പൂർത്തിയാകും. ഇത് വളരെ ശുഭകരമായ സമയമാണ്.",
        career: "ജോലിയിൽ സ്ഥാനക്കയറ്റം അല്ലെങ്കിൽ ശമ്പളം കൂടാൻ സാധ്യതയുണ്ട്. അധ്യാപകർ, അഭിഭാഷകർ, ഉപദേഷ്ടാക്കൾ എന്നിവർക്ക് ഇത് സുവർണ്ണ കാലമാണ്. ധനലാഭം കാണുന്നു.",
        family: "കുട്ടികളില്ലാത്തവർക്ക് ശുഭവാർത്ത കേൾക്കാൻ അവസരമുണ്ട്. മധുരപലഹാരങ്ങൾ കഴിക്കുന്നത് കുറയ്ക്കുക, ശരീരഭാരം കൂടാൻ സാധ്യതയുണ്ട്.",
        remedy: "വ്യാഴാഴ്ച സായിബാബയെയോ ദത്താത്രേയനെയോ ദർശിക്കുക. നെറ്റിയിൽ കുങ്കുമം (Saffron) തിലകം അണിയുക.",
        icon: "✨",
        color: "#fbc02d"
    },
    "Venus": {
        theme: "ആഡംബരം & സന്തോഷം",
        event: "ശുക്രൻ നിങ്ങൾക്ക് ഭോഗഭാഗ്യങ്ങൾ നൽകുന്നു. പുതിയ വസ്ത്രങ്ങൾ, ആഭരണങ്ങൾ അല്ലെങ്കിൽ വാഹനം വാങ്ങാൻ നിങ്ങൾ ആലോചിക്കും. നിങ്ങളുടെ മുഖത്ത് തേജസ്സ് വർദ്ധിക്കും. എതിർലിംഗത്തിലുള്ളവരിൽ നിന്ന് സഹായം ലഭിക്കും.",
        career: "കല, സിനിമ, ഫാഷൻ, ഡിസൈനിംഗ് രംഗത്തുള്ളവർക്ക് മികച്ചതായിരിക്കും. ഓഫീസിൽ അന്തരീക്ഷം വളരെ ഉന്മേഷദായകമായിരിക്കും.",
        family: "ഭാര്യാഭർത്താക്കന്മാർ തമ്മിലുള്ള അടുപ്പം വർദ്ധിക്കും. വിവാഹം കഴിക്കാത്തവർക്ക് വിവാഹ ആലോചനകൾ വരും. പ്രമേഹം (Diabetes) ഉള്ളവർ ശ്രദ്ധിക്കണം.",
        remedy: "വെള്ളിയാഴ്ച ലക്ഷ്മി ദേവിയെ പൂജിക്കുക. പാവപ്പെട്ട സ്ത്രീകൾക്ക് മഞ്ഞൾ, കുങ്കുമം നൽകുക.",
        icon: "💎",
        color: "#c2185b"
    },
    "Saturn": {
        theme: "കർമ്മം & കഠിനാധ്വാനം",
        event: "ശനി ദേവൻ നിങ്ങളെ ക്ഷമ പഠിപ്പിക്കും. ഒരു കാര്യവും എളുപ്പത്തിൽ നടക്കില്ല, കഠിനാധ്വാനത്തിന് ശേഷമേ ഫലം ലഭിക്കൂ. ഇത് അലസതയ്ക്കുള്ള സമയമല്ല. നിങ്ങൾ എത്ര കഷ്ടപ്പെടുന്നുവോ അത്രയും വലിയ ഫലം ലഭിക്കും.",
        career: "ജോലിഭാരം വർദ്ധിക്കും. ഉദ്യോഗസ്ഥരിൽ നിന്ന് സമ്മർദ്ദം ഉണ്ടാകാം. എന്നാൽ ഭയപ്പെടേണ്ട, ഇത് നിങ്ങളുടെ ഭാവിക്കുള്ള അടിത്തറയാണ്. നിയമവിരുദ്ധമായ കാര്യങ്ങളിൽ നിന്ന് വിട്ടുനിൽക്കുക.",
        family: "കാലുവേദന അല്ലെങ്കിൽ സന്ധിവാതം ബുദ്ധിമുട്ടിക്കാം. പഴയ സുഹൃത്തുക്കൾ അകലാൻ സാധ്യതയുണ്ട്. മുതിർന്നവരെ സഹായിക്കുക.",
        remedy: "ശനിയാഴ്ച അരയാലിന്റെ ചുവട്ടിൽ എള്ളെണ്ണ ഒഴിച്ച് വിളക്ക് കൊളുത്തുക. വികലാംഗരെയോ തൊഴിലാളികളെയോ സഹായിക്കുക.",
        icon: "⚖️",
        color: "#455a64"
    },
    "Rahu": {
        theme: "ഭ്രമം & ആകസ്മിക മാറ്റങ്ങൾ",
        event: "രാഹു എന്നാൽ മായയാണ്. ഈ സമയത്ത് നിങ്ങൾക്ക് ഇല്ലാത്തത് ഉള്ളതായും, ഉള്ളത് ഇല്ലാത്തതായും തോന്നും. ആകസ്മിക യാത്രകൾ അല്ലെങ്കിൽ പ്രതീക്ഷിക്കാത്ത ചെലവുകൾ വരാം. പുതിയ വ്യക്തികളെ കണ്ണടച്ച് വിശ്വസിക്കരുത്. വിദേശത്ത് പോകാൻ ശ്രമിക്കുന്നവർക്ക് ഇത് നല്ല സമയമാണ്.",
        career: "രാഷ്ട്രീയത്തിലോ ടെക്നോളജി രംഗത്തോ ഉള്ളവർക്ക് ആകസ്മിക പദവികൾ വരാം. എന്നാൽ ഗൂഢാലോചനകൾ നടത്തുന്നവർ നിങ്ങൾക്ക് ചുറ്റുമുണ്ടാകും, ശ്രദ്ധിക്കുക.",
        family: "ഉറക്കമില്ലായ്മ അല്ലെങ്കിൽ അകാരണമായ ഭയം (Anxiety) നിങ്ങളെ അലട്ടാം. ഭക്ഷണകാര്യത്തിൽ ശ്രദ്ധിക്കുക, ഗ്യാസ്ട്രിക് പ്രശ്നങ്ങൾ വരാം.",
        remedy: "ദുർഗ്ഗാ ദേവിയെ പൂജിക്കുക. പക്ഷികൾക്കോ തെരുവ് നായ്ക്കൾക്കോ ഭക്ഷണം നൽകുക. 'ഓം ദും ദുർഗ്ഗായൈ നമഹ' എന്ന് ജപിക്കുക.",
        icon: "🌪️",
        color: "#5d4037"
    },
    "Ketu": {
        theme: "വൈരാഗ്യം & ആത്മീയത",
        event: "കേതു നിങ്ങൾക്ക് ലൗകിക കാര്യങ്ങളിലുള്ള താല്പര്യം കുറയ്ക്കുന്നു. ഒറ്റയ്ക്ക് കഴിയാൻ തോന്നും. നിങ്ങൾക്ക് അന്തർജ്ഞാനം (Intuition) നന്നായി പ്രവർത്തിക്കും. ഇത് ദൈവീക കാര്യങ്ങൾക്കും, യോഗ, ധ്യാനം എന്നിവയ്ക്കും വളരെ നല്ല സമയമാണ്.",
        career: "ജോലി ഉപേക്ഷിക്കാൻ തോന്നാം. നിങ്ങളുടെ ജോലിയെ ആരും അംഗീകരിക്കുന്നില്ലെന്ന് വിഷമിക്കരുത്. ഗവേഷണം (Research) ചെയ്യുന്നവർക്ക് ഇത് നല്ല കാലമാണ്.",
        family: "ശരീരത്തിൽ ക്ഷീണം, വേദനകൾ അല്ലെങ്കിൽ ചർമ്മ രോഗങ്ങൾ വരാം. ആരോടും അനാവശ്യ തർക്കങ്ങളിൽ ഏർപ്പെടരുത്.",
        remedy: "ഗണപതിയെ പൂജിക്കുക. ആശ്രമങ്ങൾക്കോ ക്ഷേത്രങ്ങൾക്കോ സംഭാവന നൽകുക. നായ്ക്കൾക്ക് ഭക്ഷണം നൽകുന്നത് നല്ലതാണ്.",
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
        let pNameML = PLANET_ML[p.name] ? PLANET_ML[p.name].substr(0, 2) : p.name.substr(0, 2);
        return { n: pNameML, s: vSign };
    });
}

function renderChart(divId, planets) {
    const div = document.getElementById(divId); if (!div) return; div.innerHTML = '';
    const boxOrder = [{s:12}, {s:1}, {s:2}, {s:3}, {s:11}, {s:0}, {s:0}, {s:4}, {s:10}, {s:0}, {s:0}, {s:5}, {s:9}, {s:8}, {s:7}, {s:6}];
    boxOrder.forEach(b => {
        const cell = document.createElement('div'); cell.className = 'house';
        if (b.s !== 0) {
            cell.innerHTML = `<div class="sign-label">${SIGNS_ML[b.s]}</div>`;
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
    let name = (typeof NAKSHATRAS_ML !== 'undefined') ? NAKSHATRAS_ML[idx] : "Unknown";
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
    // where we used boolean flags to determine what to show in Malayalam.
    return { present: isSadeSati, moonSign: SIGNS_ML[moonSign], saturnSign: SIGNS_ML[currentSaturnSign], statusText: isSadeSati ? "Sade Sati is Present" : "No Sade Sati", desc: isSadeSati ? "You are currently undergoing Sade Sati." : "Currently you are free from Sade Sati." };
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
            rows.push({ moonSign: SIGNS_ML[moonSignIdx], satSign: SIGNS_ML[satSignIdx], isRetro: Math.random() > 0.8 ? "true" : "false", phase: p.type, date: "01-01-" + Math.floor(currentY), summary: p.sum });
            currentY += 2.5;
        });
    }
    return rows;
}