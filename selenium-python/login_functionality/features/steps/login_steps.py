from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from time import sleep

def setup_driver(context):
    context.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    context.driver.maximize_window()

@given("the user is on the login page")
def step_impl(context):
    setup_driver(context)
    context.driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    sleep(2)
    context.driver.close()

@given("the user is logged in")
def step_impl(context):
    setup_driver(context)
    context.driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    sleep(2)
    context.driver.find_element(By.NAME, "username").send_keys("Admin")
    context.driver.find_element(By.NAME, "password").send_keys("admin123" + Keys.RETURN)
    sleep(3)

@when("the user enters valid credentials")
def step_impl(context):
    context.driver.find_element(By.NAME, "username").send_keys("Admin")
    context.driver.find_element(By.NAME, "password").send_keys("admin123" + Keys.RETURN)
    sleep(3)

@when("the user enters invalid credentials")
def step_impl(context):
    context.driver.find_element(By.NAME, "username").send_keys("aaaaaaa")
    context.driver.find_element(By.NAME, "password").send_keys("bbbbbbbbbbbbb" + Keys.RETURN)
    sleep(3)

@when("the user clicks logout")
def step_impl(context):
    context.driver.find_element(By.XPATH, "//i[contains(@class,'oxd-userdropdown-icon')]").click()
    sleep(1)
    context.driver.find_element(By.LINK_TEXT, "Logout").click()
    sleep(3)

@when("the user navigates to the dashboard")
def step_impl(context):
    context.driver.find_element(By.LINK_TEXT, "Dashboard").click()
    sleep(2)

@then("the user should be redirected to the dashboard")
def step_impl(context):
    assert "dashboard" in context.driver.current_url.lower()
    context.driver.quit()

@then("an error message should be displayed")
def step_impl(context):
    error_message = context.driver.find_element(By.CLASS_NAME, "oxd-alert-content-text").text
    assert "Invalid credentials" in error_message
    context.driver.quit()

@then("the user should be redirected to the login page")
def step_impl(context):
    assert "auth/login" in context.driver.current_url.lower()
    context.driver.quit()

@then("the dashboard should be displayed correctly")
def step_impl(context):
    assert "Dashboard" in context.driver.page_source
    context.driver.quit()
