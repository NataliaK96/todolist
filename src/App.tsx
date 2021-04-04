import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import store from './store';
import { AddButton } from './components/Buttons';
import { Header, Main, NameApp, AddField, ConfirmPanel } from './App.styles';
import { MultilineTextFields } from './components/TextField';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';

function App() {
  const [name, setName] = useState<string>('');
  return (
    <div className="App">
      <Header>
        <NameApp>TODO</NameApp>
        <ConfirmPanel>
          <IconButton>
            <CloseIcon />
          </IconButton>
          <IconButton>
            <CheckIcon />
          </IconButton>
        </ConfirmPanel>
      </Header>
      <Main>
        <AddField>
          <MultilineTextFields
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        </AddField>
        {store.tasks && store.tasks.length && <ToDoList tasks={store.tasks} />}
        <AddButton
          onClick={() => {
            store.addTask(name);
            setName('');
          }}
        />
      </Main>
    </div>
  );
}

export default observer(App);
