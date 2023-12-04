document.addEventListener("DOMContentLoaded", async function () {
  let form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let userName = form[0].value;
    let password = form[1].value;

    try {
      let response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: userName,
        password: password,
      });

      let authToken = response.data.token;

      localStorage.setItem("authToken", authToken);

      window.location.replace("../pages/index.html");
    } catch (error) {
      console.error(error);
    }
  });
});
