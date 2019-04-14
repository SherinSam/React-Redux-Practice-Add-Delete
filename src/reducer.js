const initState = {
    depositMethods: [
        {type: '', amount: ''}
    ]
}

const newDeposit = {type: '', amount: ''}

const reducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_DEPOSIT':
            // console.log("in the reducer")
            // console.log({...state.depositMethods, newDeposit})
            return ({...state, depositMethods: [...state.depositMethods, newDeposit]})
        case 'DELETE_DEPOSIT':
            const deposits = state.depositMethods.filter((deposit,index) => 
                index !== action.data
            )
            return ({state, depositMethods: deposits})
        default:
            return state
    }

}

export default reducer