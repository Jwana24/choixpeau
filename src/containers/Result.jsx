import React from 'react';
import { connect } from 'react-redux';

import houses from '../houses';
import Message from '../components/Message';

import './Result.css';

const Result = ({ sorting, dispatch }) => {

  const houseArray = houses.length && houses.map(house => {
    switch(house){
      case "Gryffindor":
        return <li className="GryffindorHouse" key={house}>{house}</li>;
      case "Ravenclaw":
        return <li className="RavenclawHouse" key={house}>{house}</li>;
      case "Hufflepuff":
        return <li className="HufflepuffHouse" key={house}>{house}</li>;
      case "Slytherin":
        return <li className="SlytherinHouse" key={house}>{house}</li>;
    }
  });

  const action = {
    type: "UPDATE_CHOICE_WITH_MY_INDEX"
  }

  return(
    <div className="Result">
      <div className="ContainerTitle">
        <h1>Sorting hat</h1>
      </div>
      <div className="ContainerListHouses">
        <ul>
          {houseArray}
        </ul>
        <button
          className="BtnDiscoverHouse"
          onClick={() => dispatch(action)}
        >
          Discover my house
        </button>
        <Message sorting={sorting} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    sorting: state
  };
};

export default connect(mapStateToProps)(Result);