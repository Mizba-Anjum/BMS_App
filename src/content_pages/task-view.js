import './task-view-style.css';

//active selection
const list = document.querySelectorAll('.list');
function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

function newItemVisible(e) {
  const clickElem = e.target;
  const newItem = clickElem.closest('.categories_output').querySelector('.new_item');
  newItem.classList.remove('inactive');
}
function newItemInvisible(e) {
  const clickElem = e.target;
  const newItem = clickElem.closest('.new_item');
  newItem.classList.add('inactive');
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

//return functions
function returnCategoryItems(item, currentCategory) {
    var itemid = item.id;
    if (item.ItemCategory) {
      if (item.ItemCategory.id === currentCategory.id) {
        return (
          <div className='items_output row'>
            <div className="col-sm text-center">{item.ItemName}</div>
            <div className="col-sm text-center">{item.ItemDescription}</div>
            <div className="col-sm text-center">{item.Status}</div>
            <div className="col-sm text-center">{item.EndDate}</div>
            <div className="col-sm-1 order-last item_buttons text-end">
              <button className="item_edit"><svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                      </button>
              <button className="item_close" onClick={() => deleteItem(item)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
              </button>
            </div>
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

export default function TaskViewPage() {
    return (
        <div id="main_content_container">
            

        {
        Categories.map((Category, index) => ( //map categories output
          <div className="categories_output" key={Category.id}>
            
              <a href={'#collapsible' + index} data-bs-toggle="collapse"><div className="category_header d-flex justify-content-start">
                <div className="rewriteable">{Category.CategoryName}</div>
                <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  
              </div></a>

              <div className='collapse show toggle_open' id={'collapsible' + index}>
              <div className="row column_headers">
                <div className="col-sm text-center">Task</div>
                <div className="col-sm text-center">Description</div>
                <div className="col-sm text-center">Status</div>
                <div className="col-sm text-center">Deadline</div>
                <div className="col-sm-1 text-end order-last">
                  <div className="buttons">
                    <button onClick={newItemVisible}>
                    <svg className="feather feather-plus-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
                    Add Task
                    </button>
                    </div>
                </div>
              </div>

              <div className='all_items'>
              <div className="new_item inactive">
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
                      
                      <div className="col-sm-1 text-end order-last"><button type="submit" >Submit</button><button onClick={newItemInvisible}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                      </button></div>
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
            </div>
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
    );
  };