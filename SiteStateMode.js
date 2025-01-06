var sole = 'images/SunLightMode.svg';
var luna = 'images/MoonDarkMode.svg';
var emojiCorrente = sole;

var imgLuna = new Image();
imgLuna.src = luna;

$(document).ready(function() {
    
    var emojiElement = document.getElementById('SiteButtonStateMode');
    var logoImage = document.getElementById('logo');
    var IssueButton = document.getElementById('issuebutton');
    var github = document.getElementById('github');
    var instagram = document.getElementById('instagram');
    var tiktok = document.getElementById('tiktok');
    
    //preloding image
    var logo= new Image();
    var issuebuttonimg= new Image();
    var githubimg= new Image();
    var instagramimg= new Image();
    var tiktokimg= new Image();
    var darkbutton_unclicked= new Image();
    var darkbutton_clicked= new Image();
    var darkbuttonsmall_unclicked= new Image();
    var darkbuttonsmall_clicked= new Image();
    issuebuttonimg.src= 'images/IssueButtonDarkMode.svg';
    logo.src='images/LogoDarkMode.svg';
    githubimg.src='images/github-markDarkMode.svg';
    instagramimg='images/instagramDarkMode.svg';
    tiktokimg.src='images/tiktokDarkMode.svg';
    darkbutton_unclicked.src= 'images/button_unclickedDarkMode.svg';
    darkbutton_clicked.src= 'images/button_clickedDarkMode.svg';
    darkbuttonsmall_unclicked.src= 'images/buttonsmall_unclickedDarkMode.svg';
    darkbuttonsmall_clicked.src='images/buttonsmall_clickedDarkMode.svg';
    
    

    emojiElement.addEventListener('touchstart' in window ? 'touchstart' : 'mousedown', function() {
        
        var htmlElement = document.documentElement;
        
        if (emojiCorrente == sole) {
        
            emojiCorrente = luna;
            htmlElement.setAttribute('data-bs-theme', 'dark');
            logoImage.src = 'images/LogoDarkMode.svg';
            IssueButton.src= 'images/IssueButtonDarkMode.svg';
            github.src= 'images/github-markDarkMode.svg';
            instagram.src= 'images/instagramDarkMode.svg';
            tiktok.src= 'images/tiktokDarkMode.svg';
        }
        else {
            
            emojiCorrente = sole;
            htmlElement.setAttribute('data-bs-theme', 'light');
            logoImage.src = 'images/Logo.svg';
            IssueButton.src='images/IssueButton.svg';
            github.src= 'images/github-mark.svg';
            instagram.src='images/instagram.svg';
            tiktok.src= 'images/tiktok.svg';
            
        }

        emojiElement.src = emojiCorrente;
        
    });
});

