
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React from 'react';
function ModalAddCustomer(toggleModalCustomerAdd, modalAdd) {
    return (
        <>
            <Modal  isOpen={modalAdd} toggle={toggleModalCustomerAdd} >
                <ModalHeader toggle={toggleModalCustomerAdd}>Créer un nouveau client</ModalHeader>
                <ModalBody>
                    Ajoutons un nouveau client
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={toggleModalCustomerAdd}>Sauvegarder</Button>
                    <Button color="danger" onClick={toggleModalCustomerAdd}>Fermer</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalAddCustomer;
