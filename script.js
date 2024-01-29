function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let roman = '';
    for (let i = 0; i < Object.keys(obj).length; i++) {
        // Handle special cases like 900 (CM), 400 (CD), 90 (XC), 40 (XL), 9 (IX), and 4 (IV)
        if (i % 2 === 0 && i < 6 && num >= obj[i][1] - obj[i + 2][1]) {
            roman += obj[i + 2][0] + obj[i][0];
            num -= obj[i][1] - obj[i + 2][1];
        } else if (i % 2 === 1 && num >= obj[i][1] - obj[i + 1][1]) {
            roman += obj[i + 1][0] + obj[i][0];
            num -= obj[i][1] - obj[i + 1][1];
        }

        // Handle regular cases
        while (num >= obj[i][1]) {
            roman += obj[i][0];
            num -= obj[i][1];
        }
    }

    return roman;
}

// Uncomment to test the function with input 36
// console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman;
