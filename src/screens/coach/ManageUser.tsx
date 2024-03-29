import React, { useContext, useState, useEffect } from 'react';
import UserPro from '../../assets/img/avatars/avatar3.jpeg';
import Message from '../../assets/img/icon-manage/message.svg';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';

function ManageUser() {

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100 text-start">
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/coach/clients"} className="text-decoration-none"><span className="t-color text-decoration-none">Client List</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"#"} className="text-decoration-none"><span className="f-color">Henry Brown</span></Link></li>
                                </ol>
                                <h1 className="h-size mb-5 f-color fw-normal mt-1">Henry Brown</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12">
                                    <div className="card card-s mb-3">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex justify-content-start align-items-center gap-2">
                                                    <div className="m-img"><img className="rounded-circle m-img" src={UserPro} /></div>
                                                    <div>
                                                        <p className="mb-0 fw-normal f-color">John Doe</p><span className="m-p text-black-50">Elite</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <div className="px-3 msgBtn d-flex justify-content-center align-items-center"><img className="me-2" src={Message} /><span className="m-p fw-medium text-uppercase">Message</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 mb-4">
                                    <div className="card card-s">
                                        <div className="card-body">
                                            <div className="pt-1 pb-2 mb-4 bottomC">
                                                <h1 className="f-color fw-regular f-h">Client Information</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="mb-5">
                                                        <div className="d-flex justify-content-between align-items-center mb-4"><span className="f-color l-size fw-medium">Email</span><span className="f-color l-size fw-normal">henry@gmail.com</span></div>
                                                        <div className="d-flex justify-content-between align-items-center mb-3"><span className="f-color l-size fw-medium">Phone</span><span className="f-color l-size fw-normal">+447236 5489 721</span></div>
                                                    </div>
                                                    <div className="px-3 w-100 cursor-pointer msgBtn d-flex justify-content-center align-items-center"><span className="m-p fw-medium text-uppercase">See more details</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 mb-4">
                                    <div className="card card-s">
                                        <div className="card-body">
                                            <div className="pt-1 pb-2 mb-4 bottomC">
                                                <h1 className="f-color fw-regular f-h" >Programme</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col col-12">
                                                    <div>
                                                        <div className="d-flex justify-content-between align-items-center mb-4"><span className="f-color l-size fw-medium">Description</span><span className="f-color l-size fw-normal">Full body level 3</span></div>
                                                        <div className="d-flex justify-content-between align-items-center mb-4"><span className="f-color l-size fw-medium">Last modified</span><span className="f-color l-size fw-normal">28/12/22</span></div>
                                                        <div className="d-flex justify-content-between align-items-center mb-5"><span className="f-color l-size fw-medium">Status</span>
                                                            <div className="d-flex justify-content-center align-items-center rounded-pill px-3 py-1 bg-tag"><span className="text-white m-p">Published</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col col-12 col-lg-6 pe-lg-2"><button className="btn btn-primary w-100 text-uppercase btn-view border-0 editBtn" type="button">EDIT</button></div>
                                                <div className="col col-12 col-lg-6 ps-lg-2"><button className="btn btn-primary w-100 text-uppercase btn-view border-0 pBtn" type="button">PUBLISH</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
    );
}

export default ManageUser;