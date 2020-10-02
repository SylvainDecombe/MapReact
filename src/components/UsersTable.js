import React, { useState, useEffect } from 'react';
import {  Button, Table } from "reactstrap";
import UsersService from "./../services/user-service";

function UsersTable({ 
    showBtn,
    toggleModalUserAdd,
    toggleModalUserView,
    toggleModalUserEdit,
    toggleModalUserDelete
}) {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        UsersService.findAll().then(
        result => {
            setUsers(result);
            console.log(result)
        });
    },[])

    const view = (_id) => toggleModalUserView(users.find(item => item._id === _id));
    const edit = (_id) => toggleModalUserEdit(users.find(item => item._id === _id));
    const deleteUser = (_id) => toggleModalUserDelete(users.find(item => item._id === _id));
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
                    <th style={{textAlign: "center"}}>Prénom</th>
                    <th style={{textAlign: "center"}}>Nom</th>
                    <th style={{textAlign: "center"}}>Email</th>
                    <th style={{textAlign: "center"}}>Téléphone</th>
                    <th style={{textAlign: "center"}}>Adresse</th>
                    <th style={{textAlign: "center"}}>Code postal</th>
                    <th style={{textAlign: "center"}}>Ville</th>
                    {showBtn ? (
                        <th></th>
                    ):null}
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index) => (
                        <tr key={index}>
                            <td style={{textAlign: "center"}}>{user.prenom}</td>
                            <td style={{textAlign: "center"}}>{user.nom}</td>
                            <td style={{textAlign: "center"}}>{user.email}</td>
                            <td style={{textAlign: "center"}}>{user.tel}</td>
                            <td style={{textAlign: "center"}}>{user.adresse}</td>
                            <td style={{textAlign: "center"}}>{user.postal}</td>
                            <td style={{textAlign: "center"}}>{user.ville}</td>
                            {showBtn ? (
                                <td style={{textAlign: "right"}}>
                                    <div className="btn-group">
                                        <Button className="btn btn-info" onClick={() => view(user._id)}>
                                            <i className="pi pi-eye mr-1"/>Voirs</Button>
                                        <Button className="btn btn-warning" onClick={() => edit(user._id)}>
                                            <i className="pi pi-pencil mr-1"/>Editer</Button>
                                        <Button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
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
export { UsersTable };
