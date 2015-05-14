app.filter('phoneNumberFormatter', [function () {
    return function (input) {
        console.log(input);
        var formattedOutput = "";
        if (input && input.length == 10) {
            var firstThree = input.substring(0, 3);
            var second = input.substring(3, 6);
            var third = input.substring(6, 10);
            formattedOutput= firstThree + '-' + second + '-' + third;
            return formattedOutput;

        }
        else
        return formattedOutput;
    }
}]);