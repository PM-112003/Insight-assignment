
// academic data
export const degreeData = [
    { name: "B.Tech", value: 161 },
    { name: "M.Tech", value: 47 },
    { name: "Dual Degree", value: 38 },
    { name: "M.Sc", value: 16 },
    { name: "B.S", value: 10 },
    { name: "IDDDP", value: 6 },
    { name: "PhD", value: 5 },
    { name: "MBA", value: 3 },
    { name: "M.Des", value: 2 },
    { name: "M.S", value: 2 },
    { name: "B.Des", value: 1 },
];

export const data = [
    { name: "Systems", value: 1 },
    { name: "Chemistry", value: 2 },
    { name: "Economics", value: 6 },
    { name: "Civil", value: 18 },
    { name: "Management", value: 2 },
    { name: "Aero", value: 26 },
    { name: "CSE", value: 33 },
    { name: "Math", value: 12 },
    { name: "IDC", value: 5 },
    { name: "Meta", value: 15 },
    { name: "Biosciences", value: 4 },
    { name: "Mechanical", value: 53 },
    { name: "Physics", value: 15 },
    { name: "Chemical", value: 21 },
    { name: "IEOR", value: 4 },
    { name: "Earth sciences", value: 6 },
    { name: "Elec", value: 51 },
    { name: "Esed", value: 5 },
    { name: "Energy", value: 9 },
    { name: "CTARA", value: 1 },
    { name: "Others", value: 2 },
  ];


export const shades_for_degree_data = [
    "#4B0082", // Indigo
    "#6A0DAD", // Amethyst
    "#7D3C98", // Purple Plum
    "#9B59B6", // Light Purple
    "#BB8FCE", // Soft Lavender
    "#D2B4DE", // Light Mauve
    "red", // Lilac
    "black", // Pale Purple
    "#A569BD", // Medium Orchid
    "#8E44AD", // Deep Violet
    "#5B2C6F", // Dark Purple
];


export const CPIdata = [
    { range: "CPI < 7", Mechanical: 8, Electrical: 5, CSE: 3, Chemical: 6, Civil: 4, Metallurgy: 2, Economics: 2 },
    { range: "7 < CPI < 8", Mechanical: 10, Electrical: 7, CSE: 5, Chemical: 8, Civil: 6, Metallurgy: 3, Economics: 3 },
    { range: "8 < CPI < 9", Mechanical: 7, Electrical: 9, CSE: 10, Chemical: 7, Civil: 8, Metallurgy: 5, Economics: 4 },
    { range: "CPI > 9", Mechanical: 5, Electrical: 9, CSE: 12, Chemical: 9, Civil: 6, Metallurgy: 4, Economics: 3 },
];

export const branches_for_cpi = ["Mechanical", "Electrical", "CSE", "Chemical", "Civil", "Metallurgy", "Economics"];



// Career page data
export const plans_after_grad = [
    { name: "Tech", value: 50 },
    { name: "Finance", value: 20 },
    { name: "Quant", value: 15 },
    { name: "Consulting", value: 45 },
    { name: "Product", value: 35 },
    { name: "UPSC/govt exams", value: 30 },
    { name: "Startup", value: 4 },
    { name: "Defence", value: 1 },
    { name: "Creative fields", value: 7}
];

export const plans_after_grad_cpi = {
    all: [
      { name: "Tech", value: 50 },
      { name: "Finance", value: 20 },
      { name: "Quant", value: 15 },
      { name: "Consulting", value: 45 },
      { name: "Product", value: 35 },
      { name: "UPSC/govt exams", value: 30 },
      { name: "Startup", value: 4 },
      { name: "Defence", value: 1 },
      { name: "Creative fields", value: 7 }
    ],
    "<7": [
      { name: "Tech", value: 10 },
      { name: "Finance", value: 2 },
      { name: "Quant", value: 1 },
      { name: "Consulting", value: 8 },
      { name: "Product", value: 4 },
      { name: "UPSC/govt exams", value: 3 },
      { name: "Startup", value: 0 },
      { name: "Defence", value: 1 },
      { name: "Creative fields", value: 2 }
    ],
    "7-8": [
      { name: "Tech", value: 15 },
      { name: "Finance", value: 5 },
      { name: "Quant", value: 4 },
      { name: "Consulting", value: 10 },
      { name: "Product", value: 8 },
      { name: "UPSC/govt exams", value: 6 },
      { name: "Startup", value: 1 },
      { name: "Defence", value: 0 },
      { name: "Creative fields", value: 1 }
    ],
    "8-9": [
      { name: "Tech", value: 18 },
      { name: "Finance", value: 8 },
      { name: "Quant", value: 6 },
      { name: "Consulting", value: 18 },
      { name: "Product", value: 15 },
      { name: "UPSC/govt exams", value: 10 },
      { name: "Startup", value: 2 },
      { name: "Defence", value: 0 },
      { name: "Creative fields", value: 3 }
    ],
    ">9": [
      { name: "Tech", value: 7 },
      { name: "Finance", value: 5 },
      { name: "Quant", value: 4 },
      { name: "Consulting", value: 9 },
      { name: "Product", value: 8 },
      { name: "UPSC/govt exams", value: 11 },
      { name: "Startup", value: 1 },
      { name: "Defence", value: 0 },
      { name: "Creative fields", value: 1 }
    ]
  };
  

// data for personal page
export const dating_app_usage = [
    { name: "Never", value: (Math.ceil((59 / 100) * 282)).toFixed(1), count: 59 },
    { name: "Tried for fun", value: (Math.ceil((27 / 100) * 282)).toFixed(1), count: 27 },
    { name: "Rarely", value: (Math.ceil((9 / 100) * 282)).toFixed(1), count: 9 },
    { name: "Quite often", value: (Math.ceil((5 / 100) * 282)).toFixed(1), count: 5 }
];


export const smoking_freq = [
    { name: "Never", value: 229 },
    { name: "Occasionally", value: 20 },
    { name: "few times a week", value: 15 },
    { name: "Atleast once a day", value: 45 },
    { name: "Very rarely", value: 35 },
    { name: "Multiple times a day", value: 30 }
];


// data for miscellaneous
export const participationData = [
    {
        name: "I tried but didn’t get selected",
        "<7": 10,
        "7-8": 15,
        "8-9": 18,
        ">9": 7,
    },
    {
        name: "No, I never tried",
        "<7": 2,
        "7-8": 5,
        "8-9": 8,
        ">9": 5,
    },
    {
        name: "Yes, at inter-IIT tech",
        "<7": 1,
        "7-8": 4,
        "8-9": 6,
        ">9": 4,
    },
    {
        name: "Yes, at inter-IIT cult",
        "<7": 8,
        "7-8": 10,
        "8-9": 18,
        ">9": 9,
    },
    {
        name: "Yes, at inter-IIT sports",
        "<7": 4,
        "7-8": 8,
        "8-9": 15,
        ">9": 8,
    }
];


export const skills_picked_up = [
    { name: "Sports", value: 30 },
    { name: "Technical", value: 100 },
    { name: "Managerial", value: 75 },
    { name: "Cultural", value: 45 },
    { name: "Soft skills", value: 90 },
    { name: "Others", value: 10 }
];
