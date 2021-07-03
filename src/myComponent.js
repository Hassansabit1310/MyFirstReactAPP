import React,{Component} from "react";


class myComponent extends Component{

  constructor(){
   super()
   this.state={
     name: 'hassan sabit',
     age: 10,
     profession: 'Engineer'
   }
  }

  // state={
  //   name: 'Hassan Sabit',
  //   age: 10,
  //   profession: 'Software Engineer'
  // };

  // constructor(props){


  //   super(props)
      
  //   // Set initial state
  //   this.state = {age : 10}
      
  //   // Binding this keyword
  //   // this.handleClick = this.handleClick.bind(this)
  // }

  
  ageIncreaser(){

    this.setState({
      age: this.state.age+1
    })
    
   
    
 
  }

  render(){
    
    return(
      <div>
        <p>hello</p>
        
        <input/>
        <p>I am {this.state.name}</p>
        
        <p>I am a {this.state.profession}</p>
        <p>I am {this.state.age} years old</p>
        <button onClick={this.ageIncreaser.bind(this)}>Click</button>
        

      </div>
    )
  }

   
}

export default myComponent;