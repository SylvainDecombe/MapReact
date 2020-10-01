import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {TabPanel, TabView} from "primereact/tabview";
import {CustomersTable} from "../../components/CustomersTable";
import {ManufacturersTable} from "../../components/ManufacturersTable";
import {UsersTable} from "../../components/UsersTable";
import ModalAddCustomer from "../../components/ModalAddCustomer";


function Admin() {

    const toggleModalCustomerEdit = () => setModalEdit(!modalEdit);
    const toggleModalCustomerView = () => setModalView(!modalView);
    const toggleModalCustomerDelete = () => setModalDelete(!modalDelete);
    const toggleModalCustomerAdd = () => setModalAdd(!modalAdd);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalView, setModalView] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);


    return (
        <>
            /** TODO Implementer modal d'ajout en temps que composant*/
            {/*<ModalAddCustomer toggleModalCustomerAdd={toggleModalCustomerAdd} modalAdd={modalAdd}></ModalAddCustomer>*/}

            <div>
                <div id="CustomerView">
                    <Modal  isOpen={modalView} toggle={toggleModalCustomerView} >
                        <ModalHeader toggle={toggleModalCustomerView}>Informations du client</ModalHeader>
                        <ModalBody>
                            AHAHA ICI ON VAS AVOIR LES INFORMATIONS DU CLIENT
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={toggleModalCustomerView}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div id="CustomerEdit">
                    <Modal  isOpen={modalEdit} toggle={toggleModalCustomerEdit} >
                        <ModalHeader toggle={toggleModalCustomerEdit}>Informations du client</ModalHeader>
                        <ModalBody>
                            AHAHA ICI ON VAS AVOIR LE FORMULAIRE AVEC LES INFORMATIONS DU CLIENT
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={toggleModalCustomerEdit}>Sauvegarder</Button>
                            <Button color="danger" onClick={toggleModalCustomerEdit}>Fermer</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div id="CustomerDelete">
                    <Modal  isOpen={modalDelete} toggle={toggleModalCustomerDelete} >
                        <ModalHeader toggle={toggleModalCustomerDelete}>Supprimer le client</ModalHeader>
                        <ModalBody>
                            Etes-vous sur de vouloir supprimer ce client ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={toggleModalCustomerDelete}>Bien sur !</Button>
                            <Button color="danger" onClick={toggleModalCustomerDelete}>Oups pardon</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

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
                    <ManufacturersTable showBtn={true}></ManufacturersTable>
                </TabPanel>
                <TabPanel header="Utilisateurs">
                    <UsersTable></UsersTable>
                </TabPanel>
            </TabView>
        </>
    );
}

export default Admin;
