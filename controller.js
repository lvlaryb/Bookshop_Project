
const el  =document.getElementByClass(".table");
let tableToInject= ``;

Gdata.forEach(
    (book)=>{
        tableToInject+=`
            <div class="table-row>
                <p class="cell">${book.title}</p>
                <p class="cell">${book.author}</p> 
                <p class="cell">${book.price}</p> 
            </div>
        `
        
    }
)

console.log(tableToInject);



