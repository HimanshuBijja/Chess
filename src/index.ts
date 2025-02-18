import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';






const wss = new WebSocketServer({ port: 8080, host: "0.0.0.0" });

const gameManager = new GameManager();


wss.on('connection', function connection(ws) {
    gameManager.addUser(ws)
    ws.on("close", () => gameManager.removeUser(ws));

});