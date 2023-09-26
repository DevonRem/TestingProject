
module.exports = {
    capitalize: function capitalize(string) {
        let newString = string.charAt(0).toUpperCase();
        newString = newString + string.slice(1);
        return newString;
    },
    reverseString: function reverseString(string) {
        return string.split('').reverse().join('');
    },
    Calculator: class Calculator {
        add(num1, num2) {
            return num1 + num2;
          }
        
          subtract(num1, num2) {
            return num1 - num2;
          }
        
          divide(num1, num2) {
            return num1 / num2;
          }
        
          multiply(num1, num2) {
            return num1 * num2;
          }
    },
    caesarCipher: function caesarCipher(string, shift) {
        return string.replace(/[a-z]/g, (char)=>
        String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
        );
    },
    analyzeArray: function analyzeArray(arr) {
        return {
            average: arr.reduce((a,b) => a+b,0) / arr.length,
            min: Math.min(...arr),
            max: Math.max(...arr),
            length: arr.length,
        };
    },

};
