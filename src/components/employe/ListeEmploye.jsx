import React, { PureComponent } from 'react'
import { useState, useEffect } from 'react';
import Basicard from '../Utils/Basicard';
import axios from 'axios';

var ListeEmploye = (props) => {

    const [data, setData] = useState([])
    onload = () => {

        //appel axios
		axios.get('api/Employe')
        .then(response => {
            console.log(response.data);
            setData(response.data);
           
        })
        .catch(error => {
            
        });
    };

    return (

        <div>
            <Basicard title="Liste des employés"></Basicard>
            <div className="card mb-1">
                <div className="card-body title">

                    <div classname="row">
                        <div classname="col-lg-6">
                            <section className="card">

                                <div className="card-body">
                                    <table className="table table-responsive-md table-sm mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Matricule</th>
                                                <th>Nom</th>
                                                <th>Prénoms</th>
                                                <th>Date de naissance</th>
                                                <th>Téléphone</th>
                                                <th>email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.map((item, index) => (
                                                    <tr key={index}>
                                                        <td></td>
                                                        <td>{item.matricule}</td>
                                                        <td>{item.nom}</td>
                                                        <td>{item.prenom}</td>
                                                        <td></td>
                                                        <td>{item.telephone}</td>
                                                        <td>{item.email}</td>
                                                        <td>
                                                            <button type="button" className="btn btn-warning btn-sm"><i className="fas fa-pencil-alt"></i></button>
                                                            <button type="button" className="btn btn-danger btn-sm"><i className="fas fa-trash-alt"></i></button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )


}

export default ListeEmploye;