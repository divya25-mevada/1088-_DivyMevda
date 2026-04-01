// 1. Employee Salary Processor
// • Filter employees with salary greater than 40,000
// • Increase their salary by 10%
// • Add a new property:
// • "level":
// o salary ≥ 70000 → "Senior"
// o else → "Mid"


const employees=[{
    name:'raj',
    salary:80000},
    {name:'Dev',
    salary:20000},
    {name:'Suresh',
    salary:45000}

]
   

const filteremp=employees.filter((emp)=>{
       return emp.salary>40000
       
       
})
console.log(filteremp);

function Role(e) {
  return e.map((emp1) => {
    if (emp1.salary > 70000) {
      return {
        ...emp1,
         Increase_salary:emp1.salary*1.10,
        level: 'Senior'
      };
    } else {
      return {
        ...emp1,
        Increase_salary:emp1.salary*1.10,
        level: 'Mid'
      };
    }
  });

}
console.log(Role(filteremp))




