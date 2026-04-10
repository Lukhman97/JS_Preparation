function fun(a,b,c){
   
    if(a==13 || b==13 || c==13){
        return "There is no sum"
    }
    else if(a==13){
            return 0
    }
    else if (b==13){
        return a
    }
}
console.log(fun(12,13,4))