import React, { useState } from 'react';
import { Button, Table } from "reactstrap";

const data =  [
    { id: 1, name: 'Wasif', age: 21, email: 'wasif@ghfjgemail.com' },
    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
];

function UsersTable ({ showBtn,
                             toggleModalUserAdd,
                             toggleModalUserView,
                             toggleModalUserEdit,
                             toggleModalUserDelete}){

    const [users, setUsers] = useState(data);

    const view = (id) => toggleModalUserView(users.find(item => item.id === id));
    const edit = (id) => toggleModalUserEdit(users.find(item => item.id === id));
    const deleteUser = (id) => toggleModalUserDelete(users.find(item => item.id === id));

    return (
        <>
            {showBtn ? (
                <div className="pb-2" style={{textAlign: "right"}}>
                    <Button className="btn btn-dark" onClick={() => toggleModalUserAdd()}>
                        <i className="pi pi-user-plus mr-2"/>Ajouter nouvel utilisateur
                    </Button>
                </div>
            ):(<h2 className="text-center pb-2">Liste des Utilisateurs</h2>)}
            <Table size="sm" className="table-striped table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>email</th>
                    {showBtn ? (
                        <th></th>
                    ):null}
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            {showBtn ? (
                                <td  style={{textAlign: "right"}}>
                                    <div className="btn-group">
                                        <Button className="btn btn-info" onClick={() => view(user.id)}>
                                            <i className="pi pi-eye mr-1"/>Voirs</Button>
                                        <Button className="btn btn-warning" onClick={() => edit(user.id)}>
                                            <i className="pi pi-pencil mr-1"/>Editer</Button>
                                        <Button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
                                            <i className="pi pi-trash mr-1"/>Supprimer
                                        </Button>
                                    </div>
                                </td>
                            ):null}
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </>
    )
}


export {UsersTable};
