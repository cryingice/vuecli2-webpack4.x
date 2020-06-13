let obj ={1:2,3:['tt','ll'],5:6}
Object.keys({1:2,3:['tt','ll'],5:6}).map(i=> {
  if(Array.isArray(obj[i])){
    let arr =[];
    obj[i].forEach(element => {
       if(element=='tt'){
        return
       }else{
         arr.push(element)
       }
       
     });
     return arr
    }
    return i
  })