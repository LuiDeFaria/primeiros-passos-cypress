class MenuPage {
    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']"
        }
        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    } 

    accessAdminPage() {
        cy.get(this.selectorsList().adminButton).click()
    }

    accessPimPage() {
        cy.get(this.selectorsList().pimButton).click()
    }

    accessRecruitmentPage() {
        cy.get(this.selectorsList().recruitmentButton).click()
    }

}

export default MenuPage