import React, { PureComponent } from 'react'
import { useState, useEffect } from 'react';
import Basicard from '../Utils/Basicard';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Tooltip } from 'react-tooltip'

var ListeEmploye = (props) => {

    const columns = [
            {
                name: 'Id',
                selector: row => row.id,
                //sortable: row => row.libelle,
            },
            {
                name: 'Matricule',
                selector: row => row.matricule,
                //sortable: row => row.libelle,
            },
            {
                name: 'Nom',
                selector: row => row.nom,
                //sortable: true,
            },
            {
                name: 'Prénoms',
                selector: row => row.prenom,
                //sortable: true,
            },
            {
                name: 'Actions',
                selector: 'actions',
                cell: row => (
                    <div>
                        <a href="javascript:void(0)" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                            <Icon icon="iconamoon:eye-light" />
                        </a>
                        <a href="javascript:void(0)" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                            <Icon icon="lucide:edit" />
                        </a>
                        <a href="javascript:void(0)" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                            <Icon icon="mingcute:delete-2-line" />
                        </a>
                        <a aria-label='Affecter'  
                            href="javascript:void(0)"
                             className="w-32-px h-32-px bg-warning-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                            <Icon icon="iconamoon:lightning-1-light"
                            data-tooltip-id="tt" data-tooltip-content="hello world" />
                        </a>
                    </div>
                  
    
                )
            },
        ];

    

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
             <Tooltip id='tt'/>
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


                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">

                </div>
                <div className="col-lg-12">
                    <div className="card">
                        {/* <div className="card-header">
            <h5 className="card-title mb-0 text-center">Création des fonctions</h5>
        </div> */}
                        <div className="card-body">
                            <DataTable
                className="table bordered-table mb-0"
                title="Liste des employés"
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
        </div>





       

    )


}

export default ListeEmploye;