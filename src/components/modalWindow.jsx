import React, { PureComponent } from 'react'
import 'bootstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

var ModalWindow = ({ props }) => {
    return (
        // backdrop
        //     <div
        //     // onClick={onClose}
        //     className={` modal
        //       fixed inset-0 flex justify-center items-center transition-colors
        //       ${open ? "visible bg-black/20" : "invisible"}
        //     `}
        //   >
        //     {/* modal */}
        //     <div
        //       onClick={(e) => e.stopPropagation()}
        //       className={`
        //         bg-white rounded-xl shadow p-6 transition-all
        //          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        //       `}
        //     >
        //       <button
        //         // onClick={onClose}
        //         className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        //       >
        //         {/* <X /> */}
        //       </button>
        //       {/* {children} */}














        //       ddddddddddddddddddddd
        //     </div>
        //   </div>


        // <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        // <div className="modal-dialog" role="document">
        //     <div className="modal-content">
        //     <div className="modal-header">
        //         <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        //         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //         <span aria-hidden="true">×</span>
        //         </button>
        //     </div>
        //     <div className="modal-body">
        //         ...
        //     </div>
        //     <div className="modal-footer">
        //         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //         <button type="button" className="btn btn-primary">Save changes</button>
        //     </div>
        //     </div>
        // </div>
        // </div>

        <Modal
            {...props}
            show={}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
            </Modal.Footer>
        </Modal>


    )
}

export default ModalWindow;