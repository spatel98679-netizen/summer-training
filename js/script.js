const empName = document.getElementById("EmployeeName");
const email = document.getElementById("EmployeeEmail");
const salary = document.getElementById("Employeesalary");
const role = document.getElementById("EmployeeRole");
const experience = document.getElementById("EmployeeExperience");
const submitBtn = document.getElementById("submit");

// console.log(name);

// const error = "border-1 border-red-500 rounded outline-none";
// const normal = "outline-none border-2 border-green-400 rounded py-1 px-3";

// empName.addEventListener("input", (event) => {
//   const empNameValue = event.target.value;

//   if (empNameValue.length < 3||empNameValue.length>=20) {
//     empName.classList = error;
//   } else {
//     empName.classList = normal;
//   }
// });

const empList = [];
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  empList.push({
    name: empName.value,
    email: email.value,
    salary: salary.value,
    role: role.value,
    experience: experience.value,
  });
  console.log(empList);
  empName.value = "";
  email.value = "";
  salary.value = "";
  role.value = "";
  experience.value = "";
});