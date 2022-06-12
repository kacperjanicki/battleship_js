const grid = document.querySelector('#grid')
for(let i=0;i<=10;i++){                         //create 10 rows
    var container=document.createElement('div')
    container.setAttribute('class','row')
    container.setAttribute('data',`${i+1}`)
    grid.appendChild(container)
}

const rows = document.querySelectorAll('.row')
rows.forEach( row=>{
    for(let i=0;i<=10;i++){                     //create 10 buttons in each row
        var btn = document.createElement('button')
        btn.setAttribute('data',`${i+1}`)
        row.appendChild(btn)
        btn.addEventListener('click',(e)=>{
            console.log(e.target)     //button clicked
            const parent_div = e.target.parentElement    //find parent div
            var divs=document.querySelectorAll('.row')
            divs.forEach(div=>{
                if(div.getAttribute('data')==parent_div.getAttribute('data')){
                    found_div = div
                }
            })

            var btns = document.querySelectorAll(`.row[data="${parent_div.getAttribute('data')}"] > button`)
            btns.forEach(button=>{
                var j=0;
                for(let i=e.target.getAttribute('data');i<=11; i++){
                    if(j<=4){
                        console.log(i)
                        if(button.getAttribute('data')==i){
                            button.classList.add('target')
                        }
                    }
                    j+=1
                    
                }

                button.getAttribute('data')
                
            })
        })
    }
} )

