//1.auth user
//2.get user

const getUser=()=>{
    return new Promise((resolve,reject)=>{
        // setTimeout(()=>{
        //     resolve({user:'Kavindu'})
        // })

        //or
        setTimeout(()=>{
            reject({error:'user error'})
        })
    })
}
const authUser=()=>{
    return new Promise((resolve,reject)=>{
        // setTimeout(()=>{
        //     resolve({author:true})
        // })

        //or
        setTimeout(()=>{
            reject({error:'auth error'})
        })
    })
}



authUser().then(()=>{
            return getUser()
           })
           .then((data)=>{
            console.log(data);
           })
          .catch((error)=>{
            console.log(error);
          })