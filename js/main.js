const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


// day 1 


const buttonAuth = document.querySelector('.button-auth');  //Объявляем переменные 
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('gloDelivery');    // логин подгружается с кэша

function toggleModalAuth() {                    // создали функию переключалку для .modal-auth( если клас есть она его удоляет если нету добавляет)
  modalAuth.classList.toggle('is-open')
}



function authorized(){             // создали функцию авторизован

  function logOut(){              // функция срабатывающая при клике на кнопку logOut чтобы выйти из авторизации
    login = '';
    localStorage.removeItem('gloDelivery');

    userName.textContent = login;

    buttonAuth.style.display = '';  // меняем стили после авторизации  для элементов одни исчезнут другие появятся
    userName.style.display = '';
    buttonOut.style.display = '';
     buttonOut.removeEventListener('click', logOut);
    checkAuth();
  
  }

  console.log('авторизован');

  userName.textContent = login;

   buttonAuth.style.display = 'none';  // меняем стили после авторизации  для элементов одни исчезнут другие появятся
   userName.style.display = 'inline';
   buttonOut.style.display = 'block';

    buttonOut.addEventListener('click', logOut);  // приклике на кнопку выйти сработает функция logOut
}

function notAuthorized(){
  console.log('Не авторизован');    // создали функцию неавторизован
  
    function logIn(event) {    // event для отмены обновления экраа после отправки даных
    event.preventDefault();
    login = loginInput.value;  // присваиваем переменной данный из input c #logInForm
    
    localStorage.setItem('gloDelivery' , login); // логин сохранятеся в кэш

    toggleModalAuth();         // после отправкии данных модальное окно закрывается ( в нашем случаи после нажатия кнопки войти )
    buttonAuth.removeEventListener('click', toggleModalAuth); //при клике на .button-auth удаляет класс 
    closeAuth.removeEventListener('click', toggleModalAuth); //при клике на .close-auth удалит класс  
    logInForm.removeEventListener('submit', logIn);  // при отравке данных выполняется функция logIn
    logInForm.reset(); // очищение строки input при  отправке данных 

    checkAuth();
  }

  
  buttonAuth.addEventListener('click', toggleModalAuth); //при клике на .button-auth добавится класс 
  closeAuth.addEventListener('click', toggleModalAuth); //при клике на .close-auth удалит класс  
  logInForm.addEventListener('submit', logIn);  // при отравке данных выполняется функция logIn

}

function checkAuth(){       // проверка авторизации
if(login){                            // условия авторизаци
  authorized();
} else{
  notAuthorized();
}
}

checkAuth();

