module.exports = {
    newSection: function(header) {
        console.log( '\n\n' );
        console.log( '-----------' + header + '----------' );
    },
    parseArgs: function (arguments) {
        return Array.prototype.slice.call(arguments, 0);
    }
};