import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { Panel, PanelBody } from '../../components/panel/panel'
import { useEffect, useState } from "react";
import SweetAlertService from "../../services/SweetAlertService";
import { Loader } from '../../shared/common/Loader';
import { useLoader } from "../shared/services/Loader";
import { usePagination } from "../shared/services/PaginationService";


const ProjectList = () => {
    const { loading, showLoader, hideLoader } = useLoader();
    const navigate = useNavigate();
    const projects=[
  {
    "application_type": "MobileApplication",
    "created_by": "DevTest",
    "description": "Swag Lab",
    "id": 38,
    "last_modified_by": "NA",
    "name": "Swag Lab",
    "release_names": [
      "Release - 1.0"
    ],
    "test_case_count": 1
  },
  {
    "application_type": "WebApplication",
    "created_by": "Admin",
    "description": "Orange HR Management",
    "id": 27,
    "last_modified_by": "Admin",
    "name": "Orange HR Management",
    "release_names": [
      "release 1"
    ],
    "test_case_count": 209
  },
  {
    "application_type": "WebApplication",
    "created_by": "Admin",
    "description": "BARS application",
    "id": 26,
    "last_modified_by": "Admin",
    "name": "BARS",
    "release_names": [
      "release 1"
    ],
    "test_case_count": 216
  }
]

    const [defaultView, setDefaultView] = useState<boolean>(true);
    const { currentPage, totalPages, handlePageChange, paginatedData } = usePagination(projects);
    const [viewedProject, setViewedProject] = useState<any>();

    const navigateToProject = async () => {
        showLoader();
            navigate(`/overview`);
    };

    const onViewClick = (setup: any) => {
        setViewedProject(setup);
    };

    return (
        <>
            {loading && <Loader />}
            <>
                <Panel>
                    <PanelBody>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 py-3">
                            <h2 className="mb-0">Projects</h2>
                            <div className="d-flex align-items-center flex-wrap gap-3">
                                <p className="border border-theme border-2 rounded-pill px-4 py-2 mb-0 mw-100">
                                    <i className="fa fa-info-circle text-theme pe-2"></i>
                                    Select a project to start creating and managing your tests
                                </p>
                                    <button
                                        className="btn btn-theme rounded-pill px-4 py-2"
                                        onClick={() => navigate("/createproject")}
                                    >
                                        Create Project
                                    </button>
                                <div className="d-flex gap-3">
                                    <img src="/assets/img/images/menu.png" className={`${!defaultView ? 'active-img' : ''} cursor-pointer`} onClick={() => setDefaultView(false)} alt="List View" width={24} height={24} />
                                    <img src="/assets/img/images/list.png" className={`${defaultView ? 'text-theme' : ''} cursor-pointer`} onClick={() => setDefaultView(true)} alt="List View" width={24} height={24} />
                                </div>
                            </div>
                        </div>
                    </PanelBody>
                </Panel>
                {projects && projects?.length > 0 ? (<>
                    {defaultView ? (<>
                        <div className='card b-1 rounded-0'>
                            <div className="table-responsive">
                                <table className="table table-striped mb-0 table-thead-sticky border border-secondary">
                                    <thead >
                                        <tr>
                                            <th className='text-white text-start'>SL.no</th>
                                            <th className='text-white text-start'>Name</th>
                                            <th className='text-white text-start'>APPLICATION TYPE</th>
                                            <th className='text-white text-start'>TESTCASE COUNT</th>
                                            <th className='text-white text-start'>Created By</th>
                                            <th className='text-white text-start'>Modified By</th>
                                                <th className='text-white text-start'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedData?.map((project: any, index: number) => (
                                            <tr key={project?.id}>
                                                <td className="text-start"> {(currentPage - 1) * 10 + index + 1}</td>
                                                <td className="text-start">
                                                    <a
                                                        href="#"
                                                        onClick={() => navigateToProject()}>{project?.name}
                                                    </a>
                                                </td>
                                                <td className="text-start">{project?.application_type}</td>
                                                <td className="text-start">{project?.test_case_count}</td>
                                                <td className="text-start">{project?.created_by}</td>
                                                <td className="text-start">{project?.last_modified_by}</td>
                                                    <td className="text-start">
                                                        <i
                                                            className="fas fa-eye pe-3 cursor-pointer"
                                                            role="button"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWithoutAnimation"
                                                            onClick={() => onViewClick(project)}
                                                            title="View"
                                                        ></i>
                                                        <i
                                                            className="fas fa-pencil pe-3 cursor-pointer"
                                                            title="Edit"
                                                            onClick={() =>
                                                                navigate(`/updateproject/${btoa(project?.id.toString())}`)
                                                            }
                                                        ></i>
                                                        <i className="fas fa-trash-can text-danger cursor-pointer"
                                                            title="Delete"
                                                            >
                                                        </i>
                                                    </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={7}>
                                                <div className="d-flex flex-wrap justify-content-between align-items-center w-100 gap-2 text-center text-md-start">
                                                    <div className="flex-fill text-start">
                                                        <span className="fw-bold text-secondary">
                                                            Total: {projects?.length}
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill text-center">
                                                        <span className="fw-bold">
                                                            {currentPage} / {totalPages}
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill d-flex justify-content-end gap-2">
                                                        <button
                                                            className="btn btn-default rounded-0"
                                                            onClick={() => handlePageChange(currentPage - 1)}
                                                            disabled={currentPage === 1}
                                                        >
                                                            <i className="fa fa-angle-left pe-2"></i> Previous
                                                        </button>
                                                        <button
                                                            className="btn btn-default rounded-0"
                                                            onClick={() => handlePageChange(currentPage + 1)}
                                                            disabled={currentPage === totalPages}
                                                        >
                                                            Next <i className="fa fa-angle-right ps-2"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            {/* Modal for View Details */}
                            <div className="modal fade" id="modalWithoutAnimation">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">Project Details</h4>
                                            <button
                                                type="button"
                                                className="btn-close btn-close-white fs-5"
                                                data-bs-dismiss="modal"
                                                aria-hidden="true"
                                            ></button>
                                        </div>
                                        <div className="modal-body px-4">
                                            {viewedProject ? (
                                                <div>
                                                    <p className="mb-2">
                                                        <strong className="me-2">Name: </strong>
                                                        <span className="d-inline text-break">{viewedProject?.name}</span>
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong className="me-2">Application Type: </strong>
                                                        <span className="d-inline text-break">{viewedProject?.application_type}</span>
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong className="me-2">Testcase Count: </strong>
                                                        <span className="d-inline text-break">{viewedProject?.test_case_count}</span>
                                                    </p>
                                                    <p className="mb-2"><strong className="me-2">Releases: </strong></p>
                                                    <div className="row mb-3">
                                                        <div className="col-md-8">
                                                            <div className="card border rounded-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-striped mb-0 table-thead-sticky border border-secondary">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="text-start text-white" scope="col">
                                                                                    SL.no
                                                                                </th>
                                                                                <th className="text-start text-white" scope="col">
                                                                                    Release Name
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {viewedProject?.release_names?.length > 0 && (
                                                                                viewedProject.release_names.map((name, index) => (
                                                                                    <tr key={index}>
                                                                                        <td className="text-start">{index + 1}</td>
                                                                                        <td className="text-start">{name}</td>
                                                                                    </tr>
                                                                                )))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <p>No details available</p>
                                            )}
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-outline-theme btn-lg rounded-pill me-3 px-4 px-md-5"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>) : (<>
                        <div className="row">
                            {projects.map((project: any) => (
                                <div className="col-xl-3 col-sm-6 " key={project?.id}>
                                    <div className="widget-card rounded mb-20px hover-bg-lightBlue">
                                        <div className="widget-card-cover rounded"></div>
                                        <div className="widget-card-content p-4"
                                            onClick={() => navigateToProject()}
                                        >
                                            <h5 className="fs-12px text-body"><b></b></h5>
                                            <h4 className="text-theme mb-10px">{project?.name}</h4>
                                            <div className='py-2'>
                                                <p className="fw-bold text-greylight pb-0 mb-1">Application type</p>
                                                <p>{project?.application_type}</p>
                                            </div>
                                            <div className='pt-2'>
                                                <p className="fw-bold text-greylight pb-0 mb-1">Test Cases</p>
                                                <p>{project?.test_case_count}</p>
                                            </div>
                                        </div>
                                            <div className="widget-card-content bottom">
                                                <div className='d-flex justify-content-end'>
                                                    <i
                                                        className="fas fa-pencil pe-3"
                                                        onClick={() =>
                                                            navigate(`/updateproject/${btoa(project?.id.toString())}`)
                                                        }
                                                    ></i>
                                                    <i
                                                        className="fas fa-trash-can text-danger"
                                                    ></i>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            ))}
                                <div className="col-xl-3 col-sm-6" onClick={() => navigate("/createproject")}>
                                    <div className="widget-card rounded mb-20px d-flex flex-column projectCard" >
                                        <div className="widget-card-cover rounded bg-lightBlue"></div>
                                        <div className="widget-card-content p-4 d-flex justify-content-center align-items-center flex-grow-1">
                                            <img src="/assets/img/images/plusButton.svg" alt="Add" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </>)}
                </>) : (<>
                    <div className="d-flex justify-content-center flex-column nothing_to_show">
                        <div className="text-center">
                            <img
                                src="/assets/img/images/nothingToShow.svg"
                                alt="No reports illustration"
                                className="img-fluid mb-3"
                            />
                            <h5 className="text-dark mb-2">Nothing to show</h5>
                            <p className="text-muted">There are no projects assigned to you</p>
                        </div>
                    </div>
                </>)}
            </>

        </>
    )
}

export default ProjectList
