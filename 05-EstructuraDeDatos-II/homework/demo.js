
            // LISTAS ENLAZADAS

function Node(data) {
    this.value = data;
    this.next = null; 
}

function LinkedList () {
    this.head = null;
    this.length = 0;
}

let newList = new LinkedList();
console.log(newList);

LinkedList.prototype.add = function(data) {
    let node = new Node(data);
    let current = this.head;

    // si la lista esta vacía
    if(current === null) { // !current
        this.head = node;
        return node;
    }
    while (current.next) {  //mientras haya current.next, o sea hayan nodos vaya recorriendo
        current = current.next;
    }
    current.next = node;
}

newList.add('Juan');
newList.add('Nacho');

console.log(newList);

LinkedList.prototype.size = function() {
    let current = this.head;
    //let counter = 0;
    if (current === null) {
        console.log('lista esta vacía');
        return;
    }
    while (current !== null) {
        console.log(current.value);
        //counter++;
        this.length++;
        current = current.next;
    }
    return this.length;
}

let newList1 = new LinkedList();
newList1.add(1);
newList1.add(2);
console.log(newList1);
console.log(newList1.size());


            //Hash Table

function HashTable() {
    this.array = [];
    this.numBacket = 30;
}

HashTable.prototype.hash = function(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {  
        total = total + key.charCodeAt(i);
    }
    return total % this.numBacket;
}

HashTable.prototype.set = function(key, value) {
    let index = this.hash(key);
    if (!this.array[index]) {
        this.array[index] = {}
    }
    this.array[index][key] = value;
}