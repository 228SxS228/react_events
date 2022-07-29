import React from "react";
import Calendar from "../pages/Calendar";
import Login from "../pages/Login";

export interface IRouter {
    path:string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteName {
    LOGIN = '/login',
    CALENDAR = '/'
}

export const publicRoutes: IRouter[] = [
    {path: RouteName.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRouter[] = [
    {path: RouteName.CALENDAR, exact: true, component: Calendar}
]