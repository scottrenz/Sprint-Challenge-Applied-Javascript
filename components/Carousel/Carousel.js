
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
    constructor(element){
      // assign this.element to the element DOM reference
      this.element =  element;
      this.btnData = this.element.dataset.btn

      // Add a click event that invokes this.selectTab

       this.element.addEventListener('click', () => {this.moveImg()});
    }
  
    moveImg(){
// console.log('this.btnData=',this.btnData)
      const arr = Array.from(imgs)
      let current = 0;
      arr.forEach(function(thing,idx) {
        if(imgs[idx].style.display ==='flex')
            {current = idx}
       })
       
       if(this.btnData === 'L') {
        if (current === 0)
         {current = imgs.length - 1}
        else
         {current = current - 1}
      }
       
        if(this.btnData === 'R') {
        if (current === (imgs.length-1))
         {current =  0 }
        else
         {current = current + 1}
      }

      arr.forEach(function(thing,idx) {
        if(idx === current)
        {imgs[idx].style = 'display: flex'}
        else
        {imgs[idx].style = 'display: none'}
       })
       

    }
}
  let btns = document.querySelectorAll('.xbtn');
  let imgs = document.querySelectorAll('.carousel img');
  btns.forEach(one => new Carousel(one))
for ( i = 0; i < (imgs.length - 1); i++)
   { imgs[i].style = 'display: none'}
  imgs[0].style = 'display: flex'
