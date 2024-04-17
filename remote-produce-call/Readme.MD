## Remote Procedure Call
Sometimes, we can an other computer at the end to perform the task and return the result to producer, this scenario is called Remote Procedure Call.

## Confusions in Remote Procedure Call
Sometimes, it can cause confusions such that which function was called from where. This creates huge problem in debugging the code or any service. We can follow the following steps to make the debugging or RPC a bit better.
1. Make sure that which functions are local and online.
2. Documentation should be clear, making dependencies between components clear.
3. Handling the error case, what client should do if the server is down or so on.