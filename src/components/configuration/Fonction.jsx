import React, { PureComponent } from 'react'
import Basicard from '../Utils/Basicard';
import axios from 'axios';

var Fonction = () => {
	onload = () => {
		console.log('bonjour fonction');
		//appel axios
		axios.get('http://localhost:5277/api/Fonction')
			.then(response => {
				console.log("retour de la requete axios");
				console.log(response);
			})
			.catch(error => {
				console.log("retour de la requete axios error");
				console.log(error);
			});
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
                                            <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDefault">Libelle</label>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" id="inputDefault" />
                                            </div>
                                        </div>
                                        <div className="form-group row pb-4">
                                            <label className="col-lg-3 control-label text-lg-end pt-2" htmlFor="inputDisabled">Code</label>
                                            <div className="col-lg-6">
                                                <input className="form-control" id="inputDisabled" type="text" placeholder="Disabled input here..." disabled />
                                            </div>
                                        </div>
                                        <div className="form-group row pb-4">
                                            <div className="col-lg-6">
                                                <button type="button" className="btn btn-success w-100"><i className="fas fa-sync"></i> Valider</button>
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

                    <div class="row">
							<div class="col">
								<section class="card">
								
									<div class="card-body">

										<table class="table table-bordered table-striped mb-0" id="datatable-default">

											<thead>
												<tr>
													<th>Libelle</th>
													<th>Code</th>
													<th>Actions</th>
												
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Trident</td>
													<td>Internet
														Explorer 4.0
													</td>
													<td>Win 95+</td>
													<td class="center d-lg-none">4</td>
													<td class="center d-lg-none">X</td>
												</tr>
												<tr>
													<td>Trident</td>
													<td>Internet
														Explorer 5.0
													</td>
													<td>Win 95+</td>
													<td class="center d-lg-none">5</td>
													<td class="center d-lg-none">C</td>
												</tr>
												<tr>
													<td>Trident</td>
													<td>Internet
														Explorer 5.5
													</td>
													<td>Win 95+</td>
													<td class="center d-lg-none">5.5</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Trident</td>
													<td>Internet
														Explorer 6
													</td>
													<td>Win 98+</td>
													<td class="center d-lg-none">6</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Trident</td>
													<td>Internet Explorer 7</td>
													<td>Win XP SP2+</td>
													<td class="center d-lg-none">7</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Trident</td>
													<td>AOL browser (AOL desktop)</td>
													<td>Win XP</td>
													<td class="center d-lg-none">6</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Firefox 1.0</td>
													<td>Win 98+ / OSX.2+</td>
													<td class="center d-lg-none">1.7</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Firefox 1.5</td>
													<td>Win 98+ / OSX.2+</td>
													<td class="center d-lg-none">1.8</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Firefox 2.0</td>
													<td>Win 98+ / OSX.2+</td>
													<td class="center d-lg-none">1.8</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Firefox 3.0</td>
													<td>Win 2k+ / OSX.3+</td>
													<td class="center d-lg-none">1.9</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Camino 1.0</td>
													<td>OSX.2+</td>
													<td class="center d-lg-none">1.8</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Camino 1.5</td>
													<td>OSX.3+</td>
													<td class="center d-lg-none">1.8</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Netscape 7.2</td>
													<td>Win 95+ / Mac OS 8.6-9.2</td>
													<td class="center d-lg-none">1.7</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Netscape Browser 8</td>
													<td>Win 98SE+</td>
													<td class="center d-lg-none">1.7</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Netscape Navigator 9</td>
													<td>Win 98+ / OSX.2+</td>
													<td class="center d-lg-none">1.8</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Mozilla 1.0</td>
													<td>Win 95+ / OSX.1+</td>
													<td class="center d-lg-none">1</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Mozilla 1.1</td>
													<td>Win 95+ / OSX.1+</td>
													<td class="center d-lg-none">1.1</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Mozilla 1.2</td>
													<td>Win 95+ / OSX.1+</td>
													<td class="center d-lg-none">1.2</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Mozilla 1.3</td>
													<td>Win 95+ / OSX.1+</td>
													<td class="center d-lg-none">1.3</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Mozilla 1.4</td>
													<td>Win 95+ / OSX.1+</td>
													<td class="center d-lg-none">1.4</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Mozilla 1.5</td>
													<td>Win 95+ / OSX.1+</td>
													<td class="center d-lg-none">1.5</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Mozilla 1.6</td>
													<td>Win 95+ / OSX.1+</td>
													<td class="center d-lg-none">1.6</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Mozilla 1.7</td>
													<td>Win 98+ / OSX.1+</td>
													<td class="center d-lg-none">1.7</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Mozilla 1.8</td>
													<td>Win 98+ / OSX.1+</td>
													<td class="center d-lg-none">1.8</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Seamonkey 1.1</td>
													<td>Win 98+ / OSX.2+</td>
													<td class="center d-lg-none">1.8</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Gecko</td>
													<td>Epiphany 2.20</td>
													<td>Gnome</td>
													<td class="center d-lg-none">1.8</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Webkit</td>
													<td>Safari 1.2</td>
													<td>OSX.3</td>
													<td class="center d-lg-none">125.5</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Webkit</td>
													<td>Safari 1.3</td>
													<td>OSX.3</td>
													<td class="center d-lg-none">312.8</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Webkit</td>
													<td>Safari 2.0</td>
													<td>OSX.4+</td>
													<td class="center d-lg-none">419.3</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Webkit</td>
													<td>Safari 3.0</td>
													<td>OSX.4+</td>
													<td class="center d-lg-none">522.1</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Webkit</td>
													<td>OmniWeb 5.5</td>
													<td>OSX.4+</td>
													<td class="center d-lg-none">420</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Webkit</td>
													<td>iPod Touch / iPhone</td>
													<td>iPod</td>
													<td class="center d-lg-none">420.1</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Webkit</td>
													<td>S60</td>
													<td>S60</td>
													<td class="center d-lg-none">413</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Presto</td>
													<td>Opera 7.0</td>
													<td>Win 95+ / OSX.1+</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Presto</td>
													<td>Opera 7.5</td>
													<td>Win 95+ / OSX.2+</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Presto</td>
													<td>Opera 8.0</td>
													<td>Win 95+ / OSX.2+</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Presto</td>
													<td>Opera 8.5</td>
													<td>Win 95+ / OSX.2+</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Presto</td>
													<td>Opera 9.0</td>
													<td>Win 95+ / OSX.3+</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Presto</td>
													<td>Opera 9.2</td>
													<td>Win 88+ / OSX.3+</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Presto</td>
													<td>Opera 9.5</td>
													<td>Win 88+ / OSX.3+</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Presto</td>
													<td>Opera for Wii</td>
													<td>Wii</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Presto</td>
													<td>Nokia N800</td>
													<td>N800</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Presto</td>
													<td>Nintendo DS browser</td>
													<td>Nintendo DS</td>
													<td class="center d-lg-none">8.5</td>
													<td class="center d-lg-none">C/A<sup>1</sup></td>
												</tr>
												<tr>
													<td>KHTML</td>
													<td>Konqureror 3.1</td>
													<td>KDE 3.1</td>
													<td class="center d-lg-none">3.1</td>
													<td class="center d-lg-none">C</td>
												</tr>
												<tr>
													<td>KHTML</td>
													<td>Konqureror 3.3</td>
													<td>KDE 3.3</td>
													<td class="center d-lg-none">3.3</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>KHTML</td>
													<td>Konqureror 3.5</td>
													<td>KDE 3.5</td>
													<td class="center d-lg-none">3.5</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Tasman</td>
													<td>Internet Explorer 4.5</td>
													<td>Mac OS 8-9</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">X</td>
												</tr>
												<tr>
													<td>Tasman</td>
													<td>Internet Explorer 5.1</td>
													<td>Mac OS 7.6-9</td>
													<td class="center d-lg-none">1</td>
													<td class="center d-lg-none">C</td>
												</tr>
												<tr>
													<td>Tasman</td>
													<td>Internet Explorer 5.2</td>
													<td>Mac OS 8-X</td>
													<td class="center d-lg-none">1</td>
													<td class="center d-lg-none">C</td>
												</tr>
												<tr>
													<td>Misc</td>
													<td>NetFront 3.1</td>
													<td>Embedded devices</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">C</td>
												</tr>
												<tr>
													<td>Misc</td>
													<td>NetFront 3.4</td>
													<td>Embedded devices</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">A</td>
												</tr>
												<tr>
													<td>Misc</td>
													<td>Dillo 0.8</td>
													<td>Embedded devices</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">X</td>
												</tr>
												<tr>
													<td>Misc</td>
													<td>Links</td>
													<td>Text only</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">X</td>
												</tr>
												<tr>
													<td>Misc</td>
													<td>Lynx</td>
													<td>Text only</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">X</td>
												</tr>
												<tr>
													<td>Misc</td>
													<td>IE Mobile</td>
													<td>Windows Mobile 6</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">C</td>
												</tr>
												<tr>
													<td>Misc</td>
													<td>PSP browser</td>
													<td>PSP</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">C</td>
												</tr>
												<tr class="gradeU">
													<td>Other browsers</td>
													<td>All others</td>
													<td>-</td>
													<td class="center d-lg-none">-</td>
													<td class="center d-lg-none">U</td>
												</tr>
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