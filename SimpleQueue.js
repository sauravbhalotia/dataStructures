// simpleQueue.js

(function() {
    'use strict';

    function Queue(rear) {
        var me = this;

        me._front = 0;
        me._data = {};
        me._rear = 0;

        me.state();
    }

    Queue.prototype.size = function(){
        var me = this;
        return me._rear - me._front;
    }

    Queue.prototype.enqueue = function(item){
        var me = this;
        console.log(me.size());
        if (me._front == 0) {
            me._front++;
        }
        me._data[++me._rear] = item;
        me.state();
    }

    Queue.prototype.dequeue = function(){
        var me = this,
            dequeueItem;

        if (me.size() >= 0 ){
            dequeueItem = me._data[me._front];
            delete me._data[me._front];

            if (me.size() == 0){
                me._front = 0;
                me._rear = 0;
            } else {
                me._front++;
            }
            me.state();
            return dequeueItem;
        } else {
            console.log('No Item to delete!');
        }
    }

    Queue.prototype.state = function(){
        var me = this;
        console.log(me);
    }


    function queueTest() {
        var st1 = new Queue();

        st1.enqueue(14);
        st1.enqueue(21);
        st1.enqueue(1);
        st1.enqueue(4);

        console.log('dequeue');

        st1.dequeue();
        st1.dequeue();
        st1.dequeue();
        st1.dequeue();
    }

    queueTest();

}());