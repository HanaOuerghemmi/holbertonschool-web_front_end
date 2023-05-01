function welcome(firstName,lastName) {
    let fullName = firstName + ' ' + lastName;
    function displayFullName() {
        alert(fullName + '!');
      }
    displayFullName();
}