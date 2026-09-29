

const registrationform = document.getElementById("registrationform");

registrationform.addEventListener("submit", function (event) {
  // this is the main function that listern the input from the user and check the vital condition and send this data to the backend using the json formate.

  event.preventDefault();

  const citizenname = document.getElementById("citizenname").value;

  const dob = document.getElementById("DOB").value;

  const gender = document.getElementById("gender").value;

  const mobile = document.getElementById("mobile").value;

  const center = document.getElementById("center").value;

  if (citizenname.trim() === "") {
    alert("Please enter your full name.");

    return;
  }

  const mobilePattern = /^[0-9]{10}$/;

  if (!mobilePattern.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");

    return;
  }

  const citizenData = {
    citizen_name: citizenname,
    dob: dob,
    gender: gender,
    mobile_number: mobile
   
  };

  // send data to backend

  fetch("http://localhost:3000/api/citizens", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(citizenData),
  })
    // convert backend response from JSON text to JS object

    .then(function (response) {
      return response.json();
    })

    // use the response from backend
    .then(function (data) {
      console.log("Backend response:");
      console.log(data);

      if (data.success) {
        alert(
          "citizens registered successfully!\n" +
            "citizen ID:" +
            data.citizen_id,
        );
      } else {
        alert("Failed to register citizen.");
      }
    })

   // Handle connection errors
    .catch(function (error) {

        console.error("Error:", error);

        alert("Could not connect to the backend server.");

    });
});
