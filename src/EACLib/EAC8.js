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
        title="Bright Young Women"
        subheader="Price : Shs 500,000"
      />
      <CardMedia
        component="img"
        height="330"
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676221840i/101124639.jpg"
        alt="AJB"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        An extraordinary novel inspired by the real-life sorority targeted by America's first celebrity serial killer in his final murderous spree.
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
          :
          </Typography>
          <Typography paragraph>
            <li>Jessica Knoll</li>
           
          </Typography>
          <Typography variant='h6'>Product details</Typography>
          <Typography paragraph>
            <li>First published december 20, 2000
            400 pages, </li>
            

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