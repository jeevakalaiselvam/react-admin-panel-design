import React from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";

export default function UserList() {
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "username", headerName: "Username", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction Info",
            sortable: false,
            width: 160,
        },
    ];

    const rows = [
        {
            id: 1,
            username: "Jon Snow",
            avatar: "https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
            email: "jonsnow@got.com",
            status: "ACTIVE",
            transaction: "$120.00",
        },
        {
            id: 2,
            username: "Jon Snow",
            avatar: "https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
            email: "jonsnow@got.com",
            status: "ACTIVE",
            transaction: "$120.00",
        },
        {
            id: 3,
            username: "Jon Snow",
            avatar: "https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
            email: "jonsnow@got.com",
            status: "ACTIVE",
            transaction: "$120.00",
        },
        {
            id: 4,
            username: "Jon Snow",
            avatar: "https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
            email: "jonsnow@got.com",
            status: "ACTIVE",
            transaction: "$120.00",
        },
        {
            id: 5,
            username: "Jon Snow",
            avatar: "https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
            email: "jonsnow@got.com",
            status: "ACTIVE",
            transaction: "$120.00",
        },
        {
            id: 6,
            username: "Jon Snow",
            avatar: "https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
            email: "jonsnow@got.com",
            status: "INACTIVE",
            transaction: "$120.00",
        },
        {
            id: 7,
            username: "Jon Snow",
            avatar: "https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
            email: "jonsnow@got.com",
            status: "ACTIVE",
            transaction: "$120.00",
        },
        {
            id: 8,
            username: "Jon Snow",
            avatar: "https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
            email: "jonsnow@got.com",
            status: "INACTIVE",
            transaction: "$120.00",
        },
        {
            id: 9,
            username: "Jon Snow",
            avatar: "https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
            email: "jonsnow@got.com",
            status: "ACTIVE",
            transaction: "$120.00",
        },
        {
            id: 10,
            username: "Jon Snow",
            avatar: "https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
            email: "jonsnow@got.com",
            status: "ACTIVE",
            transaction: "$120.00",
        },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    );
}
