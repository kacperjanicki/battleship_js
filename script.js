const grid = document.querySelector('#grid')
for(let i=0;i<=10;i++){                         //create 10 rows
    var container=document.createElement('div')
    container.setAttribute('class','row')
    container.setAttribute('data',`${i+1}`)
    grid.appendChild(container)
}


var ships={'Carrier':5,'Battleship':4,'Destroyer':3,'Submarine':3,'Patrol Boat':2}
console.table(ships)
var user_matrix = []
for(let i=0;i<=10;i++){
    user_matrix.push(['.','.','.','.','.','.','.','.','.','.','.'])
}


function board(){
    var click_count=-1;
    const rows = document.querySelectorAll('.row')
    rows.forEach( row=>{
        for(let i=0;i<=10;i++){                     //create 10 buttons in each row
            var btn = document.createElement('button')
            btn.setAttribute('data',`${i+1}`)
            row.appendChild(btn)
            btn.addEventListener('click',(e)=>{
                click_count+=1
                console.log(click_count)
                console.log(e.target)     //button clicked
                const parent_div = e.target.parentElement    //find parent div

                var divs=document.querySelectorAll('.row')
                divs.forEach(div=>{
                    if(div.getAttribute('data')==parent_div.getAttribute('data')){
                        found_div = div
                    }
                })

                place()

                function place(){
                    const eventlog = document.createElement('p')
                    eventlog.textContent = `you are now placing ${Object.keys(ships)[click_count]} (${ships[Object.keys(ships)[click_count]]})`
                    grid.appendChild(eventlog)

                    var btns = document.querySelectorAll(`.row[data="${parent_div.getAttribute('data')}"] > button`)
                    btns.forEach(button=>{
                        var j=0;
                        
                        for(let i=e.target.getAttribute('data');i<=11; i++){
                            if(j<ships[Object.keys(ships)[click_count]]){
                                if(button.getAttribute('data')==i){
                                    button.classList.add('target')
                                    user_matrix[parent_div.getAttribute('data')-1][i-1] = 'x'
                                }
                            }
                            
                            j+=1     
                        }
                    })
                    
                }    
                console.log(Array.from(user_matrix))
            })
        }
    } )
    
}
    
board()

