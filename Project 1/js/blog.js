document.addEventListener('DOMContentLoaded', function() {
    // Simulate fetching data from a server using AJAX
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let blogPostsContainer = document.getElementById('blog-posts');
            data.posts.forEach(post => {
                let postElement = document.createElement('div');
                postElement.className = 'blog-post';
                
                let postTitle = document.createElement('h2');
                postTitle.textContent = post.title;
                postElement.appendChild(postTitle);
                
                let postContent = document.createElement('p');
                postContent.textContent = post.content;
                postElement.appendChild(postContent);
                
                blogPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
