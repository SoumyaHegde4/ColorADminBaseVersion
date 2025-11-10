import { ChangeEvent, useEffect, useState } from "react";
import { Panel, PanelBody } from "../../components/panel/panel";
import * as React from "react";
import { useLoader } from "../shared/services/Loader";
import { useNavigate } from "react-router-dom";
import SweetAlertService from "../../services/SweetAlertService";
import { Loader } from "../../shared/common/Loader";
import Chart from "chart.js/auto";
import DonutChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./dashboard.css";
import PieChart from "react-apexcharts";
import ApexChart from "react-apexcharts"

const ProjectDashboard = () => {
    const projectDashboard={
  "Execution_test_count": 6,
  "Test_plan_count": 3,
  "Test_step_count": 5132,
  "Test_suite_count": 26
}
    const { loading, showLoader, hideLoader } = useLoader();
    const navigate = useNavigate();
    const releaseDetails=[
  {
    "id": 28,
    "project_id": 27,
    "release_name": "release 1",
    "release_notes": ""
  }
]

    const projectDetails=[
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
    "test_case_count": 208
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

    const [selectedProject, setSelectedProject] = useState(27);
    const [selectedRelease, setSelectedRelease] = useState(7);
    const FrameworkBarChartData={
  "frameworks": [
    "Cypress",
    "Robot",
    "Selenium"
  ],
  "series": [
    {
      "data": [
        0,
        0,
        7
      ],
      "name": "Pass"
    },
    {
      "data": [
        0,
        0,
        6
      ],
      "name": "Fail"
    }
  ]
}

    const testCaseMetrics=[
  8,
  6,
  194
]

    const testCaseCountByBrowser=[
  {
    "browser_name": "chrome",
    "test_case_count": 9,
    "test_case_failed": 6,
    "test_case_passed": 3
  },
  {
    "browser_name": "edge",
    "test_case_count": 13,
    "test_case_failed": 6,
    "test_case_passed": 7
  },
  {
    "browser_name": "firefox",
    "test_case_count": 3,
    "test_case_failed": 0,
    "test_case_passed": 3
  }
]

    const releaseReadiness=[
  8,
  200
]

    const handleProjectChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        const projectId = Number(event.target.value);
        const selectedProject = projectDetails.find(
            (project) => project.id === projectId
        );
    };

    const handleReleaseChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const releaseId = Number(event.target.value);
        const selectedRelease = releaseDetails.find(
            (release) => release?.id === releaseId
        );
    };


   
    useEffect(() => {
        const canvas = document.getElementById(
            "barChart"
        ) as HTMLCanvasElement | null;
        if (!canvas) return;
        Chart.getChart(canvas)?.destroy();
        new Chart(canvas, {
            type: 'bar',
            data: {
                labels: FrameworkBarChartData?.frameworks,
                datasets: FrameworkBarChartData?.series
                    ? FrameworkBarChartData.series.map((data) => ({
                        label: data?.name,
                        data: data?.data,
                        backgroundColor:
                            data?.name === "Pass"
                                ? "#A4D761"
                                : data?.name === "Fail"
                                    ? "#F26C69"
                                    : undefined,
                        stack: 'Stack 0',
                    }))
                    : [],
            },
            options: {
                responsive: false,
                maintainAspectRatio: true,
            },
        });
    }, [FrameworkBarChartData, selectedProject, selectedRelease, loading]);

    const TestCaseMetricsPieChartOptions: ApexOptions = {
        labels: ['Passed', 'Failed', 'Not executed'],
        chart: { type: 'donut' },
        dataLabels: {
            dropShadow: { enabled: false },
            style: { colors: ['Passed', 'Failed', 'Not executed'] },
        },
        stroke: { show: false },
        colors: ['#A4D761', '#F26C69', '#DADADA'],
        legend: { show: false },
    };

    const pieChartOptionsforReadiness: ApexOptions = {
        labels: ["Ready", "Not Ready"],
        chart: { type: 'donut' },
        dataLabels: {
            dropShadow: { enabled: false },
            style: { colors: ["#fff"] },
        },
        stroke: { show: false },
        colors: ["#A4D761", "#F26C69"],
        legend: { show: false }
    };

    //hard coded values for browserStatisticson ios and android( mobile only)
    const pieChartOptionsForMobile: ApexOptions = {
        chart: {
            type: "pie",
        },
        labels: ["Android", "iOS"],
        dataLabels: {
            dropShadow: { enabled: false },
            style: { colors: ["#fff"] },
        },
        stroke: { show: false },
        legend: { show: false },
        colors: ["#005AFF", "#02A6D2"],
        title: {
            align: "center",
            style: {
                fontSize: "16px",
                fontWeight: "bold",
            },
        },
    };
    const pieChartSeriesforMobile = [300, 50];

    const radialoptions: ApexOptions = {
        chart: {
            height: 350,
            type: 'radialBar',
            toolbar: { show: false },
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.5,
                    },
                },
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0,
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.7,
                    },
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: true,
                        color: '#888',
                        fontSize: '17px',
                    },
                    value: {
                        formatter: function (val: number) {
                            return val.toString();
                        },
                        color: '#111',
                        fontSize: '36px',
                        show: true,
                    },
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#ABE5A1'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
        stroke: {
            lineCap: 'round',
        },
        labels: ['Percent'],
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div>
                        <Panel>
                            <PanelBody>
                                <form className="row g-3">
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="projectSelect">
                                            Project name:
                                        </label>
                                        <select
                                            id="projectSelect"
                                            className="form-select"
                                            onChange={handleProjectChange}
                                            value={selectedProject}
                                        >
                                            <option value="" className="d-none">
                                                Select Project
                                            </option>
                                            {projectDetails?.map((projectDetails, index) => (
                                                <option key={index} value={projectDetails.id}>
                                                    {projectDetails.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="versionSelect">
                                            Version:
                                        </label>
                                        <select
                                            id="versionSelect"
                                            className="form-select"
                                            value={selectedRelease}
                                            onChange={handleReleaseChange}
                                        >
                                            <option value="" className="d-none">
                                                Select Version
                                            </option>
                                            {releaseDetails?.map((releaseDetails, index) => (
                                                <option key={index} value={releaseDetails.id}>
                                                    {releaseDetails.release_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-auto">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                navigate("/backtodashboard");
                                            }}
                                            className="btn btn-theme btn-lg rounded-pill px-md-5 mt-4"
                                        >
                                            Back to Dashboard
                                        </button>
                                    </div>
                                </form>
                            </PanelBody>
                        </Panel>
                        <div className="row">
                            <div className="col-xl-3 col-sm-6">
                                <div className="widget-card rounded mb-20px">
                                    <div className="widget-card-cover rounded bg-blueV1"></div>
                                    <div className="widget-card-content">
                                        <div className="row align-items-center pb-1px">
                                            <div className="col-6">
                                                <div className=" d-flex align-items-center justify-content-center">
                                                    <img
                                                        src="/assets/img/images/projectTestsuites.svg"
                                                        alt=""
                                                        className="mw-100 mh-200"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <h5 className="fs-12px text-body">
                                                    <b></b>
                                                </h5>
                                                <h4 className="mb-10px"></h4>
                                                <div className="py-2">
                                                    <h4 className="text-end">Test Suites</h4>
                                                    <h2 className="text-theme text-end pt-3">
                                                        {projectDashboard?.Test_suite_count}
                                                    </h2>
                                                </div>
                                                <div className="pt-5 d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-white border-theme btn-lg rounded-pill px-4 px-md-4"
                                                        onClick={() => navigate(`/createtestsuite`)}
                                                    >
                                                        Create
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="widget-card rounded mb-20px">
                                    <div className="widget-card-cover rounded bg-blueV2"></div>
                                    <div className="widget-card-content">
                                        <div className="row align-items-center pb-1px">
                                            <div className="col-6">
                                                <div className=" d-flex align-items-center justify-content-center">
                                                    <img
                                                        src="/assets/img/images/projectTestplans.svg"
                                                        alt=""
                                                        className="mw-100 mh-200"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <h5 className="fs-12px text-body">
                                                    <b></b>
                                                </h5>
                                                <h4 className="mb-10px"></h4>
                                                <div className="py-2">
                                                    <h4 className="text-end">Test Plans</h4>
                                                    <h2 className="text-theme text-end pt-3">
                                                        {projectDashboard?.Test_plan_count}
                                                    </h2>
                                                </div>
                                                <div className="pt-5 d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-white border-theme btn-lg rounded-pill px-4 px-md-4"
                                                        onClick={() => navigate(`/createtestplan`)}
                                                    >
                                                        Create
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="widget-card rounded mb-20px">
                                    <div className="widget-card-cover rounded bg-blueV3"></div>
                                    <div className="widget-card-content">
                                        <div className="row align-items-center pb-1px">
                                            <div className="col-6">
                                                <div className=" d-flex align-items-center justify-content-center">
                                                    <img
                                                        src="/assets/img/images/projectTeststeps.svg"
                                                        alt=""
                                                        className="mw-100 mh-200"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <h5 className="fs-12px text-body">
                                                    <b></b>
                                                </h5>
                                                <h4 className="mb-10px"></h4>
                                                <div className="py-2">
                                                    <h4 className="text-end">Test Steps</h4>
                                                    <h2 className="text-theme text-end pt-3">
                                                        {projectDashboard?.Test_step_count}
                                                    </h2>
                                                </div>
                                                <div className="pt-5 d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-white border-theme btn-lg rounded-pill px-4 px-md-4"
                                                        onClick={() => navigate(`/teststeps`)}
                                                    >
                                                        Create
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="widget-card rounded mb-20px">
                                    <div className="widget-card-cover rounded bg-blueV3"></div>
                                    <div className="widget-card-content">
                                        <div className="row align-items-center pb-1px">
                                            <div className="col-6">
                                                <div className=" d-flex align-items-center justify-content-center">
                                                    <img
                                                        src="/assets/img/images/projectExecutetests.svg"
                                                        alt=""
                                                        className="mw-100 mh-200"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <h5 className="fs-12px text-body">
                                                    <b></b>
                                                </h5>
                                                <h4 className="mb-10px"></h4>
                                                <div className="py-2">
                                                    <h4 className="text-end">Execute Test</h4>
                                                    <h2 className="text-theme text-end pt-3">
                                                        {projectDashboard?.Execution_test_count}
                                                    </h2>
                                                </div>
                                                <div className="pt-5 d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-white border-theme btn-lg rounded-pill px-4 px-md-4"
                                                        onClick={() => navigate(`/run`)}
                                                    >
                                                        Execute
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Panel>
                            <PanelBody>
                                <div className="row">
                                        <>
                                            {" "}
                                            <div className="col-xl-3 col-md-6">
                                                <h5 className="py-2 text-wrap text-truncate">
                                                    Framework Insights
                                                </h5>
                                                <div className="w-100 d-flex justify-content-center align-items-center barchartCard">
                                                    {FrameworkBarChartData ? (
                                                        <canvas
                                                            className="barchartWidth"
                                                            id="barChart"
                                                            height={300}
                                                        ></canvas>
                                                    ) : (
                                                        <p className="text-center text-wrap">
                                                            No data found
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <h5 className="py-2">Test Case Metrics</h5>

                                                <div className="my-4 text-center">
                                                    <span className="badge me-1 bg-default text-black">
                                                        <i className="fa fa-circle fa-fw text-green fs-9px me-5px t-minus-1"></i>{" "}
                                                        <span>Passed</span>
                                                    </span>
                                                    <span className="badge me-1 bg-default text-black">
                                                        <i className="fa fa-circle fa-fw text-red fs-9px me-5px t-minus-1"></i>{" "}
                                                        <span>Failed</span>
                                                    </span>
                                                    <span className="badge me-1 bg-default text-black">
                                                        <i className="fa fa-circle fa-fw text-secondary fs-9px me-5px t-minus-1"></i>{" "}
                                                        <span>Not Executed</span>
                                                    </span>
                                                </div>
                                                <DonutChart
                                                    type="donut"
                                                    height={250}
                                                    options={TestCaseMetricsPieChartOptions}
                                                    series={testCaseMetrics}
                                                />
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <h5 className="py-2">Browser Statistics</h5>

                                                {testCaseCountByBrowser.map((browser) => {
                                                    if (browser?.browser_name === 'chrome') {
                                                        return (
                                                            <div
                                                                key="chrome"
                                                                className="widget widget-stats bg-light rounded-3 p-3"
                                                            >
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <img
                                                                        src="/assets/img/images/chrome.png"
                                                                        width="50"
                                                                        alt=""
                                                                        className="rounded"
                                                                    />

                                                                    <div className="stats-info text-end">
                                                                        <p>{browser?.test_case_count}</p>
                                                                        <h4 className="text-theme">Tests</h4>
                                                                    </div>

                                                                    <div className="stats-info text-end">
                                                                        <p>{browser?.test_case_passed}</p>
                                                                        <h4 className="text-success">Passed</h4>
                                                                    </div>

                                                                    <div className="stats-info text-end">
                                                                        <p>{browser?.test_case_failed}</p>
                                                                        <h4 className="text-danger">Failed</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    } else if (browser?.browser_name === 'edge') {
                                                        return (
                                                            <div
                                                                key="edge"
                                                                className="widget widget-stats bg-light rounded-3"
                                                            >
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <img
                                                                        src="/assets/img/images/edge.png"
                                                                        width="50"
                                                                        alt=""
                                                                        className="rounded"
                                                                    />
                                                                    <div className="stats-info text-end">
                                                                        <p>{browser?.test_case_count}</p>
                                                                        <h4 className="text-theme">Tests</h4>
                                                                    </div>
                                                                    <div className="stats-info text-end">
                                                                        <p>{browser?.test_case_passed}</p>
                                                                        <h4 className="text-success">Passed</h4>
                                                                    </div>

                                                                    <div className="stats-info text-end">
                                                                        <p>{browser?.test_case_failed}</p>
                                                                        <h4 className="text-danger">Failed</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    } else if (browser?.browser_name === 'firefox') {
                                                        return (
                                                            <div
                                                                key="firefox"
                                                                className="widget widget-stats bg-light rounded-3"
                                                            >
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <img
                                                                        src="/assets/img/images/firefox.png"
                                                                        width="50"
                                                                        alt=""
                                                                        className="rounded"
                                                                    />
                                                                    <div className="stats-info text-end">
                                                                        <p>{browser?.test_case_count}</p>
                                                                        <h4 className="text-theme">Tests</h4>
                                                                    </div>
                                                                    <div className="stats-info text-end">
                                                                        <p>{browser?.test_case_passed}</p>
                                                                        <h4 className="text-success">Passed</h4>
                                                                    </div>

                                                                    <div className="stats-info text-end">
                                                                        <p>{browser?.test_case_failed}</p>
                                                                        <h4 className="text-danger">Failed</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <h5 className="py-2">Release Readiness</h5>
                                                < ApexChart options={radialoptions} series={[
                                                    (releaseReadiness[0] + releaseReadiness[1]) === 0
                                                        ? 0
                                                        : Number(((releaseReadiness[0] / (releaseReadiness[0] + releaseReadiness[1])) * 100).toFixed(2))
                                                ]} type="radialBar" height={300} />
                                            </div>
                                        </>
                                    
                                    {/* {getProjectTypeFromLocalStorage() ===
                                        ProjectTypes.MobileApplication && (
                                            <>
                                                {" "}
                                                <div className="col-xl-3 col-md-6">
                                                    <h5 className="py-2 text-wrap text-truncate">
                                                        Framework Insights
                                                    </h5>
                                                    <div className="w-100 d-flex justify-content-center align-items-center barchartCard">
                                                        {FrameworkBarChartData ? (
                                                            <canvas
                                                                className="barchartWidth"
                                                                id="barChart"
                                                                height={300}
                                                            ></canvas>
                                                        ) : (
                                                            <p className="text-center text-wrap">
                                                                No data found
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <h5 className="py-2">Test Case Metrics</h5>

                                                    <div className="my-4 text-center">
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i className="fa fa-circle fa-fw text-green fs-9px me-5px t-minus-1"></i>{" "}
                                                            <span>Passed</span>
                                                        </span>
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i className="fa fa-circle fa-fw text-red fs-9px me-5px t-minus-1"></i>{" "}
                                                            <span>Failed</span>
                                                        </span>
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i className="fa fa-circle fa-fw text-secondary fs-9px me-5px t-minus-1"></i>{" "}
                                                            <span>Not Executed</span>
                                                        </span>
                                                    </div>
                                                    <DonutChart
                                                        type="donut"
                                                        height={250}
                                                        options={TestCaseMetricsPieChartOptions}
                                                        series={testCaseMetrics}
                                                    />
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <h5 className="py-2">Browser Statistics</h5>
                                                    <div className="my-4 text-center">
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i
                                                                className="fa fa-circle fa-fw fs-9px me-5px t-minus-1"
                                                                style={{ color: edgeColor }}
                                                            ></i>{" "}
                                                            <span>Android</span>
                                                        </span>
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i
                                                                className="fa fa-circle fa-fw fs-9px me-5px t-minus-1"
                                                                style={{ color: chromeColor }}
                                                            ></i>{" "}
                                                            <span>iOS</span>
                                                        </span>
                                                    </div>
                                                    <PieChart
                                                        options={pieChartOptionsForMobile}
                                                        series={pieChartSeriesforMobile}
                                                        type="pie"
                                                        height={250}
                                                    />
                                                    <div></div>
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <h5 className="py-2">Release Readiness</h5>

                                                    <div className="my-4 text-center">
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i className="fa fa-circle fa-fw text-green fs-9px me-5px t-minus-1"></i>{" "}
                                                            <span>Ready</span>
                                                        </span>
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i className="fa fa-circle fa-fw text-red fs-9px me-5px t-minus-1"></i>{" "}
                                                            <span>Not Ready</span>
                                                        </span>
                                                    </div>
                                                    <DonutChart
                                                        type="donut"
                                                        height={250}
                                                        options={pieChartOptionsforReadiness}
                                                        series={releaseReadiness}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    {getProjectTypeFromLocalStorage() ===
                                        ProjectTypes.DesktopApplication && (
                                            <>
                                                {" "}
                                                <div className="col-xl-4 col-md-6">
                                                    <h5 className="py-2 text-wrap text-truncate">
                                                        Framework Insights
                                                    </h5>
                                                    <div className="w-100 d-flex justify-content-center align-items-center barchartCard">
                                                        {FrameworkBarChartData ? (
                                                            <canvas
                                                                className="barchartWidth"
                                                                id="barChart"
                                                                height={300}
                                                            ></canvas>
                                                        ) : (
                                                            <p className="text-center text-wrap">
                                                                No data found
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-6">
                                                    <h5 className="py-2">Test Case Metrics</h5>

                                                    <div className="my-4 text-center">
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i className="fa fa-circle fa-fw text-green fs-9px me-5px t-minus-1"></i>{" "}
                                                            <span>Passed</span>
                                                        </span>
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i className="fa fa-circle fa-fw text-red fs-9px me-5px t-minus-1"></i>{" "}
                                                            <span>Failed</span>
                                                        </span>
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i className="fa fa-circle fa-fw text-secondary fs-9px me-5px t-minus-1"></i>{" "}
                                                            <span>Not Executed</span>
                                                        </span>
                                                    </div>
                                                    <DonutChart
                                                        type="donut"
                                                        height={250}
                                                        options={TestCaseMetricsPieChartOptions}
                                                        series={testCaseMetrics}
                                                    />
                                                </div>
                                                <div className="col-xl-4 col-md-6">
                                                    <h5 className="py-2">Release Readiness</h5>

                                                    <div className="my-4 text-center">
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i className="fa fa-circle fa-fw text-green fs-9px me-5px t-minus-1"></i>{" "}
                                                            <span>Ready</span>
                                                        </span>
                                                        <span className="badge me-1 bg-default text-black">
                                                            <i className="fa fa-circle fa-fw text-red fs-9px me-5px t-minus-1"></i>{" "}
                                                            <span>Not Ready</span>
                                                        </span>
                                                    </div>
                                                    <DonutChart
                                                        type="donut"
                                                        height={250}
                                                        options={pieChartOptionsforReadiness}
                                                        series={releaseReadiness}
                                                    />
                                                </div>
                                            </>
                                        )} */}
                                </div>
                            </PanelBody>
                        </Panel>
                    </div>
                </>
            )}
        </>
    );
};

export default ProjectDashboard;