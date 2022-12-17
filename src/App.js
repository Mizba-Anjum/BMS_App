import React, { useState, useEffect } from 'react';
import {API} from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import './App.css';

const initialFormState = { ItemName: "", ItemDescription: ""}; //item form input
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

  return (
    <div>
      <div id="topbar">
        <ul>
          <li>Overview</li>
          <li>Database</li>
          <li>Tags</li>
          <li>Calendar</li>
        </ul>
      </div>
      <div className="sidebar"> Sidebar
        <div>
          {
            Categories.map(Category => ( //map categories output
              <div className="categories_output" key={Category.id}>
              <div>{Category.CategoryName}</div>
              </div>
            ))
          }
        </div>
      </div>
      My Experiments
      <div>
        <input
          onChange={e => setFormData2({ ...formData2, 'CategoryName': e.target.value})}
          placeholder="Category Name"
          value={formData2.CategoryName}
        />
      </div>
      <button className="button_create" onClick={createCategory}>Create Category</button>
      <div>
        {
          Categories.map(Category => ( //map categories output
            <div className="categories_output" key={Category.id}>
            <div>{Category.CategoryName}</div>
            </div>
          ))
        }
      </div>
      <div className="items_input">
        <input
          onChange={e => setFormData({ ...formData, 'ItemName': e.target.value})}
          placeholder="Item Name"
          value={formData.ItemName}
        />
        <input
          onChange={e => setFormData({ ...formData, 'ItemDescription': e.target.value})}
          placeholder="Item Description"
          value={formData.ItemDescription}
        />
      </div>
      <button className="button_create" onClick={createItem}>Create Item</button>
      <div>
        {
          Items.map(Item => ( //map items output
            <div className="items_output" key={Item.id}>
            <div>{Item.ItemName} {Item.ItemDescription}</div>
            <button onClick={() => deleteItem(Item)}>Delete Item</button>
            </div>
          ))
        }
      </div>
    
    </div>
  );
}

export default App;
