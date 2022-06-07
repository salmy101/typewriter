const sentence = "My name is Salma and I am a LHL student";
  let wait = 0
  for(const char of sentence) {
    setTimeout(() => {  
      process.stdout.write(char)
    }, wait) 
 
  wait += 50
}

