const inputs = document.querySelectorAll('.input');
const botao = document.querySelector('login-botao')
const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-ativo');
}
const handleFocusOut = ({target}) => {
    if (target.value === ""){
          const span = target.previousElementSibling;
        span.classList.remove('span-ativo');
    }
}
const handleChange = () => {
    const [username , passowrd] = inputs;
    if (username.value && passowrd.value.length > 8){

        botao.removeAttribute('disable')
    } else {
        botao.setAttribute('disable','')
    }
}


inputs.forEach((input) => {
    input.addEventListener('focus', handleFocus)
});
inputs.forEach((input) => {
    input.addEventListener('focusout', handleFocusOut)
});
inputs.forEach((input) => {
    input.addEventListener('input', handleChange)
});