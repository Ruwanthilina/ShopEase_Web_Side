
//Popo button
  function openPopup() {
    document.getElementById('popup').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  // ** Mobile menu toggle function**
function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

function contactUs() {
            alert('Contact Us clicked!');
        }

        function planTrip() {
            alert('Plan Your Trip clicked!');
        }


 // **Close mobile menu when clicking on a link**
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const navMenu = document.getElementById('navLinks');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // **Close popup when clicking outside of it**
  const popup = document.getElementById('popup');
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      closePopup();
    }
  });
});

