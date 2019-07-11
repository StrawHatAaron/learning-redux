const initialRState = {
    status:'Relationship'
}

export default function trialReducer(state = initialRState, action){
    switch(action.type){
        case 'S':
            return {status: 'Single'}
        case 'R':
            return {status: 'In a Relationship'}
        case 'E':
            return {status: 'Engaged'}
        case 'M':
            return {status: 'Married'}
        default:
            return state
    }
}
