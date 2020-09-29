import React from 'react';
import Button from "reactstrap/lib/Button";

export class CustomerTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            /** Tableau des clients*/
            customers: [
                { id: 1, name: 'Wasif', age: 21, email: 'wasif@ghfjgemail.com' },
                { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
                { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
                { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.customers[0])
        header.push(" ");
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    edit(index){
        console.log(index);
    }

    show(index){
        console.log(index);
    }

    delete(index){
        console.log(index);
    }

    renderTableData() {
        return this.state.customers.map((customer, index) => {
            const { id, name, age, email } = customer //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td style={{textAlign: "right"}}>
                        <div className="btn-group" >
                            <Button className="btn btn-info">Voir</Button>
                            <Button className="btn btn-warning">Editer</Button>
                            <Button className="btn btn-danger">Supprimer</Button>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className="table-striped table" id='customers'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
