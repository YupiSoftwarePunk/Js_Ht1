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


function FilterPosts()
{
    var posts = document.querySelectorAll('ul li');
    var postList = [];
    for (let i = 0; i < posts.length; i++)
    {
        postList.push(posts[i].innerText);
    }

    var inputFields = document.querySelector('input');
    var noResultsMessage = document.getElementById('no-results');

    inputFields.addEventListener('input', function() {
        const searchText = inputFields.value.toLowerCase(); 
        let hasMatches = false;

        const filteredList = postList.filter(post => {
            return post.toLowerCase().includes(searchText);
        });

        posts.forEach(li => {
            const text = li.innerText.toLowerCase();
            if (text.includes(searchText)) {
                li.style.display = ""; 
                hasMatches = true;
            } 
            else {
                li.style.display = "none";
            }
        });

        if (hasMatches) 
        {
            noResultsMessage.style.display = "none";
        } 
        else 
        {
            noResultsMessage.style.display = "block";
        }
    });
}