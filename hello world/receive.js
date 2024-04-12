var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (error0, connection) => {
    if(error0) {
        console.log('Error Occurred While Creating the Connection!');
    }

    connection.createChannel((error1, channel) => {
        if(error1) {
            console.log('Error Occurred While Creating the Channel!');
        }

        var queue = 'hello';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log("[*] Waiting for Messages in %s, to exit press CTRL+C", queue);

        channel.consume(queue, (message) => {
            console.log("[x] Received %s", message.content.toString());
        }, {
            noAck: true
        });
    });
});