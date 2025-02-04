import React, { PureComponent } from 'react'
import Basicard from '../Utils/Basicard';
import { useState } from 'react';
import axios from 'axios';

const CreerEmploye = () => {



    const intialState = {
		matricule: '',
		nom: '',
        prenom: '',
        email: '',
        telephoneProfessionnel: '',
        telephonePersonnel: '',
        dateNaissance: ''
	}    
    const [employe, setEmploye] = useState(intialState);

    const handleSubmit = (e) => {
        debugger;
        console.log(employe);
         e.preventDefault();
         axios.post('api/Empoloye/Add');
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
       
       
        <div>

        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
            <h6 className="fw-semibold mb-0">Form Validation</h6>
            <ul className="d-flex align-items-center gap-2">
                <li className="fw-medium">
                    <a href="index.html" className="d-flex align-items-center gap-1 hover-text-primary">
                        <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                        Dashboard
                    </a>
                </li>
                <li>-</li>
                <li className="fw-medium">Form Validation</li>
            </ul>
        </div>

        <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Création des Services</h5>
                </div>
                <div className="card-body">
                    <form className="row gy-3 needs-validation" noValidate>
                        <div className="col-md-6">
                            <label className="form-label">Matricule</label>
                            <input type="text" name="#0" className="form-control" defaultValue="info@gmail.com" required onChange={e => setEmploye({ ...employe, matricule: e.target.value })} />
                          
                        </div>
                        <div className="col-md-6">
                            {/* <label className="form-label">Libelle</label>
                            <input type="text" name="#0" className="form-control" defaultValue="info@gmail.com" required onChange={e => setNewData({ ...newData, libelle: e.target.value })} />
                            */}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Nom</label>
                            <input type="text" name="#0" className="form-control" defaultValue="info@gmail.com" required onChange={e => setEmploye({ ...employe, nom: e.target.value })} />
                          
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Prénoms</label>
                            <input type="text" name="#0" className="form-control" defaultValue="info@gmail.com" required onChange={e => setEmploye({ ...employe, prenom: e.target.value })} />
                          
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Date de naissance</label>
                            <input type="date" name="#0" className="form-control" defaultValue="info@gmail.com" required onChange={e => setEmploye({ ...employe, dateNaissance: e.target.value })} />
                           
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Téléphone</label>
                            <input type="text" name="#0" className="form-control" defaultValue="info@gmail.com" required onChange={e => setEmploye({ ...employe, telephoneProfessionnel: e.target.value })} />
                           
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="text" name="#0" className="form-control" defaultValue="info@gmail.com" required onChange={e => setEmploye({ ...employe, email: e.target.value })} />
                           
                        </div>

                        <div className="col-12 d-flex flex-wrap align-items-center gap-3">
                            <button className="btn btn-primary-600" type="submit" onClick={handleSubmit}>Valider</button>
                            <button className="btn btn-danger-600" type="submit">Annuler</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">

        </div>
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0 text-center">Liste des employés</h5>
                </div>
                <div className="card-body">
                 
                </div>
            </div>
        </div>



    </div>
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        // <>
        //     <Basicard title="Création des employés"></Basicard>
        //     <div class="row">
        //         {/* <div className="col"> */}
        //         <section className="card">
        //             <div className="card-body">
        //                 <form className="form-horizontal form-bordered" method="get">
        //                     <div className="form-group row pb-4">
        //                         <label className="col-lg-3 control-label text-lg-end pt-2">Matricule</label>
        //                         <div className="col-lg-6">
        //                             <div className="input-group">
        //                                 <span className="input-group-text">
        //                                     <i className="fas fa-id-badge" />
        //                                 </span>
        //                                 <input type="text" className="form-control" placeholder="Matricule"  onChange={ handleChange } />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="form-group row pb-4">
        //                         <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">Nom</label>
        //                         <div className="col-lg-6">
        //                             <input type="text" className="form-control" id="inputDefault" placeholder='Nom' onChange={handleChange } />
        //                         </div>
        //                     </div>
        //                     <div className="form-group row pb-4">
        //                         <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">Prénoms</label>
        //                         <div className="col-lg-6">
        //                             <input type="text" className="form-control" id="inputDefault" placeholder='Prenoms' onChange={ handleChange } />
        //                         </div>
        //                     </div>
        //                     <div className="form-group row pb-4">
        //                         <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">Date de naissance</label>
        //                         <div className="col-lg-6">
        //                             <input type="date" className="form-control" id="inputDefault" placeholder='Date de naissance' onChange={ handleChange } />
        //                         </div>
        //                     </div>
        //                     <div className="form-group row pb-4">
        //                         <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">Téléphone personnel</label>
        //                         <div className="col-lg-6">
        //                             <input type="tel" className="form-control" id="inputDefault" placeholder='Téléphone personnel' onChange={ handleChange } />
        //                         </div>
        //                     </div>
        //                     <div className="form-group row pb-4">
        //                         <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">Téléphone professionnel</label>
        //                         <div className="col-lg-6">
        //                             <input type="tel" className="form-control" id="inputDefault" placeholder='Téléphone professionnel' onChange={ handleChange } />
        //                         </div>
        //                     </div>
        //                     <div className="form-group row pb-4">
        //                         <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">email</label>
        //                         <div className="col-lg-6">
        //                             <input type="email" className="form-control" id="inputDefault" placeholder='xxx@bigcim.ci' onChange={ handleChange }/>
        //                         </div>
        //                     </div>
        //                     <div className="form-group row pb-4">
        //                         <div className="col-lg-6">
        //                             <button type="button"
        //                                 className="btn btn-success w-100" onClick={handleSubmit}
        //                             ><i className="fas fa-check"></i> Valider</button>
        //                         </div>
        //                         <div className="col-lg-6">
        //                             <button type="button" className="btn btn-danger w-100"><i className="fas fa-sync"></i> Annuler</button>
        //                         </div>
        //                     </div>
                            


        //                 </form>
        //             </div>
        //         </section>
        //         {/* </div> */}
        //     </div>



        // </>
    )
}

export default CreerEmploye;