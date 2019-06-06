class WordService {
  words = [
    "Pulp Fiction",
    "Fight Club",
    "The Shawshank Redemption",
    "The Dark Knight",
    "Inglourious Basterds",
    "Inception",
    "The Matrix",
    "The Empire Strikes Back",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Toy Story",
    "The Big Lebowski",
    "Django Unchained",
    "The Lord of the Rings: The Return of the King",
    "The Departed",
    "Memento",
    "The Godfather",
    "Reservoir Dogs",
    "Saving Private Ryan",
    "Forrest Gump",
    "Monty Python and the Holy Grail",
    "Se7en",
    "Back to the Future",
    "Goodfellas",
    "The Prestige",
    "Shaun of the Dead",
    "Alien",
    "The Silence of the Lambs",
    "The Lord of the Rings: The Two Towers",
    "Spirited Away",
    "The Good, the Bad and the Ugly",
    "Eternal Sunshine of the Spotless Mind",
    "Raiders of the Lost Ark",
    "2001: A Space Odyssey",
    "rangelove Or: How I Learned to Stop Worrying and Love the Bomb",
    "Blade Runner",
    "The Lion King",
    "One Flew Over the Cuckoo's Nest",
    "There Will Be Blood",
    "The Shining",
    "The Truman Show",
    "A Clockwork Orange",
    "Star Wars",
    "District 9",
    "Up",
    "Office Space",
    "12 Angry Men",
    "Pan's Labyrinth",
    "The Usual Suspects",
    "Jurassic Park",
    "V for Vendetta",
    "The Princess Bride",
    "No Country for Old Men",
    "Full Metal Jacket",
    "Schindler's List",
    "Good Will Hunting",
    "Children of Men",
    "WALL·E",
    "American History X",
    "Die Hard",
    "Drive",
    "Moon",
    "Groundhog Day",
    "Batman Begins",
    "Fargo",
    "The Incredibles",
    "O Brother, Where Art Thou?",
    "Gladiator",
    "Airplane!",
    "Apocalypse Now",
    "American Beauty",
    "Terminator 2: Judgment Day",
    "Leon: The Professional",
    "Toy Story 3",
    "Snatch",
    "American Psycho",
    "The Social Network",
    "Oldboy",
    "Ferris Bueller's Day Off",
    "Princess Mononoke",
    "In Bruges",
    "Donnie Darko",
    "Casablanca",
    "City of God",
    "Psycho",
    "The Fifth Element",
    "Seven Samurai",
    "Taxi Driver",
    "28 Days Later",
    "Requiem for a Dream",
    "The Godfather: Part II",
    "Hot Fuzz",
    "Trainspotting",
    "Amélie",
    "Twelve Monkeys",
    "Aliens",
    "The Dark Knight Rises",
    "Kiss Kiss Bang Bang",
    "Lost in Translation",
    "Chinatown",
    "The Royal Tenenbaums",
    "Rear Window",
    "Jaws",
    "Ocean's Eleven",
    "Howl's Moving Castle",
    "The Green Mile",
    "Black Swan",
    "Citizen Kane",
    "Moonrise Kingdom",
    "Looper",
    "The Thing",
    "The Breakfast Club",
    "The Cabin in the Woods",
    "nfidential",
    "e World",
    "Finding Nemo",
    "Boogie Nights",
    "Superbad",
    "Sin City",
    "Fear and Loathing in Las Vegas",
    "Indiana Jones and the Last Crusade",
    "Gattaca",
    "To Kill a Mockingbird",
    "Lawrence of Arabia",
    "Being John Malkovich",
    "The Pianist",
    "Annie Hall",
    "Anchorman: The Legend of Ron Burgundy",
    "Argo",
    "Raging Bull",
    "Vertigo",
    "Little Miss Sunshine",
    "The Avengers",
    "Butch Cassidy and the Sundance Kid",
    "Dazed and Confused",
    "(500) Days of Summer",
    "Willy Wonka & the Chocolate Factory",
    "Unforgiven",
    "Brazil",
    "The Iron Giant",
    "Akira",
    "The Terminator",
    "Ghostbusters",
    "This Is Spinal Tap",
    "Gran Torino",
    "A Fistful of Dollars",
    "Stand by Me",
    "Apollo 13",
    "Blazing Saddles",
    "Amadeus",
    "Kick-Ass",
    "Rushmore",
    "Life of Brian",
    "Almost Famous",
    "Network",
    "Mulholland Drive",
    "Star Trek",
    "It's a Wonderful Life",
    "Singin' in the Rain",
    "The Graduate",
    "Cool Hand Luke",
    "The Nightmare Before Christmas",
    "Metropolis",
    "Casino Royale",
    "Zodiac",
    "Crouching Tiger, Hidden Dragon",
    "True Grit",
    "Braveheart",
    "Yojimbo",
    "The Thin Red Line",
    "Warrior",
    "Blue Velvet",
    "Primer",
    "The Life Aquatic With Steve Zissou",
    "Big Fish",
    "ith Goes to Washington",
    "Clerks",
    "Rashomon",
    "Once Upon a Time in the West",
    "The Rocky Horror Picture Show",
    "North by Northwest",
    "Gangs of New York",
    "Duck Soup",
    "Grave of the Fireflies",
    "M",
    "e Extra-Terrestrial",
    "The Blues Brothers",
    "The Great Dictator",
    "Galaxy Quest",
    "Hotel Rwanda",
    "Brick",
    "The Assassination of Jesse James by the Coward Robert Ford",
    "Zoolander",
    "The Deer Hunter",
    "8½",
    "The Third Man",
    "The Bridge on the River Kwai",
    "The Lives of Others",
    "Heat",
    "The Seventh Seal",
    "Stranger Than Fiction",
    "Double Indemnity",
    "On the Waterfront",
    "Predator",
    "Lucky Number Slevin",
    "Catch Me If You Can",
    "Dredd",
    "Battle Royale",
    "Robocop",
    "How to Train Your Dragon",
    "Dog Day Afternoon",
    "Planet of the Apes",
    "Nausicaä of the Valley of the Wind",
    "Master and Commander: The Far Side of the World",
    "City Lights",
    "Paths of Glory",
    "Brokeback Mountain",
    "The Hobbit: An Unexpected Journey",
    "The Wizard of Oz",
    "Close Encounters of the Third Kind",
    "The Wrestler",
    "The Jerk",
    "Slumdog Millionaire",
    "Silver Linings Playbook",
    "Glengarry Glen Ross",
    "Sunset Boulevard",
    "Return of the Jedi",
    "Ran",
    "Collateral",
    "Let the Right One in",
    "The Sting",
    "Tucker and Dale Vs Evil",
    "Some Like It Hot",
    "Shutter Island",
    "The Maltese Falcon",
    "The Treasure of the Sierra Madre",
    "Sunshine",
    "Punch-Drunk Love",
    "Magnolia",
    "Thank You for Smoking",
    "Ghost in the Shell",
    "Barry Lyndon",
    "Ikiru",
    "Dawn of the Dead",
    "The Hurt Locker"
  ];

  getRandomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }
}

export default new WordService();
