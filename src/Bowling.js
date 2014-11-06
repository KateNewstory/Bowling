var functions = {
        getRandomInt: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        arraySum: function (arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
    }
    ;
function Bowling() {
    this.frame = [];
    this.throwBalls = function (arr) {
        var throws = [];

        arr = arr || [];

        if (arr.length == 0) {
            //Play random game
            for (var i = 0; i < 10; i++) {
                throws = [];
                throws[0] = this.throwBall();
                if (functions.arraySum(throws[0]) != 10) {
                    throws[1] = this.throwBall(throws[0]);
                }
                arr.push(throws);
            }
            if (functions.arraySum(arr[9][0]) == 10) {
                throws = [];
                throws[0] = this.throwBall();
                if (functions.arraySum(throws[0]) != 10) {
                    throws[1] = this.throwBall(throws[0]);
                    arr.push(throws);
                } else {
                    arr.push(throws);
                    arr.push(this.throwBall());
                }
            } else {
                if (functions.arraySum(arr[9][1]) && (functions.arraySum(arr[9][0]) + functions.arraySum(arr[9][1]) == 10)) {
                    arr.push(this.throwBall());
                }
            }
        }
        for (var i = 0; i < arr.length; i++) {
            this.frame.push({'balls': arr[i]});
        }
        return this.frame;
    };
    this.getScore = function (frame) {
        var sum;
        var result = 0;
        frame = frame || this.frame;
        //debugger;
        for (var i = 0; i < frame.length && i < 10; i++) {
            sum = 0;
            for (var j = 0; j < frame[i].balls.length; j++) {
                this.frame[i].balls[j].show = functions.arraySum(frame[i].balls[j]);
                sum += this.frame[i].balls[j].show;
                if (sum == 10) {
                    if (j == 0) {
                        //strike!
                        result += functions.arraySum(frame[i + 1].balls[0]);
                        if (frame[i + 1].balls[1]) {
                            result += functions.arraySum(frame[i + 1].balls[1]);
                        } else {
                            result += functions.arraySum(frame[i + 2].balls[0]);
                        }
                        this.frame[i].balls[j].show = 'X';

                    } else {
                        //spare
                        result += functions.arraySum(frame[i + 1].balls[0]);
                        this.frame[i].balls[j].show = '/';
                    }
                }
            }
            result += sum;
            this.frame[i].score = result;
        }
        return result;
    };
    this.playGame = function (arr) {
        this.throwBalls(arr);
        var score = this.getScore();
        this.showGame();
    };
    this.showGame = function () {
        var ul = document.createElement('ul');
        var result, li;
        for (var i = 0; i < this.frame.length; i++) {
            li = document.createElement('li');

            frameInfo = document.createElement('div');
            frameInfo.className = 'frame-info';

            span = document.createElement('span');
            span.className = 'ball2';
            if (this.frame[i].balls[1] && this.frame[i].balls[1].show != void(0)) {
                span.innerHTML = this.frame[i].balls[1].show;
            }
            frameInfo.appendChild(span);

            span = document.createElement('span');
            span.className = 'ball1';
            if (this.frame[i].balls[0].show != void(0)) {
                span.innerHTML = this.frame[i].balls[0].show;
            }
            frameInfo.appendChild(span);

            span = document.createElement('span');
            span.className = 'score';
            if (this.frame[i].score != void(0)) {
                span.innerHTML = this.frame[i].score;
            }
            frameInfo.appendChild(span);

            li.appendChild(frameInfo);

            pinsInfo = document.createElement('div');
            pinsInfo.innerHTML = this.frame[i].balls[0].join(',') + '</br>';
            if (this.frame[i].balls[1] != void(0)) {
                pinsInfo.innerHTML += this.frame[i].balls[1].join(',');
            }

            pinsInfo.className = 'pins-info';

            li.appendChild(pinsInfo);
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
        result = document.createElement('div');
        result.innerHTML = 'Score: ' + this.frame[9].score;
        document.body.appendChild(result);
    };
    this.throwBall = function (prevThrow) {
        var result = [];

        if (!prevThrow) {
            for (var i = 0; i <= 9; i++) {
                result[i] = functions.getRandomInt(0, 1);
            }
        } else {
            result = prevThrow.slice();
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