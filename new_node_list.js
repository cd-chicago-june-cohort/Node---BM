class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}


class List {
    constructor () {
        this.head=null;
    }

    addFront(value) {
        var newNext = this.head;
        this.head = new Node(value);
        this.head.next = newNext;
    }

    addBack(value) {
        if (! this.head){
            this.head = new Node(value);
        }
        var curr_loc = this.head;
        while(curr_loc.next) {
            curr_loc = curr_loc.next
        }
        curr_loc.next = new Node(value)
        console.log('you are here')
    }

    length() {
        var counter=0
        var currLocation = this.head;
        while(currLocation != null) {
            currLocation = currLocation.next;
            counter += 1;
        }
        return counter
    }

    contains(value) {
        var currLocation = this.head;
        while(currLocation != null) {
            if (value == currLocation.value) {
                return true;
            }
            else (currLocation = currLocation.next)

        }

        return false;
    }

}

var l = new List()
l.addBack('S')
l.addFront('E')
l.addFront('L')
l.addFront('P')
l.addFront('P')
l.addFront('A')
l.addFront('B')
l.toString()
console.log(l)
console.log(l.contains('P'))
console.log ('length = ' + l.length())
