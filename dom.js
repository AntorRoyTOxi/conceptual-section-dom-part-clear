const allBtn = document.getElementsByClassName("all-btn");
for (const btn of allBtn) {
  btn.addEventListener(
    "click",
    function (event) {
      const name = event.target.parentNode.parentNode.childNodes[1].innerText;
      const prize =
        event.target.parentNode.parentNode.childNodes[3].childNodes[1]
          .innerText;
      const category =
        event.target.parentNode.parentNode.childNodes[5].childNodes[1]
          .innerText;

    //     button disable kora niyom 
          
            

      if(getConvertedValue('left')===0 || getConvertedValue('cart')+1 < 0){
         alert('Your Limit Finish'); 
          return;

         
      };
      event.target.setAttribute('disabled',false);
      event.target.parentNode.parentNode.parentNode.style.backgroundColor='gray';



         
      // this is budget loss
      const budgetLoss = getConvertedValue("budget");
    document.getElementById("budget").innerText = budgetLoss - prize;

      //     this cart count
          const cartAdd=getConvertedValue('cart'); 
           document.getElementById('cart').innerText=cartAdd+1;
            
        //     left value 
           const leftValue=getConvertedValue('left'); 
            document.getElementById('left').innerText=leftValue-1;
           

      const sectorPlayerContainer = document.getElementById(
        "sector-player-container"
      );
      const div = document.createElement("div");
      div.classList.add("flex");
      div.classList.add("justify-between");
      div.classList.add("font-bold");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      p1.innerText = name;
      p2.innerText = prize;
      p3.innerText = category;
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      sectorPlayerContainer.appendChild(div);
      updateTotalCost(prize);
      updateGrandTotal();
    },
    { once: true }
  );
}

function updateTotalCost(value) {
  const totalCost = getConvertedValue("total-cost");
  const getTotalCost = totalCost + parseInt(value);
  document.getElementById("total-cost").innerText = getTotalCost;
}
function updateGrandTotal(status) {
  if (status === undefined) {
    const totalCost = getConvertedValue("total-cost");
    document.getElementById("grand-total").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("input").value;
    if (couponCode === "Love") {
      const totalCost = getConvertedValue("total-cost");
      const result = (totalCost * 20) / 100;
      const finalResult = totalCost - result;
      document.getElementById("grand-total").innerText = finalResult;
    } else {
      alert("Please Inter Your Valid Code");
    }
  }
}

function getConvertedValue(id) {
  const prize = document.getElementById(id).innerText;
  const convert = parseInt(prize);

  return convert;
}
//   this is apply btn click
//   function getBtn(){
//      const resultApply=document.getElementById('input').value;
//         //  console.log(resultApply);
//          if(resultApply==='21feb'){
//          const resultTotalCost=   getConvertedValue('total-cost');
//                    const totalCostResult=resultTotalCost*20/100;
//                       const finalResult=resultTotalCost-totalCostResult;

//                         document.getElementById('grand-total').innerText=finalResult;

//          }
//           else{
//              alert('Opps! Plz you right code push');
//           }
//   }
