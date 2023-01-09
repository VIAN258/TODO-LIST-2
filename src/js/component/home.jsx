import React, {Fragment, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoList from "./TodoList.jsx";
//create your first component

export function Home() {
	const [todos, setTodos] =useState ([{id: 1, task: "tarea1", completed: false}])
	return (
	<Fragment>
      <TodoList todos={todos}/>
	  <input type="text" className="form-control" placeholder="Enter task" onKeyDown={e => validate(e)}/>
	  <button type="button" class="btn-close" aria-label="Close"></button>
	</Fragment>
	);	
	
				
}

export default Home;
