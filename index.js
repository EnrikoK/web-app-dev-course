









/*

window.onload = function(){fetch("https://api.npoint.io/8b311d996ba024acb89f")
    .then(response => response.json())
    .then(json => {
        let contentNode = document.getElementById("posts-container");
        for(let i = 0; i < json.length; i++){
            let post = document.createElement("div");

            let postHeader = document.createElement("div");
            let imageContent = document.createElement("div")

            let contentPic = document.createElement("img");
            contentPic.setAttribute("src", "./photos/" + json[i].content.image);
            contentPic.setAttribute("class", "post-image")

            let content = document.createElement("p");
            let contentText = document.createTextNode(json[i].content.text);
            content.appendChild(contentText);

            let username = document.createElement("h3");
            let usernameText = document.createTextNode(json[i].username);
            username.appendChild(usernameText);

            let date = document.createElement("p");
            let dateText = document.createTextNode(json[i].date);
            date.appendChild(dateText);

            imageContent.appendChild(contentPic);
            imageContent.setAttribute("class", "post-image-content")

            postHeader.appendChild(username);
            postHeader.appendChild(date);
            postHeader.setAttribute("class", "post-header")

            post.appendChild(postHeader)
            post.appendChild(content);
            post.appendChild(imageContent);
            post.setAttribute("class", "post")

            contentNode.appendChild(post);
        }

    })};
*/

async function load(json){
    let contentNode = document.getElementById("posts-container");
    for(let i = 0; i < json.length; i++){
        //creating post container
        let post = document.createElement("div");

        //creating post header div
        let postHeader = document.createElement("div");
        //creating post image content div
        let imageContent = document.createElement("div")

        //rendering post username
        let username = document.createElement("h3");
        let usernameText = document.createTextNode(json[i].username);
        username.appendChild(usernameText);
        // rendering post date
        let date = document.createElement("p");
        let dateText = document.createTextNode(json[i].date);
        date.appendChild(dateText);

        postHeader.appendChild(username);
        postHeader.appendChild(date);
        postHeader.setAttribute("class", "post-header")
        //adding the headder with username and date to the post
        post.appendChild(postHeader)
   
        //post text content
        if(json[i].content.text != null){
            let content = document.createElement("p");
            let contentText = document.createTextNode(json[i].content.text);
            content.appendChild(contentText);
            post.appendChild(content);
        }

        //Check if there is a valid picture path, if so add the picture to the post image content
        if(json[i].content.image != null){ 
            let contentPic = document.createElement("img");
            contentPic.setAttribute("src", "./photos/" + json[i].content.image);
            contentPic.setAttribute("class", "post-image")
            imageContent.appendChild(contentPic);
            imageContent.setAttribute("class", "post-image-content")
            post.appendChild(imageContent);

        }
        
        post.setAttribute("class", "post")
        //adding post to the posts container
        contentNode.appendChild(post);
    }
}

window.onload =  async function(){fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(json => {
        load(json)
    })};
    