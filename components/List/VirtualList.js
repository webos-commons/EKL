enyo.kind({
    name: "ekl.List.VirtualList",
    kind: enyo.VirtualList,
    
    published: {
        mousescroll: true
    },
    events: {
    },
    
    mousewheelHandler: function(inSender, inEvent) {
        if (this.mousescroll) {
            //Clone event
            var dragTo = enyo.mixin({}, inEvent);
            //Apply delta to new event
            dragTo.pageX = inEvent.pageX + inEvent.delta.x;
            dragTo.pageY = inEvent.pageY + inEvent.delta.y;

            //Simulate initiating a drag
            this.$.scroller.$.scroll.startDrag(inEvent);
            //Simulate dragging to a point
            this.$.scroller.$.scroll.drag(dragTo);
            //Simulate dropping a drag at the same point (prevents flick, lets OS provide accelleration)
            this.$.scroller.$.scroll.dragDrop(dragTo);
            //Simulate ending a drag
            this.$.scroller.$.scroll.dragFinish();
        }
    }
    
});