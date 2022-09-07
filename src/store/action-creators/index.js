export const depositMoney = (amount) =>{
  return (dispatch) =>{
    dispatch({
      action: "deposit",
      payload: amount
    })
  }
}


export const withdrawMoney = (amount) =>{
  return (dispatch) =>{
    dispatch({
      action: "withdraw",
      payload: amount
    })
  }
}