document.addEventListener("DOMContentLoaded", () => {
    const nameElements = document.querySelectorAll(".name");
    const imageElements = document.querySelectorAll(".image img");
    const cardElements = document.querySelectorAll(".card");
    const nameanother = document.getElementsByClassName("named");
    const url = "https://randomuser.me/api/?results=50";

    async function getdata() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            nameElements.forEach((nameElement, index) => {
                const user = data.results[index];
                if (user) {
                    nameElement.textContent = `${user.name.first} ${user.name.last}`;
                }
                const image=imageElements[index]
                if(image){
                image.src=user.picture.large
                }
            });
            cardElements.forEach((card, index) => {
                card.addEventListener('click', () => {
                    const user = data.results[index];
                    if (user) {
                        localStorage.setItem('selectedUser', JSON.stringify(user));
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
});