var maxValInATM=451;
var amountvalInATM;
var valPerCoins = [6, 9, 5, 12, 12];
var countinputAMT50;
var countinputAMT10;
var countinputAMT5;
var countinputAMT2;
var countinputAMT1;

// var momentValueInATM; 
var addValueInATM;
var limitOutput;
function numOfcoins() {

    var index = 0;
    var valueOfmoney;
    var coins = [50, 10, 5, 2, 1];
   
    var table = [];
    var vomCount = 0;
    var modOfValue = 0;
    var tottalCoins = 0;
    var valOfMoney = 0;
   

    var valueOfmoney = parseInt(document.getElementById("nlbinputVal").value);
    if (isNaN(valueOfmoney)) {
        alert("Pleace enter real values");
        document.getElementById("nlbinputVal").value = "";
        return;
    };
    for (var i = 0; i < coins.length; i++) {

        valOfMoney += coins[i] * valPerCoins[i];
        
    }
     if(valueOfmoney > limitOutput){
         alert("Max imit that you can take out is " + limitOutput );
         return;
     }
    //console.log(valOfMoney);
     if (maxValInATM <= valueOfmoney) {
       
        alert(" ATM is empty");
      
        document.getElementById("nlbinputVal").value = "";
         valueOfmoney = "";
         document.getElementById("questionForATM").style.display = "block";
         document.getElementById("nlbInputContainer").style.display = "none";
         return;

     };
  

    while (valueOfmoney != 0) {

        vomCount = parseInt(valueOfmoney / coins[index]);
        modOfValue = valueOfmoney % coins[index];

        if (vomCount >= valPerCoins[index]) {

            tottalCoins += valPerCoins[index];
            valueOfmoney -= coins[index] * valPerCoins[index];
            //push in array 
            table.push([valPerCoins[index], coins[index]]);
            valPerCoins[index]=0;
            
        }
        else {
            tottalCoins += vomCount;
            valueOfmoney = modOfValue;
            table.push([vomCount, coins[index]]);
            valPerCoins[index]-=parseInt(vomCount);

        }
        index++;
        document.getElementById("resaltTransaction").style.display = "block";
        document.getElementById("resultOfmoney").innerHTML = "The smalest coins for enterd value is  " + tottalCoins +  "<br/>" + "You take out : ";
        document.getElementById("submit").style.display = "none";
        document.getElementById("nlbinputVal").style.display = "none";
        document.getElementById("anotherTransition").style.display="inline-block";
      //  momentValueInATM=valueOfmoney;
       // return;
     };

    //put in array values for retriving numbers of coins used for transaction
    function displayMoney() {

        for (var a = 0; a < table.length; a++) {
            var row = table[a];
            var cauntCoin = row[0];
            var bancnote = row[1];


            document.getElementById("mytable").innerHTML += "<br/>" + cauntCoin + " coins " + bancnote + " denari " + "<br/>";

        }

    }
    
    displayMoney(table);
    function amountInATM() {

               

        amountvalInATM = maxValInATM - document.getElementById("nlbinputVal").value;
        document.getElementById("valueInATM").innerHTML = "There are " + amountvalInATM + "  denars left in the ATM " + "</br>";
        maxValInATM = amountvalInATM;    
        momentValueInATM=maxValInATM + parseInt(document.getElementById("nlbinputVal").value);
        document.getElementById("nlbinputVal").value = "";
        if (maxValInATM < 1) {
            alert("The ATM is Empty");
            document.getElementById("questionForATM").style.display = "block";
            document.getElementById("nlbInputContainer").style.display = "none";
           // maxValInATM=amountvalInATM + valueOfmoney;
           return;
        };
    }
    amountInATM();
   
}

//   enter values in mu money array and limit to 1000 pcs
function fill50AMT() {
    var inputAMT50 = parseInt(document.getElementById("inputFor50Coin").value);
    if (inputAMT50 < 0 || isNaN(inputAMT50))    {
        document.getElementById("inputFor50Coin").value="";
        alert("Enter valide value");
        return;
    }
  else  if (inputAMT50 > 1000 || (inputAMT50+parseInt(valPerCoins[0])) > 1000) {
        alert("You can not enter more than 1000 coins");
        document.getElementById("inputFor50Coin").value="";
        return;
    }
    else {
    
   
    valPerCoins[0] += inputAMT50;
    countinputAMT50=inputAMT50;
    document.getElementById("submit50").style.display="none";
    document.getElementById("submit10").style.display="inline-block";
   
    };
}
// input for atm10
function fill10AMT() {
    var inputAMT10 = parseInt(document.getElementById("inputFor10Coin").value);
    if (inputAMT10 < 0 || isNaN(inputAMT10)){ 
        document.getElementById("inputFor10Coin").value="";
        alert("Enter valide value");
        return;
    }
   else if (inputAMT10 > 1000 || (inputAMT10+parseInt(valPerCoins[1])) > 1000) {
        alert("You can not enter more than 1000 coins");
        document.getElementById("inputFor10Coin").value="";
        return;
    }
    else{
    
    valPerCoins[1] += inputAMT10;
    countinputAMT10=inputAMT10;
    document.getElementById("submit10").style.display="none";
    document.getElementById("submit5").style.display="inline-block";
   
    };
}


function fill5AMT() {
    var inputAMT5 = parseInt(document.getElementById("inputFor5Coin").value);
    if (inputAMT5 < 0 || isNaN(inputAMT5)){ 
        document.getElementById("inputFor5Coin").value="";
        alert("Enter valide value");
        return;
    }
  else  if (inputAMT5 > 1000 || (inputAMT5+parseInt(valPerCoins[2])) > 1000) {
        alert("You can not enter more than 1000 coins");
        document.getElementById("inputFor5Coin").value="";
        return;
    }
    else{
    valPerCoins[2] += inputAMT5;
    countinputAMT5=inputAMT5;
    document.getElementById("submit5").style.display="none";
    document.getElementById("submit2").style.display="inline-block";
   
    }
}

function fill2AMT() {
    var inputAMT2 = parseInt(document.getElementById("inputFor2Coin").value);
    if (inputAMT2 < 0 || isNaN(inputAMT2)){ 
        document.getElementById("inputFor2Coin").value="";
        alert("Enter valide value");
        return;
    }
   else if (inputAMT2 > 1000 || (inputAMT2+parseInt(valPerCoins[3])) > 1000) {
        alert("You can not enter more than 1000 coins");
        document.getElementById("inputFor2Coin").value="";
        return;
    }
    else{
    valPerCoins[3] += inputAMT2;
    countinputAMT2=inputAMT2;
    document.getElementById("submit2").style.display="none";
    document.getElementById("submit1").style.display="inline-block";
    
    }
};
function fill1AMT() {
    
    
    var inputAMT1 = parseInt(document.getElementById("inputFor1Coin").value);
    if (inputAMT1 < 0 || isNaN(inputAMT1)){
        document.getElementById("inputFor1Coin").value="";
        alert("Enter valide value");
        return;
    }
   else if (inputAMT1 > 1000 || (inputAMT1+parseInt(valPerCoins[4])) > 1000 ) {
        alert("You can not enter more than 1000 coins");
        document.getElementById("inputFor1Coin").value="";
        return;
    }
    else {
    valPerCoins[4] += inputAMT1;
    addValueInATM=parseInt((countinputAMT50)*50+(countinputAMT10)*10+(countinputAMT5)*5+(countinputAMT2)*2+parseInt(inputAMT1)*1); 
    maxValInATM+=addValueInATM;
    document.getElementById("addedValueInATM").innerHTML="You have added " + addValueInATM + " denars in the ATM" + "</br>" + "ATM moment value is " + maxValInATM;
    document.getElementById("inputFor1Coin").value=""; 
    document.getElementById("repeatTransactionForFill").style.display="block";
    document.getElementById("inputFor50Coin").value="";
    document.getElementById("inputFor10Coin").value="";
    document.getElementById("inputFor5Coin").value="";
    document.getElementById("inputFor2Coin").value="";
    document.getElementById("submit1").style.display="none";
    }
};

//another transition if I want
function anotherTransaction(){

    var addMoneyRadio=document.getElementById("boxCheckedForTransaction").checked;
    var resumeTranastion=document.getElementById("boxNotCheckedForTransaction").checked;

    if (addMoneyRadio!=0){
      //  alert("hi");
     document.getElementById("submit50").style.display="inline-block";
      document.getElementById("repeatTransactionForFill").style.display="none";
      document.getElementById("addedValueInATM").innerHTML="";
    }
    else if  (resumeTranastion!=0)   {
        document.getElementById("inputForMaxAmount").style.display="block";
        document.getElementById("repeatTransactionForFill").style.display="none"
        document.getElementById("addedValueInATM").innerHTML="";
    };
}

//     promision to add limit value and if i dont want to submit 
      function  limitAmountShow(){

           var boxChecked= document.getElementById("boxChecked").checked;
           var boxNoChecked=document.getElementById("boxNotChecked").checked;
          
             if (boxChecked!= 0){
        
                 document.getElementById("enterLimmitAmount").style.display = "block";
                 document.getElementById("inputForMaxAmount").style.display = "none";
               
             }
              else if ( boxNoChecked!=0){
            document.getElementById("enterCoinsinATM").style.display="none";
            document.getElementById("nlbInputContainer").style.display="block";
            document.getElementById("submit50").style.display = "inline-block";
            document.getElementById("enterLimmitAmount").style.display = "none";
            document.getElementById("inputForMaxAmount").style.display = "none";
            
            inputForMaxAmount
            limitOutput=1000000000;
         }
    };
function limitAmount() {

   // to limit amount of ATM output
    var imputLimitMaxAmount = parseInt(document.getElementById("maxExitAmount").value);
    
        limitOutput = imputLimitMaxAmount;
        document.getElementById("enterCoinsinATM").style.display = "none";
        document.getElementById("nlbInputContainer").style.display = "block";
        document.getElementById("enterLimmitAmount").style.display = "none";
        document.getElementById("submit50").style.display = "inline-block";
       
}

// Cisto da probam jquery
    $(document).ready(function () {
       
        $("#nlbContainer").click(function () {
            $("#nlbInput").show();
        });

        $('#submitTtansition').click(function  () {
            $('#submit').show();
            $('#resaltTransaction').hide();
            $('#nlbinputVal').show();
            $('#anotherTransition').hide();
         //   $('#myTableArry').hide();
            document.getElementById("mytable").innerHTML = "";
            return;
        });

        $('#NosubmitTtansition').click(function(){
            $('#nlbInput').hide();
          $('#submit').show();
          $('#resaltTransaction').hide();
          $('#nlbinputVal').show();
          $('#anotherTransition').hide();
          document.getElementById("mytable").innerHTML = ""; 
             
         });

        $('#submitreffel').click(function () {
            $('#enterCoinsinATM').show();
            $('#questionForATM').hide();
         });
      
        
    });
