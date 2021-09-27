const express = require('express');
const app = express();
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

let clients = [];
let facts = [];
let count = 0;

function eventsHandler(request, response, next) {
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  };
  response.writeHead(200, headers);

  const data = `data: ${count}\n\n`;

  response.write(data);

  const clientId = Date.now();

  const newClient = {
    id: clientId,
    response
  };

  clients.push(newClient);

  request.on('close', () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter(client => client.id !== clientId);
  });
}

app.get('/events', eventsHandler);

function sendEventsToAll(newFact) {
	if(!clients) return null;
  clients.forEach(client => client.response.write(`data: ${JSON.stringify(newFact)}\n\n`))
}

async function increment(request, respsonse, next) {
  count++;
	respsonse.json(count);
  return sendEventsToAll(count);
}

app.get('/add', increment);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})