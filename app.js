// import axios from "axois";
// const URL = "https://api.github.com/users/";
const main = document.querySelector('#card');

async function getUser(username) {
    const response = await fetch("https://api.github.com/users/"+username);
    const data = response.json();
    console.log(data);
    const user =

        ` <div class="card" style="width: 18rem;">
            <div>
                <img src="..." class="card-img-top" alt="..." />
            </div>
            <div class="card-body user-info">
                <h2 >Card title</h2>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div id = "repos">
                <a href="#" class="repo">Card link</a>
                <a href="#" class="repo">Another link</a>
                <a href="#" class="repo">Another link</a>
            </div>
        </div>`

    card.innerHTML = user;
}
getUser("bhagirath-wscubetech");