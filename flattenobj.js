// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function objflat(obj,pr="",res={}){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            const newkey = pr?`${pr}.${key}`:key
            if(typeof obj[key]=='object'&& obj[key]!=undefined){
                objflat(obj[key],newkey,res)
            }
            else{
                res[newkey]=obj[key]
            }
        }
    }
    return res
    
}
var z= {a:1,
b:{c:{d:1}}}
console.log(objflat(z));
