import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const loginPage = new LoginPage
const dashboard = new DashboardPage
const menuPage = new MenuPage
const myInfoPage = new MyInfoPage
const chance = new Chance()
  

describe('Orange HRM Tests', () => {

    it('User Info Update - Success', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
      dashboard.checkDashboardPage()
    
      menuPage.accessMyInfo()
    
      myInfoPage.fillPersonalDetails(chance.first(), "Middle Name", chance.last())
      myInfoPage.fillEmployeeDetails("12345", "54321", "12345", "2025-03-10")
      myInfoPage.fillStatus()
      myInfoPage.saveForm()
      
    })
})