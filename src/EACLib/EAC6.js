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
        title="Being Maasai"
        subheader="Price : Shs 80,000"
      />
      <CardMedia
        component="img"
        height="250"
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348663965i/3457139.jpg"
        alt="AJB"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        This collection by historians, archaeologists, anthropologists and linguists examines how Maasai identity has been created, evoked, contested, and transformed from the time of their earliest settlement in Kenya to the present, as well as raising questions about the nature of ethnicity generally..
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
          The Author received his doctorate in history at the University of Wisconsin at Madison. :
          </Typography>
          <Typography paragraph>
            <li>Thomas Spear</li>
           
          </Typography>
          <Typography variant='h6'>Product details</Typography>
          <Typography paragraph>
            <li>Publication Date: April 1st, 1993
Pages	</li>
            

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