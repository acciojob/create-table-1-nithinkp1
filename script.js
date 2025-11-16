// let count = 0;
function insert_Row() {
	// count++;
            const table1 = document.getElementById("sampleTable")
            
            const tr = document.createElement("tr")

            const td1 = document.createElement("td")
            td1.innerText = `New Cell1`
            // count++;

            const td2 = document.createElement("td")
            td2.innerText = `New Cell2`

            tr.append(td1,td2)

            table1.prepend(tr)
	
    
  
  
}
