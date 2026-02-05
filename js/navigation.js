function highlightActiveLink()
{
    var link = document.querySelectorAll('.nav-link');
    var currentUrl = window.location.href;

    for (var i = 0; i < link.length; i++) 
    {
        if (link[i].getAttribute('href') === currentUrl) 
        {
            link[i].classList.add('active');
        }
        else 
        {
            link[i].classList.remove('active');
        }
    }
}