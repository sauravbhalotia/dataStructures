(function() {
    'use strict';
    // stack constructor
    function Stack() {
        var me = this;
        me._size = 0; // size can never be 0 but index starts at 0
        me._data = {};
        me.state();
    }

    // Push Method shared by all instances of Stack
    Stack.prototype.push = function(item) {
        var me = this;
        // push the item into stack
        me._data[++me._size] = item;
        me.state();
    }

    Stack.prototype.pop = function () {
        var me = this;
        // remove item only when there is some data present
        if (me._size) {
            // cache poppedItem
            var poppedItem = me._data[me._size];
            // Remove from _data
            delete me._data[me._size];
            // Reduce the _size
            me._size--;
        }
        me.state();
        return poppedItem;
    }

    Stack.prototype.state = function() {
        var me = this;
        console.log(me);
    }

    function stackTest() {
        var st1 = new Stack();

        st1.push(14);
        st1.push(21);
        st1.push(1);
        st1.push(4);

        st1.pop();
        st1.pop();
        st1.pop();
        st1.pop();
    }

    stackTest();

}());

