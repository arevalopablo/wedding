import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import "./Info.css";
import calendar from "../../assets/regalo.gif";

type Props = {
  bgc: string;
  text: string;
  text2: string;
  text3: string;
  className: string;
};

const Info = (props: Props) => {
  const { bgc, text, text2, text3, className } = props;

  return (
    <Box className={"info-section"} sx={{ background: bgc, backgroundRepeat: {xs: 'no-repeat', md: 'repeat-x'}, backgroundSize: {xs: 'cover', sm: 'cover', md: 'contain', backgroundPosition: 'center'}, height: {xs: '300px', sm: '300px', md: '400px'}}}>
      
      <Box className={`info-container ${className}`} sx={{backgroundSize: {xs: '80%', sm: '60%', md: '25%'}}}>
        <Typography variant="h1">{text}</Typography>
        <ImageList sx={{width: '100px', m: '0 auto', display: 'flex'}}>
          <ImageListItem>
            <img
              src={calendar}
              alt="icon"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h1">{text2}</Typography>
        <Typography variant="h2">{text3}</Typography>
      </Box>
    </Box>
  );
};

export default Info;
