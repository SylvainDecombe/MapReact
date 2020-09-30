import {Button, Modal} from "reactstrap/lib";
import React from "react";

const {useState} = require("react");

function DialogFormCustomer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <p>Woohoo, you're reading this text in a modal!</p>

            </Modal>
        </>
    );
}

export default DialogFormCustomer();
