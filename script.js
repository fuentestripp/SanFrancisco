let contentGridElement = document.getElementById("GridContent")

let jSonDatabase = [
  {
    "title" : "The Runner",
    "picture_url" : "FrankGore.jpg",
    "background_color" : "#",
    "reasons" : "A Hall of Fame Back. Shifty when needed, Sturdy when needed. A great release in the event of receivers not getting open (Which happened a lot). The Inconvenient Truth rumbled and stumbled his way to first down after first down, and is currently 5th all time in rushing yards"
  },

  {
    "title" : "The Left Tackle",
    "picture_url" : "JoeStaley.jpg",
    "background_color" : "#",
    "reasons" : "Nothing stops the Joe Show. A premier left tackle, undoubtedly the best in the league."
  },
  {
    "title" : "The Right Tackle",
    "picture_url" : "AnthonyDavis.jpg",
    "background_color" : "#",
    "reasons" : "A fantastic, but short-lived career."
  },
  {
    "title" : "The Left Guard",
    "picture_url" : "Iupati.jpg",
    "background_color" : "#",
    "reasons" : "Though less skilled in the pass blocking department, his work in run game with Joe Staley helped Frank Gore become one of the best runningbacks of all time. "
  },
  {
    "title" : "The Right Guard",
    "picture_url" : "Snyder.jpg",
    "background_color" : "#",
    "reasons" : "A sturdy pulling guard for Jim Harbaugh's heavy run scheme."
  },
  {
    "title" : "The Center",
    "picture_url" : "Goodwin.jpg",
    "background_color" : "#",
    "reasons" : "Former Saints Center, spending his first year with Alex Smith as quarterback."
  },
  {
    "title" : "The X Receiver",
    "picture_url" : "Crabtree.jpg",
    "background_color" : "#",
    "reasons" : "A receiver Coach Harbaugh praised as having the best hands in football. Smooth route running, fantastic jukes. Not the fastest, but good enough to create separation. "
  },
  {
    "title" : "The Y Receivers",
    "picture_url" : "JoshMorgan.jpg",
    "background_color" : "#",
    "reasons" : "Josh Morgan was the receiver at first, but after a season ending injury late in the season, Ted Ginn was moved outside and traded off roles with Braylon Edwards. "
  },
  {
    "title" : "The Z Receivers",
    "picture_url" : "Ginn.jpg",
    "background_color" : "#",
    "reasons" : "With Ted Ginn moving outside, rookie 6th round pick Kyle Williams had to step in. To those who have been 49ers fans for more than 8 years, Kyle Williams is a cursed name in the city of San Francisco. Any mention of his name will come with negative connotations."
  },
  {
    "title" : "The Tight End",
    "picture_url" : "Vernon.jpg",
    "background_color" : "#",
    "reasons" : "The most talented tight end in NFL history. Such a deadly combination of size, hands, and speed. In 2009 he was chewed out by Mike Singletary for being selfish, and since then he has served as a fantastic leader. "
  },
  {
    "title" : "The Backup Tight End",
    "picture_url" : "Delanie.jpg",
    "background_color" : "#",
    "reasons" : "Delanie Walker will forever be the one that got away, the special teams stud and spectacular run blocker. He also served as Z receiver when Kyle Williams was forced to go outside due to injuries to Ginn, Morgan, and Edwards. "
  },
]

for (var i=0; i< jSonDatabase.length; i++){
  createtheElement(jSonDatabase[i])
}

function createtheElement(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['background_color']
  newContentElement.classList.add("Items");

  let newContentHeading = document.createElement("H3")
  newContentHeading.classList.add("contentTitle");
  newContentHeading.innerHTML = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newImage = document.createElement("IMG");
  newImage.classList.add("contentImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  let newContentReasons = document.createElement("P");
  newContentReasons.classList.add("reasoning");
  newContentReasons.innerHTML = incomingJSON['reasons'];
  newContentElement.appendChild(newContentReasons);

  contentGridElement.appendChild(newContentElement);
}
