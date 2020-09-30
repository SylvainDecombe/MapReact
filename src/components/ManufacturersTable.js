import React from 'react';
import Button from "reactstrap/lib/Button";

export class ManufacturersTable extends React.Component {

    showBtn = false;

    constructor(props) {
        super(props)
        this.state = {
            /** Tableau des fabricants*/
            manufacturers: [
                { id: 1, name: 'Wasif', age: 21, email: 'wasif@ghfjgemail.com' },
                { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
                { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
                { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.manufacturers[0])
        if (this.showBtn){
            header.push(" ");
        }
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    edit(){
        console.log(this);
    }

    show(){
        console.log(this);
    }

    delete(){
        console.log(this);
    }


    renderTableDataWithButtons() {
        return this.state.manufacturers.map((manufacturers, index) => {
            const { id, name, age, email } = manufacturers //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td style={{textAlign: "right"}}>
                        <div className="btn-group" >
                            <Button className="btn btn-info" onClick={this.show.bind(index)}>
                                <i className="pi pi-eye mr-1"/>Voir</Button>
                            <Button className="btn btn-warning" onClick={this.edit.bind(index)}>
                                <i className="pi pi-pencil mr-1"/>Editer</Button>
                            <Button className="btn btn-danger" onClick={this.delete.bind(index)}>
                                <i className="pi pi-trash mr-1"/>Supprimer</Button>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    renderTableDataWithoutButtons() {
        return this.state.manufacturers.map((manufacturers, index) => {
            const { id, name, age, email } = manufacturers //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                {this.showBtn ? (
                    <div className="pb-2" style={{textAlign: "right"}}>
                        <Button className="btn btn-dark" ><i className="pi pi-user-plus mr-2"/>Ajouter nouveau fabricant</Button>
                    </div>
                ):(
                    <h2 className="text-center pb-2" for="manufacturers">Listes de fabricants</h2>
                )}
                <div>
                    <table className="table-striped table" id='manufacturers'>
                        <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.showBtn ? (this.renderTableDataWithButtons()) : (this.renderTableDataWithoutButtons())}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
