function check(str , list){
    if (str === ""){return false}
    else{
        for (i = 0 ; i < str.length ; i++){
            if (! list.includes(str[i])){
                return false
            }
            return true
        }
    }
}

function verifemail(){
    var email = document.form1.email.value;
    if (!email.includes("@")){
        msg("- x - '@' wasn't found")
        return false
    }
    else{
        var el = email.split("@");
        if (!el[1].includes(".")){
            msg("- x - Invalid Domain");
            return false}
        else{
            var p = el[1].split(".")
            
            ///list with elements from 0-9 a-z A-Z
            const l0 = ["0", "1", "2" , "3" , "4" , "5" , "6" , "7" , "8", "9" , 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            const l1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            if (el[0] === ""){
                msg("- x - Invalid prefix")
                return false
            }
            else{
                if (check(p[0] , l0) && check(p[1] , l1)){
                    msg("Valid Format")
                    return true
                }
                else{
                    msg("- x - Invalid Domain")
                    return false
                }   
            } 
        }
    }  
}
function msg(str){
    document.getElementById("msg").innerHTML = str;
    if (str.includes("- x -")){
        document.getElementById("msg").style.color = "red";
    }
    else{
        document.getElementById("msg").style.color = "green";
    }
}
