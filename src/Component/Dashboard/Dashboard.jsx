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
import arrowLeft from '../../Assets/pagination/chevron_left.svg'
import arrowRight from '../../Assets/pagination/chevron_right.svg'
import doubleArrowIcon from '../../Assets/dashboard/doublearrow.svg'
import hamburgerIcon from '../../Assets/dashboard/hamburger.svg'
import ofd from '../../Assets/icon_ofd.svg'


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { showSidebar: true }
    }
    collapseSidebar = () => {
        this.setState({ showSidebar: false })
    }
    unCollapseSidebar = () => {
        this.setState({ showSidebar: true })
    }
    render() {
        const { } = this.props
        return (
            <div className="dashboard">
                <div className="navbar">
                    <div className="brand-logo">
                        <img onClick={this.unCollapseSidebar} className={`hamburgerIcon ${this.state.showSidebar ? 'hide' : 'show'}`} src={hamburgerIcon} />
                        <img src={logo} />
                    </div>
                    <div className="nav-menu">
                        <select>
                            <option>Location</option>
                        </select>
                        <div><img className="user-avatar" src="https://avatars2.githubusercontent.com/u/55250067?s=460&u=407691e2002e24be14f7cbfa3394d8332cc041b6&v=4" alt="" /></div>
                    </div>

                </div>
                <div className="page-wrapper">
                    <div className={`sidebar ${this.state.showSidebar ? 'show' : 'hide'}`}>
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
                        <div>
                            <img onClick={this.collapseSidebar} class="collapse-sidebar" src={doubleArrowIcon} />
                        </div>
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
                                        <div className="card-text">55</div>
                                        <div className="card-icon"><img src={ofd} /></div>
                                        <div className="card-body">
                                            <div className="card-title">OFD</div>
                                            <div className="card-description">Out For Delivery</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-text">430</div>
                                        <div className="card-icon"><img src={ofd} /></div>
                                        <div className="card-body">
                                            <div className="card-title">DEL</div>
                                            <div className="card-description">Delivered</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-text">23</div>
                                        <div className="card-icon"><img src={ofd} /></div>
                                        <div className="card-body">
                                            <div className="card-title">UNDEL</div>
                                            <div className="card-description">UnDelivered</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pieChart"></div>
                            </div>
                            <div className="table-wrapper">
                                <div className="page-title">FE Performance</div>
                                <div>
                                    <table>
                                        <colgroup>
                                            <col style={{ width: '633px' }} />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
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
                                                <td>97%
                                                    <div className="progress-bar">
                                                        <span className="progress-bar-fill" style={{ width: '97px' }}></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Daha Mosin</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>86%
                                                    <div className="progress-bar">
                                                        <span className="progress-bar-fill" style={{ width: '86px' }}></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Dahana Gaitonde</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>78%
                                                    <div className="progress-bar">
                                                        <span className="progress-bar-fill" style={{ width: '78px' }}></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ganesh Gaitonde</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>74%
                                                    <div className="progress-bar">
                                                        <span className="progress-bar-fill" style={{ width: '74px' }}></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Johnny Smith</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>72%
                                                    <div className="progress-bar">
                                                        <span className="progress-bar-fill" style={{ width: '72px' }}></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Falcon Mouly</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>70%
                                                    <div className="progress-bar">
                                                        <span className="progress-bar-fill" style={{ width: '70px' }}></span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    <div className="pagination-wrapper">
                                        <div class="pagination">
                                            <a href="#"><img src={arrowLeft} /></a>
                                            <a href="#" className="active">1</a>
                                            <a href="#">2</a>
                                            <a href="#">3</a>
                                            <a href="#">4</a>
                                            <a href="#">5</a>
                                            <a href="#"><img src={arrowRight} /></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >);
    }
}

export default Dashboard;