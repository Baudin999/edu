
function calcSD(numberOfNumbers) {
    var numbers = [];

    for (var i = 0; i < numberOfNumbers; ++i) {
        numbers.push([1,2,3,4].reduce(function(t, n) {
            var result = t + (Math.floor(Math.random() * 6)) + 1;
            if (result > 20) {
                var exception = Math.floor(Math.random() * 6) + 1;
                result += (exception === 6) ? (exception + Math.floor(Math.random() * 6) + 1) : exception;
            }
            return result;
        }, 0));
    }

    var total = numbers.reduce(function(t, n) { return t + n; }, 0);
    var avr = total / numbers.length;
    var intermediate = numbers.map(function(n) {
        return (n - avr) ^ 2;
    });
    var total2 = intermediate.reduce(function(t, n) { return t + n; }, 0);;
    var temp = Math.abs( total2 / intermediate.length );
    var sd = Math.sqrt( temp );
    var result = {
        numberOfItems: numberOfNumbers,
        avr: avr,
        sd: sd,
        mapping: {}
    };

    numbers.map(function(number) {
        if (!result.mapping[number]) {
            result.mapping[number] = 1;
        }
        else {
            result.mapping[number]++;
        }
    });

    self.postMessage(result);
}


self.onmessage = function(event) {
    calcSD(+event.data);
};
