require("express")()
	.get("/", function(req, res, next) {
		res.send("hello world!")
	})
	.listen(3000)