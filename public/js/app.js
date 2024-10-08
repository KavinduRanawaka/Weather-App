const wForm= document.querySelector('form')
const search=document.querySelector('input')
const loc=document.querySelector("#loc")
const wea=document.querySelector("#wea")

wForm.addEventListener('submit',()=>{
    e.preventDefault()
    const location = search.value
    loc.textContent='Loading....';
    wea.textContent=''

    fetch('/weather?address='+location)
    .then((res)=>{
        res.json()
        .then((data)=>{
            if(data.error){
                loc.textContent=data.error
            }
            else{
                loc.textContent=location
                wea.textContent=data.weather
            }
        })
    })
})
