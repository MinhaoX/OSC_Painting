// Where is the circle
var x, y, xc, yc, zc, go;

var socket = io.connect(window.location.origin);

    socket.on('data', function(data) {
        
        console.log(data);
        if(data[0] === '/1/fader3'){

        } else {
          xc = map(data[2], -1, 1, 1, 20);
          yc = map(data[1], -1, 1, 1, 20);
          zc = map(data[3], -1, 1, 1, 20);
          
        }

        
    });

    var img;
    var smallPoint, largePoint;
    
    
    function preload() {
      img = loadImage("https://www.biography.com/.image/t_share/MTE1ODA0OTcxODExNDQwMTQx/vincent-van-gogh-9515695-3-402.jpg");
    }
    var can;
    function setup() {
      can = createCanvas(windowWidth, windowHeight);
      // img.resize(windowWidth, windowHeight)
      smallPoint = 4;
      largePoint = 100;
      imageMode(CENTER);
      noStroke();
      background(255);
      img.loadPixels();
      frameRate(60);
    }
    // function drawSomeDots(){
    //   // var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
    //   for(let i = 0; i < 500; i++){
    //     var x = floor(random(img.width));
    //     var y = floor(random(img.height));
    //     var pix = img.get(x, y);
    //     var randomS = random(4,10)
    //     fill(pix, 128);
    //     ellipse(x, y, randomS, randomS);
    //   }
      
    // }
    
    document
    function draw() {
      
          // var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
          for(let i = 0; i < 5; i++){
            var x = floor(random(img.width));
            var y = floor(random(img.height));
            var pix = img.get(x, y);
            var randomS = random(4,10)
            fill(pix, 128);
            ellipse(x, y, xc, yc);
          }
      
    }
    
    function windowResized() {
      var recan = resizeCanvas(windowWidth, windowHeight);
      img.resize(windowWidth, windowHeight)
      console.log(recan === can);
    }

    // var img;
    // var smallPoint, largePoint;
    
    // function preload() {
    //   img = loadImage("https://www.biography.com/.image/t_share/MTE1ODA0OTcxODExNDQwMTQx/vincent-van-gogh-9515695-3-402.jpg");
    // }
    
    // function setup() {
    //   createCanvas(img.width, img.height);
    //   smallPoint = 4;
    //   largePoint = 100;
    //   imageMode(CENTER);
    //   noStroke();
    //   background(255);
    //   img.loadPixels();
    // }
    
    // function draw() {
    //     framerate(60)
    //     var pointillize = map(xc, 0, width, smallPoint, largePoint);
    //     var x = floor(random(img.width));
    //     var y = floor(random(img.height));
    //     var pix = img.get(x, y);
    //     fill(pix, 128);
    //     ellipse(x, y, pointillize, pointillize);
     

    // }


