import React, { PureComponent } from 'react'
import { useState } from 'react';
import Basicard from '../Utils/Basicard';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Icon } from '@iconify/react/dist/iconify.js';

var Services = () => {


	const columns = [
		{
			name: 'Id',
			selector: row => row.id,
			//sortable: row => row.libelle,
		},
		{
			name: 'Code',
			selector: row => row.code,
			//sortable: row => row.libelle,
		},
		{
			name: 'Libellé',
			selector: row => row.libelle,
			//sortable: true,
		},
		{
			name: 'Actions',
			selector: 'actions',
			cell: row => (
				<div>
					{/* <a href="javascript:void(0)" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
							<Icon icon="iconamoon:eye-light" />
						</a> */}
					<a href="javascript:void(0)" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
						<Icon icon="lucide:edit" />
					</a>
					<a href="javascript:void(0)" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
						<Icon icon="mingcute:delete-2-line" />
					</a>
				</div>


			)
		},
	];

	const [data, setData] = useState([])
	onload = () => {

		//appel axios
		axios.get('/api/Service')
			.then(response => {
				console.log(response.data);
				setData(response.data);
				//console.log(data);
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
		debugger
		e.preventDefault();
		console.log(newData);
		axios.post('api/Service', newData)
			.then(response => {
				console.log(response.data);
				// setData([...data, newData]);
				// setNewData(intialState);
			})
		// 	.catch(error => {
		// 		console.log
	}


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
								<label className="form-label">Code</label>
								<input type="text" name="#0" className="form-control" defaultValue="info@gmail.com" required onChange={e => setNewData({ ...newData, code: e.target.value })} />
								{/* <div className="valid-feedback">
								Looks good!
							</div> */}
							</div>
							<div className="col-md-6">
								<label className="form-label">Libelle</label>
								<input type="text" name="#0" className="form-control" defaultValue="info@gmail.com" required onChange={e => setNewData({ ...newData, libelle: e.target.value })} />
								{/* <div className="valid-feedback">
								Looks good!
							</div> */}
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
						<h5 className="card-title mb-0 text-center">Liste des fonctions</h5>
					</div>
					<div className="card-body">
						<DataTable
							className="table bordered-table mb-0"
							title="Fonctions"
							columns={columns}
							data={data}
							pagination
						// selectableRows
						// Clicked
						// onSelectedRowsChange={handleChange}
						// selectableRowsComponent={Checkbox}
						// selectableRowsComponentProps={{ inkDisabled: true }}
						// selectableRowsHighlight
						// selectableRowsNoSelectAll
						// selectableRowsVisibleOnly
						// selectableRowsComponent={Checkbox}
						// selectableRowsComponentProps={{ inkDisabled: true }}
						></DataTable>
					</div>
				</div>
			</div>



		</div>

	)
}

export default Services;