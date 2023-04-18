import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Addcar from "./Addcar";
import Editcar from "./EditCar";

function Carlist() {
  const [cars, setCars] = React.useState([]);

  

  useEffect(() => {
    fetchCars();
  }, []);

  const [columnDefs, setColumnDefs] = useState([
    { field: "brand", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "color", sortable: true, filter: true },
    { field: "fuel", sortable: true, filter: true },
    { field: "year", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    {
      headerName: "",
      width: 100,
      field: "_links.self.href",
      cellRenderer: (params) => (
        <Editcar editCar={editCar} params={params}></Editcar>
      ),
    },
    {
      headerName: "",
      width: 100,
      field: "_links.self.href",
      cellRenderer: (params) => (
        <IconButton
          color="error"
          onClick={() => deleteCar(params.value)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
]);

  const addCar = (car) => {
    console.log("attempting to add car");
    fetch("https://carrestapi.herokuapp.com/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    }).then((response) => {
      if (response.ok) {
        fetchCars();
      }
    });
  };
  const fetchCars = () => {
    fetch("https://carrestapi.herokuapp.com/cars")
      .then((response) => response.json())
      .then((data) => setCars(data._embedded.cars));
  };

  const deleteCar = (link) => {
    fetch(link, { method: "DELETE" }).then((response) => {
      if (response.ok) {
        fetchCars();
      }
    });
  };

  const editCar = (editCar, link) => {
    fetch(link, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editCar),
    }).then((response) => {
      if (response.ok) {
        fetchCars();
      }
    });
  };

  return (
    <>
      <Addcar addCar={addCar} />
      <div style={{ height: "100%", boxSizing: "border-box" }}>
        <div
          style={{ height: 600, width: "90%" }}
          className="ag-theme-material"
        >
          <AgGridReact
            rowData={cars}
            columnDefs={columnDefs}
            paginationPageSize={10}
            pagination={true}
          ></AgGridReact>
        </div>
      </div>
    </>
  );
}

export default Carlist;