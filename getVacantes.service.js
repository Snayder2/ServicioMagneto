const axios = require('axios')
const getVacantes=async(req,res)=>{
console.log('entré al servicio')
    await axios ({
        method:'GET',
        baseURL:'https://qa.magneto365.com/api/v1',
        url:'/vacancies',
        headers:{
           TOKEN:'RGEMMB4oyJYRaz9EDsRDqkhGm5jUmjPStJMc5Vv6hRuRYA46Nw'
        }
    }).then((res)=>{
        if(!res.vacants){
            throw new Error('Datos no encontrados')
        }
        let data=res.vacants
        console.log(data)
        res.json(data)
    }).catch((error)=>{
        if(!axios.isCancel(error)){
            console.log(error)
        }
    })
}
module.exports=getVacantes;