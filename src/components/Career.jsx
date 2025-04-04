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

import { plans_after_grad, plans_after_grad_cpi } from "./chartData";

const cpiCategories = ["all", "<7", "7-8", "8-9", ">9"];

export default function Career(){
    const [selectedCPI, setSelectedCPI] = useState("all");

    return(
        <>
            {/* heading */}
            <div className="w-full text-center my-3 text-6xl font-semibold text-[#15553a]">
                Career
            </div>

            {/* Question 1 */}
            <div className="w-full h-auto flex flex-col items-center mb-14">
                {/* Question */}
                <div className="text-xl mb-3">
                    <span className="text-3xl font-semibold">Q: </span> What are your plans after graduation?
                </div>
                <div>Total respondents - 207</div>

                {/* Chart */}
                <div className="w-full md:w-[65%] h-[400px] mb-5">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={plans_after_grad}  // No need for layout="horizontal" since it's default
                            margin={{ top: 20, right: 30, left: 1, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" type="category" />  {/* X-axis has category labels */}
                            <YAxis type="number" />  {/* Y-axis has numerical values */}
                            <Tooltip
                                contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #ccc" }}
                                formatter={(value, name) => [`${value} students`, "Department"]}
                            />
                            <Bar dataKey="value" fill="#15553a" radius={[10, 10, 0, 0]} />  {/* Rounded corners on top */}
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <hr />
                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-3 my-4">
                    {cpiCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCPI(cat)}
                        className={`px-4 py-2 rounded-lg border font-medium transition-all duration-200
                            ${cat === "all"
                                ? selectedCPI === "all"
                                    ? "bg-red-300 border-red-700 text-black"
                                    : "border-red-700 text-red-700 hover:bg-red-100"
                                : selectedCPI === cat
                                    ? "bg-green-300 border-[#15553a] text-black"
                                    : "border-[#15553a] text-[#15553a] hover:bg-green-100"
                            }`}
                    >
                        {cat === "all" ? "Reset" : `CPI ${cat}`}
                    </button>
                    ))}
                </div>

                {/* Chart */}
                <div className="w-full md:w-[65%] h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={plans_after_grad_cpi[selectedCPI]}
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
                        <Bar dataKey="value" fill="#15553a" radius={[10, 10, 0, 0]} />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
                
            </div>

            {/* Question 2 */}
            
        </>
    )
}