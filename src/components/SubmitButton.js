import React from 'react';
import { useHistory, withRouter } from "react-router-dom";

class SubmitButton extends React.Component {

  constructor(){
    super()
      this.state={

      }
  }

  componentDidMount(){

  }


  render(){

  	return (
      
      <button type="button" class="btn-sample" id="loginsubmit"
      onClick={this.props.handleUserFormSubmit}>Submit</button>



  	);
  }

};

export default withRouter(SubmitButton);
