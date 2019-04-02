let number;
let sum = 0;
for (number = 0; number != -1;){
    number = Number(prompt('Nhap so:'));
    document.write(number + '<br>');
    sum += number;
}
document.write(sum);