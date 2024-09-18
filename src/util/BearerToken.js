export const BearerToken= ()=>{

    const token= localStorage.getItem('token')

    return{
        Headers:{
            Authorization: `Bearer ${token}`

        }
    }

}