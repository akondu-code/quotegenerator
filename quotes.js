const quotes = [
    '"Three grand essentials to happiness in this life are something to do, something to love, and something to hope for"',
    '"When you love and accept yourself, then you stop caring about what people who dont know you think"',
    '"Power means hard work and sacrifice"' ,
    '"I want to be respected in all of my femaleness because I deserve to be"' ,
    '"Minister to the world in a way that can change it. In a real, active, practical way"' ,
    '"A great obstacle to happiness is to expect too much happiness"' ,
    '"Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness"'
];

 

const showRandomQuote = () => {
    if (quotes.length == 0) return;
    document.getElementById('quotes').innerHTML = quotes.splice(Math.floor(Math.random() * quotes.length), 1);
};