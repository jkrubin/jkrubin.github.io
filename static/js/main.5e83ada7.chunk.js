(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/dash_1.11ffd2f4.PNG"},function(e,t,a){e.exports=a.p+"static/media/profile_1.4ff3cd60.PNG"},function(e,t,a){e.exports=a.p+"static/media/match_3.cff4c068.PNG"},function(e,t,a){e.exports=a.p+"static/media/chat_2.88cb86b5.PNG"},function(e,t,a){e.exports=a.p+"static/media/homepage_1.0a21c005.PNG"},function(e,t,a){e.exports=a.p+"static/media/rentSFSU_1.2357edb9.png"},function(e,t,a){e.exports=a.p+"static/media/PlaneGame_2.be8f0350.png"},function(e,t,a){e.exports=a.p+"static/media/TankGame_1.a1c71abc.png"},function(e,t,a){e.exports=a.p+"static/media/TankGame_3.5784ed8a.png"},,,,function(e,t,a){e.exports=a.p+"static/media/homepage_3.c0c0bff5.PNG"},function(e,t,a){e.exports=a.p+"static/media/dash_2.b55bab41.PNG"},function(e,t,a){e.exports=a.p+"static/media/match_1.799d58bd.PNG"},function(e,t,a){e.exports=a.p+"static/media/match_2.63a9b0a3.PNG"},function(e,t,a){e.exports=a.p+"static/media/rentSFSU_2.38dde8c6.png"},function(e,t,a){e.exports=a.p+"static/media/rentSFSU_3.33f6cdd2.png"},function(e,t,a){e.exports=a.p+"static/media/rentSFSU_4.2daa063b.png"},function(e,t,a){e.exports=a.p+"static/media/PlaneGame_4.b7e8e981.png"},function(e,t,a){e.exports=a.p+"static/media/Process_1.d9157a59.PNG"},function(e,t,a){e.exports=a.p+"static/media/Process_2.d95158e3.PNG"},function(e,t,a){e.exports=a.p+"static/media/arrow.a8e199ec.png"},,,,function(e,t,a){e.exports=a(60)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/postman.dd4aaba4.PNG"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Document.eb13baaa.PNG"},function(e,t,a){e.exports=a.p+"static/media/Fields.5950a0a8.PNG"},function(e,t,a){e.exports=a.p+"static/media/homepage_2.c35b9f19.PNG"},function(e,t,a){e.exports=a.p+"static/media/chat_1.4b22da72.PNG"},function(e,t,a){e.exports=a.p+"static/media/PlaneGame_1.83c4f28e.png"},function(e,t,a){e.exports=a.p+"static/media/hamburger.d22c18d9.png"},function(e,t,a){e.exports=a.p+"static/media/portrait.f6660944.jpeg"},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(17),r=a.n(i),l=(a(40),a(2)),c=a(3),o=a(5),d=a(4),m=a(6),u=(a(41),a(42),a(1)),p=a(18),h=a.n(p),g=a(33),f=(s.a.Component,function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={front:e.image,back:e.next,flipped:!1},a.flipCard=a.flipCard.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(g.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.next!==this.state.front&&this.props.next!==this.state.back&&(this.state.flipped?this.setState({front:this.props.next}):this.setState({back:this.props.next}),this.flipCard());case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"flipCard",value:function(){this.setState(function(e){return{flipped:!e.flipped}})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"tile",onClick:function(){e.props.nextCallback(e.props.index)}},s.a.createElement("div",{className:"flip-card"},s.a.createElement("div",{id:"flip-box",className:this.state.flipped?"flip-card-inner flipped":"flip-card-inner"},s.a.createElement("img",{src:this.state.front,style:{visibility:"hidden"}}),s.a.createElement("div",{className:"flip-card-front",style:{backgroundImage:"url(".concat(this.state.front,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),s.a.createElement("div",{className:"flip-card-back",style:{backgroundImage:"url(".concat(this.state.back,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}}))))}}]),t}(s.a.Component)),b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).state={current:0,next:1,images:[{img:a(28)},{img:a(45)},{img:a(29)},{img:a(12)},{img:a(14)},{img:a(13)},{img:a(8)},{img:a(15)},{img:a(11)},{img:a(27)},{img:a(9)},{img:a(16)},{img:a(10)}],reset:!1},e.setNext=e.setNext.bind(Object(u.a)(Object(u.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.setNext()},1e4)}},{key:"setNext",value:function(){var e=document.getElementById("slider");e.classList.remove("slider-animator"),this.setState(function(e){var t=(e.next+1)%e.images.length;return{current:e.next,next:t,reset:!e.reset}}),setTimeout(function(){e.classList.add("slider-animator")},1)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return s.a.createElement("div",{className:"slider-background"},s.a.createElement("div",{className:"slider-container"},s.a.createElement("div",{id:"slider",className:"slider slider-animator",style:{transform:"translateX(0)"}},s.a.createElement("div",{className:"current paralax-slide",style:{backgroundImage:"url(".concat(this.state.images[this.state.current].img,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain"}}),s.a.createElement("div",{className:"next paralax-slide",style:{backgroundImage:"url(".concat(this.state.images[this.state.next].img,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain"}})),s.a.createElement("div",{className:"border"},s.a.createElement("div",{className:"shadow-left"}),s.a.createElement("div",{className:"shadow-right"})),s.a.createElement("div",{className:"cover-text"},s.a.createElement("h2",null,"Joshua Rubin ")," ",s.a.createElement("h3",null,"Find your Fullstack Engineer in O(1)"))))}}]),t}(s.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"resume"},s.a.createElement("h2",null," Resume "),s.a.createElement("ul",null,s.a.createElement("h3",{className:"resume-header"},"Experience"),s.a.createElement("ul",null,s.a.createElement("li",{className:"job-title"},"Software Engineer - AKASA ",s.a.createElement("span",{className:"job-year"},"2022 - 2024")),s.a.createElement("ul",null,s.a.createElement("li",null,"Designed and produced a full stack (Typescript React, Python FastAPI) application that:"),s.a.createElement("ul",null,s.a.createElement("li",null,"Automated validation of 50+ scrapers across hundreds of product expansions, streamlining and reducing deployment time by 80%, from 5 days down to 1."),s.a.createElement("li",null,"Created a one-stop frontend to query and visualize scrape results for both developers and non-engineers, saving hundreds of hours in debugging time.")),s.a.createElement("li",null,"Designed and implemented a fast-fail input validation on our API that audited requests with hundreds of permutations with friendly error messages, which previously took tens of hours across several teams."),s.a.createElement("li",null,"Refactored our hardest-to-maintain scraper and created a new architecture for our scrapers to be configurable by simple JSON or minimal code. This allowed a product expansion to be created and validated within one day with only one file, previously it took 5+ days and editing a ~10k line file."),s.a.createElement("li",null,"Worked with our Machine Learning department to create scene labeling in our scrapers that took our scene recognition from roughly 35% to near 100%."),s.a.createElement("li",null,"Created a scraper that uses LLMs to analyze serialized dom snapshots to provide guidance for scrapes that would otherwise require human decision/intervention and be impossible for a regular scraper. This project won our quarterly hackathon."),s.a.createElement("li",null,"Led our team in learning sessions to facilitate understanding of legacy code to identify scalability issues and streamline design.")),s.a.createElement("li",{className:"job-title"},"Freelance Software Engineer ",s.a.createElement("span",{className:"job-year"},"2018-2022")),s.a.createElement("ul",null,s.a.createElement("li",null,'Upwork "Top Rated" - which is given to the top 10% of developers in terms of positive feedback ratings across many clients.'),s.a.createElement("li",null,"Created a full backend and REST APIs for a financial tech stock monitoring software utilizing IEX and EOD stock APIs. Supported an admin-controlled list of 700+ stocks. Scraped nightly, analyzed, and ranked"),s.a.createElement("li",null,"Fullstack work in React and Express.js, creating microservices linking different services like Jotform and Airtable"),s.a.createElement("li",null,"Created remote telethon software to create live telethons where workers could track their calls and sales and compete for prizes"),s.a.createElement("li",null,"Created payment managing software with Docusign and Stripe"),s.a.createElement("li",null,"Fixed bugs and created new features for a custom wordpress themed website, including custom database metadata searches and homepage widgits"))),s.a.createElement("h3",{className:"resume-header"},"Skills"),s.a.createElement("ul",null,s.a.createElement("li",null,"Programming languages and frameworks with the most experience:"),s.a.createElement("ul",null,s.a.createElement("li",null,"Typescript"),s.a.createElement("ul",null,s.a.createElement("li",null,"Frontend - React, Next.js, Redux"),s.a.createElement("li",null,"Backend - Express.js, Sequelize")),s.a.createElement("li",null,"Python"),s.a.createElement("li",null,"SQL and noSQL databases"),s.a.createElement("li",null,"Git CI/CD"),s.a.createElement("li",null,"AWS kubernetes")),s.a.createElement("li",null,"I have worked with many more technologies and am always learning new programming languages and concepts that best fit the current project"),s.a.createElement("li",null,"Code samples and previous projects can be found on my ",s.a.createElement("a",{target:"_blank",href:" https://github.com/jkrubin"},"Github"))),s.a.createElement("h3",{className:"resume-header"},"Education"),s.a.createElement("ul",null,s.a.createElement("li",null,"San Francisco State University"),s.a.createElement("ul",null,s.a.createElement("li",null,"Bachelor of Science in Computer Science"),s.a.createElement("li",null,"3.69 GPA, 8 semesters on dean's list "))),s.a.createElement("ul",null,s.a.createElement("li",null,"The Urban School of San Francisco "))))}}]),t}(s.a.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).slideWidth=function(){return document.querySelector(".slide").clientWidth},a.state={slides:e.slides,index:0,trans:0},a.nextSlide=a.nextSlide.bind(Object(u.a)(Object(u.a)(a))),a.prevSlide=a.prevSlide.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"nextSlide",value:function(){var e=this;this.setState(function(t){return t.index===t.slides.length-1?{index:0,trans:0}:{index:t.index+1,trans:t.trans-e.slideWidth()}})}},{key:"prevSlide",value:function(){var e=this;this.setState(function(t){return 0===t.index?{index:t.slides.length-1,trans:-e.slideWidth()*(t.slides.length-1)}:{index:t.index-1,trans:t.trans+e.slideWidth()}})}},{key:"render",value:function(){var e=this.state.slides.map(function(e,t){return s.a.createElement("div",{key:t,className:"slide"},s.a.createElement("div",{className:"img-wrapper"},s.a.createElement("img",{src:e.img})))});return s.a.createElement("div",{className:"carousel-container"},s.a.createElement("div",{className:"carousel"},s.a.createElement("div",{className:"slide-wrapper",style:{transform:"translateX(".concat(this.state.trans,"px)"),transition:"transform ease-out 0.5s"}},e),s.a.createElement("div",{className:"carousel-desc"},s.a.createElement("div",{className:"desc-inner"},s.a.createElement("p",null,this.state.slides[this.state.index].desc))),s.a.createElement("div",{className:"arrow prev-arrow",onClick:this.prevSlide},s.a.createElement("img",{src:a(30)})),s.a.createElement("div",{className:"arrow next-arrow",onClick:this.nextSlide},s.a.createElement("img",{src:a(30)})),s.a.createElement("div",{className:"current-slide"},this.state.index+1," of ",e.length)))}}]),t}(s.a.Component),k=a(7),w=a.n(k),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).state={projects:[{header:"Auto Mail",desc:"I created an application that can automate reading and categorizing emails powered by OpenAI. I used Typescript React and Express.js to create a fullstack application that allows a user to train their AI assistant to categorize and extract data from their incoming mail",slides:[{img:a(53),desc:"Users can define types of email they recieve called 'Document Types' Users explain to their assistant what kind of email this is so the AI can match it to incoming emails"},{img:a(54),desc:"Users can create data fields to extract from their mail and link it to a Document Type, that way when the assistant matches a document type, it can pull out certain key information from the document"},{img:a(28),desc:"Users can upload documents or paste in email text for the assistant to parse. When mail is processed, the assistant will match the text to one of the document types and then extract the associated data from the text"},{img:a(29),desc:"Here we can seee the resulting JSON extracted from the email. From here, I am planning to add more features where this JSON can be customized and sent to any webhook of the user's choosing."}]},{header:"Stock Analyzer",desc:"I was hired by a startup and created a server to scrape and analyze over 700 stock symbols by cross referencing several 3rd party APIs and storing analysis in our database"},{header:"Table For Two",desc:"Table For Two is a web application for posting, searching, and matching with user created events. I built it full stack using ReactJS for the front end, and a NodeJS Express server using the 'Sequelize' ORM for the backend. I used Amazon Web Services to host the servers and a mySQL database. The app also uses Socket.io to implement real time chat rooms. It also uses the imgur APIs to host images for events, and stores profile pictures in base64 encoded BLOBs on the database, cropping and compressing using npm modules. Here are some features implemented in the site: ",slides:[{img:a(12),desc:"Homepage of Table For Two, featuring events added from different users than the current user. Events are shown in a Carousel."},{img:a(55),desc:"Showing newest event in carousel."},{img:a(20),desc:"Event display as user scrolls."},{img:a(8),desc:"Once logged in, a user can add/edit/delete their hosted events, and invite/uninvite people who 'Liked' their events. Events are stored in the database, where images are uploaded to imgur APIs and the URL is stored with the event"},{img:a(21),desc:"Form to create or edit an event"},{img:a(9),desc:"Users can update their profile, Profile images are base64 encoded, compressed, and cropped using 'imagemin' and 'sharp' node modules respectively."},{img:a(22),desc:"Once logged in, user can 'Like' Bob's event and send a message."},{img:a(23),desc:"Bob can see who liked his event once logged in."},{img:a(10),desc:"Bob clicks on the user bubble to see full profile, and can invite user to join event."},{img:a(56),desc:"Once a user has matched with an event and been invited by the event creator, they are entered into a chat with everyone invited to that event. The chat logs can be stored in the database, but it is currently disabled. The chat works using the 'socket.io' package. The UI for the chat page is unfinished and still rough, but users can change chatrooms and view event details and chat members."},{img:a(11),desc:"Chat sidebar folds down on click to reveal event info"}]},{header:"News Polling Backend",desc:s.a.createElement("p",null,"RESTful API backend build with NodeJS Express server, sequelize ORM, and mySQL database, all deployed on AWS. Web application built for a client who wanted creatable polls on his website. Backend supports Create/Read/Update/Delete functionality for new questions with variable number of options, as well as users casting votes, and getting a map of votes mapped to the state the vote came from ")},{header:"NodeJS RESTful API",desc:s.a.createElement("p",null,"I have created APIs for multiple web apps featuring: custom database, password encryption, java web token authentication and account verification, server side image storage and upload, and many more small details as the project requires. ",s.a.createElement("br",null)," due to the privacy of the applications I will not post full source code, but sample code can be provided on request")},{header:"Be'Chol Lashon Charity Website",desc:s.a.createElement("p",null," various work (including custom plugins) for a Wordpress website. I created the backend for a custom search plugin to search the extensive archive database using WP_Query and custom metadata filters. I also made a custom plugin to handle pagination requests from all category pages and search pages. In addition to the plugins, I did various backend work and created numerous features")},{header:"RentSFSU",desc:s.a.createElement("p",null," This project was made by a group of five developers as part of the capstone class for Computer Science majors. The website was created to match student renters with apartment renters.",s.a.createElement("br",null),"    My role in this project was backend developer, mainly writing the model and controller for apartment listings. I also implemented google maps API to get the coordinates of apartments and used BLOBs to store images on the database.",s.a.createElement("br",null),"    The website was written in PHP using an MVC framework  with a SQL database and hosted on Amazon web servers.",s.a.createElement("br",null),"    Here are some images illustrating the functionality of my backend contributions to the website: "),slides:[{img:a(13),desc:"RentSFSU homepage"},{img:a(24),desc:"Page displaying all relevant listings"},{img:a(25),desc:"Listing creation page"},{img:a(26),desc:"Using Google APIs to display approximate location of property, to maintain security of listing"}]},{header:"Tank and plane games",desc:s.a.createElement("p",null," The first large programming project I did was creating these two games in Java. Other than the existing image assets, the two games were built from scratch and share some reusable Java classes.",s.a.createElement("br",null),"    Here are some screenshots of the two games:"),slides:[{img:a(57),desc:"Gameplay of the plane game"},{img:a(14),desc:"The game features randomly spawning enemies, and two player co-op to progress as far as possible until one player is out of health"},{img:a(15),desc:"Gameplay of the tank game"},{img:a(16),desc:"The game features player vs player combat, with destructable walls, splitscreen cameras, and a realtime minimap"}]}]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.projects.map(function(e,t){return s.a.createElement("div",{className:"project-container"},s.a.createElement(w.a,{id:"project"+t},s.a.createElement("h3",{className:"project-header"},e.header)),s.a.createElement("p",{className:"project-desc"},e.desc),e.slides&&s.a.createElement(E,{slides:e.slides}))}),t=(this.state.projects.map(function(e,t){return s.a.createElement("a",{href:"#project"+t}," ",e.header," ")}),this.state.projects.map(function(e,t){return{ref:"#project"+t,name:e.header}}));return this.props.setLinks(t),s.a.createElement("div",{className:"projects"},s.a.createElement("h2",null," Projects "),e)}}]),t}(s.a.Component),x=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).state={links:[],openMenu:!1},e.setLinks=e.setLinks.bind(Object(u.a)(Object(u.a)(e))),e.toggleMenu=e.toggleMenu.bind(Object(u.a)(Object(u.a)(e))),e.closeMenu=e.closeMenu.bind(Object(u.a)(Object(u.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setLinks",value:function(e){0===this.state.links.length&&this.setState({links:e})}},{key:"toggleMenu",value:function(){this.setState(function(e){return{openMenu:!e.openMenu}})}},{key:"closeMenu",value:function(){this.setState({openMenu:!1})}},{key:"render",value:function(){var e=this,t=this.state.links.map(function(e){return s.a.createElement("li",{className:"anchor-link"},s.a.createElement("a",{href:e.ref}," ",e.name," "))}),n=this.state.links.map(function(t){return s.a.createElement("li",{className:"hamburger-link"},s.a.createElement("a",{href:t.ref,onClick:e.closeMenu}," ",t.name," "))});return s.a.createElement("div",{className:"homepage"},s.a.createElement(b,null),s.a.createElement("div",{className:"content-container"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:this.state.openMenu?"anchor-menu open-menu":"anchor-menu"},s.a.createElement("img",{src:a(58),onClick:this.toggleMenu,style:this.state.openMenu?{transform:"rotate(90deg)"}:{}})),s.a.createElement("div",{className:"dropdown-menu",style:this.state.openMenu?{maxWidth:"1000px"}:{maxWidth:"0px"}},s.a.createElement("ul",null,s.a.createElement("li",{className:"hamburger-link"},s.a.createElement("a",{href:"#resume"}," Resume ")),s.a.createElement("li",{className:"hamburger-link"},s.a.createElement("a",{href:"#projects"}," Projects ")),s.a.createElement("ul",{className:"sub-menu"},n))),s.a.createElement("div",{className:"profile"},s.a.createElement("div",{className:"prof-pic-container"},s.a.createElement("img",{src:a(59),className:"prof-pic"})),s.a.createElement("h1",{id:"name"},"Joshua Rubin"),s.a.createElement("div",{className:"sidebar"},s.a.createElement("div",{className:"about"},s.a.createElement("p",null,"As a Fullstack Engineer, I pride myself on my ability to create elegant, robust solutions to unique problems while continually learning and growing. I have experience working in tech startups where I designed and implemented solutions to our toughest challenges. I have also worked with smaller clients, both creating new products and maintaining legacy codebases. I am a hard worker, good communicator, and will never settle on less than excellence!")),s.a.createElement("div",{className:"sticky-sidebar"},s.a.createElement("ul",null,s.a.createElement("li",{className:"anchor-link"},s.a.createElement("a",{href:"#resume"}," Resume ")),s.a.createElement("li",{className:"anchor-link"},s.a.createElement("a",{href:"#projects"}," Projects ")),s.a.createElement("ul",{className:"sub-menu"},t))))),s.a.createElement("div",{className:"main"},s.a.createElement(w.a,{id:"resume"},s.a.createElement(v,null)),s.a.createElement(w.a,{id:"projects"},s.a.createElement(y,{setLinks:this.setLinks}))))))}}]),t}(s.a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(x,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[34,1,2]]]);
//# sourceMappingURL=main.5e83ada7.chunk.js.map