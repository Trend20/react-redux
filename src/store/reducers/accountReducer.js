const accountReducer = (state = 20, action) =>{
  switch(action.type){
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
}

export default accountReducer;