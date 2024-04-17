## Remote Procedure Call
Sometimes, we can an other computer at the end to perform the task and return the result to producer, this scenario is called Remote Procedure Call.

## Confusions in Remote Procedure Call
Sometimes, it can cause confusions such that which function was called from where. This creates huge problem in debugging the code or any service. We can follow the following steps to make the debugging or RPC a bit better.
1. Make sure that which functions are local and online.
2. Documentation should be clear, making dependencies between components clear.
3. Handling the error case, what client should do if the server is down or so on.

## Basic Idea
So, we can add following:

`channel.sendToQueue('rpc_queue', Buffer.from('10'), {replyTo: queue_name});`

here 'rpc_queue' is the name of the queue, and second one is content and 'queue_name' is the name of the queue to which the reply would be sent.
This is a basic idea but not that efficient, because this does not handle the case to identify which request was from which client.

## Correlation Id
We can add a correlation ID specific to a client, and this correlation Id would be know, if this is not know we can simply ignore or discard this on the consumer end.