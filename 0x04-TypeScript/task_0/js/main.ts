interface Student {
  firstName:string,
  lastName:string,
  age:number,
  location:string
}

const student1: Student = {
  firstName: "Leon",
  lastName: "Gabriel",
  age: 25,
  location: "Nairobi",
};

const student2: Student = {
  firstName:"Max",
  lastName:"Okoth",
  age:18,
  location:"Siaya"
};

//array containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const body = document.querySelector("body");

// Create the table element
const table = document.createElement("table");
table.border = "1";
table.style.width = "50%";

// Create the table header
const headerRow = document.createElement("tr");

const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

// Append headers to the header row
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);

// Append header row to the table
table.appendChild(headerRow);

// Append rows for each student in the array
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body
if (body) {
  body.appendChild(table);
}