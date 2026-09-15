const allButtonEls = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

// stop reading this and click some buttons on the calculator, I dare you.  I double dog dare you.  I triple dog dare you.  I quadruple dog dare you.  I quintuple dog dare you. I sextuple dog dare you. I septuple dog dare you. I octuple dog dare you. I nonuple dog dare you. I decuple dog dare you. I undecuple dog dare you. I duodecuple dog dare you. I tredecuple dog dare you. I quattuordecuple dog dare you. I quindecuple dog dare you. I sexdecuple dog dare you. I septendecuple dog dare you. I octodecuple dog dare you. I novemdecuple dog dare you. I vigintuple dog dare you.



// stop

var buttonCount = 0;
var countingAlert = async (message) => {
  buttonCount++;
  if (buttonCount === 3) {
    return message + ", is this annoying yet?";
  } else if (buttonCount === 6) {
    return message + ", stop clicking me";
  } else if (buttonCount === 9) {
    return message + ", please, I beg you";
  } else if (buttonCount === 12) {
    return message + ", I have a family";
  } else if (buttonCount === 15) {
    return message + ", I am going to call the police";
  } else if (buttonCount === 18) {
    return message + ", I am calling the police";
  } else if (buttonCount === 21) {
    return message + ", hello? 911? yea this guy wont stop clicking buttons";
  } else if (buttonCount === 24) {
    return message + ", yeah uhh okay im gonna try to identify him now";
  } else if (buttonCount === 27) {
    return message + ". yeahhh looks like he's a " + await identifyUser() + ".";
  } else if (buttonCount === 30) {
    return message + ", you got problems, redirecting you to a mental health website. this is all I can do.";
    window.open("https://www.mentalhealth.gov/get-help/immediate-help", "_blank");
  } else {
    return message;
  }
};

async function identifyUser() {
  const isTouchscreen = navigator.maxTouchPoints > 0;
  const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? "pocket calculator operator" : "desk calculator operator";
  const inputStyle = isTouchscreen ? "finger-powered" : "mouse-powered";
  const language = navigator.language || "mystery-language";

  try {
    const response = await fetch("https://ip.me");
    const ipAddress = (await response.text()).trim();
    return deviceType + ", " + inputStyle + ", speaking " + language +
      ", IP address: " + (ipAddress || "classified");
  } catch (error) {
    return deviceType + ", " + inputStyle + ", speaking " + language +
      ", IP address: unavailable";
  }
}

const ding = new Audio("ding.mp3");

for (let i = 0; i < allButtonEls.length; i++) {
  allButtonEls[i].addEventListener("click", async () => {
    const buttonValue = allButtonEls[i].textContent;
    if (buttonValue === "C") {
      clearResult();
      alert(await countingAlert("result cleared"));
    } else if (buttonValue === "=") {
      calculateResult();
      ding.play(); 
    } else {
      appendValue(buttonValue);
      alert(await countingAlert("value appended"));
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  document.documentElement.requestFullscreen();
  window.href = "https://www.ravbug.com/bsod/bsod10/";
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
