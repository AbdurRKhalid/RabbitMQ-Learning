var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if(error0) {
        console.log('Error Occurred While Connecting to RabbitMQ!');
    }
    connection.createChannel((error1, channel) => {
        var queue = 'hello';
        var message = 'Hello, World!';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer.from(message));
        console.log("[x] Sent %s", message);
    });
    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500);
});


