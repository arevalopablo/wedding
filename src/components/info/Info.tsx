import { Box, Button, ImageList, ImageListItem, Typography } from "@mui/material";
import "./Info.css";

type Props = {
    bgc: string;
    mainText: string;
    subtext: string;
    description: string;
    icon: string
    btnText: string,
    showBtn: boolean,
    className: string;
    
};

const Info = (props: Props) => {
  const { bgc, mainText, subtext, description, btnText, showBtn, className, icon,  } = props;

  return (
    <Box className={"info-section"} sx={{ background: bgc, backgroundRepeat: {xs: 'no-repeat', md: 'repeat-x'}, backgroundSize: {xs: 'cover', sm: 'cover', md: 'contain', backgroundPosition: 'center'}, height: {xs: '400px', sm: '400px', md: '450px'}}}>
      
      <Box className={`info-container ${className}`} sx={{backgroundSize: {xs: '80%', sm: '60%', md: '25%'}, backgroundRepeat: 'repeat-x', backgroundPosition: 'bottom'}}>
        <Typography variant="h1" fontWeight={'bold'}>{mainText}</Typography>
        <ImageList sx={{width: '100px', m: '10px auto', display: 'flex'}}>
          <ImageListItem >
            <img
              src={icon}
              alt="icon"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h1" fontWeight={'bold'}>{subtext}</Typography>
        <Typography variant="h2" fontWeight={'bold'}>{description}</Typography>
        {showBtn && <Button variant="contained" className="btn"> {btnText}</Button>}
      </Box>
    </Box>
  );
};

export default Info;
