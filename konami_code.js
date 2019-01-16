const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
  const body = document.body
  
  body.addEventListener('keydown', function(e) {
    const key = e.key;
    let i = 0; i < codes.length;
    
    if (key === codes[i]) {
       i++ ;
       
       if (i === codes.length) {
          alert('Hurray!');
          index = 0;
       }
    } else {
      index = 0;
    }
  });
}