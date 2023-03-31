function countDown (number) {
    console.log(number)
    
    if (number > 0) {
      number--
      countDown(number)
    }
  }
  
  countDown(5)