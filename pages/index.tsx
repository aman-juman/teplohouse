import React, {useState} from "react";
import {Present, Products} from "../components";
import {Calculator} from "../components/Calculator/Calculator";
import {BeforeAfter} from "../components/BeforeAfter/BeforeAfter";
import {Advantage} from "../components/Advantage/Advantage";
import {withLayout} from "../layout/Layout";
import ModalMode from "../utils/ModalMode/ModalMode";
import CalculatorSection from "../components/Calculator/CalculatorSection";
import Gallery from "../components/Gallery/Gallery";



export default function Home(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
  return (
    <div className="app">

        <Present />
        <Products />

        <BeforeAfter />
        <CalculatorSection setMode={setMode} />
        {mode && <ModalMode setMode={setMode}> <Calculator /></ModalMode>}
        <Gallery />

        <Advantage />
    </div>
  );
}