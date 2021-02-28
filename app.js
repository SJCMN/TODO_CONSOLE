// A simple to do list app
// prompt user for input
let intro = alert ('Welcome to your To Do List: press enter.');
let input = '';
const toDoList = [];

let printList = function (){
    console.log('///////////////');
    console.log('Your To Do list:');
    for (let i = 0; i<toDoList.length; i++){
        console.log(i, toDoList[i]);
    }
}

// Add item to list
while ((input.toLowerCase()) !== 'quit') {
    if ((input.toLowerCase()) === 'quit') break;
    input = prompt('Please enter one of the following: New, Delete, List, or Quit.');
    if ((input.toLowerCase()) === 'new') {
        input = prompt('Please add To Do:');
        toDoList.push(input);
        printList();
        };
    // Delete item from array
    if ((input.toLowerCase()) === 'delete') {
        let deleteListItem = prompt('Enter todo number to delete from list');
        if (deleteListItem === NaN) {
            deleteListItem = prompt ('Enter todo number to delete from list');
        };
        toDoList.pop(toDoList[parseInt(deleteListItem)]);
        printList();
        };
    if ((input.toLowerCase()) === 'list') {
        printList();
    };
    if ((input.toLowerCase()) === 'undo') {
        toDoList.pop();
        printList();
    };
    if ((input.toLowerCase()) === 'sort') {
        toDoList.sort();
        printList();
    };
}


// Re order list by alpha
