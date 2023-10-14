let display = '';
let row = document.querySelector('.row');
fetch('https://fakestoreapi.com/products').then(
	response => response.json()
).then(
	data =>{
		console.log(data);
		// .map() --> file-iig copy hiigeed uur filed hadgaldag function 
		// slice() taslah, huvaah
		(data.slice(0,3)).map(
			product => {
				console.log(product.title);
				console.log(product.image);
				display += `
					<div class="col-md-4">
						<div class="card">
							<img src="${product.image}">
							<h5>${product.title}</h5>
							<p class="price">${product.price}</p>
							<p class="cat">${product.category}</p>
						</div>
					</div>
				`
				row.innerHTML=display;
			}
		)
	}
)