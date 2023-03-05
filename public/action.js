


const rows = document.querySelectorAll("tbody tr");
console.log(rows);



rows.forEach(row=>{
  row.addEventListener("click",()=>{
    console.log(row.cells[0].textContent);
  });

});


