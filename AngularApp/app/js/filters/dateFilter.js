'use strict';

angularApp.filter('dateFilter', function(){
    return function(date){
        var dateDiff = Date.now() - new Date(date);
        if (dateDiff>320373038)
        {
            return "Long time ago";
        }
        return "Recent video";
    }
})
