var vm = new Vue({
    el: '#app',
    data: {
      dealers: [],
    },
    
    created: function() {
        this.fetchData();
        this.getFilters();
    },
    
    mounted: function() {
        this.setModal();
    },
    
    methods: {
        fetchData: function() {
            var self = this;
            console.log(self.dealers);
            $.getJSON('https://gist.githubusercontent.com/zachhallco/965d7f039eac44f621840427bccc1ed7/raw/ff4110239d0fc39245ee2c528aa2d17148af25a7/poolpro_dealers.json', function(e) {
                self.dealers = e.dealers;
            });
        },
        getFilters: function() {
            $('.filter').click(function(){
                var filter = $(this).val();
                var filteredDealers = $('.card_item').text().indexOf(filter);
                
                if (!$(this).checked()) {
                    $(filteredDealers).hide();
                } else {
                    $(filteredDealers).show();
                }
                
                console.log($(this).val());
            });
        },
        setModal: function() {

            $(".contact-btn").each(function(index){
                console.log( $(this) );
                $(this).attr('data-target', 'myModal' + index);
            });
            
            $(".modal").each(function(index){
                console.log( $(this) );
                $(this).attr('id', 'myModal' + index);
            });
            
            $("li").each(function(index){
                console.log(index + ": " + $(this).text());
            });
            
        }
    
    },
})