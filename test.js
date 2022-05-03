var net = require('net');
var file = require('fs').createWriteStream('./test.txt');
var server = net.createServer();
server.on('connection', function(socket) {
    socket.pipe(file,{end:false});
    setTimeout(function() {
        file.end('再见。');
        socket.unpipe(file);
    }, 5000);
});
server.listen(8431,'localhost');
