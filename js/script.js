// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote);


// additional properties
var quotes = [
  {
    quote: 'You can do anything but not everything.',
    source: 'David Allen',
    citation: 'Making It All Work',
    year: 2009,
    tags: [
      'Inspirational',
      'Productivity',
      'Time Management'
    ]
  },
  {
    quote: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
    source: 'Antoine de Saint-Exupéry',
    tags: [
      'Inspirational',
      'Philosophy'
    ]
  },
  {
    quote: 'The richest man is not he who has the most, but he who needs the least.',
    tags: [
      'Inspirational',
      'Philosophy'
    ]
  },
  {
    quote: 'You miss 100 percent of the shots you never take.',
    source: 'Wayne Gretzky',
    tags: [
      'Inspirational',
      'Sports'
    ]
  },
  {
    quote: 'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.',
    source: 'Ambrose Redmoon',
    tags: [
      'Inspirational',
      'Philosophy'
    ]
  },
];


var quoteIndices = [];

// automatic new quote duration
var seconds = 30;

// fill the quoteIndices array with the indexes of the quotes within the quote array
for(var i = 0; i < quotes.length; i++){
  quoteIndices.push(i);
}



function getRandomQuote(arr){
  // select a random index on the quoteIndices array
  var index = Math.floor(Math.random() * arr.length);

  // if the quoteIndices array still contains indexes, return the value at the randomly selected index and remove that index from the quoteIndices array
  if(arr.length > 0){
    var nextQuote = quotes[arr[index]];

    quoteIndices.splice(index, 1);
    return nextQuote;
  }
  return quotes[Math.floor(Math.random() * quotes.length)];
}


function printQuote(){
  // display random quote
  var quoteBox = document.getElementById('quote-box'),
      quoteObj = getRandomQuote(quoteIndices),
      templateString = '';

  
  console.log(quoteObj);

  // generate the template string
  templateString += '<p class="quote">' + quoteObj.quote + ' </p>';
  templateString += '<p class="source">';

  if(quoteObj.source){templateString += quoteObj.source;}
  else{templateString += 'Unknown'}

  if(quoteObj.citation){
    templateString += '<span class="citation">' + quoteObj.citation + '</span>';
  }

  if(quoteObj.year){
    templateString += '<span class="year">' + quoteObj.year + '</span>';
  }
  templateString += '</p>';
  quoteBox.innerHTML = templateString;


  // change background color
  var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
      newColor = '#';

  for(var i = 0; i < 6; i++){
    newColor += values[Math.floor(Math.random() * values.length)];
  }
  document.getElementsByTagName('BODY')[0].style.backgroundColor = newColor;
}
printQuote();


// new quote after set amount of time
setInterval(printQuote, seconds * 1000);
