const counters = document.querySelectorAll('.value');
<<<<<<< Updated upstream
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 50);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});
=======
const speed = 2000;

counters.forEach(counter => {
  const animate = () => {
    const value = +counter.getAttribute('akhi');
    const data = +counter.innerText;
>>>>>>> Stashed changes

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 100);
    } else {
      counter.innerText = value;
    }
  };

  animate();
});
