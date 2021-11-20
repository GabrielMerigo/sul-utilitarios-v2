import produce from 'immer';

const INITIAL_STATE = {
  vehicles: {}
};

export function CarsReducer(state = INITIAL_STATE, action: any){
  switch(action.type){
    case 'TAL_AÇÃO': {
      return {
        ...state,
        vehicles: action.vehicles
      }
    }

    default: 
      return state;
  }
}