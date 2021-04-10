import * as actionTypes from './actions'

function reducer(state, action) {

    switch (action.type) {
        case actionTypes.INCREASE:
            return { ...state, count: state.count + 1 }
        case actionTypes.DECREASE:
            return { ...state, count: state.count - 1 }
        case actionTypes.REMOVE:
            return { ...state, count: state.count + 1 }
        case actionTypes.RESET:
            return { ...state, count: 0 }
        default:
            return state
    }
}

export default reducer