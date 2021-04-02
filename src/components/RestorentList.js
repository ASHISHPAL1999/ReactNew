import React, { Component } from 'react';
import {Table, ThemeProvider} from 'react-bootstrap';

class RestorentList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
   
    componentDidMount() {
      fetch("http://localhost:3000/Restorent")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
            
              list: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          
        )
    }
  
   
    render() {
        return (
            <div>
                <h1>RestorentList</h1>
              
                <Table striped bordered hover>
  <thead>
    <tr>
      
      <th> id</th>
      <th>Name</th>
      <th>address</th>
    </tr>
  </thead>

  <tbody>
    

    
  </tbody>
</Table>





            </div>
        );
    }
}

export default RestorentList;