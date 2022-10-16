import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                component="img"
                height="100"
                image="https://www.covermore.com.au/sites/default/files/diwali-candles.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Diwali Campaign
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is a campaign to create a stunning videos from the boutique...
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">₹2500</Button>
                <Button size="small">Submit Work</Button>
            </CardActions>
        </Card>
    );
}
