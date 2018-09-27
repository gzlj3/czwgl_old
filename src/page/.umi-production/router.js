import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layout').default,
    "routes": [
      {
        "path": "/",
        "component": require('../Helloworld').default,
        "exact": true
      },
      {
        "path": "/helloworld",
        "component": require('../Helloworld').default,
        "exact": true
      },
      {
        "path": "/dashboard",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "component": require('../Dashboard/Analysis').default,
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "component": require('../Dashboard/Monitor').default,
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "component": require('../Dashboard/Workplace').default,
            "exact": true
          }
        ]
      },
      {
        "path": "/puzzlecards",
        "component": require('../puzzlecards').default,
        "exact": true
      }
    ]
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
