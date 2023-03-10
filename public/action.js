

function Weight_Check(){
  const Weight = document.querySelectorAll(".WeightItem input[name='group1']:checked");
  const WeightCotent = document.getElementById("value");
  let value = 0;
  if(Weight.length >0){
    value = Weight[0].value;
  }
  
  
  
  WeightCotent.innerText = value;
}