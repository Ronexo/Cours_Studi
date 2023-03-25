POUR i ALLANT_DE 0 À 8 {PAR_PAS_DE 2} FAIRE
    AFFICHE(i)
FIN_POUR
//boucle pour

total = 0

TANT_QUE <totale> INFÉRIEUR À 20 FAIRE
    total = total + 1
FIN_TANT_QUE
// boucle tant que
POUR i ALLANT_DE 0 À 100 {PAR_PAS_DE 1} FAIRE
  SI i SUPÉRIEUR À 50 ALORS
    AFFICHE("La valeur de i est supérieure à 50")
  SINON
    AFFICHE("La valeur de i est inférieure ou égale à 50")
  FIN_SI
FIN_POUR
//if else