
const main = document.querySelector('#card');

async function getUser(username) {
    const response = await fetch("https://api.github.com/users/" + username);
    const data = await response.json(); // Convert response to JSON
    console.log(data); // Log the response data
    const user =
        `   <div class="row user">
        <div class="col-sm-12 col-md-5 col-lg-5 image">
            <img src=${data.avatar_url}/>
        </div>
        <div class="col-sm-12 col-lg-7 col-md-7 user-info">
            <h2> ${data.name} </h2>
            <p> ${data.bio} </p>

            <div class="user-link d-flex ">
                <p style="margin-right: 10px;"> ${data.followers} <strong>Followers</strong></p>
                <p style="margin-right: 10px;">  ${data.following} <strong>Following</strong></p>
                <p > ${data.public_repos} <strong>Repos</strong></p>
            </div>

            
            <div id="user-repos" d-flex ">
                
            </div>
        </div>
    </div> `;

    main.innerHTML = user;
    userRepo(username);

}

getUser("i-am-bhaggi"); 

async function userRepo(username) {
    const repos = document.querySelector("#user-repos") 
     const response = await fetch("https://api.github.com/users/" + username + "/repos");
     const data = await response.json();
     console.log(data);


     data.forEach((item)=>{
        console.log(item);   
            const elem = document.createElement("a");
            elem.classList.add("box");
            elem.href = item.html_url;
            elem.innerText = item.name;
            elem.target = "_blank";
            repos.appendChild(elem)
        
     })
     }
    

userRepo("i-am-bhaggi")
 // <p style="margin-right: 20px;" class="box">Repo 1</p>
                // <p style="margin-right: 20px;" class="box">Repo 2</p>
                // <p class="box">Repo 3</p>