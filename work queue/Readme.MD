## What is a Work Queue or Task Queue and what are it's usage.
Sometimes while working with Complex tasks, we came cross a situation where one process is taking more time than other, it can cause the process to be stopped, so we can send that task to a Work Queue, where the task will be stored and it will be forwarded to the appropriate consumer, according to right time.

### Basic Working
1. We will be submitting the Tasks to a Work Queue.
2. The consumer will pop the task and perform the work.

## Multiple Consumers
We can have multiple consumers getting messages or tasks from the Message Queue.

## Message Acknowledgements
It is important to know that in normal conditions, it is quite possible that the message that consumer got can be deleted from the Work Queue after dispatching it, but we need to make sure that consumer has done its work, so for this moment we have message acknowledgements, when consumer gets the message for a task to complete it acknowleges and then the task or message is delete from queue.
The following line need to be added to make sure that acknowledgement is set properly.

`{noAck: false}`

## Message Durability
Now, here comes another question, let's say that the message queue is being re-started, then what will happen, however in normal conditions everything will be gone, but we do not want that. So, be safe in such condition we need to make sure that the queue is durable and we can do that by adding the following line in code in channel code.

`channel.assertQueue('hello', {durable: true});`
 

## Fair Dispatch (Prefetching)
Default behavior of RabbitMQ is that it distributes the messages or tasks evenly to consumers, but we do not want to make one consumer do all the work and other sits idle, we can make sure that each consumer is getting one task maximum at a time by adding the following line of code.

`channel.prefetch(1);`

This will make sure that each consumer is getting only 1 task or message at a time.
