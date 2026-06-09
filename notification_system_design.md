# Notification System Design

## Logging Middleware

A reusable logging middleware has been implemented.

Function:

Log(stack, level, package, message)

The middleware sends logs to the AffordMed evaluation server using the protected Log API and supports:
- debug
- info
- warn
- error
- fatal

Supported stacks:
- frontend
- backend

Logs are used for monitoring, debugging and tracking application behavior.