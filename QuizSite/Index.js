const Files = [
                         {
                              Question: `What is 1 + 2 `,
                              Options: [ '3','5','6','7'],
                              Correct: '3',
                         },
                         {
                              Question: `What is 1 + 0 `,
                              Options: [ '1','5','6','7'],
                              Correct: '1',
                         },
                         {
                              Question: `What is 0 + 0 `,
                              Options: [ '0','5','6','7'],
                              Correct: '0',
                         },
                         {
                              Question: `What is 2 + 0 `,
                              Options: [ '2','5','6','7'],
                              Correct: '2',
                         },
                         {
                              Question: `What is 2 + 3 `,
                              Options: [ '4','5','6','7'],
                              Correct: '5',
                         },
                         {
                              Question: `What is 2 + 4 `,
                              Options: [ '4','5','6','7'],
                              Correct: '6',
                         },
                         {
                              Question: `What is 2 + 5 `,
                              Options: [ '4','5','6','7'],
                              Correct: '7',
                         },
                         {
                              Question: `What is 2 + 8 `,
                              Options: [ '10','5','6','7'],
                              Correct: '10',
                         },
                         {
                              Question: `What is 2 + 11 `,
                              Options: [ '13','5','6','7'],
                              Correct: '13',
                         },
                         {
                              Question: `What is 2 + 12 `,
                              Options: [ '14','5','6','7'],
                              Correct: '14',
                         },{
                              Question: `What is 2 + 15 `,
                              Options: [ '4','15','6','17'],
                              Correct: '17',
                         },{
                              Question: `What is 2 + 16 `,
                              Options: [ '4','5','6','18'],
                              Correct: '18',
                         },{
                              Question: `What is 2 + 20 `,
                              Options: [ '22','5','6','7'],
                              Correct: '22',
                         },{
                              Question: `What is 2 + 30 `,
                              Options: [ '32','5','6','7'],
                              Correct: '32',
                         },{
                              Question: `What is 21 + 2 `,
                              Options: [ '23','5','6','7'],
                              Correct: '23',
                         },{
                              Question: `What is 32 + 2 `,
                              Options: [ '34','5','6','7'],
                              Correct: '34',
                         },{
                              Question: `What is 17 + 2 `,
                              Options: [ '4','5','6','19'],
                              Correct: '19',
                         },{
                              Question: `What is 22 + 2 `,
                              Options: [ '24','5','6','7'],
                              Correct: '24',
                         },{
                              Question: `What is 2 + 18 `,
                              Options: [ '20','5','6','7'],
                              Correct: '20',
                         },{
                              Question: `What is 2 + 55 `,
                              Options: [ '4','5','6','57'],
                              Correct: '57',
                         },{
                              Question: `What is 78 + 2 `,
                              Options: [ '4','5','6','80'],
                              Correct: '80',
                         },{
                              Question: `What is 2 + 82 `,
                              Options: [ '4','5','6','84'],
                              Correct: '84',
                         },{
                              Question: `What is 72 + 2 `,
                              Options: [ '4','5','6','74'],
                              Correct: '74',
                         },{
                              Question: `What is 72 + 3 `,
                              Options: [ '4','5','6','75'],
                              Correct: '75',
                         },{
                              Question: `What is 66 + 2 `,
                              Options: [ '4','5','68','7'],
                              Correct: '68',
                         }
                                   ]
const Next = document.getElementById('NextBtn');
const Start = document.getElementById('Start');
const Previous = document.getElementById('PreviousBtn');
const StartBtn = document.getElementById('StartBtn');
const Main = document.getElementById('Main');
const Back = document.getElementById('BackToLogIn');
const LogIn = document.getElementById('LogIn');
const LError = document.getElementById('LError');
const Register = document.getElementById('Register');
const RResetPassword = document.getElementById('RResetPassword');
const LResetPassword = document.getElementById('LResetPassword');
const RChange = document.getElementById('RChange');
let LogOut = document.getElementById('LogOut');
const GetStarted = document.getElementById('GetStarted');
let Result = [];
let Score = [];
const StartTime = 2;
let Time = StartTime*60;

// if(location.reload()){location.reload.preventDefault()};
window.addEventListener('load', ()=>{
     document.getElementById('Main').style.display = 'none';
     document.getElementById('UserCreate').style.display = 'none';
     document.getElementById('UserLog').style.display = 'none';
     document.getElementById('Header').style.display = 'none';
     document.getElementById('First').style.display = 'flex';
                              })


const Countdown = ( ) => {
     const Mins = Math.floor(Time / 60);
     const Secs = Time % 60;
     if(Mins == 1){
          document.getElementById('Time').style.color = 'red';
     }else if(Mins == 0 && Secs == 0){
          document.getElementById('Time').style.display = `none`;
          const Score2 = Result.filter(Res=>{
               return Res == 1;
               })
          const Score1 = `${Score2.length*4}%` ;
          Score.push(Score1);
          const Id = `${document.getElementById('DPhone').textContent}R`;
          localStorage.setItem(Id, JSON.stringify(Score));
          document.getElementById('DScore').textContent = `Scores : ${JSON.stringify(Score)}`;
          document.getElementById('PreviousBtn').style.display = 'none';
          document.getElementById('QuestionNum').style.display = 'none';
          document.getElementById('Questions').innerHTML = `Your Time is Up, But need not to worry, your answers were submitted for you`;
          document.getElementById('MainOption').style.display = `none`;
          document.getElementById('BackToLogIn').style.display = 'block';
          document.getElementById('SubmitBtn').style.display = 'none';
          document.getElementById('NextBtn').style.display = 'none';
     }
     document.getElementById('Time').textContent = `${Mins}:${Secs}`
                             Time--           }


GetStarted.addEventListener('click', ()=>{
     const LogType = document.getElementById('Type').value;
     // const UserType = document.getElementById('UserType').value;
     if(LogType== 'SignUp'){
          // alert('Individual and SignUp');
          document.getElementById('First').style.display ='none';
          document.getElementById('UserCreate').style.display = 'flex';
     }else{
          // alert('Individual and LogIn')
          document.getElementById('First').style.display ='none';
          document.getElementById('UserLog').style.display = 'flex';
     }
     // }else if(UserType == 'Recruiter' && LogType== 'SignUp'){
     //      // alert('Recruiter and SignUp')
     //      document.getElementById('First').style.display ='none';
     //      document.getElementById('RecruiterCreate').style.display = 'flex';
     // }else{
     //      // alert('Recruiter and LogIn')
     //      document.getElementById('First').style.display ='none';
     //      document.getElementById('RecruiterLog').style.display = 'flex';
     // }
     Back.style.display = 'block';
                                   })



StartBtn.addEventListener('click', ()=>{
     // alert(StopTime);
     // console.log(StopTime);
     // alert(JSON.stringify(Result));
     setInterval(Countdown, 1000);
     document.getElementById('MainOption').style.display = 'inline';
     document.getElementById(`QuestionNum`).textContent = 1;
     document.getElementById('Questions').textContent =`${Files[0].Question}`;
     for(let i=0; i<Files[0].Options.length; i++){
          const LabelOptions =  document.getElementsByClassName('LOptions');
          const Checkbox =  document.getElementsByClassName('Options');
          Checkbox[i].value = Files[0].Options[i];
          LabelOptions[i].textContent = Files[0].Options[i];
     }
     document.getElementById('StartBtn').style.display = 'none';
     document.getElementById('NextBtn').style.display = 'block';
     
})
Next.addEventListener('click',()=>{
          StartBtn.style.display = 'none';
          let Value1 = document.getElementById('QuestionNum').textContent;
          let QuestionNum = Number(Value1);
          const Value = document.getElementById('Questions').textContent;
          if(QuestionNum >= 1){
               document.getElementById('PreviousBtn').style.display = 'block';
          }
          if(Value){
               const File1 = Files.find(File=>{
                    return File.Question == Value;
               })
               const Index = Files.indexOf(File1);
               const NextValue = Index + 1;
          const Options = document.getElementsByClassName('Options');
          const Array2 = [...Options];
          const Answer = Array2.find(Opt =>{
          if(Opt.checked){
               return Opt.value;
                    }
                    })
          if(!Answer){
                    console.log('You have not answered yet')
                    }else{
          if(Answer.value ==Files[Index].Correct){
               Result.push(1);
          }else{
               Result.push(0);
                    }
               }
               if(NextValue<Files.length-1){
                    document.getElementById(`QuestionNum`).textContent = `${QuestionNum + 1}`;
                    document.getElementById('Questions').textContent =`${Files[NextValue].Question}`;
                    for(let i=0; i<Files[NextValue].Options.length; i++){
                    const LabelOptions =  document.getElementsByClassName('LOptions');
                    const Checkbox =  document.getElementsByClassName('Options');
                    Checkbox[i].value = Files[NextValue].Options[i];
                    LabelOptions[i].textContent = Files[NextValue].Options[i];
                    }
                    
          
          }else if(NextValue == Files.length-1){
                    const Options = document.getElementsByClassName('Options');
                    const Array2 = [...Options];
                    const Answer = Array2.find(Opt =>{
                    if(Opt.checked){
                         return Opt.value;
                              }
                              })
                    if(!Answer){
                              console.log('You have not answered yet')
                              }else{
                    if(Answer.value ==Files[Index].Correct){
                         Result.push(1);
                    }else{
                         Result.push(0);
                              }
                         }
                    document.getElementById('NextBtn').style.display = 'none';
                    document.getElementById('SubmitBtn').style.display = 'block';
                    document.getElementById(`QuestionNum`).textContent = `${QuestionNum + 1}`;
                    document.getElementById('Questions').textContent =`${Files[NextValue].Question}`;
                    for(let i=0; i<Files[NextValue].Options.length; i++){
                    const LabelOptions =  document.getElementsByClassName('LOptions');
                    const Checkbox =  document.getElementsByClassName('Options');
                    Checkbox[i].value = Files[NextValue].Options[i];
                    LabelOptions[i].textContent = Files[NextValue].Options[i];
                    }
                    }else{
                         console.log(Result);
                         document.getElementById('Questions').textContent = `You have answered all the questions`;
                         document.getElementById('MainOption').style.display = `none`;
                         document.getElementById('BackToLogIn').style.display = 'block'
                     }
                    }
     })

Previous.addEventListener('click',()=>{
          
          const Value = document.getElementById('Questions').textContent;
          const Value1 = document.getElementById('QuestionNum').textContent;
          let QuestionNum = Number(Value1);
          const File1 = Files.find(File=>{
               return File.Question == Value;
          })
          const Index = Files.indexOf(File1);
          let PrevValue = Index-1;
          let PrevQuestionNum = QuestionNum -1;  
          if(Index <= Files.length-1){
               NextBtn.style.display = 'block';
               SubmitBtn.style.display = 'none';
          }else{
               NextBtn.style.display = 'none';
               SubmitBtn.style.display = 'block';
          }
          if(Index>1){
               Result.pop();
               document.getElementById(`QuestionNum`).textContent = `${PrevQuestionNum}`;
               document.getElementById('Questions').textContent =`${Files[PrevValue].Question}`;
               for(let i=0; i<Files[PrevValue].Options.length; i++){
                  const LabelOptions =  document.getElementsByClassName('LOptions');
                  const Checkbox =  document.getElementsByClassName('Options');
                  Checkbox[i].value = Files[PrevValue].Options[i];
                  LabelOptions[i].textContent = Files[PrevValue].Options[i];
               } 
          }else if(Index==1){
               Result.pop();
               Result.pop();
               document.getElementById(`PreviousBtn`).style.display = 'none';
               document.getElementById(`QuestionNum`).textContent = `${PrevQuestionNum}`;
               document.getElementById('Questions').textContent =`${Files[PrevValue].Question}`;
               for(let i=0; i<Files[PrevValue].Options.length; i++){
               const LabelOptions =  document.getElementsByClassName('LOptions');
               const Checkbox =  document.getElementsByClassName('Options');
               Checkbox[i].value = Files[PrevValue].Options[i];
               LabelOptions[i].textContent = Files[PrevValue].Options[i];
               } 
               }else{

               }
          })


Back.addEventListener('click',()=>{
     window.location.assign('index.html');                      
          })

LogOut.addEventListener('click',()=>{
     window.location.assign('index.html');                      
          })

SubmitBtn.addEventListener('click', ()=>{
     document.getElementById('Time').style.display = `none`;
     const Score2 = Result.filter(Res=>{
                    return Res == 1;
                    })
     const Score1 = `${Score2.length*4}%` ;
     Score.push(Score1);
     const Id = `${document.getElementById('DPhone').textContent}R`;
     localStorage.setItem(Id, JSON.stringify(Score));
     document.getElementById('DScore').textContent = `Scores : ${JSON.stringify(Score)}`;
     document.getElementById('PreviousBtn').style.display = 'none';
     document.getElementById('QuestionNum').style.display = 'none';
     document.getElementById('Questions').innerHTML = `You have answered all the questions`;
     document.getElementById('MainOption').style.display = `none`;
     document.getElementById('BackToLogIn').style.display = 'block';
     document.getElementById('SubmitBtn').style.display = 'none';
})

Register.addEventListener('click', ()=>{
     //Find Input Type
     if(document.getElementById('UserCreate').style.display){
          // alert(`hi`)
          const FullName = document.getElementById('FullName').value;
          const Email = document.getElementById('Email').value;
          const Tel = document.getElementById('Tel').value;
          const Age = document.getElementById('Age').value;
          const Password = document.getElementById('Password').value;
          const CPassword = document.getElementById('CPassword').value;
          if(!FullName || !Email || !Tel || !Age || !Password || !CPassword){
          document.getElementById('RError').textContent = `Please Fill In All The Spaces`;
          }else{
               if(Password == CPassword){
                    //document.getElementById('First').style.display = 'none';
                    const GetUser = localStorage.getItem(Tel);
                    if(!GetUser){
                         document.getElementById('UserCreate').style.display = 'none';
                         const RegisterUser = JSON.stringify({
                                             FullName : FullName,
                                             Email : Email,
                                             Tel   : Tel,
                                             Age   : Age,
                                             Password : Password,
                                                       });
                         localStorage.setItem(Tel, RegisterUser);
                         const RetrievedUser = JSON.parse(localStorage.getItem(Tel));
                         //const Score  = JSON.parse(localStorage.getItem(`${Tel}R`));
                         document.getElementById('Header').style.display = 'flex';
                         document.getElementById('DFullName').textContent = `Name: ${RetrievedUser.FullName}`;
                         document.getElementById('DEmail').textContent = `Email: ${RetrievedUser.Email}`;
                         document.getElementById('DPhone').textContent = `Tel: ${RetrievedUser.Tel}`;
                         document.getElementById('DAge').textContent = `DOB: ${RetrievedUser.Age}`;
                         Main.style.display = 'flex';
                         StartBtn.style.display = 'block';
                         document.getElementById('Questions').textContent = `Click the Start Button below to begin`;
                         // Back.style.display = 'none';
                              }else{
                                   document.getElementById('UserCreate').style.display = 'none';
                                   document.getElementById('UserLog').style.display = 'flex';
                                   document.getElementById('LError').style.display = 'User already Registered Before, Please Put in these details to Log In';
                              }
                         }else{
                              RError.textContent = `Passwords Do not Match`;
                              // RResetPassword.style.display = 'block';
                         }
                    }
               } })


LogIn.addEventListener('click', ()=>{
          // const Email = document.getElementById('LEmail').value;
          const Tel = document.getElementById('LTel').value;
          const Password = document.getElementById('LPassword').value;
          if(!Tel || !Password){
               document.getElementById('LError').textContent = `Please Fill In All The Spaces`;
          }else{   
               const Existing = JSON.parse(localStorage.getItem(Tel));
               if(Existing){
                    if(Existing.Password == Password){
                         if(JSON.parse(localStorage.getItem(`Tel: ${Tel}R`))){
                              alert('score dey')
                              Score = JSON.parse(localStorage.getItem(`Tel: ${Tel}R`))
                              
                         }else{
                              alert('no score');
                         }
                         document.getElementById('UserLog').style.display = 'none';
                         document.getElementById('Header').style.display = 'flex';
                         document.getElementById('DFullName').innerText = `Name:  ${Existing.FullName}`;
                         document.getElementById('DEmail').textContent = `Email: ${Existing.Email}`;
                         document.getElementById('DPhone').textContent = `Tel: ${Existing.Tel}`;
                         document.getElementById('DAge').textContent = `DOB: ${Existing.Age}`;
                         document.getElementById('DScore').textContent = `Scores: ${JSON.stringify(Score)}`;
                         document.getElementById('UserLog').style.display = 'none';
                         Main.style.display = 'flex';
                         StartBtn.style.display = 'block';
                         document.getElementById('Questions').textContent = `Click the Start Button below to begin`;
                         Back.style.display = 'none';
                    }else{
                    document.getElementById('LError').textContent = `Incorrect Password, Try again or reset Password below`;
                    document.getElementById('LResetPassword').style.display = 'block'
                    }
               }else{LError.textContent = `User Not Found, Please ckeck your inputs well or go back and register`
                              };
               } 
          })                               
                          
RResetPassword.addEventListener('click', ()=>{
          document.getElementById('FullName').value = '';
          document.getElementById('Email').value = '';
          document.getElementById('Tel').value = '';
          document.getElementById('Age').value = '';
          document.getElementById('Password').value = '';
          document.getElementById('CPassword').value = '';
          RResetPassword.style.display = 'none';
          document.getElementById('Register').style.display = 'none';
          document.getElementById('RChange').style.display = 'block';
          document.getElementById('RError').textContent = 'Please input Your Correct details ';
     })

LResetPassword.addEventListener('click', ()=>{
          document.getElementById('UserLog').style.display = 'none';
          document.getElementById('UserCreate').style.display = 'flex';
          RResetPassword.style.display = 'none';
          document.getElementById('Register').style.display = 'none';
          document.getElementById('RChange').style.display = 'block';
          document.getElementById('RError').textContent = 'Please input Your Correct details ';
     })
RChange.addEventListener('click', ()=>{
          const FullName = document.getElementById('FullName').value;
          const Email = document.getElementById('Email').value;
          const Tel = document.getElementById('Tel').value;
          const Age = document.getElementById('Age').value;
          const Password = document.getElementById('Password').value;
          const CPassword = document.getElementById('CPassword').value;
          if(!FullName || !Email || !Tel || !Age || !Password || !CPassword){
               document.getElementById('RError').textContent = `Please Fill In All The Spaces`;
          }else{
               if(Password == CPassword){
                    localStorage.removeItem(Tel);
                    if(!localStorage.getItem(Tel)){
                         const RegisterUser = JSON.stringify({
                                             FullName : FullName,
                                             Email : Email,
                                             Tel   : Tel,
                                             Age   : Age,
                                             Password : Password,
                                                       });
                         localStorage.setItem(Tel, RegisterUser);
                         const RetrievedUser = JSON.parse(localStorage.getItem(Tel));
                         console.log(RetrievedUser.FullName);
                         if(RetrievedUser){
                              document.getElementById('RError').textContent = 'User Information Change Successfully';
                              setTimeout(()=>{window.location.assign('index.html')}, 3000)
                         }else{

                         }
                    }else{
                          alert('No')
                          }
                     }}
               })   

// LChange.addEventListener('click', ()=>{
//           const FullName = document.getElementById('FullName').value;
//           const Email = document.getElementById('Email').value;
//           const Tel = document.getElementById('Tel').value;
//           const Age = document.getElementById('Age').value;
//           const Password = document.getElementById('Password').value;
//           const CPassword = document.getElementById('CPassword').value;
//           if(!FullName || !Email || !Tel || !Age || !Password || !CPassword){
//                document.getElementById('RError').textContent = `Please Fill In All The Spaces`;
//           }else{
//                if(Password == CPassword){
//                     localStorage.removeItem(Tel);
//                     if(!localStorage.getItem(Tel)){
//                          const RegisterUser = JSON.stringify({
//                                              FullName : FullName,
//                                              Email : Email,
//                                              Tel   : Tel,
//                                              Age   : Age,
//                                              Password : Password,
//                                                        });
//                          localStorage.setItem(Tel, RegisterUser);
//                          const RetrievedUser = JSON.parse(localStorage.getItem(Tel));
//                          console.log(RetrievedUser.FullName);
//                          if(RetrievedUser){
//                               document.getElementById('RError').textContent = 'User Information Change Successfully';
//                               setTimeout(()=>{window.location.assign('index.html')}, 3000)
//                          }else{

//                          }
//                     }else{
//                               alert('No')
//                               }
//                          }}
//                }) 
         
                             