
const express=require("express");   // include the express
const db=require("./db"); // include the db .js
const cors= require("cors")  // required to fetch data across cross platform 

const app=express();    // define the application to use the express


const PORT =;      // define the port for listening




// Allow Express to read JSON data
app.use(express.json());
app.use(cors());

// test route 
app.get("/",function(req,res){
    res.send("Aadhaar Enrollment Management System Backend is running!");
});

// citizen registration API 

app.post("/api/citizens",function(req,res){

    const citizenData=req.body;// req.body is an object  

    console.log("Citizen data received:");
    console.log(citizenData);
    // sql query 
    const sql=`
    INSERT INTO Citizens
    (citizen_name,dob,gender,mobile_number)
    VALUES(?,?,?,?)  
    `;
    const values =[
        citizenData.citizen_name,
        citizenData.dob,
        citizenData.gender,
        citizenData.mobile_number
    ];

    // send sql query to Mysql 

    db.query(sql,values,function(error,result){
        // check for the database error 
        if(error){
            console.log("enter inserting citizen:");
            console.log(error);
            return res.status(500).json({
            success:false,
            message: "Failed to save citizen data"
        });
        }

        // if inserting is successful 
        console.log("Citizen saved successfully!");
        console.log("Citizen Id:",result.insertId);

        res.status(201).json({
            success: true,
            message:"Citizen registered successfully",
            citizen_id: result.insertId
        });

        
    });

});

// start the server
app.listen(PORT,function(){
    console.log(`Server is running on https://localhost:${PORT}`);
});
