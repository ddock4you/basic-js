// Get a random number from 0 to size
const getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
  };

  // Calculate distance between click event and target
  var getDistance = function (event, target) {
    // 클릭한 좌표x - 보물의치 좌표 x
    var diffX = event.offsetX - target.x;
    // 클릭한 좌표y - 보물위치 좌표 y
    var diffY = event.offsetY - target.y;
    // 제곱근 계산 (피타고라스 정리 a제곱 + b제곱 = c제곱)
    // Math.sqrt는 제곱근을 계산
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  };

  // 구한 거리에 따라 메시지를 표시한다
  var getDistanceHint = function (distance) {
    if (distance < 10) {
      return "바로 코앞!!";
    } else if (distance < 20) {
      return "정말 가깝다!";
    } else if (distance < 40) {
      return "가깝다";
    } else if (distance < 80) {
      return "멀지는 않다";
    } else if (distance < 160) {
      return "멀다";
    } else if (distance < 320) {
      return  "많이 멀다";
    } else if (distance < 640) {
      return "매우 많이 멀다";
    } else {
      return "답이 없다";
    }
  };

  // Set up our variables
  var width = 800;
  var height = 800;
  var clicks = 0;
  var clickLimit = 20;

  // Create a random target location
  var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
  };

  // Add a click handler to the img element
  $("#map").click(function (event) {
    clicks++;

    if (clicks > clickLimit) {
      alert("GAME OVER");
      return;
    }

    // Get distance between click event and target
    var distance = getDistance(event, target);
    // Convert distance to a hint
    var distanceHint = getDistanceHint(distance);

    // Update the #distance element with the new hint
    $("#distance").text(distanceHint);

    // Update the #clicks-remaining element with the number of clicks remaining
    $("#clicks-remaining").text(clickLimit - clicks);

    // If the click was close enough, tell them they won
    if (distance < 8) {
      alert("Found the treasure in " + clicks + " clicks!");
    }
  });