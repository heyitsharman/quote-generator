let button=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes = [{
    quote :'The greatest glory in living lies not in never falling, but in rising every time we fall',
    person :'Nelson Mandela'
},
{
    quote:'If you set your goals ridiculously high and it"s a failure, you will fail above everyone else"s success',
    person:"James Cameron"
},
{
    quote:'I cannot escape death, but at least I can escape the fear of it',
    person:'Marcus Aurelius'
},
{ 
    quote:'Wealth is the slave of a wise man and the master of a fool',
    person:'Seneca'

},
{
    quote:'First learn the meaning of what you say, and then speak.',
    person:'Epictetus'
},
{
    quote:'Two things are infinite: the universe and human stupidity; and I"m not sure about the universe.',
    person:'Albert Einstein'
},{
    quote:'To love oneself is the beginning of a lifelong romance.',
    person:'Oscar Wilde'
},
{
    quote:'Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape.',
    person:'Bell Hooks'

},
{
    quote:'No one can make you feel inferior without your consent',
    person:'Eleanor Roosevelt'
},
{
    quote:'There is a truth deep down inside of you that has been waiting for you to discover it, and that truth is this: you deserve all good things life has to offer.',
    person:'Rhonda Byrne'
}]


button.addEventListener('click',function (){
    let random =Math.floor(Math.random()*quotes.length);
    quote.innerText= quotes[random].quote;
    person.innerText= quotes[random].person;

})
