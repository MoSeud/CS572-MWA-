(function(){
    String.prototype.filterWords=function(words){
        let regex=new RegExp(words.toString().replace(/,/g,'|'),'gi');
        return this.replace(regex,'***');
    }
    console.log("How many People have finished their Assignments so far".filterWords(['people','Assignments']))
})();

//filter words using Promise
String.prototype.filterWords = function (wordsToFilter) {
    const str = this;
    return new Promise(function (resolve, reject) {
        resolve(str.split(' ').map((word) => { if (wordsToFilter.includes(word)) return word = "***"; else return word }).join(' '));
    }
    );
};
"How many People have finished their Assignments so far".filterWords(["people", "Assignments!"]).then(data => console.log(data));

//filter words using async and await
String.prototype.filterWords = async function (wordsToFilter) {
    try {
        return await this.split(' ').map((word) => { if (wordsToFilter.includes(word)) return word = "***"; else return word }).join(' ');
    } catch (error) {
        console.log(error);
    }
}

"How many People have finished their Assignments so far".filterWords(["people", "Assignments!"]).then(data => console.log(data));

//filter words using Observable.
const { Observable } = require('rxjs');

String.prototype.filterWords = function (wordsToFilter) {
    return obs$ = Observable.create((observer) => {
        const result = this.split(' ').map((word) => { if (wordsToFilter.includes(word)) return word = "***"; else return word }).join(' ');
        observer.next(result);
    })

}

const subsciption = "How many People have finished their Assignments so far".filterWords(["people", "Assigments!"]);
subsciption.subscribe(
    function (result) {
        console.log(result);
    }
)