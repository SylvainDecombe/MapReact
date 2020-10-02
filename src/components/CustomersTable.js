import React, {useEffect, useState} from 'react';
import { Button, Table } from "reactstrap";
import CustomersService from "./../services/customers-service";

function CustomersTable ({ showBtn,
                             toggleModalCustomerAdd,
                             toggleModalCustomerView,
                             toggleModalCustomerEdit,
                             toggleModalCustomerDelete,
                            }){

    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        CustomersService.findAll().then(
            result => {
                setCustomers(result);
            });
    },[])
    const view = (_id) => toggleModalCustomerView(customers.find(item => item._id === _id));
    const edit = (_id) => toggleModalCustomerEdit(customers.find(item => item._id === _id));
    const deleteCustomer = (_id) => toggleModalCustomerDelete(customers.find(item => item._id === _id));

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
                                    <Button className="btn btn-info" onClick={() => view(customer._id)}>
                                        <i className="pi pi-eye mr-1"/>Voirs</Button>
                                    <Button className="btn btn-warning" onClick={() => edit(customer._id)}>
                                        <i className="pi pi-pencil mr-1"/>Editer</Button>
                                    <Button className="btn btn-danger" onClick={() => deleteCustomer(customer._id)}>
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
