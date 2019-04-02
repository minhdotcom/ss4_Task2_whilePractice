let number = 0;
let sum = 0;
while (number != -1) {
    number = Number(prompt('Nhap so bat ky:'))
    if(number == -1) {
        break;
    }
    document.write(number + '<br>')
    sum += number;
}
document.write(sum);