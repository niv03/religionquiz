const questions = [
    {
    question: "What is the name of the Buddhist scripture that contains the teachings of the Buddha?",
    optionA: "Sutta Pitaka",
    optionB: "Vinaya Pitaka",
    optionC: "Abhidhamma Pitaka",
    optionD: "Tripitaka",
    correctOption: "optionD"
    },
    {
    question: "What is the name of the first Noble Truth in Buddhism?",
    optionA: "The truth of suffering",
    optionB: "The truth of the cause of suffering",
    optionC: "The truth of the cessation of suffering",
    optionD: "The truth of the path leading to the cessation of suffering",
    correctOption: "optionA"
    },
    {
    question: "What is the name of the Buddhist concept that means impermanence?",
    optionA: "Anicca",
    optionB: "Anatta",
    optionC: "Dukkha",
    optionD: "Karma",
    correctOption: "optionA"
    },
    {
    question: "What is the name of the Buddhist concept that means non-self or no-self?",
    optionA: "Anicca",
    optionB: "Anatta",
    optionC: "Dukkha",
    optionD: "Karma",
    correctOption: "optionB"
    },
    {
    question: "What is the name of the Buddhist concept that means suffering or unsatisfactoriness?",
    optionA: "Anicca",
    optionB: "Anatta",
    optionC: "Dukkha",
    optionD: "Karma",
    correctOption: "optionC"
    },
    {
    question: "What is the name of the Buddhist concept that means action or deed?",
    optionA: "Anicca",
    optionB: "Anatta",
    optionC: "Dukkha",
    optionD: "Karma",
    correctOption: "optionD"
    },
    {
    question: "What is the name of the Buddhist concept that means dependent origination or dependent arising?",
    optionA: "Paticca-samuppada",
    optionB: "Anatta",
    optionC: "Dukkha",
    optionD: "Karma",
    correctOption: "optionA"
    },
    {
    question: "What is the name of the Buddhist practice of meditation that focuses on the breath?",
    optionA: "Loving-kindness meditation",
    optionB: "Vipassana meditation",
    optionC: "Zen meditation",
    optionD: "Anapanasati meditation",
    correctOption: "optionD"
    },
    {
    question: "What is the name of the Buddhist practice of meditation that focuses on developing compassion?",
    optionA: "Loving-kindness meditation",
    optionB: "Vipassana meditation",
    optionC: "Zen meditation",
    optionD: "Anapanasati meditation",
    correctOption: "optionA"
    },
    {
    question: "What is the name of the Buddhist practice of meditation that focuses on insight and wisdom?",
    optionA: "Loving-kindness meditation",
    optionB: "Vipassana meditation",
    optionC: "Zen meditation",
    optionD: "Anapanasati meditation",
    correctOption: "optionB"
    },
    {
    question: "What is the name of the Buddhist practice of offering food to monks?",
    optionA: "Sangha Dana",
    optionB: "Pindapata",
    optionC: "Bodhisattva vow",
    optionD: "Puja",
    correctOption: "optionB",
},
{
question: "What is the name of the Buddhist festival that celebrates the Buddha's birthday?",
optionA: "Vesak",
optionB: "Magha Puja",
optionC: "Asalha Puja",
optionD: "Uposatha",
correctOption: "optionA"
},
{
question: "What is the name of the Buddhist festival that celebrates the Buddha's first sermon?",
optionA: "Vesak",
optionB: "Magha Puja",
optionC: "Asalha Puja",
optionD: "Uposatha",
correctOption: "optionC"
},
{
question: "What is the name of the Buddhist festival that celebrates the end of the rainy season retreat for monks?",
optionA: "Vesak",
optionB: "Magha Puja",
optionC: "Asalha Puja",
optionD: "Uposatha",
correctOption: "optionB"
},
{
question: "What is the name of the Buddhist monastery located in Bodh Gaya, India, where the Buddha is said to have attained enlightenment?",
optionA: "Wat Arun",
optionB: "Shwedagon Pagoda",
optionC: "Mahabodhi Temple",
optionD: "Todai-ji",
correctOption: "optionC"
},
{
question: "What is the name of the Buddhist stupa located in Kathmandu, Nepal, that is considered one of the holiest Buddhist sites outside of India?",
optionA: "Borobudur",
optionB: "Swayambhunath",
optionC: "Shwedagon Pagoda",
optionD: "Boudhanath",
correctOption: "optionD"
},
{
question: "What is the name of the Buddhist branch that is most commonly practiced in Tibet?",
optionA: "Theravada",
optionB: "Mahayana",
optionC: "Vajrayana",
optionD: "Zen",
correctOption: "optionC"
},
{
question: "What is the name of the Buddhist branch that is most commonly practiced in Japan?",
optionA: "Theravada",
optionB: "Mahayana",
optionC: "Vajrayana",
optionD: "Zen",
correctOption: "optionD"
},
{
question: "What is the name of the Buddhist principle that means non-harming or non-violence?",
optionA: "Ahimsa",
optionB: "Metta",
optionC: "Karuna",
optionD: "Upaya",
correctOption: "optionA"
},
{
question: "What is the name of the Buddhist principle that means loving-kindness?",
optionA: "Ahimsa",
optionB: "Metta",
optionC: "Karuna",
optionD: "Upaya",
correctOption: "optionB"
},
{
question: "What is the name of the Buddhist principle that means compassion?",
optionA: "Ahimsa",
optionB: "Metta",
optionC: "Karuna",
optionD: "Upaya",
correctOption: "optionC"
},
{
    question: "What is the name of the Buddhist text that contains the teachings of the Buddha?",
    optionA: "Tripitaka",
    optionB: "Sutra",
    optionC: "Vinaya",
    optionD: "Abhidharma",
    correctOption: "optionA"
    },
    {
    question: "What is the name of the Buddhist term that refers to the concept of impermanence?",
    optionA: "Dukkha",
    optionB: "Anicca",
    optionC: "Anatta",
    optionD: "Metta",
    correctOption: "optionB"
    },
    {
    question: "What is the name of the Buddhist term that refers to the concept of suffering?",
    optionA: "Dukkha",
    optionB: "Anicca",
    optionC: "Anatta",
    optionD: "Metta",
    correctOption: "optionA"
    },
    {
    question: "What is the name of the Buddhist term that refers to the concept of no-self or no-soul?",
    optionA: "Dukkha",
    optionB: "Anicca",
    optionC: "Anatta",
    optionD: "Metta",
    correctOption: "optionC"
    },
    {
    question: "What is the name of the Buddhist term that refers to the concept of dependent origination?",
    optionA: "Pratitya-samutpada",
    optionB: "Nirvana",
    optionC: "Karma",
    optionD: "Dharma",
    correctOption: "optionA"
    },
    {
    question: "What is the name of the Buddhist term that refers to the concept of liberation or enlightenment?",
    optionA: "Pratitya-samutpada",
    optionB: "Nirvana",
    optionC: "Karma",
    optionD: "Dharma",
    correctOption: "optionB"
    },
    {
    question: "What is the name of the Buddhist term that refers to the concept of action and its consequences?",
    optionA: "Pratitya-samutpada",
    optionB: "Nirvana",
    optionC: "Karma",
    optionD: "Dharma",
    correctOption: "optionC"
    },
    {
    question: "What is the name of the Buddhist term that refers to the teachings of the Buddha?",
    optionA: "Pratitya-samutpada",
    optionB: "Nirvana",
    optionC: "Karma",
    optionD: "Dharma",
    correctOption: "optionD"
    },
    {
    question: "What is the name of the Buddhist practice that involves focusing one's attention on the present moment?",
    optionA: "Samadhi",
    optionB: "Vipassana",
    optionC: "Metta",
    optionD: "Zazen",
    correctOption: "optionB"
    },
    {
    question: "What is the name of the Buddhist practice that involves the development of concentration?",
    optionA: "Samadhi",
    optionB: "Vipassana",
    optionC: "Metta",
    optionD: "Zazen",
    correctOption: "optionA"
    },
    {
    question: "What is the name of the Buddhist practice that involves the cultivation of loving-kindness?",
    optionA: "Samadhi",
    optionB: "Vipassana",
    optionC: "Metta",
    optionD: "Zazen",
    correctOption: "optionC"
},
{
question: "What is the name of the Buddhist practice that involves sitting meditation?",
optionA: "Samadhi",
optionB: "Vipassana",
optionC: "Metta",
optionD: "Zazen",
correctOption: "optionD"
},
{
question: "What is the name of the Buddhist holiday that celebrates the Buddha's birth, enlightenment, and death?",
optionA: "Wesak",
optionB: "Asalha Puja",
optionC: "Magha Puja",
optionD: "Songkran",
correctOption: "optionA"
},
{
question: "What is the name of the Buddhist holiday that marks the beginning of the Buddhist Lent?",
optionA: "Wesak",
optionB: "Asalha Puja",
optionC: "Magha Puja",
optionD: "Songkran",
correctOption: "optionB"
},
{
question: "What is the name of the Buddhist holiday that marks the full moon of the third lunar month?",
optionA: "Wesak",
optionB: "Asalha Puja",
optionC: "Magha Puja",
optionD: "Songkran",
correctOption: "optionC"
},
{
question: "What is the name of the Buddhist holiday that marks the Thai New Year?",
optionA: "Wesak",
optionB: "Asalha Puja",
optionC: "Magha Puja",
optionD: "Songkran",
correctOption: "optionD"
},
{
question: "What is the name of the Buddhist cosmology that describes the universe as consisting of 31 planes of existence?",
optionA: "Abhidharma",
optionB: "Samsara",
optionC: "Dharma",
optionD: "Brahma-vihara",
correctOption: "optionB"
},
{
question: "What is the name of the Buddhist concept that describes the cycle of birth, death, and rebirth?",
optionA: "Abhidharma",
optionB: "Samsara",
optionC: "Dharma",
optionD: "Brahma-vihara",
correctOption: "optionB"
},
{
question: "What is the name of the Buddhist term that refers to the wholesome qualities that one cultivates in order to achieve enlightenment?",
optionA: "Abhidharma",
optionB: "Samsara",
optionC: "Dharma",
optionD: "Brahma-vihara",
correctOption: "optionD"
},
{
question: "What is the name of the Buddhist term that refers to the four immeasurable or sublime states of mind?",
optionA: "Abhidharma",
optionB: "Samsara",
optionC: "Dharma",
optionD: "Brahma-vihara",
correctOption: "optionD"
},
{
question: "What is the name of the Buddhist term that refers to the state of perfect peace and liberation from suffering?",
optionA: "Nirvana",
optionB: "Samsara",
optionC: "Dharma",
optionD: "Brahma-vihara",
correctOption: "optionA"
},
{
question: "What is the name of the Buddhist text that contains the teachings of the Buddha?",
optionA: "Dhammapada",
optionB: "Tripitaka",
optionC: "Mahayana Sutras",
optionD: "Tibetan Book of the Dead",
correctOption: "optionB"
},
{
question: "What is the name of the Buddhist concept that describes the interdependence of all phenomena?",
optionA: "Anatta",
optionB: "Anicca",
optionC: "Dependent Origination",
optionD: "Karma",
correctOption: "optionC"
},
{
question: "What is the name of the Buddhist term that refers to the absence of a permanent, unchanging self?",
optionA: "Anatta",
optionB: "Anicca",
optionC: "Dependent Origination",
optionD: "Karma",
correctOption: "optionA"
},
{
question: "What is the name of the Buddhist term that refers to the impermanence and transience of all phenomena?",
optionA: "Anatta",
optionB: "Anicca",
optionC: "Dependent Origination",
optionD: "Karma",
correctOption: "optionB"
},
{
question: "What is the name of the Buddhist term that refers to the law of cause and effect?",
optionA: "Anatta",
optionB: "Anicca",
optionC: "Dependent Origination",
optionD: "Karma",
correctOption: "optionD"
},
{
question: "What is the name of the Buddhist term that refers to the three characteristics of existence: impermanence, suffering, and non-self?",
optionA: "The Three Jewels",
optionB: "The Four Noble Truths",
optionC: "The Noble Eightfold Path",
optionD: "The Three Universal Truths",
correctOption: "optionD"
},
{
question: "What is the name of the Buddhist term that refers to the six senses and their corresponding objects?",
optionA: "The Five Aggregates",
optionB: "The Four Foundations of Mindfulness",
optionC: "The Twelve Links of Dependent Origination",
optionD: "The Six Sense Spheres",
correctOption: "optionD"
},
{
question: "What is the name of the Buddhist term that refers to the eightfold path that leads to the cessation of suffering?",
optionA: "The Three Jewels",
optionB: "The Four Noble Truths",
optionC: "The Noble Eightfold Path",
optionD: "The Three Universal Truths",
correctOption: "optionC"
},
{
question: "What is the name of the Buddhist term that refers to the four truths that form the foundation of the Buddha's teachings?",
optionA: "The Three Jewels",
optionB: "The Four Noble Truths",
optionC: "The Noble Eightfold Path",
optionD: "The Three Universal Truths",
correctOption: "optionB"
},
{
question: "What is the name of the Buddhist term that refers to the four practices of cultivating loving-kindness, compassion, sympathetic joy, and equanimity?",
optionA: "The Four Foundations of Mindfulness",
optionB: "The Four Immeasurable Minds",
optionC: "The Four Noble Truths",
optionD: "The Noble Eightfold,Path",
correctOption: "optionB"
},
{
question: "What is the name of the Buddhist term that refers to the practice of mindfulness, including awareness of the body, feelings, mind, and phenomena?",
optionA: "The Five Aggregates",
optionB: "The Four Foundations of Mindfulness",
optionC: "The Twelve Links of Dependent Origination",
optionD: "The Six Sense Spheres",
correctOption: "optionB"
},
{
question: "What is the name of the Buddhist term that refers to the practice of generosity, ethical conduct, and mental cultivation?",
optionA: "The Three Jewels",
optionB: "The Four Noble Truths",
optionC: "The Noble Eightfold Path",
optionD: "The Three Universal Truths",
correctOption: "optionA"
},
{
question: "What is the name of the Buddhist term that refers to the three qualities of the Buddha: wisdom, compassion, and skillful means?",
optionA: "The Three Jewels",
optionB: "The Four Noble Truths",
optionC: "The Noble Eightfold Path",
optionD: "The Three Universal Truths",
correctOption: "optionA"
},
{
question: "What is the name of the Buddhist term that refers to the cycle of birth, death, and rebirth?",
optionA: "Anatta",
optionB: "Anicca",
optionC: "Samsara",
optionD: "Nirvana",
correctOption: "optionC"
},
{
question: "What is the name of the Buddhist term that refers to the ultimate goal of the Buddhist path, which is liberation from suffering?",
optionA: "Anatta",
optionB: "Anicca",
optionC: "Samsara",
optionD: "Nirvana",
correctOption: "optionD"
},
{
question: "What is the name of the Buddhist term that refers to the mental factor of concentration or one-pointedness of mind?",
optionA: "Sila",
optionB: "Samadhi",
optionC: "Prajna",
optionD: "Karuna",
correctOption: "optionB"
},
{
question: "What is the name of the Buddhist term that refers to the mental factor of wisdom or discernment?",
optionA: "Sila",
optionB: "Samadhi",
optionC: "Prajna",
optionD: "Karuna",
correctOption: "optionC"
},
{
question: "What is the name of the Buddhist term that refers to the mental factor of compassion or empathy?",
optionA: "Sila",
optionB: "Samadhi",
optionC: "Prajna",
optionD: "Karuna",
correctOption: "optionD"
},
{
question: "What is the name of the Buddhist term that refers to the practice of offering food to monastics as a way of cultivating generosity and accumulating merit?",
optionA: "Dana",
optionB: "Sila",
optionC: "Samadhi",
optionD: "Prajna",
correctOption: "optionA"
}
]




let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
  //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
  while (shuffledQuestions.length <= 9) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
  const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //get's correct's radio input with correct answer
          correctOption = option.labels[0].id
      }
  })

  //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++ //adding to player's score
          indexNumber++ //adding 1 to index so has to display next question..
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "red"
          document.getElementById(correctOption).style.backgroundColor = "green"
          wrongAttempt++ //adds 1 to wrong attempts 
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}



//called when the next button is called
function handleNextQuestion() {
  checkForAnswer() //check if player picked right or wrong option
  unCheckRadioButtons()
  //delays next question displaying for a second just for some effects so questions don't rush in on player
  setTimeout(() => {
      if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
      }
      resetOptionBackground()
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // condition check for player remark and remark color
  if (playerScore <= 3) {
      remark = "Bad Grades, Keep Practicing."
      remarkColor = "red"
  }
  else if (playerScore >= 4 && playerScore < 7) {
      remark = "Average, You can do better."
      remarkColor = "orange"
  }
  else if (playerScore >= 7) {
      remark = "Excellent, Keep the good work going."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 10) * 100

  //data to display to score board
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}