import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import JeanPaul from '../pictures/jean crni.jpg'; // Importing the image
import JeanPaulGold from '../pictures/jean zlatni.jpeg'; // Importing the image
import JeanPaulBlue from '../pictures/ultra male.jpg';
import JeanPaulCyan from '../pictures/jean parfem.jpg';

const products = [
  {
    id: 1,
    name: 'Jean Paul Elixir',
    description: 'The voyage is looking torrid with Le Male Elixir, the latest recruit of the Jean Paul Gaultier crew. The flaming torso, his intense perfume for men envelopes itself with sex-appeal to the point of addiction, while the striated gold of his bulging muscles make you melt with desire. Beware of the pull of his skin made copper by the setting sun... Don’t touch! You’ll get burnt! And what of his sailor top? Its translucent brown suggests an amber wake so sensual that a single drop will make you reel.',
    price: '$150',
    image: JeanPaulGold,
  },
  {
    id: 2,
    name: 'Jean Paul Le Male',
    description: 'Get ready for the Jean Paul Gaultier Eau de Parfum Le Male le Parfum! Dressed in a black and gold officer’s jacket, this intense Eau de Parfum is taking leadership of the Le Male cologne range with great style and strength. An elegant woody amber trail capturing the charisma and power of a leader. Attention sailors! The captain has arrived and we’re about to set sail.',
    price: '$120',
    image: JeanPaul,
  },
  {
    id: 3,
    name: 'Jean Paul Le Bau',
    description: 'The original mens fragrance by Gaultier. In a secret Garden of Eden, Gaultier opens the gates and Le Beau makes a striking appearance. The tone is set by his sculptural body, adorned only with a golden vine leaf. Beneath this couture detail, we discover a natural man who loves seduction and freedom in the simplest form. How can we not be captivated? His hypnotic personality, his exotically sensual Eau de Toilette. Nothing is more fresh and powerful than Le Beau.',
    price: '$135',
    image: JeanPaulCyan,
  },
  {
    id: 4,
    name: 'Jean Paul Ultra Male',
    description: 'Ultra Male, the rogue sailor who will have you lost at sea! This Eau de Toilette Intense is a lavender cologne for men fighting in an arm wrestle between power and greed. A Jean Paul Gaultier fragrance featuring an irresistible combination of dark lavender, woody vanilla, pear juice and mint.',
    price: '$145',
    image: JeanPaulBlue,
  },
];

const Home = () => {
  return ( // Return the JSX content of the component
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">Welcome to Perfume Store</Typography>
      </Grid>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="150"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {product.price}
              </Typography>
              <Button variant="contained" color="primary">Add to Cart</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
