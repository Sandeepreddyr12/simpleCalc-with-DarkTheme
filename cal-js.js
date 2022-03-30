function gethistory(){
return document.getElementById("history-op").innerText;
}
function opgethistory(num){
document.getElementById("history-op").innerText=num;
}
function getresult(){
    return document.getElementById("result-op").innerText;
    }
    function opgetresult(num){
        if(num ==""){
            document.getElementById("result-op").innerText = num;
        }
        else{
            document.getElementById("result-op").innerText = formated(num);
        } 
        }
        function formated(num){
            if(num!=NaN){
            var n = Number(num);
            var value = n.toLocaleString("en");
            return value;
            }
        }
        function reverseformatnum(num){
            return Number(num.replace(/,/g, ''));
        }
        
        var operators = document.getElementsByClassName("operators");
        for(i=0;i<operators.length;i++){
            operators[i].addEventListener('click', function(){
                if(this.id == "clear"){
                    opgetresult("");
                    opgethistory("");
                }
                else if(this.id == "back-space"){
                    var output = reverseformatnum(getresult()).toString();
                    if(output){
                    output = output.substr(0, output.length-1);
                    if(output=="-"){
                        output = "";
                    }
                    opgetresult(output);
                    }
                    let history = gethistory();
                    let result = getresult();
                    if((history!=""&& result=="")){
                        if(history[history.length-1]){
                        history = history.substr(0, history.length-1)
                        opgethistory(history);
                        }
                    }
                }
                else{
                   let history = gethistory();
                    let result = getresult();
                    if((history!="" && result=="")){
                        if(isNaN(history[history.length-1])){
                        history = history.substr(0, history.length-1)
                        }
                    }
                    if(result != "" || history!=""){
                        result=result == ""?
                        result:reverseformatnum(result);
                    history = history + result;
                        if(this.id == "="){
                            var output = eval(history);
                            opgetresult(output);
                            opgethistory("");
                        }
                        else{
                            history = history+ this.id;
                            opgethistory(history);
                            opgetresult("");
                        }
                    }
                }
            })
        }

        var numbers = document.getElementsByClassName("numbers");
        for(i=0;i<numbers.length;i++){
            numbers[i].addEventListener('click', function(){  
                let output = reverseformatnum(getresult());;
                if(output!=NaN){
                output = output+this.id;
                opgetresult(output);
                console.log(getresult(output));
                }
            })
        }
        
        var bodybutton = document.body;
        var togglebutton = document.getElementById('toggleid');


        
        togglebutton.onclick = () => {
            togglebutton.classList.toggle('active');
            if(togglebutton.classList.contains('active')){
                bodybutton.classList.replace('light','dark');
            }
            else{
                bodybutton.classList.replace('dark', 'light');
            }
        }