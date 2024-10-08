import { Rowing } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import '../styles/CardActivity.css'
import {Items} from '../components/Items'
import{ v4 }from 'uuid'


export const CardActivity = ({item}) => {

console.log(item)

 const onClikCard = (e)=>{
  console.log(item.id)
 }

   const DateFormat= (date)=>{


      
   }
  return (
    <div className="Container_activity" id={item.id} onClick={onClikCard}>
     <Card className="Card_activity" sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
         <span>{item.title}</span> 
        </Typography>
        <hr/>
        <span className="Add_items">Items</span>
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


