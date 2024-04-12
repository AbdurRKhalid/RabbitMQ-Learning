# Introduction of RabbitMQ
RabbitMQ is a message broker, what does this means is that it is a servie that accepts and forwards messages. RabbitMQ can be understood by the analogy of the Postbox where we submit the letters and we are sure that it will reach to its destination. The only difference is RabbitMQ does everything in terms of binary blobs of data.

## Some Basic Terms Related to RabbitMQ or Messaging Queue
There are some Basic Terms that are essential to understand to get complete understanding of Messaging Queue.

### Producer
Anything or any application that sends a message is called Producer.

### Queue
A queue can be understood as as post box in RabbitMQ, as messages flow between applicatio and messaging queue, these are stored inside the Queue.

#### Many Producers can send messages to one queue and many consumers can take data from one Queue.