let form = document.querySelector(".form")
let InputText = document.querySelector("#InputText");
let btn = document.querySelector(".btn");
let box = document.querySelector(".box");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let inputVal = InputText.value;
    console.log(inputVal);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputVal}`)
    .then(res => res.json())
    .then(data => renderData(data))
    .catch(error => console.error(error))

    function renderData(data) {
        box.innerHTML = `
            <div class="groups">
                <h1 class="data__word">${data[0].word}</h1>
                <h1 class="minus">-</h1>
                <span class="data__words">${data[0].phonetics[0].text}</span>
            </div>
            <p class="data__meanings">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="data__definitions">Example: ${data[0].meanings[0].definitions[0].example}</p>
            <p class="data__definition">${data[0].meanings[0].definitions[1].definition}</p>
            <p class="data__example">Example: ${data[0].meanings[0].definitions[0].example}</p>
            <p class="data__text">"${data[0].meanings[0].definitions[2].definition}"</p>
            <audio controls src="${data[0].phonetics[0].audio}">Play the word</audio>
            `
        }
    })