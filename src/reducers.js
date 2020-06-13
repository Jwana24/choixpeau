import houses from './houses';

const reducers = (state, action) => {
  switch(action.type){
    case 'UPDATE_CHOICE_WITH_MY_INDEX':
      return state = houses[Math.floor(Math.random() * 4)];
    default:
      return state;
  };
};

export default reducers;
