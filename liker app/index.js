let likeButton = document.getElementById('likeButton');
let likeCount = document.getElementById('likeCount');
let shareButton = document.getElementById('shareButton');
let shareCount = document.getElementById('shareCount');
let commentButton = document.getElementById('commentButton');
let followButton = document.getElementById('followButton');

let count = localStorage.getItem('likeCount') || 0;
let share = localStorage.getItem('shareCount') || 0;
let isFollowing = localStorage.getItem('isFollowing') === 'true';

likeCount.innerHTML = count;
shareCount.innerHTML = share;

// Like button 
likeButton.addEventListener('click', function () {
    count++;
    likeCount.innerHTML = count;
    localStorage.setItem('likeCount', count);
});

// Share button 
shareButton.addEventListener('click', function () {
    share++;
    shareCount.innerHTML = share;
    localStorage.setItem('shareCount', share);
});

// Follow button 
followButton.addEventListener('click', function () {
    if (isFollowing) {
        followButton.innerHTML = '➕ Follow';
    } else {
        followButton.innerHTML = '✔️ Following';
    }
    isFollowing = !isFollowing;
    localStorage.setItem('isFollowing', isFollowing.toString());
});
