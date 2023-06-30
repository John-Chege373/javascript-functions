//A javascript function thats invokes a message after 2 seconds
function invokingMessage (callback){

   setTimeout(callback,2000)
}
function displayMessage(){
    console.log("Hello John");
}
invokingMessage(displayMessage);