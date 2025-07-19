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
      <Typography variant={"h1"} sx={{fontFamily: 'Great Vibes', fontSize: {xs: '60px', md: '120px'}, color: 'rgb(185 155 96)'}}>Maru</Typography>
      <Typography variant={"h1"} sx={{fontFamily: 'Great Vibes', fontSize: {xs: '40px', md: '120px'}, color: 'rgb(185 155 96)'}}>&</Typography>
      <Typography variant={"h1"} sx={{fontFamily: 'Great Vibes', fontSize: {xs: '60px', md: '120px'}, color: 'rgb(185 155 96)'}}>Pablo</Typography>
      <Typography variant={"h1"} className="title" sx={{fontFamily: 'Great Vibes', fontSize: {xs: '40px', md: '90px'}, mt: '20px'}}>
        ¡¡¡ Nos Casamos !!!
      </Typography>
      <Box className={"countdown-container"}>
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
                sx={{ width: { sm: "150px", md: "170px", color: '#375849' } }} //xs: 25%
                p={'20px'}
                key={index}
              >
                <Typography variant="h1" sx={{ mb: "5px", fontFamily: 'Great Vibes', fontSize: {xs: '50px', md: '80px'} }}>
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
