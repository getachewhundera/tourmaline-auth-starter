const petList = (state = [], action) => {
    switch(action.type) {
        case 'SET_PET_LIST': 
            return action.payload; 
        default: 
            return state; 
    }
}; 


export default petList; 