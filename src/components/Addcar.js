import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
  } from "@mui/material";
  import React from "react";
  
  export default function AddCar({addCar}) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
      brand: "",
      model: "",
      color: "",
      fuel : "",
      year : "",
      price: ""
    });
    React.useEffect(() => {
        if (open) {
          setCar({
            brand: "",
            model: "",
            color: "",
            fuel: "",
            year: "",
            price: ""
          });
        }
      }, [open]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      addCar(car);
      setOpen(false);
      console.log("closed");
    };
  
    const handleCancel = () => {
      setOpen(false);
      console.log("cancelled");
    };
  
    const inputChanged = (event) => {
      setCar({...car, [event.target.name] : event.target.value});
    }
  
    return (
        <div>
            <Button onClick={handleClickOpen} variant="outlined">
                Add Car
            </Button>
    
            <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Add Car</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus={true}
                name="brand"
                onChange={inputChanged}
                margin="dense"
                label="Brand"
                fullWidth={true}
                variant="standard"
                value= {car.brand}
                />
                <TextField
                name="model"
                value= {car.model}
                margin="dense"
                label="Model"
                type="text"
                fullWidth={true}
                variant="standard"
                onChange={inputChanged}
                />
                <TextField
                name="color"
                value= {car.color}
                margin="dense"
                label="Color"
                type="text"
                fullWidth={true}
                variant="standard"
                onChange={inputChanged}
                />
                <TextField
                name="fuel"
                value= {car.fuel}
                margin="dense"
                label="Fuel"
                type="text"
                fullWidth={true}
                variant="standard"
                onChange={inputChanged}
                />
                <TextField
                name="year"
                value= {car.year}
                margin="dense"
                label="Year"
                type="text"
                fullWidth={true}
                variant="standard"
                onChange={inputChanged}
                />
                <TextField
                name="price"
                value= {car.price}
                margin="dense"
                label="Price"
                type="text"
                fullWidth={true}
                variant="standard"
                onChange={inputChanged}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Save</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </DialogActions>
            </Dialog>
      </div>
    );
  }