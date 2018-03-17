// Initialize Firebase
var config = {
    apiKey: "AIzaSyA8AAfxLA929j0ybiFMlmowIB1aeHsZxSQ",
    authDomain: "redread-tech.firebaseapp.com",
    databaseURL: "https://redread-tech.firebaseio.com",
    projectId: "redread-tech",
    storageBucket: "redread-tech.appspot.com",
    messagingSenderId: "299307118155"
};
firebase.initializeApp(config);
// ... rest of the code

var dbRef = firebase.database();
var commentsRef = dbRef.ref('comments');
var counterRef = dbRef.ref('counter');

counterRef.on("value", function(snapshot) {
    $(".visitstext").html(snapshot.val() + " visits!");
});

commentsRef.on("child_added", function(snap) {
    console.log(snap.val)
    snap.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val;
    });
    
    console.log("added", snap.key, snap.val());
    $('#comments').append(contactHtmlFromObject(snap.val()));
});

//Construct HTML
function contactHtmlFromObject(comment){
    console.log(comment)
    var html = '';
    html += '<li>';
    html += '<div>';
    html += '<p><span class="name">'+comment.user+'</span></p>';
    html += '<pre><span class="comment">'+comment.comment+'</span></pre>';
    html += '</div>';
    html += '</li>';
    return html;
}