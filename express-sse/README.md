# Server Sent Event

Three endpoints are exposed in this test where
1. `/` - index html page to listen to server sent evet, e.g. the counter increment.
2. `/events` - to subscribe to server sent event
3. `/add` - to increment counter 


## To test the project 
1. `npm run serve`;
2. subscribe the event `/events`
3. update upon onmessage 