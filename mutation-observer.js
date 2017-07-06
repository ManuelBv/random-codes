;
(function($, window, document) {
    'use strict';

    var MF = window.MF || {};

    MF.vidRunOnce = (function() {

        function videoHandler() {

            // var vids = []




            // each li to match video with li

            var vids = $(".hero_slider > li:not(.bx-clone) .shoot-video video");
            var vidsClone = $(".hero_slider > li.bx-clone .shoot-video video");

            for (var xi = 0; xi < vids.length; xi++) {
                vids[xi].loop = false;
            }

            for (var xy = 0; xy < vidsClone.length; xy++) {
                vidsClone[xy].loop = false;
            }

            var target = document.getElementById("content__wrapper");
            var observer = new MutationObserver(function(mutations) {

                for (var xi = 0; xi < vids.length; xi++) {
                    vids[xi].currentTime = 0;
                    vids[xi].pause();
                }
                for (var xy = 0; xy < vidsClone.length; xy++) {
                    vidsClone[xy].currentTime = 0;
                    vidsClone[xy].pause();
                }

                var id = target.getElementsByTagName("a")[0].id;
                id = id.replace("hero-target-", "");
                var vidId = parseInt(id - 1);

                if (vidId < vids.length) {
                    vids[vidId].loop = false;
                    vids[vidId].play();
                    console.log("Now playing video " + vidId);

                    vids[vidId].onended = function() {
                        this.currentTime = 0;
                        this.pause();
                    }

                }

            })

            var config = {
                subtree: true,
                childList: true,
                attributes: false,
                characterData: false
            }
            observer.observe(target, config);

        }

        function init() {
            videoHandler();
        }

        return {
            init: init
        };

    })();

    window.MF = MF;

}(jQuery, this, this.document));

$(document).ready(function() {
    setTimeout(MF.vidRunOnce.init, 2000);
});