//Handler for countdown
const countDown = (el, to) => {
   // el => element to print result
   // to => UNIX time target
   const now = new Date().getTime()
   const distance = to - now
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
   //Print
   el.innerHTML = `${ days }d ${ hours }h ${ minutes }m ${ seconds }s`
}

export default countDown