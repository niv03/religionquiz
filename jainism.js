const questions = [
  {
  question: "What is the meaning of the term 'Jain'?",
  optionA: "Conqueror",
  optionB: "Savior",
  optionC: "Liberator",
  optionD: "Enlightened One",
  correctOption: "optionA"
  },
  {
  question: "Who is considered to be the founder of Jainism?",
  optionA: "Mahavira",
  optionB: "Gautama Buddha",
  optionC: "Adi Shankara",
  optionD: "Swami Vivekananda",
  correctOption: "optionA"
  },
  {
  question: "What is the name of the sacred book of the Jains?",
  optionA: "Bhagavad Gita",
  optionB: "Upanishads",
  optionC: "Sutras",
  optionD: "Agamas",
  correctOption: "optionD"
  },
  {
  question: "What is the ultimate goal of Jainism?",
  optionA: "Moksha",
  optionB: "Nirvana",
  optionC: "Enlightenment",
  optionD: "Salvation",
  correctOption: "optionA"
  },
  {
  question: "What is the term used for the cycle of birth, death, and rebirth in Jainism?",
  optionA: "Samsara",
  optionB: "Karma",
  optionC: "Maya",
  optionD: "Nirvana",
  correctOption: "optionA"
  },
  {
  question: "What is the name of the first Tirthankara in Jainism?",
  optionA: "Rishabhdev",
  optionB: "Parshvanath",
  optionC: "Mahavira",
  optionD: "Adinath",
  correctOption: "optionA"
  },
  {
  question: "What is the name of the last Tirthankara in Jainism?",
  optionA: "Mahavira",
  optionB: "Parshvanath",
  optionC: "Neminath",
  optionD: "Rishabhdev",
  correctOption: "optionA"
  },
  {
  question: "What is the term used for the doctrine of non-violence in Jainism?",
  optionA: "Ahimsa",
  optionB: "Satya",
  optionC: "Asteya",
  optionD: "Brahmacharya",
  correctOption: "optionA"
  },
  {
  question: "What is the name of the five great vows of Jainism?",
  optionA: "Panchamrit",
  optionB: "Pancha Sheela",
  optionC: "Pancha Maha Vratas",
  optionD: "Pancha Kriya",
  correctOption: "optionC"
  },
  {
  question: "What is the name of the Jain festival that celebrates the birth of Mahavira?",
  optionA: "Diwali",
  optionB: "Holi",
  optionC: "Paryushana",
  optionD: "Mahavir Jayanti",
  correctOption: "optionD"
  },
  {
  question: "What is the name of the Jain festival that marks the end of the rainy season?",
  optionA: "Diwali",
  optionB: "Holi",
  optionC: "Paryushana",
  optionD: "Samvatsari",
  correctOption: "optionC"
  },
  {
  question: "What is the name of the Jain ritual of fasting for spiritual purification?",
  optionA: "Nirjara",
optionB: "Anuvrata",
optionC: "Digambar",
optionD: "Tapasya",
correctOption: "optionD"
},
{
question: "What is the name of the Jain symbol representing the path to liberation?",
optionA: "Om",
optionB: "Swastika",
optionC: "Aum",
optionD: "Lanchhana",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of covering one's mouth to avoid inhaling small living organisms?",
optionA: "Veganism",
optionB: "Sallekhana",
optionC: "Chauvihar",
optionD: "Muhapatti",
correctOption: "optionD"
},
{
question: "What is the name of the Jain practice of introspection and self-examination?",
optionA: "Anuvrata",
optionB: "Pratikramana",
optionC: "Samayika",
optionD: "Meditation",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of non-possessiveness?",
optionA: "Ahimsa",
optionB: "Aparigraha",
optionC: "Satya",
optionD: "Asteya",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of renouncing worldly possessions?",
optionA: "Moksha",
optionB: "Nirvana",
optionC: "Tyaga",
optionD: "Yoga",
correctOption: "optionC"
},
{
question: "What is the name of the Jain practice of meditation?",
optionA: "Samadhi",
optionB: "Samayika",
optionC: "Dhyana",
optionD: "Pranayama",
correctOption: "optionC"
},
{
question: "What is the name of the Jain practice of non-attachment to worldly things?",
optionA: "Vairagya",
optionB: "Sannyasa",
optionC: "Tapas",
optionD: "Upasana",
correctOption: "optionA"
},
{
question: "What is the name of the Jain practice of complete self-control?",
optionA: "Anuvrata",
optionB: "Samyama",
optionC: "Pratyahara",
optionD: "Niyama",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of forgiveness?",
optionA: "Kshama",
optionB: "Dana",
optionC: "Japa",
optionD: "Puja",
correctOption: "optionA"
},
{
question: "What is the name of the Jain practice of non-lying?",
optionA: "Satya",
optionB: "Ahimsa",
optionC: "Brahmacharya",
optionD: "Asteya",
correctOption: "optionA"
},
{
question: "What is the name of the Jain practice of non-stealing?",
optionA: "Satya",
optionB: "Ahimsa",
optionC: "Brahmacharya",
optionD: "Asteya",
correctOption: "optionD"
},
{
question: "What is the name of the Jain practice of non-violence?",
optionA: "Satya",
optionB: "Ahimsa",
optionC: "Brahmacharya",
optionD: "Asteya",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of celibacy?",
optionA: "Satya",
optionB: "Ahimsa",
optionC: "Brahmacharya",
optionD: "Asteya",
correctOption: "optionC"
},
{
question: "What is the name of the Jain practice of truthfulness?",
optionA: "Satya",
optionB: "Ahimsa",
optionC: "Brahmacharya",
optionD: "Asteya",
correctOption: "optionA"
},
{
question: "What is the name of the Jain practice of compassion?",
optionA: "Ahimsa",
optionB: "Karuna",
optionC: "Maitri",
optionD: "Upeksha",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of equanimity?",
optionA: "Ahimsa",
optionB: "Karuna",
optionC: "Maitri",
optionD: "Upeksha",
correctOption: "optionD"
},
{
question: "What is the name of the Jain practice of non-attachment?",
optionA: "Ahimsa",
optionB: "Karuna",
optionC: "Maitri",
optionD: "Vairagya",
correctOption: "optionD"
},
{
question: "What is the name of the Jain practice of austerity?",
optionA: "Ahimsa",
optionB: "Tapas",
optionC: "Maitri",
optionD: "Upeksha",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of spiritual purification?",
optionA: "Ahimsa",
optionB: "Tapasya",
optionC: "Maitri",
optionD: "Upeksha",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of self-restraint?",
optionA: "Anuvrata",
optionB: "Samyama",
optionC: "Pratyahara",
optionD: "Niyama",
correctOption: "optionA"
},
{
question: "What is the name of the Jain practice of non-attachment to sensual pleasures?",
optionA: "Vairagya",
optionB: "Sannyasa",
optionC: "Tapas",
optionD: "Upasana",
correctOption: "optionA"
},
{
question: "What is the name of the Jain practice of self-study and self-knowledge?",
optionA: "Svadhyaya",
optionB: "Samadhi",
optionC: "Dhyana",
optionD: "Pranayama",
correctOption: "optionA"
},
{
question: "What is the name of the Jain practice of self-surrender to God?",
optionA: "Bhakti",
optionB: "Jnana",
optionC: "Karma",
optionD: "Shraddha",
correctOption: "optionD"
},
{
question: "What is the name of the Jain festival that celebrates the birth of Lord Mahavir?",
optionA: "Diwali",
optionB: "Holi",
optionC: "Paryushan",
optionD: "Mahavir Jayanti",
correctOption: "optionD"
},
{
question: "What is the name of the Jain festival that marks the end of the monsoon season?",
optionA: "Diwali",
optionB: "Holi",
optionC: "Paryushan",
optionD: "Samma Sambuddha Jayanti",
correctOption: "optionC"
},
{
question: "What is the name of the Jain festival that marks the attainment of Kevala Jnana by Lord Mahavir?",
optionA: "Diwali",
optionB: "Holi",
optionC: "Paryushan",
optionD: "Gyan Panchami",
correctOption: "optionD"
},
{
question: "What is the name of the Jain ritual of fasting for 8 days during the Paryushan festival?",
optionA: "Upvas",
optionB: "Ekasana",
optionC: "Atthai",
optionD: "Chaturmas",
correctOption: "optionC"
},
{
question: "What is the name of the Jain ritual of consuming food only once a day?",
optionA: "Upvas",
optionB: "Ekasana",
optionC: "Atthai",
optionD: "Chaturmas",
correctOption: "optionB"
},
{
question: "What is the name of the Jain ritual of consuming food only before sunset?",
optionA: "Upvas",
optionB: "Ekasana",
optionC: "Atthai",
optionD: "Chaturmas",
correctOption: "optionA"
},
{
question: "What is the name of the Jain text that outlines the principles of Jainism?",
optionA: "Sutras",
optionB: "Agamas",
optionC: "Puranas",
optionD: "Vedas",
correctOption: "optionB"
},
{
question: "What is the name of the Jain text that describes the life and teachings of Lord Mahavir?",
optionA: "Bhagavata Purana",
optionB: "Ramayana",
optionC: "Mahavircharita",
optionD: "Bhagavad Gita",
correctOption: "optionC"
},
{
question: "What is the name of the Jain text that describes the biographies of Jain Tirthankaras?",
optionA: "Agamas",
optionB: "Sutras",
optionC: "Puranas",
optionD: "Niryukti",
correctOption: "optionC"
},
{
question: "What is the name of the Jain symbol that represents the four states of existence?",
optionA: "Swastika",
optionB: "Shrivatsa",
optionC: "Nandyavarta",
optionD: "Lanchhana",
correctOption: "optionD"
},
{
question: "What is the name of the Jain symbol that represents the Jain concept of non-violence?",
optionA: "Swastika",
optionB: "Ahimsa",
optionC: "Om",
optionD: "Triratna",
correctOption: "optionB"
},
{
question: "What is the name of the Jain symbol that represents the Jain concept of truth?",
optionA: "Swastika",
optionB: "Ahimsa",
optionC: "Om",
optionD: "Satya",
correctOption: "optionD"
},
{
question: "What is the name of the Jain symbol that represents the Jain concept of non-attachment?",
optionA: "Swastika",
optionB: "Ahimsa",
optionC: "Om",
optionD: "Anekantavada",
correctOption: "optionD"
},
{
question: "What is the name of the Jain symbol that represents the Jain concept of detachment?",
optionA: "Swastika",
optionB: "Shrivatsa",
optionC: "Nandyavarta",
optionD: "Lanchhana",
correctOption: "optionB"
},
{
question: "What is the name of the Jain symbol that represents the Jain concept of salvation?",
optionA: "Swastika",
optionB: "Shrivatsa",
optionC: "Nandyavarta",
optionD: "Siddha Chakra",
correctOption: "optionD"
},
{
question: "What is the name of the Jain concept of non-attachment?",
optionA: "Ahimsa",
optionB: "Aparigraha",
optionC: "Satya",
optionD: "Samyak Darshan",
correctOption: "optionB"
},
{
question: "What is the name of the Jain concept of non-possessiveness?",
optionA: "Ahimsa",
optionB: "Aparigraha",
optionC: "Satya",
optionD: "Samyak Darshan",
correctOption: "optionB"
},
{
question: "What is the name of the Jain concept of right faith?",
optionA: "Ahimsa",
optionB: "Aparigraha",
optionC: "Satya",
optionD: "Samyak Darshan",
correctOption: "optionD"
},
{
question: "What is the name of the Jain concept of right knowledge?",
optionA: "Ahimsa",
optionB: "Aparigraha",
optionC: "Satya",
optionD: "Samyak Jnana",
correctOption: "optionD"
},
{
question: "What is the name of the Jain concept of right conduct?",
optionA: "Ahimsa",
optionB: "Aparigraha",
optionC: "Satya",
optionD: "Samyak Charitra",
correctOption: "optionD"
},
{
question: "What is the name of the Jain concept of the three jewels of Jainism?",
optionA: "Triratna",
optionB: "Nirvana",
optionC: "Moksha",
optionD: "Karma",
correctOption: "optionA"
},
{
question: "What is the name of the Jain concept of the five great vows?",
optionA: "Pancha Shila",
optionB: "Pancha Dharma",
optionC: "Pancha Mahavrata",
optionD: "Pancha Samiti",
correctOption: "optionC"
},
{
question: "What is the name of the Jain festival that marks the birth of Mahavira?",
optionA: "Diwali",
optionB: "Holi",
optionC: "Mahavir Jayanti",
optionD: "Dussehra",
correctOption: "optionC"
},
{
question: "What is the name of the Jain festival that marks the end of the rainy season and the beginning of the ascetic retreat?",
optionA: "Paryushana",
optionB: "Diwali",
optionC: "Navaratri",
optionD: "Holi",
correctOption: "optionA"
},
{
question: "What is the name of the Jain festival that marks the day when Mahavira attained enlightenment?",
optionA: "Diwali",
optionB: "Dussehra",
optionC: "Mahavir Nirvana",
optionD: "Paryushana",
correctOption: "optionC"
},
{
question: "What is the name of the Jain festival that marks the death anniversary of Mahavira?",
optionA: "Diwali",
optionB: "Holi",
optionC: "Mahavir Nirvana",
optionD: "Dussehra",
correctOption: "optionC"
},
{
question: "What is the name of the Jain festival that celebrates the attainment of salvation by the Jain ascetic monks?",
optionA: "Diwali",
optionB: "Holi",
optionC: "Paryushana",
optionD: "Samvatsari",
correctOption: "optionD"
},
{
question: "What is the name of the Jain concept of the universe?",
optionA: "Loka",
optionB: "Maya",
optionC: "Atman",
optionD: "Brahman",
correctOption: "optionA"
},
{
question: "What is the name of the Jain concept of the soul?",
optionA: "Loka",
optionB: "Maya",
optionC: "Atman",
optionD: "Brahman",
correctOption: "optionC"
},
{
question: "What is the name of the Jain concept of the material world?",
optionA: "Loka",
optionB: "Maya",
optionC: "Atman",
optionD: "Pudgala",
correctOption: "optionD"
},
{
question: "What is the name of the Jain concept of the three worlds?",
optionA: "Triloka",
optionB: "Maya",
optionC: "Atman",
optionD: "Brahman",
correctOption: "optionA"
},
{
question: "What is the name of the Jain concept of the five senses?",
optionA: "Indriya",
optionB: "Samsara",
optionC: "Karma",
optionD: "Nirvana",
correctOption: "optionA"
},
{
question: "What is the name of the Jain concept of the three types of karma?",
optionA: "Dravya Karma, Bhava Karma, and Anumana Karma",
optionB: "Adravya Karma, Bhava Karma, and Dravya Karma",
optionC: "Drishti Karma, Bhava Karma, and Anumana Karma",
optionD: "Sanghata Karma, Satta Karma, and Asrava Karma",
correctOption: "optionB"
},
{
question: "What is the name of the Jain concept of the five types of bodies that a soul can possess?",
optionA: "Pancha Kaya",
optionB: "Pancha Shila",
optionC: "Pancha Mahavrata",
optionD: "Pancha Samiti",
correctOption: "optionA"
},
{
question: "What is the name of the Jain practice of fasting?",
optionA: "Upvas",
optionB: "Pratikramana",
optionC: "Samayika",
optionD: "Paryushana",
correctOption: "optionA"
},
{
question: "What is the name of the Jain practice of confession and seeking forgiveness for past wrongs?",
optionA: "Upvas",
optionB: "Pratikramana",
optionC: "Samayika",
optionD: "Paryushana",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of meditation and contemplation?",
optionA: "Upvas",
optionB: "Pratikramana",
optionC: "Samayika",
optionD: "Dhyana",
correctOption: "optionD"
},
{
question: "What is the name of the Jain practice of non-possession?",
optionA: "Ahimsa",
optionB: "Aparigraha",
optionC: "Satya",
optionD: "Asteya",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of non-attachment?",
optionA: "Ahimsa",
optionB: "Aparigraha",
optionC: "Satya",
optionD: "Asteya",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of non-violence?",
optionA: "Ahimsa",
optionB: "Aparigraha",
optionC: "Satya",
optionD: "Asteya",
correctOption: "optionA"
},
{
question: "What is the name of the Jain practice of truthfulness?",
optionA: "Ahimsa",
optionB: "Aparigraha",
optionC: "Satya",
optionD: "Asteya",
correctOption: "optionC"
},
{
question: "What is the name of the Jain practice of non-stealing?",
optionA: "Ahimsa",
optionB: "Aparigraha",
optionC: "Satya",
optionD: "Asteya",
correctOption: "optionD"
},
{
question: "What is the name of the Jain practice of non-attachment to the senses?",
optionA: "Indriya Parigraha",
optionB: "Indriya Samvara",
optionC: "Indriya Nirjara",
optionD: "Indriya Dhyana",
correctOption: "optionB"
},
{
question: "What is the name of the Jain practice of controlling the senses?",
optionA: "Indriya Parigraha",
optionB: "Indriya Samvara",
optionC: "Indriya Nirjara",
optionD: "Indriya Dhyana",
correctOption: "optionB"
},
{
question: "What is the name of the Jain festival that celebrates the birth of Lord Mahavira?",
optionA: "Diwali",
optionB: "Holi",
optionC: "Paryushana",
optionD: "Mahavir Jayanti",
correctOption: "optionD"
},
{
question: "What is the name of the Jain festival that involves a week-long fast and meditation?",
optionA: "Diwali",
optionB: "Holi",
optionC: "Paryushana",
optionD: "Mahavir Jayanti",
correctOption: "optionC"
},
{
question: "What is the name of the Jain festival that involves lighting lamps and worshipping the Tirthankaras?",
optionA: "Diwali",
optionB: "Holi",
optionC: "Paryushana",
optionD: "Mahavir Jayanti",
correctOption: "optionA"
},
{
question: "What is the name of the Jain practice of austerities and penances?",
optionA: "Tapas",
optionB: "Upvas",
optionC: "Pratikramana",
optionD: "Samayika",
correctOption: "optionA"
},
{
question: "What is the name of the Jain scripture that contains the teachings of Lord Mahavira?",
optionA: "Sutrakritanga",
optionB: "Bhagavati Sutra",
optionC: "Samayasara",
optionD: "Akalanka",
correctOption: "optionB"
},
{
question: "What is the name of the Jain scripture that contains the teachings of Lord Parshvanatha?",
optionA: "Sutrakritanga",
optionB: "Bhagavati Sutra",
optionC: "Samayasara",
optionD: "Akalanka",
correctOption: "optionA"
},
{
question: "What is the name of the Jain scripture that contains the teachings of Lord Adinatha?",
optionA: "Sutrakritanga",
optionB: "Bhagavati Sutra",
optionC: "Samayasara",
optionD: "Akalanka",
correctOption: "optionD"
},
{
question: "What is the name of the Jain scripture that contains the biographies of the Tirthankaras?",
optionA: "Sutrakritanga",
optionB: "Bhagavati Sutra",
optionC: "Samayasara",
optionD: "Kalpa Sutra",
correctOption: "optionD"
},
{
question: "What is the name of the Jain scripture that contains the teachings of the Jain monks and nuns?",
optionA: "Sutrakritanga",
optionB: "Bhagavati Sutra",
optionC: "Samayasara",
optionD: "Niyama Sutra",
correctOption: "optionD"
}]



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