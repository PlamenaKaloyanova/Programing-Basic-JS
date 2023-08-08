function oldBooks(input){

    let index=0;
    let favoriteBook=input[index];
    index++;

    let command="";
    let countBooks=0;
    let currentBook="";

    while(command !== "No More Books"){
        command=input[index];

        if(command === "No More Books"){
    
            break;
        }

        currentBook=command;
       

        if(currentBook === favoriteBook){
            break;
        }

        countBooks++;

        index++;

    }
    if(currentBook === favoriteBook){
        console.log(`You checked ${countBooks} books and found it.`)
    }else{
        console.log("The book you search is not here!");
        console.log(`You checked ${countBooks} books.`)
    }





}
