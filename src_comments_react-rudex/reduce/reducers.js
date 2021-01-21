import { ADD_COMMENT,DELETE_COMMENT } from "./action-types";


const initComments =[
    {username:'jack',content:'react is good!'},
    {username:'jack',content:'react is great!'},
]  

export function comments(state=initComments,action){
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data,...state]
        case DELETE_COMMENT:
            return state.filter((comment,index)=>{return index!==action.data})
        default:
            return state
    }
}

