import { Box, Grid, Typography } from "@mui/material";
import useClock from "./useClock";
import "./Timer.css";

const Timer = () => {
  const { time, finish } = useClock();

  if (finish) {
    return <h1>¡¡¡HOY NOS CASAMOS!!!</h1>;
  }

  return (
    <Box className={"timer-container"} sx={{height: {xs: '300px', md: '100vh'}}}>
      <Typography variant={"h1"} className="title" sx={{fontFamily: 'Great Vibes', fontSize: '120px'}}>
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
                sx={{ width: { xs: "25%", sm: "150px", md: "170px" } }}
                p={{xs: '8px'}}
                key={index}
              >
                <Typography variant="h1" sx={{ mb: "5px", fontFamily: 'Great Vibes', fontSize: '100px' }}>
                  {value}
                </Typography>
                <Typography variant="h2" sx={{fontSize: {xs: '10px'}}}>{key}</Typography>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Timer;
