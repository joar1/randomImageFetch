document.querySelector('#fetch-btn').addEventListener('click', () => {
	if (document.querySelector('#randomImg')) document.querySelector('#randomImg').remove()
	console.log('Getting Image...')
	let height = document.querySelector('#inputHeight').value
	let width = document.querySelector('#inputWidth').value
	fetchImage(width, height)
})
function fetchImage(width, height) {
	fetch(`https://picsum.photos/${width}/${height}`)
		.then((res) => {
			console.log(res)
			let img = document.createElement('img')
			img.id = 'randomImg'
			img.src = res.url
			document.querySelector('body').append(img)
		})
		.catch((err) => console.log(err))
}
