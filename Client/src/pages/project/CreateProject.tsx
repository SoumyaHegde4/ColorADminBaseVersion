import { Panel, PanelBody } from '../../components/panel/panel'
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import SweetAlertService from "../../services/SweetAlertService";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoader } from '../shared/services/Loader';
import { Loader } from '../../shared/common/Loader';


const CreateProject = () => {
    const { loading, showLoader, hideLoader } = useLoader();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();



    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Panel>
                        <PanelBody>
                            <div className='d-flex align-items-center'>
                                <i className="fas fa-lg fa-fw me-10px fa-arrow-left cursor-pointer" onClick={() => navigate("/project")}></i>
                                <ol className="breadcrumb float-xl-start">
                                    <li className="breadcrumb-item active">Create Project</li>
                                </ol>
                            </div>
                            <hr></hr>
                            <form >
                                <div className="row mb-3">
                                    <div className="col-md-5">
                                        <label className="form-label">Project name <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter project name"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-5">
                                        <label className="form-label">Project description <span className="text-danger">*</span></label>
                                        <textarea
                                            className="form-control"
                                            rows={3}
                                            placeholder="Enter description"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Type <span className="text-danger">*</span></label>
                                    <div className="row">
                                        <div className="col-md-6 pt-2">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="web"
                                                />
                                                <label className="form-check-label" htmlFor="web">Web</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="desktop"
                                                />
                                                <label className="form-check-label" htmlFor="desktop">Desktop</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="mobile"
                                                />
                                                <label className="form-check-label" htmlFor="mobile">Mobile</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-md-4">
                                            <p className="border border-theme border-1 rounded-pill px-4 py-2 mb-0 mw-100">
                                                <i className="fa fa-info-circle text-theme pe-2"></i>
                                                The project type cannot be changed once created.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-5">
                                        <label className="form-label">Release name <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter release name"
                                          
                                        />
                                    </div>
                                </div>
                                <div className='col-md-5 d-flex justify-content-end mt-4'>
                                    <button className="btn btn-outline-theme btn-lg rounded-pill me-3 px-4 px-md-5" type="button" onClick={() => navigate("/project")}>Cancel</button>
                                    <button className="btn btn-theme btn-lg rounded-pill px-4 px-md-5" type="submit">Create</button>
                                </div>
                            </form>
                        </PanelBody>
                    </Panel>
                </>
            )}
        </>
    )
}

export default CreateProject