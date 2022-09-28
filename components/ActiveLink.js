import React from 'react';
import {useRouter} from "next/router";

export function ActiveLink({children, href}) {
    const router = useRouter();
    const style = {
        background: router.asPath === href ? " #FBB717" : 'none'
    };
    const handleClick = e =>{
        e.preventDefault();
        router.push(href);
    };
    return (
        <a href={href} onClick={handleClick} style={style}>{children}</a>
    );
}