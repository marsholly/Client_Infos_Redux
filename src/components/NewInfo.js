import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'material-ui';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import uuid from 'uuid';
import {createNewClient, loadingNotification, doneNotification } from '../actions/InfoActions';

const styles = {
  checkbox: {
    marginBottom: 16,
  },
};


class NewInfo extends Component {
  constructor() {
    super();
    this.state = {
     hobbies: []
   }
    this._onSubmit = this._onSubmit.bind(this);
    this.getHobbies =  this.getHobbies.bind(this);
  }

  getHobbies(e, checked) {
   let favoritehobby = e.target.value;
   let { hobbies } = this.state;
   if( checked ) {
     this.setState({
       hobbies: [...hobbies, favoritehobby]
     });
   } else {
     if( !checked ) {
       let hobbiesCopy = [...hobbies];
       let newHobbies = hobbiesCopy.filter(hobby => {
         return hobby !== favoritehobby;
       });
       this.setState({
         hobbies: newHobbies
       })
     }
   }
 }

  _onSubmit(e) {
     e.preventDefault();
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    let { hobbies } = this.state;
    let clientInfo = {
      firstName,
      lastName,
      hobbies,
      id: uuid(),
    };
    this.props.loadingNotification('Loading...')
    setTimeout(() => {
      this.props.doneNotification('Done!'),
      this.props.createNewClient(clientInfo);
    }, 3000)
  }

  render() {
    return (
      <form onSubmit={this._onSubmit}>
        <div className="row">
          <div className="form-group">
            <label className="col-sm-2 control-label">First Name:</label>
            <div className="col-sm-4">
              <input type="text" className="form-control" placeholder="Holly" ref="firstName"/>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="form-group">
            <label className="col-sm-2 control-label">Last Name:</label>
            <div className="col-sm-4">
              <input type="text" className="form-control" placeholder="Zhou" ref="lastName"/>
            </div>
          </div>
        </div>
        <br/>
        <h4>Hobbies:</h4>
          <Checkbox checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />} label="Sports" value="Sports" style={styles.checkbox} onCheck={this.getHobbies} />
          <Checkbox checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />} label="Music" value="Music" style={styles.checkbox} onCheck={this.getHobbies} />
          <Checkbox checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />} label="Traveling" value="Traveling" style={styles.checkbox} onCheck={this.getHobbies} />
          <Checkbox checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />} label="Painting" value="Painting" style={styles.checkbox} onCheck={this.getHobbies} />
          <Checkbox checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />} label="Computer" value="Computer" style={styles.checkbox} onCheck={this.getHobbies} />
          <Checkbox checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />} label="Reading" value="Reading" style={styles.checkbox} onCheck={this.getHobbies} />
        <button type="submit" className="btn btn-success">Sumbit</button>
      </form>

    )
  }
};

function mapDispatchToProps(dispatch){
  return {
    createNewClient(clientInfo) {
      dispatch(createNewClient(clientInfo));
    },
    loadingNotification(note) {
      dispatch(loadingNotification(note));
    },
    doneNotification(note) {
      dispatch(doneNotification(note))
    }
  };
}

export default connect(null, mapDispatchToProps)(NewInfo);
