const initial={
  user:{email:"",password:""},
  uname:"",
  cards:[]
}

 function Todoarray(state=initial,action){
      switch(action.type){
        case "login": return {
            ...state,user:{...state.user,[action.payload.name]:action.payload.value}
        }
        case "uname": return {
            ...state,uname:action.payload
        }
        case "cards": return {
          ...state,cards:[...state.cards,...action.payload]
      }
                     
        default :return state
      }
}
export default Todoarray