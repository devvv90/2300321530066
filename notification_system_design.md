# Stage 1: Notification Prioritization

## Objective

The objective of Stage 1 is to fetch notifications from the provided Notification API and display the top N important unread notifications.

## Priority Rule

Notifications are prioritized based on their type.

Priority order:

1. Placement
2. Result
3. Event

For implementation, I assigned weights:

- Placement = 3
- Result = 2
- Event = 1

## Recency Rule

If two notifications have the same type, then the newer notification is given higher priority.

This means latest notifications appear before older notifications when their type priority is equal.

## Approach

First, notifications are fetched from the API using the authorization token. After receiving the notification list, each notification is compared using its type weight. Notifications with higher weight are placed first.

If two notifications have the same weight, their timestamps are compared, and the newer timestamp is placed first.

Finally, only the top 10 notifications are displayed in the terminal.

## Sorting Logic

The sorting is done using two conditions:

1. Sort by notification type priority.
2. If type priority is same, sort by latest timestamp.

## Scalability

For a small number of notifications, sorting the complete list is simple and works well.

For a large-scale system, a priority queue or max heap can be used. This will help maintain the top N notifications efficiently without sorting the full list every time.

## Stage 1 Output

The final output displays the top 10 priority notifications in a table format using console.table().