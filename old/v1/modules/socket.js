module.exports = (app, fs, path, broadcast) => {
	// 绑定方法不能用 promise (async/await) 因为是绑定，只有重复触发的方法才适合用
	//直接嵌套
	// app.ws('/', ws => {
	// 	ws.on('message', msg => {
	// 		broadcast(msg)
	// 	})
	// })

	//封装
	class WS {
		constructor(app, broadcast) {
			this.app = app
			this.broadcast = broadcast
			this.ws = ''
			
			app.ws('/', this.wsCb.bind(this))
		}
		//监听 message
		wsCb(ws) {
			this.ws = ws
			ws.on('message', this.msgCb.bind(this))
		}
		//监听 message 方法
		msgCb(request) {
			const req = JSON.parse(request)
			const functionName = req.functionName
			console.log(functionName);
			if(this[functionName]) {
				this[functionName](req)
			} else {
				req.data = {msg: '后台没有定义方法'}
				this.ws.send(JSON.stringify(req))
			}
		}

		/************ 定义的方法 以后多了再拆分 ************/

		sendMsg(response) {
			global.historyMsg.push(response.data)
			const res = JSON.stringify(response)
			this.broadcast(res)
		}

		historyMsg(response) {
			response.data = {history: global.historyMsg}
			this.ws.send(JSON.stringify(response))
		}

		historyFile(response) {
				const filePath = path.join(__dirname, '..', 'uploads/')

			    fs.readdir(filePath, (err, results) => {
			        if(err) throw err
			        response.data = { fileList: results }
			        if(results.length>0) {
			            // var files = [];
			            // results.forEach(function(file){
			            //     if(fs.statSync(path.join(filePath, file)).isFile()){
			            //         files.push(file);
			            //     }
			            // })
						this.ws.send(JSON.stringify(response))
			        } else {
			            this.ws.send(JSON.stringify(response))
			        }
			    })
		}

		/************ 定义的方法 end ************/
	}

	new WS(app, broadcast)
}