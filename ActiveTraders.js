function mostActive(customers) {
  var n = customers.length;
  var res = [];
  var map = {};

  for (var i = 0; i < customers.length; i++) {
    var s = customers[i];
    {
      if (map.hasOwnProperty(s)) {
        map[s] =
          (function (m, k) {
            return m[k] === undefined ? null : m[k];
          })(map, s) + 1;
      } else map[s] = 1;
    }
  }
  {
    var arr = Object.keys(map);
    for (var i = 0; i < arr.length; i++) {
      var key = arr[i];
      {
        var temp = (function (m, k) {
          return m[k] === undefined ? null : m[k];
        })(map, key);
        var tempPerCent = ((100 * temp) / n) | 0;
        if (tempPerCent > 5.0) {
          res.push(key) > 0;
        }
      }
    }
  }
  return res;
}
