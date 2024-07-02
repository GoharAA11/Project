import React, {  useState } from "react"
import { useContext,useEffect } from "react";
import { EventContext } from "../lib/Context";
import { Box, Button, MenuItem, Modal, Select, TextField } from "@mui/material"
import { FilterTypes, IEvent, events } from "../lib/types";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  export interface  Inputs{
    title:string
    date:string
    time:string
    cover:string
    type:string
    composer:string


    
}
interface Props{
event:IEvent
}
const initValue = {
    title: "",
    date: "",
    time: "",
    type: "",
    composer: "",
    cover: ""
}



export const CopyModal:React.FC<Props>=({event})=>{
    const [value, setValue] = useState(initValue)
    const context = useContext(EventContext)
    if (!context) {
        throw new Error("Out of provider...")
    }
   
    useEffect(() => {
        setValue({
            title: event.title,
            date: event.date,
            time: event.time,
            type:event.type,
            composer: event.composer,
            cover: event.cover
        })
    }, [])
    const [open, setOpen] = useState<boolean>(false)
    

    return <Box>
        
                    <Button  onClick={() => setOpen(true)} variant="contained">copy</Button>
                    <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={style}>
                <form >
                    <Box my={2}>
                        <TextField
                            variant="outlined"
                            label="title"
                            value={value.title}
                            onChange={e=>setValue({...value,title:e.target.value})}
                            
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            variant="outlined"
                            label="date"
                            value={value.date}
                            onChange={e=>setValue({...value,date:e.target.value})}
                      
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            variant="outlined"
                            label="time"
                            value={value.time}
                            onChange={e=>setValue({...value,time:e.target.value})}
                           
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            variant="outlined"
                            label="composer"
                            value={value.composer}
                            onChange={e=>setValue({...value,composer:e.target.value})}
                         
                        />
                    </Box>
                    <Box my={2}>
                       <Select sx={{width:200}}>
                           <MenuItem value="opera">opera</MenuItem>
                           <MenuItem value="ballet">ballet</MenuItem>
                       </Select>
                    </Box>
                    <Box my={2}>
                        <TextField
                            variant="outlined"
                        
                            label="cover"
                            value={value.cover}
                            onChange={e=>setValue({...value,cover:e.target.value})}
                        />
                    </Box>
                    <Button type="submit" variant="outlined"> save</Button>
                </form>
            </Box>
        </Modal>
</Box>




   
}