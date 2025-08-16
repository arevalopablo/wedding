import { Box, CardMedia } from "@mui/material";
import "./Player.css";
import Pause from "../../assets/icons/Pause";
import Play from "../../assets/icons/Play";
import { useRef, useState } from "react";

type Props = {
  src: string;
};

const Player = (props: Props) => {
  const { src } = props;
  const [toggleIcon, setToggleIcon] = useState<boolean>(true);
  const ref = useRef<HTMLAudioElement>(null);

  const cambiarAudio = () => {
    if (ref.current?.paused) {
      ref.current?.play();
      setToggleIcon(true);
    } else {
      ref.current?.pause();
      setToggleIcon(false);
    }
  };

  return (
    <Box className="player-container" onClick={cambiarAudio}>
      <CardMedia component={"audio"} src={src} autoPlay loop ref={ref} />
      {toggleIcon ? (
        <Pause className="player-icon" />
      ) : (
        <Play className="player-icon" />
      )}
    </Box>
  );
};

export default Player;
