import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Dashboard.css'

const Dashboard = () => {

    return (
        <div className='dashboard  m-auto font container-fluid'>
            <div className="dashboard-home text-center">
                <h1><span className='text-danger'>Eco-Shop </span>Dashboard</h1>
                <div className="boxes-dash text-left ">
                    <div className="col-md-3 box-1">
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faDotCircle} className='mt-2' />
                            <h4>New Orders</h4>
                        </div>
                        <h6>5 Orders</h6>
                    </div>
                    <div className="col-md-3 box-2">
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faDotCircle} className='mt-2' />
                            <h4>Total Orders</h4>
                        </div>
                        <h6>55 Orders</h6>
                    </div>
                    <div className="col-md-3 box-3">
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faDotCircle} className='mt-2' />
                            <h4>In Progess Orders</h4>
                        </div>
                        <h6>15 Orders</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;