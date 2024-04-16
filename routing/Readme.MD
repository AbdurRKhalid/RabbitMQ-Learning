## Routing an Introduction
We have seen prviously that, we can have an exchange and we can send the messages to a consumer by the means of a Queue with the help of Exchange, and we have also seen different examples of the the exchanges as well, for example fanout exchange that just broadcast the messages to all queues. We have also seen the example of Bindings, and we also know that Bindings are the example of a relation between Exchange and Queue.

## Severity As an Example
Let's say that we have one exchange and we want to sent messages with specific type or severity to different queues, for example we want to sent messages with severity of "ERROR" to one queue and all other messages to another queue, we can achieve this by the means of bindings.

## Subscribing
Now after publishing the message from exchange with a specific severity, we have to handle each sevirity or binding type inside the consmer separately.