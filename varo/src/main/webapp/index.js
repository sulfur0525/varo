console.log('js 실행')

function openinfo(no){
	console.log(no)
	let text  = document.querySelector('.infotext'+no)
	if(text.style.display == 'none'){
		text.style.display = 'block'
	}else{
		text.style.display = 'none'
	}
	
}