var mainHeading = document.createElement("p");
mainHeading.innerText = "Privacy Policy for IdeaKart";
mainHeading.setAttribute("id","mainHead");
//---------------------------------------------------------------------------------------------------------------------------
var lineOne = document.createElement("p");
lineOne.innerText = "At www.ideakart.com we consider the privacy of our visitors to be extremely important. This privacy policy document describes in detail the types of personal information is collected and recorded by www.ideakart.com and how we use it.";
//---------------------------------------------------------------------------------------------------------------------------
var headingOne = document.createElement("p");
headingOne.innerText = "Log Files";
headingOne.setAttribute("id","headOne");
var lineTwo = document.createElement("p");
lineTwo.innerText = "Like many other Web sites, www.ideakart.com makes use of log files. These files merely logs visitors to the site - usually a standard procedure for hosting companies and a part of hosting services's analytics. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable.";
//---------------------------------------------------------------------------------------------------------------------------
var headingTwo = document.createElement("p");
headingTwo.innerText = "Cookies and Web Beacons";
headingTwo.setAttribute("id","headTwo");
var lineThree = document.createElement("p");
lineThree.innerText = "www.ideakart.com uses cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.";
//---------------------------------------------------------------------------------------------------------------------------
// var boxOne = document.createElement("div");
//--------------------------------------------------------------------------------------------------------------------------- 
var headingThree = document.createElement("p");
headingThree.innerText = "Consent";
headingThree.setAttribute("id","headThree");
var lineFour = document.createElement("p");
lineFour.innerText = "By using our website, you hereby consent to our privacy policy and agree to its terms.";
// ---------------------------------------------------------------------------------------------------------------------------
document.querySelector(".privacyContainer").append(mainHeading,lineOne,headingOne,lineTwo,headingTwo,lineThree,headingThree,lineFour);
