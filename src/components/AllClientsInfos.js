import React, { Component } from 'react';
import { connect } from 'react-redux';


class AllClientsInfos extends Component {
  render() {
    const { infos, notes } = this.props;
    let infosBlock, note;
    if(notes) {
      note = notes[notes.length-1];
    } else {
      note = <span></span>;
    }
    if (infos) {
      infosBlock = infos.map((info) => {
        const { id, firstName, lastName } = info;
        return (
          <tr key={id}>
            <td>{firstName}</td>
            <td>{lastName}</td>
          </tr>
        );
      });
    } else {
      infosBlock = <tr></tr> ;
    }
    return (
      <div className="container">
        <h3 className="text-center">{note}</h3>
        <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {infosBlock}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    infos: state.infos,
    notes: state.notification
  };
}


export default connect(mapStateToProps, null)(AllClientsInfos);
