function exam(input){

 let nDays=Number(input[0]);
 let mKm=Number(input[1]);
 let target=1000;
 let sum=mKm;


 for(i=2;i<=input.length-1;i++){
     let currentDay=Number(input[i]);
     mKm+=(mKm*currentDay/100);
     sum+=mKm;

 }
 if(sum<target){
     console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(target-sum)} more kilometers`);
 }else{
     console.log(`You've done a great job running ${Math.ceil(sum-target)} more kilometers!`)
 }



}
exam(["4",
"100",
"30",
"50",
"60",
"80"])

