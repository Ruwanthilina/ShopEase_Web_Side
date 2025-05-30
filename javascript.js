
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

        
    // **FIXED: Mobile menu toggle function**
    function toggleMobileMenu() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active');
    }

    // **FIXED: Close mobile menu when clicking on a link**
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.getElementById('nav-links');
            navLinks.classList.remove('active');
        });
    });

    // **FIXED: Close mobile menu when clicking outside**
    document.addEventListener('click', function(event) {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.getElementById('nav-links');
        
        if (!navbar.contains(event.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });

    // Popup functions
    function openPopup() {
        document.getElementById('popup').style.display = 'flex';
    }

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    function contactUs() {
        alert('Contact us at: +94 123 456 789 or email: info@travelexplorer.lk');
    }

    // Close popup when clicking outside
    document.getElementById('popup').addEventListener('click', function(e) {
        if (e.target === this) {
            closePopup();
        }
    });
