
import APIServer from "./APIServer"
import http from "http";
const port = parseInt(process.env.PORT || "8080");
const server = http.createServer(APIServer);
server.listen(port);

server.on("listening", () => {
	console.log(`Server is listening at http://localhost:${port}`);
});