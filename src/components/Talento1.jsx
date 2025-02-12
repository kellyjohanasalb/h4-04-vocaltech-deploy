import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import ProgresBar from "./ProgresBar";
import logo from "../assets/icons/VocalTech.png";

export default function Talento1() {
    const [selectedTalento1, setSelectedTalento1] = useState(""); 
    const navigate = useNavigate(); 
    const handleBackClick = () => {
        navigate("/mvp1");
    };

    const handleOptionTalento1 = (event) => {
        setSelectedTalento1(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedTalento1 === "Si") {
            navigate("/talento2");
        } else if (selectedTalento1 === "No" || selectedTalento1 === "No estoy seguro/a") {
            navigate("/fin");
        } else {
            alert("Por favor selecciona una opción antes de continuar.");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            <div>
            <header className="flex items-center justify-center w-full max-w-4xl px-4">
                <button onClick={handleBackClick} className="absolute flex items-center gap-4 text-lg font-medium text-black lg:left-36 max-lg:left-72">
                    <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z"
                            fill="black"
                        />
                    </svg>
                    Regresar
                </button>
                <img
                    src={logo}
                    alt="VocalTech"
                    className="lg:w-[328px] h-[54px]"
                />
            </header>
            {/* Progress Bar */}
            <div className="flex items-center justify-between w-full max-w-4xl mt-8">
                <ProgresBar />
            </div>
        </div>
            <form className="w-full max-w-4xl px-4 mt-20" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-lg font-semibold">
                        1.-¿Tu empresa está buscando nuevo talento?
                    </label>
                    <div className="mt-4 space-y-2">
                        {["Si", "No", "No estoy seguro/a"].map((talento1, index) => (
                            <label key={index} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    id={`talento1-${index}`} 
                                    type="radio"
                                    name="talento1"
                                    value={talento1}
                                    className="hidden peer"
                                    onChange={handleOptionTalento1}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{talento1}</span>
                            </label>
                        ))}
                    </div>
                </div>
                {/* Botón Siguiente */}
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-4 mt-6 bg-[#2684FC] text-white rounded-full lg:w-36 h-11"
                    >
                        Siguiente <CgArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
}
