function photosObj (names, src) {
  this.names = names;
  this.src = src;
  this.y = 0;
  };

// Array for Objects and their properties
var photosArray = new Array();
photosArray.push(new photosObj ("bag", "bag.jpg"));
photosArray.push(new photosObj ("banana", "banana.jpg"));
photosArray.push(new photosObj ("scissors", "scissors.jpg"));
photosArray.push(new photosObj ("shark", "shark.jpg"));
photosArray.push(new photosObj ("sweep", "sweep.jpg" ));
photosArray.push(new photosObj ("boots", "boots.jpg"));
photosArray.push(new photosObj ("chair", "chair.jpg"));
photosArray.push(new photosObj ("pen", "pen.jpg"));
photosArray.push(new photosObj ("unicorn", "unicorn.jpg"));
photosArray.push(new photosObj ("usb", "usb.jpg"));
photosArray.push(new photosObj ("watercan", "watercan.jpg"));
photosArray.push(new photosObj ("wineglass", "wineglass.jpg"));
photosArray.push(new photosObj ("cthulhu", "cthulhu.jpg"));
photosArray.push(new photosObj ("dragon", "dragon.jpg"));

var chart = null;

window.onload = function () {

  chart = new CanvasJS.Chart("chartContainer", {

    title: {text: "Clicks Per Photo"},
    data: [//array of dataSeries
      /*** Change type "column" to "bar", "area", "line" or "pie"***/
            {
             type: "column",
             dataPoints: photosArray
            }
          ]
   });

  chart.render();
}

function changeWine() {
  photosArray[11].y++;
  chart.render();
}
