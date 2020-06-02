import React, { createContext, useReducer, useContext } from "react";
import {
    LOGIN,
    LOGOUT,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {

        // case ADD_CART_ITEM:
        //     var count = state.cartCount;
        //     if (count[action.item.name]) {
        //         count[action.item.name]++;
        //         return {
        //             ...state,
        //             cartCount: count
        //         };
        //     } else {
        //         count[action.item.name] = 1;
        //         return {
        //             ...state,
        //             cart: [action.item, ...state.cart],
        //             cartCount: count
        //         };
        //     }

        case LOGIN:
            return {
                ...state,
                loggedin: true,
                user: action._id
            };
        case LOGOUT:
            return {
                ...state,
                loggedin: false,
                user: ""
            };
        default:
            return state;
    }
};


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        searchItems: [],
        currentItem: {
            // _id: 0,
            // title: "",
            // price: "",
            // description: ""
        },
        categories: [],
        cart: [],
        cartCount: {},
        loggedin: false,
        userId: ""
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
