## What is a Work Queue or Task Queue
Sometimes while working with Complex tasks, we came cross a situation where one process is taking more time than other, it can cause the process to be stopped, so we can send that task to a Work Queue, where the task will be stored and it will be forwarded to the appropriate consumer, according to right time.

### Basic Working
1. We will be submitting the Tasks to a Work Queue.
2. The consumer will pop the task and perform the work.

## Message Acknowledgements
It is important to know that in normal conditions, it is quite possible that the message that consumer got can be deleted from the Work Queue after dispatching it, but we need to make sure that consumer has done its work, so for this moment we have message acknowledgements, when consumer gets the message for a task to complete it acknowleges and then the task or message is delete from queue.
The following line need to be added to make sure that acknowledgement is set properly.

`{noAck: false}`
