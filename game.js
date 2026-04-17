// ========== Harry Potter Word Bank ==========
const BASE_WORDS = [
  // Characters
  {w:"harry",c:"Character"},{w:"hermione",c:"Character"},{w:"ron",c:"Character"},
  {w:"dumbledore",c:"Character"},{w:"voldemort",c:"Character"},{w:"snape",c:"Character"},
  {w:"malfoy",c:"Character"},{w:"neville",c:"Character"},{w:"luna",c:"Character"},
  {w:"ginny",c:"Character"},{w:"sirius",c:"Character"},{w:"lupin",c:"Character"},
  {w:"hagrid",c:"Character"},{w:"dobby",c:"Character"},{w:"hedwig",c:"Character"},
  {w:"bellatrix",c:"Character"},{w:"mcgonagall",c:"Character"},{w:"moody",c:"Character"},
  {w:"cedric",c:"Character"},{w:"cho",c:"Character"},{w:"percy",c:"Character"},
  {w:"fred",c:"Character"},{w:"george",c:"Character"},{w:"arthur",c:"Character"},
  {w:"molly",c:"Character"},{w:"nymphadora",c:"Character"},{w:"kingsley",c:"Character"},
  {w:"slughorn",c:"Character"},{w:"umbridge",c:"Character"},{w:"quirrell",c:"Character"},
  {w:"lockhart",c:"Character"},{w:"crouch",c:"Character"},{w:"pettigrew",c:"Character"},
  {w:"wormtail",c:"Character"},{w:"greyback",c:"Character"},{w:"scabbers",c:"Character"},
  {w:"crookshanks",c:"Character"},{w:"fawkes",c:"Character"},{w:"norbert",c:"Character"},
  {w:"fluffy",c:"Character"},{w:"nagini",c:"Character"},{w:"basilisk",c:"Character"},
  {w:"peeves",c:"Character"},{w:"moaning myrtle",c:"Character"},{w:"nearly headless nick",c:"Character"},
  {w:"the bloody baron",c:"Character"},{w:"the fat friar",c:"Character"},{w:"lavender",c:"Character"},
  {w:"parvati",c:"Character"},{w:"padma",c:"Character"},{w:"seamus",c:"Character"},
  {w:"dean",c:"Character"},{w:"oliver",c:"Character"},{w:"fleur",c:"Character"},
  {w:"viktor",c:"Character"},{w:"aberforth",c:"Character"},{w:"ariana",c:"Character"},
  {w:"bathilda",c:"Character"},{w:"grindelwald",c:"Character"},{w:"regulus",c:"Character"},
  {w:"kreacher",c:"Character"},{w:"winky",c:"Character"},{w:"mundungus",c:"Character"},
  {w:"tonks",c:"Character"},{w:"bill",c:"Character"},{w:"charlie",c:"Character"},
  {w:"james",c:"Character"},{w:"lily",c:"Character"},{w:"dudley",c:"Character"},
  {w:"petunia",c:"Character"},{w:"vernon",c:"Character"},{w:"marge",c:"Character"},
  // Spells
  {w:"expelliarmus",c:"Spell"},{w:"avada kedavra",c:"Spell"},{w:"crucio",c:"Spell"},
  {w:"imperio",c:"Spell"},{w:"lumos",c:"Spell"},{w:"nox",c:"Spell"},
  {w:"wingardium leviosa",c:"Spell"},{w:"alohomora",c:"Spell"},{w:"accio",c:"Spell"},
  {w:"expecto patronum",c:"Spell"},{w:"riddikulus",c:"Spell"},{w:"stupefy",c:"Spell"},
  {w:"petrificus totalus",c:"Spell"},{w:"finite incantatem",c:"Spell"},{w:"obliviate",c:"Spell"},
  {w:"sectumsempra",c:"Spell"},{w:"legilimens",c:"Spell"},{w:"occlumency",c:"Spell"},
  {w:"protego",c:"Spell"},{w:"reparo",c:"Spell"},{w:"incendio",c:"Spell"},
  {w:"aguamenti",c:"Spell"},{w:"episkey",c:"Spell"},{w:"morsmordre",c:"Spell"},
  {w:"homenum revelio",c:"Spell"},{w:"confundo",c:"Spell"},{w:"engorgio",c:"Spell"},
  {w:"reducio",c:"Spell"},{w:"reducto",c:"Spell"},{w:"bombarda",c:"Spell"},
  {w:"serpensortia",c:"Spell"},{w:"avis",c:"Spell"},{w:"deletrius",c:"Spell"},
  {w:"diffindo",c:"Spell"},{w:"dissendium",c:"Spell"},{w:"evanesco",c:"Spell"},
  {w:"expulso",c:"Spell"},{w:"ferula",c:"Spell"},{w:"flagrate",c:"Spell"},
  {w:"furnunculus",c:"Spell"},{w:"geminio",c:"Spell"},{w:"impedimenta",c:"Spell"},
  {w:"langlock",c:"Spell"},{w:"levicorpus",c:"Spell"},{w:"liberacorpus",c:"Spell"},
  {w:"locomotor",c:"Spell"},{w:"muffliato",c:"Spell"},{w:"orchideous",c:"Spell"},
  {w:"prior incantato",c:"Spell"},{w:"quietus",c:"Spell"},{w:"relashio",c:"Spell"},
  {w:"rictusempra",c:"Spell"},{w:"silencio",c:"Spell"},{w:"sonorus",c:"Spell"},
  {w:"tarantallegra",c:"Spell"},{w:"tergeo",c:"Spell"},{w:"vulnera sanentur",c:"Spell"},
  // Places
  {w:"hogwarts",c:"Place"},{w:"hogsmeade",c:"Place"},{w:"diagon alley",c:"Place"},
  {w:"knockturn alley",c:"Place"},{w:"azkaban",c:"Place"},{w:"ministry of magic",c:"Place"},
  {w:"grimmauld place",c:"Place"},{w:"the burrow",c:"Place"},{w:"godrics hollow",c:"Place"},
  {w:"privet drive",c:"Place"},{w:"forbidden forest",c:"Place"},{w:"chamber of secrets",c:"Place"},
  {w:"room of requirement",c:"Place"},{w:"department of mysteries",c:"Place"},
  {w:"dumbledores office",c:"Place"},{w:"the great hall",c:"Place"},
  {w:"gringotts",c:"Place"},{w:"platform 9 and 3/4",c:"Place"},{w:"leaky cauldron",c:"Place"},
  {w:"three broomsticks",c:"Place"},{w:"hogs head",c:"Place"},{w:"shell cottage",c:"Place"},
  {w:"malfoy manor",c:"Place"},{w:"spinner's end",c:"Place"},{w:"little whinging",c:"Place"},
  {w:"ottery st catchpole",c:"Place"},{w:"beauxbatons",c:"Place"},{w:"durmstrang",c:"Place"},
  {w:"lovegood house",c:"Place"},{w:"dobby's grave",c:"Place"},
  // Houses
  {w:"gryffindor",c:"House"},{w:"slytherin",c:"House"},{w:"ravenclaw",c:"House"},
  {w:"hufflepuff",c:"House"},{w:"sorting hat",c:"House"},
  // Objects / Items
  {w:"elder wand",c:"Object"},{w:"resurrection stone",c:"Object"},{w:"invisibility cloak",c:"Object"},
  {w:"deathly hallows",c:"Object"},{w:"horcrux",c:"Object"},{w:"philosopher's stone",c:"Object"},
  {w:"sorcerer's stone",c:"Object"},{w:"the marauder's map",c:"Object"},{w:"time turner",c:"Object"},
  {w:"the nimbus 2000",c:"Object"},{w:"the firebolt",c:"Object"},{w:"the golden snitch",c:"Object"},
  {w:"the triwizard cup",c:"Object"},{w:"the goblet of fire",c:"Object"},{w:"the sword of gryffindor",c:"Object"},
  {w:"remembrall",c:"Object"},{w:"howler",c:"Object"},{w:"portkey",c:"Object"},
  {w:"polyjuice potion",c:"Object"},{w:"felix felicis",c:"Object"},{w:"veritaserum",c:"Object"},
  {w:"the prophecy",c:"Object"},{w:"daily prophet",c:"Object"},{w:"quibbler",c:"Object"},
  {w:"the mirror of erised",c:"Object"},{w:"the pensieve",c:"Object"},{w:"the sorting hat",c:"Object"},
  {w:"the half blood prince",c:"Object"},{w:"the diary",c:"Object"},{w:"the locket",c:"Object"},
  {w:"the cup",c:"Object"},{w:"the ring",c:"Object"},{w:"the diadem",c:"Object"},
  {w:"gillyweed",c:"Object"},{w:"mandrake",c:"Object"},{w:"bertie botts",c:"Object"},
  {w:"chocolate frog",c:"Object"},{w:"butterbeer",c:"Object"},{w:"firewhisky",c:"Object"},
  {w:"pumpkin juice",c:"Object"},{w:"skiving snackbox",c:"Object"},{w:"extendable ears",c:"Object"},
  {w:"peruvian darkness powder",c:"Object"},{w:"invisibility booster",c:"Object"},
  // Numbers & HP References
  {w:"platform 9 3/4",c:"Number Ref"},{w:"9 and 3/4",c:"Number Ref"},
  {w:"the 7 horcruxes",c:"Number Ref"},{w:"chapter 1",c:"Number Ref"},
  {w:"1 year at hogwarts",c:"Number Ref"},{w:"7 years at hogwarts",c:"Number Ref"},
  {w:"3 unforgivable curses",c:"Number Ref"},{w:"3 deathly hallows",c:"Number Ref"},
  {w:"2 beaters",c:"Number Ref"},{w:"7 players per team",c:"Number Ref"},
  {w:"150 points for the snitch",c:"Number Ref"},{w:"the 4 houses",c:"Number Ref"},
  {w:"1000 galleons",c:"Number Ref"},{w:"12 uses of dragon blood",c:"Number Ref"},
  {w:"the 12 days of christmas",c:"Number Ref"},{w:"number 4 privet drive",c:"Number Ref"},
  {w:"dungeon 7",c:"Number Ref"},{w:"floor 9",c:"Number Ref"},
  {w:"floor 7",c:"Number Ref"},{w:"1991",c:"Number Ref"},
  {w:"1992",c:"Number Ref"},{w:"1997",c:"Number Ref"},
  {w:"1998",c:"Number Ref"},{w:"31 july",c:"Number Ref"},
  {w:"the 2nd task",c:"Number Ref"},{w:"the 3rd task",c:"Number Ref"},
  {w:"tournament of 3 schools",c:"Number Ref"},{w:"64 squares on chess",c:"Number Ref"},
  // Creatures
  {w:"hippogriff",c:"Creature"},{w:"thestral",c:"Creature"},{w:"centaur",c:"Creature"},
  {w:"unicorn",c:"Creature"},{w:"phoenix",c:"Creature"},{w:"dragon",c:"Creature"},
  {w:"hungarian horntail",c:"Creature"},{w:"chinese fireball",c:"Creature"},
  {w:"common welsh green",c:"Creature"},{w:"swedish short snout",c:"Creature"},
  {w:"acromantula",c:"Creature"},{w:"aragog",c:"Creature"},{w:"grindylow",c:"Creature"},
  {w:"kelpie",c:"Creature"},{w:"bowtruckle",c:"Creature"},{w:"niffler",c:"Creature"},
  {w:"flobberworm",c:"Creature"},{w:"blast ended skrewt",c:"Creature"},
  {w:"dementor",c:"Creature"},{w:"boggart",c:"Creature"},{w:"werewolf",c:"Creature"},
  {w:"vampire",c:"Creature"},{w:"giant",c:"Creature"},{w:"troll",c:"Creature"},
  {w:"mermaid",c:"Creature"},{w:"ghoul",c:"Creature"},{w:"house elf",c:"Creature"},
  {w:"goblin",c:"Creature"},{w:"giant squid",c:"Creature"},{w:"pixie",c:"Creature"},
  {w:"imp",c:"Creature"},{w:"leprechaun",c:"Creature"},{w:"merpeople",c:"Creature"},
  // Events
  {w:"triwizard tournament",c:"Event"},{w:"quidditch world cup",c:"Event"},
  {w:"the battle of hogwarts",c:"Event"},{w:"the yule ball",c:"Event"},
  {w:"the sorting ceremony",c:"Event"},{w:"owls",c:"Event"},{w:"newts",c:"Event"},
  {w:"the first task",c:"Event"},{w:"the second task",c:"Event"},{w:"the third task",c:"Event"},
  {w:"the chamber opens",c:"Event"},{w:"the basilisk attacks",c:"Event"},
  {w:"dumbledores army",c:"Event"},{w:"the order of the phoenix",c:"Event"},
  {w:"the death eaters",c:"Event"},{w:"the dark mark",c:"Event"},
  {w:"the horcrux hunt",c:"Event"},{w:"the final battle",c:"Event"},
  {w:"the golden trio",c:"Event"},{w:"the chosen one",c:"Event"},
  // Subjects / Classes
  {w:"transfiguration",c:"Class"},{w:"potions",c:"Class"},{w:"defense against dark arts",c:"Class"},
  {w:"charms",c:"Class"},{w:"herbology",c:"Class"},{w:"astronomy",c:"Class"},
  {w:"divination",c:"Class"},{w:"history of magic",c:"Class"},{w:"muggle studies",c:"Class"},
  {w:"care of magical creatures",c:"Class"},{w:"arithmancy",c:"Class"},
  {w:"ancient runes",c:"Class"},{w:"flying",c:"Class"},
  // Quidditch
  {w:"quidditch",c:"Quidditch"},{w:"quaffle",c:"Quidditch"},{w:"bludger",c:"Quidditch"},
  {w:"golden snitch",c:"Quidditch"},{w:"seeker",c:"Quidditch"},{w:"keeper",c:"Quidditch"},
  {w:"chaser",c:"Quidditch"},{w:"beater",c:"Quidditch"},{w:"quidditch pitch",c:"Quidditch"},
  // Misc
  {w:"muggle",c:"Term"},{w:"muggleborn",c:"Term"},{w:"half blood",c:"Term"},
  {w:"pure blood",c:"Term"},{w:"squib",c:"Term"},{w:"animagus",c:"Term"},
  {w:"patronus",c:"Term"},{w:"animagi",c:"Term"},{w:"legilimency",c:"Term"},
  {w:"apparition",c:"Term"},{w:"disapparition",c:"Term"},{w:"floo powder",c:"Term"},
  {w:"the veil",c:"Term"},{w:"the prophecy",c:"Term"},{w:"the chosen one",c:"Term"},
  {w:"he who must not be named",c:"Term"},{w:"you know who",c:"Term"},
  {w:"the dark lord",c:"Term"},{w:"the boy who lived",c:"Term"},{w:"mischief managed",c:"Term"},
  {w:"i solemnly swear",c:"Term"},{w:"after all this time",c:"Term"},{w:"always",c:"Term"},
  {w:"expecto patronum",c:"Term"},{w:"it is our choices",c:"Term"},
  {w:"yer a wizard harry",c:"Term"},{w:"the power of love",c:"Term"},
  {w:"accio firebolt",c:"Term"},{w:"piertotum locomotor",c:"Term"},
  {w:"nox",c:"Term"},{w:"lumos maxima",c:"Term"},{w:"albus",c:"Term"},
  {w:"severus",c:"Term"},{w:"minerva",c:"Term"},{w:"rubeus",c:"Term"},
  {w:"remus",c:"Term"},{w:"nymphadora",c:"Term"},{w:"mundungus",c:"Term"},
  {w:"xenophilius",c:"Term"},{w:"cornelius",c:"Term"},{w:"dolores",c:"Term"},
  {w:"gilderoy",c:"Term"},{w:"alastor",c:"Term"},{w:"arabella",c:"Term"},
  {w:"the trace",c:"Term"},{w:"the taboo",c:"Term"},{w:"priori incantatem",c:"Term"},
  {w:"the prophecy orb",c:"Term"},{w:"the unbreakable vow",c:"Term"},
  {w:"the fidelius charm",c:"Term"},{w:"the imperius curse",c:"Term"},
  {w:"the killing curse",c:"Term"},{w:"the cruciatus curse",c:"Term"},
  {w:"horcrux magic",c:"Term"},{w:"wandless magic",c:"Term"},{w:"nonverbal magic",c:"Term"},
  {w:"prior incantato",c:"Term"},{w:"expelliarmus is harry's",c:"Term"},
  {w:"the trio",c:"Term"},{w:"the golden trio",c:"Term"},{w:"the marauders",c:"Term"},
  {w:"the order",c:"Term"},{w:"the death eaters",c:"Term"},{w:"the inquisitorial squad",c:"Term"},
  {w:"dumbledores army",c:"Term"},{w:"the slug club",c:"Term"},
  {w:"knight bus",c:"Transport"},{w:"hogwarts express",c:"Transport"},
  {w:"flying ford anglia",c:"Transport"},{w:"thestral drawn carriage",c:"Transport"},
  {w:"broomstick",c:"Transport"},{w:"floo network",c:"Transport"},
  {w:"portkey",c:"Transport"},{w:"apparition",c:"Transport"},
  {w:"the night bus",c:"Transport"},{w:"hippogriff ride",c:"Transport"},
];

// ========== Hats Shop Data ==========
const HATS = [
  { id:"sorting",  name:"Sorting Hat",    icon:"🎩", price:50,  svgFn: drawSortingHat },
  { id:"wizard",   name:"Wizard Hat",     icon:"🧙", price:80,  svgFn: drawWizardHat  },
  { id:"gryffindor",name:"Gryffindor Cap",icon:"🦁", price:120, svgFn: drawGryffindorCap },
  { id:"slytherin", name:"Slytherin Cap", icon:"🐍", price:120, svgFn: drawSlytherinCap  },
  { id:"ravenclaw", name:"Ravenclaw Cap", icon:"🦅", price:120, svgFn: drawRavenclawCap  },
  { id:"hufflepuff", name:"Hufflepuff Cap",icon:"🦡", price:120, svgFn: drawHufflepuffCap },
  { id:"deathly",  name:"Deathly Hallow", icon:"☠", price:200, svgFn: drawDeathlyHat   },
  { id:"auror",    name:"Auror Hat",      icon:"⚡", price:160, svgFn: drawAurorHat     },
];

// ===== SVG Hat Drawers =====
function drawSortingHat(g) {
  g.innerHTML = `
    <path d="M110 50 Q118 35 130 30 Q140 40 132 50 Z" fill="#5a4020" stroke="#3a2810" stroke-width="1"/>
    <ellipse cx="130" cy="50" rx="18" ry="5" fill="#5a4020" stroke="#3a2810" stroke-width="1"/>
    <path d="M115 50 Q112 53 116 55 Q120 57 124 55 Q128 57 132 55 Q136 53 133 50 Z" fill="#7a5a30" stroke="#3a2810" stroke-width="0.5"/>
  `;
}
function drawWizardHat(g) {
  g.innerHTML = `
    <path d="M130 20 L122 48 L138 48 Z" fill="#1a0050" stroke="#7c5cbf" stroke-width="1"/>
    <ellipse cx="130" cy="49" rx="16" ry="4" fill="#1a0050" stroke="#7c5cbf" stroke-width="1"/>
    <circle cx="130" cy="28" r="2" fill="#f0c040"/>
  `;
}
function drawGryffindorCap(g) {
  g.innerHTML = `
    <path d="M114 52 Q120 42 130 40 Q140 42 146 52 Q138 50 130 50 Q122 50 114 52 Z" fill="#740001"/>
    <path d="M118 52 Q130 45 142 52 Q130 48 118 52 Z" fill="#D3A625"/>
    <rect x="114" y="52" width="32" height="5" rx="2" fill="#740001" stroke="#D3A625" stroke-width="0.5"/>
  `;
}
function drawSlytherinCap(g) {
  g.innerHTML = `
    <path d="M114 52 Q120 42 130 40 Q140 42 146 52 Q138 50 130 50 Q122 50 114 52 Z" fill="#1a472a"/>
    <path d="M118 52 Q130 45 142 52 Q130 48 118 52 Z" fill="#aaaaaa"/>
    <rect x="114" y="52" width="32" height="5" rx="2" fill="#1a472a" stroke="#aaaaaa" stroke-width="0.5"/>
  `;
}
function drawRavenclawCap(g) {
  g.innerHTML = `
    <path d="M114 52 Q120 42 130 40 Q140 42 146 52 Q138 50 130 50 Q122 50 114 52 Z" fill="#0e1a40"/>
    <path d="M118 52 Q130 45 142 52 Q130 48 118 52 Z" fill="#946B2D"/>
    <rect x="114" y="52" width="32" height="5" rx="2" fill="#0e1a40" stroke="#946B2D" stroke-width="0.5"/>
  `;
}
function drawHufflepuffCap(g) {
  g.innerHTML = `
    <path d="M114 52 Q120 42 130 40 Q140 42 146 52 Q138 50 130 50 Q122 50 114 52 Z" fill="#ecb939"/>
    <path d="M118 52 Q130 45 142 52 Q130 48 118 52 Z" fill="#372e29"/>
    <rect x="114" y="52" width="32" height="5" rx="2" fill="#ecb939" stroke="#372e29" stroke-width="0.5"/>
  `;
}
function drawDeathlyHat(g) {
  g.innerHTML = `
    <path d="M130 22 L124 48 L136 48 Z" fill="#111" stroke="#fff" stroke-width="0.5"/>
    <ellipse cx="130" cy="49" rx="14" ry="3.5" fill="#111" stroke="#fff" stroke-width="0.5"/>
    <line x1="130" y1="30" x2="130" y2="46" stroke="#fff" stroke-width="0.5"/>
    <circle cx="130" cy="30" r="3" fill="none" stroke="#fff" stroke-width="0.5"/>
    <line x1="124" y1="38" x2="136" y2="38" stroke="#fff" stroke-width="0.5"/>
  `;
}
function drawAurorHat(g) {
  g.innerHTML = `
    <path d="M115 52 L118 42 L130 38 L142 42 L145 52 Z" fill="#2c1a5e" stroke="#f0c040" stroke-width="0.8"/>
    <circle cx="130" cy="39" r="3" fill="#f0c040"/>
    <rect x="115" y="52" width="30" height="4" rx="2" fill="#2c1a5e" stroke="#f0c040" stroke-width="0.8"/>
    <line x1="118" y1="42" x2="142" y2="42" stroke="#f0c040" stroke-width="0.5"/>
  `;
}

// ========== Game State ==========
let wordBank   = [...BASE_WORDS];
let level      = 1;
let xp         = 0;
let coins      = 0;
let wins       = 0;
let losses     = 0;
let streak     = 0;
let bestStreak = 0;
let equippedHat= null;
let ownedHats  = [];

let currentWord     = "";
let currentCategory = "";
let guessedLetters  = new Set();
let wrongGuesses    = 0;
let maxWrong        = 6;
let gameOver        = false;

const BODY_PARTS = ["h-head","h-body","h-la","h-ra","h-ll","h-rl"];

// ========== Persist ==========
function saveState() {
  localStorage.setItem("hp_hangman", JSON.stringify({
    level, xp, coins, wins, losses, streak, bestStreak,
    equippedHat, ownedHats,
    extraWords: wordBank.filter((_,i) => i >= BASE_WORDS.length)
  }));
}

function loadState() {
  const raw = localStorage.getItem("hp_hangman");
  if (!raw) return;
  const d = JSON.parse(raw);
  level      = d.level      || 1;
  xp         = d.xp         || 0;
  coins      = d.coins      || 0;
  wins       = d.wins       || 0;
  losses     = d.losses     || 0;
  streak     = d.streak     || 0;
  bestStreak = d.bestStreak || 0;
  equippedHat= d.equippedHat|| null;
  ownedHats  = d.ownedHats  || [];
  if (d.extraWords && d.extraWords.length) {
    wordBank = [...BASE_WORDS, ...d.extraWords];
  }
}

// ========== Difficulty ==========
function getDifficulty() {
  if (level === 100) {
    const r = Math.random();
    if (r < 0.33) return "easy";
    if (r < 0.66) return "medium";
    return "hard";
  }
  if (level <= 15) return "easy";
  if (level <= 40) return "medium";
  if (level <= 70) return "hard";
  return "extreme";
}

function getMaxWrong(diff) {
  return { easy:8, medium:6, hard:4, extreme:3 }[diff] || 6;
}

function getWordPool(diff) {
  const all = wordBank.map(e => e.w);
  const byLen = {
    easy:    wordBank.filter(e => e.w.replace(/ /g,"").length <= 7),
    medium:  wordBank.filter(e => e.w.replace(/ /g,"").length > 7 && e.w.replace(/ /g,"").length <= 12),
    hard:    wordBank.filter(e => e.w.replace(/ /g,"").length > 12),
    extreme: wordBank.filter(e => e.w.replace(/ /g,"").length > 10 || e.c === "Spell" || e.c === "Number Ref"),
  };
  const pool = byLen[diff] && byLen[diff].length > 5 ? byLen[diff] : wordBank;
  return pool;
}

// ========== Init Game ==========
function startNewGame() {
  guessedLetters.clear();
  wrongGuesses = 0;
  gameOver     = false;

  const diff = getDifficulty();
  maxWrong   = getMaxWrong(diff);
  const pool = getWordPool(diff);
  const pick = pool[Math.floor(Math.random() * pool.length)];
  currentWord     = pick.w.toLowerCase();
  currentCategory = pick.c;

  // UI Reset
  document.getElementById("status-msg").textContent = "";
  document.getElementById("status-msg").className   = "status-msg";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("guess-feedback").textContent = "";
  document.getElementById("guess-feedback").className  = "guess-feedback";
  document.getElementById("guess-input").value = "";
  document.getElementById("wrong-letters").innerHTML = "";
  document.getElementById("hint-text").textContent = currentCategory;
  document.getElementById("stat-diff").textContent =
    diff.charAt(0).toUpperCase() + diff.slice(1);

  resetBodyParts();
  renderWordDisplay();
  renderKeyboard();
  updateHat();
}

function resetBodyParts() {
  BODY_PARTS.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });
}

// ========== Render Word ==========
function renderWordDisplay() {
  const container = document.getElementById("word-display");
  container.innerHTML = "";

  const segments = currentWord.split(" ");
  segments.forEach((segment, si) => {
    segment.split("").forEach(ch => {
      const box  = document.createElement("div");
      box.classList.add("letter-box");
      const char = document.createElement("div");
      char.classList.add("letter-char");
      char.id = `lc-${si}-${segment.indexOf(ch)}`;

      const isAlpha = /[a-z0-9\/\-]/i.test(ch);
      if (!isAlpha || guessedLetters.has(ch)) {
        char.textContent = ch.toUpperCase();
      } else {
        char.textContent = "";
      }

      const line = document.createElement("div");
      line.classList.add("letter-line");
      box.appendChild(char);
      if (isAlpha) box.appendChild(line);
      container.appendChild(box);
    });

    if (si < segments.length - 1) {
      const sp = document.createElement("div");
      sp.classList.add("letter-box","space");
      container.appendChild(sp);
    }
  });
}

function revealWord() {
  const segments = currentWord.split(" ");
  segments.forEach((segment, si) => {
    segment.split("").forEach((ch, ci) => {
      const el = document.getElementById(`lc-${si}-${ci}`);
      if (el) el.textContent = ch.toUpperCase();
    });
  });
}

// ========== Keyboard ==========
function renderKeyboard() {
  const kb = document.getElementById("keyboard");
  kb.innerHTML = "";
  "abcdefghijklmnopqrstuvwxyz".split("").forEach(letter => {
    const btn = document.createElement("button");
    btn.classList.add("key-btn");
    btn.textContent = letter.toUpperCase();
    btn.dataset.letter = letter;
    btn.addEventListener("click", () => guessLetter(letter));

    if (guessedLetters.has(letter)) {
      btn.disabled = true;
      const inWord = currentWord.includes(letter);
      btn.classList.add(inWord ? "correct" : "wrong");
    }
    kb.appendChild(btn);
  });
}

// ========== Guess Letter ==========
function guessLetter(letter) {
  if (gameOver || guessedLetters.has(letter)) return;
  guessedLetters.add(letter);

  const inWord = currentWord.split("").some(ch => ch === letter);
  if (!inWord) {
    wrongGuesses++;
    showBodyPart(wrongGuesses - 1);
    const chip = document.createElement("span");
    chip.classList.add("wrong-letter-chip");
    chip.textContent = letter.toUpperCase();
    document.getElementById("wrong-letters").appendChild(chip);
  }

  renderWordDisplay();
  renderKeyboard();
  checkWinLose();
}

// ========== Full Word Guess ==========
function guessFullWord(word) {
  if (gameOver) return;
  const cleaned = word.trim().toLowerCase();
  const fb = document.getElementById("guess-feedback");

  if (cleaned === currentWord) {
    // Mark all letters as guessed
    currentWord.split("").forEach(ch => {
      if (/[a-z]/i.test(ch)) guessedLetters.add(ch);
    });
    renderWordDisplay();
    renderKeyboard();
    fb.textContent = "✓ Correct!";
    fb.className   = "guess-feedback ok";
    onWin();
  } else {
    wrongGuesses = Math.min(wrongGuesses + 2, maxWrong);
    for (let i = wrongGuesses - 2; i < wrongGuesses; i++) showBodyPart(i);
    fb.textContent = "✗ Wrong! (-2 tries)";
    fb.className   = "guess-feedback err";
    renderKeyboard();
    checkWinLose();
  }
}

// ========== Body Parts ==========
function showBodyPart(index) {
  const id = BODY_PARTS[index];
  if (!id) return;
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove("hidden");
    el.style.animation = "popIn 0.25s ease";
  }
}

// ========== Check Win / Lose ==========
function checkWinLose() {
  const allLettersGuessed = currentWord.split("").every(ch => {
    if (!/[a-z0-9]/i.test(ch)) return true;
    return guessedLetters.has(ch);
  });

  if (allLettersGuessed) { onWin(); return; }
  if (wrongGuesses >= maxWrong) { onLose(); }
}

function onWin() {
  gameOver = true;
  wins++;
  streak++;
  if (streak > bestStreak) bestStreak = streak;

  const earned = Math.floor(Math.random() * 21) + 10;
  coins += earned;

  const xpGain = getDifficulty() === "easy" ? 10 :
                 getDifficulty() === "medium" ? 18 :
                 getDifficulty() === "hard" ? 28 : 40;
  gainXP(xpGain);

  const msg = document.getElementById("status-msg");
  msg.textContent = `🎉 Correct! +${earned} coins, +${xpGain} XP`;
  msg.className   = "status-msg win";

  showCoinFloat(earned);
  document.getElementById("next-btn").style.display = "inline-block";
  revealWord();
  updateStats();
  updateHeader();
  saveState();
}

function onLose() {
  gameOver = true;
  losses++;
  streak  = 0;

  const msg = document.getElementById("status-msg");
  msg.textContent = `💀 The word was: ${currentWord.toUpperCase()}`;
  msg.className   = "status-msg lose";

  document.getElementById("next-btn").style.display = "inline-block";
  revealWord();
  updateStats();
  saveState();
}

// ========== XP & Levelling ==========
function gainXP(amount) {
  xp += amount;
  const needed = xpNeeded();
  if (xp >= needed) {
    xp -= needed;
    level = Math.min(level + 1, 100);
    showToast(`⚡ Level Up! You're now Level ${level}!`);
    checkUnlocks();
  }
  updateHeader();
}

function xpNeeded() {
  return Math.floor(50 + level * 15 + level * level * 0.5);
}

// ========== Unlocks ==========
function checkUnlocks() {
  if (level >= 25) {
    document.getElementById("add-word-panel").style.display = "block";
    document.getElementById("ul25").textContent = "✅ Unlocked";
  }
  if (level >= 45) {
    document.getElementById("shop-panel").style.display = "block";
    document.getElementById("ul45").textContent = "✅ Unlocked";
    renderShop();
  }
}

// ========== Add Word ==========
function addWord() {
  const input = document.getElementById("new-word-input");
  const fb    = document.getElementById("add-word-feedback");
  const val   = input.value.trim().toLowerCase();

  if (!val) {
    fb.textContent = "Enter a word first.";
    fb.className   = "guess-feedback err";
    return;
  }

  const exists = wordBank.some(e => e.w === val);
  if (exists) {
    fb.textContent = "That is already in the list, pick a new one!";
    fb.className   = "guess-feedback err";
    return;
  }

  wordBank.push({ w: val, c: "Custom" });
  input.value = "";
  fb.textContent = `✓ "${val}" added! Word bank now has ${wordBank.length} words.`;
  fb.className   = "guess-feedback ok";
  saveState();
}

// ========== Shop ==========
function renderShop() {
  const grid = document.getElementById("shop-grid");
  grid.innerHTML = "";
  HATS.forEach(hat => {
    const div = document.createElement("div");
    div.classList.add("shop-item");
    const isOwned    = ownedHats.includes(hat.id);
    const isEquipped = equippedHat === hat.id;

    if (isEquipped) div.classList.add("equipped-item");
    else if (isOwned) div.classList.add("owned");

    div.innerHTML = `
      <span class="hat-icon">${hat.icon}</span>
      <span class="hat-name">${hat.name}</span>
      <span class="hat-price">${isOwned ? "" : `🪙 ${hat.price}`}</span>
      <span class="hat-status">${isEquipped ? "✅ Equipped" : isOwned ? "Tap to equip" : "Tap to buy"}</span>
    `;

    div.addEventListener("click", () => {
      if (isEquipped) {
        equippedHat = null;
        showToast("Hat removed.");
      } else if (isOwned) {
        equippedHat = hat.id;
        showToast(`${hat.name} equipped!`);
      } else {
        if (coins < hat.price) {
          showToast(`Need ${hat.price - coins} more coins! 🪙`);
          return;
        }
        coins -= hat.price;
        ownedHats.push(hat.id);
        equippedHat = hat.id;
        showToast(`${hat.name} bought & equipped! 🎩`);
      }
      updateHeader();
      updateHat();
      renderShop();
      updateEquippedDisplay();
      saveState();
    });

    grid.appendChild(div);
  });
}

function updateHat() {
  const g = document.getElementById("hat-layer");
  g.innerHTML = "";
  if (!equippedHat) return;
  const hat = HATS.find(h => h.id === equippedHat);
  if (hat && hat.svgFn) hat.svgFn(g);
}

function updateEquippedDisplay() {
  const el = document.getElementById("equipped-display");
  if (!equippedHat) { el.textContent = "None"; return; }
  const hat = HATS.find(h => h.id === equippedHat);
  el.textContent = hat ? hat.icon : "None";
}

// ========== UI Updates ==========
function updateHeader() {
  document.getElementById("current-level").textContent = level;
  document.getElementById("coin-count").textContent    = coins;
  const pct = Math.min((xp / xpNeeded()) * 100, 100);
  document.getElementById("xp-bar").style.width = pct + "%";
}

function updateStats() {
  document.getElementById("stat-wins").textContent   = wins;
  document.getElementById("stat-losses").textContent = losses;
  document.getElementById("stat-streak").textContent = streak;
  document.getElementById("stat-best").textContent   = bestStreak;
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

function showCoinFloat(amount) {
  const el = document.createElement("div");
  el.classList.add("coin-float");
  el.textContent = `+${amount} 🪙`;
  el.style.left  = "50%";
  el.style.top   = "60%";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}

// ========== Event Listeners ==========
document.getElementById("guess-btn").addEventListener("click", () => {
  guessFullWord(document.getElementById("guess-input").value);
});

document.getElementById("guess-input").addEventListener("keydown", e => {
  if (e.key === "Enter") guessFullWord(document.getElementById("guess-input").value);
});

document.getElementById("next-btn").addEventListener("click", startNewGame);

document.getElementById("add-word-btn").addEventListener("click", addWord);

document.getElementById("new-word-input").addEventListener("keydown", e => {
  if (e.key === "Enter") addWord();
});

// Physical keyboard support
document.addEventListener("keydown", e => {
  if (gameOver) return;
  if (document.activeElement === document.getElementById("guess-input")) return;
  if (document.activeElement === document.getElementById("new-word-input")) return;
  const letter = e.key.toLowerCase();
  if (/^[a-z]$/.test(letter)) guessLetter(letter);
});

// ========== Boot ==========
loadState();
checkUnlocks();
updateHeader();
updateStats();
updateEquippedDisplay();
startNewGame();