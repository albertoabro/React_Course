import { lazy, LazyExoticComponent } from "react";
import { LazyPage1 } from "../01-lazyLoad/pages/LazyPage1";
import { NoLazy } from "../01-lazyLoad/pages/NoLazy";

type JSXComponent = () => React.JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
};

const Lazy3 = lazy(() => import('../01-lazyLoad/pages/LazyPage3') ) ;
const Lazy2 = lazy(() => import('../01-lazyLoad/pages/LazyPage2') );
const LazyLayout = lazy(() => import('../01-lazyLoad/layout/LazyLayout'));

export const routes: Route[] = [



    {
        path: 'no-lazy',
        to: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },

    { //Nested Routes 
        path: '/lazyLayout/*',
        to: '/lazyLayout/',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
];