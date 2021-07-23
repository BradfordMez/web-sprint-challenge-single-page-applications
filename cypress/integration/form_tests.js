describe('Form App',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput=()=>cy.get('input[name=name]')
    const sizeInput=()=>cy.get('select[name=pizzaSize]')
    const sauceInput=()=>cy.get('input[name=sauce]')
    

    it('Check for each field',()=>{
        nameInput().should("exist");
        sizeInput().should("exist");
        sauceInput().should("exist");
    })

    it('Inputs are typeable', ()=>{
        nameInput().should("have.value", "").type("Typeable Name").should("have.value", "Typeable Name");
        sizeInput().should("have.value", "").select("medium").should("have.value","medium");
        cy.get('button[name=button]').click()
    })


})