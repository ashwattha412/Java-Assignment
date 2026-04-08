let a=prompt("Enter a: ");
a=Number(a);
let b=prompt("Enter b: ");
b=Number(b);
let c=prompt("Enter c: ");
c=Number(c);
let score = 3*a+b-2*c;
if (a >= 0 && a <= 100 &&
    b >= 0 && b <= 100 &&
    c >= 0 && c <= 100){
    if (a+b+c>50){
        score-=10;
    }
    if (score<0){
        score=0;//it was asked that if score becomes negative we change it 0
    }
    if (score>=60){
        alert(score+", PASS");
    }
    else{
        alert(score+", FAIL");
    }
}
else{
    alert("Wrong Input");
}
