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

export default function RecipeReviewCard1() {
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
        title="Integration of the East African Community"

        
        subheader="Price : 95,000"
      />
      <CardMedia
        component="img"
        height="200"
        image="https://books.google.co.ug/books/publisher/content?id=Tl3UDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0GxP-fAeU09awUw05Fz8lpgydF5w&w=1280"
        alt="AJB"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Accessed
According
achieve
Act
activities
Adar
adopted
approach
argued
Article
authority
awareness
benefit
border
Burundi
Burundian
challenges
chapter
citizens
Common Market
concept
concerns
Constitution
cooperation
countries
Court
created
cultural
democracy
democratization
direct
EAC integration
EAC regional
EAC Treaty
EALA
East African Community
economic
edited
effective
elected
elites
ensure
established.

Hardcover
402 pages
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton value ="red" aria-label="add to favorites" onClick={() =>{
          document.querySelector('IconButton').style.color = this.value;
        }}>
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
          Focusing on the Partner States case studies, the authors of the chapters operationalize the concepts of popular participation, eastafricanness,:
          </Typography>
          <Typography paragraph>
            <li>Lexington</li>
          
            <li>Published:March 9, 2020r</li>
          </Typography>
          <Typography variant='h6'>Editors</Typography>
          <Typography paragraph>
            <li>Agnes Lucy Lando</li>
            <li>Juliana Masabo</li>
            <li>Kasaija Phillip Apuuli</li>
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