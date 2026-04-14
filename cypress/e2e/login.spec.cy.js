import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage.js'
import LoginPage from '../pages/loginPage.js'


describe('Login Orange HRM Tests', () => {

const loginPage = new LoginPage
const dashboard = new DashboardPage

    it('Login Success', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      dashboard.checkDashboardPage()
    })

    it('Login Fail', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
    })

})