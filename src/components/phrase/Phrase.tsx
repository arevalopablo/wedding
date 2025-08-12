import "./Phrase.css";
import { Box, Typography } from "@mui/material";

type Props = {
  phrase: string;
};

const Phrase = (props: Props) => {
  const { phrase } = props;
  
  return (
    <Box className={"phrase-section "} p={{xs: '0', md: '30px'}}>
      <Box className={"phrase-container phrase"} data-aos='fade-up'>
        <Typography className="" variant="h3" fontWeight={'500'}>{phrase}</Typography>
      </Box>
    </Box>
  );
};

export default Phrase;
