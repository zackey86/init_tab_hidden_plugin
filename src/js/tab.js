(function(){
    'use strict';

    kintone.events.on('app.record.index.show', function(event) {
        
        $('a.recordlist-show-gaia').each(function() {
            var url = $(this).attr('href');
            $(this).attr('href', url + '&tab=none');
        });

        return event;
    });

})();