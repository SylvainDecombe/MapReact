import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {TabPanel, TabView} from "primereact/tabview";
import {CustomersTable} from "../../components/CustomersTable";
import {ManufacturersTable} from "../../components/ManufacturersTable";
import {UsersTable} from "../../components/UsersTable";


function Admin() {

    const [modal, setModal] = useState(false);
    const [uid, setUid] = useState(null);
    const toggleModalCustomerView = () => setModal(!modal);

    return (
        <>

            <div id="CustomerView">
                <Modal  isOpen={modal} toggle={toggleModalCustomerView} >
                    <ModalHeader toggle={toggleModalCustomerView}>Informations du client</ModalHeader>
                    <ModalBody>
                        AHAHA ICI ON VAS AVOIR LES INFORMATIONS DU CLIENT
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggleModalCustomerView}>Fermer</Button>
                    </ModalFooter>
                </Modal>
            </div>

            <TabView activeIndex={0}>
                <TabPanel header="Clients">
                    <CustomersTable showBtn={true} toggleModalCustomerView={toggleModalCustomerView}></CustomersTable>
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
