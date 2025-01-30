import React, { PureComponent } from 'react'
import { useState, useEffect } from 'react';
import Basicard from '../Utils/Basicard';
import axios from 'axios';

var RechercheEmploye = () => {

    
    const intialState = {
		matricule: '',
		nomPrenoms: ''
	}    
    
        const [data, setData] = useState(intialState);
        const [employe, setEmploye] = useState([]);

               
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post('api/Employe/GetByCriteria', data)
        .then(response => {
            console.log(response.data);
            setEmploye(response.data);
          
        })


   }
   
 
    return (

        <div>
            <Basicard title="Rechercher un employé"></Basicard>
            <div className="card mb-4">
                <div className="card-body title">
                    <div className="row">
                        <div className="col-lg-12">
                            <section className="card">

                                <div className="card-body">

                                    <div className="card-body">
                                        <form className="form-horizontal form-bordered" method="get">
                                            <div className="form-group row">
                                                <label className="col-lg-2 control-label text-lg-end pt-2" htmlFor="inputRounded">Matricule</label>
                                                <div className="col-lg-2">
                                                    <input type="text" className=" input-rounded" value={data.matricule}  onChange={e => setData({...data, matricule: e.target.value })} />
                                                </div>
                                                <label className="col-lg-2 control-label text-lg-end pt-2" htmlFor="inputRounded">Nom et prénoms</label>
                                                <div className="col-lg-3">
                                                    <input type="text" className=" input-rounded" value={data.nomPrenoms}  onChange={e => setData({...data, nomPrenoms: e.target.value })} />
                                                </div>
                                                <button type="button" className="col-lg-1 btn btn-success btn-sm" onClick={handleSubmit}><i className="fas fa-search"></i></button>
                                            </div>

                                        </form>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
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
                                        employe.map((item, index) => (
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

export default RechercheEmploye;