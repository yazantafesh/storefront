import { connect } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

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
      return (<ListItem key={idx} button>
        <ListItemText primary={`${element.name} - Quantity: ${element.inCart}`} />
      </ListItem>)
    })
    return list;
  }
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders" style={{ zIndex: '3', position: 'absolute', right: '1%' }}>
        {handleList()}
      </List>
    </div>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Cart);



