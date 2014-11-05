var openFrame = [
    [
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    ]
];//7
var openFrame2 = [
    [
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    ],
    [
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    ]
];//14
var strike = [
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
];//14
var double = [
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
];//35
var triple = [
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
];//65
var spare = [
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
];//17

var game = [
    [
        //Frame 0
        //Score 1+4=5
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0]
    ],
    [
        //Frame 1
        //Score 4+5+5=14
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    ],
    [
        //Frame 2
        //Score 6+4+14=24 + next throwBall(5)=29
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ],
    [
        //Frame 3
        //Score 5+5+29=39 + next throwBall(10)=49
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    ],
    [
        //Frame 4
        //Score 10+49=59 + 2 next throwBall(0+1)=60
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        //Frame 5
        //Score 0+1+60=61
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    ],
    [
        //Frame 6
        //Score 7+3+61=71+ next throwBall(6)=77
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    ],
    [
        //Frame 7
        //Score 6+4+77=87+ next throwBall(10)=97
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    ],
    [
        //Frame 8
        //Score 10+97=107 + 2 next throwBall(2+8)=117
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        //Frame 9
        //Score 2+8+117=127 + next throwBall(6)=133
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        //Frame 10 (addition)
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    ]

];//133
describe('Bowling', function () {

    it('should be defined', function () {
        expect(bowling).toBeDefined();
    });

    describe('throwBalls:', function () {
        it('should be function', function () {
            expect(bowling.throwBalls).toEqual(jasmine.any(Function));
        });
    });
    describe('throwBalls:', function () {
        it('should be function', function () {
            expect(bowling.throwBalls).toEqual(jasmine.any(Function));
        });
    });
    describe('getScore:', function () {
        it('should be function', function () {
            expect(bowling.getScore).toEqual(jasmine.any(Function));
        });

        describe('first Open Frame', function () {
            var frame = bowling.throwBalls(openFrame);

            it('should return sum of broken pins', function () {
                expect(bowling.getScore(frame)).toEqual(7);
            });
        });

        describe('second Open Frame', function () {
            var frame = bowling.throwBalls(openFrame2);
            it('should return sum of all broken pins', function () {
                expect(bowling.getScore(frame)).toEqual(14);
            });
        });

        describe('strike', function () {
            var frame = bowling.throwBalls(strike);
            it('should return sum of broken pins and 2 next ball throws', function () {
                expect(bowling.getScore(frame)).toEqual(14);
            });
        });
        describe('double', function () {
            var frame = bowling.throwBalls(double);
            it('should return sum of broken pins(10) and 2 next ball throws (twice)', function () {
                expect(bowling.getScore(frame)).toEqual(35);
            });
        });

        describe('triple', function () {
            var frame = bowling.throwBalls(triple);
            it('should return sum of broken pins(10) and 2 next ball throws (3 times)', function () {
                expect(bowling.getScore(frame)).toEqual(65);
            });
        });

         describe('spare', function () {
            var frame = bowling.throwBalls(spare);
            it('should return sum of broken pins(10) and 1 next ball throw', function () {
                expect(bowling.getScore(frame)).toEqual(26);
            });
        });/**/
        describe('the game', function () {
            var frame = bowling.throwBalls(game);
            it('should return 133', function () {
                expect(bowling.getScore(frame)).toEqual(133);
            });
        });
    });
});