import React, { Component } from "react";

import './Dashboard.css'
import logo from '../../Assets/logo.svg';

import dashboardIcon from '../../Assets//sidebar/dashboard.svg'
import operationsIcon from '../../Assets//sidebar/operations.svg'
import trackingIcon from '../../Assets//sidebar/tracking.svg'
import reportsIcon from '../../Assets//sidebar/reports.svg'
import configurationsIcon from '../../Assets//sidebar/configurations.svg'
import searchIcon from '../../Assets/dashboard/search.svg'
import calendarIcon from '../../Assets//dashboard/cal.svg'
import bookingIcon from '../../Assets/dashboard/icon_booking.svg'


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { } = this.props
        return (
            <div className="dashboard">
                <div className="navbar">
                    <div className="brand-logo">
                        <img src={logo} />
                    </div>
                    <div className="nav-menu">
                        <select>
                            <option>Location</option>
                        </select>
                    </div>

                </div>
                <div className="page-wrapper">
                    <div className="sidebar">
                        <ul className="menu-list">
                            <li className="list-item active">
                                <img src={dashboardIcon} />
                                Dashboard</li>
                            <li className="list-item">
                                <img src={operationsIcon} />Operations</li>
                            <li className="list-item">
                                <img src={trackingIcon} />Tracking</li>
                            <li className="list-item">
                                <img src={reportsIcon} />Reports</li>
                            <li className="list-item">
                                <img src={configurationsIcon} />Configurations</li>
                        </ul>
                    </div>
                    <div className="content-wrapper">
                        <div className="page-header">

                            <div className="page-title">Dashboard</div>
                            <div>
                                <div>
                                    <button className="icon-button">
                                        <img src={searchIcon} />
                                    </button>
                                    <button className="icon-button">
                                        <img src={calendarIcon} />
                                    </button>
                                    <span className="date-range">12/12/2019 - 18/12/2019</span>
                                </div>

                            </div>
                        </div>
                        <div className="page-content">
                            <div className="stats-wrapper">
                                <div className="stats-card">
                                    <div className="card">
                                        <div className="card-text">121</div>
                                        <div className="card-icon"><img src={bookingIcon} /></div>
                                        <div className="card-body">
                                            <div className="card-title">Booking</div>
                                            <div className="card-description">No of waybills</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-text">121</div>
                                        <div className="card-icon"><img src={bookingIcon} /></div>
                                        <div className="card-body">
                                            <div className="card-title">Booking</div>
                                            <div className="card-description">No of waybills</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-text">121</div>
                                        <div className="card-icon"><img src={bookingIcon} /></div>
                                        <div className="card-body">
                                            <div className="card-title">Booking</div>
                                            <div className="card-description">No of waybills</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-text">121</div>
                                        <div className="card-icon"><img src={bookingIcon} /></div>
                                        <div className="card-body">
                                            <div className="card-title">Booking</div>
                                            <div className="card-description">No of waybills</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-wrapper">
                                <div className="page-title">FE Performance</div>
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>FE name</th>
                                                <th>Del</th>
                                                <th>Undel</th>
                                                <th>Na</th>
                                                <th>Delivery in %</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Daarun shaikh</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>97% </td>
                                            </tr>
                                            <tr>
                                                <td>Daarun shaikh</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>97% </td>
                                            </tr>
                                            <tr>
                                                <td>Daarun shaikh</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>97% </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Dashboard;