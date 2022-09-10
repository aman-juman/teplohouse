import React from "react";
import {Present} from "../components";
import {Product} from "../components/Products/Product/Product";
import {Calculator} from "../components/Calculator/Calculator";
import {BeforeAfter} from "../components/BeforeAfter/BeforeAfter";

export default function Home(): JSX.Element {
  return (
    <>
        <Present />
        <Product />
        <Calculator />
        <BeforeAfter />
    </>
  );
}
