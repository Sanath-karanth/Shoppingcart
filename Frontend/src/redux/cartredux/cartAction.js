    export const ADDTO_CART = 'ADDTO_CART';
    export const DELETEFROM_CART = 'DELETEFROM_CART';

    export const addtocart = () => {
    return {
      type: ADDTO_CART
        }
    }

    export const deletefromcart = () => {
        return {
          type: DELETEFROM_CART
            }
        }
