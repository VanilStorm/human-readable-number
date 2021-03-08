module.exports = function toReadable (number) {
  let nString = number.toString();

    let result = '';

    let fromZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let fromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (nString.length === 3) {
        if (nString[1] == '0' && nString[2] == '0') {
            result += `${fromZeroToNine[nString[0]]} hundred `
        } else {
            result += `${fromZeroToNine[nString[0]]} hundred `
            nString = nString.slice(1)
        }
    }

    if (nString.length === 2 && nString[0] === '1') {
        result += `${fromTenToNineteen[nString[1]]}`
    }

    if (nString.length === 2 && nString[0] > 1) {
        if (nString[1] >= 1) {
            result += `${dozens[nString[0] - 2]} ${fromZeroToNine[nString[1]]}`
        } else {
            result += `${dozens[nString[0] - 2]}`
        }
    }

    if (nString.length === 2 && nString[0] === '0') {
        if(nString[1] !== '0') {
            result += `${fromZeroToNine[nString[1]]}`
        }
    }

    if(nString.length === 1) {
        result += `${fromZeroToNine[nString[0]]}`;
    }

    return result;
}
