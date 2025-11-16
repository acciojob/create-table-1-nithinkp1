let count = 0;
function insert_Row() {
	count++;
            const table1 = document.getElementById("sampleTable")
            
            const tr = document.createElement("tr")

            const td1 = document.createElement("td")
            td1.innerText = `New Cell${count}`
            count++;

            const td2 = document.createElement("td")
            td2.innerText = `New Cell${count}`

            tr.append(td1,td2)

            table1.prepend(tr)
	
    it('inserts a new row at top', () => {
  cy.get('#insertBtn').click();   // whatever triggers insert_Row()

  cy.get('#sampleTable tr')
    .first()
    .within(() => {
      cy.get('td').eq(0).should('have.text', 'New Cell1');
      cy.get('td').eq(1).should('have.text', 'New Cell2');
    });
});

  
  
}
