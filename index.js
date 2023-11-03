











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