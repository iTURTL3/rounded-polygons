var polygonPoints = function(radius, sides, angle) {
   var i, points = [], multiplier = (Math.PI * 2) / sides;
   for ( i = 0; i < sides; i++ ) {
      points.push([
         radius * Math.sin(angle + (i * multiplier)),
         radius * Math.cos(angle + (i * multiplier))
      ]);
   }
   return points;
};

var drawPolygon = function(context, x, y, radius, sides, angle) {
   var i, points = polygonPoints(radius, sides, angle), length = points.length;
   context.beginPath();
   for ( i = 0; i < length; i++ ) {
      context.lineTo(
         x - points[i]['0'],
         y - points[i]['1']
      );
   }
   context.closePath();
};

var drawRoundedPolygon = function(context, x, y, radius, sides, angle, radius2) {
   var i, points = polygonPoints(radius, sides, angle), length = points.length;
   context.beginPath();
   for ( i = 0; i <= length; i++ ) {
      context.arcTo(
         x - points[i % length]['0'],
         y - points[i % length]['1'],
         x - points[(i + 1) % length]['0'],
         y - points[(i + 1) % length]['1'],
         radius2
      );
   }
   context.closePath();
};
