//------------Burger Menu-------------------------//

// First we define our js variables 
const burgerButton = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')
// then we start righting our new function
function toggleBurgerMenu() {
// log the click just to check its working. feel free to remove after you are done
  console.log('click')
  // here we check to see if the burger button has the class of active
  if (burgerButton.classList.contains("active")){
  // more consle.log for testing
    console.log('has active')
    // remove the class of active
    burgerButton.classList.remove("active")
    // gsap to close the email
    gsap.to(burgerMenu, {
    // width to shrink it
        width: 0,
        opacity: 0,
     //padding to minimilistic so it wont overflow
        
    })
} else {
	// console for more testing
    console.log('no has active')
    // re-adds the class for tracking
    burgerButton.classList.add("active")
    // opens up the burger menu and does the opsite of the close
    gsap.to(burgerMenu, {
        width: "auto",
        opacity: 1
    })
  }
}

// finally link it to the click action of the burger button
burgerButton.addEventListener('click', toggleBurgerMenu)









//------------Nav Point Slide Out-------------------------//

//  first we are finding all of the elements that have a class of navpoint
const navPoints = document.querySelectorAll(".navpoint")


// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
navPoints.forEach(object => {

    // First we define our js variables 

const subPoints = object.querySelector('.sub-points')
// then we start righting our new function
function toggleSubPoints() {
// log the click just to check its working. feel free to remove after you are done
  console.log('click')
  // here we check to see if the burger button has the class of active
  if (object.classList.contains("active")){
  // more consle.log for testing
    console.log('has active')
    // remove the class of active
    object.classList.remove("active")
    // gsap to close the email
    gsap.to(subPoints, {
    // width to shrink it
        width: 0,
     //padding to minimilistic so it wont overflow
    })
} else {
	// console for more testing
    console.log('no has active')
    // re-adds the class for tracking
    object.classList.add("active")
    // opens up the burger menu and does the opsite of the close
    gsap.to(subPoints, {
        width: "auto",
        opacity: 1,
    })
  }
}

// finally link it to the click action of the burger button
object.addEventListener('click', toggleSubPoints)

})