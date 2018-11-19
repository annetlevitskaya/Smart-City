function ready() {
    var links = document.querySelectorAll('.sidebar__link'); 
    
    for (var i = 0; i < links.length; i++) {
        const link = links[i];

        link.addEventListener('click', function(e) {
            e.preventDefault();

            const active = document.querySelector('.sidebar__link.active');
            active.classList.remove('active');
            link.classList.add('active');  
        });
    }
}



document.addEventListener("DOMContentLoaded", ready);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlYWR5KCkge1xyXG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJfX2xpbmsnKTsgXHJcbiAgICBcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XHJcblxyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19saW5rLmFjdGl2ZScpO1xyXG4gICAgICAgICAgICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7ICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZWFkeSk7Il0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
