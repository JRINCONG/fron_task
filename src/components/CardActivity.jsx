import { Rowing } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import '../styles/CardActivity.css'
import {Items} from '../components/Items'
import{ v4 }from 'uuid'
import { Link } from "react-router-dom"
import { useState } from "react"


export const CardActivity = ({item}) => {
const [ ModalItems, setModalItems ]= useState(false)

 const onClikCard = (e)=>{
  console.log(item.id)

 }

 
  return (
  
    <div className="Container_activity" id={item.id} >
     <Card className="Card_activity" sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
         <span className="items">{item.title}</span> 
        </Typography>
        <hr/>
        <Link className="Add_items" onClick={onClikCard}>Items</Link>
        <Typography variant="h5" component="div">
          {
            item.item_activities?.map((iten)=>(
              <Items
              key={v4()}
              iten={iten}
              />
            ))
          }
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Notation:</Typography>
        <Typography variant="body2">
         {item.note}
          <br />
        
          <br/>
          <span><b>Date Start: </b> {item.dateInicial}</span><br/>
          <span><b>Date End: </b> {item.dateFinal}</span>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>    
    </div>
   

  
  )
}


