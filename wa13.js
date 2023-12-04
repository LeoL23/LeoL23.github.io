console.log("Making sure this  works");

let HR = {

    "employees": [{
    "name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raise-eligible": true,
    },
    {
    "name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raise-eligible": true,
    },
    {
    "name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 212000,
    "raise-eligible": false,
    }
]
}

let company = {
    "companyInfo": [
        {
            "companyName": "Tech Stars",
            "Website": "www.techstars.site",
            "employees": HR["employees"],
        }
    ]
}








class Company {
    "companyName": "Tech Stars", //Q2
    "website": "Website", //Q2
    "employees": [ 
        {
            "firstName": "Sam",
            "department": "Tech",
            "Salary": "Manager",
            "raiseEligible": "40000",
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "Salary": "Trainee",
            "raiseEligible": "18500",    
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "Salary": "Executive",
            "raiseEligible": "21200",    
        }
    ]
}
