import React, { useState } from 'react';
import { Button, Table } from "reactstrap";

const data =  [
    { id: 1, firstname: 'Wasif', lastname: 'Baba',email: 'test@test.ru', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', ville: 'Angoulême', role: 'ADMIN'},
    { id: 2, firstname: 'Ali', lastname: 'Baba',email: 'test@test.ru', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', ville: 'Angoulême', role: 'ADMIN'},
    { id: 3, firstname: 'Saad', lastname: 'Baba',email: 'test@test.ru', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', ville: 'Angoulême', role: 'ADMIN'},
    { id: 4, firstname: 'Asad', lastname: 'Baba',email: 'test@test.ru', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', ville: 'Angoulême', role: 'ADMIN'},
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
                            <td style={{textAlign: "center"}}>{user.firstname}</td>
                            <td style={{textAlign: "center"}}>{user.lastname}</td>
                            <td style={{textAlign: "center"}}>{user.email}</td>
                            <td style={{textAlign: "center"}}>{user.tel}</td>
                            <td style={{textAlign: "center"}}>{user.adresse}</td>
                            <td style={{textAlign: "center"}}>{user.postal}</td>
                            <td style={{textAlign: "center"}}>{user.ville}</td>
                            {showBtn ? (
                                <td style={{textAlign: "right"}}>
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
