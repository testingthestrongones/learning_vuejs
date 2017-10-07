new Vue({
    el: '#v-for-object',
    data: null,
    
    created: function() {
        this.fetchData();
    },
    
    methods: {
        fetchData: function() {
            var self = this;
            $.getJSON('./resources/dealers.json', function(e) {
                self.data = e.dealers;
                console.log(self.data);
            });
        }
    
    },
})