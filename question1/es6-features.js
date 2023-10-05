const mixedArray = ["Pizza",10,true,25,false,"Wings"] 

function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      
      const filteredWords = arr.filter(item => typeof item === 'string').map(word => word.toLowerCase());
  
      if (filteredWords.length === 0) {
        reject({msg: "Error, no Words in the array"});
      } else {
        resolve(filteredWords);
      }
    });
  }
  
  lowerCaseWords(mixedArray)
    .then(result => {
      console.log('Lowercased words:', result);
    })
    .catch(error => {
      console.error('Error:', error.msg);
    });


 

