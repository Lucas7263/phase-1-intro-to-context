// Your code here

// 



function createEmployeeRecord(array) {
    
    let employee = {
                firstName: array[0],
                familyName: array[1],
                title: array[2], 
                payPerHour: array[3],
        
                timeInEvents: [],
                timeOutEvents: [],
            }

                 return employee
}



function createEmployeeRecords(arr) {
    // Need to create 10 records after the first two. Gives error when adding more records to employeeRecords Array
    // test is passing in both arrays 
    let newEmployeeList = []
    let employeeRecord = {}
    
    for(let i= 0; i < arr.length; i++) {
        employeeRecord = createEmployeeRecord(arr[i])
        // console.log(employeeRecord)
        newEmployeeList.push(employeeRecord)
    };
            return newEmployeeList

}

function createTimeInEvent() {
  
    const timeInEvent = {
        date: '2022-24-02',
        hour: '1400'
    }
        timeInRecord = createEmployeeRecord()
        console.log(timeInEvent.push(timeinRecord))
        // console.log(timeIn.push(timeInRecord))
}







// console log from running test above
// createEm[
//     { employeeOne: [ 'moe', 'sizlak', 'barkeep', 2 ], firstName: 'moe' },
//     {
//       employeeTwo: [ 'bartholomew', 'simpson', 'scamp', 3 ],
//       firstName: 'bartholomew'
//     }
//   ]
//           ✓ creates two records
//   [
//     { employeeOne: [ 'moe', 'sizlak', 'barkeep', 2 ], firstName: 'moe' },
//     {
//       employeeTwo: [ 'bartholomew', 'simpson', 'scamp', 3 ],
//       firstName: 'bartholomew'
//     }
//   ]
//           ✓ correctly assigns the first names
//   [
//     {
//       employeeOne: [ 'Thor', 'Odinsson', 'Electrical Engineer', 45 ],
//       firstName: 'Thor'
//     },
//     {
//       employeeTwo: [ 'Loki', 'Laufeysson-Odinsson', 'HR Representative', 35 ],
//       firstName: 'Loki'
//     }
//   ]