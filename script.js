/* =====================  EDIT HERE  ===================== */

const SCOUT_MASTER = { name: "Mr. S. Nirosan", role: "Scout Master" };
const TROOP_LEADER = { name: "P. Piravin", role: "Troop Leader" };
const ASSISTANT_LEADER = { name: "K.Rakshajan", role: "Assistant Leader" };

const SCOUTS = [
  "P. Aadithyassaran",
  "V. Gowsikan",
  "P. Ketharan",
  "K. Thiluksayan",
  "S. Sakishnu",
  "Y. Arunshakar",
  "C. Amsith",
  "J. Movikshayan",
  "S. Koashithan",
  "V. Tuthivarthan",
  "N. Kishanth",
  "A. Lakithyan",
  "S. Varshan",
  "E. Varshan",
  "K. Kamshayan",
  "G. Tharmithan",
  "S. Yashyikan",
  "R. Puvirajh",
  "N. Mathuran",
  "N. Diroshan",
];

const EVENTS = [
  { date: "2027-01-01", title: "T.M.M.V (N.S) Boy Scouts Website Launch", place: "Online", note: "Our troop website goes live — join us for the launch!" },
];

const TROOP_EMAIL = "mrpiravin38@gmail.com";

/* ===================  END OF EDIT AREA  =================== */

/* ===== TRANSLATIONS ===== */
const I18N = {
  en: {
    nav_about:"About",nav_leaders:"Leaders",nav_activities:"Activities",nav_events:"Events",nav_roster:"Our Scouts",nav_gallery:"Gallery",nav_join:"Join us",
    launch_label:"Website launch countdown",launch_date:"Launching 1 January 2027",count_days:"Days",count_hours:"Hours",count_minutes:"Minutes",count_seconds:"Seconds",
    trail_empty_title:"No moments are available from the trail yet",trail_empty_text:"Our adventure gallery is waiting for its first photos. Check back after our next troop activity!",
    hero_eyebrow:"Sri Lanka Scout Association · Akkaraipattu Kalmunai District",hero_title:"Boy Scouts",hero_lead:"Be prepared. Lead with courage. Serve with a smile. Join a troop that turns every weekend into an adventure.",
    cta_join:"Join the troop",cta_events:"Upcoming events",
    stat_scouts:"Active scouts",stat_master:"Scout Master",stat_troop:"Proud troop",stat_year:"Census year",
    about_kicker:"About us",about_title:"Building character, one adventure at a time",about_text:"We are the T.M.M.V (N.S) Boy Scouts, the scout troop of Km/Tk/Thambiluvil M.M.V. (National School), part of the Sri Lanka Scout Association, Akkaraipattu Kalmunai District. Our scouts learn practical skills, lead their patrols and serve their community.",
    card_leadership:"Leadership",card_leadership_desc:"Patrol leaders plan activities and run meetings, learning to lead by doing.",
    card_outdoor:"Outdoor life",card_outdoor_desc:"Day hikes, camp-outs and trainings that teach teamwork and resilience.",
    card_service:"Service",card_service_desc:"Clean-up drives, tree planting and helping hands wherever the village needs them.",
    leaders_kicker:"Leadership",leaders_title:"Meet our leaders",
    activities_kicker:"What we do",activities_title:"Skills for life",
    act_camping:"Camping",act_hiking:"Hiking",act_knots:"Knots & lashings",act_firstaid:"First aid",act_nav:"Navigation",act_cooking:"Outdoor cooking",act_service:"Community service",act_badges:"Badges & awards",
    events_kicker:"Calendar",events_title:"Upcoming events",
    roster_kicker:"Our scouts",roster_title:"The troop",roster_desc:"The young scouts who make our troop what it is.",
    add_title:"Add New Member",add_btn:"Add Member",
    promise_text:"\u201cOn my honour I promise that I will do my best to do my duty to God and to the country, to help other people, and to keep the Scout Law.\u201d",promise_label:"The Scout Promise",
    gallery_kicker:"Gallery",gallery_title:"Moments from the trail",gal_1:"Training day",gal_2:"Summit hike",gal_3:"Service day",gal_4:"Campfire night",
    join_kicker:"Join us",join_title:"Ready for the adventure?",join_text:"Students of Thambiluvil M.M.V. are welcome to try a session. Fill in the form and your email app will open with the details ready to send to our Scout Master.",
    form_scout_name:"Scout's full name",form_name:"Parent / guardian name",form_age:"Scout's age",form_submit:"Send enquiry",
    save_btn:"Save & Download HTML",lock_btn:"Lock"
  },
  ta: {
    nav_about:"எங்களை பற்றி",nav_leaders:"தலைவர்கள்",nav_activities:"பயிற்சிகள்",nav_events:"நிகழ்வுகள்",nav_roster:"எங்கள் சாரணர்கள்",nav_gallery:"படக்காட்சிகள்",nav_join:"சேர",
    launch_label:"இணையதளத் தொடக்கத்திற்கான மீதமுள்ள நேரம்",launch_date:"2027 ஜனவரி 1 அன்று தொடக்கம்",count_days:"நாட்கள்",count_hours:"மணிநேரம்",count_minutes:"நிமிடங்கள்",count_seconds:"விநாடிகள்",
    trail_empty_title:"சாரணர் பயணத்தின் புகைப்படங்கள் இன்னும் கிடைக்கவில்லை",trail_empty_text:"எங்கள் சாகசப் படக்காட்சியில் முதல் புகைப்படங்கள் சேர்க்கப்பட உள்ளன. அடுத்த சாரணர் நிகழ்வுக்குப் பிறகு மீண்டும் பாருங்கள்!",
    hero_eyebrow:"இலங்கை சாரணர் சங்கம் · அக்கரைப்பற்று கல்முனை மாவட்டம்",hero_title:"சிறுவன் சாரணர்கள்",hero_lead:"தயார் நிலையில் இரு. பிணித்து தலைமை வகி. புன்னகையுடன் சேவை செய். ஒவ்வொரு ஞாயிறு நாளையும் விருதுக்கு மாற்றும் படைக்கு சேர.",
    cta_join:"படைக்கு சேர",cta_events:"வரவிருக்கும் நிகழ்வுகள்",
    stat_scouts:"செயலில் உள்ள சாரணர்கள்",stat_master:"சாரணர் தலைவர்",stat_troop:"வெற்றிடம்",stat_year:"பெருந்தொகை ஆண்டு",
    about_kicker:"எங்களை பற்றி",about_title:"ஒரு விருது மூலம் ஒரு குணத்தை உருவாக்குதல்",about_text:"நாம் T.M.M.V (N.S) சிறுவன் சாரணர்கள். Km/Tk/தம்பிலுவில் M.M.V. (தேசிய பள்ளி) சாரணர் படை, இலங்கை சாரணர் சங்கத்தின் அங்கம், அக்கரைப்பற்று கல்முனை மாவட்டம். எங்கள் சாரணர்கள் பயனுள்ள திறன்களை கற்றுக்கொண்டு, தங்கள் படைகளை வழிநடத்துகிறார்கள், அவர்களின் சமூகத்திற்கு சேவை செய்கிறார்கள்.",
    card_leadership:"தலைமை",card_leadership_desc:"படை தலைவர்கள் செயல்பாடுகளை திட்டமிட்டு, கூட்டங்களை நடத்துகிறார்கள், செய்வதன் மூலம் தலைமை கற்கிறார்கள்.",
    card_outdoor:"வெளி வாழ்க்கை",card_outdoor_desc:"நாள் நடை பயிற்சிகள், முகாம் மற்றும் பயிற்சிகள் இணை வேலையை மற்றும் உறுதியை கற்பிக்கின்றன.",
    card_service:"சேவை",card_service_desc:" சுத்தம் செய்யும் பயிற்சிகள், மரம் நடவு மற்றும் கிராமம் தேவைப்படும் இடங்களில் உதவி கை.",
    leaders_kicker:"தலைமை",leaders_title:"எங்கள் தலைவர்களை சந்திக்கவும்",
    activities_kicker:"நாம் என்ன செய்கிறோம்",activities_title:"வாழ்வுக்கான திறன்கள்",
    act_camping:"முகாம்",act_hiking:"நடை பயிற்சி",act_knots:"கேடிகள் & கட்டல்கள்",act_firstaid:"முதல் உதவி",act_nav:"பாதை கண்டறிதல்",act_cooking:"வெளி சமையல்",act_service:"சமூக சேவை",act_badges:"தட்டைகள் & விருதுகள்",
    events_kicker:"நாட்காட்டி",events_title:"வரவிருக்கும் நிகழ்வுகள்",
    roster_kicker:"எங்கள் சாரணர்கள்",roster_title:"படை",roster_desc:"எங்கள் படையை எதுவாக மாற்றும் இளம் சாரணர்கள்.",
    add_title:"புதிய உறுப்பினரை சேர்",add_btn:"உறுப்பினரை சேர்",
    promise_text:"\u201cஎன் மதிப்பிற்காக, கடவுள் மற்றும் நாட்டிற்கு என் கடமையை செய்ய, மற்றவர்களுக்கு உதவு, சாரணர் விதிகளை கடைபிடிக்க, என் சிறந்ததை செய்வேன் என்று உறுதி கூறுகிறேன்.\u201d",promise_label:"சாரணர் உறுதிமொழி",
    gallery_kicker:"படக்காட்சிகள்",gallery_title:"பாதையிலிருந்து நினைவுகள்",gal_1:"பயிற்சி நாள்",gal_2:"காடு நடை",gal_3:"சேவை நாள்",gal_4:"தீப்பொறி இரவு",
    join_kicker:"சேர",join_title:"விருதுக்காக தயாரா?",join_text:"தம்பிலுவில் M.M.V. மாணவர்கள் ஒரு அமர்வை முயற்சி செய்ய வரவேற்கப்படுகிறார்கள். படிவத்தை நிரப்பவும், உங்கள் மின்னஞ்சல் செயலி எங்கள் சாரணர் தலைவருக்கு அனுப்ப தயாராக திறக்கும்.",
    form_scout_name:"சாரணரின் முழுப் பெயர்",form_name:"பெற்றோர் / பாதுகாவலர் பெயர்",form_age:"சாரணர் வயது",form_submit:"விசாரணையை அனுப்பு",
    save_btn:"சேமி & HTML டைவ்லோட்",lock_btn:"பூட்டு"
  }
};

let currentLang = "en";
function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute("data-lang", lang);
  document.getElementById("lang-btn").textContent = lang === "en" ? "தமிழ்" : "English";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  renderLeaders();
  renderRoster();
  renderFacts();
}
document.getElementById("lang-btn").addEventListener("click", () => setLang(currentLang === "en" ? "ta" : "en"));

/* ===== THEME ===== */
let theme = "light";
function setTheme(t) {
  theme = t;
  document.documentElement.setAttribute("data-theme", t);
  document.getElementById("theme-btn").textContent = t === "light" ? "🌙" : "☀️";
}
document.getElementById("theme-btn").addEventListener("click", () => setTheme(theme === "light" ? "dark" : "light"));

/* ===== HELPERS ===== */
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const initials = name => {
  const parts = name.replace(/^(Mr|Mrs|Miss|Ms)\.?\s+/i, "").replace(/\./g, " ").trim().split(/\s+/);
  return ((parts[0] || "")[0] + (parts[parts.length - 1] || "")[0]).toUpperCase();
};

/* ===== RENDER ===== */
function renderLeaders() {
  const grid = document.getElementById("leaders-grid");
  const roleTa = { "Scout Master": "சாரணர் தலைவர்", "Troop Leader": "படை தலைவர்", "Assistant Leader": "உதவி தலைவர்" };
  grid.innerHTML = `
    <article class="leader-card primary">
      <div class="avatar big">${esc(initials(SCOUT_MASTER.name))}</div>
      <h3>${esc(SCOUT_MASTER.name)}</h3>
      <p class="role">${esc(SCOUT_MASTER.role)}${currentLang==="ta" ? " · " + esc(roleTa[SCOUT_MASTER.role]) : ""}</p>
      <p>${currentLang==="ta" ? "படையை வழிநடக்கிறது மற்றும் ஒவ்வொரு சாரணரின் பயிற்சியையும், தட்டை வேலையையும் வளர்ச்சியையும் ஆதரிக்கிறது." : "Guides the troop and supports every scout's training, badge work and growth."}</p>
      <div class="edit-ui">
        <button class="edit-btn" onclick="removeLeader('SM')">✕</button>
        <div class="role-select"><select onchange="changeLeaderRole('SM',this.value)">
          <option ${SCOUT_MASTER.role==="Scout Master"?"selected":""}>Scout Master</option>
          <option ${SCOUT_MASTER.role==="Troop Leader"?"selected":""}>Troop Leader</option>
          <option ${SCOUT_MASTER.role==="Assistant Leader"?"selected":""}>Assistant Leader</option>
        </select></div>
      </div>
    </article>
    <article class="leader-card" id="piravin-card">
      <div class="avatar big">${esc(initials(TROOP_LEADER.name))}</div>
      <h3>${esc(TROOP_LEADER.name)}</h3>
      <p class="role">${esc(TROOP_LEADER.role)}${currentLang==="ta" ? " · " + esc(roleTa[TROOP_LEADER.role]) : ""}</p>
      <p>${currentLang==="ta" ? "எங்கள் படைகளை வழிநடக்கிறது, செயல்பாடுகளை திட்டமிட்டு, முழு படையிற்கும் மாதிரியாக இருக்கிறது." : "Leads our patrols, plans activities and sets the example for the whole troop."}</p>
      <div class="edit-ui">
        <button class="edit-btn" onclick="removeLeader('TL')">✕</button>
        <div class="role-select"><select onchange="changeLeaderRole('TL',this.value)">
          <option ${TROOP_LEADER.role==="Scout Master"?"selected":""}>Scout Master</option>
          <option ${TROOP_LEADER.role==="Troop Leader"?"selected":""}>Troop Leader</option>
          <option ${TROOP_LEADER.role==="Assistant Leader"?"selected":""}>Assistant Leader</option>
        </select></div>
      </div>
    </article>
    <article class="leader-card">
      <div class="avatar big">${esc(initials(ASSISTANT_LEADER.name))}</div>
      <h3>${esc(ASSISTANT_LEADER.name)}</h3>
      <p class="role">${esc(ASSISTANT_LEADER.role)}${currentLang==="ta" ? " · " + esc(roleTa[ASSISTANT_LEADER.role]) : ""}</p>
      <p>${currentLang==="ta" ? "படை தலைவருடன் இணைந்து பணியாற்றி, சாரணர்களுக்கு ஆதரவு அளிக்கிறது." : "Works alongside the Troop Leader, supporting scouts in their training and growth."}</p>
      <div class="edit-ui">
        <button class="edit-btn" onclick="removeLeader('AL')">✕</button>
        <div class="role-select"><select onchange="changeLeaderRole('AL',this.value)">
          <option ${ASSISTANT_LEADER.role==="Scout Master"?"selected":""}>Scout Master</option>
          <option ${ASSISTANT_LEADER.role==="Troop Leader"?"selected":""}>Troop Leader</option>
          <option ${ASSISTANT_LEADER.role==="Assistant Leader"?"selected":""}>Assistant Leader</option>
        </select></div>
      </div>
    </article>`;
  // Re-attach 4-click listener
  const pc = document.getElementById("piravin-card");
  if (pc) pc.addEventListener("click", onPiravinClick);
}

function renderRoster() {
  const grid = document.getElementById("roster-grid");
  grid.innerHTML = "";
  const everyone = [
    { name: TROOP_LEADER.name, role: TROOP_LEADER.role, lead: true },
    { name: ASSISTANT_LEADER.name, role: ASSISTANT_LEADER.role, lead: true }
  ].concat(SCOUTS.filter(n => n !== ASSISTANT_LEADER.name).map(n => ({ name: n, role: "Scout", lead: false })));
  everyone.forEach((p, i) => {
    const d = document.createElement("div");
    d.className = "scout" + (p.lead ? " leader" : "");
    d.innerHTML = `<div class="avatar">${esc(initials(p.name))}</div><b>${esc(p.name)}</b><small>${esc(p.role)}</small>
      <div class="edit-ui">
        <button class="edit-btn" onclick="removeScout(${i})">✕</button>
        <div class="role-select"><select onchange="changeScoutRole(${i},this.value)">
          <option ${p.role==="Scout"?"selected":""}>Scout</option>
          <option ${p.role==="Assistant Leader"?"selected":""}>Assistant Leader</option>
          <option ${p.role==="Troop Leader"?"selected":""}>Troop Leader</option>
          <option ${p.role==="Scout Master"?"selected":""}>Scout Master</option>
        </select></div>
      </div>`;
    grid.appendChild(d);
  });
  document.getElementById("stat-scouts").dataset.count = everyone.length;
}

function renderFacts() {
  const roleTa = { "Scout Master": "சாரணர் தலைவர்", "Troop Leader": "படை தலைவர்", "Assistant Leader": "உதவி தலைவர்" };
  document.getElementById("facts").innerHTML = `
    <li>📍 Thambiluvil M.M.V. (National School)</li>
    <li>🧑‍🏫 ${esc(SCOUT_MASTER.role)}: ${esc(SCOUT_MASTER.name)}</li>
    <li>⭐ ${esc(TROOP_LEADER.role)}: ${esc(TROOP_LEADER.name)}</li>
    <li>🤝 ${esc(ASSISTANT_LEADER.role)}: ${esc(ASSISTANT_LEADER.name)}</li>`;
}

/* ===== 4-CLICK + PASSWORD ===== */
const ADMIN_PASS = "0538";
let clickCount = 0, clickTimer = null, isEditMode = false;

function onPiravinClick(e) {
  if (isEditMode) return;
  if (e.target.closest(".edit-ui")) return;
  clickCount++;
  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => { clickCount = 0; }, 1500);
  if (clickCount >= 4) {
    clickCount = 0;
    const pass = prompt("🔐 Enter admin password:");
    if (pass === ADMIN_PASS) {
      isEditMode = true;
      document.body.classList.add("edit-mode");
    } else if (pass !== null) {
      alert("❌ Wrong password.");
    }
  }
}

function lockMode() {
  isEditMode = false;
  document.body.classList.remove("edit-mode");
}

/* ===== EDIT FUNCTIONS ===== */
function addMember() {
  const name = document.getElementById("new-name").value.trim();
  const role = document.getElementById("new-role").value;
  if (!name) return alert("Enter a name.");
  SCOUTS.push(name);
  if (role !== "Scout") {
    // Update leader object
    if (role === "Scout Master") SCOUT_MASTER.name = name;
    else if (role === "Troop Leader") TROOP_LEADER.name = name;
    else if (role === "Assistant Leader") ASSISTANT_LEADER.name = name;
  }
  document.getElementById("new-name").value = "";
  renderLeaders();
  renderRoster();
  renderFacts();
}

function removeScout(i) {
  const everyone = [
    { name: TROOP_LEADER.name, role: TROOP_LEADER.role, lead: true },
    { name: ASSISTANT_LEADER.name, role: ASSISTANT_LEADER.role, lead: true }
  ].concat(SCOUTS.filter(n => n !== ASSISTANT_LEADER.name).map(n => ({ name: n, role: "Scout", lead: false })));
  if (i < 2) { alert("Troop leaders are managed in the Leadership section."); return; }
  const scoutIndex = SCOUTS.indexOf(everyone[i].name);
  if (scoutIndex >= 0 && confirm(`Remove ${everyone[i].name}?`)) {
    SCOUTS.splice(scoutIndex, 1);
    renderRoster();
  }
}

function changeScoutRole(i, newRole) {
  if (i === 0) { TROOP_LEADER.role = newRole; }
  else {
    const idx = i - 1;
    // For simplicity, scouts stay as scouts in the array; role changes reflected in render
    // We'll handle this by re-rendering with updated role
  }
  renderRoster();
}

function removeLeader(key) {
  alert("Leaders cannot be removed. Use role change instead.");
}

function changeLeaderRole(key, newRole) {
  if (key === "SM") SCOUT_MASTER.role = newRole;
  else if (key === "TL") TROOP_LEADER.role = newRole;
  else if (key === "AL") ASSISTANT_LEADER.role = newRole;
  renderLeaders();
  renderRoster();
  renderFacts();
}

/* ===== SAVE & DOWNLOAD ===== */
function saveWebsite() {
  const clone = document.documentElement.cloneNode(true);
  // Strip edit UI
  clone.querySelectorAll(".edit-ui").forEach(el => el.remove());
  clone.querySelectorAll("#add-member-form").forEach(el => el.remove());
  const cloneBody = clone.querySelector("body");
  if (cloneBody) cloneBody.classList.remove("edit-mode");
  const saveBar = clone.querySelector("#save-bar");
  if (saveBar) saveBar.remove();
  // Remove edit-mode style rules (keep it simple: just remove the class)
  let html = "<!DOCTYPE html>\n" + clone.outerHTML;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "index.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  alert("✅ Saved! Upload the downloaded index.html to GitHub Pages.");
}

/* ===== EVENTS ===== */
const list = document.getElementById("event-list");
const fmtMonth = new Intl.DateTimeFormat("en", { month: "short" });
const fmtLong = new Intl.DateTimeFormat("en", { weekday: "long", day: "numeric", month: "long" });
const today = new Date(new Date().toDateString());
EVENTS.filter(e => new Date(e.date + "T00:00:00") >= today)
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .forEach(e => {
    const d = new Date(e.date + "T00:00:00");
    const li = document.createElement("li");
    li.innerHTML = `<div class="date">${d.getDate()}<small>${fmtMonth.format(d)}</small></div><div><h3>${esc(e.title)}</h3><p>${esc(fmtLong.format(d))} · ${esc(e.place)} · ${esc(e.note)}</p></div>`;
    list.appendChild(li);
  });
if (!list.children.length) list.innerHTML = "<li>No upcoming events yet. Check back soon!</li>";

/* ===== STARS ===== */
const stars = document.querySelector(".stars");
for (let i = 0; i < 70; i++) {
  const s = document.createElement("span");
  s.className = "star";
  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 65 + "%";
  s.style.animationDelay = Math.random() * 3 + "s";
  stars.appendChild(s);
}

/* ===== NAV ===== */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => { const o = menu.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
menu.addEventListener("click", () => menu.classList.remove("open"));

/* ===== REVEAL + COUNTERS ===== */
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
const co = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  const el = en.target, end = +el.dataset.count, t0 = performance.now(), dur = 1400;
  const tick = t => { const p = Math.min((t - t0) / dur, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
  co.unobserve(el);
}), { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach(c => co.observe(c));

document.getElementById("year").textContent = new Date().getFullYear();

/* ===== WEBSITE LAUNCH COUNTDOWN ===== */
function updateLaunchCountdown() {
  const launchAt = new Date("2027-01-01T00:00:00+05:30").getTime();
  const remaining = Math.max(0, launchAt - Date.now());
  const values = {
    "launch-days": Math.floor(remaining / 86400000),
    "launch-hours": Math.floor((remaining % 86400000) / 3600000),
    "launch-minutes": Math.floor((remaining % 3600000) / 60000),
    "launch-seconds": Math.floor((remaining % 60000) / 1000)
  };
  Object.entries(values).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value).padStart(2, "0");
  });
  if (remaining === 0) {
    const label = document.querySelector(".launch-label");
    if (label) label.textContent = currentLang === "ta" ? "இணையதளம் தொடங்கிவிட்டது!" : "Our website is now live!";
  }
}
updateLaunchCountdown();
setInterval(updateLaunchCountdown, 1000);

/* ===== WEBSITE LAUNCH COUNTDOWN ===== */
function updateLaunchCountdown() {
  const launchAt = new Date("2027-01-01T00:00:00+05:30").getTime();
  const remaining = Math.max(0, launchAt - Date.now());
  const units = {
    "launch-days": Math.floor(remaining / 86400000),
    "launch-hours": Math.floor((remaining % 86400000) / 3600000),
    "launch-minutes": Math.floor((remaining % 3600000) / 60000),
    "launch-seconds": Math.floor((remaining % 60000) / 1000)
  };
  Object.entries(units).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value).padStart(2, "0");
  });
  if (remaining === 0) {
    const label = document.querySelector(".launch-label");
    if (label) label.textContent = currentLang === "ta" ? "இணையதளம் தொடங்கிவிட்டது!" : "Our website is now live!";
  }
}
updateLaunchCountdown();
setInterval(updateLaunchCountdown, 1000);

/* Join enquiries are submitted securely through the FormSubmit form endpoint in index.html. */

/* ===== INIT ===== */
renderLeaders();
renderRoster();
renderFacts();
