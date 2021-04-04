import React, { useEffect, useState } from 'react';
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
import { autorun } from 'mobx';

function App() {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    store.getTasksFromLocaleStorage();
    autorun(()=>store.saveTasksToLocaleStorage())
  }, []);

  console.log('app');
  return (
    <div className="App">
      <Header>
        <NameApp>TODO</NameApp>
        {store.isShowTaskField && (
          <ConfirmPanel>
            <IconButton onClick={store.hideTaskField}>
              <CloseIcon className="icon" />
            </IconButton>
            <IconButton
              onClick={() => {
                if (name.trim()) {
                  store.addTask(name);
                }
                setName('');
              }}
            >
              <CheckIcon className="icon" />
            </IconButton>
          </ConfirmPanel>
        )}
      </Header>
      <Main>
        {store.isShowTaskField && (
          <AddField>
            <MultilineTextFields
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />
          </AddField>
        )}
        <ToDoList tasks={store.tasks} />
        {!store.isShowTaskField && <AddButton onClick={store.showTaskField} />}
      </Main>
    </div>
  );
}

export default observer(App);
