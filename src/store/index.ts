import { makeAutoObservable } from 'mobx';
import { TToDo } from '../types';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

 tasks: TToDo[] | null | undefined = null;

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
    const selectedTask = this.tasks?.find((task) => task.id === id);
    if (selectedTask) {
      selectedTask.done = !selectedTask.done;
    }
  };

  deleteTack = (id: string) => {
    this.tasks = this.tasks?.filter((task) => task.id !== id);
  };
}

const store = new Store();

export default store;
