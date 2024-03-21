const searchName = (find, amount, callback) => {
    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ]
    find = find.toLowerCase();
    let result = [];
    let nameLen = 0;
    let findLen = find.length;
    console.log(`findLen ${findLen}`);
    let temp = "";
    for(let i of name){
        nameLen = i.length;
        console.log(`nameLen ${nameLen}`);
        if(result.length == amount){
            break;
        } else if(findLen < nameLen){
            for(let j=0; j<=i.length-findLen; j++){
                if(j == i.length-findLen){
                    break;
                }else{
                    temp = i.slice(j,j+findLen);
                    console.log(`temp ${temp}`);
                    if(find == temp.toLowerCase()){
                        result.push(i);
                        break;
                    }
                }
                
            }
        } else{
            if(find == i.toLowerCase()){
                result.push(i);
                continue;
            }
        }
    }
    callback(result);
}

const printHasil = (hasil) =>{
    console.log(hasil);
}

searchName("ol",3,printHasil);