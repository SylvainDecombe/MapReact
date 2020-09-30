import React from 'react';
import { Button, Table } from "reactstrap";

const customers =  [
    { id: 1, name: 'Wasif', age: 21, email: 'wasif@ghfjgemail.com' },
    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
]

function CustomersTable ({ showBtn, toggleModalCustomerView }){

    return (
        <>
            {showBtn ? (
                <div className="pb-2" style={{textAlign: "right"}}>
                    <Button className="btn btn-dark" >
                        <i className="pi pi-user-plus mr-2"/>Ajouter nouveau client
                    </Button>
                </div>
            ):null}
            <Table size="sm" className="table-striped table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>email</th>
                    <th></th>
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
                            <td  style={{textAlign: "right"}}>
                                <div className="btn-group">
                                    <Button className="btn btn-info" onClick={() => toggleModalCustomerView()}>
                                        <i className="pi pi-eye mr-1"/>Voirs</Button>
                                    <Button className="btn btn-warning" >
                                        <i className="pi pi-pencil mr-1"/>Editer</Button>
                                    <Button className="btn btn-danger">
                                        <i className="pi pi-trash mr-1"/>Supprimer
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </>
    )
}


export {CustomersTable};
