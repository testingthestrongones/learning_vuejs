new Vue({
    el: '#v-for-object',
    data: null,
    
    created: function() {
        this.fetchData();
    },
    
    methods: {
        fetchData: function() {
            var self = this;
            $.getJSON('https://gist.githubusercontent.com/zachhallco/965d7f039eac44f621840427bccc1ed7/raw/ff4110239d0fc39245ee2c528aa2d17148af25a7/poolpro_dealers.json', function(e) {
                self.data = e.dealers;
                console.log(self.data);
            });
        }
    
    },
})