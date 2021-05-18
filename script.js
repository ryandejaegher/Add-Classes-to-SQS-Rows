
(function(){
	window.addEventListener('DOMContentLoaded', function() {
	
    var sections = document.querySelectorAll('section');
    sections.forEach(section => {

      var rows = section.querySelectorAll('.row');  
      var images = section.querySelectorAll('.image-block');

      rows.forEach((row,i) => {
        row.classList.add(`x-row-${i+1}`);
      })

      images.forEach((image,i) => {
        image.classList.add(`image-${i+1}`);
      })
    })
})

})()
