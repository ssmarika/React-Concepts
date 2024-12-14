import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CustomCard = (props) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          margin: 5,
        }}
      >
        <CardMedia
          sx={{ height: 200, width: 400 }}
          image={props.image}
          title="photo"
        />
        <CardContent>
          <Typography variant="h5" sx={{ margin: " 0 1" }}>
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ margin: "0 1" }}>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CustomCard;
