import { useState, useEffect } from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { Howl, Howler } from "howler";
import NatureSound from "../assets/audios/forest-with-small-river-birds-and-nature-field-recording-6735.mp3";

const AudioToggle = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

 

  const SoundPlay = (src) => {
    const sound = new Howl({ src });
    sound.play();
    sound.loop(true);
    Howler.volume(0.5);
    togglePlay();
  };

  const SoundMute = () => {
    Howler.volume(0);
    togglePlay();
  };



  const  style = "Audio h-16 w-16 fixed bottom-0 right-0 flex mb-10 mr-10 md:mb-5 md:mr-5 sm:mb-3 sm:mr-3 flex justify-center items-center text-black  transition-all duration-200 ease-in-out";

  return isPlaying ? (
    <button onClick={SoundMute}>
      <GiSpeaker
        className={style}
      />
    </button>
  ) : (
    <button
      onClick={() => {
        SoundPlay(NatureSound);
      }}
    >
      <GiSpeakerOff
        className={style}
      />
    </button>
  );
};

export default AudioToggle;