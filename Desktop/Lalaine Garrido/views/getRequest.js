var fs = require('fs');
module.exports = function () {
	fs.readFile('request.txt', function(err, data) {
        var count = data*1;
        count = count + 1;
        fs.writeFile('request.txt', count, function(err) {
            if (err) throw err
        });
    });
}