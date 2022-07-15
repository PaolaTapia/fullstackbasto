import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AppBarComponent from './appBar/AppBarComponent';
import { routes } from './RouterData';


const RouterComponent: React.FC = () => {
  console.log("dedede",routes);

  return (

      <Routes>
        <Route path="/" element={<AppBarComponent/>}>
        <Route path="/" element={<Navigate to="/animals" replace />} />
        {routes.map((route, idx) => {
          return(
            <Route
            key={`${idx}38138411`}
            path={route.path}
            element={<route.component />}
          />
          )     
        })}
        </Route>
      </Routes>

  );
};

export default RouterComponent;
