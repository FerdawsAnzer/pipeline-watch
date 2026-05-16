import pytest # imports the testing framework.pytest is the tool that finds and runs all the test functions automatically
from fastapi.testclient import TestClient # imports a special client that FastAPI provides specifically for testing. It simulates HTTP requests without actually starting the server.
from app.main import app ## imports the FastAPI app that i craeted so teh testClient can send requests to it.

client = TestClient(app)# creates a fake browser  so teh client can send POST,GET,PUT requests to your endpoints

def test_valid_login():
    response = client.post("/auth/login", json={
        "email": "ferdaws@gmail.com",
        "password": "test1234"
    }) #sends a POST request to login endpoint with correct credentials that alraedy been stored in database
    assert response.status_code == 200 # checks teh response status is 200 which means success , if it's anything else test fails
    assert "access_token" in response.json() # checks teh response body that contains an access_token 


#Test Invalid-Login:
def test_invalid_login():
  # here i will send correct email butw rong password on purpose 
    response = client.post("/auth/login", json={
        "email": "ferdaws@gmail.com",
        "password": "wrongpassword"
    })
    assert response.status_code == 401 #cheks teh server correctly rejected it with 401 Unauthorized. This proves that login doesn accept wrong passwords

# Test Valid register:
# sends a register request with a new email taht doesn't exist in the databse yet .
def test_valid_register():
    response = client.post("/auth/register", json={
        "email": "testuser99@gmail.com",
        "password": "newpassword123"
    })
    assert response.status_code == 200 # checks registration succeeded 
    assert "email" in response.json() # checks teh response contains teh email field

# Test Duplicate Registration:
def test_duplicate_register():
  # Try to register with an email already existed in teh database
    response = client.post("/auth/register", json={
        "email": "ferdaws@gmail.com",
        "password": "test1234"
    })
    assert response.status_code == 400 # checks teh server correctly rejected it with 400 Bad reuest . and thsi proves that the email is already registered