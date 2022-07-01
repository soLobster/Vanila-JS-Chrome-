const quotes = [
{
    quote: "The more difficult the victory, the greater the happiness in winning.",
    author: "Pelé",
},
{
    quote: "ou have to fight to reach your dream. You have to sacrifice and work hard for it.",
    author: "Lionel Messi",
},
{
    quote: "Overpower. Overtake. Overcome.",
    author: "Serena Williams",
},
{
    quote: "Winners never quit and quitters never win.",
    author: "Vince Lombardi",
},
{
    quote: "I don’t count my situps. I only start counting once it starts hurting.",
    author: "Muhammad Ali",
},
{
    quote: "I’ve failed over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
},
{
    quote: "There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you do.",
    author:"Derek Jeter",
},
{
    quote: "It is not the size of a man but the size of his heart that matters.",
    author:"Evander Holyfield",
},
{
    quote: "Wisdom is always an overmatch for strength.",
    author:"Phil Jackson",
},
{
    quote: "Never give up! Failure and rejection are only the first step to succeeding.",
    author:"Jim Valvano",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
 
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;