client.name // dot - jab key pata ho
client["name"] // bracket - jab key dynamic ho
client["first name"] // space wali key ke liye bracket hi lagega



//OBJECT KO LOOP ME CONVERT KARNE KE LIYE CLASS BANATE HAI

for (let key in client){
    console.log(key, client[key]);
}

//or

Object.keys(client)
Object.values(client)   
Object.entries(client) // ye array of array return karega


//THIS----- CURRENT OBJECT KO REFER KARTA HAI 

let obj = {name: "saurabh", getName:function(){return this.name}}