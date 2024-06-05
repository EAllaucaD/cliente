import { createClient } from "soap";


//endpoint references
const url = "http:/localhost:5000";

    createClient(url, function (err, client){
        if (err){
            console.error(err);
        }else {
            
            //Make soap request using client object
            const args = { intA: 20, intB: 3};
            client.Suma(args, function(err, result){
                if (err) {
                    console.error(err);
                }else {
                    console.log(result);
                }
            });
        }
    });