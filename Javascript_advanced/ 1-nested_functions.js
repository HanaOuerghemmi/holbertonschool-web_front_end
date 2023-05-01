let globalVariable ='Welcome';
function other() {
    alert(globalVariable);
    let course = 'Holberton';
    function inner(){
        alert(globalVariable + course );
        let exclamation = '!';
        function inception() {
            alert(globalVariable + course + exclamation);
        }inception();
    }inner();
}
other();