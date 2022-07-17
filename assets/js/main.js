let data = document.getElementById('data');
const val1 = document.getElementById("shedA");
const val2 = document.getElementById("shedB");
const val3 = document.getElementById("shedC");
const val4 = document.getElementById("shedD");
data.addEventListener('submit',dailystats);

    function dailystats(e){
        e.preventDefault();  
        let res=parseFloat(val1.value)+parseFloat(val2.value)+parseFloat(val3.value)+parseFloat(val4.value);

             console.log(res);
             console.log("      ");
             document.getElementById('heading').innerHTML="Todays Collection";
             document.getElementById('thleft').innerHTML=" Shed ";
             document.getElementById('thright').innerHTML="NO. of Lt";                 
             document.getElementById('shed1').innerHTML=" A ";
             document.getElementById('shed1val').innerHTML=val1.value;
             document.getElementById('shed2').innerHTML=" B ";
             document.getElementById('shed2val').innerHTML=val2.value;
             document.getElementById('shed3').innerHTML=" C ";
             document.getElementById('shed3val').innerHTML=val3.value;
             document.getElementById('shed4').innerHTML=" D ";
             document.getElementById('shed4val').innerHTML=val4.value;
             document.getElementById('allsheds').innerHTML=" Totals ";
             document.getElementById('totalsheds').innerHTML=res;
    }
