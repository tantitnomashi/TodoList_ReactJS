import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoItem from "./components/TodoItem";
import checkall from "./img/check-all.svg";
class App extends Component {
  constructor(){
    super();
    this.state = { 
      newItems : '',
      currentFilter : 'all', // all active deactive
      todoItems : [{title : "Go to Batam, Indonesia", isComplete :true},
         {title : "Fly back to Saigon", isComplete :false},
        {title : "Play Badminton at Bukit Timah",  isComplete :false}]
      };

      this.onKeyUp = this.onKeyUp.bind(this);
      this.onChange = this.onChange.bind(this);
      this.all = this.all.bind(this);
  } 
  onItemClick(item) {
    return (event)=>{
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = this.state.todoItems.indexOf(item);
      this.setState({
        todoItems : [
          ...todoItems.slice(0,index),
          {...item, isComplete : !isComplete},
          ...todoItems.slice(index+1)
        ]
      });
      console.log(isComplete); 
    }
  }  
  onKeyUp(event){
    var text = event.target.value;

    if(event.keyCode == 13){
      text = text.trim();
      if(!text){
        return;
      }
      this.setState({
        newItems: "",
        todoItems : [
          {title : text, isComplete : false},
          ...this.state.todoItems
        ]
      });
    }
  }
  onChange(event){
    this.setState({
      newItems: event.target.value
    });
  }
  all(event){
    let filter = event.target.textContent;
    if(filter == "all"){

      console.log("all magazine !"); 
    }else if(filter == "active"){
      
      console.log("old magazine !"); 
    }else if(filter == "deactive"){
      console.log("old magazine !"); 
    }
  }
  render() {
    const { todoItems, newItems } = this.state;    
    if(todoItems.length){
      return(
        <div className="App">
          <div className="Header">
            <img src={checkall} alt="haha_hihi_hehe" />
            <input  
            className="Do-next"
            type="text" 
            placeholder="Add more things ?"
            value={newItems} onKeyUp={this.onKeyUp}
            onChange={this.onChange} />
          </div>
          {
            todoItems.length && todoItems.map((item, index) =>
            <TodoItem 
             key={index} 
             item ={item} click={this.onItemClick(item)} /> )
          }
          <div className="Control-bar">
            <span onClick={this.all}>All</span>
            <span onClick={this.all}>Active</span>
            <span onClick={this.all}>Done</span>
            <span onClick={this.all}>Delete Something</span>
          </div>
        </div>
      );
    }
} 
}

export default App;
