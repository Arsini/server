module.exports = (expressWs) => {
	const aWss = expressWs.getWss('/');  //websocket广播
	return broadcast = msg => {
		aWss.clients.forEach(function (client) {
		    client.send(msg);
		})
	}
}