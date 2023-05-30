const jokebutt = document.getElementById("jukebutton");
jokebutt.addEventListener("click", getJoke);

const p_joke = document.getElementById("pjoke");¨

function getJoke(e){
   const request_address =  `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;
    
    fetch(
        request.adress,
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }
    )
        .then(res => res.json())
        .then(response => {
            //console.log(`response= ${response.joke}`)
            joke_string = response.joke;
            p_joke.innerHTML = jokestring;

        })
        .catch(error => { console.log(error); joke_string += error });

    return joke_string;
}