jQuery(document).ready(function() {	

// slidertext var
var slidtext = $('#slidertext');
// slideshow text home
  $(function() {
    var slideBegin = 3000,
      transSpeed = 500,
      simple_slideshow = slidtext,
      listItems = simple_slideshow.children('.main-text'),
      listLen = listItems.length,
      i = 0,
      changeList = function() {
        listItems.eq(i).fadeOut(transSpeed, function() {
          i += 1, i === listLen && (i = 0), listItems.eq(i).fadeIn(transSpeed)
        })
      };
    listItems.not(':first').hide(), setInterval(changeList, slideBegin);
  });



  function initializeMagnificPopup() {
    // Initializing Magnific Popup for each .big-img element
    $('.big-img').each(function() {
      var $this = $(this);
      $this.magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true,
        },
        gallery: {
          enabled: false
        },
        zoom: {
          enabled: true,
          duration: 300,
          opener: function(element) {
            return element.find('img');
          }
        },
        callbacks: {
          elementParse: function(item) {
            var title = item.el.attr('data-title');
            var description = item.el.attr('data-description');
  
            // Check if the parent .item has the 'int' class
            var isIntFilter = item.el.closest('.item').hasClass('int');
            item.isIntFilter = isIntFilter; // Add flag to item
  
            if (isIntFilter) {
              // Remove title and description if the filter is 'int'
              item.title = '';
              item.description = '';
            } else {
              item.title = title; // Set title for Magnific Popup
              item.description = description; // Set description for Magnific Popup
            }
          },
          open: function() {
            var $popup = $('.mfp-content .mfp-figure');
            var isIntFilter = this.currItem.isIntFilter;
  
            if (isIntFilter) {
              // Remove mfp-bottom-bar if the filter is 'int'
              $popup.find('.mfp-bottom-bar').remove();
            } else {
              var title = this.currItem.title;
              var description = this.currItem.description;
  
              // Update the title and description dynamically
              $popup.find('.mfp-title').text(title);
              $popup.find('.mfp-description').remove(); // Clear previous description
  
              if (title || description) {
                $popup.find('.mfp-bottom-bar').prepend('<div class="mfp-description">' + description + '</div>');
              }
            }
          }
        }
      });
    });
  }
  


  $(document).ready(function() {
    initializeMagnificPopup();
  });

  // step work
  var $containerstep = $('#step-text');
  $containerstep.isotope({
    itemSelector: '.cont',
    filter: '.planing',
    hiddenStyle: {
      opacity: 0
    },
    visibleStyle: {
      opacity: 1
    }
  });
  $('.filt-step').on('click', function(e) {
    e.preventDefault();
    console.log("hello");
    var $this = $(this);
    if ($this.hasClass('active')) {
      return false;
    }
    var $optionSet = $this.parents();
    $optionSet.find('.active').removeClass('active');
    $this.addClass('active');

    var selector = $(this).attr('data-filter');
    $containerstep.isotope({
      filter: selector,
    });
    return false;
  });


  // service
  var $container = $('#services');
  $container.isotope({
    itemSelector: '.service',
    filter: '.passion',
    hiddenStyle: {
      opacity: 0
    },
    visibleStyle: {
      opacity: 1
    }
  });
  $('.filt-serv').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.hasClass('selected')) {
      return false;
    }
    var $optionSet = $this.parents();
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
    });
    return false;
  });

  // projects
  function initializeIsotope() {
    var $containerpro = $('#projects-wrap');
  
    // Initialize Isotope with the default filter as .architecture
    $containerpro.isotope({
      itemSelector: '.item',
      filter: '.arc'
    });
  
    // Mark the .architecture filter button as selected
    $('.filt-projects[data-project=".arc"]').addClass('selected');
  
    $('.filt-projects').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
  
      // Check if the clicked element is already selected
      if ($this.hasClass('selected')) {
        return false;
      }
  
      // Remove 'selected' class from all filter options
      $('.filt-projects').removeClass('selected');
  
      // Add 'selected' class to the clicked element
      $this.addClass('selected');
  
      // Get the filter value and apply it to the isotope container
      var selector = $(this).attr('data-project');
      $containerpro.isotope({
        filter: selector,
      });
  
      return false;
    });
  }
  
  $(document).ready(function() {
    initializeIsotope();
  });
  // owlCarousel gallery
  var owl = $("#owl-gal");
  owl.owlCarousel({
    navigation: true,
    autoPlay: 3000,
    stopOnHover: true,
    pagination: false,
    itemsDesktop: [1600, 4],
    itemsDesktopSmall: [1024, 4],
    itemsTablet: [800, 2],
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
  });
  
  // owlCarousel projects
  var owl = $("#owl-project");
  owl.owlCarousel({
    navigation: true,
    autoPlay: false,
    stopOnHover: true,
    pagination: false,
    itemsDesktop: [1600, 4],
    itemsDesktopSmall: [1024, 4],
    itemsTablet: [800, 2],
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
  });

  // owlCarousel testimonial
  var owl = $("#owl-testimonial");
  owl.owlCarousel({
    slideSpeed: 1000,
    items: 1,
    navigation: true,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [900, 1],
    itemsTablet: [600, 1],
    itemsMobile: false,
    pagination: false,
    autoPlay: 3000,
    stopOnHover: true,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    autoHeight: true  // Add this line to enable dynamic height adjustment
  });

  // owlCarousel brand
  var owl = $("#owl-brand");
  owl.owlCarousel({
    items: 5,
    pagination: false,
    itemsDesktop: [1000, 4],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [600, 2],
    itemsMobile: false,
    autoPlay: 2000,
    stopOnHover: true
  });
  
  // img detail projects 
  var owl = $("#detailpro");
  owl.owlCarousel({
     navigation : true,
     singleItem : true,
     pagination: false,
     transitionStyle : "fade",
	 navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
  });

  // owlCarousel blog news
  var owl = $("#owl-blog");
  owl.owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [600, 2],
    itemsMobile: [500, 1],
    autoPlay: 4000,
    stopOnHover: true
  });

  // owl slider home
  var time = 7; // time in seconds
  var $progressBar,
    $bar,
    $elem,
    isPause,
    tick,
    percentTime;

  // Init the carousel
  $("#owl-slider-home").owlCarousel({
    slideSpeed: 1000,
    paginationSpeed: 1000,
    pagination: false,
    singleItem: true,
    transitionStyle: 'fade',
    afterInit: progressBar,
    afterMove: moved,
    loop: true,
    autoHeight: true,
    touchDrag: false,
    mouseDrag: false,
    navigation: true,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ]
  });


  // Init progressBar where elem is $("#owl-slider-home")
  function progressBar(elem) {
    $elem = elem;
    // build progress bar elements
    buildProgressBar();
    // start counting
    start();
  }

  // create div#progressBar and div#bar then prepend to $("#owl-slider-home")
  function buildProgressBar() {
    $progressBar = $("<div>", {
      id: "progressBar"
    });
    $bar = $("<div>", {
      id: "bar"
    });
    $progressBar.append($bar).prependTo($elem);
  }

  function start() {
    // reset timer
    percentTime = 0;
    isPause = false;
    // run interval every 0.01 second
    tick = setInterval(interval, 10);
  };

  function interval() {
    if (isPause === false) {
      percentTime += 1 / time;
      $bar.css({
        width: percentTime + "%"
      });
      // if percentTime is equal or greater than 100
      if (percentTime >= 100) {
        // slide to next item 
        $elem.trigger('owl.next')
      }
    }
  }

  // moved callback
  function moved() {
    // clear interval
    clearTimeout(tick);
    // start again
    start();
  }
  
  // owl projects detail 2
  var projectsBig = $("#projectsBig");
  var projectsSmall = $("#projectsSmall");
 
  projectsBig.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: true,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  projectsSmall.owlCarousel({
    items : 5,
    itemsDesktop      : [1199,5],
    itemsDesktopSmall : [979,4],
    itemsTablet       : [768,3],
    itemsMobile       : [414,2],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#projectsSmall")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#projectsSmall").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#projectsSmall").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    projectsBig.trigger("owl.goTo",number);
  });
 
  function center(number){
    var projectsSmallvisible = projectsSmall.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in projectsSmallvisible){
      if(num === projectsSmallvisible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>projectsSmallvisible[projectsSmallvisible.length-1]){
        projectsSmall.trigger("owl.goTo", num - projectsSmallvisible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        projectsSmall.trigger("owl.goTo", num);
      }
    } else if(num === projectsSmallvisible[projectsSmallvisible.length-1]){
      projectsSmall.trigger("owl.goTo", projectsSmallvisible[1])
    } else if(num === projectsSmallvisible[0]){
      projectsSmall.trigger("owl.goTo", num-1)
    }
    
  }

// revolution slider
	var revapi;

  	revapi = jQuery('#revolution-slider').revolution({
	                        delay:15000,
							startwidth:1170,
							startheight:600,
							onHoverStop:"on",
							thumbWidth:100,
							thumbHeight:50,
							thumbAmount:3,
							touchenabled:"on",
							stopAtSlide:-1,	
							stopAfterLoops:-1,
							touchenabled:"on",
	                        navigationType:"none",
                            dottedOverlay:"",
							fullWidth:"on",
							fullScreen:"on",
							shadow:0
	});

});

//insta icon 
function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, '\\$&');
  let url = window.location.href;
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  let results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Function to apply filter based on URL parameter
function applyFilter() {
  let category = getParameterByName('category');
  if (category) {
    let filterButton = document.querySelector(`[data-project=".${category}"]`);
    if (filterButton) {
      filterButton.click();
    }
  }
}

// Apply filter when the page loads
window.onload = applyFilter;
