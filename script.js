const data = {
  burn: "Cool the burn under running water for 10 minutes.",
  cut: "Clean the wound and apply pressure.",
  choking: "Perform abdominal thrusts.",
  fracture: "Immobilize the area and seek medical help.",
  bleeding: "Apply firm pressure with a clean cloth."
};

function showAid(type) {
  document.getElementById("output").innerText = data[type];
}

// 🔍 SEARCH FUNCTION
function searchAid() {
  let input = document.getElementById("search").value.toLowerCase();
  let buttons = document.querySelectorAll(".buttons button");

  buttons.forEach(btn => {
    if (btn.innerText.toLowerCase().includes(input)) {
      btn.style.display = "inline-block";
    } else {
      btn.style.display = "none";
    }
  });
}

// 🔊 TEXT TO SPEECH
function speakText() {
  let text = document.getElementById("output").innerText;
  let speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}

// 🚨 EMERGENCY CALL
function callEmergency() {
  alert("Call your local emergency number!");
}