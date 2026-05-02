import { Box, Grid, Typography } from "@mui/material";
import "./Countdown.css";
import useCountdown from "./useCountdown";

const Countdown = () => {
  const { time, finish } = useCountdown();

  if (finish) {
    return <h1>¡¡¡Estamos casados!!!</h1>;
  }

  return (
    <Box className={"timer-section"} data-aos='fade-up' sx={{mt: '20px'}}>
      <Box className='timer-maru-pablo' data-aos='fade-up' sx={{width: {xs: '95%', sm: '70%', md: '80%', lg: '65%'}, p: {xs: '50px 0', md: '50px'}}}>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: {md: 'center'}, alignItems: {md: 'center'}}} data-aos='fade-up'>
        {['Maru', '&', 'Pablo'].map((name, index) => (
          <Typography key={index} variant="h1" sx={{fontFamily: 'Great Vibes', fontSize: {xs: name === '&' ? '50px' : '70px', sm: name === '&' ? '60px' : '90px', md: name === '&' ? '60px' : '90px'}, m: {md: '0 10px'}, color: name === '&' ? '#c1944a' : '#375849'}}>{name}</Typography>
        ))}
      </Box>
      <Typography variant={"h1"} className="title" sx={{fontFamily: 'Great Vibes', fontSize: {xs: '50px', sm: '60px', md: '60px'}, mt: {xs: '20px', sm: '10px', md: '10px'}}} data-aos='fade-up'>
        ¡¡¡Nos Casamos!!!
      </Typography>
      <Box className={"countdown-container"}>
        <Grid
          container
          sx={{flexWrap: {xs: "nowrap"}}}
          spacing={{ xs: 1, sm: 4 }}          
        >
          {Object.entries(time)
            .sort()
            .map(([key, value], index) => (
              <Grid
                className={"date-container"}
                key={index}
                sx={{p: '20px'}}
                data-aos='fade-up'
              >
                <Typography variant="h1" sx={{ mb: "5px", fontFamily: 'Great Vibes', fontSize: {xs: '50px', sm: '60px', md: '60px'} }}>
                  {value}
                </Typography>
                <Typography variant="h2" sx={{fontWeight: 'bold'}}>{key}</Typography>
              </Grid>
            ))}
        </Grid>
      </Box>
      </Box>
      
    </Box>
  );
};

export default Countdown;
