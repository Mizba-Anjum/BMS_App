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
  //fetch events
  useEffect( () => {
    fetchEvents();
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

  //rcd events
  async function fetchEvents() { //fetch (get, read) events function
    const apiData = await API.graphql({ query: queries.listEvents });
    setEvents(apiData.data.listEvents.items);
  }

  async function createEvent() { //create events function
    if (!(formData3.EventName && formData3.itemsID)) return;

    await API.graphql({
      query: mutations.createEvents,
      variables: {
        input: formData3
      }
    })

    setCategories([...Events, formData3]);
    setFormData2(initialFormState3);
  }

  async function deleteEvent({ id }){ //delete event function
    const newEventsArray = Events.filter( Event => Event.id !== id);
    setItems(newEventsArray);
    await API.graphql(
      {
        query: mutations.deleteEvents,
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
  
  return (
    <React.Fragment>
      <div id="topbar">
        <ul>
          <li className="list active"><a href="#">Overview</a></li>
          <li className="list"><a href="#">Database</a></li>
          <li className="list"><a href="#">Tags</a></li>
          <li className="list"><a href="#">Calendar</a></li>
        </ul>
      </div>

      <div id="main_container">
        <div id="sidebar">
          <h5>Filter</h5>
          <div className="sidebar_section search_bar"><input type="text" placeholder="Search..."></input></div>
          <div className='sidebar_section'></div>
          
        </div>
        <div id="main_content">
          <div id="main_content_container">
            <div className="items_head"></div>
            
            
            
            <table className='outer_table'>
              <thead>
                <tr>
                  <th>Category <svg width="20" height="20" viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <line x1='0' y1='60' x2='120' y2='60' stroke='black' />
                  <line x1='60' y1='0' x2='60' y2='120' stroke='black' />
                </svg></th>
                  <th>Items</th>
                  <th>Events</th>
                </tr>
              </thead>

              

              {
              Categories.map(Category => ( //map categories output
              <tbody className="categories_output" key={Category.id}>
                
                <tr>
                  <td rowSpan={2} className="category_td"><div>{Category.CategoryName}</div></td>

                  <td className='item_td'><div>Item 2-1</div></td>
                  <td>
                    <div className='events_container'>
                    <div><p>Event</p><p>Event Description</p><p>Event Tags</p></div>
                    <div>Attributes 1-2</div>
                    <div>Attributes 1-3</div></div>
                  </td>
                </tr>

                <tr>
                  <td className='item_td'><div>Item 2-1</div></td>
                  <td>
                    <div className='events_container'>
                    <div><p>Event</p><p>Event Description</p><p>Event Tags</p></div>
                    <div>Attributes 2-2</div>
                    <div>Attributes 2-3</div></div>
                  </td>
                </tr>
                </tbody>
              ))
            }
                
               
            </table>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
