// console.log(d);
document.getElementById("sub").addEventListener("click", (e) => {
  e.preventDefault();

  console.log("hello world");

  let d = document.getElementById("date").value;
  console.log(d);
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  let d1 =new Date();
  let dnow = d1.getDate();
  let mnow = 1+d1.getMonth();
  let ynow = d1.getFullYear();
  let dmonth =[31,28,31,30,31,30,31,31,30,31,30,31]
//   console.log(dcurrent);
  console.log(mnow);
  console.log(ynow);

  if(d>dnow){
 dnow = dnow+dmonth[dnow-1];
 mnow=mnow-1
  }

  if(month>mnow){
    mnow = mnow+12;
    ynow = ynow-1;
  }
  var d3 = dnow-d;
  var y =ynow-year;
  var m = mnow-month;

  document.getElementById("age").innerHTML="you are "+" "+y+" "+" years"+""+m + ""+" months "+d3+" days";

  console.log();

});
