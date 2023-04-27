/*Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!*/

/*Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?*/

let countDownDate = new Date("Apr 28, 2023 09:30:").getTime();


let x = setInterval(function() {

 
  let now = new Date().getTime();

  
  let difference = countDownDate - now;

 
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  
  document.getElementById("output").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  
  if (difference < 0) {
    clearInterval(x);
    document.getElementById("output").innerHTML = "PERFETTO,HENRI ADESSO TOCCA A TE CORREGGERE L'ESERCIZIO!";
  }
}, );



