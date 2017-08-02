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
