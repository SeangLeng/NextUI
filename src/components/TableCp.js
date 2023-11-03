'use client';
import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell
} from "@nextui-org/react";

export default function Component_table() {
    const data = [
        {
            "id": 1,
            "name": "Tony Reichert",
            "position": "CEO",
            "status": "Active",
            "action": {
                "Update": "update",
                "Edit": "editor"
            }
        }, {
            "id": 2,
            "name": "Zoey Lang",
            "position": "Technical Lead",
            "status": "Paused",
            "action": {
                "Update": "update",
                "Edit": "editor"
            }
        }, {
            "id": 3,
            "name": "Jane Fisher",
            "position": "Senior Developer",
            "status": "Active",
            "action": {
                "Update": "update",
                "Edit": "editor"
            }
        }, {
            "id": 4,
            "name": "William Howard",
            "position": "Community Manager",
            "status": "Vacation",
            "action": {
                "Update": "update",
                "Edit": "editor"
            }
        }
    ]

    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>ID</TableColumn>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
                <TableColumn>STATUS</TableColumn>
                <TableColumn>ACTION</TableColumn>
            </TableHeader>
            <TableBody> {
                data ?. map(value => (
                    <TableRow key={
                        value.id
                    }>
                        <TableCell>{
                            value.id
                        }</TableCell>
                        <TableCell>{
                            value.name
                        }</TableCell>
                        <TableCell>{
                            value.position
                        }</TableCell>
                        <TableCell>{
                            value.status
                        }</TableCell>
                        <TableCell className="text-blue-500 font-semibold flex gap-5">
                            <a href="https://www.w3schools.com/" className="px-3 rounded-lg py-2 bg-blue-300 text-blue-800">
                                {
                                value.action.Update
                            }</a>
                            <a href="https://www.w3schools.com/python/" className="px-3 rounded-lg py-2 bg-red-300 text-red-800">
                                {
                                value.action.Edit
                            }</a>
                        </TableCell>
                    </TableRow>
                ))
            } </TableBody>
        </Table>
    );
}
