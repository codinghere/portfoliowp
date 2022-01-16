// project count
// console.log("hello ami asi")
// alert('ami asi');
// $(function () {
// if (window.location.href == 'http://127.0.0.1:5501/home.html') {
 

  let counter = document.querySelector(".wpCount")
  let countStart = 0
  let plus = " +"
  let countEnd = 149
  let countSpeed = 15
  var count = setInterval(() => {
    countStart++
    counter.innerHTML = countStart + plus
    if (countStart == countEnd) {
      clearInterval(count)
    }
  }, countSpeed);
// }
// })


//ui ux count
// $(function () {
//   if (window.location.href == 'http://127.0.0.1:5500/home.html') {
    let counter = document.querySelector(".uiUxCount")
    let countStart = 0
    let plus = " +"
  
    let countEnd = 99
    let countSpeed = 15
    var count = setInterval(() => {
      countStart++
      counter.innerHTML = countStart + plus
      if (countStart == countEnd) {
        clearInterval(count)
      }
    }, countSpeed);
  // }

// })
// if (window.location.href == host + 'index.html') {
//   console.log("this is index page");
// }


//experience count
// $(function () {
//   if (window.location.href == 'http://127.0.0.1:5500/home.html') {

    // let counter = document.querySelector(".yrsCount")
    // let countStart = 0
    // let countEnd = 4
    // let countSpeed = 15
    // let plus = " +"
  
    // var count = setInterval(() => {
    //   countStart++
    //   counter.innerHTML = countStart + plus
    //   if (countStart == countEnd) {
    //     clearInterval(count)
    //   }
    // }, countSpeed);
//   }

// })

/*============= jquery inits section =============*/
// $(document).ready(function () {
  //=========== owl carousel init Section

  /* About Slider*/
  
  /*About Slider end */
  
  // $('li > a').click(function (e) {
  //   e.preventDefault();
  //   $('li > a').removeClass('active');
  //   $(this).addClass('active');
  // });

  
// })

/*============ particle js Init section=============*/
// $(function () {

//   particlesJS("particles-js", {
//     "particles": {
//       "number": {
//         "value": 120,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#BB2D3B"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 3,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 4,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "grab"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 140,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   });
//   particlesJS("particles-js-two", {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 5,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true,
//     "config_demo": {
//       "hide_card": false,
//       "background_color": "#b61924",
//       "background_image": "",
//       "background_position": "50% 50%",
//       "background_repeat": "no-repeat",
//       "background_size": "cover"
//     }


//   });

//   var count_particles, stats, update;
//   stats = new Stats;
//   stats.setMode(0);
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.left = '0px';
//   stats.domElement.style.top = '0px';
//   document.body.appendChild(stats.domElement);
//   count_particles = document.querySelector('.js-count-particles');
//   update = function () {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//       count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
//   };
//   requestAnimationFrame(update);
// });


/*============ Sticky Header ============*/

// $(function () {
  const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains("scroll-down")
    ) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });
// })

// =======================================================================//





// var count_particles, stats, update; stats = new Stats; stats.setMode(0); 
// stats.domElement.style.position = 'absolute'; 
// stats.domElement.style.left = '0px'; 
// stats.domElement.style.top = '0px';
//  document.body.appendChild(stats.domElement);
//  count_particles = document.querySelector('.js-count-particles'); 
//  update = function () {
//     stats.begin(); 
//   stats.end(); 
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
//   }
//    requestAnimationFrame(update); 
//   }; 
//   requestAnimationFrame(update);;

// $(function () {

// })

(function ($) {
	$(document).ready(function () {
    // particlesJS("particles-js-three", {
    //   "particles": {
    //     "number": {
    //       "value": 355,
    //       "density": {
    //         "enable": true,
    //         "value_area": 789.1476416322727
    //       }
    //     },
    //     "color": {
    //       "value": "#ffffff"
    //     },
    //     "shape": {
    //       "type": "circle",
    //       "stroke": {
    //         "width": 0,
    //         "color": "#000000"
    //       },
    //       "polygon": {
    //         "nb_sides": 5
    //       },
    //       "image": {
    //         "src": "img/github.svg",
    //         "width": 100,
    //         "height": 100
    //       }
    //     },
    //     "opacity": {
    //       "value": 0.48927153781200905,
    //       "random": false,
    //       "anim": {
    //         "enable": true,
    //         "speed": 0.2,
    //         "opacity_min": 0,
    //         "sync": false
    //       }
    //     },
    //     "size": {
    //       "value": 2,
    //       "random": true,
    //       "anim": {
    //         "enable": true,
    //         "speed": 2,
    //         "size_min": 0,
    //         "sync": false
    //       }
    //     },
    //     "line_linked": {
    //       "enable": false,
    //       "distance": 150,
    //       "color": "#ffffff",
    //       "opacity": 0.4,
    //       "width": 1
    //     },
    //     "move": {
    //       "enable": true,
    //       "speed": 0.2,
    //       "direction": "none",
    //       "random": true,
    //       "straight": false,
    //       "out_mode": "out",
    //       "bounce": false,
    //       "attract": {
    //         "enable": false,
    //         "rotateX": 600,
    //         "rotateY": 1200
    //       }
    //     }
    //   },
    //   "interactivity": {
    //     "detect_on": "canvas",
    //     "events": {
    //       "onhover": {
    //         "enable": true,
    //         "mode": "bubble"
    //       },
    //       "onclick": {
    //         "enable": true,
    //         "mode": "push"
    //       },
    //       "resize": true
    //     },
    //     "modes": {
    //       "grab": {
    //         "distance": 400,
    //         "line_linked": {
    //           "opacity": 1
    //         }
    //       },
    //       "bubble": {
    //         "distance": 83.91608391608392,
    //         "size": 1,
    //         "duration": 3,
    //         "opacity": 1,
    //         "speed": 3
    //       },
    //       "repulse": {
    //         "distance": 200,
    //         "duration": 0.4
    //       },
    //       "push": {
    //         "particles_nb": 4
    //       },
    //       "remove": {
    //         "particles_nb": 2
    //       }
    //     }
    //   },
    //   "retina_detect": true
    // });
		
	}); 
})(jQuery);

(function ($) {
	$(document).ready(function () {
		// code here
		
	}); 
})(jQuery);

(function ($) {
	$(document).ready(function () {
    $('.owl-about').owlCarousel({
      loop: true,
      items: 1,
      center: false,
      margin:10,
      autoplay: true,
      slideSpeed: 1000,
      dots: true,
      smartSpeed: 2500,
      responsive: {
        0: {
          items: 1,
          
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        },
        1200:{
          items:4
        }
      }
  
    })
		/* Testimonial Slider */
  var owl = $('.slide-one-item');
  $('.slide-one-item').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    smartSpeed: 1500,
    autoplay: true,
    dots: false,
    nav: false,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
  });
  $('.thumbnail li').each(function (slide_index) {
    $(this).click(function (e) {
      owl.trigger('to.owl.carousel', [slide_index, 1500]);
      e.preventDefault();
    })
  })
  owl.on('changed.owl.carousel', function (event) {
    $('.thumbnail li').removeClass('active');
    $('.thumbnail li').eq(event.item.index - 2).addClass('active');
  })
  /* Testimonial Slider end*/

	}); 
})(jQuery);