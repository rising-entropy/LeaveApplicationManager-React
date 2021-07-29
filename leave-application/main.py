from fastapi import FastAPI, File, UploadFile, Response, Header
from fastapi.responses import FileResponse, RedirectResponse
from typing import Optional
from deta import Deta
from pydantic import BaseModel
import hashlib
import jwt
import uuid
import json
from datetime import datetime, timedelta
from fastapi import File, UploadFile
from fastapi.responses import HTMLResponse, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import time

# pydantic to declare body of put or post
app = FastAPI()
a = "c069qvmp_eLJwBonHZrZxvFF"
deta = Deta(a+"qEuHpyf9r4PWMWkWK")

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def validateToken(token):
    try:
        validation = jwt.decode(token, 'AlvaroMorata', algorithms="HS256")
        return True
    except:
        return False


@app.get("/")
def read_root():
    return {"message": "Let's get Started"}

class User(BaseModel):
    fName: str
    lName: str
    username: str
    email: str
    password: str
    company: str
    position: str
    department: str

@app.post("/api/signup")
def signup(user: User):
    
    userdb = deta.Base("User")
    
    #hash the password
    user.password = hashlib.sha256(user.password.encode()).hexdigest()
    
    createUser = {
        "fName": user.fName,
        "lName": user.lName,
        "username": user.username,
        "email": user.email,
        "company": user.company,
        "position": user.position,
        "department": user.department,
        "password": user.password
    }
    
    try:
        newuser = userdb.insert(createUser, user.username)
    except:
        return({
            "status": 409,
            "message": "User already exists."
        })
        
    JWT_SECRET = 'AlvaroMorata'
    JWT_ALGORITHM = 'HS256'
    JWT_EXP_DELTA_SECONDS = 2628000
    payload = {'exp': datetime.utcnow() + timedelta(seconds=JWT_EXP_DELTA_SECONDS)}        
    jwt_token = jwt.encode(payload, JWT_SECRET, JWT_ALGORITHM)
    
    return({
        "status": 201,
        "message": "User created successfully.",
        "token": jwt_token,
        "key": user.username,
        "fName": user.fName,
        "lName": user.lName,
        "username": user.username,
        "email": user.email,
        "company": user.company,
        "position": user.position,
        "department": user.department
    })
    
class Login(BaseModel):
    username: str
    password: str
    
@app.post("/api/login")
def loginUser(login: Login):
    username = login.username
    password = login.password
    hashedPassword = hashlib.sha256(login.password.encode()).hexdigest()
    userdb = deta.Base("User")
    
    #check if username exists
    theUser = userdb.fetch({"username": username})
    if theUser._count == 0:
        return({
            "status": 404,
            "message": "Username does not exist."
        })
    theUser = theUser._items[0]
    
    #check password
    if theUser['password'] != hashedPassword:
        return({
            "status": 403,
            "message": "Password does not match."
        })
        
    #generate token
    JWT_SECRET = 'AlvaroMorata'
    JWT_ALGORITHM = 'HS256'
    JWT_EXP_DELTA_SECONDS = 2628000
    payload = {'exp': datetime.utcnow() + timedelta(seconds=JWT_EXP_DELTA_SECONDS)}        
    jwt_token = jwt.encode(payload, JWT_SECRET, JWT_ALGORITHM)
    
    return({
        "status": 200,
        "message": "Successfully Logged In.",
        "token": jwt_token,
        "fName": theUser['fName'],
        "lName": theUser['lName'],
        "username": theUser['username'],
        "email": theUser['email'],
    })
    
class LeaveApplication(BaseModel):
    username: str
    leaveType: str
    leaveFrom: str
    leaveTo: str
    documents: list
    
@app.post("/api/applications")
def LeaveApplication(application: LeaveApplication, Authorization: Optional[str] = Header(None)):
    if validateToken(Authorization) is False:
        return {
            "status": 401,
            "message": "Invalid Token"
        }
        
    username = application.username
    leaveType = application.leaveType
    leaveFrom = application.leaveFrom
    leaveTo = application.leaveTo
    documents = application.documents
    applicationdb = deta.Base("LeaveApplication")
    
    createApplication = {
        "username": username,
        "leaveType": leaveType,
        "leaveFrom": leaveFrom,
        "leaveTo": leaveTo,
        "documents": documents
    }
    
    try:
        return applicationdb.insert(createApplication)
    except:
        return({
            "status": 500,
            "message": "Some Error Occurred."
        })
        
@app.get("/api/applications/{username}")
def getUserPosts(username: str, Authorization: Optional[str] = Header(None)):
    
    if validateToken(Authorization) is False:
        return {
            "status": 401,
            "message": "Invalid Token"
        }
    try:
        postdb = deta.Base("LeaveApplication")
        allPosts = postdb.fetch({"username": username}).items
        return allPosts
    except:
        return({
            "status": 500,
            "message": "Some Error Occurred."
        })

@app.get("/api/applications")
def getUserPosts(Authorization: Optional[str] = Header(None)):
    
    if validateToken(Authorization) is False:
        return {
            "status": 401,
            "message": "Invalid Token"
        }
    try:
        postdb = deta.Base("LeaveApplication")
        allPosts = postdb.fetch().items
        return allPosts
    except:
        return({
            "status": 500,
            "message": "Some Error Occurred."
        })
        
@app.get("/api/user/{username}")
def getUserPosts(username: str, Authorization: Optional[str] = Header(None)):
    
    if validateToken(Authorization) is False:
        return {
            "status": 401,
            "message": "Invalid Token"
        }
    try:
        postdb = deta.Base("User")
        allPosts = postdb.fetch({"username": username}).items[0]
        return allPosts
    except:
        return({
            "status": 500,
            "message": "Some Error Occurred."
        })