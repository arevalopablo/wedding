// import location from '../../assets/icons/location.gif'
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { eventsData } from "./events";
import "./Events.css";

// type Props = {};

const Events = () => {
  return (
    <Box
      className="events-section"
      sx={{ height: { xs: "300px", sm: "300px", md: "400px" } }}
    >
      <Box className="events-container">
        
        <Box
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          height={"100%"}
          // pb={"30px"}
        >
          <Typography variant="h1">Cronograma</Typography>
          {eventsData.map((data, index) => (
            <Box key={index} className='event' width={{ xs: "100%", sm: "50%", md: "33%" }}>
              <Typography variant="h2">{data.step}</Typography>
              <ImageList sx={{width: '150px', m: '0 auto', display: 'flex'}}>
                <ImageListItem >
                  {/* <img src={location} alt="location"/> */}
                </ImageListItem>
              </ImageList>
              <Typography variant="h3">{data.time}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
