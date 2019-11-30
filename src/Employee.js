import React from 'react';
class Employee extends React.Component
{render()

	{var employee=[{empId:1001,name:'shr',designation:'SE',salary:14000},
					{empId:1002,name:'gnk',designation:'CE',salary:22000},
					{empId:1003,name:'shrdd',designation:'EE',salary:15000},
					{empId:1004,name:'ganu',designation:'ME',salary:16000}]
		return(<React.Fragment>
			<h1>i am from employee Component</h1>
			<table style={{width:'60%'}} className='table'>
                            <thead className="thead-light">
                                <tr>
                                     <th>EmpID</th>
                                     <th>Name</th>
                                     <th>Designation</th>
                                     <th>salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {employee.map(employee => {
                                       //return employee.salary > 15000 ?<tr key={Math.random()}>
                                       return employee.salary ? <tr key={Math.random()}>
                                                <td>{employee.empId}</td>
                                                <td>{employee.name}</td>
                                                <td>{employee.designation}</td>
                                                <td>{employee.salary}</td>
                                        </tr> : null
                                }) 
                                }
                            </tbody>
                       </table>

			</React.Fragment>)
	}
	}
	export default Employee;