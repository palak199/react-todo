import React from "react"
class AddTodo extends React.Component{
    state={
        title:''
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
        console.log("hon")

    }
    onChange=(e)=>this.setState({title:e.target.value});
    render(){
        
        return (
            <form onSubmit={this.onSubmit}>
                <input
                value={this.state.title} 
                onChange={this.onChange}
                type="text" 
                style={{ flex: "10", padding:"5px" }}
                name="title" placeholder="add todo..."></input>
                <input type="submit" value="submit"
                className="btn"
                style={{ flex:"1" }}/>
                </form>
        );
    }
}
export default AddTodo