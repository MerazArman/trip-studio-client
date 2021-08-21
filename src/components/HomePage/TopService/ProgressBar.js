import React from 'react';
import './Top.css';
const ProgressBar = () => {
    return (
        <div className="row">

            <div className="col-12 mb-3">
                <div className="d-flex justify-content-between">
                <h5>Customer satisfaction</h5>
                <h5>92%</h5>
                </div>
                <div className="progress" style={{ height: "4px" }}>
                    <div className="progress-bar progress-bar1 zero zero1" role="progressbar" style={{ width: "92%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>

            <div className="col-12 mt-3">
                <div className="d-flex justify-content-between">
                <h5>On Time Delivery</h5>
                <h5>92%</h5>
                </div>
                <div className="progress" style={{ height: "4px" }}>
                    <div className="progress-bar progress-bar2 zero zero2" role="progressbar" style={{ width: "92%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>

        </div>
    );
};

export default ProgressBar;