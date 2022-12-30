import React from 'react';
import DataTable from 'react-data-table-component';
import './App.css';
import ExpandableRows from '../components/ExpandableRow';
import conf from './TableConf';
var data = require('../coins.json');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRow: null,
      showModal: false,
    };
  }

  clickedRow = row => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Coins List</h2>
        </header>
        <section className="">
          <DataTable
            columns={conf}
            data={data}
            onRowClicked={this.clickedRow}
            expandableRows
            expandableRowsComponent={ExpandableRows}
            pagination
            paginationPerPage={5}
          />
        </section>
      </div>
    );
  }
}
export default App;
