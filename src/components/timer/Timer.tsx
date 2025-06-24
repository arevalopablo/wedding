import { Box, Grid, Typography } from "@mui/material";
import useClock from "./useClock";
import "./Timer.css";

const Timer = () => {
  const { time, finish } = useClock();

  if (finish) {
    return <h1>¡¡¡HOY NOS CASAMOS!!!</h1>;
  }

  return (
    <Box className={"timer-container"}>
      <Typography variant={"h1"} className="title">
        ¡¡¡ NOS CASAMOS !!!
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
                key={index}
              >
                <Typography variant="h1" sx={{ mb: "5px" }}>
                  {value}
                </Typography>
                <Typography variant="h2">{key}</Typography>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Timer;
