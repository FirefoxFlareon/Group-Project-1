// This variable is for manipulating the data when we get a successful request.

var petAPI = "UmVWwKPzfv9io8hZanQhhe2T5CC3Ns1Bdf2F6JEevSuotzH35V";
var petURL = "https://api.petfinder.com/v2/animals/";
var petAccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJVbVZXd0tQemZ2OWlvOGhaYW5RaGhlMlQ1Q0MzTnMxQmRmMkY2SkVldlN1b3R6SDM1ViIsImp0aSI6IjdhOGE5ZjkzNzg2NjMzNTk2MjVjYTI4ZjExZmUxOThiOWFhNmQzMzI4ZTA5OWRhZTUyYTlkNWZmZWRlNDE4MDJlODNlZTk3MTdkYmM1MTk5IiwiaWF0IjoxNjk3NTAzNTQ5LCJuYmYiOjE2OTc1MDM1NDksImV4cCI6MTY5NzUwNzE0OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.hQX2kC9lqtRXV3MYbMJkJdS7cBNJCgkLFkfpIfB-iQnKXMDY7wMahfxLBsoCzGQmGuAjHRYriNSSVhLMQ77NJW2LdS6W1HQdUaRsP2T5ccefWg9eevd5_WTDrDXaRU-B6Sv55ToLedc84mASBl9ywhsrdD7l9CU-ICHhwfIov0Uuyw3arvEAcB5v2b4M-CcBPo59YjxSwZ8hbDfv0wxymNFcojVNA4PO5XIsRLCQGERepsuJv3DsXi6BEpuMOFKjHeaK-CCfH7OntqNFPxkC7BSnbm3tC7K0iTmQOvet9HndTtALl9czGzBdsEzOR02NNYF1GNOJsT0qbXdq_B8oEA"
// Here is the get requests.
// Here are the docs : https://www.petfinder.com/developers/v2/docs/
getPets();
function getPets() {
    fetch(petURL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${petAccessToken}`
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Request failed with status: ' + response.status);
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error.message);
    });
}
// Remember to fill in the correct URLs, parameters, and data processing logic based on the API documentation and the different requiremenets that we have.