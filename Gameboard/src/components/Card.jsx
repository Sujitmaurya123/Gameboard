import * as React from 'react';

import {Card,CardContent,CardMedia,Typography} from '@mui/material'
import { Box } from '@mui/material';

export default function MediaCard() {
  return (
  
   <Box sx={{ display:"flex",padding:"30px"}}>

    <Box sx={{ padding:"50px"}}>

   
    <Card sx={{ maxWidth: 300 ,maxHeight:80,display:"flex",margin:"5px",backgroundColor:"green",color:"white"}}>
      <CardMedia
        sx={{ height: 40,width:40 ,borderRadius:'50%'}}
        image="gaming.png"
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom  component="div">
        Mathew John
        </Typography>
        <Typography variant="body2" >
         GT1234X
        </Typography>
      </CardContent>

       <Typography variant="body2" sx={{width:"10px",height:"50px",backgroundColor:"white",margin:"14px",padding:"3px"}}>
         
        </Typography>
        <Typography variant="body2" sx={{margin:" 17px ",fontSize:40}}>
            34
        </Typography>
    </Card>

     <Card sx={{ maxWidth: 300 ,maxHeight:80,display:"flex",margin:"5px",backgroundColor:"gray"}}>
      <CardMedia
        sx={{ height: 40,width:40 ,borderRadius:'50%'}}
         image="gaming.png"
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom  component="div">
        Mathew John
        </Typography>
        <Typography variant="body2" color="text.secondary">
         GT1234X
        </Typography>
      </CardContent>

       <Typography variant="body2" sx={{width:"10px",height:"50px",backgroundColor:"black",margin:"14px",padding:"3px"}}>
         
        </Typography>
        <Typography variant="body2" sx={{margin:" 17px ",fontSize:40}}>
            34
        </Typography>
    </Card>
     </Box>

     <Box sx={{padding:"90px"}}>

     <Card sx={{ maxWidth: 300 ,maxHeight:80,display:"flex",margin:"5px",backgroundColor:"gray"}}>
      <CardMedia
        sx={{ height: 40,width:40 ,borderRadius:'50%'}}
         image="gaming.png"
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom  component="div">
        Mathew John
        </Typography>
        <Typography variant="body2" color="text.secondary">
         GT1234X
        </Typography>
      </CardContent>

       <Typography variant="body2" sx={{width:"10px",height:"50px",backgroundColor:"black",margin:"14px",padding:"3px"}}>
         
        </Typography>
        <Typography variant="body2" sx={{margin:" 17px ",fontSize:40}}>
            34
        </Typography>
    </Card>
     </Box>
     </Box>
    
  );
}