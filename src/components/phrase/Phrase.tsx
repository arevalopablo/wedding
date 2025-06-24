import "./Phrase.css";
import { Box, Typography } from "@mui/material";

type Props = {
  phrase: string;
};

const Phrase = (props: Props) => {
  const { phrase } = props;
  
  return (
    <Box className={"phrase-section "}>
      <Box className={"phrase-container phrase"}>
        <Typography className="" variant="h3">{phrase}</Typography>
      </Box>
    </Box>
  );
};

export default Phrase;
