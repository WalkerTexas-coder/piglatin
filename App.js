import React, { Component } from 'react'
import './App.css'
//
class App extends Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: 'enter your phrase here',
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: ''
    }
  }
//
//   // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin
//

//     // the variable 'userInput' will contain the text input from the user
//     // no need to change this variable
//
//     // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
//     // no need to change this variable
    // let translatedWordsArray = []
//
//     // taking the user input and spliting the text into an array of words
    // let splitUserInput = userInput.toLowerCase().split(" ")
//
//     // now that we have an array of words, we can map over the array and access each word
    // splitUserInput.map(currentWord => {
//       // ACTION ITEM: use 'currentWord' as a starting point for your code



pigLatinSentence = (sentence) =>{
  return sentence.split(" ").map(word => this.myPigLatinCodeHere(word)).join(" ")

}

      // your code here!
myPigLatinCodeHere = (str) => {
    // Convert string to lowercase

    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"]

    // Initialize vowel index to 0
    str = str.toLowerCase()

    if (str.slice(0,2) === "qu") {
        return str.slice(2) + 'quay'
    }
    else if (vowels.includes(str[0])) {
      return str + "way"
    }
      // else if(str.slice(0,1) == "y") {
      //   return str.slice(1) + "yay"
      // }
    else {
      // If the first letter isn't a vowel i.e is a consonant
      var vowelIndex = str.length -1;
      for (var i=0; i < str.length; i++){

        // Loop through until the first vowel is found
        // console.log(i)
        // console.log(str[i])
        // console.log(vowels.includes(str[i]))
        if (vowels.includes(str[i])) {
          // Store the index at which the first vowel exists
          vowelIndex = i;
          break;
        }
      }
      console.log(vowelIndex)
      console.log(str.slice(vowelIndex))
      console.log(str.slice(0, vowelIndex))
      // console.log(vowelIndex)
      // console.log(str)
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }

  }

  //we need to use .filter to search for the first vowel and move any consonants before the vowel to the end and add "ay"




//   if else  (vowels.includes(str[0])) {
//     // If first letter is a vowel
//     return str + "way";

//   }
// }

      // Remember: console.log is your friend :)
//
//
//       // ACTION ITEM: change the value of currentWord in the push method to the name of whatever variable you made containing your Pig Latin'd word
//       return translatedWordsArray.push(currentWord)
//     })
//
//
//     // joining the array back to a string of translated words
//     // no need to change this variable
//     let translatedWords = translatedWordsArray.join(" ")
//
//     // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
//     // no need to change this method
//     this.setState({ phraseTranslated: translatedWords })
//     // done!
//   }
//
  setUpPreventDefault = (e) => {




    // get input string


    // put input string into pig latin function to get pig latin version
    // now that you have pig latin version, update display to show pig latin string
    // this method prevents React from refreshing the page unnecessarily
    // no need to modify this method
    e.preventDefault()

    //must pass string into myPigLatinCodeHere
    var latinVersion = this.pigLatinSentence(this.state.phrase)
    this.setState({ phraseTranslated: latinVersion })
    //change the display to show pig latin version
  }

  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    // no need to modify this method
    this.setState({ phrase: e.target.value })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: 'what would you like to translate',
      phraseTranslated: ''
    })

  }

  render() {
    // the render method is where we put information on the page
    // inside the return is all our JSX tags
    return (
      <div>
        <h1 link href="https://fonts.googleapis.com/css2?family=Romanesco&display=swap" rel="stylesheet"> Pig Latin Translator</h1>
          <div id="pigImage">
            <img
              src="https://i.ytimg.com/vi/xRDcnZKqkBI/maxresdefault.jpg"
              alt="Peppa Pig livin life"
              id="peppaPig"
            />
          </div>
          <div className="box">
            <h4>       </h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button onClick={ this.setUpPreventDefault } >Translate</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Clear</button>
            </div>
            </div>
            {/* where the translated phrase will display */}

                <p id="translatedWords" link href="https://fonts.googleapis.com/css2?family=Romanesco&display=swap" rel="stylesheet"> { this.state.phraseTranslated } </p>
        <footer>
          Coded by Jazmyn & Austin & Ara
        </footer>
      </div>
    )
  }
}

export default App
