class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericField: ".oxd-input--active", 
            dateCloseButton: ".--close",
            saveButton: "[type='submit']",
            confirmationAlert: ".oxd-toast-close",
            middleNameField: "[name='middleName']",
            selectionArrow: ".oxd-select-text--arrow",
            thirdItemCombobox: ':nth-child(4) > span',
            fourthItemCombobox: ':nth-child(4) > span'

        }
        return selectors
    }


    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }    

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, driversLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }        
        
    saveForm() {
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get(this.selectorsList().confirmationAlert)
        cy.get('body').should('contain', 'Successfully Updated')
        
    }

    fillStatus() {
        cy.get(this.selectorsList().selectionArrow).eq(0).click()
        cy.get(this.selectorsList().thirdItemCombobox).click()
        cy.get(this.selectorsList().selectionArrow).eq(1).click()
        cy.get(this.selectorsList().fourthItemCombobox).click()
    }

}

export default MyInfoPage