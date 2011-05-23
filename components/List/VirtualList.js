enyo.kind({
    name: "ekl.List.VirtualList",
    kind: enyo.VirtualList,
    
    published: {
        scrollbar: true,
        mousescroll: true,
        rowcount: null
    },
    events: {
    },
    
    mousewheelHandler: function(inSender, inEvent) {
        var pt = Math.round(this.$.scroller.$.scroll.y) - inEvent.delta.y;
        if (pt == this.$.scroller.pageTop) {
            return;
        }
        // page top drives all page rendering / discarding
        this.$.scroller.pageTop = pt;
        // add or remove pages from either end to satisfy display requirements
        this.$.scroller.updatePages();
    }
    
});