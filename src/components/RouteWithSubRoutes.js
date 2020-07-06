import React from "react";
import { Route } from "react-router-dom";

export default function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => {
                return (
                    <route.component
                        {...props}
                        routes={route.routes}
                    ></route.component>
                );
            }}
        ></Route>
    );
}
