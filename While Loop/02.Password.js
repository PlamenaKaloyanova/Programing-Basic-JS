function password(input){
    let index=0;
    let name=input[index];
    index++;
    let password = input[index];
    index++;

    let command="";


    while(command !== password ){
        command=input[index];
        index++;
    }


console.log(`Welcome ${name}!`)


}
