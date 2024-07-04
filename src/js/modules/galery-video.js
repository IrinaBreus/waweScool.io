const galeryVideo = () => {
    const trigger = document.querySelector('.galery__play-btn'),
          overlay = document.querySelector('.galery__overlay'),
          closeBtn = document.querySelector('.galery__video-close');

    const tag = document.createElement('script');
    let player;

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    function createPlayer() {
        player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: 'LFDaKUHgK7E'
        });

        overlay.style.display = 'flex';
    }

    
    trigger.addEventListener('click', () => {
        if (document.querySelector('iframe#player')) {
            overlay.style.display = 'flex';
        } else {
            createPlayer();
        }
    });

    closeBtn.addEventListener('click', () => {
        closeWindow();
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeWindow();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && overlay.style.display === 'flex') {
            closeWindow();
        }
    })

    function closeWindow() {
        overlay.style.display = 'none';
        player.stopVideo();
    }
}

export default galeryVideo;