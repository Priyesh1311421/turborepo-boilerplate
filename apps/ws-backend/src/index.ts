import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
    ws.on('error', console.error);
    ws.on('message', (message: string) => {
       ws.send('pong');
    });
    
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
