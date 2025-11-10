import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Panel, PanelBody } from "../../components/panel/panel";
import ChartJS from "chart.js/auto";
import DonutChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { usePagination } from "../shared/services/PaginationService";
import "./dashboard.css";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import {useLoader} from "../shared/services/Loader"
import ApexChart from "react-apexcharts"
import { Loader } from "../../shared/common/Loader";

const DashBoard = () => {
    const { loading, showLoader, hideLoader } = useLoader();
    const allDataCount={
  "project_count": 6,
  "testcase_count": 426,
  "testplan_count": 9,
  "testsetup_count": 15
}
const topPerformingProjects = [
  {
    "percentage": 12.65,
    "projectName": "BARS"
  },
  {
    "percentage": 2.8,
    "projectName": "Orange HR Management"
  }
]

    const projectDetails=[
  {
    "application_type": "WebApplication",
    "fail_count": 0,
    "last_run": "Sat, 31 May 2025 06:42:31 GMT",
    "not_executed_count": 200,
    "pass_count": 8,
    "project_name": "Orange HR Management",
    "release_name": "release 1",
    "test_case_count": 208
  },
  {
    "application_type": "WebApplication",
    "fail_count": 21,
    "last_run": "Fri, 30 May 2025 12:23:30 GMT",
    "not_executed_count": 164,
    "pass_count": 31,
    "project_name": "BARS",
    "release_name": "release 1",
    "test_case_count": 216
  },
  {
    "application_type": "WebApplication",
    "fail_count": 0,
    "last_run": "NA",
    "not_executed_count": 0,
    "pass_count": 0,
    "project_name": "test",
    "release_name": "NA",
    "test_case_count": 0
  },
  {
    "application_type": "WebApplication",
    "fail_count": 0,
    "last_run": "NA",
    "not_executed_count": 0,
    "pass_count": 0,
    "project_name": "sss",
    "release_name": "NA",
    "test_case_count": 0
  },
  {
    "application_type": "WebApplication",
    "fail_count": 0,
    "last_run": "NA",
    "not_executed_count": 0,
    "pass_count": 0,
    "project_name": "Plan",
    "release_name": "NA",
    "test_case_count": 0
  },
  {
    "application_type": "WebApplication",
    "fail_count": 0,
    "last_run": "NA",
    "not_executed_count": 0,
    "pass_count": 0,
    "project_name": "Today test plan - 123",
    "release_name": "NA",
    "test_case_count": 0
  }
]
 const { currentPage, totalPages, handlePageChange, paginatedData } = usePagination(projectDetails);
    const applicationClassification = {
  "application_percentage": [
    100.0,
    0.0,
    0.0
  ],
  "application_type": [
    "Web",
    "Mobile",
    "Desktop"
  ]
}
    const userDetails=[
  {
    "projectCount": 2,
    "role": "User",
    "user": "PNaik"
  },
  {
    "projectCount": 2,
    "role": "User",
    "user": "Harshan"
  },
  {
    "projectCount": 2,
    "role": "User",
    "user": "Monica"
  },
  {
    "projectCount": 0,
    "role": "SuperAdmin",
    "user": "ALSuperAdmin"
  },
  {
    "projectCount": 2,
    "role": "User",
    "user": "Siddharth"
  },
  {
    "projectCount": 2,
    "role": "User",
    "user": "Soundarya"
  },
  {
    "projectCount": 2,
    "role": "User",
    "user": "PKhavasi"
  },
  {
    "projectCount": 2,
    "role": "Admin",
    "user": "DevTest"
  }
]

    const releaseMilestone=[
  {
    "projectName": "Plan",
    "releaseName": "NA",
    "testCases": 0
  },
  {
    "projectName": "Orange HR Management",
    "releaseName": "release 1",
    "testCases": 208
  },
  {
    "projectName": "test",
    "releaseName": "NA",
    "testCases": 0
  },
  {
    "projectName": "sss",
    "releaseName": "NA",
    "testCases": 0
  },
  {
    "projectName": "BARS",
    "releaseName": "release 1",
    "testCases": 216
  },
  {
    "projectName": "Today test plan - 123",
    "releaseName": "NA",
    "testCases": 0
  }
]

    const frameworkStack=[
  6,
  23,
  30
]

    const CrossBrowserChartSeries = [
  {
    "data": [
      {
        "meta": {
          "fail": 0,
          "pass": 0
        },
        "x": "2025-05-29",
        "y": 0
      },
      {
        "meta": {
          "fail": 4,
          "pass": 20
        },
        "x": "2025-05-30",
        "y": 24
      },
      {
        "meta": {
          "fail": 0,
          "pass": 3
        },
        "x": "2025-05-31",
        "y": 3
      },
      {
        "meta": {
          "fail": 0,
          "pass": 0
        },
        "x": "2025-06-01",
        "y": 0
      },
      {
        "meta": {
          "fail": 0,
          "pass": 0
        },
        "x": "2025-06-02",
        "y": 0
      }
    ],
    "name": "Chrome"
  },
  {
    "data": [
      {
        "meta": {
          "fail": 0,
          "pass": 0
        },
        "x": "2025-05-29",
        "y": 0
      },
      {
        "meta": {
          "fail": 8,
          "pass": 16
        },
        "x": "2025-05-30",
        "y": 24
      },
      {
        "meta": {
          "fail": 0,
          "pass": 3
        },
        "x": "2025-05-31",
        "y": 3
      },
      {
        "meta": {
          "fail": 0,
          "pass": 0
        },
        "x": "2025-06-01",
        "y": 0
      },
      {
        "meta": {
          "fail": 0,
          "pass": 0
        },
        "x": "2025-06-02",
        "y": 0
      }
    ],
    "name": "Firefox"
  },
  {
    "data": [
      {
        "meta": {
          "fail": 0,
          "pass": 0
        },
        "x": "2025-05-29",
        "y": 0
      },
      {
        "meta": {
          "fail": 11,
          "pass": 9
        },
        "x": "2025-05-30",
        "y": 20
      },
      {
        "meta": {
          "fail": 0,
          "pass": 7
        },
        "x": "2025-05-31",
        "y": 7
      },
      {
        "meta": {
          "fail": 0,
          "pass": 0
        },
        "x": "2025-06-01",
        "y": 0
      },
      {
        "meta": {
          "fail": 0,
          "pass": 0
        },
        "x": "2025-06-02",
        "y": 0
      }
    ],
    "name": "Edge"
  }
]

    const testCaseActivity=[
  {
    "action": "Deleted",
    "projectname": "Orange HR Management",
    "testcasename": "Login"
  },
  {
    "action": "Deleted",
    "projectname": "Orange HR Management",
    "testcasename": "Testing"
  },
  {
    "action": "Updated",
    "projectname": "Orange HR Management",
    "testcasename": "Login Positive Test case"
  },
  {
    "action": "Updated",
    "projectname": "Orange HR Management",
    "testcasename": "Login Negative Test case"
  },
  {
    "action": "Added",
    "projectname": "Orange HR Management",
    "testcasename": "Login Negative Test case"
  }
]

    const testExecutionSummary={
  "failcount": [
    0,
    123,
    0,
    0,
    0
  ],
  "passcount": [
    0,
    1098,
    13,
    0,
    0
  ]
}

    //hard coded values for test case execution summary
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ChartJS | null>(null);

    const last5DaysLabels = Array.from({ length: 5 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (4 - i));
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // e.g., "May 17"
    });

    useEffect(() => {
        const teal = getComputedStyle(document.body).getPropertyValue('--bs-teal').trim();
        const tealRgb = getComputedStyle(document.body).getPropertyValue('--bs-teal-rgb').trim();
        const blue = getComputedStyle(document.body).getPropertyValue('--bs-blue').trim();
        const blueRgb = getComputedStyle(document.body).getPropertyValue('--bs-blue-rgb').trim();
        const componentBg = getComputedStyle(document.body).getPropertyValue('--bs-component-bg').trim();
        const bodyFontFamily = getComputedStyle(document.body).getPropertyValue('--bs-body-font-family').trim();
        const bodyColor = getComputedStyle(document.body).getPropertyValue('--bs-body-color').trim();
        const borderColor = getComputedStyle(document.body).getPropertyValue('--bs-border-color').trim();

        ChartJS.defaults.font.family = bodyFontFamily;
        ChartJS.defaults.font.size = 12;
        ChartJS.defaults.color = bodyColor;
        ChartJS.defaults.borderColor = borderColor;
        ChartJS.defaults.plugins.tooltip.cornerRadius = 8;
        ChartJS.defaults.plugins.tooltip.padding = 10;
        ChartJS.defaults.plugins.tooltip.displayColors = true;
        ChartJS.defaults.plugins.tooltip.boxPadding = 6;
        ChartJS.defaults.maintainAspectRatio = false;

        if (chartInstance.current) {
            chartInstance.current.destroy();
            chartInstance.current = null;
        }

        if (chartRef.current) {
            chartRef.current.innerHTML = '<canvas id="lineChartCanvas"></canvas>';
            const canvas = document.getElementById("lineChartCanvas") as HTMLCanvasElement | null;

            if (canvas) {
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    chartInstance.current = new ChartJS(ctx, {
                        type: 'line',
                        data: {
                            labels: last5DaysLabels,
                            datasets: [
                                {
                                    label: 'Pass Count',
                                    fill: false,
                                    tension: 0.1,
                                    backgroundColor: `rgba(${tealRgb}, 0.25)`,
                                    borderColor: teal,
                                    borderWidth: 2,
                                    pointBorderColor: teal,
                                    pointBackgroundColor: componentBg,
                                    pointBorderWidth: 2,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: componentBg,
                                    pointHoverBorderColor: teal,
                                    pointHoverBorderWidth: 3,
                                    pointRadius: 3,
                                    pointHitRadius: 10,
                                    data: testExecutionSummary?.passcount,
                                },
                                {
                                    label: 'Fail Count',
                                    fill: false,
                                    tension: 0.1,
                                    backgroundColor: `rgba(${blueRgb}, 0.25)`,
                                    borderColor: blue,
                                    borderWidth: 2,
                                    pointBorderColor: blue,
                                    pointBackgroundColor: componentBg,
                                    pointBorderWidth: 2,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: componentBg,
                                    pointHoverBorderColor: blue,
                                    pointHoverBorderWidth: 3,
                                    pointRadius: 3,
                                    pointHitRadius: 10,
                                    data: testExecutionSummary?.failcount,
                                }
                            ],
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    grid: { color: borderColor }
                                },
                                y: {
                                    grid: { color: borderColor },
                                    beginAtZero: true,
                                }
                            }
                        }
                    });
                }
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
                chartInstance.current = null;
            }
        };
    }, [testExecutionSummary]);

    //hard coded colors for top performing projects
    const colorPool = ["bg-green", "bg-blue", "bg-yellow", "bg-red", "bg-orange"];
    function shuffleColors(colors: string[]) {
        return [...colors].sort(() => 0.5 - Math.random());
    }
    const shuffledColors = shuffleColors(colorPool);

    //hard coded values of application classication chart
    const ApplicationClassificationChartSeries = applicationClassification?.application_percentage;

    const ApplicationClassificationChartOptions: ApexOptions = {
        labels: applicationClassification?.application_type,
        chart: { type: "donut" },
        dataLabels: {
            dropShadow: { enabled: false },
            style: { colors: ['#A4D761', '#F26C69', '#DADADA'] },
        },
        stroke: { show: false },
        colors: ['#A4D761', '#F26C69', '#DADADA'],
        legend: { show: false },
    };

    //hard coded values of framework stacks chart
    const FrameworkStackBarChartData = {
        frameworks: ["Cypress", "Robot", "Selenium"],
        series: [
            {
                data: [7, 51, 29],
                name: "chrome",
            },
            {
                data: [0, 11, 0],
                name: "edge",
            },
            {
                data: [0, 11, 0],
                name: "firefox",
            },
        ],
    };

    useEffect(() => {
        const canvas = document.getElementById(
            "barChart"
        ) as HTMLCanvasElement | null;
        if (!canvas) return;
        ChartJS.getChart(canvas)?.destroy();
        new ChartJS(canvas, {
            type: 'bar',
            data: {
                labels: FrameworkStackBarChartData?.frameworks,
                datasets: FrameworkStackBarChartData?.series
                    ? FrameworkStackBarChartData.series.map((data) => ({
                        label: data?.name,
                        data: data?.data,
                        backgroundColor:
                            data?.name === "chrome"
                                ? "#02A6D2"
                                : data?.name === "firefox"
                                    ? "#E93E65"
                                    : data?.name === "edge"
                                        ?"#005AFF"
                                        : undefined,
                        stack: "Stack 0",
                    }))
                    : [],
            },
            options: {
                responsive: false,
                maintainAspectRatio: true,
            },
        });
    }, [FrameworkStackBarChartData]);

    const CrossBrowserChartOptions: ApexOptions = {
        chart: {
            type: "line",
            height: 350,
            toolbar: { show: false },
            selection: { enabled: false },
            zoom: {
                enabled: false,
            },
        },
        xaxis: {
            type: "datetime",
            labels: { format: "dd MMM" },
        },
        yaxis: {
            min: 0,
        },
        colors: ["#02A6D2", "#E93E65", "#005AFF"],
        stroke: { curve: "smooth", width: 2 },
        legend: { position: "top" },
        tooltip: {
            shared: true,
            custom: function ({ dataPointIndex, w }) {
                const date = new Date(
                    w.globals.seriesX[0][dataPointIndex]
                ).toLocaleDateString();
                const chromeMeta =
                    w.globals.initialSeries[0].data[dataPointIndex]?.meta || {};
                const firefoxMeta =
                    w.globals.initialSeries[1].data[dataPointIndex]?.meta || {};
                const edgeMeta =
                    w.globals.initialSeries[2].data[dataPointIndex]?.meta || {};
                return `
        <div style="padding: 10px;">
          <span style="color:#02A6D2"><b>Chrome</b></span>: Pass : ${chromeMeta.pass}  / Fail : ${chromeMeta.fail} <br/>
          <span style="color:#E93E65""><b>Firefox</b></span>: Pass :  ${firefoxMeta.pass}  / Fail :  ${firefoxMeta.fail} <br/>
          <span style="color:#005AFF"><b>Edge</b></span>:  Pass : ${edgeMeta.pass}  / Fail : ${edgeMeta.fail} 
        </div>
      `;
            },
        },
    };

    // const { currentPage, totalPages, handlePageChange, paginatedData } = usePagination(projectDetails);

    // const fetchData = async () => {
    //     showLoader();
    //     try {
    //         const userId = getLoggedInUserId();
    //         if (userId) {
    //             const [
    //                 allDataCount,
    //                 testExecutionSummary,
    //                 applicationClassification,
    //                 topPerformingProjects,
    //                 frameworkStack,
    //                 crossBrowserTestExecution,
    //                 testCaseActivity,
    //                 releaseMilestone,
    //                 projectDetails,
    //                 userDetails,
    //             ] = await Promise.allSettled([
    //                 getAllDataCount(),
    //                 getTestExecutionSummary(),
    //                 getApplicationClassification(),
    //                 getTopPerformingProjects(),
    //                 getFrameworkStack(),
    //                 getCrossBrowserTestExecution(),
    //                 getTestCaseActivity(),
    //                 getReleaseMilestone(),
    //                 getProjectDetails(),
    //                 getUserDetails(),
    //             ]);

    //             if (allDataCount.status === "fulfilled") {
    //                 setAllDataCount(allDataCount.value?.data);
    //             }

    //             if (testExecutionSummary.status === "fulfilled") {
    //                 setTestExecutionSummary(testExecutionSummary.value?.data);
    //             }

    //             if (applicationClassification.status === "fulfilled") {
    //                 setApplicationClassification(applicationClassification.value?.data);
    //             }

    //             if (topPerformingProjects.status === "fulfilled") {
    //                 setTopPerformingProjects(topPerformingProjects.value?.data);
    //             }

    //             if (frameworkStack.status === "fulfilled") {
    //                 setFrameworkStack(frameworkStack.value?.data);
    //             }

    //             if (crossBrowserTestExecution.status === "fulfilled") {
    //                 setCrossBrowserChartSeries(crossBrowserTestExecution.value?.data);
    //             }

    //             if (testCaseActivity.status === "fulfilled") {
    //                 setTestCaseActivity(testCaseActivity.value?.data);
    //             }

    //             if (releaseMilestone.status === "fulfilled") {
    //                 setReleaseMilestone(releaseMilestone.value?.data);
    //             }

    //             if (projectDetails.status === "fulfilled") {
    //                 setProjectDetails(projectDetails.value?.data);
    //             }

    //             if (userDetails.status === "fulfilled") {
    //                 setUserDetails(userDetails.value?.data);
    //             }

    //             // Optional: Handle failed APIs (e.g., show toast)
    //             const failed = [
    //                 allDataCount,
    //                 testExecutionSummary,
    //                 applicationClassification,
    //                 topPerformingProjects,
    //                 frameworkStack,
    //                 crossBrowserTestExecution,
    //                 testCaseActivity,
    //                 releaseMilestone,
    //                 projectDetails,
    //                 userDetails,
    //             ].filter(res => res.status === "rejected");

    //             if (failed.length > 0) {
    //                 console.warn(`${failed.length} API call(s) failed.`);
    //             }
    //         }
    //     } catch (error) {
    //         console.error("Unexpected error in fetchData:", error);
    //     } finally {
    //         hideLoader();
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const baroptions: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                distributed: false,
                dataLabels: {
                    position: 'top',
                },
            },

        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        colors: ['#1E90FF', '#20C997', '#FF5733'],
        xaxis: {
            categories: ['Cypress', 'Robot', 'Selenium'],
        },
        yaxis: {
            title: {
                text: 'test cases',
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            enabled: true,
        },
    };

    return (
        <>
            {loading && <Loader />}
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="widget widget-stats bg-white border border-2 border-purple">
                        <div className="d-flex justify-content-between align-items-center">
                            <img
                                src="/assets/img/images/projectDashboard.svg"
                                width="60"
                                alt=""
                            />
                            <div className="stats-info text-end">
                                <h4 className="fw-bolder">Projects</h4>
                                <p className="text-theme">{allDataCount?.project_count}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="widget widget-stats bg-white border border-2 border-cyan">
                        <div className="d-flex justify-content-between align-items-center">
                            <img
                                src="/assets/img/images/CaseDashboard.svg"
                                width="60"
                                alt=""
                            />
                            <div className="stats-info text-end">
                                <h4 className="fw-bolder">Test Cases</h4>
                                <p className="text-theme">
                                    {allDataCount?.testcase_count}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="widget widget-stats bg-white border border-2 border-teal">
                        <div className="d-flex justify-content-between align-items-center">
                            <img
                                src="/assets/img/images/testPlanDashboard.svg"
                                width="60"
                                alt=""
                            />
                            <div className="stats-info text-end">
                                <h4 className="fw-bolder">Test Plan</h4>
                                <p className="text-theme">
                                    {allDataCount?.testplan_count}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="widget widget-stats bg-white border border-2 border-indigo ">
                        <div className="d-flex justify-content-between align-items-center">
                            <img
                                src="/assets/img/images/testConfigurationDashboard.svg"
                                width="60"
                                alt=""
                            />
                            <div className="stats-info text-end">
                                <h4 className="fw-bolder">Test Setup</h4>
                                <p className="text-theme">
                                    {allDataCount?.testsetup_count}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Panel>
                <PanelBody>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <h5 className="py-2">Test Case Execution Summary</h5>
                            <div id="chart-1" className="h-300px" ref={chartRef}></div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <h5 className="py-2">Application Classification</h5>
                            <div className="my-4 text-center">
                                <span className="badge me-1 bg-default text-black">
                                    <i className="fa fa-circle fa-fw text-green fs-9px me-5px t-minus-1"></i>{" "}
                                    <span>Web </span>
                                </span>
                                <span className="badge me-1 bg-default text-black">
                                    <i className="fa fa-circle fa-fw text-red fs-9px me-5px t-minus-1"></i>{" "}
                                    <span>Mobile</span>
                                </span>
                                <span className="badge me-1 bg-default text-black">
                                    <i className="fa fa-circle fa-fw text-secondary fs-9px me-5px t-minus-1"></i>{" "}
                                    <span>Desktop</span>
                                </span>
                            </div>

                            <DonutChart
                                type="donut"
                                height={250}
                                options={ApplicationClassificationChartOptions}
                                series={ApplicationClassificationChartSeries}
                            />
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <h5 className="py-2">Top Performing Projects</h5>
                            {topPerformingProjects.map((project, index) => (
                                <div key={index} className="py-2">
                                    <div className="widget-chart-info-progress">
                                        {project.projectName}
                                        <span className="float-end">{project.percentage}%</span>
                                    </div>
                                    <div className="progress h-10px mb-20px">
                                        <div
                                            className={`progress-bar rounded-pill ${shuffledColors[index % shuffledColors.length]
                                                }`}
                                            style={{ width: `${project.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <h5 className="py-2">Framework Stack</h5>
                            <div className="w-100 d-flex justify-content-center align-items-center barchartCard">
                                <ApexChart options={baroptions} series={[
                                    {
                                        name: 'Test Cases',
                                        data: frameworkStack,
                                    },
                                ]} type="bar" height={300} />
                            </div>
                        </div>
                    </div>
                </PanelBody>
            </Panel>
            <Panel>
                <PanelBody>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <h5 className="py-2">Test Case Activity</h5>
                            <div className="overflow-auto" style={{ maxHeight: "300px" }}>
                                <div className="timeline">
                                    {testCaseActivity.map((item: any) => (
                                        <>
                                            <div className="timeline-item ">
                                                <div className="timeline-content text-md-start text-center">
                                                    <div className="timeline-header">
                                                        <div className="username">
                                                            <h5>{item?.projectname}</h5>
                                                            <div className="fs-14px py-1">
                                                                {item?.testcasename} - {item?.action}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <h5 className="py-2">Cross - Browser Test Execution</h5>
                            <div className="h-250px">
                                <Chart
                                    options={CrossBrowserChartOptions}
                                    series={CrossBrowserChartSeries}
                                    type="line"
                                    height={250}
                                />
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <h5 className="py-2">Release Milestone</h5>
                            <div className="overflow-auto" style={{ maxHeight: "300px" }}>
                                <div className="widget-list rounded my-4">
                                    {releaseMilestone.map((item: any) => (
                                        <>
                                            <Link to="/widget" className="widget-list-item">
                                                <div className="widget-list-media icon ">
                                                    <i className="fa fa-link bg-yellow text-dark"></i>
                                                </div>
                                                <div className="widget-list-content">
                                                    <h4 className="widget-list-title">
                                                        {item?.projectName}
                                                    </h4>
                                                    <small>{item?.releaseName}</small>
                                                </div>
                                                <div className="widget-list-action text-nowrap text-gray-600 fw-bold text-decoration-none">
                                                    {item?.testCases}
                                                </div>
                                            </Link>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </PanelBody>
            </Panel>
            <Panel>
                <PanelBody>
                    <div className="row">
                        <div className="col-xl-8 col-sm-12">
                            {paginatedData?.length > 0 ? (
                                <>
                                    <Panel>
                                        <PanelBody>
                                            <div className="row align-items-center mb-3">
                                                <div className="col">
                                                    <h5 className="mb-0">Projects</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <input
                                                        type="name"
                                                        className="form-control"
                                                        placeholder="search"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className="overflow-auto"
                                                style={{ maxHeight: "300px" }}
                                            >
                                                <div className="table-responsive">
                                                    <table className="table table-striped mb-0 table-thead-sticky border border-secondary">
                                                        <thead>
                                                            <tr>
                                                                <th className="text-white text-start">
                                                                    Project Name
                                                                </th>
                                                                <th className="text-white text-start">Type</th>
                                                                <th className="text-white text-start">
                                                                    Test Cases
                                                                </th>
                                                                <th className="text-white text-start">Pass</th>
                                                                <th className="text-white text-start">Fail</th>
                                                                <th className="text-white text-start">
                                                                    Not Run
                                                                </th>
                                                                <th className="text-white text-start">
                                                                    Last Run
                                                                </th>
                                                                <th className="text-white text-start">
                                                                    Release Name
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {paginatedData?.map((project: any, index: number) => (
                                                                <tr key={index}>
                                                                    <td className="text-start">
                                                                        {project?.project_name}
                                                                    </td>
                                                                    <td className="text-start">
                                                                        {project?.application_type}
                                                                    </td>
                                                                    <td className="text-start">
                                                                        {project?.test_case_count}
                                                                    </td>
                                                                    <td className="text-start">
                                                                        {project?.pass_count}
                                                                    </td>
                                                                    <td className="text-start">
                                                                        {project?.fail_count}
                                                                    </td>
                                                                    <td className="text-start">
                                                                        {project?.not_executed_count}
                                                                    </td>
                                                                    <td className="text-start">
                                                                        {Number(project?.last_run)}
                                                                    </td>
                                                                    <td className="text-start">
                                                                        {project?.release_name}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td colSpan={8}>
                                                                    <div className="d-flex flex-wrap justify-content-between align-items-center w-100 gap-2 text-center text-md-start">
                                                                        <div className="flex-fill text-start">
                                                                            <span className="fw-bold text-secondary">
                                                                                Total: {paginatedData?.length}
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
                                                                                onClick={() =>
                                                                                    handlePageChange(currentPage - 1)
                                                                                }
                                                                                disabled={currentPage === 1}
                                                                            >
                                                                                <i className="fa fa-angle-left pe-2"></i>{" "}
                                                                                Previous
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-default rounded-0"
                                                                                onClick={() =>
                                                                                    handlePageChange(currentPage + 1)
                                                                                }
                                                                                disabled={currentPage === totalPages}
                                                                            >
                                                                                Next{" "}
                                                                                <i className="fa fa-angle-right ps-2"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </PanelBody>
                                    </Panel>
                                </>
                            ) : (
                                <div>
                                    <div className="d-flex justify-content-center flex-column">
                                        <div className="text-center">
                                            <img
                                                src="/assets/img/images/nothingToShow.svg"
                                                alt="No reports illustration"
                                                className="img-fluid mb-3"
                                            />
                                            <h5 className="text-dark mb-2">Nothing to show</h5>
                                            <p className="text-muted">
                                                There are no projects assigned to you
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-xl-4 col-sm-12 ">
                            {userDetails?.length > 0 ? (
                                <>
                                    <Panel>
                                        <PanelBody>
                                            <div className="row align-items-center mb-3">
                                                <div className="col">
                                                    <h5 className="mb-0">Users</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <input
                                                        type="name"
                                                        className="form-control"
                                                        placeholder="search"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className="overflow-auto"
                                                style={{ maxHeight: "300px" }}
                                            >
                                                <div className="table-responsive">
                                                    <table className="table table-striped mb-0 table-thead-sticky border border-secondary">
                                                        <thead>
                                                            <tr>
                                                                <th className="text-white text-start">Name</th>
                                                                <th className="text-white text-start">Roles</th>
                                                                <th className="text-white text-start">
                                                                    Project Count
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {userDetails?.map((user: any, index: number) => (
                                                                <tr key={index}>
                                                                    <td className="text-start">{user?.user}</td>
                                                                    <td className="text-start">{user?.role}</td>
                                                                    <td className="text-start">{user?.projectCount}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td colSpan={3}>
                                                                    <div className="d-flex flex-wrap justify-content-between align-items-center w-100 gap-2 text-center text-md-start">
                                                                        <div className="flex-fill text-start">
                                                                            <span className="fw-bold text-secondary">
                                                                                Total: {userDetails?.length}
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
                                                                                onClick={() =>
                                                                                    handlePageChange(currentPage - 1)
                                                                                }
                                                                                disabled={currentPage === 1}
                                                                            >
                                                                                <i className="fa fa-angle-left pe-2"></i>{" "}
                                                                                Previous
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-default rounded-0"
                                                                                onClick={() =>
                                                                                    handlePageChange(currentPage + 1)
                                                                                }
                                                                                disabled={currentPage === totalPages}
                                                                            >
                                                                                Next{" "}
                                                                                <i className="fa fa-angle-right ps-2"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </PanelBody>
                                    </Panel>
                                </>
                            ) : (
                                <div>
                                    <div className="d-flex justify-content-center flex-column">
                                        <div className="text-center">
                                            <img
                                                src="/assets/img/images/nothingToShow.svg"
                                                alt="No reports illustration"
                                                className="img-fluid mb-3"
                                            />
                                            <h5 className="text-dark mb-2">Nothing to show</h5>
                                            <p className="text-muted">
                                                There are no users assigned.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </PanelBody>
            </Panel>
        </>
    );
};

export default DashBoard;