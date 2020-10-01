import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {TabPanel, TabView} from "primereact/tabview";
import {CustomersTable} from "../../components/CustomersTable";
import {ManufacturersTable} from "../../components/ManufacturersTable";
import {UsersTable} from "../../components/UsersTable";

function Admin() {
    /* Partie Customer */
    const toggleModalCustomerAdd = () => setModalCustomerAdd(!modalCustomerAdd);
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
                                <div className="">
                                    <label>Username :</label>
                                    <div className="controls">
                                        <input id="username" name="username"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >E-mail :</label>
                                    <div className="controls">
                                        <input id="email" name="email"
                                               className="form-control"/>
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={toggleModalCustomerAdd}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div id="CustomerView">
                    <Modal  isOpen={modalCustomerView} toggle={toggleModalCustomerView} >
                        <ModalHeader toggle={toggleModalCustomerView}>Informations du client</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                    <div className="">
                                        <label>Username :</label>
                                        <div className="controls">
                                            <input readOnly={true} id="username" name="username"
                                                   defaultValue={modalCustomerViewData.name }
                                                    className="form-control"/>
                                        </div>
                                    </div>
                                    <div className=" mt-2">
                                        <label >E-mail :</label>
                                        <div className="controls">
                                            <input readOnly={true} id="email" name="email"
                                                   defaultValue={modalCustomerViewData.email }
                                                   className="form-control"/>
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
                                <div className="">
                                    <label>Username :</label>
                                    <div className="controls">
                                        <input id="username" name="username"
                                               defaultValue={modalCustomerEditData.name }
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >E-mail :</label>
                                    <div className="controls">
                                        <input id="email" name="email"
                                               defaultValue={modalCustomerEditData.email }
                                               className="form-control"/>
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={toggleModalCustomerEdit}>Sauvegarder</Button>
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
                            <Button color="success" onClick={toggleModalCustomerDelete}>Bien sur !</Button>
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
                                <div className="">
                                    <label>Username :</label>
                                    <div className="controls">
                                        <input id="username" name="username"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >E-mail :</label>
                                    <div className="controls">
                                        <input id="email" name="email"
                                               className="form-control"/>
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={toggleModalManufacturerAdd}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                
                <div id="ManufacturerView">
                    <Modal  isOpen={modalManufacturerView} toggle={toggleModalManufacturerView} >
                        <ModalHeader toggle={toggleModalManufacturerView}>Informations du fabricant</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div className="">
                                    <label>Username :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="username" name="username"
                                               defaultValue={modalCustomerViewData.name }
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >E-mail :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="email" name="email"
                                               defaultValue={modalCustomerViewData.email }
                                               className="form-control"/>
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
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={toggleModalManufacturerEdit}>Sauvegarder</Button>
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
                            <Button color="success" onClick={toggleModalManufacturerDelete}>Bien sur !</Button>
                            <Button color="danger" onClick={toggleModalManufacturerDelete}>Oups pardon</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

            {/*User*/}
            <div>
                <div id="UserAdd">
                    <Modal  isOpen={modalUserAdd} toggle={toggleModalUserAdd} >
                        <ModalHeader toggle={toggleModalUserAdd}>Informations du client</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div className="">
                                    <label>Username :</label>
                                    <div className="controls">
                                        <input id="username" name="username"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >E-mail :</label>
                                    <div className="controls">
                                        <input id="email" name="email"
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
                            <Button color="danger" onClick={toggleModalUserAdd}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                
                <div id="UserView">
                    <Modal  isOpen={modalUserView} toggle={toggleModalUserView} >
                        <ModalHeader toggle={toggleModalUserView}>Informations du client</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div className="">
                                    <label>Username :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="username" name="username"
                                               defaultValue={modalUserViewData.name }
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >E-mail :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="email" name="email"
                                               defaultValue={modalUserViewData.email }
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Rôle :</label>
                                    <div className="controls">
                                        <input readOnly={true} id="role" name="role"
                                               defaultValue={modalUserViewData.email }
                                               className="form-control"/>
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
                        <ModalHeader toggle={toggleModalUserEdit}>Informations du client</ModalHeader>
                        <ModalBody>
                            <form className="form-horizontal">
                                <div className="">
                                    <label>Username :</label>
                                    <div className="controls">
                                        <input id="username" name="username"
                                               defaultValue={modalUserEditData.name }
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >E-mail :</label>
                                    <div className="controls">
                                        <input id="email" name="email"
                                               defaultValue={modalUserEditData.email }
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <label >Rôle :</label>
                                    <div className="controls">
                                        <input id="role" name="role"
                                               defaultValue={modalUserEditData.email }
                                               className="form-control"/>
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={toggleModalUserEdit}>Sauvegarder</Button>
                            <Button color="danger" onClick={toggleModalUserEdit}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div id="UserDelete">
                    <Modal  isOpen={modalUserDelete} toggle={toggleModalUserDelete} >
                        <ModalHeader toggle={toggleModalUserDelete}>Supprimer le client</ModalHeader>
                        <ModalBody>
                            Etes-vous sur de vouloir supprimer l'utilisateur {modalUserDeleteData.name } ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={toggleModalUserDelete}>Bien sur !</Button>
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
