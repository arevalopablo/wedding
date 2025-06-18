import { useEffect, useState } from 'react';
import './Carousel.css'
import { Box } from '@mui/material';

type Props = {
  arrayImg: string[];
};

const Carousel = (props: Props) => {
  const { arrayImg } = props
  const [carousel, setWait] = useState<boolean>(false)

  useEffect(() => {
    if (!carousel) {
      setTimeout(() => {
        setWait(true)
      }, 2000);
    }
  }, [carousel])
  
  return (
    <Box className='carousel-section'>
        <Box className={carousel ? 'slide-img' : ''}>
          {arrayImg.map((img, index) => (
              <img key={index} src={img} alt="img" width={'500px'} style={{margin: '0 15px', borderRadius: '5px', boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)'}}/>
            ))}
        </Box>
        {carousel && (
          <Box className={carousel ? 'slide-img' : ''}>
          {arrayImg.map((img, index) => (
              <img key={index} src={img} alt="img" width={'500px'} style={{margin: '0 15px', borderRadius: '5px', boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)'}}/>
            ))}
        </Box>
        )}
        
    </Box >
  )
}

export default Carousel