let currentId = 1;

async function chargerPost(id) {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const post = await response.json();
    
    document.getElementById('post').innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <small>Post #${post.id} - ${post.reactions.likes}</small>
    `;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentId > 1) {
        currentId--;
        document.getElementById('postId').value = currentId;
        chargerPost(currentId);
    }
});

document.getElementById('next').addEventListener('click', () => {
    currentId++;
    document.getElementById('postId').value = currentId;
    chargerPost(currentId);
});

document.getElementById('postId').addEventListener('change', (e) => {
    currentId = parseInt(e.target.value);
    chargerPost(currentId);
});

chargerPost(currentId);