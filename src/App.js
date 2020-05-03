import React,{Component} from 'react';
import {BrowserRouter,Route } from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layouts/Header'
import AddTodo from './components/AddTodo'
import  About from './components/pages/About'
import Axios from 'axios';
class App extends Component{
  constructor(){
    super()
    this.state={
      test:"hi",
      todos:[]
    }
  }
 componentDidMount(){
   Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({todos:res.data}))
 }
 markComplete=(id)=> {
   this.setState({todos: this.state.todos.map(todo=> {
     if(todo.id === id){
       todo.completed = !todo.completed
  
   }
   return todo;
  })})
   
 }

 delTodo=(id)=>{
  
   Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
   .then(res=>this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)] }));
   console.log("del");
  }


 addTodo=(title)=>{
  Axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
    completed:false
  })
  .then(res=>this.setState({todos:[...this.state.todos,res.data]}))
  } 
 
 
  render(){
  return (
    <BrowserRouter>   
    <div className="App">
      <Header/>
      <Route exact path="/" render={props=>(
        <React.Fragment>
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete}
        delTodo={this.delTodo}
      />
      <AddTodo addTodo={this.addTodo} />
        </React.Fragment>
      )}/>
     <Route path="/about" component={About} />    </div>
    </BrowserRouter>
  );
}
}
export default App;
