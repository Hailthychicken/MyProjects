const toggleswitch= document.getElementById('darkModeCheckbox');
const toggleicon= document.getElementById('toggle-icon')

function darkmode(){
    toggleicon.children[0].classList.replace('fa-sun', 'fa-moon')
localStorage.setItem('theme', 'dark')
}

function lightmode(){
    toggleicon.children[0].classList.replace('fa-moon', 'fa-sun')
    localStorage.setItem('theme', 'light')
}

function switchTheme(event){
   if(event.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    darkmode();
   }
   else{
    document.documentElement.setAttribute('data-theme', 'light');
    lightmode();
   }
}

toggleswitch.addEventListener('change', switchTheme);

// Local storage for theme mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleswitch.checked = true;
    darkmode();
  }
}