import './App.css';
import Amplify  from 'aws-amplify'
import config from './aws-exports'
import {withAuthenticator} from '@aws-amplify/ui-react'
import React from 'react';
import Table from './Table'

Amplify.configure(config);

function App() {
  return (
    <Table />
  );
}

export default withAuthenticator(App);
