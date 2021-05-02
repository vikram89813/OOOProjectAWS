import React, { Component } from 'react';
import {AmplifySignOut} from '@aws-amplify/ui-react'
import {API} from 'aws-amplify'
import DataTable from 'react-data-table-component';

const columns = [
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Subject',
      selector: 'subject',
      sortable: true
    },
    {
        name: 'TimeStamp (UTC)',
        selector: 'timestamp',
        sortable: true
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

export default class Table extends Component  {
    constructor(props) {
        super(props);
  
        this.state = {
          data : []
        };
    }

    componentDidMount() {
        API.get('getEmailList', '/getEmailList/email').then(response => {
            this.setState(prevState => ({
                data: [...prevState.data, response]
              }))
          });
    }

    render(){
        return (
            <div className="App"> 
            <h3>Out Of Office List</h3>
            {
              this.state.data.length >= 1 && <DataTable
              columns={columns}
              data={this.state.data[0]}
              customStyles={customStyles}
            />
              }
              {this.state.data.length === 0 && <p>Loading!!!</p>}
              <br/>
              <br/>
              <AmplifySignOut />
          </div>
        )
    }
}
