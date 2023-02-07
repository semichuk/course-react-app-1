import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      data: [
        { name: 'John', salary: 8000, increase: false, id: 1 },
        { name: 'Mark', salary: 200, increase: true, id: 2 },
        { name: 'Ki', salary: 4242, increase: false, id: 4 },

      ],
      term: '',
      filter: 'all',
      maxIndex: 0
    }
    this.state.data.forEach(element => {
      if(this.state.maxIndex < element.id){
        this.state.maxIndex = element.id;
      }
    });
    console.log(this.state.maxIndex);
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
        return{
          data: data.filter(item => item.id !== id)
        }
    
    })
  }



  createItem = (e, name, salary) => {
    e.preventDefault();
    const newArray = {
      name: name,
      salary: salary,
      increase: false,
      id: this.state.maxIndex + 1
    }

    this.setState(({data}) => {
      return{
        data: [...data, newArray],
        maxIndex: this.state.maxIndex + 1
      }
    })
    
  }


  onFilterSelect = (filter) => {
      this.setState({
        filter: filter
      })
  }
  searchEmp = (items, term) => {
      if (term.length === 0) {
        return items;
      }
      
      return items.filter(item => {
        return item.name.indexOf(term) > -1;
      })
  }

  onIncrease = (id, increase) => {
      const newArray = this.state.data.map((item) => {
          if(item.id === id){
              item.increase = increase;
              return item;
          }else{
            return item;
          }
      })
      this.setState({
          data: newArray
      })
  }

  onUpdateSearch = (term) => {
    this.setState({
      term: term
    })
  }


  filterPost = (data, filter) => {
      switch (filter) {
          case 'salary':
              return data.filter(item => item.salary > 1000);
          case 'increase':
              return data.filter(item => item.increase === true);
          default:
              return data;
      }
  }
  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo data={data}/>

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onIncrease={this.onIncrease}
        />
        <EmployeesAddForm onCreate={this.createItem}/>
      </div>
    );
  }

}

export default App;
