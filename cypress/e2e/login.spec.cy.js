import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login Orange HRM Tests', () => {

it('Login error', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
  loginPage.loginFail()

  })

  it('Login success', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  dashboardPage.checkDashboardPage()
})

})