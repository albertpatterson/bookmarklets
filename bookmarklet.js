// go back 10 seconds in a video
javascript: [].find.call(document.querySelectorAll("video"),v=>!v.paused).currentTime-=10

// set the playback rate of the currently playing video to 1
javascript: [].find.call(document.querySelectorAll("video"),v=>!v.paused).playbackRate=1

// reduce the playback rate of the currently playing video by 0.5
javascript: [].find.call(document.querySelectorAll("video"),v=>!v.paused).playbackRate-=0.5

// pause all videos
javascript: [].forEach.call(document.querySelectorAll("video"),v=>v.pause())

// play the first paused video
javascript: [].find.call(document.querySelectorAll("video"),v=>v.paused).play()

// increase the playback rate of the currently playing video by 0.5
javascript: [].find.call(document.querySelectorAll("video"),v=>!v.paused).playbackRate+=.5

// set the playback rate of the currently playing video to 3
javascript: [].find.call(document.querySelectorAll("video"),v=>!v.paused).playbackRate=3

// go forward 10 seconds in a video
javascript: [].find.call(document.querySelectorAll("video"),v=>!v.paused).currentTime+=10

// decrease the volume
javascript: [].find.call(document.querySelectorAll("video"),v=>!v.paused).volume*=0.7

// increase the volume
javascript: [].find.call(document.querySelectorAll("video"),v=>!v.paused).volume/=0.7

// like and comment youtube video
javascript: function pollfun(){return console.log("pollfun "+count),commentBox=document.querySelector(commentBoxSelector),!commentBox&&count++<maxTries?void setTimeout(pollfun,500):(count<maxTries?(console.log("adding comment"),addComment(commentBox)):alert("Could not access comment box"),likeButton.click(),void scrollTo(0,0))}function addComment(a){a.click();var a=document.querySelector(commentBoxSelector2);a.innerHTML="I like this.";var b=document.querySelector("Button[aria-label='Comment']");b.disabled=!1,b.click()}scrollTo(0,1e3);var count=0,maxTries=10,commentBoxSelector="div[data-placeholder='Add a public comment...']",commentBoxSelector2="div[contenteditable='plaintext-only'][data-placeholder='Add a public comment...']",likeButton=document.querySelector("Button[title='I like this']");pollfun();