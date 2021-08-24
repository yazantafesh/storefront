import { connect } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Cart(props) {

  const classes = useStyles();

  function handleList() {

    let temp = [];

    props.cart.map((element) => {
      if (temp.includes(element)) {
        temp.forEach(item => {
          if (item.name === element.name) {
            item.inCart += 1;
          }
        })
      } else {
        element.inCart = 1;
        temp.push(element)
      }
    })

    let list = temp.map((element, idx) => {
      return (<>
        <ListItem key={idx} button >
          <ListItemText primary={`${element.name} - Quantity: ${element.inCart}`} style={{ color:'#2C394B' }} />
        </ListItem>
        <hr></hr>
      </>
      )
    })
    return list;
  }
  return (
    <div className={classes.root}>
      <List  component="nav"  aria-label="secondary mailbox folders" style={{ zIndex: '3', position: 'absolute', right: '1%', border: 'solid 1pt #334756', borderRadius: '4%' }}>
        {handleList()}
      </List>
    </div>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Cart);



