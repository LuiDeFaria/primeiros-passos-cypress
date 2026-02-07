class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericdField: ".oxd-input--active", 
            dateCloseButton: ".--close",
            saveButton: "[type='submit']",
            confirmationAlert: "('.oxd-toast-close')",
            choosingArrow: ".oxd-select-text--arrow",
            maritalStatusArrow: ".oxd-select-text--arrow",
            nationalityOption: ":nth-child(8) > span",
            maritalStatusOption: ":nth-child(4) > span",

        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicense, driversLicenseDate) {
        cy.get(this.selectorsList().genericdField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericdField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericdField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericdField).eq(6).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveButton() {
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }

    fillStatus() {
        cy.get(this.selectorsList().choosingArrow).eq(0).click()
        cy.get(this.selectorsList().nationalityOption).click()
        cy.get(this.selectorsList().choosingArrow).eq(1).click()
        cy.get(this.selectorsList().maritalStatusOption).click({ force: true })
    }

}

export default MyInfoPage