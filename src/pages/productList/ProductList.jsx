import React, { useState } from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ProductList({ data }) {
    const [products, setProducts] = useState(data);

    const removeUserHandler = (id) => {
        setProducts(products.filter((user) => user.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "image",
            headerName: "Product Image",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListProduct">
                        <img
                            src={params.row.image}
                            alt=""
                            className="productListImg"
                        />
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: "type",
            headerName: "Product Type",
            width: 200,
        },
        {
            field: "price",
            headerName: "Price",
            sortable: false,
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => removeUserHandler(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                checkboxSelection
            />
        </div>
    );
}
