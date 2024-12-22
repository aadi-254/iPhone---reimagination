if(window.innerWidth>900){
  document.addEventListener('DOMContentLoaded', function() {
    let checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            window.alert(215);// this code will not be executed because the checkbox is initially unchecked
        } else {
          window.alert(242); // this code will be executed because the checkbox is initially unchecked
        }
    });
  });
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".i1", {
    transform: 'translateY(-750px)',
    scrollTrigger: {
      trigger: ".i1",
      start: "top 80%",
      end: "bottom 30%",
      scrub: true
    }
  });

  gsap.to(".b-slogan", {
    transform: 'translateY(-200px)',
    scrollTrigger: {
      trigger: ".b-slogan",
      start: "top 80%",
      end: "bottom 30%",
      scrub: true
    }
  });

  gsap.to(".box", {
    transform: 'translateX(-690px)',
    scrollTrigger: {
      trigger: ".box",
      start: "top 90%",
      end: "bottom 20%",
      scrub: true
    }
  });

  /*************            page 4                ************/
  
  gsap.to(".product1", {
    transform: 'translateY(-230px)',
    scrollTrigger: {
      trigger: ".product1",
      start: "top 80%",
      end: "bottom 30%",
      scrub: true
    }
  });
  gsap.to(".product2", {
    transform: 'translateY(-660px)',
    scrollTrigger: {
      trigger: ".product2",
      start: "top 90%",
      end: "bottom 30%",
      scrub: true
    }
  });
  gsap.to(".product3", {
    transform: 'translateY(-400px)',
    scrollTrigger: {
      trigger: ".product3",
      start: "top 80%",
      end: "bottom 30%",
      scrub: true
    }
  });

  gsap.to(".product4", {
    transform: 'translateY(-440px)',
    scrollTrigger: {
      trigger: ".product4",
      start: "top 90%",
      end: "bottom 30%",
      scrub: true
    }
  });


  /* normal animation */

  gsap.from(".p2-slogan", {
    y: 159,
    opacity: 0,
    duration: 1.6,
    scrollTrigger: {
        trigger: ".p2-slogan",
        start: "top 105%",
        toggleActions: "restart none none none",
        markers: false
    }
}); 

gsap.from(".sp2", {
  y: 159,
  opacity: 0,
  duration: 1.6,
  scrollTrigger: {
      trigger: ".sp2",
      start: "top 105%",
      toggleActions: "restart none none none",
      markers: false
  }
}); 

gsap.from(".H3", {
  y: 180,
  opacity: 0,
  duration: 1.6,
  scrollTrigger: {
      trigger: ".H3",
      start: "top 105%",
      toggleActions: "restart none none none",
      markers: false
  }
});

gsap.from(".ip3", {
  y: 180,
  opacity: 0,
  duration: 1.6,
  scrollTrigger: {
      trigger: ".ip3",
      start: "top 105%",
      toggleActions: "restart none none none",
      markers: false
  }
});

gsap.from(".H5", {
  y: 180,
  opacity: 0,
  duration: 1.3,
  scrollTrigger: {
      trigger: ".H5",
      start: "top 105%",
      toggleActions: "restart none none none",
      markers: false
  }
}); 

gsap.from(".images_of_phone", {
  y: 190,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
      trigger: ".images_of_phone",
      start: "top 105%",
      toggleActions: "restart none none none",
      markers: false
  }
});

gsap.from(".H6", {
  y: 180,
  opacity: 0,
  duration: 1.3,
  scrollTrigger: {
      trigger: ".H6",
      start: "top 105%",
      toggleActions: "restart none none none",
      markers: false
  }
});

}



else{

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".i1", {
    transform: 'translateY(-420px)',
    scrollTrigger: {
      trigger: ".i1",
      start: "top 80%",
      end: "bottom 30%",
      scrub: true
    }
  });

  gsap.to(".b-slogan", {
    transform: 'translateY(-200px)',
    scrollTrigger: {
      trigger: ".b-slogan",
      start: "top 80%",
      end: "bottom 30%",
      scrub: true
    }
  });

  gsap.to(".box", {
    transform: 'translateX(-130px)',
    scrollTrigger: {
      trigger: ".box",
      start: "top 90%",
      end: "bottom 20%",
      scrub: true
    }
  });

  /*************            page 4                ************/
  
  gsap.to(".product1", {
    transform: 'translateY(-230px)',
    scrollTrigger: {
      trigger: ".product1",
      start: "top 90%",
      end: "bottom 30%",
      scrub: true
    }
  });
  gsap.to(".product2", {
    transform: 'translateY(-800px)',
    scrollTrigger: {
      trigger: ".product2",
      start: "top 98%",
      end: "bottom 30%",
      scrub: true
    }
  });
  gsap.to(".product3", {
    transform: 'translateY(-500px)',
    scrollTrigger: {
      trigger: ".product3",
      start: "top 80%",
      end: "bottom 30%",
      scrub: true
    }
  });

  gsap.to(".product4", {
    transform: 'translateY(-400px)',
    scrollTrigger: {
      trigger: ".product4",
      start: "top 90%",
      end: "bottom 30%",
      scrub: true
    }
  });


  /* normal animation */

  gsap.from(".p2-slogan", {
    y: 159,
    opacity: 0,
    duration: 1.6,
    scrollTrigger: {
        trigger: ".p2-slogan",
        start: "top 105%",
        toggleActions: "restart none none none",
        markers: false
    }
}); 

gsap.from(".sp2", {
  y: 159,
  opacity: 0,
  duration: 1.6,
  scrollTrigger: {
      trigger: ".sp2",
      start: "top 105%",
      toggleActions: "restart none none none",
      markers: false
  }
}); 

gsap.from(".H3", {
  y: 180,
  opacity: 0,
  duration: 1.6,
  scrollTrigger: {
      trigger: ".H3",
      start: "top 105%",
      toggleActions: "restart none none none",
      markers: false
  }
});

gsap.from(".ip3", {
  y: 180,
  opacity: 0,
  duration: 1.6,
  scrollTrigger: {
      trigger: ".ip3",
      start: "top 110%",
      toggleActions: "restart none none none",
      markers: false
  }
});

gsap.from(".H5", {
  y: 180,
  opacity: 0,
  duration: 1.3,
  scrollTrigger: {
      trigger: ".H5",
      start: "top 105%",
      toggleActions: "restart none none none",
      markers: false
  }
}); 

gsap.from(".images_of_phone", {
  y: 190,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
      trigger: ".images_of_phone",
      start: "top 105%",
      toggleActions: "restart none none none",
      markers: false
  }
});

gsap.from(".H6", {
  y: 180,
  opacity: 0,
  duration: 1.3,
  scrollTrigger: {
      trigger: ".H6",
      start: "top 105%",
      toggleActions: "restart none none none",
      markers: false
  }
});



}
