import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function UserList({ data }) {
    const [users, setUsers] = useState(data);

    const removeUserHandler = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "username",
            headerName: "Username",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img
                            src={params.row.avatar}
                            alt=""
                            className="userListImg"
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction",
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
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
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
                rows={users}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                checkboxSelection
            />
        </div>
    );
}
