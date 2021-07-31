import axios from "axios";

const URL = `https://leave-application-react.deta.dev/api/`;

export const loginSubmit = async (body) => {
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
          alert("Successfully Logged In")
          window.location = "/";
        }
      })
      .catch((err) => {
        alert("Server Seems to be down. Please try later. We got this.");
        window.location = '/'
        //throw err
      });
}