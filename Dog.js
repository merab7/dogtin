import dogs from './data.js';
import rendernewdog from './index.js';

class Characters {
  constructor(data) {
    Object.assign(this, data);
  }

  renderDogsHtml() {
    const { name, avatar, age, bio } = this;
    return `
      <img class="dogpic" src=${avatar} alt="">
      <div class="age">
        ${name},
        ${age}
      </div>
      <div class="bio">
        ${bio}
      </div>
    `;
  }

  heartreactpadge() {
    if (!this.hasBeenSwiped) {
      const heartBtn = document.getElementById('heartbtn');
      heartBtn.addEventListener('click', () => {
        document.getElementById('likexsec').innerHTML = `
          <img class="reactpadge" id="reacticon" src="images/badge-like.png" alt="">
        `;
        document.getElementById('reacticon').style.display = 'flex';
        setTimeout(() => 
        {
          rendernewdog();
          document.getElementById('reacticon').style.display = 'none';
        }, 1500);
      });
      
      
    } 
  }

  
  xreactbadge() {
    if(!this.hasBeenLiked){
      const xBtn = document.getElementById('xbtn');
      xBtn.addEventListener('click',()=>{
        document.getElementById('likexsec').innerHTML = `
        <img class="reactpadge" id="reacticon" src="images/badge-nope.png" alt="">
      `;
        document.getElementById('reacticon').style.display = 'flex';
        setTimeout(() => 
        {
          rendernewdog();
          document.getElementById('reacticon').style.display = 'none'; 
        }, 1500);
      })
    }
  }


}

export default Characters;
