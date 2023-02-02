function generateDecimalBetween(left, right) {
    return (Math.random() * (left - right) + right).toFixed(2);
}



let element = document.querySelector('.features__clients-count')


function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
          element.innerText = i + '+';
        } else {
          element.innerText = i;
        }
        i += 100;
      }
    let INCREASE_NUMBER_ANIMATION_SPEED = generateDecimalBetween(100, 1000);  
    setTimeout(function() {
        increaseNumberAnimationStep(i, element, endNumber);
    }, INCREASE_NUMBER_ANIMATION_SPEED);
  }




  
  function initIncreaseNumberAnimation() {
    
    increaseNumberAnimationStep(0, element, 5000);
  }




//Появление нового поля ввода для селекта Другое 
  let budget = document.querySelector('#budget');
  budget.addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
      let formContainer = document.createElement('div');
      formContainer.classList.add('form__group', 'form__other-input');

      let newInput = document.createElement('input');
      newInput.id = 'selfCount';
      newInput.type = 'text';
      newInput.placeholder = 'Введите ваш вариант'
      
      formContainer.append(newInput);
      document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit')); 

    }
    let otherInput = document.querySelector('.form__other-input');
    if (event.target.value !== 'other'  && Boolean(otherInput)) {
      
      otherInput.remove();
    }
  });

  let animationInited = false;
  const updateScroll = function() {
    if (window.scrollY > 0) {
      document.querySelector('header').classList.add('header__scrolled');
    } else {
      document.querySelector('header').classList.remove('header__scrolled');
    }

    let windowBottomPosition = window.scrollY + window.innerHeight;
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    


    if (windowBottomPosition >= countElementPosition && !animationInited) {
      animationInited = true;
      initIncreaseNumberAnimation();
    }

  }

  window.addEventListener('scroll', updateScroll)



  function addSmoothScroll(link) {
    link.addEventListener('click', onLinkClick)
    
  }

  function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach( link => {
    addSmoothScroll(link);
  })
  addSmoothScroll(document.querySelector('.more-button'));

  