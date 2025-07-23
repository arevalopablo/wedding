import { Box, Grid, Typography } from "@mui/material";
import useClock from "./useClock";
import "./Timer.css";

const Timer = () => {
  const { time, finish } = useClock();

  if (finish) {
    return <h1>¡¡¡HOY NOS CASAMOS!!!</h1>;
  }

  return (
    <Box className={"timer-container"} >
      <Box width={{xs: '95%', sm: '80%',md: '80%', lg: '60%'}} bgcolor={'rgba(255,255,255, .6)'} m={'0 auto'} p={{xs: '50px 0', md: '50px'}} >
        <Box display={"flex"} flexDirection={{xs: 'column', md: 'row'}} justifyContent={{md: 'center'}} alignItems={{md: 'center'}}>
        {['Maru', '&', 'Pablo'].map((name, index) => (
          <Typography key={index} variant="h1" sx={{fontFamily: 'Great Vibes', fontSize: {xs: name === '&' ? '50px' : '70px', sm: name === '&' ? '60px' : '90px', md: name === '&' ? '60px' : '90px'}, m: {md: '0 10px'}, color: name === '&' ? '#c1944a' : '#375849'}}>{name}</Typography>
        ))}
      </Box>
      <Typography variant={"h1"} className="title" sx={{fontFamily: 'Great Vibes', fontSize: {xs: '50px', sm: '60px', md: '60px'}, mt: {xs: '20px', sm: '10px', md: '10px'}}}>
        ¡¡¡Nos Casamos!!!
      </Typography>
      <Box className={"countdown-container"}>
        <Grid
          container
          spacing={{ xs: 1, sm: 4 }}
          flexWrap={{ xs: "nowrap" }}
          
        >
          {Object.entries(time)
            .sort()
            .map(([key, value], index) => (
              <Grid
                className={"date-container"}
                p={'20px'}
                key={index}
              >
                <Typography variant="h1" sx={{ mb: "5px", fontFamily: 'Great Vibes', fontSize: {xs: '50px', sm: '60px', md: '60px'} }}>
                  {value}
                </Typography>
                <Typography variant="h2" >{key}</Typography>
              </Grid>
            ))}
        </Grid>
      </Box>
      </Box>
      
    </Box>
  );
};

export default Timer;
