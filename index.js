var len=document.querySelectorAll(".btn").length;
for(var i=0;i<len;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
            console.log(this.innerHTML);
            var c = this.innerHTML;
            console.log(c+" has been pressed");
            if(c=='C'){
                clr();
            }
            else if(c=='='){
                result();
            }
            else {
                display(c);
            }
    });
}
for(var i=0;i<len;i++){
    document.querySelectorAll(".btn")[i].addEventListener("keypress",function(event){
            var c = event.key;
            console.log(c+" has been pressed");
            if(c=='C'){
                clr();
            }
            else if(c=='='){
                result();
            }
            else {
                display(c);
            }
    });
}
function clr(){
     document.querySelector("input").value="";
}
function result(){
    var str=document.querySelector("input").value;
    var len=str.length;
    console.log("the lenght is "+len);
    var opd1=0;
    var opd2=0;
    var cal,flag=0,res;
    for(i=0;i<len;i++){
            if(str[i]=='+'){
                cal='+';
                flag=1;
            }
            else if(str[i]=='-'){
                cal='-';
                flag=1;
            }
            else if(str[i]=='X'){
                cal='X';
                flag=1;
            }
            else if(str[i]=='/'){
                cal='/';
                flag=1;
            }
            else if(flag==0){
                opd1=opd1*10+parseInt(str[i]);
            }
            else {
                opd2=opd2*10+parseInt(str[i]);
            }
    }
    if(cal=='+'){
        res=opd1+opd2;
    }
    else  if(cal=='-'){
        res=opd1-opd2;
    }
    else  if(cal=='X'){
        res=opd1*opd2;
    }
    else  if(cal=='/'){
        res=opd1/opd2;
    }
    document.querySelector("input").value=res;

}
function display(char){
    document.querySelector("input").value= document.querySelector("input").value+char;
}