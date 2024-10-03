import { Rowing } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import '../styles/CardActivity.css'


export const CardActivity = ({item}) => {

   const DateFormat= (date)=>{
    console.log(date)
   console.log(new Date(date))
      
   }
  return (
    <div className="Container_activity">
     <Card className="Card_activity" sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
         <h2>{item.title}</h2> 
        </Typography>
        <hr/>
        <Typography variant="h5" component="div">
          {item.item?.description}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Notation:</Typography>
        <Typography variant="body2">
         {item.note}
          <br />
        
          <br/>
          <span><b>Date Start</b> {DateFormat(item.dateInicial)}</span><br/>
          <span><b>Date End</b> {item.dateFinal}</span>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
    </div>
  )
}


