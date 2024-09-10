// import React, { useState } from "react";
// import {
//   Button,
//   Radio,
//   RadioGroup,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Box,
//   Typography,
//   Grid,
//   Stack,
// } from "@mui/material";

// const questions = [
//   {
//     id: 1,
//     question: "What is the S.I. unit of velocity?",
//     options: {
//       A: "m/s",
//       B: "km/h",
//       C: "m",
//       D: "s",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 2,
//     question: "What is the S.I. unit of acceleration?",
//     options: {
//       A: "m/s²",
//       B: "km/h",
//       C: "m/s",
//       D: "kg",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 3,
//     question: "The S.I. unit of displacement is:",
//     options: {
//       A: "meter",
//       B: "second",
//       C: "kilogram",
//       D: "newton",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 4,
//     question: "What is the S.I. unit of distance?",
//     options: {
//       A: "meter",
//       B: "centimeter",
//       C: "kilogram",
//       D: "miles",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 5,
//     question: "The S.I. unit of time is:",
//     options: {
//       A: "second",
//       B: "minute",
//       C: "hour",
//       D: "day",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 6,
//     question: "A car travels 100 meters in 5 seconds. What is its speed?",
//     options: {
//       A: "20 m/s",
//       B: "25 m/s",
//       C: "15 m/s",
//       D: "50 m/s",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 7,
//     question:
//       "If a car accelerates from rest to 20 m/s in 4 seconds, what is the acceleration?",
//     options: {
//       A: "5 m/s²",
//       B: "10 m/s²",
//       C: "2 m/s²",
//       D: "4 m/s²",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 8,
//     question: "A cyclist covers 30 km in 2 hours. What is his average speed?",
//     options: {
//       A: "15 km/h",
//       B: "10 km/h",
//       C: "20 km/h",
//       D: "25 km/h",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 9,
//     question:
//       "A body is moving with a uniform velocity of 10 m/s. How much distance will it cover in 5 seconds?",
//     options: {
//       A: "50 meters",
//       B: "20 meters",
//       C: "100 meters",
//       D: "25 meters",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 10,
//     question:
//       "A train moving with a uniform acceleration covers 100 meters in 5 seconds. What is its speed at the end of 5 seconds?",
//     options: {
//       A: "20 m/s",
//       B: "10 m/s",
//       C: "25 m/s",
//       D: "15 m/s",
//     },
//     correctAnswer: "B",
//   },
//   {
//     id: 11,
//     question: "Which of the following is an example of uniform motion?",
//     options: {
//       A: "A car moving with constant speed",
//       B: "A bus slowing down",
//       C: "A ball thrown upwards",
//       D: "A person running with varying speed",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 12,
//     question:
//       "What is the acceleration of a freely falling object under gravity?",
//     options: {
//       A: "9.8 m/s²",
//       B: "10 m/s²",
//       C: "8 m/s²",
//       D: "5 m/s²",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 13,
//     question: "Which of the following graphs represent uniform motion?",
//     options: {
//       A: "A straight line parallel to the time axis",
//       B: "A straight line sloping upwards",
//       C: "A curved line",
//       D: "A straight line sloping downwards",
//     },
//     correctAnswer: "B",
//   },
//   {
//     id: 14,
//     question: "The slope of a distance-time graph gives:",
//     options: {
//       A: "Speed",
//       B: "Acceleration",
//       C: "Velocity",
//       D: "Displacement",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 15,
//     question: "Which of the following represents non-uniform motion?",
//     options: {
//       A: "A car accelerating",
//       B: "A car moving with constant speed",
//       C: "An airplane flying at a steady height",
//       D: "A train moving on a straight track",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 16,
//     question: "The rate of change of velocity is called:",
//     options: {
//       A: "Acceleration",
//       B: "Speed",
//       C: "Displacement",
//       D: "Distance",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 17,
//     question:
//       "If a body covers equal distances in equal intervals of time, it is said to be in:",
//     options: {
//       A: "Uniform motion",
//       B: "Non-uniform motion",
//       C: "Circular motion",
//       D: "Random motion",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 18,
//     question:
//       "What happens to the velocity when an object is moving with uniform acceleration?",
//     options: {
//       A: "It increases linearly",
//       B: "It decreases linearly",
//       C: "It remains constant",
//       D: "It fluctuates",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 19,
//     question: "The motion of a pendulum is an example of:",
//     options: {
//       A: "Oscillatory motion",
//       B: "Uniform motion",
//       C: "Linear motion",
//       D: "Circular motion",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 20,
//     question:
//       "If the velocity of an object is decreasing, the acceleration is:",
//     options: {
//       A: "Negative",
//       B: "Positive",
//       C: "Zero",
//       D: "Constant",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 21,
//     question: "Which of the following is NOT a scalar quantity?",
//     options: {
//       A: "Displacement",
//       B: "Speed",
//       C: "Distance",
//       D: "Time",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 22,
//     question:
//       "A car travels at 60 km/h for 2 hours and 80 km/h for the next 3 hours. What is the average speed of the car?",
//     options: {
//       A: "72 km/h",
//       B: "65 km/h",
//       C: "70 km/h",
//       D: "60 km/h",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 23,
//     question: "What does the area under the velocity-time graph represent?",
//     options: {
//       A: "Displacement",
//       B: "Acceleration",
//       C: "Speed",
//       D: "Time",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 24,
//     question:
//       "If a body moves in a circular path with uniform speed, what kind of acceleration does it experience?",
//     options: {
//       A: "Centripetal acceleration",
//       B: "Linear acceleration",
//       C: "Zero acceleration",
//       D: "Negative acceleration",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 25,
//     question:
//       "What is the total distance covered by a car moving with a uniform velocity of 20 m/s for 10 seconds?",
//     options: {
//       A: "200 meters",
//       B: "400 meters",
//       C: "100 meters",
//       D: "50 meters",
//     },
//     correctAnswer: "B",
//   },
//   {
//     id: 26,
//     question:
//       "Which of the following is an example of uniformly accelerated motion?",
//     options: {
//       A: "A car increasing its speed uniformly",
//       B: "A car moving on a curved path",
//       C: "A car moving with constant speed",
//       D: "A ball rolling on a flat surface",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 27,
//     question:
//       "A cyclist starts from rest and accelerates uniformly to a speed of 10 m/s in 5 seconds. What is the acceleration?",
//     options: {
//       A: "2 m/s²",
//       B: "3 m/s²",
//       C: "4 m/s²",
//       D: "1 m/s²",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 28,
//     question:
//       "If the acceleration of an object is zero, what will be its velocity?",
//     options: {
//       A: "Constant",
//       B: "Increasing",
//       C: "Decreasing",
//       D: "Zero",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 29,
//     question: "The motion of the earth around the sun is an example of:",
//     options: {
//       A: "Circular motion",
//       B: "Linear motion",
//       C: "Oscillatory motion",
//       D: "Rectilinear motion",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 30,
//     question: "Which one of the following is a vector quantity?",
//     options: {
//       A: "Velocity",
//       B: "Speed",
//       C: "Time",
//       D: "Distance",
//     },
//     correctAnswer: "A",
//   },

//    // Balanced and Unbalanced Forces
//    {
//     id: 31,
//     question: "Which of the following is an example of balanced forces?",
//     options: {
//       A: "A book resting on a table",
//       B: "A car accelerating",
//       C: "A falling apple",
//       D: "A rocket launching",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 32,
//     question: "Which of the following shows unbalanced forces?",
//     options: {
//       A: "A stationary ball",
//       B: "A ball rolling down a hill",
//       C: "A car moving at constant speed",
//       D: "A person sitting on a chair",
//     },
//     correctAnswer: "B",
//   },
//   {
//     id: 33,
//     question: "What happens when balanced forces act on an object?",
//     options: {
//       A: "The object remains at rest or moves with constant velocity",
//       B: "The object accelerates",
//       C: "The object changes direction",
//       D: "The object decelerates",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 34,
//     question: "Which of the following best describes unbalanced forces?",
//     options: {
//       A: "They cause a change in motion",
//       B: "They do not affect the motion of an object",
//       C: "They are always equal in magnitude",
//       D: "They act only on moving objects",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 35,
//     question: "If a box is pushed from both sides with equal force, what will happen?",
//     options: {
//       A: "The box will not move",
//       B: "The box will accelerate",
//       C: "The box will rotate",
//       D: "The box will move in one direction",
//     },
//     correctAnswer: "A",
//   },

//   // First Law of Motion
//   {
//     id: 36,
//     question: "Newton's First Law of Motion is also known as:",
//     options: {
//       A: "Law of Inertia",
//       B: "Law of Acceleration",
//       C: "Law of Gravitation",
//       D: "Law of Action and Reaction",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 37,
//     question: "Which of the following is an example of inertia of motion?",
//     options: {
//       A: "A passenger continuing to move forward when the car suddenly stops",
//       B: "A book lying on a table",
//       C: "A car moving with constant speed",
//       D: "A ball at rest",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 38,
//     question: "Which of the following is not a result of inertia?",
//     options: {
//       A: "An object in motion stays in motion",
//       B: "An object at rest stays at rest",
//       C: "A change in the direction of motion",
//       D: "Difficulty in stopping a moving object",
//     },
//     correctAnswer: "C",
//   },
//   {
//     id: 39,
//     question: "Which of the following demonstrates inertia of rest?",
//     options: {
//       A: "A dust particle settling on a carpet remains at rest",
//       B: "A car continues moving forward when brakes are applied",
//       C: "A moving ball continues rolling without external force",
//       D: "A book remains on a table unless acted upon by an external force",
//     },
//     correctAnswer: "D",
//   },
//   {
//     id: 40,
//     question: "A body remains at rest or in uniform motion unless acted upon by:",
//     options: {
//       A: "An unbalanced force",
//       B: "Balanced forces",
//       C: "A net force of zero",
//       D: "A small displacement",
//     },
//     correctAnswer: "A",
//   },

//   // Second Law of Motion (Numerical-based)
//   {
//     id: 41,
//     question: "A 10 kg object is moving with a velocity of 5 m/s. What is its momentum?",
//     options: {
//       A: "50 kg m/s",
//       B: "25 kg m/s",
//       C: "10 kg m/s",
//       D: "5 kg m/s",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 42,
//     question: "A 50 kg object experiences a force of 100 N. What is the acceleration of the object?",
//     options: {
//       A: "2 m/s²",
//       B: "4 m/s²",
//       C: "0.5 m/s²",
//       D: "10 m/s²",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 43,
//     question: "A force of 20 N is applied to a 4 kg object. What will be its acceleration?",
//     options: {
//       A: "5 m/s²",
//       B: "2 m/s²",
//       C: "10 m/s²",
//       D: "0.5 m/s²",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 44,
//     question: "A car of mass 1000 kg increases its speed from 10 m/s to 20 m/s in 5 seconds. What is the net force applied on the car?",
//     options: {
//       A: "2000 N",
//       B: "5000 N",
//       C: "3000 N",
//       D: "1000 N",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 45,
//     question: "A 5 kg object accelerates at 4 m/s² under the action of a constant force. What is the magnitude of the force?",
//     options: {
//       A: "20 N",
//       B: "10 N",
//       C: "30 N",
//       D: "50 N",
//     },
//     correctAnswer: "A",
//   },

//   // Third Law of Motion
//   {
//     id: 46,
//     question: "According to Newton's Third Law, for every action, there is:",
//     options: {
//       A: "An equal and opposite reaction",
//       B: "A greater action",
//       C: "No reaction",
//       D: "A force in the same direction",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 47,
//     question: "In a collision between two objects, the forces exerted by the two objects on each other are:",
//     options: {
//       A: "Equal and opposite",
//       B: "Unequal and in the same direction",
//       C: "Different and opposite",
//       D: "Equal and in the same direction",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 48,
//     question: "A rocket moves forward due to the force of hot gases escaping from its rear. This is an example of:",
//     options: {
//       A: "Newton's Third Law",
//       B: "Newton's First Law",
//       C: "Newton's Second Law",
//       D: "Law of Inertia",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 49,
//     question: "A ball is thrown at a wall and it bounces back. Which law is demonstrated here?",
//     options: {
//       A: "Newton's Third Law",
//       B: "Newton's First Law",
//       C: "Newton's Second Law",
//       D: "Law of Inertia",
//     },
//     correctAnswer: "A",
//   },
//   {
//     id: 50,
//     question: "When you push a wall, the wall pushes back with equal force. Which law explains this?",
//     options: {
//       A: "Newton’s Third Law",
//       B: "Newton’s First Law",
//       C: "Newton’s Second Law",
//       D: "Law of Conservation of Momentum",
//     },
//     correctAnswer: "A",
//   }
// ];

// const App = () => {
//   const [answers, setAnswers] = useState(Array(questions.length).fill(""));
//   const [submitted, setSubmitted] = useState(false);
//   const [result, setResult] = useState({
//     attended: 0,
//     skipped: 0,
//     incorrect: 0,
//     marks: 0,
//     percentage: 0,
//   });

//   const handleChange = (index, value) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = value;
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = () => {
//     let attended = 0;
//     let incorrect = 0;
//     let marks = 0;

//     answers.forEach((answer, index) => {
//       if (answer) {
//         attended++;
//         if (answer === questions[index].correctAnswer) {
//           marks++;
//         } else {
//           incorrect++;
//         }
//       }
//     });

//     const skipped = questions.length - attended;
//     const percentage = (marks / questions.length) * 100;

//     setResult({ attended, skipped, incorrect, marks, percentage });
//     setSubmitted(true);
//   };

//   return (
//     <Box sx={{ p: { xs: 2, md: 4 } }}>
//       {" "}
//       {/* Padding adjusted for mobile */}
//       {!submitted ? (
//         <>
//           {questions.map((q, index) => (
//             <Stack
//               key={q.id}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "left",
//                 marginBottom: "20px",
//                 p: { xs: 2, md: 3 }, // Adjust padding for smaller screens
//               }}
//             >
//               <FormControl component="fieldset" sx={{ mb: 3 }}>
//                 <FormLabel component="legend">
//                   {index + 1}. {q.question}
//                 </FormLabel>
//                 <RadioGroup
//                   name={`question-${q.id}`}
//                   value={answers[index]}
//                   onChange={(e) => handleChange(index, e.target.value)}
//                 >
//                   <Grid container spacing={2}>
//                     {Object.entries(q.options).map(([key, value]) => (
//                       <Grid item xs={12} sm={6} key={key}>
//                         {" "}
//                         {/* Full width on mobile, half width on larger screens */}
//                         <FormControlLabel
//                           value={key}
//                           control={<Radio />}
//                           label={`${key}) ${value}`}
//                         />
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </RadioGroup>
//               </FormControl>
//             </Stack>
//           ))}
//           <Button
//             variant="contained"
//             onClick={handleSubmit}
//             sx={{
//               width: { xs: "100%", md: "auto" }, // Full width button on mobile
//               mt: { xs: 2, md: 0 },
//             }}
//           >
//             Submit
//           </Button>
//         </>
//       ) : (
//         <Box sx={{ p: { xs: 2, md: 4 } }}>
//           <Typography variant="h6">Result Summary</Typography>
//           <Typography>Questions Attended: {result.attended}</Typography>
//           <Typography>Questions Skipped: {result.skipped}</Typography>
//           <Typography>Incorrect Answers: {result.incorrect}</Typography>
//           <Typography>
//             Marks Obtained: {result.marks} / {questions.length}
//           </Typography>
//           <Typography>Percentage: {result.percentage}%</Typography>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default App;

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
} from "@mui/material";

const questions = [
  {
    id: 1,
    question: "What is the S.I. unit of velocity?",
    options: {
      A: "m/s",
      B: "km/h",
      C: "m",
      D: "s",
    },
    correctAnswer: "A",
  },
  {
    id: 2,
    question: "What is the S.I. unit of acceleration?",
    options: {
      A: "m/s²",
      B: "km/h",
      C: "m/s",
      D: "kg",
    },
    correctAnswer: "A",
  },
  {
    id: 3,
    question: "The S.I. unit of displacement is:",
    options: {
      A: "meter",
      B: "second",
      C: "kilogram",
      D: "newton",
    },
    correctAnswer: "A",
  },
  {
    id: 4,
    question: "What is the S.I. unit of distance?",
    options: {
      A: "meter",
      B: "centimeter",
      C: "kilogram",
      D: "miles",
    },
    correctAnswer: "A",
  },
  {
    id: 5,
    question: "The S.I. unit of time is:",
    options: {
      A: "second",
      B: "minute",
      C: "hour",
      D: "day",
    },
    correctAnswer: "A",
  },
  {
    id: 6,
    question: "A car travels 100 meters in 5 seconds. What is its speed?",
    options: {
      A: "20 m/s",
      B: "25 m/s",
      C: "15 m/s",
      D: "50 m/s",
    },
    correctAnswer: "A",
  },
  {
    id: 7,
    question:
      "If a car accelerates from rest to 20 m/s in 4 seconds, what is the acceleration?",
    options: {
      A: "5 m/s²",
      B: "10 m/s²",
      C: "2 m/s²",
      D: "4 m/s²",
    },
    correctAnswer: "A",
  },
  {
    id: 8,
    question: "A cyclist covers 30 km in 2 hours. What is his average speed?",
    options: {
      A: "15 km/h",
      B: "10 km/h",
      C: "20 km/h",
      D: "25 km/h",
    },
    correctAnswer: "A",
  },
  {
    id: 9,
    question:
      "A body is moving with a uniform velocity of 10 m/s. How much distance will it cover in 5 seconds?",
    options: {
      A: "50 meters",
      B: "20 meters",
      C: "100 meters",
      D: "25 meters",
    },
    correctAnswer: "A",
  },
  {
    id: 10,
    question:
      "A train moving with a uniform acceleration covers 100 meters in 5 seconds. What is its speed at the end of 5 seconds?",
    options: {
      A: "20 m/s",
      B: "10 m/s",
      C: "25 m/s",
      D: "15 m/s",
    },
    correctAnswer: "B",
  },
  {
    id: 11,
    question: "Which of the following is an example of uniform motion?",
    options: {
      A: "A car moving with constant speed",
      B: "A bus slowing down",
      C: "A ball thrown upwards",
      D: "A person running with varying speed",
    },
    correctAnswer: "A",
  },
  {
    id: 12,
    question:
      "What is the acceleration of a freely falling object under gravity?",
    options: {
      A: "9.8 m/s²",
      B: "10 m/s²",
      C: "8 m/s²",
      D: "5 m/s²",
    },
    correctAnswer: "A",
  },
  {
    id: 13,
    question: "Which of the following graphs represent uniform motion?",
    options: {
      A: "A straight line parallel to the time axis",
      B: "A straight line sloping upwards",
      C: "A curved line",
      D: "A straight line sloping downwards",
    },
    correctAnswer: "B",
  },
  {
    id: 14,
    question: "The slope of a distance-time graph gives:",
    options: {
      A: "Speed",
      B: "Acceleration",
      C: "Velocity",
      D: "Displacement",
    },
    correctAnswer: "A",
  },
  {
    id: 15,
    question: "Which of the following represents non-uniform motion?",
    options: {
      A: "A car accelerating",
      B: "A car moving with constant speed",
      C: "An airplane flying at a steady height",
      D: "A train moving on a straight track",
    },
    correctAnswer: "A",
  },
  {
    id: 16,
    question: "The rate of change of velocity is called:",
    options: {
      A: "Acceleration",
      B: "Speed",
      C: "Displacement",
      D: "Distance",
    },
    correctAnswer: "A",
  },
  {
    id: 17,
    question:
      "If a body covers equal distances in equal intervals of time, it is said to be in:",
    options: {
      A: "Uniform motion",
      B: "Non-uniform motion",
      C: "Circular motion",
      D: "Random motion",
    },
    correctAnswer: "A",
  },
  {
    id: 18,
    question:
      "What happens to the velocity when an object is moving with uniform acceleration?",
    options: {
      A: "It increases linearly",
      B: "It decreases linearly",
      C: "It remains constant",
      D: "It fluctuates",
    },
    correctAnswer: "A",
  },
  {
    id: 19,
    question: "The motion of a pendulum is an example of:",
    options: {
      A: "Oscillatory motion",
      B: "Uniform motion",
      C: "Linear motion",
      D: "Circular motion",
    },
    correctAnswer: "A",
  },
  {
    id: 20,
    question:
      "If the velocity of an object is decreasing, the acceleration is:",
    options: {
      A: "Negative",
      B: "Positive",
      C: "Zero",
      D: "Constant",
    },
    correctAnswer: "A",
  },
  {
    id: 21,
    question: "Which of the following is NOT a scalar quantity?",
    options: {
      A: "Displacement",
      B: "Speed",
      C: "Distance",
      D: "Time",
    },
    correctAnswer: "A",
  },
  {
    id: 22,
    question:
      "A car travels at 60 km/h for 2 hours and 80 km/h for the next 3 hours. What is the average speed of the car?",
    options: {
      A: "72 km/h",
      B: "65 km/h",
      C: "70 km/h",
      D: "60 km/h",
    },
    correctAnswer: "A",
  },
  {
    id: 23,
    question: "What does the area under the velocity-time graph represent?",
    options: {
      A: "Displacement",
      B: "Acceleration",
      C: "Speed",
      D: "Time",
    },
    correctAnswer: "A",
  },
  {
    id: 24,
    question:
      "If a body moves in a circular path with uniform speed, what kind of acceleration does it experience?",
    options: {
      A: "Centripetal acceleration",
      B: "Linear acceleration",
      C: "Zero acceleration",
      D: "Negative acceleration",
    },
    correctAnswer: "A",
  },
  {
    id: 25,
    question:
      "What is the total distance covered by a car moving with a uniform velocity of 20 m/s for 10 seconds?",
    options: {
      A: "200 meters",
      B: "400 meters",
      C: "100 meters",
      D: "50 meters",
    },
    correctAnswer: "B",
  },
  {
    id: 26,
    question:
      "Which of the following is an example of uniformly accelerated motion?",
    options: {
      A: "A car increasing its speed uniformly",
      B: "A car moving on a curved path",
      C: "A car moving with constant speed",
      D: "A ball rolling on a flat surface",
    },
    correctAnswer: "A",
  },
  {
    id: 27,
    question:
      "A cyclist starts from rest and accelerates uniformly to a speed of 10 m/s in 5 seconds. What is the acceleration?",
    options: {
      A: "2 m/s²",
      B: "3 m/s²",
      C: "4 m/s²",
      D: "1 m/s²",
    },
    correctAnswer: "A",
  },
  {
    id: 28,
    question:
      "If the acceleration of an object is zero, what will be its velocity?",
    options: {
      A: "Constant",
      B: "Increasing",
      C: "Decreasing",
      D: "Zero",
    },
    correctAnswer: "A",
  },
  {
    id: 29,
    question: "The motion of the earth around the sun is an example of:",
    options: {
      A: "Circular motion",
      B: "Linear motion",
      C: "Oscillatory motion",
      D: "Rectilinear motion",
    },
    correctAnswer: "A",
  },
  {
    id: 30,
    question: "Which one of the following is a vector quantity?",
    options: {
      A: "Velocity",
      B: "Speed",
      C: "Time",
      D: "Distance",
    },
    correctAnswer: "A",
  },

  // Balanced and Unbalanced Forces
  {
    id: 31,
    question: "Which of the following is an example of balanced forces?",
    options: {
      A: "A book resting on a table",
      B: "A car accelerating",
      C: "A falling apple",
      D: "A rocket launching",
    },
    correctAnswer: "A",
  },
  {
    id: 32,
    question: "Which of the following shows unbalanced forces?",
    options: {
      A: "A stationary ball",
      B: "A ball rolling down a hill",
      C: "A car moving at constant speed",
      D: "A person sitting on a chair",
    },
    correctAnswer: "B",
  },
  {
    id: 33,
    question: "What happens when balanced forces act on an object?",
    options: {
      A: "The object remains at rest or moves with constant velocity",
      B: "The object accelerates",
      C: "The object changes direction",
      D: "The object decelerates",
    },
    correctAnswer: "A",
  },
  {
    id: 34,
    question: "Which of the following best describes unbalanced forces?",
    options: {
      A: "They cause a change in motion",
      B: "They do not affect the motion of an object",
      C: "They are always equal in magnitude",
      D: "They act only on moving objects",
    },
    correctAnswer: "A",
  },
  {
    id: 35,
    question:
      "If a box is pushed from both sides with equal force, what will happen?",
    options: {
      A: "The box will not move",
      B: "The box will accelerate",
      C: "The box will rotate",
      D: "The box will move in one direction",
    },
    correctAnswer: "A",
  },

  // First Law of Motion
  {
    id: 36,
    question: "Newton's First Law of Motion is also known as:",
    options: {
      A: "Law of Inertia",
      B: "Law of Acceleration",
      C: "Law of Gravitation",
      D: "Law of Action and Reaction",
    },
    correctAnswer: "A",
  },
  {
    id: 37,
    question: "Which of the following is an example of inertia of motion?",
    options: {
      A: "A passenger continuing to move forward when the car suddenly stops",
      B: "A book lying on a table",
      C: "A car moving with constant speed",
      D: "A ball at rest",
    },
    correctAnswer: "A",
  },
  {
    id: 38,
    question: "Which of the following is not a result of inertia?",
    options: {
      A: "An object in motion stays in motion",
      B: "An object at rest stays at rest",
      C: "A change in the direction of motion",
      D: "Difficulty in stopping a moving object",
    },
    correctAnswer: "C",
  },
  {
    id: 39,
    question: "Which of the following demonstrates inertia of rest?",
    options: {
      A: "A dust particle settling on a carpet remains at rest",
      B: "A car continues moving forward when brakes are applied",
      C: "A moving ball continues rolling without external force",
      D: "A book remains on a table unless acted upon by an external force",
    },
    correctAnswer: "D",
  },
  {
    id: 40,
    question:
      "A body remains at rest or in uniform motion unless acted upon by:",
    options: {
      A: "An unbalanced force",
      B: "Balanced forces",
      C: "A net force of zero",
      D: "A small displacement",
    },
    correctAnswer: "A",
  },

  // Second Law of Motion (Numerical-based)
  {
    id: 41,
    question:
      "A 10 kg object is moving with a velocity of 5 m/s. What is its momentum?",
    options: {
      A: "50 kg m/s",
      B: "25 kg m/s",
      C: "10 kg m/s",
      D: "5 kg m/s",
    },
    correctAnswer: "A",
  },
  {
    id: 42,
    question:
      "A 50 kg object experiences a force of 100 N. What is the acceleration of the object?",
    options: {
      A: "2 m/s²",
      B: "4 m/s²",
      C: "0.5 m/s²",
      D: "10 m/s²",
    },
    correctAnswer: "A",
  },
  {
    id: 43,
    question:
      "A force of 20 N is applied to a 4 kg object. What will be its acceleration?",
    options: {
      A: "5 m/s²",
      B: "2 m/s²",
      C: "10 m/s²",
      D: "0.5 m/s²",
    },
    correctAnswer: "A",
  },
  {
    id: 44,
    question:
      "A car of mass 1000 kg increases its speed from 10 m/s to 20 m/s in 5 seconds. What is the net force applied on the car?",
    options: {
      A: "2000 N",
      B: "5000 N",
      C: "3000 N",
      D: "1000 N",
    },
    correctAnswer: "A",
  },
  {
    id: 45,
    question:
      "A 5 kg object accelerates at 4 m/s² under the action of a constant force. What is the magnitude of the force?",
    options: {
      A: "20 N",
      B: "10 N",
      C: "30 N",
      D: "50 N",
    },
    correctAnswer: "A",
  },

  // Third Law of Motion
  {
    id: 46,
    question: "According to Newton's Third Law, for every action, there is:",
    options: {
      A: "An equal and opposite reaction",
      B: "A greater action",
      C: "No reaction",
      D: "A force in the same direction",
    },
    correctAnswer: "A",
  },
  {
    id: 47,
    question:
      "In a collision between two objects, the forces exerted by the two objects on each other are:",
    options: {
      A: "Equal and opposite",
      B: "Unequal and in the same direction",
      C: "Different and opposite",
      D: "Equal and in the same direction",
    },
    correctAnswer: "A",
  },
  {
    id: 48,
    question:
      "A rocket moves forward due to the force of hot gases escaping from its rear. This is an example of:",
    options: {
      A: "Newton's Third Law",
      B: "Newton's First Law",
      C: "Newton's Second Law",
      D: "Law of Inertia",
    },
    correctAnswer: "A",
  },
  {
    id: 49,
    question:
      "A ball is thrown at a wall and it bounces back. Which law is demonstrated here?",
    options: {
      A: "Newton's Third Law",
      B: "Newton's First Law",
      C: "Newton's Second Law",
      D: "Law of Inertia",
    },
    correctAnswer: "A",
  },
  {
    id: 50,
    question:
      "When you push a wall, the wall pushes back with equal force. Which law explains this?",
    options: {
      A: "Newton's Third Law",
      B: "Newton's First Law",
      C: "Newton's Second Law",
      D: "Law of Conservation of Momentum",
    },
    correctAnswer: "A",
  },
];

const App = () => {
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
  };

  const handleViewAnswers = () => {
    setViewAnswers(true);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {!submitted ? (
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
          <Typography>Questions Attended: {result.attended}</Typography>
          <Typography>Questions Skipped: {result.skipped}</Typography>
          <Typography>Incorrect Answers: {result.incorrect}</Typography>
          <Typography>
            Marks Obtained: {result.marks} / {questions.length}
          </Typography>
          <Typography>Percentage: {result.percentage}%</Typography>
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
