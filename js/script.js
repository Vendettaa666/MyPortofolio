// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                link.classList.remove('active');
                document.querySelector('header nav [href*=' + id + ']').classList.add ('active');
            });
            
        }
    });


    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    


    // animation footer on scroll
}


function emailSend(){
    var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yv7518235@gmail.com",
        Password : "9BA94F51F2619F804C7E2DC55476D326EBA0",
        To : 'leosatria81@gmail.com',
        From : "yv7518235@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
        message => {
            if(message=='OK'){
                swal("Secussful", "You clicked the button!", "success");
            }
            else{
                swal("Error", "You clicked the button!", "error");
            }
        }
      );
}