import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import ArrowDown from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowUp from '@material-ui/icons/ArrowUpwardOutlined';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: '2px'
  },
  inline: {
    display: 'inline',
  },
});

function GeneralStockList(props) {
  const { classes } = props;
  const listItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <List className={classes.root}>

      {listItems.map(result => 
        <ListItem alignItems="flex-start" key={result}>
          <ListItemAvatar>
            {/* <ArrowDown /> */}
            <ArrowUp />
          </ListItemAvatar>
          <ListItemText
            primary={`Lunch this weekend? ### ${result}`}
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>  
      )}

    </List>
  );
}

GeneralStockList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralStockList);