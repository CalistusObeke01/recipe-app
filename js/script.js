const input = document.querySelector('#inputValue')
const api = 'https://www.food2fork.com/' 
const apiKey = '6dfbb86e673af0a3e1d482e4fd86ed8c'

const fetchRecipe = () => {
	fetch(`https://www.food2fork.com/api/search?key=${apiKey}&q=${input.value}`)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			let result = data.recipes

			let output = '<h2>Lists of Recipes</h2>'
				output += '<ol>'

				result.forEach((recipe) => {
					return output += `
						<li>
							${recipe.title} 
						</li>
						<img src="${recipe.image_url}" width="250" height="200" />
					`
				})
								
			output += '</ol>'
			document.querySelector('#result').innerHTML = output
		})
		.catch(err => console.error(err))
}

input.addEventListener('keydown', fetchRecipe) 


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function openNav(x) {
	document.getElementById("mySidenav").style.width = "250px";
	x.classList.toggle("change");
}


let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);
}