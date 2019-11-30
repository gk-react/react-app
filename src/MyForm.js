import React from 'react';
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' ,mycar:''};
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
  	let header = '';
      if (this.state.username) {
      	header=<h1>{this.state.username}</h1>;
      }else{
      	header='';
      }

    return (
      <form>
      <h1>He`llo </h1>
      <p>{header}</p>
      <input type='text'onChange={this.myChangeHandler}/>
<select value={this.state.mycar}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>

      </form>
    );
  }
}
export default MyForm;

 
 
 
 

