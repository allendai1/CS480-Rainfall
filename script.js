var tooltip = document.querySelectorAll('.coupontooltip');
var svg = document.querySelector('svg');
var pt = svg.createSVGPoint();
var loc;
function getRainfall(e){
    for (var i=tooltip.length; i--;) {
        tooltip[i].innerHTML = (e.getAttribute("height") * 90 / 370).toFixed(2);
        
        tooltip[i].parentNode.childNodes[3].setAttribute("x", loc.x)
        tooltip[i].parentNode.childNodes[3].setAttribute("y", loc.y)


    }
}


function cursorPoint(e){
    pt.x = e.clientX; 
    pt.y = e.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }

  svg.addEventListener('mousemove',function(evt){
    loc = cursorPoint(evt);
  },false);


// document.addEventListener('mousemove', fn, false);


// function fn(e) {
//     for (var i=tooltip.length; i--;) {
//         tooltip[i].attributes[1] = "" + e.pageX;
//         tooltip[i].attributes[2] = "" + e.pageY;
//         tooltip[i].innerHTML = "hello"
     
//     }
// }