const dict={
    "EAD":{
        welcome: "Дорогие родители Елена, Александр и Данил!"
    },
    "TA":{
        welcome: "Дорогие родители Татьяна и Андрей!"
    },
    "AA":{
        welcome: "Дорогие Артём и Анастасия!"
    },
    "AP":{
        welcome: "Дорогие Анна и Павел!"
    },
    "KARY":{
        welcome: "Дорогие Ксения, Андрей, Роман и Яна!"
    },
    "ADD":{
        welcome: "Дорогие Анастасия, Денис и Дарья!"
    },
    "ivanushka":{
        welcome: "Дорогой Иван!",
        wedding: "Мы приглашаем тебя пойти да поплясать на нашей свадьбе!"
    },
    "EV":{
        welcome: "Дорогие Елена и Вячеслав!"
    },
    "Nikita":{
        welcome: "Дорогой Никита!",
        wedding: "Приглашаем тебя на нашу свадьбу!"
    },
    "VA":{
        welcome: "Дорогие Вероника и Алексей!"
    },
    "ASS":{
        welcome: "Дорогие Алина и Александр!"
    },
    //
    "AK47":{
        welcome: "Дорогие Андрей и Ксения!"
    },
    "LOY":{
        welcome: "Дорогие Людмила, Олеся и Юлия!"
    },
    "R":{
        welcome: "Дорогая бабушка Роза🌹!",
        wedding: "Приглашаем тебя на нашу свадьбу!"
    },
    "AR":{
        welcome: "Дорогие Радик и Александра!"
    },
    "NVO":{
        welcome: "Дорогие Наталья, Валерия и Ольга!"
    },
    "tosha":{
        welcome: "Дорогие Антон и Алина!"
    },
    "RK":{
        welcome: "Дорогие Рамиль и Карина!"
    },
    "tatars":{
        welcome: "Дорогие Дилюс и Елизавета!"
    },
//2
    "example":{
        welcome: "Дорогие user1, user2!",
        wedding: "Мы приглашаем вас пойти да поплясать на нашей свадьбе!"
    },
}



const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const p=new URLSearchParams(window.location.search)
// for (const [key, value] of p) {
//     console.log(key, value)
// }
let value = params;

const welcomeBlock=document.querySelector("#welcome-string")
const welcomeWedBlock=document.querySelector("#welcome-wed")
if(dict[params["guest"]]){
    let guest = dict[params["guest"]]
welcomeBlock.innerHTML=guest.welcome

if(guest.wedding){
    welcomeWedBlock.innerHTML = guest.wedding
}
}
