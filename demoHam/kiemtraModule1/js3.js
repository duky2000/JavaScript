function soNguyenAm(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "a" || arr[i] == "o" || arr[i] == "e" || arr[i] == "u" || arr[i] == "i") {
            count++;
        }

    }
    if (count > 0) {
        return count;
    } else {
        return false;
    }
}

let str = prompt("nhập vào chuỗi");
let arr = str.split("");
document.write("số ký tự nguyên âm là : " + soNguyenAm(arr));
