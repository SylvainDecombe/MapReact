import React, { useState } from 'react';
import { Button, Table } from "reactstrap";

const data =  [
    { id: 1, name: 'Wasif', age: 21, email: 'wasif@ghfjgemail.com' },
    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
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
                    customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.age}</td>
                            <td>{customer.email}</td>
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
