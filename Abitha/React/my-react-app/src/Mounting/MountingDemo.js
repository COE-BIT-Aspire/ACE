import React, { Component } from 'react'

export default class MountingDemo extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'Abi'
        }
    }
    ChangeName(){
      this.setState({
        name:'Abitha'
      })
    }
  render() {
    return (
      <div>
        <h1>Hi {this.state.name} , Welcome to Mounting </h1>
        <button onClick={(event)=>this.ChangeName(event)}>Update Name</button>
      </div>
    )
  }
  componentWillUnmount(){
    console.log("Component unmount");
  }
  componentDidMount(){
    console.log("Component is mounted to DOM");
  }
}




