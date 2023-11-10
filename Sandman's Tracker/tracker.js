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

var Con = 1;
$('.conSelect').change(function() {
  Con = parseInt($('.conSelect').val());
  updateCon();
});

var Cha = 1;
$('.chaSelect').change(function() {
  Cha = parseInt($('.chaSelect').val());
  updateCha();
});


function updatePB() {
  var heavySleeper = "",
    improvise = "",
    motivated = "",
    luck = "",
    subtle = "";
    
  var checksWhole = getChecks(PB);
  var checksHalf = getChecks(Math.floor(PB / 2));

  heavySleeper += checksHalf + "<span>Heavy Sleeper uses</span>"
  improvise += checksWhole + "<span>Improvised Healing uses</span>"
  motivated += checksHalf + "<span>Motivated uses</span>"
  luck += checksHalf + "<span>Stroke of Luck uses</span>"
  subtle += checksWhole + "<span>Subtle Assistance uses</span>"

  $("#heavySleeper").html(heavySleeper);
  $("#improvise").html(improvise);
  $("#motivated").html(motivated);
  $("#luck").html(luck);
  $("#subtle").html(subtle);

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
function updateCha () {
var commentator = "";
var checks = getChecks(Cha);

commentator = checks + "<span>Commentator uses/Long Rest (Charisma Mod)</span>"
  $("#commentator").html(commentator);
}
updateCha();

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

recov = "<li>Recovery Breathing (" + Con + ")</li>"
  $("#Recover").html(recov);
}
recovery();