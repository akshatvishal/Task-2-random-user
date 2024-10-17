document.addEventListener("DOMContentLoaded", () => {
  const nameElements = document.querySelectorAll(".name");
  const imageElements = document.querySelectorAll(".image img");
  const cardElements = document.querySelectorAll(".card");
  const nameanother = document.getElementsByClassName("named");
  const next = document.querySelector(".next");
  const back = document.querySelector(".back");
  var i = 1;
  var url = "https://randomuser.me/api/?page=1&results=50";
  async function getdata() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      nameElements.forEach((nameElement, index) => {
        const user = data.results[index];
        if (user) {
          nameElement.textContent = `${user.name.first} ${user.name.last}`;
        }
        const image = imageElements[index];
        if (image) {
          image.src = user.picture.large;
        }
      });
      cardElements.forEach((card, index) => {
        card.addEventListener("click", () => {
          const user = data.results[index];
          if (user) {
            localStorage.setItem("selectedUser", JSON.stringify(user));
            window.location.href = "Details.html";
          }
        });
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  getdata();
  next.addEventListener("click", () => {
    console.log("hello");
    url = `https://randomuser.me/api/?page=${++i}&results=50`;
    getdata();
    console.log(i);
  });
  if (i > 1) {
    back.addEventListener("click", () => {
      url = `https://randomuser.me/api/?page=${--i}&results=50`;
      getdata();
      console.log(i);
    });
  }
});
