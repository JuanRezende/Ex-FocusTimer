export default function Controls({ btnPlay, btnPause, btnSet, btnStop }) {
  function play() {
    btnPlay.classList.add("hide");
    btnPause.classList.remove("hide");
    btnSet.classList.add("hide");
    btnStop.classList.remove("hide");
  }

  function pause() {
    btnPause.classList.add("hide");
    btnPlay.classList.remove("hide");
  }

  function reset() {
    btnStop.classList.add("hide");
    btnSet.classList.remove("hide");
    btnPause.classList.add("hide");
    btnPlay.classList.remove("hide");
  }

  function getMinutes() {
    let newMinutes = Number(
      prompt("Quantos minutos deseja definir ao timer?")
    ).toFixed();

    if (isNaN(newMinutes)) {
      return;
    }

    if (newMinutes > 60) {
      alert("O máximo de minutos que você pode definir é: 60");
      return;
    }

    if (!newMinutes) {
      return false;
    }

    return newMinutes;
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  };
}
