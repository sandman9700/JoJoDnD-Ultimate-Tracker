var PB = 2;
$('.PBSelect').change(function() {
  PB = parseInt($('.PBSelect').val());
  updatePB();
});

var Str = 1;
$('.strSelect').change(function() {
  Str = parseInt($('.strSelect').val());
  updateStr();
});

var Dex = 1;
$('.dexSelect').change(function() {
  Dex = parseInt($('.dexSelect').val());
  updateDex();
});

var Con = 1;
$('.conSelect').change(function() {
  Con = parseInt($('.conSelect').val());
  updateCon();
});

var Int = 1;
$('.intSelect').change(function() {
  Int = parseInt($('.intSelect').val());
  updateInt();
});

var Wis = 1;
$('.wisSelect').change(function() {
  Wis = parseInt($('.wisSelect').val());
  updateWis();
});

var Cha = 1;
$('.chaSelect').change(function() {
  Cha = parseInt($('.chaSelect').val());
  updateCha();
});

var Lvl = 1;
$('#levelSelect').change(function() {
  Lvl = parseInt($('#levelSelect').val());
  updateLvl();
});

function updatePB() {
  var heavySleeper = "",
    improvise = "",
    motivated = "",
    luck = "",
    subtle = "",
    elementalist = "",
    focus = "";
    
  var checksWhole = getChecks(PB);
  var checksHalf = getChecks(Math.floor(PB / 2));

  heavySleeper += checksHalf + "<span>Heavy Sleeper uses/Long Rest</span>"
  improvise += checksWhole + "<span>Improvised Healing uses/Short Rest*</span>"
  motivated += checksHalf + "<span>Motivated uses/Long Rest</span>"
  luck += checksWhole + "<span>Stroke of Luck uses/Long Rest</span>"
  subtle = checksWhole + "<span>Subtle Assistance uses/Long Rest</span>"
  unstoppable = checksWhole + "<span>Unstoppable Willpower uses/Long Rest</span>"
  elementalist = checksWhole + "<span>Elementalist uses/Long Rest</span>"
  focus = "You have <b><i><u>" + (Wis * PB) + "</u></i></b> Focus (Wisdom Mod * PB)"
  

  $("#heavySleeper").html(heavySleeper);
  $("#improvise").html(improvise);
  $("#motivated").html(motivated);
  $("#luck").html(luck);
  $("#subtle").html(subtle);
  $("#unstoppable").html(unstoppable);
  $("#elementalist").html(elementalist);
  $("#focusMax").html(focus);


}
updatePB();

function updateStr () {
var rush = "",
sprint = "";

var checks = getChecks(Str);

rush = checks + "<span>Adrenaline Rushes left/Long Rest (Strength Mod)</span>"
sprint = checks + "<span>Veteran Sprinter uses left/Short Rest (Strength Mod)</span>"

$("#rush").html(rush);
$("#sprint").html(sprint);
}
updateStr();

function updateDex() {

}

function updateCon () {
var freeze = "",
repair = "";

var checks = getChecks(Con);

freeze = checks + "<span>Freezing Touches/Short Rest (Constitution Mod)</span>"
repair = checks + "<span>Self-Repairs/Short Rest (Constitution Mod)</span>"

$("#freeze").html(freeze);
$("#repair").html(repair);
recovery();
}
updateCon();
recovery();

function updateInt (){
  var sharp = "",
  overhealI = "",
  tactician = "";
  var checks = getChecks(Int);

  sharp = checks + "<span>Sharp Mind uses/Long Rest (Intelligence Mod)</span>"
  overhealI = checks + "<span>Overheal uses/Long Rest (Intelligence Mod)</span>"
  tactician = "<b><i><u>" + Int + "</u></i></b> Tactician dice (" + Int + "d8). (Intelligence Mod)"
  $("#sharp").html(sharp);
  $("#tactician").html(tactician);
  $("#overhealInt").html(overhealI);
}
updateInt();

function updateWis (){
  var overhealW = "",
  focus = "";
  var checks = getChecks(Wis);

  overhealW = checks + "<span>Overheal uses/Long Rest (Wisdom Mod)</span>"
  focus = "You have <b><i><u>" + (Wis * PB) + "</u></i></b> Focus (Wisdom Mod * PB)"
  $("#overhealWis").html(overhealW);
  $("#focusMax").html(focus);
}
updateWis();

function updateCha () {
var commentator = "",
hypnosis = "",
powerful ="",
consulDice ="";
var checks = getChecks(Cha);

commentator = checks + "<span>Commentator uses/Long Rest (Charisma Mod)</span>"
consulDice = "Consul gets <b><i><u>" + (Cha + Lvl) + "</u></i></b> Encouragement Dice/Long Rest (Charisma Mod + Consul Level)"
hypnosis = checks + "<span>Hypnosis uses/Long Rest (Charisma Mod)"
powerful = checks + "<span>Powerful Prescence uses/Long Rest (Charisma Mod)"
$("#commentator").html(commentator);
$("#consul").html(consulDice);
$("#hypnosis").html(hypnosis);
$("#powerful").html(powerful);
}
updateCha();

function updateLvl (){
  consulDice = "Consul gets <b><i><u>" + (Cha + Lvl) + "</u></i></b> Encouragement Dice"
  $("#consul").html(consulDice);
}
updateLvl();

function getChecks(num) {
  var checks = "";
  for (let i=0; i<num; i++) {
    checks += '<input class="form-check-input dynamic-check" type="checkbox">';
  }
  return checks;
}

function countUp(id) {
  var elem = $("#" + id);
  elem.val(parseInt(elem.val()) + 1);
}

function countDown(id) {
  var elem = $("#" + id);
  elem.val(parseInt(elem.val()) - 1);
}

function setScar () {
   var sca = "<p>" + (2 * Con) + " Scarflesh Base Damage reduction</p>";
$("#Scarflesh").html(sca)
}
setScar();

var lvl = "1";
var baseNRG = 0;

$('.levelSelect').change(function() {
  lvl = parseInt($('.levelSelect').val());
  baseNRG = ((lvl * 20) - 20)
  updateDisplay();
});

function updateDisplay() {
  var newContent = "";

  newContent = "<p>" + baseNRG + " Vampire Energy Points</p>"

  $("#VampireCalc").html(newContent);
}
updateDisplay();

$("#addTwo").click(function() {
  baseNRG += parseInt("2")
  updateDisplay()
});

$("#subOne").click(function() {
  baseNRG--
  updateDisplay()
});

$("#addOne").click(function() {
  baseNRG++
  updateDisplay()
});

$("#subTwo").click(function() {
  baseNRG -= parseInt("2")
  updateDisplay()
});

$("#addFour").click(function() {
  baseNRG += parseInt("4")
  updateDisplay()
});

$("#addTen").click(function() {
  baseNRG += parseInt("10")
  updateDisplay()
});

$("#subTen").click(function() {
  baseNRG -= parseInt("10")
  updateDisplay()
});

$("#subTwenty").click(function() {
  baseNRG -= parseInt("20")
  updateDisplay()
});

$("#subHundred").click(function() {
  baseNRG -= parseInt("100")
  updateDisplay()
});

$("#makeVamp").click(function() {
  baseNRG -= parseInt("250")
  updateDisplay()
});


var lvlX = "1";
var baseNRGx = 1;

$('.riplevelSelect').change(function() {
  lvlx = parseInt($('.riplevelSelect').val());
  baseNRGx = lvlx
  updateRip();
});
updateRip();
function updateRip() {
  var ripnewContent = "";

  ripnewContent = "<p>" + baseNRGx + " Ripple Points</p>"

  $("#Ripple").html(ripnewContent);
}
updateRip();

$("#RipAdd").click(function() {
   baseNRGx += 1;
  updateRip();
});

$("#RipSub").click(function() {
  baseNRGx -= 1;
  updateRip();
});

function recovery () {
var recov = "";

recov = "Recovery Breathing (+" + Con + ")"
  $("#Recover").html(recov);
}
recovery();