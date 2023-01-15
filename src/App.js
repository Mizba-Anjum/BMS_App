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
  function createNewItemInputVisible() {
  }
    //item input
    const current = new Date();
    const date = `${current.getMonth()}/${current.getDate()}/${current.getFullYear()}`;
    function createItemInput(e, currentCategory) {
      e.preventDefault();
      var iname = e.target.itemName.value;
      var idesc = e.target.itemDesc.value;
      var istatus = e.target.itemStatus.value;
      var idate = e.target.itemDate.value;
      setFormData({ ...formData, 'ItemName': iname, 'ItemDescription': idesc, 'ItemCategory': currentCategory, 'Status': istatus, 'StartDate': date,'EndDate': idate});
      console.log(formData);
      createItem();
    }
    function returnFormData() {
      console.log(formData);
    }

    //return functions
    function returnCategoryItems(item, currentCategory) {
      if (item.ItemCategory) {
        if (item.ItemCategory.id === currentCategory.id) {
          return (
            <div className='items_output row'>
              <div className="col-sm text-center">{item.ItemName}</div>
              <div className="col-sm text-center">{item.ItemDescription}</div>
              <div className="col-sm text-center">{item.Status}</div>
              <div className="col-sm text-center">{item.EndDate}</div>
              <div className="col-sm-1 order-last"></div>
            </div>
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
    function returnNullCategoryItems(item) {
      if (item.ItemCategory === null) {
        return (
          <div className='items_output row'>
            <div className="col-sm text-center">{item.ItemName}</div>
            <div className="col-sm text-center">{item.ItemDescription}</div>
            <div className="col-sm text-center">{item.Status}</div>
            <div className="col-sm text-center">{item.EndDate}</div>
            <div className="col-sm-1 order-last"></div>
          </div>
        )
      }
      else {
        return;
      }
    }
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
                  
                    <div className="category_header d-flex justify-content-between">
                      <div>{Category.CategoryName}</div>
                      <div>
                        <button onClick={createNewItemInputVisible()}>
                        <svg className="feather feather-plus-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
                        </button>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                      </div>
                      
                    </div>

                    <div className="row column_headers">
                      <div className="col-sm text-center">Task</div>
                      <div className="col-sm text-center">Description</div>
                      <div className="col-sm text-center">Status</div>
                      <div className="col-sm text-center">Deadline</div>
                      <div className="col-sm-1 order-last"></div>
                    </div>

                    <div className="new_item active">
                      <form onSubmit={(e) => createItemInput(e, Category)}>
                        <div className='items_output text-center row'>
                            <div className='item_input col-sm'>
                              <input type="text" name="itemName" placeholder="Item Name" required/>
                            </div>
                            <div className='item_input col-sm'>
                              <input type="text" name="itemDesc" placeholder="Item Description"/>
                            </div>
                            <div className='item_status col-sm'>
                              <select name="itemStatus">
                                <option value="Not In Progress">Not In Progress</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Complete">Complete</option>
                              </select>
                            </div>
                            <div className='item_input col-sm'><input type="date" name="itemDate" pattern="\d{2}-\d{2}-\d{4}" /></div>
                            
                            <div className="col-sm-1 order-last"><button type="submit" >Submit</button></div>
                        </div>
                      </form>
                    </div>
                    
                    {
                      Items.map(Item => ( //map items output
                        <div key={Item.id}>
                          {returnCategoryItems(Item, Category)}
                        </div>
                      ))
                    }
                  
                </div>
              ))
            }

              <div className="categories_output">
                
              <div className="category_header d-flex justify-content-between">
                      <div><i>No Category</i></div>
                      <div>

                        <svg className="feather feather-plus-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                      </div>
                      
                    </div>

                    <div className="row column_headers">
                      <div className="col-sm text-center">Task</div>
                      <div className="col-sm text-center">Description</div>
                      <div className="col-sm text-center">Status</div>
                      <div className="col-sm text-center">Deadline</div>
                      <div className="col-sm-1 order-last"></div>
                    </div>

                  {
                      Items.map(Item => ( //map items output
                        <div key={Item.id}>
                          {returnNullCategoryItems(Item)}
                        </div>
                      ))
                    }
                
                  
                
                </div>
                
               
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
