import React, { PureComponent } from 'react'
import '../../assets/new/css/modal.css'

var DetailEmploye = (child) => {

    return (

        <div className='modal-overlay'>
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

        </div>
    )



}

export default DetailEmploye;