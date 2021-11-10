function findPrime(...numbers) {

    let control = 0

    numbers.forEach(number => {

        if (number < 2) {
            console.log(number + " asal sayı değildir")
        } else {
            for (let i = 2; i <= number / 2; i++) {
                if (number < 2 || number % i == 0) {//Asal sayı olmama şartları
                    control = 1
                    i = number
                }
            }

            if (1 == control) {
                console.log(number + " asal sayı değildir")
            } else if (0 == control) {
                console.log(number + " asal sayıdır")
            }
            control = 0
        }
    });
}

function friendNumber(number1, number2) {

    let divideNumber1 = 0, divideNumber2 = 0

    for (let i = 0; i < number1 / 2 + 1; i++) {
        if (0 == number1 % i) {
            divideNumber1 += i
        }
    }

    for (let i = 0; i < number2 / 2 + 1; i++) {
        if (0 == number2 % i) {
            divideNumber2 += i
        }
    }

    if (number1 == divideNumber2 && number2 == divideNumber1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır")
    } else {
        console.log(number1 + " ve " + number2 + " arkadaş sayı değildirler")
    }
}

function perfectNumber() {
    console.log("Mükemmel Sayılar\n")

    let control = 0

    for (let i = 0; i < 1000; i++) {

        let totalDivide = 0

        for (let j = 1; j <= i; j++) {
            if (0 == i % j) {
                totalDivide += j
            }

            if (totalDivide == i && 0 == control) {
                console.log(i + " mükemmel sayıdır")
                control = 1
            }
        }

        control = 0
    }
}

function primeNumbers() {

    let control=0

    for (let num = 0; num < 1000; num++) {

        if (num < 2) {
            console.log(num + " asal sayı değildir")
        } else {
            for (let i = 2; i <= num / 2; i++) {
                if (num < 2 || num % i == 0) {//Asal sayı olmama şartları
                    control = 1
                    i = num
                }
            }

            if (1 == control) {
                console.log(num + " asal sayı değildir")
            } else if (0 == control) {
                console.log(num + " asal sayıdır")
            }

            control = 0
        }

    }
}

findPrime(2, 5, 8, 21, 13)
friendNumber(220, 284)
perfectNumber()
primeNumbers()

console.log("versiyon2")