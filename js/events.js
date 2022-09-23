import {
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  soundON,
  soundOFF,
} from "./elements.js";

export default function Events({ controls, timer, sound }) {
  btnPlay.onclick = () => {
    controls.play();
    timer.countdown();
    sound.pressButton();
  };

  btnPause.onclick = () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  };

  btnStop.onclick = () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  };

  btnSet.onclick = () => {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  };

  soundON.onclick = () => {
    soundON.classList.add("hide");
    soundOFF.classList.remove("hide");
    sound.bgAudio.pause();
  };

  soundOFF.onclick = () => {
    soundOFF.classList.add("hide");
    soundON.classList.remove("hide");
    sound.bgAudio.play();
  };
}
