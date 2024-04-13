## What is a Work Queue or Task Queue
Sometimes while working with Complex tasks, we came cross a situation where one process is taking more time than other, it can cause the process to be stopped, so we can send that task to a Work Queue, where the task will be stored and it will be forwarded to the appropriate consumer, according to right time.

### Basic Working
1. We will be submitting the Tasks to a Work Queue.
2. The consumer will pop the task and perform the work.