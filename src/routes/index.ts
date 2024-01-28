import React from "react";
import Login from "../pages/Login/Login";
import HomePage from "../pages/HomePage/HomePage";

export interface IRoute {
    path: string;
    element : React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    HOMEPAGE = '/',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: false, element: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOMEPAGE, exact: true, element: HomePage},
    {path: RouteNames.LOGIN, exact: false, element: Login}
]