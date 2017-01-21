# AngularVR
Web-App for virtualreality and augmented reality. The idee behind this project is to provide  a low-cost virtual-reality environment skeleton to build vr-web-apps using the famous 3D-webgl-framework three.js and the minimal hardware setup containing:

- server which is hosting the angular 2.0 app
- an standard smartphone with camera
- a cheap vr-headmount  like *google cardboard* or *VR Box*



## minimal features

- headtracking using cell phone camera and something like AR markers, or edge detection
- using three.js (WEBVR)
- using Angular 2.0
- real web-appliction, that means running in a webbrowser like safari, firefox or chrome)

## additiona features

- using bluetooth gamepad of wii-remote for controlling
- using voice controll for controlling

## actual limitation

aruco-js using the WebRTC-API to access the webcame. WebRTC is not support by ios-mobile browser.
so cordova is an solution for that. [cordova-plugin-iosrtc](https://github.com/eface2face/cordova-plugin-iosrtc) actualy has a build error.. so is not working at the moment.
