import pytest # imports the testing framework.pytest is the tool that finds and runs all the test functions automatically
from fastapi.testclient import TestClient # imports a special client that FastAPI provides specifically for testing. It simulates HTTP requests without actually starting the server.
from app.main import app ## imports the FastAPI app that i craeted so teh testClient can send requests to it.

client = TestClient(app)# creates a fake browser  so teh client can send POST,GET,PUT requests to your endpoints
# edge Case tests for auth endpoints

def test_empty_email():
  # sends an empty string as email .Pydantic sees reject it before it even reaches your endpoint.Expected 422
    response = client.post("/auth/login", json={
        "email": "",
        "password": "test1234"
    })
    assert response.status_code == 422 # Expected 422 as response 
# Sends empty password to chekc what can happen 
def test_empty_password():
    response = client.post("/auth/login", json={
        "email": "ferdaws@gmail.com",
        "password": ""
    })
    assert response.status_code == 401
# Sends both empty email and password  at the same time.
def test_empty_both_fields():
    response = client.post("/auth/login", json={
        "email": "",
        "password": ""
    })
    assert response.status_code == 422
# test with invalid email format to chekc if the server correctly rejects it 
def test_invalid_email_format():
    response = client.post("/auth/login", json={
        "email": "notanemail",
        "password": "test1234"
    })
    assert response.status_code == 422
# try test with a very long password to see teh server can handle it or no and if it correctly reject it if it exceeds any length Limit , we need to set a limit on password length
def test_very_long_password():
    response = client.post("/auth/login", json={
        "email": "ferdaws@gmail.com",
        "password": "a" * 500 #  this line creates a string of 500 letters 'a'to simulate a very long password to see hwta can happen 
    })
    assert response.status_code == 401
# Sends the reuest body without teh email field at all , not empty completly missing
def test_missing_email_field():
    response = client.post("/auth/register", json={
        "password": "test1234"
    })
    assert response.status_code == 422
# Sends the reuest body without teh password field at all , not empty completly missing
def test_missing_password_field():
    response = client.post("/auth/register", json={
        "email": "ferdaws@gmail.com"
    })
    assert response.status_code == 422
# test send email with a space in teh middle.Not a valid eamil format 
def test_email_with_spaces():
    response = client.post("/auth/register", json={
        "email": "fer daws@gmail.com",
        "password": "test1234"
    })
    assert response.status_code == 422