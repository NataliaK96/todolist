import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import store from './store';
import { Input } from '@material-ui/core';
import { AddButton } from './components/Buttons';
import { Header, NameApp } from './App.styles';

function App() {
  const [name, setName] = useState<string>('');
  return (
    <div className="App">
      <Header><NameApp>TODO</NameApp></Header>
      <Input
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
      />
      {store.tasks && store.tasks.length && <ToDoList tasks={store.tasks} />}
      <AddButton
        onClick={() => {
          store.addTask(name);
        }}
      />
    </div>
  );
}

export default observer(App);
