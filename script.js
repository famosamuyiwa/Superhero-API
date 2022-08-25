const accessToken = 106549605515367
const BASE_URL = `https://www.superheroapi.com/api.php/${accessToken}`
const superheroDiv = document.getElementById("superhero")
const newHeroBtn = document.getElementById("new-hero-btn")
const searchHeroBtn = document.getElementById("search-hero-btn")
const searchField = document.getElementById("hero-search-field")
const heroName = document.getElementById("hero-name")
const statsDiv = document.getElementById("stats")

const getSuperhero = (heroId, name) => {
  fetch(`${BASE_URL}/${heroId}`)
    .then(response => response.json())
    .then(json => {
      const imgUrl = json.image.url
      superheroDiv.innerHTML = `<img src="${imgUrl}" alt=${json.name} height=300 width=300 />`
      heroDetails(json.name, json.powerstats)
    })
}

const searchHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const imgUrl = json.results[0].image.url
      superheroDiv.innerHTML = `<img src="${imgUrl}" alt=${json.name} height=300 width=300 />`
      heroDetails(json.results[0].name, json.results[0].powerstats)
      })
}

const heroDetails = (name, stats) => {
  heroName.innerText = name
  let statHtml = ''
  for (let [key, value] of Object.entries(stats)) {
   statHtml += `<p>${key}: ${value}</p>`
  }
  statsDiv.innerHTML = statHtml
}

searchHeroBtn.onclick = () => searchHero(searchField.value)
newHeroBtn.onclick = () => getSuperhero(Math.floor(1 + Math.random() * 731))


