import dogs from './data.js'
import Characters from './Dog.js'

 let dogArray = [ 1, 2]
 function getNewDog() {
    const nextDogData = dogs[dogArray.shift()];
    return nextDogData ? new Characters(nextDogData) : {};
  }
  export default function rendernewdog(){
    const newDogData = getNewDog();
    document.getElementById('dogsMain').innerHTML = newDogData.renderDogsHtml();
}


const firstInList = new Characters(dogs[0])
document.getElementById('dogsMain').innerHTML=firstInList.renderDogsHtml()
firstInList.heartreactpadge()
firstInList.xreactbadge()




