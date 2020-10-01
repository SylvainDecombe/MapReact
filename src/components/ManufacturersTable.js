import React, {useState} from 'react';
import { Button, Table } from "reactstrap";

const data =  [
    { id: 1, name: 'Wasif', age: 21, email: 'wasif@ghfjgemail.com' },
    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
]

function ManufacturersTable ({ showBtn,
                             toggleModalManufacturerAdd,
                             toggleModalManufacturerView,
                             toggleModalManufacturerEdit,
                             toggleModalManufacturerDelete}){


    const [manufacturers, setManufacturers] = useState(data);

    const view = (id) => toggleModalManufacturerView(manufacturers.find(item => item.id === id));
    const edit = (id) => toggleModalManufacturerEdit(manufacturers.find(item => item.id === id));
    const deleteManufacturer = (id) => toggleModalManufacturerDelete(manufacturers.find(item => item.id === id));

    return (
        <>
            {showBtn ? (
                <div className="pb-2" style={{textAlign: "right"}}>
                    <Button className="btn btn-dark" onClick={() => toggleModalManufacturerAdd()}>
                        <i className="pi pi-user-plus mr-2"/>Ajouter nouveau fabricant
                    </Button>
                </div>
            ):(<h2 className="text-center pb-2">Liste des fabricants</h2>)}
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
                    manufacturers.map((manufacturer, index) => (
                        <tr key={index}>
                            <td>{manufacturer.id}</td>
                            <td>{manufacturer.name}</td>
                            <td>{manufacturer.age}</td>
                            <td>{manufacturer.email}</td>
                            {showBtn ? (
                                <td  style={{textAlign: "right"}}>
                                    <div className="btn-group">
                                        <Button className="btn btn-info" onClick={() => view(manufacturer.id)}>
                                            <i className="pi pi-eye mr-1"/>Voirs</Button>
                                        <Button className="btn btn-warning" onClick={() => edit(manufacturer.id)}>
                                            <i className="pi pi-pencil mr-1"/>Editer</Button>
                                        <Button className="btn btn-danger" onClick={() => deleteManufacturer(manufacturer.id)}>
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


export {ManufacturersTable};

