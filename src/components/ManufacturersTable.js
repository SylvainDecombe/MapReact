import React, {useState} from 'react';
import { Button, Table } from "reactstrap";
import ManufacturersService from "./../services/manufacturers-service";

const dataA =  ManufacturersService.findAll();

const data =  [
    { id: 1, nom: 'Baba',email: 'test@terst.ru', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', pays: 'France', ville: 'Angoulême', siret: '0000000000000000000X', posx: '12', posy:'80'},
    { id: 2, nom: 'Baba',email: 'test@terst.ru', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', pays: 'France', ville: 'Angoulême', siret: '0000000000000000000X', posx: '12', posy:'80'},
    { id: 3, nom: 'Baba',email: 'test@terst.ru', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', pays: 'France', ville: 'Angoulême', siret: '0000000000000000000X', posx: '12', posy:'80'},
    { id: 4, nom: 'Baba',email: 'test@terst.ru', tel: '0606060606', adresse: '2 rue de la joie', postal: '16000', pays: 'France', ville: 'Angoulême', siret: '0000000000000000000X', posx: '12', posy:'80'},
];

function ManufacturersTable ({ showBtn,
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
                    <th style={{textAlign: "center"}}>Nom</th>
                    <th style={{textAlign: "center"}}>Téléphone</th>
                    <th style={{textAlign: "center"}}>Adresse</th>
                    <th style={{textAlign: "center"}}>Code postal</th>
                    <th style={{textAlign: "center"}}>Pays</th>
                    <th style={{textAlign: "center"}}>Ville</th>
                    <th style={{textAlign: "center"}}>Siret</th>
                    {showBtn ? (
                        <th></th>
                    ):null}
                </tr>
                </thead>
                <tbody>
                {
                    manufacturers.map((manufacturer, index) => (
                        <tr key={index}>
                            <td style={{textAlign: "center"}}>{manufacturer.nom}</td>
                            <td style={{textAlign: "center"}}>{manufacturer.tel}</td>
                            <td style={{textAlign: "center"}}>{manufacturer.adresse}</td>
                            <td style={{textAlign: "center"}}>{manufacturer.postal}</td>
                            <td style={{textAlign: "center"}}>{manufacturer.pays}</td>
                            <td style={{textAlign: "center"}}>{manufacturer.ville}</td>
                            <td style={{textAlign: "center"}}>{manufacturer.siret}</td>
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