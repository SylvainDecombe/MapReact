import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {TabPanel, TabView} from "primereact/tabview";
import {CustomersTable} from "../../components/CustomersTable";
import {ManufacturersTable} from "../../components/ManufacturersTable";
import {UsersTable} from "../../components/UsersTable";
import {UserService} from "../../services/user-service";
import {ManufacturersService} from "../../services/manufacturers-service";
import {CustomersService} from "../../services/customers-service";

function Admin() {
    /* Partie Customer */
    const toggleModalCustomerAdd = () => setModalCustomerAdd(!modalCustomerAdd);

    const saveCustomer = () => console.log("saveCustomer");
    const updateCustomer = () => console.log("updateCustomer");
    const deleteCustomer = () => console.log("deleteCustomer");

    const saveManufacturer = () => console.log("saveManufacturer");
    const updateManufacturer = () => console.log("updateManufacturer");
    const deleteManufacturer = () => console.log("deleteManufacturer");

    const saveUser = () => console.log("saveUser");
    const updateUser = () => console.log("updateUser");
    const deleteUser = () => console.log("deleteUser");

    const [modalCustomerViewData, setModalCustomerViewData] = useState({});
    const toggleModalCustomerView = (customer) => {
        setModalCustomerViewData(customer);
        setModalCustomerView(!modalCustomerView)
    };
    const [modalCustomerDeleteData, setModalCustomerDeleteData] = useState({});
    const toggleModalCustomerDelete = (customer) => {
        setModalCustomerDeleteData(customer);
        setModalCustomerDelete(!modalCustomerDelete)
    };
    const [modalCustomerEditData, setModalCustomerEditData] = useState({});
    const toggleModalCustomerEdit = (customer) => {
        setModalCustomerEditData(customer);
        setModalCustomerEdit(!modalCustomerEdit)
    };
    const [modalCustomerEdit, setModalCustomerEdit] = useState(false);
    const [modalCustomerDelete, setModalCustomerDelete] = useState(false);
    const [modalCustomerView, setModalCustomerView] = useState(false);
    const [modalCustomerAdd, setModalCustomerAdd] = useState(false);



    /* Partie Manufacturer*/
    const toggleModalManufacturerAdd = () => setModalManufacturerAdd(!modalManufacturerAdd);
    const [modalManufacturerViewData, setModalManufacturerViewData] = useState({});
    const toggleModalManufacturerView = (manufacturer) => {
        setModalManufacturerViewData(manufacturer);
        setModalManufacturerView(!modalManufacturerView)
    };
    const [modalManufacturerDeleteData, setModalManufacturerDeleteData] = useState({});
    const toggleModalManufacturerDelete = (manufacturer) => {
        setModalManufacturerDeleteData(manufacturer);
        setModalManufacturerDelete(!modalManufacturerDelete)
    };
    const [modalManufacturerEditData, setModalManufacturerEditData] = useState({});
    const toggleModalManufacturerEdit = (manufacturer) => {
        setModalManufacturerEditData(manufacturer);
        setModalManufacturerEdit(!modalManufacturerEdit)
    };
    const [modalManufacturerEdit, setModalManufacturerEdit] = useState(false);
    const [modalManufacturerDelete, setModalManufacturerDelete] = useState(false);
    const [modalManufacturerView, setModalManufacturerView] = useState(false);
    const [modalManufacturerAdd, setModalManufacturerAdd] = useState(false);

    /* Partie User */
    const toggleModalUserAdd = () => setModalUserAdd(!modalUserAdd);
    const [modalUserViewData, setModalUserViewData] = useState({});
    const toggleModalUserView = (user) => {
        setModalUserViewData(user);
        setModalUserView(!modalUserView)
    };
    const [modalUserDeleteData, setModalUserDeleteData] = useState({});
    const toggleModalUserDelete = (user) => {
        setModalUserDeleteData(user);
        setModalUserDelete(!modalUserDelete)
    };
    const [modalUserEditData, setModalUserEditData] = useState({});
    const toggleModalUserEdit = (user) => {
        setModalUserEditData(user);
        setModalUserEdit(!modalUserEdit)
    };
    const [modalUserEdit, setModalUserEdit] = useState(false);
    const [modalUserDelete, setModalUserDelete] = useState(false);
    const [modalUserView, setModalUserView] = useState(false);
    const [modalUserAdd, setModalUserAdd] = useState(false);



    return (
        <>
            {/*Customer*/}
            <div>
                <div id="CustomerAdd">
                    <Modal  isOpen={modalCustomerAdd} toggle={toggleModalCustomerAdd} >
                        <ModalHeader toggle={toggleModalCustomerAdd}>Ajouter un nouveau client</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div>
                                    <label>Prénom :</label>
                                    <div className="controls">
                                        <input id="firstname" name="firstname"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label >Nom :</label>
                                    <div className="controls">
                                        <input id="email" name="email"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Téléphone :</label>
                                    <div className="controls">
                                        <input id="tel" name="tel"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Adresse :</label>
                                    <div className="controls">
                                        <input id="adresse" name="adresse"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Code postal :</label>
                                    <div className="controls">
                                        <input id="postal" name="postal"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Pays :</label>
                                    <div className="controls">
                                        <input id="pays" name="pays"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Ville :</label>
                                    <div className="controls">
                                        <input id="ville" name="ville"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Position X :</label>
                                    <div className="controls">
                                        <input id="posx" name="posx"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Position Y :</label>
                                    <div className="controls">
                                        <input id="posy" name="posy"
                                               className="form-control"/>
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={saveCustomer}>Créer</Button>
                            <Button color="danger" onClick={toggleModalCustomerAdd}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div id="CustomerView">
                    <Modal  isOpen={modalCustomerView} toggle={toggleModalCustomerView} >
                        <ModalHeader toggle={toggleModalCustomerView}>Informations du client</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div>
                                    <label>Prénom :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="prenom" name="prenom"
                                               className="form-control"
                                               defaultValue={modalCustomerViewData.prenom}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Nom :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="nom" name="nom"
                                               className="form-control"
                                               defaultValue={modalCustomerViewData.nom}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label >Téléphone :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="tel" name="tel"
                                               className="form-control"
                                               defaultValue={modalCustomerViewData.tel}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Adresse :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="adresse" name="adresse"
                                               className="form-control"
                                               defaultValue={modalCustomerViewData.adresse}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Code postal :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="postal" name="postal"
                                               className="form-control"
                                               defaultValue={modalCustomerViewData.postal}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Pays :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="pays" name="pays"
                                               className="form-control"
                                               defaultValue={modalCustomerViewData.pays}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Ville :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="ville" name="ville"
                                               className="form-control"
                                               defaultValue={modalCustomerViewData.ville}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Position X :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="posx" name="posx"
                                               className="form-control"
                                               defaultValue={modalCustomerViewData.posx}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Position Y :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="posy" name="posy"
                                               className="form-control"
                                               defaultValue={modalCustomerViewData.posy}
                                        />
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={toggleModalCustomerView}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div id="CustomerEdit">
                    <Modal  isOpen={modalCustomerEdit} toggle={toggleModalCustomerEdit} >
                        <ModalHeader toggle={toggleModalCustomerEdit}>Informations du client</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div>
                                    <label>Prénom :</label>
                                    <div className="controls">
                                        <input id="prenom" name="prenom"
                                               className="form-control"
                                               defaultValue={modalCustomerEditData.prenom}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Nom :</label>
                                    <div className="controls">
                                        <input id="nom" name="nom"
                                               className="form-control"
                                               defaultValue={modalCustomerEditData.nom}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label >Téléphone :</label>
                                    <div className="controls">
                                        <input id="tel" name="tel"
                                               className="form-control"
                                               defaultValue={modalCustomerEditData.tel}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Adresse :</label>
                                    <div className="controls">
                                        <input id="adresse" name="adresse"
                                               className="form-control"
                                               defaultValue={modalCustomerEditData.adresse}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Code postal :</label>
                                    <div className="controls">
                                        <input id="postal" name="postal"
                                               className="form-control"
                                               defaultValue={modalCustomerEditData.postal}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Pays :</label>
                                    <div className="controls">
                                        <input id="pays" name="pays"
                                               className="form-control"
                                               defaultValue={modalCustomerEditData.pays}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Ville :</label>
                                    <div className="controls">
                                        <input id="ville" name="ville"
                                               className="form-control"
                                               defaultValue={modalCustomerEditData.ville}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Position X :</label>
                                    <div className="controls">
                                        <input id="posx" name="posx"
                                               className="form-control"
                                               defaultValue={modalCustomerEditData.posx}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Position Y :</label>
                                    <div className="controls">
                                        <input id="posy" name="posy"
                                               className="form-control"
                                               defaultValue={modalCustomerEditData.posy}
                                        />
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={updateCustomer}>Mettre à jour</Button>
                            <Button color="danger" onClick={toggleModalCustomerEdit}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div id="CustomerDelete">
                    <Modal  isOpen={modalCustomerDelete} toggle={toggleModalCustomerDelete} >
                        <ModalHeader toggle={toggleModalCustomerDelete}>Supprimer le client</ModalHeader>
                        <ModalBody>
                            Etes-vous sur de vouloir supprimer le client {modalCustomerDeleteData.name } ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={deleteCustomer}>Bien sur !</Button>
                            <Button color="danger" onClick={toggleModalCustomerDelete}>Oups pardon</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

            {/*Manufacturer*/}
            <div>
                <div id="ManufacturerAdd">
                    <Modal  isOpen={modalManufacturerAdd} toggle={toggleModalManufacturerAdd} >
                        <ModalHeader toggle={toggleModalManufacturerAdd}>Ajouter un nouveau fabricant</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div>
                                    <label >Nom :</label>
                                    <div className="controls">
                                        <input id="email" name="email"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Email :</label>
                                    <div className="controls">
                                        <input id="email" name="email"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Adresse :</label>
                                    <div className="controls">
                                        <input id="adresse" name="adresse"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Code postal :</label>
                                    <div className="controls">
                                        <input id="postal" name="postal"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Ville :</label>
                                    <div className="controls">
                                        <input id="ville" name="ville"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Pays :</label>
                                    <div className="controls">
                                        <input id="pays" name="pays"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Siret :</label>
                                    <div className="controls">
                                        <input id="siret" name="siret"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Position X :</label>
                                    <div className="controls">
                                        <input id="posx" name="posx"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Position Y :</label>
                                    <div className="controls">
                                        <input id="posy" name="posy"
                                               className="form-control"/>
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={saveManufacturer}>Créer</Button>
                            <Button color="danger" onClick={toggleModalManufacturerAdd}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                
                <div id="ManufacturerView">
                    <Modal  isOpen={modalManufacturerView} toggle={toggleModalManufacturerView} >
                        <ModalHeader toggle={toggleModalManufacturerView}>Informations du fabricant</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div>
                                    <label >Nom :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="nom" name="nom"
                                               className="form-control"
                                               defaultValue={modalManufacturerViewData.nom}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Email :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="email" name="email"
                                               className="form-control"
                                               defaultValue={modalManufacturerViewData.email}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Adresse :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="adresse" name="adresse"
                                               className="form-control"
                                               defaultValue={modalManufacturerViewData.adresse}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Code postal :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="postal" name="postal"
                                               className="form-control"
                                               defaultValue={modalManufacturerViewData.postal}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Ville :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="ville" name="ville"
                                               className="form-control"
                                               defaultValue={modalManufacturerViewData.ville}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Pays :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="pays" name="pays"
                                               className="form-control"
                                               defaultValue={modalManufacturerViewData.pays}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Siret :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="siret" name="siret"
                                               className="form-control"
                                               defaultValue={modalManufacturerViewData.siret}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Position X :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="posx" name="posx"
                                               className="form-control"
                                               defaultValue={modalManufacturerViewData.posx}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Position Y :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="posy" name="posy"
                                               className="form-control"
                                               defaultValue={modalManufacturerViewData.posy}
                                        />
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={toggleModalManufacturerView}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div id="ManufacturerEdit">
                    <Modal  isOpen={modalManufacturerEdit} toggle={toggleModalManufacturerEdit} >
                        <ModalHeader toggle={toggleModalManufacturerEdit}>Informations du fabricant</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div>
                                    <label >Nom :</label>
                                    <div className="controls">
                                        <input id="nom" name="nom"
                                               className="form-control"
                                               defaultValue={modalManufacturerEditData.nom}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Email :</label>
                                    <div className="controls">
                                        <input id="email" name="email"
                                               className="form-control"
                                               defaultValue={modalManufacturerEditData.email}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Adresse :</label>
                                    <div className="controls">
                                        <input id="adresse" name="adresse"
                                               className="form-control"
                                               defaultValue={modalManufacturerEditData.adresse}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Code postal :</label>
                                    <div className="controls">
                                        <input id="postal" name="postal"
                                               className="form-control"
                                               defaultValue={modalManufacturerEditData.postal}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Ville :</label>
                                    <div className="controls">
                                        <input id="ville" name="ville"
                                               className="form-control"
                                               defaultValue={modalManufacturerEditData.ville}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Pays :</label>
                                    <div className="controls">
                                        <input id="pays" name="pays"
                                               className="form-control"
                                               defaultValue={modalManufacturerEditData.pays}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Siret :</label>
                                    <div className="controls">
                                        <input id="siret" name="siret"
                                               className="form-control"
                                               defaultValue={modalManufacturerEditData.siret}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Position X :</label>
                                    <div className="controls">
                                        <input id="posx" name="posx"
                                               className="form-control"
                                               defaultValue={modalManufacturerEditData.posx}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Position Y :</label>
                                    <div className="controls">
                                        <input id="posy" name="posy"
                                               className="form-control"
                                               defaultValue={modalManufacturerEditData.posy}
                                        />
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={updateManufacturer}>Mettre à jour</Button>
                            <Button color="danger" onClick={toggleModalManufacturerEdit}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div id="CustomerDelete">
                    <Modal  isOpen={modalManufacturerDelete} toggle={toggleModalManufacturerDelete} >
                        <ModalHeader toggle={toggleModalManufacturerDelete}>Supprimer le client</ModalHeader>
                        <ModalBody>
                            Etes-vous sur de vouloir supprimer le fabricant {modalManufacturerDeleteData.name } ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={deleteManufacturer}>Bien sur !</Button>
                            <Button color="danger" onClick={toggleModalManufacturerDelete}>Oups pardon</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

            {/*User*/}
            <div>
                <div id="UserAdd">
                    <Modal  isOpen={modalUserAdd} toggle={toggleModalUserAdd} >
                        <ModalHeader toggle={toggleModalUserAdd}>Ajouter un nouvel utilisateur</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div className="">
                                    <label>Prénom :</label>
                                    <div className="controls">
                                        <input id="firstname" name="firstname"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Nom :</label>
                                    <div className="controls">
                                        <input id="lastname" name="lastname"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Mot de passe :</label>
                                    <div className="controls">
                                        <input id="password" name="password"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Email :</label>
                                    <div className="controls">
                                        <input id="email" name="email"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Téléphone :</label>
                                    <div className="controls">
                                        <input id="tel" name="tel"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Adresse :</label>
                                    <div className="controls">
                                        <input id="adresse" name="adresse"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Code postal :</label>
                                    <div className="controls">
                                        <input id="postal" name="postal"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Ville :</label>
                                    <div className="controls">
                                        <input id="ville" name="ville"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Rôle :</label>
                                    <div className="controls">
                                        <input id="role" name="role"
                                               className="form-control"/>
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={saveUser}>Créer</Button>
                            <Button color="danger" onClick={toggleModalUserAdd}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                
                <div id="UserView">
                    <Modal  isOpen={modalUserView} toggle={toggleModalUserView} >
                        <ModalHeader toggle={toggleModalUserView}>Informations de l'utilisateur</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div className="">
                                    <label>Prénom :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="firstname" name="firstname"
                                               className="form-control"
                                               defaultValue={modalUserViewData.firstname}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Nom :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="lastname" name="lastname"
                                               className="form-control"
                                               defaultValue={modalUserViewData.lastname}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Email :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="email" name="email"
                                               className="form-control"
                                               defaultValue={modalUserViewData.email}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Téléphone :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="tel" name="tel"
                                               className="form-control"
                                               defaultValue={modalUserViewData.tel}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Adresse :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="adresse" name="adresse"
                                               className="form-control"
                                               defaultValue={modalUserViewData.adresse}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Code postal :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="postal" name="postal"
                                               className="form-control"
                                               defaultValue={modalUserViewData.postal}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Ville :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="ville" name="ville"
                                               className="form-control"
                                               defaultValue={modalUserViewData.ville}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Rôle :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="role" name="role"
                                               className="form-control"
                                               defaultValue={modalUserViewData.role}
                                        />
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={toggleModalUserView}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div id="UserEdit">
                    <Modal  isOpen={modalUserEdit} toggle={toggleModalUserEdit} >
                        <ModalHeader toggle={toggleModalUserEdit}>Mettre à jour l'utilisateur</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div className="">
                                    <label>Prénom :</label>
                                    <div className="controls">
                                        <input id="firstname" name="firstname"
                                               className="form-control"
                                               defaultValue={modalUserEditData.firstname}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Nom :</label>
                                    <div className="controls">
                                        <input id="lastname" name="lastname"
                                               className="form-control"
                                               defaultValue={modalUserEditData.lastname}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Email :</label>
                                    <div className="controls">
                                        <input id="email" name="email"
                                               className="form-control"
                                               defaultValue={modalUserEditData.email}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Téléphone :</label>
                                    <div className="controls">
                                        <input id="tel" name="tel"
                                               className="form-control"
                                               defaultValue={modalUserEditData.tel}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Adresse :</label>
                                    <div className="controls">
                                        <input id="adresse" name="adresse"
                                               className="form-control"
                                               defaultValue={modalUserEditData.adresse}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Code postal :</label>
                                    <div className="controls">
                                        <input id="postal" name="postal"
                                               className="form-control"
                                               defaultValue={modalUserEditData.postal}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Ville :</label>
                                    <div className="controls">
                                        <input id="ville" name="ville"
                                               className="form-control"
                                               defaultValue={modalUserEditData.ville}
                                        />
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Rôle :</label>
                                    <div className="controls">
                                        <input id="role" name="role"
                                               className="form-control"
                                               defaultValue={modalUserEditData.role}
                                        />
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={updateUser}>Mettre à jour</Button>
                            <Button color="danger" onClick={toggleModalUserEdit}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div id="UserDelete">
                    <Modal  isOpen={modalUserDelete} toggle={toggleModalUserDelete} >
                        <ModalHeader toggle={toggleModalUserDelete}>Supprimer l'utilisateur</ModalHeader>
                        <ModalBody>
                            Etes-vous sur de vouloir supprimer l'utilisateur {modalUserDeleteData.name } ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={deleteUser}>Bien sur !</Button>
                            <Button color="danger" onClick={toggleModalUserDelete}>Oups pardon</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

            {/*Diffents TabView*/}
            <TabView activeIndex={0}>
                <TabPanel header="Clients">
                    <CustomersTable showBtn={true}
                                    toggleModalCustomerAdd={toggleModalCustomerAdd}
                                    toggleModalCustomerView={toggleModalCustomerView}
                                    toggleModalCustomerEdit={toggleModalCustomerEdit}
                                    toggleModalCustomerDelete={toggleModalCustomerDelete}
                    ></CustomersTable>
                </TabPanel>
                <TabPanel header="Fabricants">
                    <ManufacturersTable showBtn={true}
                                        toggleModalManufacturerAdd={toggleModalManufacturerAdd}
                                        toggleModalManufacturerView={toggleModalManufacturerView}
                                        toggleModalManufacturerEdit={toggleModalManufacturerEdit}
                                        toggleModalManufacturerDelete={toggleModalManufacturerDelete}
                    ></ManufacturersTable>
                </TabPanel>
                <TabPanel header="Utilisateurs">
                    <UsersTable showBtn={true}
                                toggleModalUserAdd={toggleModalUserAdd}
                                toggleModalUserView={toggleModalUserView}
                                toggleModalUserEdit={toggleModalUserEdit}
                                toggleModalUserDelete={toggleModalUserDelete}
                    ></UsersTable>
                </TabPanel>
            </TabView>
        </>
    );
}

export default Admin;
