let userInput, terminalOutput;

const app = () => {
  window.userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();

  if (input.length === 0) {
    return;
  }

  // "Secret" party command
  if (input === "party") {
    startTheParty();
  }

  // Another "Secret" command
  if (input === "sudo rm -rf") {
    whooops();
  }

  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
  } else {
    output += `<div class="output"> ${COMMANDS[input]} </div>`;
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  userInput = document.getElementById("userInput");
  const input = window.userInput.innerHTML;

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
if (document.readyState !== "loading") {
  app();
}

// TOP SECRET, DON'T READ
const startTheParty = () => {
  var confettiSettings = {
    target: "canvas",
    max: "1000",
    size: "1",
    animate: true,
    props: ["square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: "25",
    rotate: true,
    width: "1680",
    height: "971",
    start_from_edge: true,
    respawn: false,
  };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
};

const whooops = () => {
  document.body.querySelector(".hero").remove();
  document.body.style.background = "#000";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
};

const COMMANDS = {
  help: 'Supported commands: ["<span class="code">about</span>", "<span class="code">experience</span>", "<span class="code">education</span>", "<span class="code">skills</span>", "<span class="code">contact</span>"]',
  about:
    "Hello 👋<br>I'm Lueth. I'm a 17-year-old programmer, robotics enthusiast, and passionate problem solver. Whether it’s developing automation scripts, or diving deep into AI and machine learning, I thrive on turning ideas into reality. Coding isn’t just a skill for me—it’s a way of thinking, a way of life.",
  skills:
    '<span class="code">Languages:</span> Python, Java, JavaScript, Lua, C++<br><span class="code">Technologies:</span> Git, APIs, Machine Learning, Robotics<br><span class="code">Frameworks:</span> React.js, Flask, TensorFlow',
  education:
    "Self-taught programmer with extensive experience in, game, AI, and full-stack web development. Founder and president of Collegiate Academy's Coding Club.",
  experience:
    "Lead programmer for my FRC robotics team, co-founder and head scripter of the Ravengate Roblox RPG, and founder of my school's Coding Club, where I teach and mentor peers in software development.",
  contact:
    'You can reach me through:<br>Email: <a href="mailto:luethyoul@gmail.com" class="social link">luethyoul@gmail.com</a><br>Discord: xzr0',
  bob: "<span style='font-size: 2rem;'>🐕</span>",
  party: "🎉🎉🎉",
  beer: "Error: Lueth is 17. Try again in a few years.",
  "sudo rm -rf": "Nice try. But I'm still here. 😉",
};

document.addEventListener("DOMContentLoaded", function () {
  const terminalWindow = document.querySelector(".terminal-window");
  const dummyKeyboard = document.getElementById("dummyKeyboard");

  if (terminalWindow && dummyKeyboard) {
    terminalWindow.addEventListener("click", function () {
      dummyKeyboard.focus();
    });
  }
});

if (dummyKeyboard) {
  dummyKeyboard.focus();
} else {
  console.error("Element #dummyKeyboard not found.");
}

