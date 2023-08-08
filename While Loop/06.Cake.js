function cake(input) {

    let index = 0;
    let w = Number(input[index]);
    index++;
    let h = Number(input[index]);

    let cakePeaces= w * h;
    index++;

    let command="";

    while(command !== "STOP"){
        command=input[index];

        if(command === "STOP"){
            break;
        }

        let currentPease =Number(command);
        cakePeaces-=currentPease;

        if(cakePeaces<0){

            break;
        }


        index++;


    }

if(command === "STOP" && cakePeaces>0){
    console.log(`${cakePeaces} pieces are left.`)
}else{
    console.log(`No more cake left! You need ${Math.abs(cakePeaces)} pieces more.`)
}



}
