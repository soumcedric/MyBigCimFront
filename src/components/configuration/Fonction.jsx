import React, { PureComponent } from 'react'
import { useState } from 'react';
import Basicard from '../Utils/Basicard';
import axios from 'axios';



// DataTable.use(DT);


var Fonction = () => {
	const [data, setData] = useState([])
	onload = () => {
		
		//appel axios
		axios.get('api/Fonction')
			.then(response => {
				console.log(response.data);
                setData(response.data);
				console.log(data);
			})
			.catch(error => {
				
			});
	}

	const intialState = {
		code: '',
		libelle: ''
	}

	const [newData, setNewData] = useState(intialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newData);
		axios.post('api/Fonction', newData)
			.then(response => {
				console.log(response.data);
				setData([...data, newData]);
				setNewData(intialState);
			})
		// 	.catch(error => {
		// 		console.log
	}

    return (
        <div>
            <Basicard title="Fonctions" />
            <div className="card mb-4">
                <div className="card-body title">
                    <div className="row">
                        <div className="col">
                            <section className="card">

                                <div className="card-body">
                                    <form className="form-horizontal form-bordered" method="get">
                                        <div className="form-group row pb-4">
                                            <label className="col-lg-3 control-label text-lg-end pt-2" 
											htmlFor="inputDefault"
											>Libelle</label>
                                            <div className="col-lg-6">
                                                <input type="text" 
												className="form-control"
												 id="inputDefault"
												 value={newData.libelle}
												 onChange={e => setNewData({...newData, libelle: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form-group row pb-4">
                                            <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDisabled">Code</label>
                                            <div className="col-lg-6">
                                                <input className="form-control"
												 id="inputDisabled"
												  type="text"
												   placeholder="Disabled input here..." 
												   value={newData.code} 
												   onChange={e => setNewData({...newData, code: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form-group row pb-4">
                                            <div className="col-lg-6">
                                                <button type="button" 
												className="btn btn-success w-100"
												onClick={ handleSubmit}
												><i className="fas fa-check"></i> Valider</button>
                                            </div>
                                            <div className="col-lg-6">
                                                <button type="button" className="btn btn-danger w-100"><i className="fas fa-sync"></i> Annuler</button>
                                            </div>
                                        </div>



                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>

					<div classname="row">
					<div classname="col-lg-6">
						<section className="card">
						<header className="card-header">
							<div className="card-actions">
							<a href="#" className="card-action card-action-toggle" data-card-toggle />
							<a href="#" className="card-action card-action-dismiss" data-card-dismiss />
							</div>
							<h2 className="card-title">Liste des fonctions</h2>
						</header>
						<div className="card-body">
							<table className="table table-responsive-md table-sm mb-0">
							<thead>
								<tr>
								<th>#</th>
								<th>Code</th>
								<th>Libellé</th>
								<th></th>
								</tr>
							</thead>
							<tbody>
								{
									data.map((item, index) => (
										<tr key={index}>
											<td></td>
											<td>{item.code}</td>
											<td>{item.libelle}</td>
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

export default Fonction;