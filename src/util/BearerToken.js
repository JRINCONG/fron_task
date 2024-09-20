export const BearerToken= ()=>{

    const token= localStorage.getItem('token')

    return{
        headers:{
            authorization: `Bearer ${token}`

        }
    }

}