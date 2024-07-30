$(function () {
  $(".nav-btn").on("click", function () {
    $(this).toggleClass("open");
  });

  var currentIndex = 0;
  var $backgroundImage = $(".image-infinite-bg");
  var images = $backgroundImage.data("images");

  function changeBackgroundImage() {
    // Mengubah gambar latar belakang dengan indeks berikutnya dalam array
    $backgroundImage.removeClass("animation-bg");
    currentIndex = (currentIndex + 1) % images.length;
    var imagePath = images[currentIndex];
    $backgroundImage.css("background-image", "url('" + imagePath + "')");
    $backgroundImage[0].offsetHeight;
    $backgroundImage.addClass("animation-bg");
  }

  // Panggil fungsi untuk pertama kali
  changeBackgroundImage();

  // Set interval untuk memanggil fungsi perubahan gambar dengan waktu yang ditentukan
  setInterval(changeBackgroundImage, 5000); // 10 detik (sesuaikan dengan waktu animasi CSS di atas)
});

$(window).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("#header").addClass("glass-effect");
    } else {
      $("#header").removeClass("glass-effect");
    }
  });
});

function get_search_list(selectElement) {
    const selectedValue = selectElement.value;
    const searchInput = document.getElementById('searchInput');
    const datalistToggle = document.getElementById('datalistToggle');
    const datalistContainer = document.getElementById('datalistContainer');
  
    searchInput.value = ''; // Clear search input
    searchInput.setAttribute('list', ''); // Remove datalist association
  
    if (selectedValue) {
      searchInput.removeAttribute('readonly'); // Enable input when selection is made
      datalistToggle.classList.remove('d-none');
    } else {
      searchInput.setAttribute('readonly', true); // Keep input disabled if no selection
      datalistToggle.classList.add('d-none');
      datalistContainer.classList.add('d-none'); // Hide datalist container if no selection
    }
}
  
function toggleDatalist() {
    const sType = document.getElementById('sType').value;
    const datalistContainer = document.getElementById('datalistContainer');
    
    // Check if datalistContainer is currently visible
    const isVisible = !datalistContainer.classList.contains('d-none');

    if (isVisible) {
        // Hide the datalist container
        datalistContainer.classList.add('d-none');
    } else {
        // Clear current datalist container
        datalistContainer.innerHTML = '';
      
        let optionsHTML = '';
        if (sType === '1') {
            optionsHTML = `
                <ul>
                    <li>Anterior Cruciate Ligament Cost In India</li>
                    <li>Appendix Surgery Cost In India</li>
                    <li>Arthritis</li>
                    <li>Balloon Valvuloplasty Cost In India</li>
                    <li>Bladder Cancer Treatment Cost In India</li>
                    <li>Bone Cancer Treatment Cost In India</li>
                    <!-- More options -->
                </ul>
            `;
        } else if (sType === '2') {
            optionsHTML = `
                <ul>
                    <li>Amri Hospital</li>
                    <li>Amrita Hospital</li>
                    <li>Apollo Hospital In Delhi</li>
                    <li>Art Fertility Clinics</li>
                    <li>Artemis Hospital</li>
                    <li>Asian Hospital In Faridabad</li>
                    <!-- More options -->
                </ul>
            `;
        } else if (sType === '3') {
            optionsHTML = `
                <ul>
                    <li>Dr. John Doe</li>
                    <li>Dr. Jane Smith</li>
                    <!-- More options -->
                </ul>
            `;
        }
      
        // Append the selected options
        datalistContainer.innerHTML = optionsHTML;
      
        // Show the datalist container
        datalistContainer.classList.remove('d-none');
    }
}

// Add click event listener to list items
document.addEventListener('click', function(event) {
    const datalistContainer = document.getElementById('datalistContainer');
    const datalistToggle = document.getElementById('datalistToggle');
    const searchInput = document.getElementById('searchInput');
    
    // Check if a list item was clicked
    if (event.target.tagName === 'LI') {
        searchInput.value = event.target.textContent; // Set input value to selected list item
        datalistContainer.classList.add('d-none'); // Hide datalist container
    }
    
    // Hide datalist container when clicking outside of it
    if (!datalistContainer.contains(event.target) && !datalistToggle.contains(event.target)) {
        datalistContainer.classList.add('d-none');
    }
});

// vars
