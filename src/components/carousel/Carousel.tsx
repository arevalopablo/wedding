import { useLayoutEffect, useState } from 'react';
import './Carousel.css'
import { Box, ImageList, ImageListItem } from '@mui/material';

type Props = {
  arrayImg: string[];
};

const Carousel = (props: Props) => {
  const { arrayImg } = props
  const [carousel, setCarousel] = useState<boolean>(false)

  useLayoutEffect(() => {
    if (!carousel) {
      setTimeout(() => {
        setCarousel(true)
      }, 2000);
    }
  }, [carousel])

  return (
    <Box className='carousel-section' >
      {['obj', 'obj2'].map((_, i) => (
        <ImageList key={i} className={carousel ? 'slide-img' : ''} sx={{display: 'inline-flex'}}>
        {arrayImg.map((img, index) => (
          <ImageListItem key={index} sx={{m: '0 15px', width: {xs: '300px', sm: '400px', md: '500px', lg: '700px'}}}>
            <img src={img} alt="img" style={{borderRadius: '5px'}}/>
          </ImageListItem>
        ))}
      </ImageList>
      ))}
    </Box >
  )
}

export default Carousel