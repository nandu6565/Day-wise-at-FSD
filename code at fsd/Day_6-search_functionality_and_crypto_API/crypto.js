const container = document.querySelector('.coin-container')
const filterContainer = document.querySelector('.filtered-container')
const filterFieldsCont = document.querySelector('.filter-fields')
let cryptoData= [];

function getApiData(id){
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            createCard(response,container)
        })
}

function searchInputValue(searchValue){
    console.log(searchValue)
    console.log("api value",cryptoData)

    var filteredData = cryptoData.filter((val)=>{
        if(val.name.toLowerCase().includes(searchValue.toLowerCase())){
            return val
        }
    })
    console.log(filteredData)
    container.classList.add('hide')
    createCard(filteredData,filterContainer )
}

// function searchApiData(data){
//     const sValue = searchInputValue();
//     console.log("insided seacrhAPIData...",sValue)
// }

function createCard(apiData, location){

    cryptoData = [...apiData]

    apiData.forEach((coin) =>{
        const card = document.createElement('div')
        card.classList.add('card')
    
    
        const image = document.createElement('img')
        image.src = coin.image

        const heading3 = document.createElement('h3')
        heading3.innerHTML = coin.name
    
        const para = document.createElement('p')
        para.innerHTML = coin.current_price
    
    
        card.appendChild(image)
        card.appendChild(heading3)
        card.appendChild(para)
    
        location.appendChild(card)
    })  
}

getApiData()
