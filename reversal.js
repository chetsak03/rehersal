//reverse a string
function reverseStrnig(str) {
  //  1) const strArr = str.split("");
  //   strArr.reverse();
  //   console.log(strArr.join(""));
  //2) return str.split("").reverse().join("");
  //3)
  //   let revString = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     revString = revString + str[i];
  //   }
  //   console.log(revString);
  //4)
  //   let revString = "";
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     revString = str[i] + revString;
  //   }
  //   console.log(revString);
  //5)
  //   let revString = "";
  //   for (let char of str) {
  //     revString = char + revString;
  //   }
  //   console.log(revString);
  //6)
  //   let revString = "";
  //   str.split("").forEach(function(char) {
  //     revString = char + revString;
  //   });
  //   console.log(revString);
  //7)
  //   var revString = str.split("").reduce((revString, char) => {
  //     return (revString = char + revString);
  //   }, "");
  //   console.log(revString);
}
function isPalindrome(str) {
  const revString = str
    .split("")
    .reverse()
    .join("");
  return revString === str;
}

function reverseInt(int) {
  const revString = int
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(revString) * Math.sign(int);
}

function capitalizeLetters(str) {
  //   1)const strArr = str.toLowerCase().split(" ");

  //   for (let i = 0; i < strArr.length; i++) {
  //     strArr[i] =
  //       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  //   }
  //   return strArr.join(" ");

  //  2) return str
  //     .toLowerCase()
  //     .split(" ")
  //     .map(word => {
  //       return word[0].toUpperCase() + word.substr(1);
  //     })
  //     .join(" ");

  return str.toLowerCase().replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}
//////////////////////////////////
function maxCharacters(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach(function(char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    //same
  }
}
///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////

function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  //sort by length
  const sorted = wordArr.sort(function(a, b) {
    return b.length - a.length;
  });
  // console.log(sorted);
  const longestWordArr = sorted.filter(function(word) {
    return word.length === sorted[0].length;
  });
  // console.log(longestWordArr);
  //chcek if more than one array value
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}
///////////////////////////////////////////////////////////////////
///////////////////////////////////
////////////////////////
///////
function chunkArray(arr, len) {
  const chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }
  return chunkedArr;
}
////////////////////////////////////////////////
/////////////////////////
///////////////

function flattenArray(arrays) {
  //1)
  // return arrays.reduce(function(a, b) {
  //   return a.concat(b);
  // });

  //2)
  // return [].concat.apply([], arrays);
  //3)
  return [].concat(...arrays);
}
///////////////////////////////////////////////
////////////////////
///////
function isAnagram(str1, str2) {
  // console.log(formatStr(str1));
  return formatStr(str1) === formatStr(str2);
}

//helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
//////////////////////////////////////
//////////////
//////////
function letterChages(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
    if (char === "z" || char === "Z") {
      return a;
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });
  return newStr;
}

//////////////////////////////////////////////////////////////
/////////////////////////
//////////
function addAll(...numbers) {
  // return arguments;
  //1) var args = Array.prototype.slice.call(arguments);
  // var total = 0;
  // for (i = 0; i < args.length; i++) {
  //   total += args[i];
  // }
  // return total;

  //2)
  // let total = 0;
  // numbers.forEach(num => {
  //   total += num;
  // });
  // return total;
  //3)
  return numbers.reduce((acc, cur) => {
    return acc + cur;
  });
}

function sumAllPrimes(num) {
  let total = 0;
  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
    7;
  }
  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}
/////////////////////////////////
////////
////

function seekAndDestroy(arr, ...rest) {
  // 1)const args = Array.from(arguments);

  // function filterArr(arr) {
  //   return args.indexOf(arr) === -1;
  // }
  // console.log(filterArr);
  // return arr.filter(filterArr);

  //2)
  console.log(arr);
  console.log(rest);
  return arr.filter(val => !rest.includes(val));
}
function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => {
    if (val === -1) {
      arr1.push(i);
    } else {
      arr2.push(val);
    }
  });
  const sortArr = arr2.sort((a, b) => {
    return a - b;
  });
  arr1.forEach((val, i) => {
    sortArr.splice(arr1[i], 0, -1);
  });
  return arr1;
}
// const output = reverseStrnig("chetan");
// const output = isPalindrome("racecar");
// const output = reverseInt(-12345);
// const output = capitalizeLetters("i love my counTry");
// const output = maxCharacters("javascript");
// const output = fizzBuzz();
// const output = longestWord("hello my nmae is, chetans and sakshi");
// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// const output = flattenArray([[1, 2], [3, 4], [5, 6], [7, 8], [6]]);
// const output = isAnagram("chetan", "hecnta");
// const output = letterChages("hello chetan");
// const output = addAll(2, 5, 6, 9);
// const output = sumAllPrimes(10);
// const output = seekAndDestroy([2, 3, 4, 5, 6, 6, "hello"], 2, 6);
const output = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
console.log(output);

// crush  =  new Crush("Rashmika")
