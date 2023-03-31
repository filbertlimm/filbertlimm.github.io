// C14200184 - Filbert Ferdinand Lim
const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/blog.html',
    '/contact.html',
    '/portfolio-example01.html',
    '/styles.css',
    '/app.js',
    '/sw.js',
    '/manifest.json',
    '/images/logo.png',
    '/images/about-header.jpg',
    '/images/contact-image.jpg',
    '/images/example-blog01.jpg',
    '/images/example-blog02.jpg',
    '/images/example-blog03.jpg',
    '/images/example-blog04.jpg',
    '/images/example-blog05.jpg',
    '/images/example-blog06.jpg',
    '/images/example-blog07.jpg',
    '/images/example-work01.jpg',
    '/images/example-work07.jpg',
    '/images/example-work02.jpg',
    '/images/example-work03.jpg',
    '/images/example-work04.jpg',
    '/images/example-work05.jpg',
    '/images/example-work06.jpg',
    '/images/example-work08.jpg',
    '/images/example-work09.jpg',
    '/images/portfolio-example-01.jpg',
    '/images/portfolio-example-02.jpg',
    '/images/portfolio-example-03.jpg',
    '/images/portfolio-example-04.jpg',
    '/images/portfolio-example-05.jpg',
    '/images/portfolio-example-06.jpg',
    '/images/footer-background.png',
    '/images/header-bg.jpg',
    '/images/photo.jpg',
    '/images/photo-wide.jpg',
    '/images/logo.png',
    '/images/logo-512x512.png',
    '/images/logo-72x72.png',
    '/images/logo-128x128.png',
    '/Tutorial/step01-initial-HTML-setup.html',
    '/Tutorial/step02-MDL-layout-component.html',
    '/Tutorial/step03-the-grid-component.html',
    '/Tutorial/step04-customising-the-layout.html',
    '/Tutorial/styles.css',
    '/Tutorial/step05-individual-pages/about.html',
    '/Tutorial/step05-individual-pages/blog.html',
    '/Tutorial/step05-individual-pages/contact.html',
    '/Tutorial/step05-individual-pages/index.html',
    '/Tutorial/step05-individual-pages/portfolio-example01.html'
  ];
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
  
          var fetchRequest = event.request.clone();
  
          return fetch(fetchRequest).then(
            function(response) {
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              var responseToCache = response.clone();
  
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
    );
  });
  