import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-charts',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {

  constructor (
    private route: ActivatedRoute,
    private router: Router
  ) {}

  para = '';

  public lineCharts = "";
  public pieCharts = "";
  public dashboard = "";
  public datatable = "";
  public bootstrap = "";
  public plugin = "";

  public atomAPI = "";
  public combineAPI = "";
  public routeManagement = "";
  //public versionManagement = "";
  public healthCheckup = "";
  public performanceMonitoringAll = "";

  routers = [];



  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.para=params['id'];
    });

    this.lineCharts = "/main/"+this.para+"/lineCharts";
    this.pieCharts = "/main/"+this.para+"/pieCharts";
    this.dashboard = "/main/"+this.para+"/dashboard";
    this.datatable = "/main/"+this.para+"/datatable";
    this.bootstrap = "/main/"+this.para+"/bootstrap-static";
    this.plugin = "/main/"+this.para+"/bootstrap-plugin";

    this.atomAPI = "/main/"+this.para+"/atomAPI";
    this.combineAPI = "/main/"+this.para+"/combineAPI";
    this.routeManagement = "/main/"+this.para+"/routeManagement";
    //this.versionManagement = "/main/"+this.para+"/versionManagement";
    this.healthCheckup = "/main/"+this.para+"/healthCheckup";
    this.performanceMonitoringAll ="/main/"+this.para+"/performanceMonitoringAll";

    this.routers = [
      // {
      //   href: this.dashboard,
      //   name: "Dashboard",
      //   type: false
      // },
      // {
      //   href: 'charts',
      //   name: "Charts",
      //   type: true,
      //   child: [
      //     {href: this.lineCharts, name: "Line Charts"},
      //     {href: this.pieCharts, name: "Pie Charts"}
      //   ]
      // },
      // {
      //   href: 'tables',
      //   name: "Tables",
      //   type: true,
      //   child: [
      //     {href: this.datatable, name: "Data Tables"}
      //   ]
      // },
      // {
      //   href: 'bootstrap',
      //   name: "Bootstrap",
      //   type: true,
      //   child: [
      //     {href: this.bootstrap, name: "Static Components"},
      //     {href: this.plugin, name: "Plugin Components"}
      //   ]
      // },
      {
        href: 'APIs',
        name: "API管理",
        type: true,
        child: [
          {href: this.atomAPI, name:"原子API"},
          {href: this.combineAPI, name:"组合API"}
        ]
      },
      {
        href: this.routeManagement,
        name: "动态路由管理",
        type: false
      },
      {
        href: this.healthCheckup,
        name:"健康检查",
        type: false
      },
      {
        href: this.performanceMonitoringAll,
        name:"系统性能监控",
        type:false
      }

    ];

  };

  setActiveByPath = function (path, childPath) {
    for (var i = 0; i < this.routers.length; i++) {
      if (this.routers[i].active) {
        this.routers[i].active = false;
        break;
      }
    }
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {
        if (!router.active) {
          router.active = true;
          if (childPath != "") {
            for (var j = 0; j < router.child.length; j++) {
              var route = router.child[j];
              if (route.href == childPath) {
                route.active = true;
              }
            }
          }
        } else {
          router.active = false;
        }
      }
    }
  };
  changeNavStatis = function (path) {
    for (var i = 0; i < this.routers.length; i++) {
      if (this.routers[i].active) {
        this.routers[i].active = false;
        break;
      }
    }
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {
        router.active = true;
      }
    }
  };
  changeChildNavStatis = function (path, childPath) {
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {

        for (var j = 0; j < router.child.length; j++) {
          var route = router.child[j];
          if (route.href != childPath) {
            route.active = false;
          } else {
            route.active = true;
          }
        }
      }

    }
  };
  getQueryString = function(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  r[2]; return null;
  }



}
