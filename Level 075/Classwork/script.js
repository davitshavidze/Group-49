
const child = document.getElementById('child');

let x = 0;
let y = 0;

const moveDown = setInterval(() => {
   y += 1; 
   child.style.top = `${y}px`;
   if (y == 450){
      clearInterval(moveDown);
      const moveRight = setInterval(() => {
         x += 1; 
         child.style.left = `${x}px`;
         if (x == 450){
            clearInterval(moveRight);
            const moveUp = setInterval(() => {
               y -= 1; 
               child.style.top = `${y}px`;
               if (y == 0){
                  clearInterval(moveUp);
                  const moveLeft = setInterval(() => {
                     x -= 1; 
                     child.style.left = `${x}px`;
                     if (x == 0){
                        clearInterval(moveLeft);
                     }
                  }, 5)
               }
            }, 5)
         }
      }, 5)
   }
}, 5)