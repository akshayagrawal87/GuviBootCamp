"use strict";

//Using IIFE TO SOLVE MULTIPLE DIV ERROR,ADDS STRUCTURE TO CODE
//Function to create wrapper class and add to body.
(function () {
  //creating div class
  var div = document.createElement("div"); //creating wrapper div class

  div.classList.add("wrapper"); //adding div to body

  document.body.appendChild(div);
})(); //Function to define header and add image,bar and name element


(function () {
  //creating div class
  var div = document.createElement("div"); //creating header div class

  div.classList.add("header"); //setting id attribute to div

  div.setAttribute("id", "nameWithPhoto"); //finding wrapper class and adding div element inside it.

  document.querySelector(".wrapper").appendChild(div); //creating image element

  var image = document.createElement("img"); //setting image attributes

  image.setAttribute("id", "akshayPhoto");
  image.setAttribute("src", "src/akshayPic.jpeg");
  image.setAttribute("alt", "Akshay's Pic"); //adding image to div element

  div.appendChild(image); //creating bar element

  var bar = document.createElement("bar");
  bar.classList.add("bar");
  div.appendChild(bar); //creating name element

  var name = document.createElement("name");
  name.classList.add("name");
  name.innerText = "Akshay Agrawal";
  div.appendChild(name);
})(); //Function to define infoBAr and add inner text


(function () {
  //creating div class
  var div = document.createElement("div"); //creating infoBar div class

  div.classList.add("infoBar"); //adding InnerText to InfoBar.

  div.innerText = "Associate Software Engineer at Altimetrik | Full Stack Java Developer | Pune, Maharashtra, India"; //finding wrapper class and adding div element inside it.

  document.querySelector(".wrapper").appendChild(div);
})(); //Function to create details div and add left,right div with hr


(function () {
  //creating div class
  var div = document.createElement("div"); //creating infoBar div class

  div.setAttribute("id", "details"); //finding wrapper class and adding div element inside it.

  document.querySelector(".wrapper").appendChild(div); // creating left side of details in resume

  var splitLeft = document.createElement("div");
  splitLeft.classList.add("split");
  splitLeft.classList.add("left"); //creating hr division between left and right hand Side

  var hr = document.createElement("hr");
  hr.classList.add("vl");
  hr.setAttribute("width", "1");
  hr.setAttribute("size", "1100"); // creating right side of details in resume

  var splitRight = document.createElement("div");
  splitRight.classList.add("split");
  splitRight.classList.add("right");
  div.appendChild(splitLeft);
  div.appendChild(hr);
  div.appendChild(splitRight);
})(); //Fuction to create profile div and details


(function () {
  //getting split left div class
  var div = document.querySelector(".left");
  var br = document.createElement("br");
  div.appendChild(br);
  var profile = document.createElement("div");
  profile.setAttribute("id", "profile");
  var span = document.createElement("span");
  var icon = document.createElement("i");
  icon.classList.add("far", "fa-user", "fa-2x", "icons");
  var h2 = document.createElement("h2");
  h2.innerText = "Profile";
  span.appendChild(icon);
  span.appendChild(h2);
  var p = document.createElement("p");
  p.innerText = "Methodical FullStack developer experienced in software development processes and optimal testing strategies. Helps teams produce exceptional products by offering in-depth quality assuranc support. Open and clear communicator with good multitasking skills, organized and strong attention to detail. Expert Java and Angular user.";
  profile.appendChild(span);
  profile.appendChild(p);
  div.appendChild(profile);
  div.appendChild(br);
})(); //Fuction to create skills section and add elements required.


(function () {
  var div = document.querySelector(".left");
  var br = document.createElement("br");
  var skills = document.createElement("div");
  skills.setAttribute("id", "skills");
  var span = document.createElement("span");
  var icon = document.createElement("i");
  icon.classList.add("fas", "fa-flask", "fa-2x", "icons");
  var h2 = document.createElement("h2");
  h2.innerText = "Skills";
  span.appendChild(icon);
  span.appendChild(h2);
  skills.appendChild(span);
  div.appendChild(skills);
  div.appendChild(br);
  var listOfSkills = document.createElement("div");
  listOfSkills.classList.add("listOfSkills");
  var listOfSkillsHeader = document.createElement("h3");
  listOfSkillsHeader.classList.add("listOfSkillsHeader");
  listOfSkillsHeader.innerText = "Technical Skills";
  var ul = document.createElement("ul");
  ul.setAttribute("type", "circle");
  var skillBar1 = document.createElement("span");
  skillBar1.classList.add("skillBar");
  var skillBar2 = document.createElement("span");
  skillBar2.classList.add("skillBar");
  var skillBar3 = document.createElement("span");
  skillBar3.classList.add("skillBar");
  var skillBar4 = document.createElement("span");
  skillBar4.classList.add("skillBar");
  var li1 = document.createElement("li");
  li1.classList.add("pb-8");
  var skillInLine1 = document.createElement("span");
  skillInLine1.classList.add("skillsInLine");
  skillInLine1.innerText = "HTML5";
  html5 = document.createElement("span");
  html5.classList.add("html5");
  var li2 = document.createElement("li");
  li2.classList.add("pb-8");
  var skillInLine2 = document.createElement("span");
  skillInLine2.classList.add("skillsInLine");
  skillInLine2.innerText = "JavaScript";
  js = document.createElement("span");
  js.classList.add("js");
  var li3 = document.createElement("li");
  li3.classList.add("pb-8");
  var skillInLine3 = document.createElement("span");
  skillInLine3.classList.add("skillsInLine");
  skillInLine3.innerText = "CSS";
  css = document.createElement("span");
  css.classList.add("css");
  var li4 = document.createElement("li");
  li4.classList.add("pb-8");
  var skillInLine4 = document.createElement("span");
  skillInLine4.classList.add("skillsInLine");
  skillInLine4.innerText = "Java";
  java = document.createElement("span");
  java.classList.add("java");
  listOfSkills.appendChild(listOfSkillsHeader);
  skillBar1.appendChild(html5);
  skillInLine1.appendChild(skillBar1);
  li1.appendChild(skillInLine1);
  skillBar2.appendChild(js);
  skillInLine2.appendChild(skillBar2);
  li2.appendChild(skillInLine2);
  skillBar3.appendChild(css);
  skillInLine3.appendChild(skillBar3);
  li3.appendChild(skillInLine3);
  skillBar4.appendChild(java);
  skillInLine4.appendChild(skillBar4);
  li4.appendChild(skillInLine4);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  listOfSkills.appendChild(ul);
  skills.appendChild(listOfSkills);
})(); //Fuction to define skill bars


(function () {
  var br = document.createElement("br");
  var skills = document.querySelector("#skills");
  var listOfSkills = document.createElement("div");
  listOfSkills.classList.add("listOfSkills");
  var listOfSkillsHeader = document.createElement("h3");
  listOfSkillsHeader.classList.add("listOfSkillsHeader");
  listOfSkillsHeader.innerText = "Additional Skills";
  var ul = document.createElement("ul");
  ul.setAttribute("type", "circle");
  var skillBar1 = document.createElement("span");
  skillBar1.classList.add("skillBar");
  var skillBar2 = document.createElement("span");
  skillBar2.classList.add("skillBar");
  var skillBar3 = document.createElement("span");
  skillBar3.classList.add("skillBar");
  var skillBar4 = document.createElement("span");
  skillBar4.classList.add("skillBar");
  var li1 = document.createElement("li");
  li1.classList.add("pb-8");
  var skillInLine1 = document.createElement("span");
  skillInLine1.classList.add("skillsInLine");
  skillInLine1.innerText = "SCRUM";
  html5 = document.createElement("span");
  html5.classList.add("scrum");
  var li2 = document.createElement("li");
  li2.classList.add("pb-8");
  var skillInLine2 = document.createElement("span");
  skillInLine2.classList.add("skillsInLine");
  skillInLine2.innerText = "TDD";
  js = document.createElement("span");
  js.classList.add("tdd");
  var li3 = document.createElement("li");
  li3.classList.add("pb-8");
  var skillInLine3 = document.createElement("span");
  skillInLine3.classList.add("skillsInLine");
  skillInLine3.innerText = "TEAM MANAGEMENT";
  css = document.createElement("span");
  css.classList.add("teamManagement");
  var li4 = document.createElement("li");
  li4.classList.add("pb-8");
  var skillInLine4 = document.createElement("span");
  skillInLine4.classList.add("skillsInLine");
  skillInLine4.innerText = "Project Management";
  java = document.createElement("span");
  java.classList.add("projectManagement");
  listOfSkills.appendChild(listOfSkillsHeader);
  skillBar1.appendChild(html5);
  skillInLine1.appendChild(skillBar1);
  li1.appendChild(skillInLine1);
  skillBar2.appendChild(js);
  skillInLine2.appendChild(skillBar2);
  li2.appendChild(skillInLine2);
  skillBar3.appendChild(css);
  skillInLine3.appendChild(skillBar3);
  li3.appendChild(skillInLine3);
  skillBar4.appendChild(java);
  skillInLine4.appendChild(skillBar4);
  li4.appendChild(skillInLine4);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  listOfSkills.appendChild(ul);
  skills.appendChild(listOfSkills);
})(); //Function to define work experience section


(function () {
  var div = document.querySelector(".left");
  var workExp = document.createElement("div");
  workExp.setAttribute("id", "workExp");
  var icon = document.createElement("i");
  icon.classList.add("fas", "fa-briefcase", "fa-2x", "icons");
  var h2 = document.createElement("h2");
  h2.innerText = "Work Experience";
  var h3 = document.createElement("h3");
  h3.innerText = "Associate Software Engineer";
  var tab = document.createElement("tab");
  tab.innerText = "07/2019-Present";
  tab.classList.add("pl");
  h3.appendChild(tab);
  var span = document.createElement("span");
  span.appendChild(icon);
  span.appendChild(h2);
  span.appendChild(h3);
  workExp.appendChild(span);
  var workExpDesc = document.createElement("div");
  workExpDesc.setAttribute("id", "workExpDesc");
  var ul = document.createElement("ul");
  ul.setAttribute("type", "circle");
  var li1 = document.createElement("li");
  li1.innerText = "Led Software development initiative as Subject Matter Expert and primary point-of-contactor project management staff.";
  li1.classList.add("pb-8");
  var li2 = document.createElement("li");
  li2.innerText = "Orchestrated efficient small-scale software deployments, including testing features and correcting code.";
  li2.classList.add("pb-8");
  var li3 = document.createElement("li");
  li3.innerText = "Collaborated on all stages of systems development lifecycle, from requirement gathering to production releases.";
  li3.classList.add("pb-8");
  var li4 = document.createElement("li");
  li4.innerText = "Designed, executed, and optimized software to boost performance by 50 % and incorporate new features.";
  li4.classList.add("pb-8");
  var li5 = document.createElement("li");
  li5.innerText = "Prepared test cases based on client requirement documents for Banking application and increased code coverage to 85%";
  li5.classList.add("pb-8");
  var li6 = document.createElement("li");
  li6.innerText = " Authored code fixes and enhancements for inclusion in future code releases and patches.";
  li1.classList.add("pb-8");
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);
  workExpDesc.appendChild(ul);
  workExp.appendChild(workExpDesc);
  div.appendChild(workExp);
})(); //Fuction to define work experince section at right split


(function () {
  var div = document.querySelector(".right");
  var workExp = document.createElement("div");
  workExp.setAttribute("id", "workExp");
  var icon = document.createElement("i");
  icon.classList.add("fas", "fa-briefcase", "fa-2x", "icons");
  var h2 = document.createElement("h2");
  h2.innerText = "Work Experience";
  var h3 = document.createElement("h3");
  h3.innerText = "Project Intern";
  var tab = document.createElement("tab");
  tab.innerText = "12/2018 – 05/2019";
  tab.classList.add("pl");
  h3.appendChild(tab);
  var span = document.createElement("span");
  span.appendChild(icon);
  span.appendChild(h2);
  span.appendChild(h3);
  workExp.appendChild(span);
  var workExpDesc = document.createElement("div");
  workExpDesc.setAttribute("id", "workExpDescRight");
  var ul = document.createElement("ul");
  ul.setAttribute("type", "circle");
  var li1 = document.createElement("li");
  li1.innerText = "Developed designs to meet specific requirements such as quick-loading sites with particular layouts.";
  li1.classList.add("pb-8");
  var li2 = document.createElement("li");
  li2.innerText = "Maintained existing applications and designed and delivered new application modules.";
  li2.classList.add("pb-8");
  var li3 = document.createElement("li");
  li3.innerText = "Translated technical concepts and information into terms all parties could easily comprehend.";
  li3.classList.add("pb-8");
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  workExpDesc.appendChild(ul);
  workExp.appendChild(workExpDesc);
  div.appendChild(workExp);
})(); //Function to define education section.


(function () {
  var div = document.querySelector(".right");
  var education = document.createElement("div");
  education.setAttribute("id", "education");
  var icon = document.createElement("i");
  icon.classList.add("fas", "fa-university", "fa-2x", "icons");
  var h2 = document.createElement("h2");
  h2.innerText = "Education";
  var h3 = document.createElement("b");
  h3.innerText = "College";
  var tab = document.createElement("tab");
  var span = document.createElement("span");
  var head = document.createElement("span");
  head.appendChild(h3);
  span.appendChild(icon);
  span.appendChild(h2);
  education.appendChild(span);
  education.appendChild(head);
  var ul = document.createElement("ul");
  ul.setAttribute("type", "circle");
  var li1 = document.createElement("li");
  li1.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?";
  li1.classList.add("pb-8");
  var li2 = document.createElement("li");
  li2.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?";
  li2.classList.add("pb-8");
  var li3 = document.createElement("li");
  li3.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?";
  li3.classList.add("pb-8");
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  education.appendChild(ul);
  div.appendChild(education);
})(); //Function to define Personal project section


(function () {
  var div = document.querySelector(".right");
  var education = document.createElement("div");
  education.setAttribute("id", "education");
  var icon = document.createElement("i");
  icon.classList.add("fas", "fa-archive", "fa-2x", "icons");
  var h2 = document.createElement("h2");
  h2.innerText = "Personal Projects";
  var span = document.createElement("span");
  span.appendChild(icon);
  span.appendChild(h2);
  education.appendChild(span);
  var ul = document.createElement("ul");
  ul.setAttribute("type", "circle");
  var li1 = document.createElement("li");
  li1.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?";
  li1.classList.add("pb-8");
  var li2 = document.createElement("li");
  li2.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?";
  li2.classList.add("pb-8");
  var li3 = document.createElement("li");
  li3.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos quod tempore possimus nemo doloribus sit odit, soluta corrupti! Odit natus sed commodi impedit nesciunt earum, atque iure aut doloribus?";
  li3.classList.add("pb-8");
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  education.appendChild(ul);
  div.appendChild(education);
})();