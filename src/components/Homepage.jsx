
export default function Homepage(){

    return(
        <>

            {/* images*/}
            <img src="./senior_survey.png" alt="senior survey pic" className="mx-auto md:w-[600px] md:h-[97px] sm:w-[400px] sm:h-[60px] w-[300px] h-[40px] my-5 object-contain"/>
            <img src="./convocation.png" alt="convocation pic" className="w-full max-w-screen overflow-hidden"/>

            {/* paragraphs */}
            <div className="my-5 text-center w-[80%] mx-auto">
                <p className="my-5">
                    Welcome to the senior survey* website where we present the findings of the senior survey conducted among IITB's graduating batch of 2024. 
                    The survey gathers valuable insights from the outgoing batch. The survey is divided into four key sections: Academics, Career, Personal and Miscellaneous. 
                    We have also included some comments about their time and experiences here at IITB at the end of the Miscellaneous section.
                </p>
                <p className="mb-5">
                    This website can be best experienced on a personal computer/tablet.
                    Further, in case you're using a mobile phone to view the website, kindly switch to the landscape mode for a better experience.
                    You can hover over/click on the various sections within the pie/bar charts to view the option it's supposed to represent for ease of interpretation. 
                    For the questions with responses filtered further on the basis of demographics such as gender or CPI, you can click on the segment buttons to view the chart for that particular demographic segment. 
                    We hope you have a fun time going through the survey!
                </p>
            </div>


            {/* academics section */}
            <div className="w-full mt-5 flex flex-col items-center mb-40">
                <span className="md:text-7xl text-5xl font-bold text-[#4F4B25]">Academics</span>
                <div className="mt-10 mb-5 w-[50%] mx-auto border-2 border-black md:h-[450px] sm:h-[350px] h-[200px] rounded-xl relative group overflow-hidden cursor-pointer">
                    {/* Image */}
                    <img src="./academics.png" alt="acads" className="w-full h-full object-cover rounded-xl transition duration-300 ease-in-out group-hover:brightness-50"/>

                    {/* Overlay with text */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-40 transition-all duration-500 ease-in-out translate-y-10 group-hover:translate-y-0">
                        <span className="text-white text-lg font-semibold">Tap to know more</span>
                    </div>
                </div>

                <p className="mt-1 text-center w-[45%] mx-auto">
                    This part of the survey captures the academic experiences and perceptions of graduating seniors from IITB. 
                    It covers course satisfaction, CPI satisfaction, academic interests, acad-extracurricular balance, etc.
                </p>
            </div>

            {/* Career section */}
            <div className="w-full mt-5 flex flex-col items-center mb-40">
                <span className="md:text-7xl text-5xl font-bold text-[#4F4B25]">Career</span>
                <div className="mt-10 mb-5 w-[50%] mx-auto border-2 border-black md:h-[450px] sm:h-[350px] h-[200px] rounded-xl relative group overflow-hidden cursor-pointer">
                    {/* Image */}
                    <img src="./career.png" alt="career" className="w-full h-full object-cover rounded-xl transition duration-300 ease-in-out group-hover:brightness-50"/>

                    {/* Overlay with text */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-40 transition-all duration-500 ease-in-out translate-y-10 group-hover:translate-y-0">
                        <span className="text-white text-lg font-semibold">Tap to know more</span>
                    </div>
                </div>

                <p className="mt-1 text-center w-[45%] mx-auto">
                    This section explores the career outcomes and aspirations of IIT Bombay's graduating seniors.
                    It includes data on job placements, higher education plans, internships, etc.
                </p>
            </div>

            {/* Personal section */}
            <div className="w-full mt-5 flex flex-col items-center mb-40">
                <span className="md:text-7xl text-5xl font-bold text-[#4F4B25]">Personal</span>
                <div className="mt-10 mb-5 w-[50%] mx-auto border-2 border-black md:h-[450px] sm:h-[350px] h-[200px] rounded-xl relative group overflow-hidden cursor-pointer">
                    {/* Image */}
                    <img src="./Personal.png" alt="career" className="w-full h-full object-cover rounded-xl transition duration-300 ease-in-out group-hover:brightness-50"/>

                    {/* Overlay with text */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-40 transition-all duration-500 ease-in-out translate-y-10 group-hover:translate-y-0">
                        <span className="text-white text-lg font-semibold">Tap to know more</span>
                    </div>
                </div>

                <p className="mt-1 text-center w-[45%] mx-auto">
                    The personal section of the survey delves into the overall well-being and personal growth of the graduating seniors.
                    It examines aspects such as campus life, extracurricular involvement and mental health.
                </p>
            </div>

            {/* Miscellaneous */}
            <div className="w-full mt-5 flex flex-col items-center mb-40">
                <span className="md:text-7xl text-5xl font-bold text-[#4F4B25]">Miscellaneous</span>
                <div className="mt-10 mb-5 w-[50%] mx-auto border-2 border-black md:h-[450px] sm:h-[350px] h-[200px] rounded-xl relative group overflow-hidden cursor-pointer">
                    {/* Image */}
                    <img src="./Miscellaneous.png" alt="career" className="w-full h-full object-cover rounded-xl transition duration-300 ease-in-out group-hover:brightness-50"/>

                    {/* Overlay with text */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-40 transition-all duration-500 ease-in-out translate-y-10 group-hover:translate-y-0">
                        <span className="text-white text-lg font-semibold">Tap to know more</span>
                    </div>
                </div>

                <p className="mt-1 text-center w-[45%] mx-auto">
                    In this section we find out the graduating batch’s opinions on their overall experience, satisfaction with mess food,
                    their involvement in the campus elections, etc. 
                    We also have included some comments they made about their time and experiences at the end.
                </p>
            </div>

            {/* disclaimer */}
            <div className="w-full mt-5 flex flex-col items-center mb-40">
                <span className="md:text-4xl text-3xl font-semibold text-black">Disclaimer</span>
                <p className="mt-1 text-center w-[45%] mx-auto">
                    Please note that this survey was completed by 291 students, which represents only a subset of the 
                    entire graduating student population of over 2,400 students.
                    It is important to acknowledge that the findings presented 
                    here may not entirely reflect the views and experiences of the whole graduating student body.
                    The content on this website is strictly the property of Insight
                    , IIT Bombay. Content here cannot be reproduced, quoted or
                    taken out of context without written permission from Insight. 
                    If you wish to reproduce any content herein, please contact the Chief Editors or Mail to: insight@iitb.ac.in
                </p>
            </div>
        </>
    )
}