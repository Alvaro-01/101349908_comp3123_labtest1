const resolvedPromise = () => {
    var p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { "message": "delayed success" };
            resolve(success); 
          }, 500);
        });
        return p1
      };
    
 

const rejectPromise = () => {
    
    var p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            try{
                throw new Error(" delayed exception");
            }catch(e){
               reject({error: `${e}`});
            }
            
           
        }
        ,500)
    })
    return p1
}
resolvedPromise()
  .then((result) => {
    console.log(result);
  }),(err) => {
    console.log("Rejected : " + err.msg)
}

rejectPromise().then(()=>{
    console.log("success")
},(err) => {
    console.log(err)
})
