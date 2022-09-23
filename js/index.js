import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import {
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const sound = Sound();

const controls = Controls({
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

Events({ controls, timer, sound });