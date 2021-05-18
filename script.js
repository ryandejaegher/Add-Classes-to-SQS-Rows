
(function(){
	window.addEventListener('DOMContentLoaded', function() {
	
    var sections = document.querySelectorAll('section');
    sections.forEach(section => {
      var rows = section.querySelectorAll('.row');  
      rows.forEach((row,i) => {
        row.classList.add(`x-row-${i}`);
      })
    })
})

})()
