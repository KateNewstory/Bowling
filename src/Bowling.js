var functions = {
        getRandomInt:function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        arraySum:function (arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
    }
    ;
var bowling = {
    throwBalls:function (arr) {
        var frame = [];
        var gameArr = [], throws = [];

        if (!arr) {
            //Play random game
            for (var i = 0; i < 10; i++) {
                throws = [];
                throws[0] = this.throwBall();
                if (functions.arraySum(throws[0]) != 10) {
                    throws[1] = this.throwBall(throws[0]);
                }
                gameArr.push(throws);
            }
            if(functions.arraySum(gameArr[9][0]) == 10) {
                throws = [];
                throws[0] = this.throwBall();
                if (functions.arraySum(throws[0]) != 10) {
                    throws[1] = this.throwBall(throws[0]);
                    gameArr.push(throws);
                }   else {
                    gameArr.push(throws);
                    gameArr.push(this.throwBall());
                }
            }  else {
                if(functions.arraySum(gameArr[9][1]) && (functions.arraySum(gameArr[9][0])+functions.arraySum(gameArr[9][1]) == 10)){
                    gameArr.push(this.throwBall());
                }
            }
        } else {
            gameArr = arr;
        }
        for (var i = 0; i < gameArr.length; i++) {
            frame.push({'balls':gameArr[i]});
        }
        return frame;
    },
    getScore:function (frame) {
        var sum;
        var result = 0;
        //debugger;
        for (var i = 0; i < frame.length && i < 10; i++) {
            sum = 0;
            for (var j = 0; j < frame[i].balls.length; j++) {
                sum += functions.arraySum(frame[i].balls[j]);
                if (sum == 10) {
                    if (j == 0) {
                        //strike!
                        result += functions.arraySum(frame[i + 1].balls[0]);
                        if (frame[i + 1].balls[1]) {
                            result += functions.arraySum(frame[i + 1].balls[1]);
                        } else {
                            result += functions.arraySum(frame[i + 2].balls[0]);
                        }

                    } else {
                        result += functions.arraySum(frame[i + 1].balls[0]);
                    }
                }
            }
            result += sum;
        }
        return result;
    },
    playGame: function () {
        var frame = this.throwBalls();
        var score = this.getScore(frame);
        this.showGame(frame, score);
    },
    showGame: function (frame, score) {
        var ul = document.createElement('ul');
        var result, li;
        for (var i = 0; i < frame.length; i++) {
            li = document.createElement('li');
            pinsInfo = document.createElement('div');
            pinsInfo.innerHTML = frame[i].balls[0].join(',') + '</br>' + frame[i].balls[1].join(',');
            pinsInfo.className = 'pins-info';

            li.appendChild(pinsInfo);
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
        result = document.createElement('div');
        result.innerHTML = 'Score: '+score;
        document.body.appendChild(result);
    },
    throwBall:function (prevThrow) {
        var result = [];

        if (!prevThrow) {
            for (var i = 0; i <= 9; i++) {
                result[i] = functions.getRandomInt(0, 1);
            }
        } else {
            result = prevThrow;//.slice();
            for (var i = 0; i < result.length; i++) {
                if (!result[i]) {
                    result[i] = functions.getRandomInt(0, 1);
                } else {
                    result[i] = 0;
                }
            }
        }

        return result;
    }
};