import * as React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard4() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <div id='cards'>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            AJB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="First Lie Wins"
        subheader="Price : Shs 700,000"
      />
      <CardMedia
        component="img"
        height="330"
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704216161i/164444179.jpg"
        alt="AJB"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Evie Porter has everything a nice, Southern girl could want: a perfect, doting boyfriend, a house with a white picket fence and a garden, a fancy group of friends. The only catch: Evie Porter doesn’t exist..
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button variant="contained" style={{backgroundColor: "grey", width: 120, padding: 2, marginLeft: 20}} onClick={() =>{
            alert("Your Item has been added to the cart! Thank you for supporting AJB")
        }}>Add to Cart</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant='h6'>Author</Typography>
          <Typography paragraph>
          Ashley Elston lives is North Louisiana with her husband and three sons. She worked as a wedding and portrait photographer for ten years until she decided to pursue writing full time.:
          </Typography>
          <Typography paragraph>
            <li>Ashley Elston</li>
           
          </Typography>
          <Typography variant='h6'>Product details</Typography>
          <Typography paragraph>
            <li>First published January 2, 2024
            350 pages, </li>
            

          </Typography>
          <Typography>
          Thank you for supporting AJB.  We have a carefully curated collection that celebrates the rich culture and literature of the East African community.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}