let Seed=prompt("Enter Seed: ");
Seed=Number(Seed);
let N=prompt("Enter Number: ");
N=Number(N);
if(N>=100 && N<=999 && Seed<=9 && Seed>=0){
    for(let i=0;i<3;i++){
    if (N%2==0){
        N=N/2+Seed;
    }
    else{
        N=N*3-Seed;
    }}
}
else{
    alert("Wrong Input");
}
