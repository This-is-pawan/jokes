let pra = document.querySelector("p");
let btn = document.querySelectorAll(".btn");


btn.forEach((ev)=>{
 ev.addEventListener('click',(e)=>{
  // console.log(e.target);
  if (e.target.classList.contains('btn')) {
    
    fetchData();
    fetchXmlData(url);
  }
  
 })
  
})

const url = "https://icanhazdadjoke.com/";


const fetchData = async () => {
  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" }
    });
    const data = await response.json();
    pra.innerText = data.joke;
  } catch (error) {
    console.error("Error:", error);
  }
};


const fetchXmlData = (url) => {
  let xml = new XMLHttpRequest();
  xml.open("GET", url, true);
  xml.setRequestHeader("Accept", "application/json");
  xml.onreadystatechange = function () {
    if (xml.readyState === 4) {
      if (xml.status === 200) {
        let jokeData = JSON.parse(xml.responseText);
        pra.innerText = jokeData.joke;
      } else {
        console.error("Error:", xml.statusText);
      }
    }
  };
  xml.send();

};

