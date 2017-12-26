function initMap() {
  var place = {lat: 35.6598964, lng: 139.6835137};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: place
  });
  var marker = new google.maps.Marker({
    position: place,
    map: map
  });
}
$.getJSON("data.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});



var data = [
// id, name, clean, congestion, laitude, longitude, optional_functions, multi_purpose_button
  [1,  "1号館", 4, 4, 35.659845, 139.684855, true, true],
  [2,  "5号館", 2, 2, 35.661071, 139.684437, false, true],
  [3,  "7号館", 4, 2, 35.660753, 139.684506, false, false],
  [4,  "10号館", 2, 2, 35.660633, 139.684951, true, true],
  [5,  "11号館", 5, 2, 35.660293, 139.684216, false, false],
  [6,  "12号館", 5, 2, 35.660293, 139.68354 , false, false],
  [7,  "13号館", 5, 2, 35.660516, 139.683712, false, false],
  [8,  "KOMCEE West 2F", 1, 2, 35.660378, 139.68596, false, false],
  [9,  "KOMCEE West 地下", 1, 3, 35.660378, 139.68596, true, true],
  [10, "駒場国際研究棟", 2, 2, 35.660947, 139.683648, true, true],
  [11, "KOMCEE East 地下", 2, 2, 35.660727, 139.68596, true, false],
  [12, "KOMCEE East 2F", 2, 3, 35.660727, 139.68596, true, false],
  [13, "食堂 正面", 4, 4, 35.659938, 139.68647, true, false],
  [14, "食堂 裏", 3, 4, 35.659637, 139.686378, true, false],
  [15, "イタトマ", 3, 4, 35.659437, 139.686443, true, false],
  [16, "図書館", 3, 5, 35.659387, 139.686893, true, true],
  [17, "屋外トイレ", 5, 1, 35.660472, 139.684468, false, true],
  [18, "JK棟", 3, 4, 35.659034, 139.684061, false, true],
  [19, "アドミニ棟", 1, 3, 35.659165, 139.685289, true, true],
  [20, "キャンプラ", 4, 2, 35.660298, 139.687349, false, false],
  [21, "体育館", 4, 2, 35.660642, 139.687215, false, true],
  [22, "学生会館", 3, 2, 35.661056, 139.686512, true, false],
  [23, "コミプラ", 3, 1, 35.660032, 139.687156, true, true],
  [24, "コミプラ 2F", 3, 1, 35.660032, 139.687156, true, false],
  [25, "正門", null, null, 35.659165, 139.684618, null, null],
  [26, "生協", null, null, 35.660028, 139.68714, null, null],
  [27, "13号館前広場", null, null, 35.660232, 139.683851, null, null],
  [28, "裏門", null, null, 35.661392, 139.687655, null, null]
];
