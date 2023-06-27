const form = document.querySelector("form");

// Event listener for the form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Accessing the input elements by their IDs or names and retrieving their values
  const caseType = document.querySelector(
    "input[name='caseType']:checked"
  ).value;
  const issueInputField = document.querySelector("#issueInputField").value;
  const name = document.querySelector("#name").value;
  const contactNumber = document.querySelector("#contactNumber").value;
  const emailAddress = document.querySelector("#emailAddress").value;
  const serialNumber = document.querySelector("#serialNumber").value;
  const caseId = document.querySelector("#caseId").value;
  const altContactNumber = document.querySelector("#altContactNumber").value;
  const altEmailId = document.querySelector("#altEmailId").value;
  const unitType = document.querySelector("#unitType").value;
  const sysLocation = document.querySelector("#sysLocation").value;
  const compName = document.querySelector("#compName").value;
  const os = document.querySelector("#os").value;
  const issueStartDate = document.querySelector("#issueStartDate").value;
  const comments = document.querySelector("#comments").value;

  // Log the retrieved values to the console
  console.log("caseType:", caseType);
  console.log("Issue:", issueInputField);
  console.log("Name:", name);
  console.log("Contact Number:", contactNumber);
  console.log("Email ID:", emailAddress);
  console.log("Serial Number:", serialNumber);
  console.log("Case ID:", caseId);
  console.log("Alt. Contact #:", altContactNumber);
  console.log("Alt. Email ID:", altEmailId);
  console.log("Unit Type:", unitType);
  console.log("System Location:", sysLocation);
  console.log("Company Location:", compName);
  console.log("OS:", os);
  console.log("Issue Start Date:", issueStartDate);
  console.log("Comments:", comments);

  // Perform any further processing or actions with the retrieved values

  // Function to download a file
  function downloadFile(filename, content) {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(content)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  // Retrieve the value of the Case Id field
  const caseIdValue = document.querySelector("#caseId").value;

  // Set the file name based on the Case Id value
  const fileName = caseIdValue ? caseIdValue + ".txt" : "untitled.txt";

  // Combine the form field values into a single string
  const fileContent =
    `Case Type: ${caseType}\n` +
    `Issue: ${issueInputField}\n` +
    `Name: ${name}\n` +
    `Contact Number: ${contactNumber}\n` +
    `Email ID: ${emailAddress}\n` +
    `Serial Number: ${serialNumber}\n` +
    `Case ID: ${caseId}\n` +
    `Alt. Contact #: ${altContactNumber}\n` +
    `Alt. Email ID: ${altEmailId}\n` +
    `Unit Type: ${unitType}\n` +
    `System Location: ${sysLocation}\n` +
    `Company Location: ${compName}\n` +
    `OS: ${os}\n` +
    `Issue Start Date: ${issueStartDate}\n` +
    `Comments: ${comments}`;

  // Download the file
  downloadFile(fileName, fileContent);
});
