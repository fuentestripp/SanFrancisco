let contentGridElement = document.getElementById("GridContent")

let jSonDatabase = [
  {
    "title" : "The Second Punch",
    "picture_url" : "Bowman.jpg",
    "background_color" : "#",
    "reasons" : "In case one Patrick Willis wasn't enough in this 3-4 Defense, Navarro Bowman was there to kill anyone Patrick couldn't. These two on defense led the greatest defense of the 2010 decade."
  },

  {
    "title" : "The Missle",
    "picture_url" : "Goldson.jpg",
    "background_color" : "#",
    "reasons" : "Imagine thinking your receivers were safe when throwing deep over the middle. Goldson was a hawk for the ball, too, racking up 6 INTs. It wasn't just about leveling anyone in the pass game, though he did seem fond of that. "
  },
  {
    "title" : "The Hammer",
    "picture_url" : "Whitner.jpg",
    "background_color" : "#",
    "reasons" : "Whitner is responsible for one of the most famous hits of the 2010's, when he put Pierre Thomas to sleep. If you thought Dashon Goldson hit hard, you haven't seen anything yet. "
  },
  {
    "title" : "The Rookie",
    "picture_url" : "Aldon.jpg",
    "background_color" : "#",
    "reasons" : "Rookie sensation Aldon Smith burst onto the scene, at first rivaling the now great Von Miller for rookie of the year. This man is definitely stupid, as he was arrested for yelling bomb at an airport, but his disruptive abilities in the pass game made the secondary that much better. "
  },
  {
    "title" : "The Stud",
    "picture_url" : "McDonald.jpg",
    "background_color" : "#",
    "reasons" : "Though not as flashy as Justin Smith, Ray McDonald handled the nitty gritty. Stuffing every run is his MO."
  },
  {
    "title" : "The Vet",
    "picture_url" : "JustinSmith.jpg",
    "background_color" : "#",
    "reasons" : "Experience outranks everything. Just ask Justin Smith, who fought his way to the quarterback every play. Being paired with Aldon Smith made the left side impossible to defend. "
  },
  {
    "title" : "The Center",
    "picture_url" : "Isaac.jpg",
    "background_color" : "#",
    "reasons" : "If you ever needed a consistent force at the nose tackle position, one who disrupted every other run, one who led running holes the wrong way, one who gave his outside teammates more fame by making the big tackle, Ray McDonald is the guy "
  },
  {
    "title" : "The Punisher",
    "picture_url" : "AhmadBrooks.jpg",
    "background_color" : "#",
    "reasons" : "If you thought Aldon Smith, Justin Smith, Ray McDonald, and the 2 commanders at middle linebacker were terrible enough to face, I've got bad news for you, because Ahmad Brooks was still on the opposite end of Aldon Smith, meaning hell was coming at you from both sides. The fantastic balance between run stuffer, coverage dropper, and pass rusher made Brooks a swiss army knife in Harbaugh's defense."
  },
  {
    "title" : "The Hawk",
    "picture_url" : "CarlosRogers.jpg",
    "background_color" : "#",
    "reasons" : "Ever go to a high school with a really awkward dude who was always just there, without making a scene, and then they end up becoming an incredibly famous superstar? That was Carlos Rogers. After being incredibly underwhelming in Washington DC, Carlos Rogers was sent to San Francisco, where in his first year he caught 6 INT and a Pro Bowl appearance. He's got nice dance moves too. "
  },
  {
    "title" : "The Blanket",
    "picture_url" : "TarellBrown.jpg",
    "background_color" : "#",
    "reasons" : "You are never going to beat Tarell Brown deep. an absolute stud at corner, if Dashon Goldson ever bit too hard on a fake, Tarell Brown wouldn't. He'll have that receiver locked up. "
  },
  {
    "title" : "The Rookie Corner",
    "picture_url" : "Culliver.jpg",
    "background_color" : "#",
    "reasons" : "Because the team occasionally ran Nickel, and they didn't have a nickel corner, San Francisco drafted corner Cris Culliver to lock down the outside as Carlos Rogers slid inside. He was a rookie, and occasionally a weak link, but you had to throw a perfect pass to get anything past him."
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
