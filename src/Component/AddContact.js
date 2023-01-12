import React, { Component } from 'react'
export default class AddContact extends Component {
    state={
        name:"",
        email:""
    }
    add=(e)=>{
       e.preventDefault();
       if(this.state.name==="" || this.state.email===""){
         alert("All the fields are mandatory");
         return;
       }
       this.props.addContactHandler(this.state);
       console.log(this.state);
       this.setState({name:"",email:""})

    }

  render() {
    return (
      <div className='container-fluid'>
         <h2>Add Contact</h2>
         <form onSubmit={this.add}>
        <div className="form-group">
           <label>Name</label>
           <input type="text" className="form-control" id="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
        </div>
        <div className="form-group">
           <label>Email</label>
           <input type="email" className="form-control" id="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
      </div>
    )
  }
}
