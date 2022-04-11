// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer( (req, res) => {
    
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', 'GET')
    
//     let filePath = path.join(__dirname, 'test-public', req.url === '/' ? 'test-index.html' : req.url)

//     const ext = path.extname(filePath)

//     let contentType = 'text/html'
//     switch (ext) {
//       case '.css':
//         contentType = 'text/css'
//         break
//       case '.js':
//         contentType = 'text/javascript'
//         break
//       default:
//         contentType = 'text/html'
//     }


//     if(!ext) {
//         filePath += '.html'
//     }

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             fs.readFile(path.join(__dirname, 'test-public', 'error.html'), (errDeep, data) => {
//                 if (errDeep) {
//                     res.writeHead(500)
//                     res.end('Error deeeeeep')
//                 } else {
//                     res.writeHead(200, {
//                         'Content-Type': 'text/html'
//                     })
//                     res.end(data)
//                 }
//             })
//         } else {
//             res.writeHead(200, {
//                 'Content-Type': contentType
//             })
//             res.end(content)
//         }
//     })
// })


// const PORT = process.env.PORT || 8000
// server.listen(PORT, () => {
//     console.log(`server has been started test2-app.js on port ${PORT}`)
// })


// //отменяет CORS защиту
// //app.use(function (req, res, next) {
//     // res.setHeader('Access-Control-Allow-Origin', '*')
//    //  res.setHeader('Access-Control-Allow-Methods', 'GET')
//      //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
//      //res.setHeader('Access-Control-Allow-Credentials', true) 
//   // }) 
   





// //from client/public/manifest.json ...... icons{первый параметр}
// //"src": "favicon.ico",