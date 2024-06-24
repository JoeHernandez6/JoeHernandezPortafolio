function showSidebar(){
    const sidebar = document.querySelector('.sidebar ul')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar ul')
    sidebar.style.display = 'none'
}
window.onload = function() {
    var image = document.getElementById('me');
    var container = document.getElementsByClassName('homeIntro');
  
    // Ensure the image has loaded
    image.onload = function() {
      // Calculate the new height as 10% more than the image height
      var newHeight = image.offsetHeight * 1.10;
      // Set the container's height to the new value
      container.style.height = newHeight + 'px';
    }}