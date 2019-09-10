import React, { Component } from 'react';
import List from "./List";
import ItemForm from "./ItemForm";
import Footer from "./Footer";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Bread", complete: true},
      { id: 2, name: "Eggs", complete: false},
      { id: 3, name: "Milk", complete: false},
    ]
  }; 

  //  setFilter = (filter) => {
  //   this.setState({ filter })
  // }


  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

   addThing = (name) => {
     const { items } = this.state;
     const item = { name, id: this.getUniqId(), complete: false}
     this.setState({ items: [item, ...items ]});
   }

   handleClick = (id) => {
     const { items } = this.state;
     this.setState({
       items: items.map( item => {
         if (item.id === id) {
           return {
             ...item,
             complete: !item.complete
           }
         }
         return item
       })
     })
   }

   visibleItems = () => {
     const { items, filter} = this.state;
     switch(filter){
        case "Active":
          return items.filter( t => !t.complete )
        case "Complete":
          return items.filter( t => t.complete )
        default:
          return items;
     }
    }

  
  

  render() {
    const {items, filter} = this.state;
    return (
      <div> 
        <ItemForm addThing={this.addThing} />
        <List name="Grocery List" things={items} itemClick={this.handleClick} />
        {/* <Footer filter={filter} setFilter={this.setFilter} /> */}
      </div>
    );
  }
}

export default App;
