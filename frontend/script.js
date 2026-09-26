const registrationform = document.getElementById("registrationform");

registrationform.addEventListener("submit", function(event){       

    event.preventDefault();
    

    const citizenname=
    document.getElementById("citizenname").value;
    
    const dob=
    document.getElementById("DOB").value;

    const gender=
    document.getElementById("gender").value;

    const mobile=
    document.getElementById("mobile").value;

    const center=
    document.getElementById("center").value;

    if (citizenname.trim() === "") {

    alert("Please enter your full name.");

    return;
}

    const mobilePattern= /^[0-9]{10}$/;

    if(!mobilePattern.test(mobile)){
        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;

    }

    const citizenData={
        citizen_name:citizenname,
        dob: dob,
        gender:gender,
        mobile_number:mobile,
        center_id:center,
    };

    console.log("CitizenData:");
    console.log(citizenData);

    alert(
        "Citizen registration form submitted successfully!"
    );



});
