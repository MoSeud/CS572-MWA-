(function(){
    String.prototype.filterWords=function(words){
        let regex=new RegExp(words.toString().replace(/,/g,'|'),'gi');
        return this.replace(regex,'***');
    }
    console.log("How many People have finished their Assignments so far".filterWords(['people','Assignments']))
})();

// //filter words using Promise
String.prototype.filterWords = function (badWords) {
    const delimiter = ' ';
    return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);
  };
  function filterStringWords(statement, badWords) {
    return new Promise(function (resolve, reject) {
      const result = statement.filterWords(badWords);
      resolve(result);
    })
      .then(function (data) {
        console.log(data);
      });
  }
  sentence=" How many People have finished their Assignments so far!"
  filterStringWords(sentence, ['People', 'Assignments']);

// // // //filter words using async and await
String.prototype.filterWords = function (badWords) {
    const delimiter = ' ';
    return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);
  
  };
  async function filterStringWords(statement, badWords) {
    try {
      const result = await statement.filterWords(badWords);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  data=" How many People have finished their Assignments so far!"
  filterStringWords(data, ['People', 'Assignments']);


// //filter words using Observable.

String.prototype.filterWords = function (badWords){
  const delimiter = ' ';
  return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);
};
function filterStringWords(statement, badWords) {
    const {Observable} =require('rxjs');
  return Observable.create(function(observer){
    const result = statement.filterWords(badWords);
    observer.next(result);
    observer.complete();
  });

}
data=" How many People have finished their Assignments so far!"
const observable = filterStringWords(data, ['People', 'Assignments']);
observable.subscribe((data) => {
  console.log(data);
});