import axios from "axios";
import store from '../store/index'
import {GET_APPLICATIONS, ADMIN} from '../constants/index'

const URL = `https://leave-application-react.deta.dev/api/`;

// const successfulLoginDispatch = (dispatch) => {
//     dispatch({ type: "authLogin" })
// }

export const loginSubmit = async (body) => {

  // console.log(body)

    await axios.post(
        URL+'login',
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (response) => {
          //console.log(response.data)
          //return response['data']
        if (response.status === 200) {
          const data = response.data;
          console.log(data);
          if (data.status === 404) {
            alert(data.message);
            window.location = "/";
            return 0;
          }
          if (data.status === 403) {
            alert(data.message);
            window.location = "/";
            return 0;
          }
          localStorage.setItem("username", data.username);
          localStorage.setItem("token", data.token);
          store.dispatch({ type: "authLogin" });
          alert("Successfully Logged In")
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err)
        alert("Server Seems to be down. Please try later. We got this.");
        window.location = '/'
        //throw err
      });
}

//a function that uploads image and returns link
const uploadImageForLink = async(file) => {
  const formData = new FormData();
  formData.append('file', file);
  const value = await fetch(
          'https://leave-application-react.deta.dev/api/uploadimage',
          {
              method: 'POST',
              body: formData,
          }
      )
      .then((response) => response.json())
      .then((result) => {
          return result.link
        })
      .catch((error) => {
      alert("Problem with Image Upload")
      window.location = '/'
      return 0;
      });
  return value
}

export const applicationFormSubmit = async (body) => {
    let documents = []
    for(let i=0; i<body.files.length; i++)
    {
      const docLink = await uploadImageForLink(body.files[i])
      documents.push(docLink)
    }
    let bodyToPost = {
      username: body.username,
      leaveType: body.leaveType,
      leaveFrom: body.startDate,
      leaveTo: body.endDate,
      documents: documents
    }
    console.log(bodyToPost)
    const theResp = await axios.post(
      URL+'applications',
      bodyToPost,
      {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token')
          }
      }
      ).then(
      response => {
          if(response.status === 200){
              const data = response.data;
              if(data.status === 401)
              {
                  alert("Your Session has expired. Kindly Login")
                  localStorage.setItem('username', "")
                  localStorage.setItem('token', "")
                  window.location = "/"
                  return 0;
              }
              if(data.status === 500)
              {
                  alert(data.message);
                  window.location = '/'
                  return 0;
              }
              alert("Leave Applied Successfully!")
              window.location = "/"
              return 0;
              }
      }
      )
      .catch(
          err => {
              alert("Some error occurred while creating application. Please try again.")
              window.location = '/'
              return 0;
              }
      );
  console.log(theResp)
}

export const getApplications = async() => {
  const theResp = await axios({
      method: "GET",
      url:
        URL+'applications/'+localStorage.getItem('username'),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('token'),
      },
    })
    .then((response) => {
      const data = response.data;
      if(data.status === 401)
      {
        alert("Your Session has expired. Kindly Login")
        localStorage.setItem('username', "")
        localStorage.setItem('token', "")
        window.location = "/"
        return 0;
      }
      if(data.status === 500)
      {
        alert(data.message);
        window.location = '/'
        return 0;
      }
      console.log(data)
      store.dispatch({ type: GET_APPLICATIONS.UPDATE_APPLICATIONS, applications: data });
      return data
    })
    .catch((err) => {
      alert("Cannot retrieve your applications. Please try again later.")
      window.location = '/'
      return 0;
    });
}

export const signUpSubmit = async(body) => {
  axios.post(
    URL+"signup",
    body,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(
    response => {
        if(response.status === 200){
          const data = response.data;
          if(data.status === 201)
          {
            // localStorage.setItem('username', data.username);
            // localStorage.setItem('token', data.token);
            alert("Successfully Signed Up. Kindly Login.")
            window.location = '/'
          }
          if(data.status === 409)
          {
            alert(data.message);
            window.location = '/signup'
          }
        }
    }
  )
  .catch(
    err => {
      alert("Some error occurred")
      console.log(err);
      window.location = '/signup'
      return 0;
    }
  );
}

export const getAdminApplications = async() => {
  const theResp = await axios({
      method: "GET",
      url:
        URL+'admin/applications/'+localStorage.getItem('username'),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('token'),
      },
    })
    .then((response) => {
      const data = response.data;
      if(data.status === 401)
      {
        alert("Your Session has expired. Kindly Login")
        localStorage.setItem('username', "")
        localStorage.setItem('token', "")
        window.location = "/"
        return 0;
      }
      if(data.status === 500)
      {
        alert(data.message);
        window.location = '/'
        return 0;
      }
      if(data.status === 403)
      {
        alert(data.message);
        window.location = '/'
        return 0;
      }
      if(data.status === 404)
      {
        alert(data.message);
        window.location = '/'
        return 0;
      }
      console.log(data)
      store.dispatch({ type: ADMIN.UPDATE_APPLICATIONS, applications: data });
      return data
    })
    .catch((err) => {
      alert("Cannot retrieve your applications. Please try again later.")
      window.location = '/'
      return 0;
    });
}