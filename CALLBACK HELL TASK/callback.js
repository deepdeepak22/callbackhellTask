function countDownFromTen(callback) {
  setTimeout(function () {
    console.log(10);
    callback();
  }, 1000);
}

function countDownNine(callback) {
  setTimeout(function () {
    console.log(9);
    callback();
  }, 1000);
}

function countDownEight(callback) {
  setTimeout(function () {
    console.log(8);
    callback();
  }, 1000);
}
function countDownSeven(callback) {
  setTimeout(function () {
    console.log(7);
    callback();
  }, 1000);
}
function countDownSix(callback) {
  setTimeout(function () {
    console.log(6);
    callback();
  }, 1000);
}
function countDownFive(callback) {
  setTimeout(function () {
    console.log(5);
    callback();
  }, 1000);
}
function countDownFour(callback) {
  setTimeout(function () {
    console.log(4);
    callback();
  }, 1000);
}
function countDownThree(callback) {
  setTimeout(function () {
    console.log(3);
    callback();
  }, 1000);
}
function countDownTwo(callback) {
  setTimeout(function () {
    console.log(2);
    callback();
  }, 1000);
}
function countDownOne(callback) {
  setTimeout(function () {
    console.log(1);
    callback();
  }, 1000);
}

function printDeep() {
  console.log("Happy Independence Day");
}

// Start the countdown
countDownFromTen(function () {
  countDownNine(function () {
    countDownEight(function () {
      countDownSeven(function () {
        countDownSix(function () {
            countDownFive(function(){
                countDownFour(function(){
                    countDownThree(function(){
                        countDownTwo(function(){
                            countDownOne(function(){
          printDeep();
        })
        })
        })
        })
        })
        });
      });
    });
  });
});
