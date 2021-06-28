import {ADDTO_CART,DELETEFROM_CART} from "./cartAction"

const initialState = {
      cartnumber: 10
    };

const reducers = (state = initialState , action) => {
        switch(action.type) {
          case ADDTO_CART: return {
            cartnumber: state.cartnumber + 1
          }
          case DELETEFROM_CART: return {
            cartnumber: state.cartnumber - 1
          }
          default: return state
        }
    }

export default reducers;