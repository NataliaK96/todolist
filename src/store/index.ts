import { makeAutoObservable } from 'mobx';
import { TToDo } from '../types';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

 tasks: TToDo[] = [];
 isShowTaskField: boolean = false;

  addTask = (text: string) => {
    const newTask: TToDo = {
      text,
      done: false,
      id: new Date().getMilliseconds().toString(),
    };
    if (this.tasks){
        this.tasks.push(newTask);
    }
    else {
        this.tasks = [newTask]
    }
  };

  selectTask = (id: string) => {
    const selectedTask = this.tasks.find((task) => task.id === id);
    if (selectedTask) {
      selectedTask.done = !selectedTask.done;
    }
  };

  deleteTask = (id: string) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  };

  showTaskField = () => {
    this.isShowTaskField = true
  }

  hideTaskField = () => {
    this.isShowTaskField = false
  }

  getTasksFromLocaleStorage = () => {
    const taskFromLS = localStorage.getItem('tasks')
    if (taskFromLS){this.tasks = JSON.parse(taskFromLS)}
  }

  saveTasksToLocaleStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}


const store = new Store();

export default store;
