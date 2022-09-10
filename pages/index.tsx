import React from "react";
import {Present} from "../components";
import {Product} from "../components/Products/Product/Product";
import {Calculator} from "../components/Calculator/Calculator";
import {BeforeAfter} from "../components/BeforeAfter/BeforeAfter";
import {Advantage} from "../components/Advantage/Advantage";

export default function Home(): JSX.Element {
  return (
    <div className="app">
        <Present />
        <Product />
        <Calculator />
        <BeforeAfter />
        <Advantage />
    </div>
  );
}
