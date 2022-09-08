# 🎯 **Explore Browser API and methods :**
## | 1 | API - Application Programming Interface :

### A set of protocols and definitions that allows communication between two applications.
![image](images/Api1.png)

## | 2 | Different types of API :

 - **Web APIs :** An application programming interface for the web.
 - **Browser APIs :** Extend the functionality of web browser.
 - **Server APIs :** Extend the functionality of a web server.
 - **Third Party APIs :** are not built into your browser.<br>
✔ YouTube API<br>
✔ Twitter API<br>
✔ Facebook API
## | 3 | Categories of Browser APIs :

1 ) **Storage APIs :** Give the ability to store data on the client-side<br>
&emsp; ✔ Cookies<br>
&emsp; ✔ Local Storage<br>
&emsp; ✔ Session Storage<br>
&emsp; ✔ Indexed DB <br>
2 ) **Fetch API :** <br>
&emsp; ✔ Makes asynchronous HTTP requests to a server<br>
&emsp; ✔ Response format can be JSON, plain text, or XML<br>
&emsp; ✔ Replacement for old XHR <br>
3 ) **Form Data API :** <br>
&emsp; ✔ Constructs a set of key/value pairs<br>
&emsp; ✔ Represents form fields & values.<br>
4 ) **Drag-and-Drop API :** Helps to implement drag and drop feature and build image upload system.<br>
&emsp; ✔ Drag and Drop API <br>
&emsp; ✔ File Reader API <br>
5 ) **DOM API :** Allows to manipulate HTML and CSS in creating, removing and also dynamically applying new styles to your page.<br>
6 ) **Geolocation API :** Helps to find out the geographical location of an user.<br>
7 ) **Canvas API:** Supports the creation of graphics using JavaScript and HTML.<br>
8 ) **Notification API :** Helps to display desktop notifications to users.<br>
9 ) **History API :** Uses the history.pushState() method.<br>
10 ) **Audio & Video APIs :** Can manage, display and create different media types.<br>
&emsp; ✔ Web Audio API<br>
&emsp; ✔ WebRTC (Web Real-Time Communication) API.<br>
&emsp; ✔ HTML Media Element<br>
&emsp; ✔ Media Capture and Streams API <br>
>## References - Categories of Browser APIs
>https://www.w3schools.com/js/js_api_intro.asp <br>
>https://www.educative.io/answers/what-are-browser-apis <br>
>https://www.javascripttutorial.net/web-apis/
## | 4 | BOM vs DOM :

![image](images/BOMvsDOM.JPG) 
| BOM | DOM |
|---|---|
|Browser Object Model.|Document Object Model.|
|Used to access and manipulation of the browser window.|Used to manipulate the HTML document.|
|Each browser has its own standards for implementing BOM.|Has a set standard of rules to be used across documents.|
|Consists of the objects navigator, history, screen, location.|Represent the contents of the web page.|
|BOM is a superset of DOM. BOM has many objects, methods and properties that are not part of the DOM structure.|DOM is a subset of BOM|

## | 5 | Browser alert, confirm, prompt with examples :
### **3 types of pop-up box :** <br>
All of the popups open a modal window.<br>
The user cannot interact with the rest of the components of the web page without responding to this window first.<br>
&emsp; 1 ) Alert Box. <br>
&emsp; 2 ) Confirmation Box. <br>
&emsp; 3 ) Prompt Box. <br> 
### **Alert Box :**
&emsp; 1 ) Used to inform/alert the user and notify about an event.<br>
&emsp; 2 ) Contains only one button, named 'OK', and returns nothing as output.<br>
&emsp; 3 ) Regular syntax of it : **alert("message")** <br>
>`` alert("Hi! Heros"); ``<br>
> ![image](images/alert.JPG)
### **Confirmation Box :**
&ensp; 1 ) Provides user with a choice and nofify about an event.<br>
&ensp; 2 ) This type of popup box has two buttons, named 'OK' and 'Cancel', and return 'true' and 'false' depending on the respective button click.<br>
&ensp; 3 ) Regular syntax of it : **confirm("message")** <br>
>``confirm("Confirm your activity);``<br>
>![image](images/confirmBox.JPG)
### **Alert vs Confirmation :**
|Alert|Confirm|
|---|---|
|Is used if we want the information comes through to the user.|Is used if we want the user to varify or accept something.|
|Need to click "OK" to proceed when an alert box pops up.|Need to click either "OK" or "Cancel" to proceed when a confirmation box pops up.|
|Always return true we always need to click on "OK" to proceed further.|Return true if we click "OK", false if we don't click on "OK".|
### **Prompt Box :**
&ensp; 1 ) Interaction with user is possible by asking the user to input some information.<br>
&ensp; 2 ) Stores the user information.
&ensp; 3 ) It has button: 'Ok' and 'Cancel'. If the user clicks 'Ok' the box return the input value. If the user clicks 'Cancel' the box returns null.<br>
&ensp; 4 ) Regular syntax of it : **prompt("message")**.
> ### **3 types of Prompt Box :**
> **First type** (Without message) :<br>
> ``prompt();``<br>
> ![image](images/prompt1.JPG)<br>
> **Second type** (With message) :<br>
> ``prompt('What is your Year of Birth?');``<br>
> ![image](images/prompt2.JPG)<br>
> **Third type** (with message and defult value) :<br>
> ``prompt('What is your Year of Birth ?', 1999);``<br>
> ![image](images/prompt3.JPG)<br>
## | 6 | Location, URL parts, query string, href, hash, assign, reload :
| window.location === location | window.location === document.location |
![image](images/location.JPG)
![image](images/location1.JPG)
![image](images/location2.JPG)
![image](images/location3.JPG)
![image](images/location4.JPG)
## | 7 | History api to navigate back, forward, go, history length :
### **History API** - back(), forward() :<br>
``history.back()``<br>
``history.forward()``<br>
![image](images/history.JPG)
### **History API** - go to new page using go() :<Br>
> **``history.go(0) //use also reload page``** <br>
> **``history.go(1) //use for jump forward``** <br>
> **``history.go(-1) //use for jump backward``** <br>

![image](images/history1.JPG)
### **History API** - length :
Using this you can know how many pages visited you using this tab.<br>
>``history.length``<br>

![image](images/history2.JPG)

## | 8 | Cookies, dev tool application tab, get cookie value :
### **What is Cookie ?**
&ensp; 1 ) Data stored in small text file.<br>
&ensp; 2 ) Naturally sent by visited websites.<br>
&ensp; 3 ) Sent to users computer through browser.<br>
&ensp; 4 ) Is not a program, doesn't perform any function.<br>
&ensp; 6 ) Stored in key-value pair.<br>
![image](images/cookie.JPG) <br>
### **How does a Cookie work ?**
![image](images/cookie1.JPG) <br>
### **Purposes of Cookie :**
- **Session management -** cookies allow you to manage any information that the server should remember. For example, logins, shopping carts, etc.
- **Personalization -** cookies allow you to store user preference, themes, and setting specific to a user.
- **Tracking -** cookies help record and analyze user behaviors in advertising.

![image](images/cookie2.JPG)
![image](images/cookie3.JPG)
![image](images/cookie4.JPG)
![image](images/cookie5.JPG)
### **What is Http only cookie ?** <br>
- A tag added to a browser cookie.
- Prevents client-side scripts from accessing data.
- Provides a gate that prevents the specialized cookie from being accessed by anything other then the server.

![image](images/cookie6.JPG)
![image](images/cookie7.JPG)