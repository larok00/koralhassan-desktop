// C:\Users\sdkca\Desktop\electron-workspace\build.js
var electronInstaller = require('electron-winstaller');

// In this case, we can use relative paths
var settings = {
    // Specify the folder where the built app is located
    appDirectory: './dist/koralhassan-desktop-win32-x64',
    // Specify the existing folder where 
    outputDirectory: './installers/koralhassan-desktop-win32-x64',
    // The name of the Author of the app (the name of your company)
    authors: 'Koral Hassan',
    // The name of the executable of your built
    exe: './koralhassan-desktop.exe'
};

resultPromise = electronInstaller.createWindowsInstaller(settings);
 
resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});