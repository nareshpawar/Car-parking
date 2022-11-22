import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { AppserviceService } from 'src/app/appservice.service';

export interface AppConfig {
    inputStyle?: string;
    dark?: boolean;
    theme?: string;
    ripple?: boolean;
}

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
    basicData: any;
    basicOptions: any;
    multiAxisData: any;
    chartOptions: any ;
    multiAxisOptions: any;
    stackedData: any;
    stackedOptions: any;
    horizontalOptions: any;
    subscription: Subscription | undefined;
    data: any
    dataForMonth: any
    dataForYear: any
    dashboardData: any;
    constructor( private appservice : AppserviceService,
        private spinner: NgxSpinnerService
        ) { 
    }

    ngOnInit() {
        this.spinner.show();
        setTimeout(() => {
            this.getData();
        }, 1000);
        // this.data = {
        //     legend: {
        //         display: false
        //     },
        //     labels: ['Parking A', 'Parking B', 'Parking C'],
        //     datasets: [
        //         {
        //             data: [this.dashboardData?.dailyCount,this.dashboardData?.dailyCount,this.dashboardData?.dailyCount],
        //             backgroundColor: [
        //                 "#42A5F5",
        //                 "#9fcaf5",
        //                 "#cae3fc"
        //             ],
        //             hoverBackgroundColor: [
        //                 "#42A5F5",
        //                 "#9fcaf5",
        //                 "#cae3fc"
        //             ]
        //         }
        //     ]
        // };
        // this.dataForMonth = {
        //     labels: ['Parking A', 'Parking B', 'Parking C'],
        //     datasets: [
        //         {
        //             data: [this.dashboardData?.monthlyCount,this.dashboardData?.monthlyCount,this.dashboardData?.monthlyCount],
        //             backgroundColor: [
        //                 "#42A5F5",
        //                 "#9fcaf5",
        //                 "#cae3fc"
        //             ],
        //             hoverBackgroundColor: [
        //                 "#42A5F5",
        //                 "#9fcaf5",
        //                 "#cae3fc"
        //             ]
        //         }
        //     ]
        // };
        // this.dataForYear = {
        //     labels: ['Parking A', 'Parking B', 'Parking C'],
        //     datasets: [
        //         {
        //             data: [this.dashboardData?.yearlyCount, this.dashboardData?.yearlyCount, this.dashboardData?.yearlyCount],
        //             backgroundColor: [
        //                 "#42A5F5",
        //                 "#9fcaf5",
        //                 "#cae3fc"
        //             ],
        //             hoverBackgroundColor: [
        //                 "#42A5F5",
        //                 "#9fcaf5",
        //                 "#cae3fc"
        //             ]
        //         }
        //     ]
        // };
        // this.stackedData = {
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        //     datasets: [{
        //         type: 'bar',
        //         label: 'Parking A',
        //         backgroundColor: "#42A5F5",
        //         data: [
        //             50,
        //             25,
        //             12,
        //             48,
        //             90,
        //             76,
        //             42,
        //             56,
        //             78,
        //             60,
        //             30,
        //             60
        //         ]
        //     }, {
        //         type: 'bar',
        //         label: 'Parking B',
        //         backgroundColor: "#9fcaf5",
        //         data: [
        //             21,
        //             84,
        //             24,
        //             75,
        //             37,
        //             65,
        //             34,
        //             45,67,89,45,67
        //         ]
        //     }, {
        //         type: 'bar',
        //         label: 'Parking C',
        //         backgroundColor: "#cae3fc",
        //         data: [
        //             41,
        //             52,
        //             24,
        //             74,
        //             23,
        //             21,
        //             32,
        //             45,67,89,45,67
        //         ]
        //     }]
        // };
        // this.stackedOptions = {
        //     plugins: {
        //         tooltips: {
        //             mode: 'index',
        //             intersect: false
        //         },
        //         legend: {
        //             labels: {
        //                 color: '#495057'
        //             }
        //         }
        //     },
        //     scales: {
        //         x: {
        //             stacked: true,
        //             ticks: {
        //                 color: '#495057'
        //             },
        //             grid: {
        //                 color: '#ebedef'
        //             }
        //         },
        //         y: {
        //             stacked: true,
        //             ticks: {
        //                 color: '#495057'
        //             },
        //             grid: {
        //                 color: '#ebedef'
        //             }
        //         }
        //     }
        // };
        // this.basicData = {
            //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            //     datasets: [
            //         {
            //             label: 'My First dataset',
            //             backgroundColor: '#42A5F5',
            //             data: [65, 59, 80, 81, 56, 55, 40, 60, 50, 60, 30, 40]
            //         },
            //         {
            //             label: 'My Second dataset',
            //             backgroundColor: '#FFA726',
            //             data: [28, 48, 40, 19, 86, 27, 90, 40, 60, 50, 60, 30]
            //         }
            //     ]
            // };
    }

    getData(){
        
        this.appservice.getDashboardData().subscribe(res=>{
            this.dashboardData = res.data;
            this.data = {
                legend: {
                    display: false
                },
                labels: ['Parking A', 'Parking B', 'Parking C'],
                datasets: [
                    {
                        data: [this.dashboardData?.dailyCount,this.dashboardData?.dailyCount,this.dashboardData?.dailyCount],
                        backgroundColor: [
                            "#42A5F5",
                            "#9fcaf5",
                            "#cae3fc"
                        ],
                        hoverBackgroundColor: [
                            "#42A5F5",
                            "#9fcaf5",
                            "#cae3fc"
                        ]
                    }
                ]
            };
            this.dataForMonth = {
                labels: ['Parking A', 'Parking B', 'Parking C'],
                datasets: [
                    {
                        data: [this.dashboardData?.monthlyCount,this.dashboardData?.monthlyCount,this.dashboardData?.monthlyCount],
                        backgroundColor: [
                            "#42A5F5",
                            "#9fcaf5",
                            "#cae3fc"
                        ],
                        hoverBackgroundColor: [
                            "#42A5F5",
                            "#9fcaf5",
                            "#cae3fc"
                        ]
                    }
                ]
            };
            this.dataForYear = {
                labels: ['Parking A', 'Parking B', 'Parking C'],
                datasets: [
                    {
                        data: [this.dashboardData?.yearlyCount, this.dashboardData?.yearlyCount, this.dashboardData?.yearlyCount],
                        backgroundColor: [
                            "#42A5F5",
                            "#9fcaf5",
                            "#cae3fc"
                        ],
                        hoverBackgroundColor: [
                            "#42A5F5",
                            "#9fcaf5",
                            "#cae3fc"
                        ]
                    }
                ]
            };
            this.stackedData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    type: 'bar',
                    label: 'Parking A',
                    backgroundColor: "#42A5F5",
                    data: [
                        50,
                        25,
                        12,
                        48,
                        90,
                        76,
                        42,
                        56,
                        78,
                        60,
                        30,
                        60
                    ]
                }, {
                    type: 'bar',
                    label: 'Parking B',
                    backgroundColor: "#9fcaf5",
                    data: [
                        21,
                        84,
                        24,
                        75,
                        37,
                        65,
                        34,
                        45,67,89,45,67
                    ]
                }, {
                    type: 'bar',
                    label: 'Parking C',
                    backgroundColor: "#cae3fc",
                    data: [
                        41,
                        52,
                        24,
                        74,
                        23,
                        21,
                        32,
                        45,67,89,45,67
                    ]
                }]
            };
            this.stackedOptions = {
                plugins: {
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            };
            this.spinner.hide();
        })
    }
}
