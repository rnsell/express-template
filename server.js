const app = require("express")();
const config = require("./config");
const routeSetup = require("./setup/routes/route.setup")

// Maybe you need to put in passport here to send in after passport set up
routeSetup({app})


app.listen(config.express.port, () => {
    console.log(`Express listening on port: ${config.express.port}`)
})







