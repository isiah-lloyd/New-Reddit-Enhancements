// ==UserScript==
// @name         New Reddit Enhancements
// @namespace    https://github.com/isiah-lloyd/New-Reddit-Enhancements
// @version      1.0
// @description  Reddits new's design is kinda annoying
// @author       Isiah Lloyd <isiah.me>
// @include      http://*.reddit.com/*
// @include      https://*.reddit.com/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js#sha256=FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=
// @grant        none
// @run-at       document-idle
// ==/UserScript==
(function() {
    'use strict';
    const options = {
        distinguishPromotions: true,
        hideUsername: true,
        hideModerating: true
    };
    if (options.hideUsername) {
        $('.fkbwGO').text("Username Hidden");
    }
    let observer = new MutationObserver(function(mutations) {
        if (options.hideModerating) {
            $('.gzJJRc:contains("moderating")').parent().css('display', 'none');
        }
        if(options.distinguishPromotions) {
            let elements1 = $("span:contains('promoted')").parents()[4];
            if (elements1) {
                $(elements1).css('background','#fff3cd').css('border', 'black 1px dashed');
            }
        }
    });
    let observerConfig = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
    };
    let targetNode = document.body;
    observer.observe(targetNode, observerConfig);
})();
