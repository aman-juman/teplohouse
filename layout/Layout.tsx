import React, {FunctionComponent} from 'react';
import {LayoutProps} from "./Layout.props";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";

const Layout = ({children, ...props}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};


