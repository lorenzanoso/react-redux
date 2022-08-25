export const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'DEPOSIT_MONEY',
            payload: amount
        })
    }
}

export const withDrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'WITHDRAW_MONEY',
            payload: amount
        })
    }
}