import React, { PureComponent } from 'react'
import '../../assets/css/custom.css';

const Basicard = ({title}) => {

    console.log(title);
    return (
        <section className="card mb-4">
        <div className="card-body title">
            <h3>{title}</h3>
        </div>
    </section>
    )
}

export default Basicard;