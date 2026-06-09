# Stage 1

## Priority Logic

Notifications are prioritized using:

Placement > Result > Event

Weights:
- Placement = 3
- Result = 2
- Event = 1

If two notifications have the same type,
the newer notification gets higher priority.

## Scalability

A priority queue / heap can be used to maintain
the top N notifications efficiently as new
notifications arrive without sorting the entire
list every time.