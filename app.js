var submitBtn = document.getElementById('submitbtn');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

submitBtn.addEventListener("click",addItem);
itemList.addEventListener("click",deleteItem);
filter.addEventListener('keyup',filterItem);
//add item function
function addItem(e)
{
    //to prevent its default behavior i.e submiiting form to SERVER and instead so what I ask to do
    e.preventDefault();

    //get input value
    var newitem =document.getElementById('item');

    //creating new LI item
    var li = document.createElement('li');
    //adding the same class to bootstrap to get same look
    li.className ='list-group-item';
    //adding a textnode with input value
    li.appendChild(document.createTextNode(newitem.value));
    //creating the delete button for this new item
    var deleteBtn = document.createElement('button');
    //adding the same class to bootstrap to get same look
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //adding "X inside this button"
    deleteBtn.appendChild(document.createTextNode('X'));
    //Finally adding this  button in the LI tag
    li.appendChild(deleteBtn);
    // adding thislist list item into the list of items
    itemList.appendChild(li);
    //to empty back input text
    newitem.value="";
}

//delete item function
function deleteItem(e){
 if(e.target.classList.contains('delete')) {
    if(confirm("Are You Sure ?")){
        var parentli = e.target.parentElement;
        itemList.removeChild(parentli);
    }
 }  

}


// searching items
function filterItem(e)
{
    //converting search item into lower case so as to match with the list items
    var text = e.target.value.toLowerCase();
    //getting all LIs from itemlist as our search space
    var items =itemList.getElementsByTagName('li');
    
}