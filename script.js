// This variable is for manipulating the data when we get a successful request.
var jsonData = JSON.parse(data);
// Here is the get requests.
$.get("https://routes.googleapis.com" , function(data, status){

    if(status === "success") {
        console.log(data);
    } else{
        console.error("Error: " + status);
    }

});
//The "data" and "status" are placeholders until I look throught the different documentation and get together with my team and decide what data we will be sending request for.
$.get("https://api.petfinder.com/v2/types", function(data, status){

    if(status === "success") {
        console.log(data);
    } else{
        console.error("Error: " + status);
    }

})
// Remember to fill in the correct URLs, parameters, and data processing logic based on the API documentation and the different requiremenets that we have.