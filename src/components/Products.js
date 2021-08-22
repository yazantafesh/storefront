import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { getCategoryItems } from '../store/products';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 140,
  },
});

function Products(props) {
  const classes = useStyles();
  return (
    <>
      {props.activeProducts.map(element => {
        return <Card className={classes.root} style={{display:'inline-block', marginLeft:'25%', height:'5%', width:'20%', marginTop:'3%'}}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={element.image}
              title={element.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {element.name} - ${element.price}
              </Typography>
              {/* <Typography gutterBottom variant="h5" component="h2">
                ${element.price}
              </Typography> */}
              <Typography variant="body2" color="textSecondary" component="p">
                {element.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      })}

    </>
  )
}
function mapStateToProps(state) {
  return state.products;
}
const mapDispatchToProps = {
  getCategoryItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)



