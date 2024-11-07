const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".toss"),
oddEvenButtons = document.querySelectorAll(".odd_even"),
optionImages = document.querySelectorAll(".option_image");

let started = false, chosen = false, tossed = false, userChosenChoice = "", userBatting = false, selected = false, secondInnings = false, userScore = 0, cpuScore = 0, gameOver = false;

optionImages.forEach(function(image1, index1){
  image1.addEventListener('click', function(ele){
    image1.classList.add("active");
    userResult.src = cpuResult.src = "./images/ten.png";

    optionImages.forEach(function(image2, index2){
      if(index1 != index2){
        image2.classList.remove("active");
      }
    });

    if(!tossed && chosen && !selected && !gameOver){

      result.textContent = `Tossing...`;
      gameContainer.classList.add("start");
      setTimeout(function(){
        gameContainer.classList.remove("start");

        let cpuImages = ["./images/one.png", "./images/two.png", "./images/three.png", "./images/four.png", "./images/five.png", "./images/six.png", "./images/seven.png", "./images/eight.png", "./images/nine.png", "./images/ten.png"];
        let randomNumber = Math.floor(Math.random() * 10);
        cpuResult.src = cpuImages[randomNumber];

        let choices = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

        let imageSrc = `./images/${ele.target.id}.png` ;
        userResult.src = imageSrc;

        let cpuValue = randomNumber + 1;
        let userValue = choices.indexOf(ele.target.id) + 1;

        let actualResult = (cpuValue + userValue) % 2;
        let requiredResult = (userChosenChoice == "odd") ? 1 : 0;

        if(actualResult == requiredResult){
          result.textContent = "You won the toss!!!";
          setTimeout(function(){
            result.textContent = "Bowlingaa Fieldingaa???"
          }, 1000);
          oddEvenButtons[0].textContent = "Bowl";
          oddEvenButtons[1].textContent = "Bat";
        }
        else{
          result.textContent = "Computer won the toss!!!";
          let randomChoice = Math.floor(Math.random()* 2);
          if(!randomChoice){
            userBatting = true;
            result.textContent = "Computer chose to bowl!!!"
          }
          else{
            result.textContent = "Computer chose to bat!!!";
          }
          oddEvenButtons[0].classList.add("hide");
          oddEvenButtons[1].classList.add("hide");
          selected = true;
        }
        
        tossed = true;
      }, 2500);
    }


    else if(tossed && chosen && selected && !secondInnings && userBatting && !gameOver){
      result.textContent = `Playing...`;
      gameContainer.classList.add("start");

      setTimeout(function(){

        gameContainer.classList.remove("start");

        let cpuImages = ["./images/one.png", "./images/two.png", "./images/three.png", "./images/four.png", "./images/five.png", "./images/six.png", "./images/seven.png", "./images/eight.png", "./images/nine.png", "./images/ten.png"];
        let randomNumber = Math.floor(Math.random() * 10);
        cpuResult.src = cpuImages[randomNumber];

        let choices = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

        let imageSrc = `./images/${ele.target.id}.png` ;
        userResult.src = imageSrc;

        let cpuValue = randomNumber + 1;
        let userValue = choices.indexOf(ele.target.id) + 1;

        if(cpuValue == userValue){
          userBatting = false;
          result.textContent = `Target ${userScore + 1}!!!`;
          userBatting = false;
          secondInnings = true;
        }
        else{
          userScore += userValue;
        }

      }, 2500);
    }

    else if(tossed && chosen && selected && secondInnings && !userBatting && !gameOver){
      result.textContent = `Playing...`;
      gameContainer.classList.add("start");

      setTimeout(function(){

        gameContainer.classList.remove("start");

        let cpuImages = ["./images/one.png", "./images/two.png", "./images/three.png", "./images/four.png", "./images/five.png", "./images/six.png", "./images/seven.png", "./images/eight.png", "./images/nine.png", "./images/ten.png"];
        let randomNumber = Math.floor(Math.random() * 10);
        cpuResult.src = cpuImages[randomNumber];

        let choices = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

        let imageSrc = `./images/${ele.target.id}.png` ;
        userResult.src = imageSrc;

        let cpuValue = randomNumber + 1;
        let userValue = choices.indexOf(ele.target.id) + 1;

        if(cpuValue == userValue){
          result.textContent = (userScore == cpuScore) ? `Match draw!!!` : `You won!!!`;
          gameOver = true;
        }
        else{
          cpuScore += cpuValue;
          if(cpuScore > userScore){
            result.textContent = `Computer won!!!`;
            gameOver = true;
          }
        }

      }, 2500);
    }


    else if(tossed && chosen && selected && !secondInnings && !userBatting && !gameOver){
      result.textContent = `Playing...`;
      gameContainer.classList.add("start");

      setTimeout(function(){

        gameContainer.classList.remove("start");

        let cpuImages = ["./images/one.png", "./images/two.png", "./images/three.png", "./images/four.png", "./images/five.png", "./images/six.png", "./images/seven.png", "./images/eight.png", "./images/nine.png", "./images/ten.png"];
        let randomNumber = Math.floor(Math.random() * 10);
        cpuResult.src = cpuImages[randomNumber];

        let choices = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

        let imageSrc = `./images/${ele.target.id}.png` ;
        userResult.src = imageSrc;

        let cpuValue = randomNumber + 1;
        let userValue = choices.indexOf(ele.target.id) + 1;

        if(cpuValue == userValue){
          userBatting = true;
          result.textContent = `Target ${cpuScore + 1}!!!`;
          secondInnings = true;
        }
        else{
          cpuScore += cpuValue;
        }

      }, 2500);
    }



    else if(tossed && chosen && selected && secondInnings && userBatting && !gameOver){
      result.textContent = `Playing...`;
      gameContainer.classList.add("start");

      setTimeout(function(){

        gameContainer.classList.remove("start");

        let cpuImages = ["./images/one.png", "./images/two.png", "./images/three.png", "./images/four.png", "./images/five.png", "./images/six.png", "./images/seven.png", "./images/eight.png", "./images/nine.png", "./images/ten.png"];
        let randomNumber = Math.floor(Math.random() * 10);
        
        cpuResult.src = cpuImages[randomNumber];

        let choices = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

        let imageSrc = `./images/${ele.target.id}.png` ;
        userResult.src = imageSrc;

        let cpuValue = randomNumber + 1;
        let userValue = choices.indexOf(ele.target.id) + 1;

        if(cpuValue == userValue){
          result.textContent = (userScore == cpuScore) ? `Match draw!!!` : `Computer won!!!`;
          gameOver = true;
        }
        else{
          userScore += userValue;
          if(userScore > cpuScore){
            result.textContent = `You won!!!`;
            gameOver = true;
          }
        }

      }, 2500);
    }

  });
});


oddEvenButtons.forEach(function(button){
    button.addEventListener('click', function(){
      if(!chosen && !tossed && !gameOver){
        userChosenChoice = this.id;
        result.textContent = `You chose ${userChosenChoice}!!!`;
        chosen = true;
      }

      else if(chosen && tossed && !selected && !gameOver){
        userChosenChoice = this.id;
        userChosenOption = (userChosenChoice == "odd") ? "bowl" : "bat";
        if(userChosenOption == "bat"){
          userBatting = true;
        }
        result.textContent = `You chose to ${userChosenOption}!!!`;
        oddEvenButtons[0].classList.add("hide");
        oddEvenButtons[1].classList.add("hide");
        selected = true;
      }

    });
});


