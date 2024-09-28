import React, { useState } from "react";
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Box,
  Typography,
  Grid,
  Stack,
  TextField,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import emailjs from "emailjs-com"; // Import EmailJS

const questions = [
  {
    id: 1,
    question: "What is the place value of 5 in the number 7531?",
    options: { A: "5", B: "50", C: "500", D: "5000" },
    correctAnswer: "C",
  },
  {
    id: 2,
    question: "Which is greater: 5/8 or 7/12?",
    options: { A: "5/8", B: "7/12", C: "Both are equal", D: "None" },
    correctAnswer: "A",
  },
  {
    id: 3,
    question: "What is the perimeter of a square with side length of 6 cm?",
    options: { A: "18 cm", B: "36 cm", C: "24 cm", D: "12 cm" },
    correctAnswer: "C",
  },
  {
    id: 4,
    question: "How many centimeters are there in a meter?",
    options: { A: "10", B: "100", C: "1000", D: "1" },
    correctAnswer: "B",
  },
  {
    id: 5,
    question: "What is 50% of 200?",
    options: { A: "50", B: "150", C: "100", D: "200" },
    correctAnswer: "C",
  },
  {
    id: 6,
    question: "Solve: 8 ÷ 2 + 3 × 2",
    options: { A: "10", B: "12", C: "16", D: "8" },
    correctAnswer: "A",
  },
  {
    id: 7,
    question: "Which of the following is an even number?",
    options: { A: "7", B: "15", C: "22", D: "33" },
    correctAnswer: "C",
  },
  {
    id: 8,
    question:
      "A rectangle has a length of 8 cm and a width of 4 cm. What is the area?",
    options: { A: "12 cm²", B: "32 cm²", C: "20 cm²", D: "16 cm²" },
    correctAnswer: "B",
  },
  {
    id: 9,
    question: "If a train covers 60 km in 2 hours, what is its speed?",
    options: { A: "20 km/h", B: "25 km/h", C: "30 km/h", D: "40 km/h" },
    correctAnswer: "C",
  },
  {
    id: 10,
    question: "How many faces does a cube have?",
    options: { A: "6", B: "4", C: "8", D: "12" },
    correctAnswer: "A",
  },
  {
    id: 11,
    question: "Which of the following is a noun?",
    options: { A: "Run", B: "Fast", C: "Apple", D: "Quickly" },
    correctAnswer: "C",
  },
  {
    id: 12,
    question: "Choose the correct past tense of the verb: 'go'",
    options: { A: "Goes", B: "Went", C: "Gone", D: "Going" },
    correctAnswer: "B",
  },
  {
    id: 13,
    question:
      "Identify the adjective in the sentence: 'The tall man ran fast.'",
    options: { A: "Tall", B: "Man", C: "Ran", D: "Fast" },
    correctAnswer: "A",
  },
  {
    id: 14,
    question: "Complete the sentence: 'She ___ a beautiful dress.'",
    options: { A: "wears", B: "wore", C: "wear", D: "wearing" },
    correctAnswer: "B",
  },
  {
    id: 15,
    question: "Which of the following is a synonym for 'happy'?",
    options: { A: "Sad", B: "Joyful", C: "Angry", D: "Upset" },
    correctAnswer: "B",
  },
  {
    id: 16,
    question: "Fill in the blank: 'They are going ___ the park.'",
    options: { A: "to", B: "too", C: "two", D: "tow" },
    correctAnswer: "A",
  },
  {
    id: 17,
    question: "Which sentence is correct?",
    options: {
      A: "He don't like apples",
      B: "He doesn't likes apples",
      C: "He doesn't like apples",
      D: "He not like apples",
    },
    correctAnswer: "C",
  },
  {
    id: 18,
    question: "Choose the correct word: 'The dog wagged ___ tail.'",
    options: { A: "its", B: "it's", C: "its'", D: "it is" },
    correctAnswer: "A",
  },
  {
    id: 19,
    question: "Which is the correct synonym for 'big'?",
    options: { A: "Huge", B: "Small", C: "Tiny", D: "Short" },
    correctAnswer: "A",
  },
  {
    id: 20,
    question: "What is the opposite of 'old'?",
    options: { A: "New", B: "Cold", C: "Bold", D: "Slow" },
    correctAnswer: "A",
  },

  {
    id: 21,
    question: "Which part of a plant conducts photosynthesis?",
    options: { A: "Root", B: "Stem", C: "Leaf", D: "Flower" },
    correctAnswer: "C",
  },
  {
    id: 22,
    question: "Which gas do plants take in during photosynthesis?",
    options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" },
    correctAnswer: "C",
  },
  {
    id: 23,
    question: "Which is the longest river in the world?",
    options: { A: "Amazon", B: "Ganga", C: "Nile", D: "Yangtze" },
    correctAnswer: "C",
  },
  {
    id: 24,
    question: "Which planet is known as the Red Planet?",
    options: { A: "Earth", B: "Venus", C: "Jupiter", D: "Mars" },
    correctAnswer: "D",
  },
  {
    id: 25,
    question: "Which of the following is a renewable resource?",
    options: { A: "Coal", B: "Oil", C: "Solar energy", D: "Natural gas" },
    correctAnswer: "C",
  },
  {
    id: 26,
    question: "Which animal is known as the ‘Ship of the Desert’?",
    options: { A: "Camel", B: "Elephant", C: "Horse", D: "Lion" },
    correctAnswer: "A",
  },
  {
    id: 27,
    question: "How many bones are there in the human body?",
    options: { A: "206", B: "105", C: "120", D: "305" },
    correctAnswer: "A",
  },
  {
    id: 28,
    question: "What is the boiling point of water?",
    options: { A: "0°C", B: "50°C", C: "100°C", D: "150°C" },
    correctAnswer: "C",
  },
  {
    id: 29,
    question: "Which organ in the human body is responsible for pumping blood?",
    options: { A: "Lungs", B: "Heart", C: "Kidneys", D: "Liver" },
    correctAnswer: "B",
  },
  {
    id: 30,
    question: "Which layer of the earth is directly beneath the crust?",
    options: { A: "Mantle", B: "Core", C: "Lithosphere", D: "Atmosphere" },
    correctAnswer: "A",
  },

  // Balanced and Unbalanced Forces
  {
    id: 31,
    question: "Who was the first Prime Minister of India?",
    options: {
      A: "Mahatma Gandhi",
      B: "Jawaharlal Nehru",
      C: "Subhash Chandra Bose",
      D: "Sardar Patel",
    },
    correctAnswer: "B",
  },
  {
    id: 32,
    question: "Which is the national animal of India?",
    options: { A: "Tiger", B: "Elephant", C: "Lion", D: "Leopard" },
    correctAnswer: "A",
  },
  {
    id: 33,
    question: "Who invented the telephone?",
    options: {
      A: "Thomas Edison",
      B: "Alexander Graham Bell",
      C: "Nikola Tesla",
      D: "Isaac Newton",
    },
    correctAnswer: "B",
  },
  {
    id: 34,
    question: "Which planet is known as the 'Blue Planet'?",
    options: { A: "Mars", B: "Jupiter", C: "Earth", D: "Venus" },
    correctAnswer: "C",
  },
  {
    id: 35,
    question: "Which festival is known as the 'Festival of Lights'?",
    options: { A: "Holi", B: "Diwali", C: "Eid", D: "Christmas" },
    correctAnswer: "B",
  },
  {
    id: 36,
    question: "What is the capital of India?",
    options: { A: "Mumbai", B: "Kolkata", C: "Delhi", D: "Chennai" },
    correctAnswer: "C",
  },
  {
    id: 37,
    question: "Who is known as the 'Father of the Nation' in India?",
    options: {
      A: "Mahatma Gandhi",
      B: "Jawaharlal Nehru",
      C: "B. R. Ambedkar",
      D: "Subhash Chandra Bose",
    },
    correctAnswer: "A",
  },
  {
    id: 38,
    question: "Which is the largest continent in the world?",
    options: { A: "Africa", B: "Asia", C: "Europe", D: "Australia" },
    correctAnswer: "B",
  },
  {
    id: 39,
    question: "Who wrote the Indian National Anthem?",
    options: {
      A: "Rabindranath Tagore",
      B: "Bankim Chandra Chatterjee",
      C: "Sarojini Naidu",
      D: "Subhash Chandra Bose",
    },
    correctAnswer: "A",
  },
  {
    id: 40,
    question: "Which Indian city is known as the 'Silicon Valley of India'?",
    options: { A: "Mumbai", B: "Bangalore", C: "Hyderabad", D: "Delhi" },
    correctAnswer: "B",
  },

  // Second Law of Motion (Numerical-based)
  {
    id: 41,
    question: "‘अंगूर खट्टे हैं’ कहावत का अर्थ क्या है?",
    options: {
      A: "कोई चीज़ ना मिल पाने पर उसे बुरा बताना",
      B: "अंगूर खट्टे होते हैं",
      C: "अंगूर खा नहीं सकते",
      D: "अंगूर का स्वाद खट्टा होता है",
    },
    correctAnswer: "A",
  },
  {
    id: 42,
    question: "इनमें से कौनसा समास तत्पुरुष समास है?",
    options: { A: "राजमार्ग", B: "रामकृष्ण", C: "गृहकार्य", D: "नागपुर" },
    correctAnswer: "C",
  },
  {
    id: 43,
    question: "‘मेरा भारत महान’ वाक्य में कौनसा विशेषण है?",
    options: { A: "मेरा", B: "महान", C: "भारत", D: "वाक्य" },
    correctAnswer: "B",
  },
  {
    id: 44,
    question: "‘विद्यालय’ शब्द का सही संधि विच्छेद क्या है?",
    options: {
      A: "विद्या + आलय",
      B: "विद्या + लय",
      C: "विद्या + दाय",
      D: "विद्या + आल",
    },
    correctAnswer: "A",
  },
  {
    id: 45,
    question: "इनमें से कौनसा पुल्लिंग शब्द है?",
    options: { A: "माता", B: "माली", C: "नदी", D: "दीवार" },
    correctAnswer: "B",
  },
  {
    id: 46,
    question: "‘गुरु’ का स्त्रीलिंग क्या होगा?",
    options: { A: "गुरुवी", B: "गुरु", C: "गुरुआ", D: "गुरुमाता" },
    correctAnswer: "A",
  },
  {
    id: 47,
    question: "‘चल’ क्रिया का भूतकाल रूप क्या होगा?",
    options: { A: "चल", B: "चला", C: "चलेगा", D: "चली" },
    correctAnswer: "B",
  },
  {
    id: 48,
    question: "‘गुड़’ शब्द में कौनसा स्वर वर्ण आता है?",
    options: { A: "अ", B: "उ", C: "आ", D: "इ" },
    correctAnswer: "B",
  },
  {
    id: 49,
    question: "‘जल’ का पर्यायवाची शब्द क्या है?",
    options: { A: "नीर", B: "अग्नि", C: "भूमि", D: "वायु" },
    correctAnswer: "A",
  },
  {
    id: 50,
    question: "किस वाक्य में मुहावरे का सही प्रयोग हुआ है?",
    options: {
      A: "मैंने नया जूता लिया",
      B: "उसने आँखें दिखाई",
      C: "सूरज निकला",
      D: "उसने उसे मुँह दिखाई की",
    },
    correctAnswer: "B",
  },
];
const App = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [submittedForm, setSubmittedForm] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState({
    attended: 0,
    skipped: 0,
    incorrect: 0,
    marks: 0,
    percentage: 0,
  });
  const [viewAnswers, setViewAnswers] = useState(false);

  // Function to handle form submission for name and mobile number
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && mobile) {
      setSubmittedForm(true); // Show the MCQ only if form is submitted
    }
  };

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let attended = 0;
    let incorrect = 0;
    let marks = 0;

    answers.forEach((answer, index) => {
      if (answer) {
        attended++;
        if (answer === questions[index].correctAnswer) {
          marks++;
        } else {
          incorrect++;
        }
      }
    });

    const skipped = questions.length - attended;
    const percentage = (marks / questions.length) * 100;

    setResult({ attended, skipped, incorrect, marks, percentage });
    setSubmitted(true);

    // Send the result email
    sendEmail(name, mobile, attended, skipped, incorrect, marks, percentage);
  };

  const sendEmail = (
    name,
    mobile,
    attended,
    skipped,
    incorrect,
    marks,
    percentage
  ) => {
    // EmailJS email sending logic
    const templateParams = {
      user_name: name,
      user_mobile: mobile,
      attended_questions: attended,
      skipped_questions: skipped,
      incorrect_answers: incorrect,
      total_marks: marks,
      percentage: percentage,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const handleViewAnswers = () => {
    setViewAnswers(true);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {!submittedForm ? (
        // Form to get user's name and mobile number
        <form onSubmit={handleFormSubmit}>
          <Stack spacing={2} sx={{ maxWidth: 400, margin: "auto" }}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Mobile Number"
              variant="outlined"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Start Quiz
            </Button>
          </Stack>
        </form>
      ) : !submitted ? (
        <>
          {questions.map((q, index) => (
            <Stack
              key={q.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                marginBottom: "20px",
                p: { xs: 2, md: 3 },
              }}
            >
              <FormControl component="fieldset" sx={{ mb: 3 }}>
                <FormLabel component="legend">
                  {index + 1}. {q.question}
                </FormLabel>
                <RadioGroup
                  name={`question-${q.id}`}
                  value={answers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                >
                  <Grid container spacing={2}>
                    {Object.entries(q.options).map(([key, value]) => (
                      <Grid item xs={12} sm={6} key={key}>
                        <FormControlLabel
                          value={key}
                          control={<Radio />}
                          label={`${key}) ${value}`}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Stack>
          ))}
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: { xs: "100%", md: "auto" },
              mt: { xs: 2, md: 0 },
            }}
          >
            Submit
          </Button>
        </>
      ) : (
       

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          <Typography variant="h6">Result Summary</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Questions Attended:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.attended}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Questions Skipped:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.skipped}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Incorrect Answers:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.incorrect}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Marks Obtained:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {result.marks} / {questions.length}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Percentage:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.percentage}%</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleViewAnswers}
          >
            View Answers
          </Button>
        </Box>
      )}

      {viewAnswers && (
        <Box sx={{ mt: 4 }}>
          {questions.map((q, index) => (
            <Stack
              key={q.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                marginBottom: "20px",
                p: { xs: 2, md: 3 },
              }}
            >
              <FormControl component="fieldset" sx={{ mb: 3 }}>
                <FormLabel component="legend">
                  {index + 1}. {q.question}
                </FormLabel>
                <RadioGroup name={`question-${q.id}`} value={answers[index]}>
                  <Grid container spacing={2}>
                    {Object.entries(q.options).map(([key, value]) => {
                      const isCorrect = key === q.correctAnswer;
                      const isUserAnswer = answers[index] === key;
                      const isIncorrect = isUserAnswer && !isCorrect;

                      return (
                        <Grid item xs={12} sm={6} key={key}>
                          <FormControlLabel
                            value={key}
                            control={<Radio />}
                            label={`${key}) ${value}`}
                            sx={{
                              backgroundColor: isCorrect
                                ? "green"
                                : isIncorrect
                                ? "red"
                                : "transparent",
                              color:
                                isCorrect || isIncorrect ? "white" : "black",
                            }}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Stack>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default App;
