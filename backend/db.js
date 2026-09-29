
const mysql =require("mysql2");   // import the MySQL 


const db =mysql.createConnection({      // create the database connection 
     host: "localhost",
    user: "username",
    password: "your password",
    database: "database name"
});

db.connect(function(error){// call back function . 
    if(error){
        console.log("Database connection failed:");
        console.log(error);
        return;  // this mean stop executing the current function.
    }

    console.log("Mysql database connected:");
});

module.exports =db; // export the connection this make the db connection available to other js file.
