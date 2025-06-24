import { Box, Typography } from "@mui/material"
import './Info.css'
import calendar from '../../assets/regalo.gif'

type Props = {
  bgc: string,
  text: string,
  text2: string,
  text3: string,
  text4: string,
  className: string 
}

const Info = (props: Props) => {
  const { bgc, text, text2, text3, text4, className } = props

  return (
    <Box className={'info-section'} sx={{height: {sx: '200px', md: '400px'},background: bgc}}>
      <Box className={`info-container ${className}`} >
        <Typography variant="h1">{text}</Typography>
        <img src={calendar} alt="" width={'100px'} style={{margin: '0 auto'}}/>
        <Typography variant="h1">{text2}</Typography>
        <Typography variant="h2">{text3}</Typography>
        <Typography variant="h2">{text4}</Typography>
      </Box>
    </Box>
  )
}

export default Info