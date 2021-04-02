import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import store from './store';
import { Input } from '@material-ui/core';
import { AddButton } from './components/Buttons';
import { Header, Main, NameApp, AddField } from './App.styles';
import { MultilineTextFields } from './components/TextField';

function App() {
  const [name, setName] = useState<string>('');
  return (
    <div className="App">
      <Header>
        <NameApp>TODO</NameApp>
      </Header>
      <Main>
        <AddField>
          <MultilineTextFields
          value={name} 
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          />
          <AddButton
            onClick={() => {
              store.addTask(name);
              setName('')
            }}
          />
        </AddField>
        {store.tasks && store.tasks.length && <ToDoList tasks={store.tasks} />}
      </Main>
    </div>
  );
}

export default observer(App);
