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

export default function RecipeReviewCard() {
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
        }npm star
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Grammar of Literary Swahili"
        subheader="Price : Shs. 25,000"
      />
      <CardMedia
        component="img"
        height="200"
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405294482i/1352051.jpg"
        alt="AJB"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Besides containing a condensed grammar of literary Swahili, this work also elucidates Islamic literature. After introducing the historical context of the traditional literary Swahili language and the origin of its poetry, the author (no background given) briefly waxes philosophical on how the deep structure of a language affects its literature before pursuing the specifics various parts of speech, the relative, the adoption of Arabic nouns into the Swahili class system, the numeral, and spelling variations and common interjections in Swahili poetry.
        <Typography paragraph></Typography>
        <k>Hardcover</k>

        <k>Published January 1, 1999</k>

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button variant="contained" style={{backgroundColor: "blue", width: 120, padding: 2, marginLeft: 20}} onClick={() =>{
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
          <Typography variant='h6'>Author:</Typography>
          <Typography paragraph>
          Studies in Swahili Languages & Literature:
          </Typography>
          <Typography paragraph>
            <li>Jan Knappert</li>
            
          
            
          </Typography>
          <Typography variant='h6'>Other EAC Literature Books written by the author:</Typography>
          <Typography paragraph>
            <li>The Aquarian Guide to African Mythology</li>
            <li>Epic poetry in Swahili and other African languages</li>
            
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