import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { DialogTitle } from "@mui/material";

export default function EditCar({ editCar, params }) {
  const [open, setOpen] = React.useState(false);

  const [car, setCar] = React.useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    price: "",
    year: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setCar({
        brand: params.data.brand,
        model: params.data.model,
        color: params.data.color,
        fuel: params.data.fuel,
        year: params.data.year,
        price: params.data.price
    })
  };
  const handleSave = () => {
      console.log("Attempting to save");
      editCar(car, params.value);
      setOpen(false);
  };
  const inputChanged = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined">
        Edit Car
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit Car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus={true}
            name="brand"
            onChange={inputChanged}
            margin="dense"
            label="Brand"
            fullWidth={true}
            variant="standard"
            value={car.brand}
          />
           <TextField
             autoFocus={true}
              name="model"
              value= {car.model}
              margin="dense"
              label="Model"
              type="text"
              fullWidth
              variant="standard"
              onChange={inputChanged}
            />
            <TextField
              autoFocus={true}
              name="color"
              value= {car.color}
              margin="dense"
              label="Color"
              type="text"
              fullWidth
              variant="standard"
              onChange={inputChanged}
            />
            <TextField
              autoFocus={true}
              name="fuel"
              value= {car.fuel}
              margin="dense"
              label="Fuel"
              type="text"
              fullWidth
              variant="standard"
              onChange={inputChanged}
            />
            <TextField
              autoFocus={true}
              name="year"
              value= {car.year}
              margin="dense"
              label="Year"
              type="text"
              fullWidth
              variant="standard"
              onChange={inputChanged}
            />
            <TextField
              autoFocus={true}
              name="price"
              value= {car.price}
              margin="dense"
              label="Price"
              type="text"
              fullWidth
              variant="standard"
              onChange={inputChanged}
            />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}