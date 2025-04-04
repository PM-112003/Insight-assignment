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

import { degreeData, shades_for_degree_data, CPIdata, branches_for_cpi, data } from "./chartData";

export default function Academics(){
    
    
      const [selectedBranch, setSelectedBranch] = useState(null);
  
      const getChartData = () => {
        if (!selectedBranch) return CPIdata;
    
        return CPIdata.map((entry) => ({
          range: entry.range,
          [selectedBranch]: entry[selectedBranch],
        }));
      };
      
    return(
        <>
            {/* heading */}
            <div className="w-full text-center my-3 text-6xl font-semibold text-[#1E4460]">
                Academics
            </div>

            {/* Question 1 */}
            <div className="w-full h-auto flex flex-col items-center mb-14">
                {/* Question */}
                <div className="text-xl mb-3">
                    <span className="text-3xl font-semibold">Q: </span> Which department are you majoring in?
                </div>
                <div>Total respondents - 291</div>

                {/* Chart */}
                <div className="w-full md:w-[65%] h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        layout="vertical"
                        data={data}
                        margin={{ top: 20, right: 30, left: 1, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" width={100} />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #ccc" }}
                                formatter={(value, name) => [`${value} students`, "Department"]}
                            />
                            <Bar dataKey="value" fill="#1E3A8A" radius={[0, 10, 10, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                
            </div>

            {/* Question 2 */}
            <div className="w-full h-auto flex flex-col items-center mb-14">

                {/* Question */}
                <div className="text-xl mb-3">
                    <span className="text-3xl font-semibold">Q: </span> What degree are you graduating with?
                </div>
                <div>Total respondents - 291</div>

                {/* Chart */}
                <div className="w-full md:w-[60%] h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                            data={degreeData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            innerRadius={50}
                            label
                            >
                            {degreeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={shades_for_degree_data[index % shades_for_degree_data.length]} />
                            ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="top" align="center" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>

            {/* Question 3 */}
            <div className="w-full h-auto flex flex-col items-center mb-14">
                {/* Question */}
                <div className="text-xl mb-3">
                    <span className="text-3xl font-semibold">Q: </span> What is your CPI?
                </div>
                <div>Total respondents - 210</div>

                {/* chart */}
                <div className="w-full md:w-[60%] h-[400px] my-3">
                    {/* Branch Buttons */}
                    <div className="flex flex-wrap gap-3 mb-3">
                        {branches_for_cpi.map((branch) => (
                            <button
                                key={branch}
                                className={`px-4 py-2 rounded-md transition-all duration-200
                                    ${selectedBranch === branch 
                                        ? "bg-[#243c5a] text-white"  // Darker Blue when selected
                                        : "bg-[#4e87d7] text-white hover:bg-[#1e2d46]" // Subtle Dark Blue with hover effect
                                    }`}
                                onClick={() => setSelectedBranch(branch)}
                            >
                                {branch}
                            </button>
                        ))}
                        <button 
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            onClick={() => setSelectedBranch(null)}
                        >
                            Reset
                        </button>
                    </div>

                    {/* Chart */}
                    <ResponsiveContainer width="80%" height={400}>
                        <BarChart data={getChartData()} barSize={50}>
                            <XAxis dataKey="range" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {selectedBranch
                                ? <Bar dataKey={selectedBranch} fill="#1e3a8a" />  // Dark Blue for Single Selection
                                : branches_for_cpi.map((branch, index) => (
                                    <Bar 
                                        key={branch} 
                                        dataKey={branch} 
                                        stackId="a" 
                                        fill={`hsl(${220 + index * 10}, 60%, 35%)`} // Shades of Dark Blue
                                    />
                                ))
                            }
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </>
    )
}