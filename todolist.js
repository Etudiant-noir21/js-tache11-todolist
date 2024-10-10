// recuperons nos donner sur le html
let champSaisie = document.getElementById("monChamps");

let maListe = document.getElementById('ma-liste');

let btn1 = document.createElement('button');

// creer fonction de ma todolist

function toDoList(){
    if(champSaisie.value === ''){
        return;
    }else{

        // creation d'une balise li
        let li = document.createElement('li')

        // afficher le text saisie sur le li
        li.innerHTML=  champSaisie.value;

        // creation d'une balise button

        let btn2 = document.createElement('button');
        let btn3 = document.createElement('button');

        let btnDelete = document.createElement('button');
      

        btn1.innerHTML = 'TO Do';
        btn2.innerHTML = 'Doing';
        btn3.innerHTML = 'Done';
        btnDelete.innerHTML = 'supprimer';

        // fonction pour supprimer une tache
        btnDelete.addEventListener('click', function(){  
            maListe.removeChild(li);
        })
     // ajout des boutons dans la balise li
        li.appendChild(btn1);
        li.appendChild(btn2);
        li.appendChild(btn3);

        li.appendChild(btnDelete);

     // ajout de la balise li sur mon ul
        maListe.appendChild(li);

        // fonction pour l'interaction avec le bouton to do
    btn1.addEventListener('click', function(){
        li.style.backgroundColor = 'red';
       console.log(li);
   })
  
        // fonction pour doing
        btn2.addEventListener('click', function(){
            li.style.backgroundColor = 'orange';
            console.log(li);
        })
  
        // fonction pour done
        btn3.addEventListener('click', function(){
            li.style.backgroundColor = 'green';
            console.log(li);
        })
    }
  
    // vider le champs apres avoir saisie une tache
    champSaisie.value = '';

    
 
    
}




