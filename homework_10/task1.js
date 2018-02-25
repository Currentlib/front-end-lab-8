/**
 * Your debounce function goes here
 * function(){}
 */

function debounce(func, time) {
    let timer;

    return function() {
        let complete = function() {
            func.apply(this);
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(complete, time);
    };
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'
