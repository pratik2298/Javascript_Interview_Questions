

const convertByteArrayToString = (byteArray) => {
    const str = String.fromCharCode(...byteArray);
    return str;
}

console.log(`convertByteArrayToString ---->`, convertByteArrayToString([72, 101, 108, 108, 111]));