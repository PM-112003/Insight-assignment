import {
    PieChart,
    Pie,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
    CartesianGrid
  } from "recharts";

import { useState } from "react";

import { participationData, skills_picked_up } from "./chartData";

export default function Miscellaneous(){

    const [selectedCPI, setSelectedCPI] = useState("all");

    const cpiCategories = ["<7", "7-8", "8-9", ">9", "all"];
    const colorShades = ["#FFB300", "#FFC107", "#FFD54F", "#FFECB3"];
    const colorShades2 = [
        "#4E342E", // Dark brownish yellow
        "#8D6E63", // Medium brownish yellow
        "#FF9800", // Deep orange-yellow
        "#FFB300", // Strong yellow-orange
        "#FFC107", // Bright gold
        "#FFD54F"  // Light golden yellow
    ];

    return(
        <>

            {/* Heading */}
            <div className="w-full text-center my-3 text-6xl font-semibold text-[#b4ab05]">
                Miscellaneous
            </div>


            {/* Question 1 */}
            <div className="w-full h-auto flex flex-col items-center mb-14">
                {/* Question */}
                <div className="text-xl mb-3">
                    <span className="text-3xl font-semibold">Q: </span> Did you represent IIT Bombay at any inter-IIT?
                </div>
                <div>Total respondents - 279</div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-3 my-4">
                    {cpiCategories.map((cat, index) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCPI(cat)}
                            className={`px-4 py-2 rounded-lg border font-medium transition-all duration-200
                                ${cat === "all"
                                    ? selectedCPI === "all"
                                        ? "bg-red-300 border-red-700 text-black"
                                        : "border-red-700 text-red-700 hover:bg-red-100"
                                    : selectedCPI === cat
                                        ? `bg-[${colorShades[index]}] border-[#795548] text-black`
                                        : `border-[#795548] text-[#795548] hover:bg-yellow-100`
                                }`}
                        >
                            {cat === "all" ? "Reset" : `CPI ${cat}`}
                        </button>
                    ))}
                </div>

                {/* Bar Chart */}
                <div className="w-full md:w-[65%] h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={participationData}
                            margin={{ top: 20, right: 30, left: 1, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" type="category" />
                            <YAxis type="number" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#fff",
                                    borderRadius: "8px",
                                    border: "1px solid #ccc",
                                }}
                                formatter={(value) => [`${value} students`]}
                            />
                            <Legend />
                            
                            {/* Stacked Bar Chart */}
                            {selectedCPI === "all"
                                ? cpiCategories.slice(0, 4).map((cat, index) => (
                                    <Bar
                                        key={cat}
                                        dataKey={cat}
                                        stackId="cpiStack"
                                        fill={colorShades[index]}
                                    />
                                ))
                                : (
                                    <Bar
                                        dataKey={selectedCPI}
                                        stackId="cpiStack"
                                        fill={colorShades[cpiCategories.indexOf(selectedCPI)]}
                                    />
                                )}
                        </BarChart>
                    </ResponsiveContainer>
                </div>


            </div>

            {/* Question 2 */}
            <div className="w-full h-auto flex flex-col items-center mb-14">
                {/* Question */}
                <div className="text-xl mb-3">
                    <span className="text-3xl font-semibold">Q: </span> What skills did you picked up during your time at IITB?
                </div>
                <div>Total respondents - 279</div>

                {/* Pie Chart Container */}
                <div className="w-full md:w-[60%] h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={skills_picked_up}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={150}
                                dataKey="value"
                                nameKey="name"
                            >
                                {skills_picked_up.map((_, index) => (
                                    <Cell key={index} fill={colorShades2[index]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value, name) => [`${value} students in ${name}`]} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>

        </>
    )
}