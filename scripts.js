let pitches = {
  A0: 27.5,
  "A#0": 29.1352,
  Bb0: 29.1352,
  B0: 30.8677,
  "B#0": 32.7032,
  Cb1: 30.8677,
  C1: 32.7032,
  "C#1": 34.6478,
  Db1: 34.6478,
  D1: 36.7081,
  "D#1": 38.8909,
  Eb1: 38.8909,
  E1: 41.2034,
  Fb1: 41.2034,
  "E#1": 43.6535,
  F1: 43.6535,
  "F#1": 46.2493,
  Gb1: 46.2493,
  G1: 48.9994,
  "G#1": 51.9131,
  Ab1: 51.9131,
  A1: 55.0,
  "A#1": 58.2705,
  Bb1: 58.2705,
  B1: 61.7354,
  Cb2: 61.7354,
  "B#1": 65.4064,
  C2: 65.4064,
  "C#2": 69.2957,
  Db2: 69.2957,
  D2: 73.4162,
  "D#2": 77.7817,
  Eb2: 77.7817,
  E2: 82.4069,
  Fb2: 82.4069,
  "E#2": 87.3071,
  F2: 87.3071,
  "F#2": 92.4986,
  Gb2: 92.4986,
  G2: 97.9989,
  "G#2": 103.826,
  Ab2: 103.826,
  A2: 110.0,
  "A#2": 116.541,
  Bb2: 116.541,
  B2: 123.471,
  Cb3: 123.471,
  "B#2": 130.813,
  C3: 130.813,
  "C#3": 138.591,
  Db3: 138.591,
  D3: 146.832,
  "D#3": 155.563,
  Eb3: 155.563,
  E3: 164.814,
  Fb3: 164.814,
  "E#3": 174.614,
  F3: 174.614,
  "F#3": 184.997,
  Gb3: 184.997,
  G3: 195.998,
  "G#3": 207.652,
  Ab3: 207.652,
  A3: 220.0,
  "A#3": 233.082,
  Bb3: 233.082,
  B3: 246.942,
  Cb4: 246.942,
  "B#3": 261.626,
  C4: 261.626,
  "C#4": 277.183,
  Db4: 277.183,
  D4: 293.665,
  "D#4": 311.127,
  Eb4: 311.127,
  E4: 329.628,
  Fb4: 329.628,
  "E#4": 349.228,
  F4: 349.228,
  "F#4": 369.994,
  Gb4: 369.994,
  G4: 391.995,
  "G#4": 415.305,
  Ab4: 415.305,
  A4: 440.0,
  "A#4": 466.164,
  Bb4: 466.164,
  B4: 493.883,
  Cb5: 493.883,
  "B#4": 523.251,
  C5: 523.251,
  "C#5": 554.365,
  Db5: 554.365,
  D5: 587.33,
  "D#5": 622.254,
  Eb5: 622.254,
  E5: 659.255,
  Fb5: 659.255,
  "E#5": 698.456,
  F5: 698.456,
  "F#5": 739.989,
  Gb5: 739.989,
  G5: 783.991,
  "G#5": 830.609,
  Ab5: 830.609,
  A5: 880.0,
  "A#5": 932.328,
  Bb5: 932.328,
  B5: 987.767,
  Cb6: 987.767,
  "B#5": 1046.5,
  C6: 1046.5,
  "C#6": 1108.73,
  Db6: 1108.73,
  D6: 1174.66,
  "D#6": 1244.51,
  Eb6: 1244.51,
  Fb6: 1318.51,
  E6: 1318.51,
  "E#6": 1396.91,
  F6: 1396.91,
  "F#6": 1479.98,
  Gb6: 1479.98,
  G6: 1567.98,
  "G#6": 1661.22,
  Ab6: 1661.22,
  A6: 1760.0,
  "A#6": 1864.66,
  Bb6: 1864.66,
  B6: 1975.53,
  Cb7: 1975.53,
  "B#6": 2093.0,
  C7: 2093.0,
  "C#7": 2217.46,
  Db7: 2217.46,
  D7: 2349.32,
  "D#7": 2489.02,
  Eb7: 2489.02,
  E7: 2637.02,
  Fb7: 2637.02,
  "E#7": 2793.83,
  F7: 2793.83,
  "F#7": 2959.96,
  Gb7: 2959.96,
  G7: 3135.96,
  "G#7": 3322.44,
  Ab7: 3322.44,
  A7: 3520.0,
  "A#7": 3729.31,
  Bb7: 3729.31,
  B7: 3951.07,
  Cb8: 3951.07,
  "B#7": 4186.01,
  C8: 4186.01,
};

const voice = new Wad({ source: "mic" }); // At this point, your browser will ask for permission to access your microphone.
const tuner = new Wad.Poly();
voice.play(); // You must give your browser permission to access your microphone before calling play().
tuner.updatePitch(); // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in <code>tuner.pitch</code> and <code>tuner.noteName</code>.
tuner.setVolume(0); // If you're not using headphones, you can eliminate microphone feedback by muting the output from the tuner.
tuner.add(voice);
let pitch;
let noteName;
let myReq;

const container = document.querySelector(".container");
const tuneUp = document.querySelector("#right-arrow");
const inTune = document.querySelector("#tick");
const tuneDown = document.querySelector("#left-arrow");

const displayContainer = document.createElement("DIV");
const pitchDisplay = document.createElement("H1");
const noteDisplay = document.createElement("H1");
displayContainer.classList.add("display-container");

displayContainer.appendChild(pitchDisplay);
displayContainer.appendChild(noteDisplay);

function logPitch() {
  pitch = tuner.pitch;
  noteName = tuner.noteName;
  pitchDisplay.innerText = pitch;
  noteDisplay.innerText = noteName;
  console.log(pitch, noteName);
  checkPitch();
  myReq = requestAnimationFrame(logPitch);
}

// tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.

const newButton = document.createElement("BUTTON");
newButton.innerText = "Start";

container.appendChild(newButton);
container.appendChild(displayContainer);
newButton.addEventListener("click", turnOnTuner);

function turnOnTuner() {
  newButton.removeEventListener("click", turnOnTuner);
  newButton.innerText = "Stop";
  logPitch();
  checkPitch();
  newButton.addEventListener("click", turnOffTuner);
}

function resetIcons() {
  tuneDown.classList.remove("out-of-tune");
  inTune.classList.remove("in-tune");
  tuneUp.classList.remove("out-of-tune");
}

function turnOffTuner() {
  cancelAnimationFrame(myReq);
  newButton.addEventListener("click", turnOnTuner);
  newButton.innerText = "Start";
  pitchDisplay.innerText = "";
  noteDisplay.innerText = "";
  resetIcons();
}

function checkPitch() {
  for (const [key, value] of Object.entries(pitches)) {
    if (key === noteName && parseInt(value) > pitch) {
      console.log("high");
      tuneUp.classList.remove("out-of-tune");
      inTune.classList.remove("in-tune");
      tuneDown.classList.add("out-of-tune");
    } else if (key === noteName && parseInt(value) < pitch) {
      console.log("low");
      tuneDown.classList.remove("out-of-tune");
      inTune.classList.remove("in-tune");
      tuneUp.classList.add("out-of-tune");
    } else if (key === noteName && parseInt(value) === pitch) {
      console.log("in tune");
      tuneDown.classList.remove("out-of-tune");
      tuneUp.classList.remove("out-of-tune");
      inTune.classList.add("in-tune");
    }
  }
}
