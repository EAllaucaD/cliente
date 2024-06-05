import { createClient } from "soap";


//endpoint references
const url = "  http://127.0.0.1:4040 ";

    createClient(url, function (err, client){
        if (err){
            console.error(err);
        }else {
            
            //Make soap request using client object
            const args = { intA: 20, intB: 20};
            client.CalculatorPortType(args, function(err, result){
                if (err) {
                    console.error(err);
                }else {
                    console.log(result);
                }
            });
        }
    });