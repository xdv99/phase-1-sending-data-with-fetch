function submitData(userName, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const newDog = document.createElement("p");
      newDog.textContent = `${userName} with the email of ${email}, got this id ${res.id}`;
      document.body.appendChild(newDog);
    })
    .catch((e) => {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = `This error happened ${e.message}`;
      document.body.appendChild(errorMessage);
    });
}
