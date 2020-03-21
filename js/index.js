let groups=document.querySelectorAll(".header .bases");

groups.forEach(item=>{
  item.addEventListener('click', event=>switchActive(event));
});

function findSelected(parent){
  return parent.querySelector('.selected');
}

function findValued(parent, element){ //find element
  return parent.querySelector(`button[value="${element.value}"]`);
}

function auxiliar(a, b){
  a.classList.remove('selected');
  b.classList.add('selected');
}

function switchActive(event){

  let target1=event.target;

  if(target1.tagName=="BUTTON"){
    let parent1 = target1.parentNode;
    let selected1 = findSelected(parent1);

    if(selected1!==target1){
      auxiliar(selected1, target1);

      let parent2, selected2;
      if(parent1===groups[0]) parent2=groups[1];
      else parent2=groups[0];

      selected2=findSelected(parent2);

      if(target1.value==selected2.value){
        let target2=findValued(parent2, selected1);
        auxiliar(selected2, target2);
      }

    }
  }

}

let swapButton=document.querySelector("#swap");
swapButton.addEventListener('click', event=>swap());
function swap(){
  let selected1=findSelected(groups[0]), selected2=findSelected(groups[1]);

  let target1=findValued(groups[0], selected2), target2=findValued(groups[1], selected1);

  auxiliar(selected1, target1); auxiliar(selected2, target2);
}