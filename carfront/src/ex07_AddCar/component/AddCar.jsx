import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Button, TextField, Stack } from "@mui/material";

const AddCar = (props)=>{
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand : "",
        model : "",
        color : "",
        registrationNumber : "",
        modelYear : "",
        price : ""
    });

    const handleClickOpen = ()=>setOpen(true);
    const handleClickClose = ()=>setOpen(false);
    const handleChange = (e)=>setCar({...car, [e.target.name] : e.target.value});

    return (
        <div>
            <button onClick={handleClickOpen}>New Car</button>
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent></DialogContent>
                <DialogActions>
                    <button onClick={handleClickClose}>Cancel</button>
                    <button onClick={handleClickClose}>Save</button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddCar;
