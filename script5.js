const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  
  
  

  console.log(" Est-ce que tous les livres ont été au moins empruntés une fois ?") ;
  let emprunt = true

    for(var i=0; i < books.length; i++)
    {
        if (books[i].rented == 0){ 
            emprunt = false
            console.log(" ")
            console.log(emprunt)
            console.log(" ")
            console.log("non, certains livres n'ont jamais etés empruntés  !");
           break;
        }      
    }
    console.log(" ")
    if (emprunt == true){console.log("** oui, tous les livres ont etés empruntés au moins une fois ! **")
    ;}
    console.log(" ")
                
            

 
  

    console.log("Quel est livre le plus emprunté ?") ;

    
    all_rented = []
    for(var i=0; i < books.length; i++)
    {  all_rented.push(`${books[i].rented} `)
    }
  max_rented =  Math.max(...all_rented)
  result = books.filter(element => element.rented === max_rented);
  console.log(" ")
  console.log(max_rented) ;
  console.table(result) ;
  console.log(" ")

  console.log("Quel est le livre le moins emprunté ?") ;


  every_rented = []
  for(var i=0; i < books.length; i++)
  {  every_rented.push(`${books[i].rented} `)
  }
min_rented =  Math.min(...every_rented)
calc= books.filter(element => element.rented === min_rented);
console.log(" ")
console.log(min_rented) ;
console.table(calc) ;
console.log(" ")


  console.log("Trouve le livre avec l'ID: 873495 ;") ;

  find_by_id = books.filter(element => element.id === 873495);
  console.log(" ")
  console.table(find_by_id)
  console.log(" ")

  console.log("Supprime le livre avec l'ID: 133712 ;") ;

  let delete_by_id;
  for (let i = 0; i < books.length; i++){
    if (books[i].id == 133712){
      delete_by_id = books.splice(i,1);
    }
  }

  console.log(" ")
  console.table(delete_by_id)
  console.log(" ce livre a été supprimé !")
  console.log(" voici la nouvelle liste : ")
  console.table(books)
  console.log(" ")


  console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).") ;
  console.log(" ")
  
 

  function compare( a, b ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }
  temp = books;
  temp.sort( compare ); 
 
  console.table(temp);

  console.log(" ")