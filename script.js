var polygonPoints = function(radius, sides, angle) {
   var i, points = [], multiplier = (Math.PI * 2) / sides;
   for ( i = sides; i--; ) {
      points.push(
         radius * Math.sin(angle + (i * multiplier)),
         radius * Math.cos(angle + (i * multiplier))
      );
   }
   return points;
};

var drawPolygon = function(context, x, y, radius, sides, angle) {
   var i, points = polygonPoints(radius, sides, angle), length = points.length;
   context.beginPath();
   for ( i = 0; i < length; i += 2 ) {
      context.lineTo(
         x - points[i],
         y - points[i + 1]
      );
   }
   context.closePath();
};

var drawRoundedPolygon = function(context, x, y, radius, sides, angle, radius2) {
   var i, points = polygonPoints(radius, sides, angle), length = points.length;
   context.beginPath();
   for ( i = 0; i <= length; i += 2 ) {
      context.arcTo(
         x - points[(i + 0) % length],
         y - points[(i + 1) % length],
         x - points[(i + 2) % length],
         y - points[(i + 3) % length],
         radius2
      );
   }
   context.closePath();
};
