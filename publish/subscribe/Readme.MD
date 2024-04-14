## Publish/Subscribe an Introduction
In this section, or RabbitMQ we will be learning about delivering a message to multiple consumers. This functionality is called 'publish/subscirbe'.

## This Program
In this program we will have two receivers or consumers and one will be the sender or the producer. One receiver will be getting the message and saving to the disk and the other one will be printing the message to console.

## Exchanges
Now, we are going to have a look at the complete model of RabbitMQ, as far now, we know that we have a producer and we have a consumer and a Message Queue to store the messages. But in reality we do not know if there is any message queue exists or not. Now in the real world, the producer sends the message to an 'Exchage', the exhange is then responsible to send the message to one single queue or multiple queues depending on the logic implemented.