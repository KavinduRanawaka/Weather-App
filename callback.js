const getUser = (callback)=>{

    // setTimeout(()=>{
    //     callback(undefined,{error:'user error'})
    // },1000) 

    setTimeout(()=>{
        callback({name:"Kavindu"},undefined)
    },1000)  
}

// getUser((data,error)=>{
//     if(data){
//         console.log(data);
//     }
//     else{
//         console.log(error)
//     }
// })


const chckAuth=(abc)=>{
    setTimeout(()=>{
        abc({auth:true},undefined);
    },1000);

    // setTimeout(()=>{
    //     abc(undefined,{error:'auth error'});
    // },1000)
}

chckAuth((d,e)=>{
    if(d){
        console.log(d)
        getUser((data,error)=>{
            if(data){
                console.log(data);
            }
            else{
                console.log(error)
            }
        })
        
    }
    else{
        console.log(e)
    }
})