import { combineReducers } from 'redux';

const shopping = [
  { id: 203, name: '립스틱', quan: 1 },
  { id: 12, name: '섀도우', quan: 1 },
];

const shoppingReducer = (state = shopping, action) => {
  if (action.type === 'add') {
    let copy = [...state];
    let index = copy.findIndex((obj) => obj.id === action.payload.id);
    if (index >= 0) {
      copy[index].quan++;
      return copy;
    } else {
      let copy = [...state, action.payload];
      return copy;
    }
  } else if (action.type === 'plus') {
    let copy = [...state];
    let index = copy.findIndex((obj) => obj.id === action.payload.id);
    copy[index].quan++;
    return copy;
  } else if (action.type === 'minus') {
    let copy = [...state];
    let index = copy.findIndex((obj) => obj.id === action.payload.id);
    copy[index].quan > 0 && copy[index].quan--;
    return copy;
  } else if (action.type === 'delete') {
    let copy = [...state];
    let newArray = copy.filter((obj) => obj.id !== action.payload.id);
    return newArray;
  } else {
    return state;
  }
};

const reducers = combineReducers({ shoppingReducer });

export default reducers;
