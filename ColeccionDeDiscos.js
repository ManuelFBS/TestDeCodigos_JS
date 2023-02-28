const recordCollection = {
        2548: {
                albumTitle: 'Slippery when Wet', 
                artist: 'Bon Jovi', 
                tracks: [ 'Let It Rock', 'YouGive Love a Bad Name' ]
        }, 
        2468: {
                albumTitle: '1999', 
                artist: 'Pince', 
                tracks: [ '1999', 'Little Red Corvette' ]
        }, 
        1245: {
                artist: 'Robert Palmer',
                tracks: []
        },
        5439: {
                albumTitle: 'ABBA Gold'
        }
};

function updateRecords(records, id, prop, value) {
        records[id][prop] = value;
        return records;
}

let recordCol = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
recordCol = updateRecords(recordCollection, 5439, 'tracks', ['Take a Chance on Me']);

console.log(recordCol);