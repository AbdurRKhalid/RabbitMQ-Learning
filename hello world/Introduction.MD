# Introduction of RabbitMQ
RabbitMQ is a message broker, what does this means is that it is a servie that accepts and forwards messages. RabbitMQ can be understood by the analogy of the Postbox where we submit the letters and we are sure that it will reach to its destination. The only difference is RabbitMQ does everything in terms of binary blobs of data.

## Some Basic Terms Related to RabbitMQ or Messaging Queue
There are some Basic Terms that are essential to understand to get complete understanding of Messaging Queue.

### Producer
Anything or any application that sends a message is called Producer.

### Queue
A queue can be understood as as post box in RabbitMQ, as messages flow between applicatio and messaging queue, these are stored inside the Queue.

#### Many Producers can send messages to one queue and many consumers can take data from one Queue.

### Consumer
Anything that waits to receive a message is called Consumer.

## Example
In this Node.JS example we have followed the following steps.
1. Installed the RabbitMQ Image and ran it at localhost with the following command:
    `docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 rabbitmq:3`
Here the name of the container is `some-rabbit` and it's port 5672 is exposed on external port of 5672.
2. Installed the `amqplib` node.js library which is a client to start working with RabbitMQ in node.js.
3. Created a sender file to send message to a simple queue.
4. Created a receiver file to receive message from a queue, sended by the sender.