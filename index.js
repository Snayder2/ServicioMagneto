const app = require('./app')
const Main =()=>{
    app.listen(app.get("port"))
}
Main()