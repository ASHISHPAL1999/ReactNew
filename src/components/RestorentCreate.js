import React, { Component } from 'react';


class RestorentCreate extends Component {
  constructor(props){

  super(props);
  this.state={
    name:null,
    address:null
  }
}
  changeHandler=(event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }  
  submitHandler =(event) => {
    alert(JSON.stringify(this.state));

  }
    render() {
        return (
            <div>
                <h1>RestorentCreate </h1>
                <form onSubmit={this.submitHandler}>
  <label>
    Name:
    <input type="text"  name="name" onChange={this.changeHandler} />
  </label><br></br>
  <label>
    Address:
    <input type="text" name="address" onChange={this.changeHandler} />
  </label><br></br>
  
   

  <button type="submit">Add</button>
</form>
            </div>
        );
    }
}

export default RestorentCreate;