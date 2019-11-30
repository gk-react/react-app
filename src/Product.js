import React from 'react';
import Parent from './Parent';
class Product extends React.Component{
	render()

	{
		var product=[{pId:1001,name:'shr',company:'SE',price:14000},
					{pId:1001,name:'shr',company:'SE',price:14000},
					{pId:1001,name:'shr',company:'SE',price:14000},
					{pId:1001,name:'shr',company:'SE',price:14000}]
					/*{product .map(pro =>{
				return product.price ? <tr key={Math.random()}>
			<td>product.pId</td>
			<td>product.name</td>
			<td>product.company</td>
			<td>product.price</td>
</tr> }):[]}*/

		return(<React.Fragment>
<stateandpropsdemo/>
			<h1>i am from product</h1>
			
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
                                 {product.map(product => {
                                       //return employee.salary > 15000 ?<tr key={Math.random()}>
                                       return product.price ? <tr key={Math.random()}>
                                                <td>{product.pId}</td>
                                                <td>{product.name}</td>
                                                <td>{product.company}</td>
                                                <td>{product.price}</td>
                                        </tr> : null
                                }) 
                                }
                            </tbody>
                       </table>

			</React.Fragment>)
	}
}
export default Product;