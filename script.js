jQuery(document).ready(function ($) {

    let balls = 0;


    function addBall() {
        $(".main-container").append('<div id="ball-' + balls + '" class="bg-clip"></div>');
        
        let ball = $("#ball-" + balls)
        let thisBall = balls;
        let w = Math.random() * window.innerWidth;
        let h = Math.random() * window.innerHeight;
        let scale = 50 + (Math.random() * 50);
        let speed = 70 + Math.round(Math.random()  * 50);
        ball.css('top', h + "px");
        ball.css('left', w + "px");
        ball.css('scale', scale + "%")
        ball.css('animation', 'bubbles-rise ' + speed + 's forwards')
        setTimeout(() => {
            ball.remove();
            addBall();
        }, speed * 1000);
        balls++;
        return thisBall;
    }
    addBall()
    addBall()
    addBall()
    addBall()
});