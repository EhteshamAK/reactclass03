const numberReducer = (state, action) => {
    switch (action.type){
        case 'INCREAMENT':
            return state+ 1
        case 'DECREMENT':
            return state-1
         default:
    }
};

export default numberReducer;



