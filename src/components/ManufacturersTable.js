import React from 'react';
import Button from "reactstrap/lib/Button";
//import ManufacturersService from './../services/manufacturers-service';

export class ManufacturersTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                //manufacturer: ManufacturersService.getAllManufacturers(),
                /** Tableau des fabricants*/
                manufacturers: [
                    { id: 1, name: 'Wasif', age: 21, email: 'wasif@ghfjgemail.com' },
                    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
                    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
                    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
                ]
            }
            //console.log(this.state.manufacturer)
    }

    renderTableHeader() {
        let header = Object.keys(this.state.manufacturers[0])
        if (this.props.showBtn) {
            header.push(" ");
        }
        return header.map((key, index) => {
            return <th key = { index } > { key.toUpperCase() } < /th>
        })
    }

    edit() {
        // Ouvrir modal et lui passer (this = Object)
        console.log(this);
    }

    show() {
        // Ouvrir modal et lui passer (this = Object)
        console.log(this);
    }

    delete() {
        // Ouvrir modal et lui passer (this = Object)

        console.log(this);
    }


    renderTableDataWithButtons() {
        return this.state.manufacturers.map((manufacturers, index) => {
            const { id, name, age, email } = manufacturers //destructuring
            return ( <
                tr key = { id } >
                <
                td > { id } < /td> <
                td > { name } < /td> <
                td > { age } < /td> <
                td > { email } < /td> <
                td style = {
                    { textAlign: "right" }
                } >
                <
                div className = "btn-group" >
                <
                Button className = "btn btn-info"
                onClick = { this.show.bind(this.state.manufacturers[index]) } >
                <
                i className = "pi pi-eye mr-1" / > Voir < /Button> <
                Button className = "btn btn-warning"
                onClick = { this.edit.bind(this.state.manufacturers[index]) } >
                <
                i className = "pi pi-pencil mr-1" / > Editer < /Button> <
                Button className = "btn btn-danger"
                onClick = { this.delete.bind(this.state.manufacturers[index]) } >
                <
                i className = "pi pi-trash mr-1" / > Supprimer < /Button> < /
                div > <
                /td> < /
                tr >
            )
        })
    }

    renderTableDataWithoutButtons() {
        return this.state.manufacturers.map((manufacturers, index) => {
            const { id, name, age, email } = manufacturers //destructuring
            return ( <
                tr key = { id } >
                <
                td > { id } < /td> <
                td > { name } < /td> <
                td > { age } < /td> <
                td > { email } < /td> < /
                tr >
            )
        })
    }

    render() {
        return ( <
            div > {
                this.props.showBtn ? ( <
                    div className = "pb-2"
                    style = {
                        { textAlign: "right" }
                    } >
                    <
                    Button className = "btn btn-dark" > < i className = "pi pi-user-plus mr-2" / > Ajouter nouveau fabricant < /Button> < /
                    div >
                ) : ( <
                    h2 className = "text-center pb-2" > Liste des fabricants < /h2>
                )
            } <
            div >
            <
            table className = "table-striped table"
            id = 'manufacturers' >
            <
            tbody >
            <
            tr > { this.renderTableHeader() } < /tr> { this.props.showBtn ? (this.renderTableDataWithButtons()) : (this.renderTableDataWithoutButtons()) } < /
            tbody > <
            /table> < /
            div > <
            /div>
        )
    }
}