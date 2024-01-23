// console.log(d);
document.getElementById("sub").addEventListener("click", (e) => {
  e.preventDefault();

  console.log("hello world");

  const d = document.getElementById("date").value;
  console.log(d);
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const d1 =new Date();
  const dnow = d1.getDate();
  const mnow = 1+d1.getMonth();
  const ynow = d1.getFullYear();
  const dmonth =[31,28,31,30,31,30,31,31,30,31,30,31]
  console.log(dcurrent);
  console.log(mnow);
  console.log(ynow);

  if(d>dnow){
 dnow = dnow+dmonth[dnow-1];
 mnow=mnow-1
  }
});
