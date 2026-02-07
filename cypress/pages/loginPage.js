class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: ".oxd-alert-content-text",
        }

        return selectors
    } 

    accessLoginPage() {
        cy.visit('auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    } 

    loginFail() {
        // cy.get('body').should('contain', 'Invalid credentials')
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage