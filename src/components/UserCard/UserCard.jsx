import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const UserCard = ({item}) => {
  return (
    <Card className="Card" sx={{maxWidth:'345px',height:'650px'}}>
      <CardActionArea sx={{height:'100%'}}>
        <CardMedia sx={{width:'100%',height:'300px',objectFit:'contain',padding:'10px'}}
          component="img"
          image={item.image}
          alt="product image"
        />
        <CardContent sx={{textAlign:'center',height:'100%'}}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UserCard