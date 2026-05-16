def test_empty_email():
    response = client.post("/auth/login", json={
        "email": "",
        "password": "test1234"
    })
    assert response.status_code == 422

def test_empty_password():
    response = client.post("/auth/login", json={
        "email": "ferdaws@gmail.com",
        "password": ""
    })
    assert response.status_code == 422

def test_empty_both_fields():
    response = client.post("/auth/login", json={
        "email": "",
        "password": ""
    })
    assert response.status_code == 422

def test_invalid_email_format():
    response = client.post("/auth/login", json={
        "email": "notanemail",
        "password": "test1234"
    })
    assert response.status_code == 422

def test_very_long_password():
    response = client.post("/auth/login", json={
        "email": "ferdaws@gmail.com",
        "password": "a" * 500
    })
    assert response.status_code == 422

def test_missing_email_field():
    response = client.post("/auth/register", json={
        "password": "test1234"
    })
    assert response.status_code == 422

def test_missing_password_field():
    response = client.post("/auth/register", json={
        "email": "ferdaws@gmail.com"
    })
    assert response.status_code == 422

def test_email_with_spaces():
    response = client.post("/auth/register", json={
        "email": "fer daws@gmail.com",
        "password": "test1234"
    })
    assert response.status_code == 422