/* ==================== GAME DATA ==================== */

let completed = new Set();

let currentQuestion = 0;


const quiz = [

  {
    question:
      "Where did Kai and Shy first meet?",

    answers: [
      "Tinder",
      "School",
      "Facebook",
      "Coffee shop"
    ],

    correct: 0
  },


  {
    question:
      "What's Shy's favorite hobby?",

    answers: [
      "Watching Movie",
      "Reading a Book",
      "Playing Genshin",
      "Sleeping"
    ],

    correct: 2
  },


  {
    question:
      "What's Kai's usual coffee preference?",

    answers: [
      "Caramel macchiato",
      "Vanilla latte",
      "Black coffee",
      "Iced mocha"
    ],

    correct: 2
  },

 {
    question: 
      "What's Kai's favorite way to spend his    free time?",
  answers: [
    "Playing games",
    "Watching movies",
    "Going outside",
    "Sleeping all day"
  ],
  correct: 1
},
  
  
  {
    question:
      "What's Shy's favorite drink?",

    answers: [
      "Hot matcha",
      "Black coffee",
      "Milk tea",
      "Soda"
    ],

    correct: 0
  }  
];


/* ==================== SCREEN CONTROL ==================== */

function show(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.remove("active");

    });


  const target =
    document.getElementById(id);


  if (target) {

    target.classList.add("active");

  }

}


/* ==================== START ==================== */

function startGame() {

  show("map");

  document.getElementById(
    "questText"
  ).textContent =
    "Explore our memories ♡";

}


/* ==================== LOCATION ==================== */

function openLocation(type) {

  completed.add(type);

  updateProgress();


  /* -------- 2020 -------- */

  if (type === "start") {

    popup(`

      <h2>🌸 2020</h2>

      <p>
        This is where our little story started.
      </p>

      <p>
        Two random people meeting on Tinder...
        and somehow it eventually became us. 😭
      </p>

      <p>
        Funny how one tiny conversation can
        lead to so many memories.
      </p>

    `);

  }


  /* -------- FIRST MEET -------- */

  if (type === "meet") {

    popup(`

      <h2>🏸 October 6, 2021</h2>

      <p>
        Our first meeting. Our first hello
        in person. And a memory I'll always
        keep close to my heart. 🤍
      </p>
  
      <p>
        I remember being so nervous,
        wondering how it would feel to finally
        stand in front of you after everything
        that had happened between us.
      </p>

      <p>
        I didn't know what that day would mean
        to us in the years to come.
        I only knew that meeting you felt
        special in a way I couldn't explain.
      </p>

      <p>
        And now, whenever I look back
        at that little day at the badminton court,
        I can't help but smile.
        Because I got to meet the person
         who would become such a big part of my life. 🥹♡
      </p>
    `);

  }


  /* -------- OCTOBER 15 -------- */

  if (type === "anniv") {

    popup(`

      <h2>💗 October 15, 2021</h2>

      <p>
        The day we decided to give
        this little thing called "us"
        another chance. Look at us now. 😭
      </p>

      <p>
        We talked, opened up,
        and took a chance on each other.
        Little did we know we'd come this far.
      </p>

      <p>
        And now, five years later...
        you're still my person.
        Unfortunately for you, I'm still yours too. 🤍
      </p>

    `);

  }


  /* -------- KAI -------- */

  if (type === "kai") {

    popup(`

      <h2>☕ Kai's Corner</h2>

      <p>
        A little goofy.
        A little annoying.
        Thinks he's funny (unfortunately, he is).
        Acts all calm like he doesn't cause
        90% of my giggles and headaches. 😭
      </p>

      <p>
        75% black coffee. ☕
        20% watching movies. 🎬
        5% brain cells fighting for their lives😭
        100% my favorite problem. 🤍
      </p>

      <p>
         <strong>Current obsession:</strong><br>
        PUBG and shooting games.
        Bro will lock in for a game
        but remembering certain things?
        Hmmm... let's not talk about that. 😭🎮
      </p>

      <p>
         <strong>Final verdict:</strong><br>
          Annoying? Absolutely.<br>
          Teasable? Every single day.<br>
          Replaceable? Not a chance, unfortunately. 🤍
      </p>

      <p>
        Thank you for listening to my nonsense,
        entertaining my random thoughts,
        and putting up with my moods.
        Unfortunately, you signed up for this.
        No refunds, baby. 😭🤍
     </p>
     
     </p>
        Five years of you being you,
        and me being me.
        Still teasing, still learning,
        still choosing each other.
        Not bad for two idiots, huh? ♡
      </p>

    `);

  }


  /* -------- MEMORIES -------- */

  if (type === "memories") {

    closePopup();

    show("memories");

  }


  /* -------- QUIZ -------- */

  if (type === "quiz") {

    closePopup();

    show("quiz");

    currentQuestion = 0;

    loadQuiz();

  }

}


/* ==================== POPUP ==================== */

function popup(content) {

  document.getElementById(
    "popupContent"
  ).innerHTML = content;


  document.getElementById(
    "popup"
  ).classList.add("show");

}


function closePopup() {

  document.getElementById(
    "popup"
  ).classList.remove("show");

}


/* ==================== PROGRESS ==================== */

function updateProgress() {

  const progress = document.getElementById("progress");
  const questText = document.getElementById("questText");
  const finalButton = document.getElementById("finalQuestButton");

  progress.textContent = `${completed.size} / 6`;

  if (completed.size >= 6) {

    questText.textContent = "✦ ALL MEMORIES FOUND ✦";

    finalButton.style.display = "block";

  } else {

    questText.textContent = "Explore our memories ♡";

    finalButton.style.display = "none";

  }
}

/* ==================== QUIZ ==================== */

function loadQuiz() {

  const question =
    document.getElementById(
      "question"
    );


  const answers =
    document.getElementById(
      "answers"
    );


  if (currentQuestion >= quiz.length) {

    question.textContent =
      "YOU MADE IT ♡";


    answers.innerHTML = `

      <p>
        Okay... you actually remember things. 😭
      </p>

      <button
        class="answer"
        onclick="finishQuiz()"
      >
        CONTINUE ♡
      </button>

    `;

    return;

  }


  const q =
    quiz[currentQuestion];


  question.textContent =
    q.question;


  answers.innerHTML = "";


  document.getElementById(
    "quizResult"
  ).textContent = "";


  q.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "answer";


      button.textContent =
        answer;


      button.onclick =
        () => answerQuestion(index);


      answers.appendChild(
        button
      );

    }
  );

}


/* ==================== ANSWERS ==================== */

function answerQuestion(index) {

  const q =
    quiz[currentQuestion];


  const result =
    document.getElementById(
      "quizResult"
    );


  if (index === q.correct) {

    result.textContent =
      "Correct 😭💗";


    currentQuestion++;


    setTimeout(() => {

      loadQuiz();

    }, 700);


  } else {

    result.textContent =
      "Nope 😭 try again.";

  }

}


/* ==================== FINISH QUIZ ==================== */

function finishQuiz() {

  completed.add("quiz");

  updateProgress();

  show("map");

}


/* ==================== FINAL LETTER ==================== */

const letter = `
Five years already, baby.

That's actually crazy. 😭

Five whole years of us.

We've changed a lot,
gone through so much,
made so many memories,
and somehow, through everything,
we're still here.

When I think about how much we've grown
since we first started, it honestly makes me emotional.
We've seen different sides of each other,
we've had good days and bad days,
we've laughed together, cried together,
and had our fair share of moments,
but through all of it, you’re still the person
I want beside me.

One of the things I appreciate most
about us is how we've learned
to understand each other.

We're not perfect,
and we definitely have our moments,
but through the years,
I've learned so much about patience,
understanding, forgiveness, and really listening.

I've noticed all the effort you've put into us, baby —
every little thing, even the things
you probably thought I didn't notice.
I see them. I appreciate them.
And I hope you know how much they mean to me.

Thank you for being patient with me,
for listening to me,
for trying to understand me,
and for making me feel safe enough
to open up little by little.

Thank you for loving me through
the different versions of myself.
For staying when things weren't always easy.
For making me laugh when I needed it,
for being someone I can come home to,
and for making me feel loved in so many little ways.

I don't think I say it enough,
but I’m really, really grateful for you, baby.

Out of all the people in this world,
I'm so lucky that I get to love you
and that I get to be loved by you.

I hope the understanding,
forgiveness, and love we've built over these five years
never change.

I hope that as we continue to grow,
we'll keep learning each other,
keep choosing each other,
and keep making a home in each other's hearts.

I don't know what the next years will bring,
but I know I want to experience them with you.

More memories, more laughter, more random moments,
more adventures, more growing together,
and even more years of us.

I love you so, so much, baby.
More than I could ever properly put into words. 🤍

Thank you for these five beautiful years
and for being you.

Cheers to us, baby.
To five years down and hopefully
so, so many more to go. 🥹❤️

Happy 5 years, my love! ♡

- Shy ❤️

`;


/* ==================== TYPEWRITER ==================== */

function typeLetter() {

  const element =
    document.getElementById(
      "letterText"
    );


  element.textContent = "";


  let i = 0;


  const interval =
    setInterval(() => {

      element.textContent +=
        letter[i];

      i++;


      if (i >= letter.length) {

        clearInterval(
          interval
        );

      }

    }, 25);

}


/* ==================== FINAL QUEST ==================== */

function openFinalQuest() {

  show("letter");

  typeLetter();

}

/* ==================== FINAL QUEST ==================== */

function openFinalQuest() {
  closePopup();
  show("finalQuest");
}


/* ==================== OPEN LETTER ==================== */

function openLetter() {
  show("letter");
  typeLetter();
}

/* ==================== MEMORY ALBUM ==================== */

const memories = [
  {
    title: "First Meet ♡",
    date: "October 6, 2021",
    image: "images/first-meet.jpg",
    description: "The day I finally got to see you in person. I was so nervous, but little did I know that this day would become one of the memories I'd always look back on with the biggest smile. 🥹"
  },

  {
    title: "Out of Town ♡",
    date: "November 12–14, 2025",
    image: "images/cdo.jpg",
    description: "Our little adventure away from home. Three days of exploring, laughing, and making memories together. If there's one thing I know, it's that even the simplest moments feel special when I'm sharing them with you. 🤍"
  },

  {
    title: "Photo Booth ♡",
    date: "May 1, 2024",
    image: "images/photo booth.jpg",
    description: "Our first photobooth together! Just a few little pictures, but somehow they captured a moment I wish I could keep reliving. A tiny memory of us that I'll always be happy to look back at. 📸♡"
  },

  {
    title: "A Little Gift ♡",
    date: "December 3, 2023",
    image: "images/gift.jpg",
    description: "It might have been a little          gift, but it reminded me of the pasalubong I used to receive from my Japanese uncle. It's funny how the smallest things can bring back old memories while making new ones with someone you love. 🥹🤍"
  },

  {
    title: "Beach & Painting Date ♡",
    date: "March 8, 2025",
    image: "images/beachpainting.jpg",
    description: "A day of beach views, painting together, and making little memories with you. 🌊🎨 I love how one day can hold so many different moments worth remembering. From enjoying the sea to creating something side by side, it wasn't just about what we did, but getting to spend the whole day with you. One of those days I'd happily relive all over again. 🥹🤍"
  },
  
  {
    title: "Chasing Sunsets 🌅♡",
    date: "March 25, 2025",
    image: "images/sunset.jpg",
    description: "Watching the sunset with you, wishing the day didn't have to end just yet. 🌅 The sky was beautiful, but having you there made the moment even more special. One of those quiet little memories I wish I could keep forever. ♡"
  },
 
  {
    title: "Visiting You ♡",
    date: "November 13, 2024",
    image: "images/visitingyou.jpg",
    description: "Getting to visit you and spend time with you in your own little world meant so much to me. 🥹 Every moment together made the trip worth it. It's never really about where we go, but getting to be with you. I'd make that trip over and over again just to see you. 🤍"
  },

  {
    title: "Little Picnic Dates ♡",
    date: "A little bit of everything",
    image: "images/picnic.jpg",
    description: "Our little picnic dates, just you and me, enjoying the food and the moment. 🧺🤍 I love how we can turn something so simple into a memory worth keeping. It's not about having the fanciest date, but getting to sit beside you and enjoy these little moments together. More picnics with you, please. 🥹♡"
  },

  {
    title: "Food Trip Adventures ♡",
    date: "A little bit of everything",
    image: "images/foodtrip.jpg",
    description: "HAHAHAHA, us finding yet another excuse to eat. 😭🍜 From trying different food to satisfying our random cravings, there's always something new for us to enjoy together. I swear, we could probably make a whole album just about the things we've eaten. More food trips with you, baby. It's a date! 🤍"
  },

  {
    title: "More Foodie Moments ♡",
    date: "A little bit of everything",
    image: "images/foodtrip1.jpg",
    description: "Another day, another excuse to eat together. HAHAHAHA. 😭🤍 I don't think we'll ever run out of food to try or cravings to satisfy. And honestly, I wouldn't want it any other way. Here's to more random food trips, sharing meals, and making little memories one bite at a time with you. 🍜♡"
  },

  {
    title: "Our First Concert ♡",
    date: "September 21, 2025",
    image: "images/concert.jpg",
    description: "My first concert, and I got to experience it with you. My first time making that kind of memory, with someone who makes so many of my ordinary days special. I'm really glad you were there with me. 🎶♡"
  }
];

let currentMemory = 0;


function loadMemory(index) {

  const memory = memories[index];

  const image = document.getElementById("albumImage");

  image.style.opacity = "0";
  image.style.transform = "translateX(15px)";

  setTimeout(() => {

    image.src = memory.image;
    image.alt = memory.title;

    document.getElementById("albumTitle").textContent =
      memory.title;

    document.getElementById("albumDate").textContent =
      memory.date;

    document.getElementById("albumDescription").textContent =
      memory.description;

    document.getElementById("albumCounter").textContent =
      `${index + 1} / ${memories.length}`;

    image.style.opacity = "1";
    image.style.transform = "translateX(0)";

  }, 200);


  // Hide/show BACK button

  const backButton = document.getElementById("albumBack");

  if (index === 0) {
    backButton.style.visibility = "hidden";
  } else {
    backButton.style.visibility = "visible";
  }


  // Change NEXT button on final memory

  const nextButton = document.getElementById("albumNext");
  const finishButton = document.getElementById("albumFinish");

  if (index === memories.length - 1) {

    nextButton.style.display = "none";
    finishButton.style.display = "block";

  } else {

    nextButton.style.display = "block";
    finishButton.style.display = "none";

  }
}


function openMemoryAlbum() {

  currentMemory = 0;

  show("memories");

  loadMemory(currentMemory);

}


function nextMemory() {

  if (currentMemory < memories.length - 1) {

    currentMemory++;

    loadMemory(currentMemory);

  }

}


function previousMemory() {

  if (currentMemory > 0) {

    currentMemory--;

    loadMemory(currentMemory);

  }

}


function finishAlbum() {

  // Mark memories as completed
  completed.add("memories");

  updateProgress();

  // Go back to the map
  show("map");

}