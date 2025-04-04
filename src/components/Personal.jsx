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

import { dating_app_usage, smoking_freq } from "./chartData";

const COLORS = ["#6b2646", "#8b3a60", "#a04b74", "#b86591", "#d17fae", "#e09dc8"];

export default function Personal(){

    return(
        <>
            {/* heading */}
            <div className="w-full text-center my-3 text-6xl font-semibold text-[#a70764]">
                Personal
            </div>

            {/* Question 1 */}
            <div className="w-full h-auto flex flex-col items-center mb-14">
                {/* Question */}
                <div className="text-xl mb-3">
                    <span className="text-3xl font-semibold">Q: </span> How frequently did you used dating apps during your stay at IIT?
                </div>
                <div>Total respondents - 282</div>

                {/* Chart */}
                <div className="w-full md:w-[65%] h-[400px] mb-5">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        data={dating_app_usage}
                        margin={{ top: 20, right: 30, left: 1, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" type="category" />
                            <YAxis type="number" domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                            <Tooltip
                                contentStyle={{
                                backgroundColor: "#fff",
                                borderRadius: "8px",
                                border: "1px solid #ccc"
                                }}
                                formatter={(value, name, props) => {
                                const actualCount = props.payload.value;
                                return [`${actualCount} students`, "Response"];
                                }}
                                labelFormatter={(label) => `Usage: ${label}`}
                            />
                            <Bar
                                dataKey="count"
                                fill="#a70764"
                                radius={[10, 10, 0, 0]}
                                label={{ position: 'top', formatter: (val) => `${val}%` }}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                
            </div>


            {/* Question 2 */}
            <div className="w-full h-auto flex flex-col items-center mb-14">
                {/* Question */}
                <div className="text-xl mb-3">
                    <span className="text-3xl font-semibold">Q: </span> How often do you smoke cigarettes?
                </div>
                <div>Total respondents - 282</div>
                
                {/* Chart */}
                <div className="w-full md:w-[65%] h-[500px] flex justify-center items-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={smoking_freq}
                                cx="50%"
                                cy="50%"
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                                label={false} // Remove labels inside slices
                            >
                                {smoking_freq.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => `${value} people`} />
                            <Legend verticalAlign="top" align="center" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </>
    )
}