import React, { PureComponent } from 'react'
import Basicard from '../Utils/Basicard';
import { useState } from 'react';
import axios from 'axios';

const CreerEmploye = () => {


    const intialState = {
		matricule: '',
		// nom: '',
        // prenom: '',
        // email: '',
        // telephoneProfessionnel: '',
        // telephonePersonnel: '',
        // dateNaissance: ''
	}


    
    const [employe, setEmploye] = useState(intialState);

    const handleSubmit = (e) => {
         e.preventDefault();
         axios.get('api/Empoloye');
        // console.log(employe);
        // axios.get('api/Empoloye')
		// 	.then(response => {
		// 		console.log(response.data);
				
		// 	})
        //     .catch( error =>{
        //         console.log(error.response);
        //         console.log(error.request);
        //         console.log(error.message);
        //     });
        // console.log(employe);


    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmploye({
          ...employe,
          [name]: value
        });
      };
    


    return (
        <>
            <Basicard title="Création des employés"></Basicard>
            <div class="row">
                {/* <div className="col"> */}
                <section className="card">
                    <div className="card-body">
                        <form className="form-horizontal form-bordered" method="get">
                            <div className="form-group row pb-4">
                                <label className="col-lg-3 control-label text-lg-end pt-2">Matricule</label>
                                <div className="col-lg-6">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="fas fa-id-badge" />
                                        </span>
                                        <input type="text" className="form-control" placeholder="Matricule"  onChange={ handleChange } />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row pb-4">
                                <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">Nom</label>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" id="inputDefault" placeholder='Nom' onChange={handleChange } />
                                </div>
                            </div>
                            <div className="form-group row pb-4">
                                <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">Prénoms</label>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" id="inputDefault" placeholder='Prenoms' onChange={ handleChange } />
                                </div>
                            </div>
                            <div className="form-group row pb-4">
                                <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">Date de naissance</label>
                                <div className="col-lg-6">
                                    <input type="date" className="form-control" id="inputDefault" placeholder='Date de naissance' onChange={ handleChange } />
                                </div>
                            </div>
                            <div className="form-group row pb-4">
                                <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">Téléphone personnel</label>
                                <div className="col-lg-6">
                                    <input type="tel" className="form-control" id="inputDefault" placeholder='Téléphone personnel' onChange={ handleChange } />
                                </div>
                            </div>
                            <div className="form-group row pb-4">
                                <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">Téléphone professionnel</label>
                                <div className="col-lg-6">
                                    <input type="tel" className="form-control" id="inputDefault" placeholder='Téléphone professionnel' onChange={ handleChange } />
                                </div>
                            </div>
                            <div className="form-group row pb-4">
                                <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">email</label>
                                <div className="col-lg-6">
                                    <input type="email" className="form-control" id="inputDefault" placeholder='xxx@bigcim.ci' onChange={ handleChange }/>
                                </div>
                            </div>
                            <div className="form-group row pb-4">
                                <div className="col-lg-6">
                                    <button type="button"
                                        className="btn btn-success w-100" onClick={handleSubmit}
                                    ><i className="fas fa-check"></i> Valider</button>
                                </div>
                                <div className="col-lg-6">
                                    <button type="button" className="btn btn-danger w-100"><i className="fas fa-sync"></i> Annuler</button>
                                </div>
                            </div>
                            


                        </form>
                    </div>
                </section>
                {/* </div> */}
            </div>



        </>
    )
}

export default CreerEmploye;