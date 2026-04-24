const p1 = new Promise(resolve ,reject);
const saveToDB = function(data){
    const speed = Math.floor(Math.random()*10+1);
    return new Promise(resolve ,reject){
        if(speed>5){
            resolve();
        }
        else{
            reject();
        }
    }
}

const p2 = saveToBB("abc");
p2.then(()=>{console.log("data saved");}).catch(()=>{console.log("data not saved");}).finally();


