window.onload() = function(){
    const input = document.getElementsByTagName("input")[0];
    const button = document.getElementById("startBtn");
    const resultArr = ["UP⬆️", "DOWN⬇️", "CORRECT!🥳" ]
    let result = document.querySelector(".result");
    //let randomNum = Math.ceil(Math.random( * 50 ))

    button.addEventListener("click", function(){
      alert(1)
        //  resultFunc();
    });
    
    // function resultFunc() {
    //     let num = input.value;
    //     if(num < randomNum){
    //         result.innerHTML = resultArr[0];
    //     } else if (num > randomNum){
    //         result.innerHTML = resultArr[1];
    //     } else{
    //         result.innerHTML = resultArr[2];
    //     }
    // };
}