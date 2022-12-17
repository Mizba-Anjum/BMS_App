import React, { useState, useEffect } from 'react';
import {API} from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import './App.css';

const initialFormState = { ItemName: "", ItemDescription: ""};

function App() {

  //initialize
  const [Items, setItems] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect( () => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const apiData = await API.graphql({ query: queries.listItems });
    setItems(apiData.data.listItems.items);
  }

  async function createItem() {
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

  async function deleteItem({ id }){
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

  return (
    <div>
      Hello World
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
          Items.map(Item => (
            <div className="Items" key={Item.id}>
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
