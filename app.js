const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( (req,res) => {
  console.log(req.url);
  if(req.url === '/') {
    // res.writeHead(200, { 'Content-Type': 'text/html'});
    // res.end('<h1>This is index.html</h1>');

    fs.readFile(path.join(__dirname, 'index.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });
  // } else if (req.url === '/index') {
  //   // res.writeHead(200, { 'Content-Type': 'text/html'});
  //   // res.end('<h1>This is ABOUT PAGE</h1>');

  //   fs.readFile(path.join(__dirname,'index.html'), (err,content) => {
  //     if(err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html'});
  //     res.end(content);
  //   });
  } else if (req.url === '/gallery') {
    // res.writeHead(200, { 'Content-Type': 'text/html'});
    // res.end('<h1>This is ABOUT PAGE</h1>');

    fs.readFile(path.join(__dirname,'gallery.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });

  } else if (req.url === '/contact') {
    fs.readFile(path.join(__dirname, 'contact.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });
  } else if (req.url === '/profile') {
    fs.readFile(path.join(__dirname, 'Startpage.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });

//JPEG images

  } else if (req.url === '/image/images.jpg') {
    fs.readFile(path.join('./image/images.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/image/battleship.jpg') {
    fs.readFile(path.join('./image/battleship.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/image/boat.jpg') {
    fs.readFile(path.join('./image/boat.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/image/Bridge.jpg') {
    fs.readFile(path.join('./image/Bridge.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/image/cardiff.jpg') {
    fs.readFile(path.join('./image/cardiff.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/image/castle.jpg') {
    fs.readFile(path.join('./image/castle.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/image/glaveyard.jpg') {
    fs.readFile(path.join('./image/glaveyard.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/image/liverpool.jpg') {
    fs.readFile(path.join('./image/liverpool.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/image/stone.jpg') {
    fs.readFile(path.join('./image/stone.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/image/Threeman.jpg') {
    fs.readFile(path.join('./image/Threeman.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/image/tree.jpg') {
    fs.readFile(path.join('./image/tree.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/image/vung.jpg') {
    fs.readFile(path.join('./image/vung.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/images/pic02.jpg') {
    fs.readFile(path.join('./images/pic02.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/images/pic03.jpg') {
    fs.readFile(path.join('./images/pic03.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/images/pic04.jpg') {
    fs.readFile(path.join('./images/pic04.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
  } else if (req.url === '/images/banner.jpg') {
    fs.readFile(path.join('./images/banner.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/jpg'});
      res.end(content);
    });
//CSS

  } else if (req.url === '/assets/css/main.css') {
    fs.readFile(path.join('./assets/css/main.css'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css'});
      res.end(content);
    });
  } else if (req.url === '/assets/css/font-awesome.min.css') {
    fs.readFile(path.join('./assets/css/font-awesome.min.css'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css'});
      res.end(content);
    });
  } else if (req.url === '/assets/css/noscript.css') {
    fs.readFile(path.join('./assets/css/noscript.min.css'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css'});
      res.end(content);
    });
  } else if (req.url === '/assets/css/images/overlay.png') {
    fs.readFile(path.join('./assets/css/images/overlay.png'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/png'});
      res.end(content);
    });
  } else if (req.url === '/assets/css/images/arrow.svg') {
    fs.readFile(path.join('./assets/css/images/arrow.svg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/svg'});
      res.end(content);
    });
//javascript

  } else if (req.url === '/assets/js/jquery.min.js') {
    fs.readFile(path.join('./assets/js/jquery.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
  } else if (req.url === '/assets/js/jquery.scrolly.min.js') {
    fs.readFile(path.join('./assets/js/jquery.scrolly.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
  } else if (req.url === '/assets/js/jquery.dropotron.min.js') {
    fs.readFile(path.join('./assets/js/jquery.dropotron.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
  } else if (req.url === '/assets/js/jquery.scrollex.min.js') {
    fs.readFile(path.join('./assets/js/jquery.scrollex.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
  } else if (req.url === '/assets/js/browser.min.js') {
    fs.readFile(path.join('./assets/js/browser.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
  } else if (req.url === '/assets/js/breakpoints.min.js') {
    fs.readFile(path.join('./assets/js/breakpoints.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
  } else if (req.url === '/assets/js/util.js') {
    fs.readFile(path.join('./assets/js/util.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
  } else if (req.url === '/assets/js/main.js') {
    fs.readFile(path.join('./assets/js/main.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
  } else {
    // res.writeHead(404, { 'content-type': 'text/html'});
    // res.end('<h3>Eror 404: Not Found</h3>');
    fs.readFile(path.join(__dirname,'404.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(404, { 'Content-Type': 'text/html'});
      res.end(content);
    });
  }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log('Server is running on port: '+PORT);
});