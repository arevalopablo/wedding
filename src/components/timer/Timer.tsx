import { Box, Grid, Typography } from "@mui/material";
import useClock from "./useClock";
import "./Timer.css";

const Timer = () => {
  const { time, finish } = useClock();

  if (finish) {
    return <h1>¡¡¡HOY NOS CASAMOS!!!</h1>;
  }

  return (
    <Box className={"timer-container"} sx={{height: {xs: '100vh', md: '100vh'}}}>
      <Typography variant={"h1"} sx={{fontFamily: 'Great Vibes', fontSize: {xs: '60px', md: '120px'}, mb: '15px'}}>Maru & Pablo</Typography>
      <Typography variant={"h1"} className="title" sx={{fontFamily: 'Great Vibes', fontSize: {xs: '45px', md: '90px'}}}>
        ¡¡¡ Nos Casamos !!!
      </Typography>
      <Box className={"countdown-container"} mt={'30px'}>
        <Grid
          container
          spacing={{ xs: 1, sm: 4, md: 6 }}
          flexWrap={{ xs: "nowrap" }}
          
        >
          {Object.entries(time)
            .sort()
            .map(([key, value], index) => (
              <Grid
                className={"date-container"}
                sx={{ width: { xs: "25%", sm: "150px", md: "170px" } }}
                p={'20px'}
                key={index}
              >
                <Typography variant="h1" sx={{ mb: "5px", fontFamily: 'Great Vibes', fontSize: '80px' }}>
                  {value}
                </Typography>
                <Typography variant="h2" >{key}</Typography>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Timer;
