export  const Set=(name,value)=>{
    return {
        type:"login",
        payload:{
            name,value
        }
    }
}
export  const Setname=(name)=>{
    return {
        type:"uname",
        payload:name
    }
}
export  const Cards=(cards)=>{
    return {
        type:"cards",
        payload:cards
    }
}