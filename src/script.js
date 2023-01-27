window.onload = function () {
  const input = document.getElementsByTagName("input")[0];
  let resultArr = ["UP⬆️", "DOWN⬇️", "CORRECT!🥳"];
  let result = document.querySelector(".result");
  let randomNum = getRandomNum(50);

  const button = document.querySelector(".startBtn");
  button.addEventListener("click", function () {
    resultFunc();
  });

  function resultFunc() {
    let value = input.value;
    if (value < randomNum) {
      result.innerHTML = resultArr[0];
    } else if (value > randomNum) {
      result.innerHTML = resultArr[1];
    } else {
      result.innerHTML = resultArr[2];
      //after 2sec
      setTimeout(function () {
        resetFunc();
      }, 3000);
    }
  }

  function resetFunc() {
    input.value = 1;
    randomNum = getRandomNum(50);
    result.innerHTML = "One More Game! ( 1 ~ 50 )";
  }

  function getRandomNum(num) {
    return Math.ceil(Math.random() * num);
  }
};
