import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

describe('Orange HRM Tests', () => {

const loginPage = new LoginPage
const dashboard = new DashboardPage
const menuPage = new MenuPage
const myInfoPage = new MyInfoPage

    it('User Info Update - Success', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
      dashboard.checkDashboardPage()
    
      menuPage.accessMyInfo()
    
      myInfoPage.fillPersonalDetails("First Name", "Middle Name", "Last Name")
      myInfoPage.fillEmployeeDetails("12345", "54321", "12345", "2025-03-10")
      myInfoPage.fillStatus()
      myInfoPage.saveForm()
      
    })

    it('Login Fail,', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
    })


})