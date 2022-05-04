function solve(obj){

    let keys = Object.keys(obj);

    //checking if all properties are present
    if(keys[0] != "method"){
        throw new Error(`Invalid request header: Invalid Method`);
    } else if (keys[1] != "uri"){
        throw new Error(`Invalid request header: Invalid URI`);
    } else if (keys[2] != "version"){
        throw new Error(`Invalid request header: Invalid Version`);
    } else if (keys[3] != "message"){
        throw new Error(`Invalid request header: Invalid Message`);
    }

    //validating method
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    if (!validMethods.includes(obj.method)){
        throw new Error(`Invalid request header: Invalid Method`);
    }

    //validating uri
    let pattern = /^[A-Za-z0-9.]+$/g;
    let matches = obj.uri.match(pattern);
    if (obj.uri != '*' && !matches){
         throw new Error(`Invalid request header: Invalid URI`);
    }

    //validating version
    let validVersions = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`];
    if(!validVersions.includes(obj.version)){
        throw new Error(`Invalid request header: Invalid Version`);
    }

    //validating message
    let messagePattern = /^[^<>\\\&'"]*$/g;
    let messageMatches = obj.message.match(messagePattern);
    if (!messageMatches && obj.message != ""){
        throw new Error(`Invalid request header: Invalid Message`);
    }

    //if valid, return object
    return obj;

}
