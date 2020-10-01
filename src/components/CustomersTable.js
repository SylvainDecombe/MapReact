import React, { useState } from 'react';
import { Button, Table } from "reactstrap";

const data =  [
    { id: 1, prenom: 'Wasif', nom: 'Baba', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', pays: 'France', ville: 'Angoulême', posy: '90', posx: '16'},
    { id: 2, prenom: 'Ali', nom: 'Baba', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', pays: 'France', ville: 'Angoulême', posy: '90', posx: '16'},
    { id: 3, prenom: 'Saad', nom: 'Baba', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', pays: 'France', ville: 'Angoulême', posy: '90', posx: '16'},
    { id: 4, prenom: 'Asad', nom: 'Baba', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', pays: 'France', ville: 'Angoulême', posy: '90', posx: '16'},
];

function CustomersTable ({ showBtn,
                             toggleModalCustomerAdd,
                             toggleModalCustomerView,
                             toggleModalCustomerEdit,
                             toggleModalCustomerDelete,
                            }){

    const [customers, setCustomers] = useState(data);
    const view = (id) => toggleModalCustomerView(customers.find(item => item.id === id));
    const edit = (id) => toggleModalCustomerEdit(customers.find(item => item.id === id));
    const deleteCustomer = (id) => toggleModalCustomerDelete(customers.find(item => item.id === id));

    return (
        <>
            {showBtn ? (
                <div className="pb-2" style={{textAlign: "right"}}>
                    <Button className="btn btn-dark" onClick={() => toggleModalCustomerAdd()}>
                        <i className="pi pi-user-plus mr-2"/>Ajouter nouveau client
                    </Button>
                </div>
            ):(<h2 className="text-center pb-2">Liste des clients</h2>)}
            <Table size="sm" className="table-striped table">
                <thead>
                <tr>
                    <th style={{textAlign: "center"}}>Prénom</th>
                    <th style={{textAlign: "center"}}>Nom</th>
                    <th style={{textAlign: "center"}}>Téléphone</th>
                    <th style={{textAlign: "center"}}>Adresse</th>
                    <th style={{textAlign: "center"}}>Code postal</th>
                    <th style={{textAlign: "center"}}>Pays</th>
                    <th style={{textAlign: "center"}}>Ville</th>
                    {showBtn ? (
                    <th></th>
                    ):null}
                </tr>
                </thead>
                <tbody>
                {
                    customers.map((customer, index) => (
                        <tr key={index}>
                            <td style={{textAlign: "center"}}>{customer.prenom}</td>
                            <td style={{textAlign: "center"}}>{customer.nom}</td>
                            <td style={{textAlign: "center"}}>{customer.tel}</td>
                            <td style={{textAlign: "center"}}>{customer.adresse}</td>
                            <td style={{textAlign: "center"}}>{customer.postal}</td>
                            <td style={{textAlign: "center"}}>{customer.pays}</td>
                            <td style={{textAlign: "center"}}>{customer.ville}</td>
                            {showBtn ? (
                            <td  style={{textAlign: "right"}}>
                                <div className="btn-group">
                                    <Button className="btn btn-info" onClick={() => view(customer.id)}>
                                        <i className="pi pi-eye mr-1"/>Voirs</Button>
                                    <Button className="btn btn-warning" onClick={() => edit(customer.id)}>
                                        <i className="pi pi-pencil mr-1"/>Editer</Button>
                                    <Button className="btn btn-danger" onClick={() => deleteCustomer(customer.id)}>
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


export {CustomersTable};
