import React, { PureComponent } from 'react'
import '../../assets/css/custom.css';

const Basicard = ({title}) => {

    const sidebarStyle = {
        backgroundColor: '#af1115',
         color: '#ffffff'//,  //Example color override
       };
    return (
        <section className="card">
        <div className="card-body title" style={sidebarStyle}>
            <h3>{title}</h3>
        </div>
    </section>
    )
}

export default Basicard;