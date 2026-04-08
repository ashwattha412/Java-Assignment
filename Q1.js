function prime(n){
    let sum=0;
    while (n!=0){
        let d=n%10;
        if (d==0){
            return false;
        }
        sum+=d
        n=Math.floor(n/10);
    }
    if (sum < 2) {
    return false;
    }
    for(let i=2; i<=Math.floor(sum/2); i++){
        if (sum%i==0){
            return false;
        }
    }
    return true;
}
let L=prompt("Enter L: ");
L=Number(L);
let R=prompt("Enter R: ");
R=Number(R);
let K=prompt("Enter K: ");
K=Number(K);
let count=0;
let x=L;
if (L >= 1 && L <= R && R <= 1000000 &&
    K >= 2 && K <= 9){
    while (x<=R){
        if (prime(x)&& x%K==0){
            count+=1;
        }
        x++;
    }
alert(count);
}
else{
    alert("Wrong Input");
}
