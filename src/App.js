import React, { useState, useEffect } from 'react';
import {API} from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import './App.css';

const initialFormState = { ItemName: "", ItemDescription: "", ItemCategory: {}}; //item form input
const initialFormState2 = { CategoryName: ""}; //category form input
const initialFormState3 = { EventName: "", itemsID: ""}; //event form input

function App() {

  //initialize
  const [Items, setItems] = useState([]); //items array
  const [formData, setFormData] = useState(initialFormState); //form data (form 1: items)
  const [Categories, setCategories] = useState([]); //categories array  
  const [formData2, setFormData2] = useState(initialFormState2); //form data (form 2: categories)
  const [Events, setEvents] = useState([]); //events array
  const [formData3, setFormData3] = useState(initialFormState3); //form data (form 3: events)

  //fetch items
  useEffect( () => {
    fetchItems();
  }, []);
  //fetch categories
  useEffect( () => {
    fetchCategories();
  }, []);
 

  //rcd items
  async function fetchItems() { //fetch (get, read) items
    const apiData = await API.graphql({ query: queries.listItems });
    setItems(apiData.data.listItems.items);
  }

  async function createItem() { //create item function
    if (!formData.ItemName) return;

    await API.graphql({
      query: mutations.createItems,
      variables: {
        input: formData
      }
    })

    setItems([...Items, formData]);
    setFormData(initialFormState);
  }

  async function deleteItem({ id }){ //delete item function
    const newItemsArray = Items.filter( Item => Item.id !== id);
    setItems(newItemsArray);
    await API.graphql(
      {
        query: mutations.deleteItems,
        variables: {
          input: { id }
        }
      }
    )
  }

  //rcd categories
  async function fetchCategories() { //fetch (get, read) categories function
    const apiData = await API.graphql({ query: queries.listCategories });
    setCategories(apiData.data.listCategories.items);
  }

  async function createCategory() { //create categories function
    if (!formData2.CategoryName) return;

    await API.graphql({
      query: mutations.createCategories,
      variables: {
        input: formData2
      }
    })

    setCategories([...Categories, formData2]);
    setFormData2(initialFormState2);
  }

  async function deleteCategory({ id }){ //delete category function
    const newCategoriesArray = Categories.filter( Category => Category.id !== id);
    setItems(newCategoriesArray);
    await API.graphql(
      {
        query: mutations.deleteCategories,
        variables: {
          input: { id }
        }
      }
    )
  }

  //active selection
  const list = document.querySelectorAll('.list');
  function activeLink() {
    list.forEach((item) =>
      item.classList.remove('active'));
      this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('click', activeLink));
  
    //item input
    function createItemInput(e, currentCategory) {
      e.preventDefault();
      var iname = e.target.itemName.value;
      setFormData({ ...formData, 'ItemName': iname, 'ItemCategory': currentCategory});
      console.log(formData);
      createItem();
    }
    function returnFormData() {
      console.log(formData);
    }
    function returnCategoryItems(item, currentCategory) {
      if (item.ItemCategory) {
        if (item.ItemCategory.id === currentCategory.id) {
          return (
            <div className='items_output'>{item.ItemName} {item.ItemCategory.CategoryName}</div>
          )
        }
        else {
          return;
        }
      }
      else {
        return;
      }
    }

    //return functions
    function returnItemCategoryName(Item) {
      if (Item.ItemCategory) {
        return Item.ItemCategory.CategoryName;
      }
      else {
        return <i>No Category</i>;
      }
    }
  return (
    <React.Fragment>
      <div id="topbar">
        <ul>
          <li className="list active"><a href="#">Overview</a></li>
          <li className="list"><a href="#">Database</a></li>
          <li className="list"><a href="#">Calendar</a></li>
        </ul>
      </div>

      <div id="main_container">
        <div id="sidebar">

          <div className="sidebar_section"><h5>Filter</h5></div>

          <div className='sidebar_section'>
            <p className='h8'>Categories</p>
            <div><p></p></div>
            <div className="search_bar"><input type="text" placeholder="Search..."></input></div>
          </div>

          

        </div>

        <div id="main_content">
          <div id="main_content_container">
            
          
            

              

              {
              Categories.map(Category => ( //map categories output
                <div className="categories_output" key={Category.id}>
                
                  
                    <div className="category_header">{Category.CategoryName}</div>
                    
                    {
                      Items.map(Item => ( //map items output
                        <div key={Item.id}>
                          {returnCategoryItems(Item, Category)}
                        </div>
                      ))
                    }
                    
                    
                      <div className='new_item'>
                        <form onSubmit={(e) => createItemInput(e, Category)}>
                          <div className='item_input'> 
                          <input type="text" name="itemName" placeholder="New Item"/>
                          </div>
                          
                          <button type="submit" id="newItemButton">
                            <svg width="20" height="20" viewBox="0 0 120 130" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line x1='0' y1='60' x2='120' y2='60' stroke='black' />
                              <line x1='60' y1='0' x2='60' y2='120' stroke='black' />
                            </svg>
                          </button>
                        </form>
                      </div>
                  
                </div>
              ))
            }

              <div className="categories_output">
                
                <div className="category_header"><i>No Category</i></div>
                  <div class="row">
                    <div class="col-sm text-center">Task</div>
                    <div class="col-sm text-center">Description</div>
                    <div class="col-sm text-center">Status</div>
                    <div class="col-sm text-center">Deadline</div>
                  </div>

                  <div className='items_output'>Item 2-1</div>
                  
                  
                

                
                  <div className='items_output'>Item 2-1</div>
                
                  
                
                </div>
                
               
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
