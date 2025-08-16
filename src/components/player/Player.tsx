import { Box, CardMedia } from "@mui/material";
import "./Player.css";
import Pause from "../../assets/icons/Pause";
import Play from "../../assets/icons/Play";
import { useState } from "react";

type Props = {
  src: string;
};

const Player = (props: Props) => {
  const { src } = props;
  const [booleano] = useState<boolean>(true);

  return (
    <Box className="player-container">
      <CardMedia component={"audio"} src={src} autoPlay loop />
      {booleano ? (
        <Pause
          style={{
            fill: '#456556',
            height: "100%",
            width: "100%",
          }}
        />
      ) : (
        <Play
          style={{
            fill: '#456556',
            height: "100%",
            width: "100%",
          }}
        />
      )}
    </Box>
  );
};

export default Player;
