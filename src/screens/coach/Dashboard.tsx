import React, { useContext, useState, useEffect } from 'react';

import Notifications from '../../assets/img/d-menu/notifications.svg';
import ProfilePic from '../../assets/img/avatars/avatar1.jpeg';
import ChartData1 from '../../assets/img/d-img/chartData-1.svg';
import ChartData2 from '../../assets/img/d-img/chartData-2.svg';
import ChartData3 from '../../assets/img/d-img/chartData-3.svg';
import ProImg from '../../assets/img/avatars/avatar2.jpeg';
import Online from '../../assets/img/online.svg';
import Accept from '../../assets/img/d-img/accept.svg';
import Reject from '../../assets/img/d-img/reject.svg';
import Left from '../../assets/img/d-img/left.svg';
import Right from '../../assets/img/d-img/right.svg';

import LeftMenu from './components/LeftMenu';

function Dashboard() {
    
    return (
        <div id="wrapper" className='d-flex'>
            <LeftMenu />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar shadow-n overflow-hidden">
                        <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                            <div>
                                <p className="mb-0 f-color l-size fw-medium">Hi&nbsp;<span>Zakari</span>&nbsp;-&nbsp;<span className="fw-normal">Thu 8 Sep</span></p>
                            </div>
                            <ul className="navbar-nav flex-nowrap ms-auto">
                                <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search"></i></a>
                                    <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                        <form className="me-auto navbar-search w-100">
                                            <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                                <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <div className="nav-item dropdown no-arrow" style={{zIndex: 999}}><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><img src={Notifications} /></a>
                                        <div className="dropdown-menu dropdown-menu-end dropdown-list position-fixed animated--grow-in">
                                            <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="me-3">
                                                    <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                                </div>
                                                <div><span className="small text-gray-500">December 12, 2019</span>
                                                    <p>A new monthly report is ready to download!</p>
                                                </div>
                                            </a><a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="me-3">
                                                    <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                                </div>
                                                <div><span className="small text-gray-500">December 7, 2019</span>
                                                    <p>$290.29 has been deposited into your account!</p>
                                                </div>
                                            </a><a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="me-3">
                                                    <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                                </div>
                                                <div><span className="small text-gray-500">December 2, 2019</span>
                                                    <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                                </div>
                                            </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                                </li>
                                <li className="nav-item dropdown no-arrow">
                                    <div className="nav-item dropdown show no-arrow" style={{zIndex: 999}}><a className="dropdown-toggle nav-link" aria-expanded="true" data-bs-toggle="dropdown" href="#"><img className="border rounded-circle img-profile border-0" src={ProfilePic} /></a>
                                        <div className="dropdown-menu show shadow dropdown-menu-end animated--grow-in position-fixed me-5 d-block" data-bs-popper="none" ><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
                                            <div className="dropdown-divider"></div><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container-fluid vh-100">
                        <div className='text-start'><span className="text-black-50 l-size">Sales</span>
                            <h1 className="h-size mb-4 f-color fw-normal mt-1 text-start">Sales</h1>
                        </div>
                        <div className="row mb-4">
                            <div className="col col-12 col-lg-6 col-xl-4 mb-4">
                                <div className="card shadow border-0 shadow-c">
                                    <div className="card-body">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col col-12 px-2">
                                                <div className="mb-4 text-start"><span className="text-capitalize fw-normal l-size f-color text-start">Live revenue (this month)</span></div>
                                            </div>
                                            <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
                                                <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal f-color">£2,456.20</span></div><img src={ChartData1} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-6 col-xl-4 mb-4">
                                <div className="card shadow border-0 shadow-c">
                                    <div className="card-body">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col col-12 px-2">
                                                <div className="mb-4 text-start"><span className="text-capitalize fw-normal l-size f-color text-start">Active Client</span></div>
                                            </div>
                                            <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
                                                <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal f-color">62</span></div><img src={ChartData2} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-6 col-xl-4 mb-4">
                                <div className="card shadow border-0 shadow-c">
                                    <div className="card-body">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col col-12 px-2">
                                                <div className="mb-4 text-start"><span className="text-capitalize fw-normal l-size f-color text-start">New client (weekly)</span></div>
                                            </div>
                                            <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
                                                <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal f-color">2</span></div><img src={ChartData3} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-6 col-xl-4 mb-4">
                                <div className="card shadow border-0 shadow-c">
                                    <div className="card-body">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col col-12 px-2">
                                                <div className="mb-1 text-start"><span className="text-capitalize fw-normal l-size text-black-50">Profile View (this month)</span></div>
                                            </div>
                                            <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
                                                <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal f-color">24,154</span></div>
                                                <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">+ 140%</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-6 col-xl-4 mb-4">
                                <div className="card shadow border-0 shadow-c">
                                    <div className="card-body">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col col-12 px-2">
                                                <div className="mb-1 text-start"><span className="text-capitalize fw-normal l-size text-black-50">Profile Convesion (this month)</span></div>
                                            </div>
                                            <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
                                                <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal f-color">12,5%</span></div>
                                                <div className="rounded-pill d-flex justify-content-center align-items-center" style={{height: "32px",width: "64px",backgroundColor: "#ebebeb"}}><span className="t-h f-color fw-normal">+ 0.3%</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-6 col-xl-4 mb-4">
                                <div className="card shadow border-0 shadow-c">
                                    <div className="card-body">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col col-12 px-2">
                                                <div className="mb-1 text-start"><span className="text-capitalize fw-normal l-size text-black-50">Active Package</span></div>
                                            </div>
                                            <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
                                                <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal text-black-50">3</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-12">
                                <div className="card shadow mb-4 shadow-n">
                                    <div className="card-header py-3 bg-white border-0 text-start">
                                        <h6 className="text-primary h-size f-color fw-normal mb-0">Client Request</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="fw-medium f-color table-s w-25 text-start">Head</th>
                                                        <th className="fw-medium f-color table-s text-start" style={{width: "20%"}}>Package</th>
                                                        <th className="fw-medium f-color table-s text-start" style={{width: "20%"}}>Location</th>
                                                        <th className="fw-medium f-color text-end" style={{width: "35%"}}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="table-s">
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex justify-content-start align-items-center gap-2">
                                                                <div className="position-relative c-img"><img className="rounded-circle c-img" src={ProImg} /><img src={Online} style={{height: "10px",width: "10px",position: "absolute",bottom: 0,right: 0}} /></div><span className="f-color">Helen Sega</span>
                                                                </div>
                                                        </td>
                                                        <td>
                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Package 1</span></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">London</span></div>
                                                        </td>
                                                        <td className="w-100">
                                                            <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
                                                                <div className="d-flex justify-content-center align-items-center">
                                                                    <div className="px-2 a-div d-flex justify-content-center align-items-center"><img className="me-2" src={Accept} /><span className="t-h fw-normal text-uppercase">Accept</span></div>
                                                                    <div className="px-2 r-div d-flex justify-content-center align-items-center"><img className="me-2" src={Reject} /><span className="t-h fw-normal text-uppercase">Reject</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex justify-content-start align-items-center gap-2">
                                                                <div className="position-relative c-img"><img className="rounded-circle c-img" src={ProImg} /><img src={Online} style={{height: "10px",width: "10px",position: "absolute",bottom: 0,right: 0}} /></div><span className="f-color">Helen Sega</span>
                                                                </div>
                                                        </td>
                                                        <td>
                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Package 1</span></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">London</span></div>
                                                        </td>
                                                        <td className="w-100">
                                                            <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
                                                                <div className="d-flex justify-content-center align-items-center">
                                                                    <div className="px-2 a-div d-flex justify-content-center align-items-center"><img className="me-2" src={Accept} /><span className="t-h fw-normal text-uppercase">Accept</span></div>
                                                                    <div className="px-2 r-div d-flex justify-content-center align-items-center"><img className="me-2" src={Reject} /><span className="t-h fw-normal text-uppercase">Reject</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex justify-content-start align-items-center gap-2">
                                                                <div className="position-relative c-img"><img className="rounded-circle c-img" src={ProImg} /><img src={Online} style={{height: "10px",width: "10px",position: "absolute",bottom: 0,right: 0}} /></div><span className="f-color">Helen Sega</span>
                                                                </div>
                                                        </td>
                                                        <td>
                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Package 1</span></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">London</span></div>
                                                        </td>
                                                        <td className="w-100">
                                                            <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
                                                                <div className="d-flex justify-content-center align-items-center">
                                                                    <div className="px-2 a-div d-flex justify-content-center align-items-center"><img className="me-2" src={Accept} /><span className="t-h fw-normal text-uppercase">Accept</span></div>
                                                                    <div className="px-2 r-div d-flex justify-content-center align-items-center"><img className="me-2" src={Reject} /><span className="t-h fw-normal text-uppercase">Reject</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex justify-content-start align-items-center gap-2">
                                                                <div className="position-relative c-img"><img className="rounded-circle c-img" src={ProImg} /><img src={Online} style={{height: "10px",width: "10px",position: "absolute",bottom: 0,right: 0}} /></div><span className="f-color">Helen Sega</span>
                                                                </div>
                                                        </td>
                                                        <td>
                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Package 1</span></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">London</span></div>
                                                        </td>
                                                        <td className="w-100">
                                                            <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
                                                                <div className="d-flex justify-content-center align-items-center">
                                                                    <div className="px-2 a-div d-flex justify-content-center align-items-center"><img className="me-2" src={Accept} /><span className="t-h fw-normal text-uppercase">Accept</span></div>
                                                                    <div className="px-2 r-div d-flex justify-content-center align-items-center"><img className="me-2" src={Reject} /><span className="t-h fw-normal text-uppercase">Reject</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex justify-content-start align-items-center gap-2">
                                                                <div className="position-relative c-img"><img className="rounded-circle c-img" src={ProImg} /><img src={Online} style={{height: "10px",width: "10px",position: "absolute",bottom: 0,right: 0}} /></div><span className="f-color">Helen Sega</span>
                                                                </div>
                                                        </td>
                                                        <td>
                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Package 1</span></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">London</span></div>
                                                        </td>
                                                        <td className="w-100">
                                                            <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
                                                                <div className="d-flex justify-content-center align-items-center">
                                                                    <div className="px-2 a-div d-flex justify-content-center align-items-center"><img className="me-2" src={Accept} /><span className="t-h fw-normal text-uppercase">Accept</span></div>
                                                                    <div className="px-2 r-div d-flex justify-content-center align-items-center"><img className="me-2" src={Reject} /><span className="t-h fw-normal text-uppercase">Reject</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="row">
                                            <div className="col d-flex justify-content-end align-items-center gap-4">
                                                <div className="d-flex justify-content-center align-items-center gap-2">
                                                    <p className="fw-normal t-h text-black-50 mb-0">Rows per page:</p>
                                                    <div className="dropdown d-flex justify-content-center align-items-center gap-2"><button className="btn btn-primary dropdown-toggle fw-normal t-h f-color d-btn" aria-expanded="false" data-bs-toggle="dropdown" type="button">10&nbsp;</button>
                                                        <div className="dropdown-menu"><a className="dropdown-item" href="#">10</a><a className="dropdown-item" href="#">20</a><a className="dropdown-item" href="#">50</a></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="fw-normal t-h f-color mb-0"><span>1-5&nbsp;</span>of<span>&nbsp;13</span></p>
                                                </div>
                                                <div><img className="pe-2" src={Left} /><img className="ms-3" src={Right} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
            </div>
            );
  }

            export default Dashboard;