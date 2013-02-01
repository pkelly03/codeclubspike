'use strict';

codeclubspikeApp.factory('dvdservice', function() {

    // Public API here
    return {
        getDvds: function() {
            return [{
                "name": "Forrest Gump",
                "director": "Director A",
                "year": 1995
            }, {
                "name": "American History X",
                "director": "Director B",
                "year": 1996
            }, {
                "name": "Shawshank Redemption",
                "director": "Director C",
                "year": 1996
            }];
        },
        addDvd: function(dvd) {
            console.log('Adding dvd : ' + dvd.name);
        }
    };
});