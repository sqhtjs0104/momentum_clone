const quotes = [
    {
        quote: "You are a wizard, Harry.",
        author: "- Rubeus Hagrid -"
    },
    {
        quote: "Shut up, Malfoy",
        author: "- Somebody -"
    },
    {
        quote: "Dobby is free!",
        author: "- Dobby -"
    },
    {
        quote: "The ones who love us never really leave us, you can always find them in here.",
        author: "- Sirius Black -"
    },
    {
        quote: "Always.",
        author: "- Severus Snape -"
    },
    {
        quote: "Excuse me sir, can you tell me where I might find platform 9 3/4?",
        author: "- Harry Potter -"
    },
    {
        quote: "Plenty of courage, I see. Not a bad mind, either. There's talent, oh, yes. And a thirst to prove yourself. But where to put you?",
        author: "- Sorting Hat -"
    },
    {
        quote: "This is the most direct path to the dormitories. Keep an eye on the staircases.",
        author: "- Hermione Granger -"
    },
    {
        quote: "Good luck, Harry.",
        author: "- Giney Weasley -"
    },
    {
        quote: "It does not to well on dreams and forget to live.",
        author: "- Albus Dumbledore -"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;