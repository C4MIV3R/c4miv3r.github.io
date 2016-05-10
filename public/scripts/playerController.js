$(document).ready(function(){
    var player = $('#player');

    $(window).on('mousemove', function (e) {

      //Current position
      var p1 = {
        x: player.offset().left,
        y: player.offset().top
      };

      //Future position
      var p2 = {
        x: e.offsetX,
        y: e.offsetY
      };

      //Angle between them in degrees
      var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
        player.css('-webkit-transform', 'rotate(' + angleDeg + 'deg)');
    });
});
