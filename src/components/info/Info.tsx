import { Box, Button, ImageList, ImageListItem, Link, Typography } from "@mui/material";
import "./Info.css";

type Props = {
  bgc: string;
  mainText: string;
  subtext: string;
  description: string;
  icon?: string
  btnText?: string,
  showIcon: boolean,
  showBtn?: boolean,
  className: string;
  btnClassname?: string;
  href?: string
  onClick?: () => void
};

const Info = (props: Props) => {
  const { bgc, mainText, subtext, description, btnText, showBtn, className, btnClassname, showIcon, icon, onClick, href } = props;
  
  return (
    <Box className={"info-section"} data-aos='fade-up' data-aos-duration='400' sx={{ background: bgc, backgroundRepeat: {xs: 'no-repeat', md: 'repeat-x'}, backgroundSize: {xs: 'cover', sm: 'cover', md: 'contain', backgroundPosition: 'center'}, height: {xs: '430px', sm: '400px', md: '450px'}}}>
      
      <Box className={`info-container ${className}`} data-aos='fade-up' data-aos-duration='400' sx={{backgroundSize: {xs: '80%', sm: '60%', md: '25%'}, backgroundRepeat: 'repeat-x', backgroundPosition: 'bottom'}}>
        <Typography variant="h1" fontWeight={'400'} >{mainText}</Typography>
        {showIcon && (
          <ImageList sx={{width: '100px', m: '10px auto', display: 'flex'}}>
            <ImageListItem data-aos='fade'>
              <img
                src={icon}
                alt="icon"
              />
            </ImageListItem>
          </ImageList>
        )}
        
        <Typography variant="h1" fontWeight={'400'}  data-aos='fade'>{subtext}</Typography>
        <Typography variant="h2" fontWeight={'400'} fontSize={{xs: '18px', md: '24px'}} data-aos='fade'>{description}</Typography>
        {showBtn ? <Button className={`btn ${btnClassname}`} data-aos='fade' onClick={onClick}> {btnText}</Button> :
        <Link href={href}><Button className={`btn ${btnClassname}`} data-aos='fade'>{btnText}</Button></Link>}
      </Box>
    </Box>
  );
};

export default Info;
