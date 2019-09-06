<?php  include 'includes/stdHeaderStart.inc'; ?>
<?php  include 'includes/stdHeaderEndHome.inc'; ?>
  <?php  include 'includes/header.inc'; ?>
  <section id="story-header">
	<img src="images/ar-bg.jpg" class="bg animate" anim-detatched="true" />
	<p id="scrollDown" style="z-index:999;">
		<a href="#bio"><img src="images/scroll-down.png" /></a>
	</p>
			<div class="story" style="position:absolute!important;bottom:50px;left:15%;">
				<div>
					<img src="images/ar-home-banner.png" />
					<h2 class="greenP" style="position:absolute;top:45px;left:146px;"><em>Web Developer</em></h2>					
				</div>
			</div>
		</section>


		<section id="story-bio">
			<div class="story">
				<div style="margin-top:20%;">
					<img src="images/ar-bio-family.png" style="position:absolute;right:5px;" />
					
					<h2>About AR</h2>
					<p>
						<span class="question"><strong>Q:</strong>Who am I?</span><br />
						<span class="answer"><strong>A:</strong>
							My name is Andrew (Andi) Ruda.  I am a web deloper that enjoys open source, cloning git repositories, Ubuntu's new Raring Ringtail, Playing around with <a href="http://nodejs.org" target="_blank">Node</a>, surfing, playing with my boys, spending time with my wife, and many recrational activities.  My idea of fun is unpacking JSON Bags from API calls, schooling everyone around me at Star Wars trivia (seriously, I haven't been beat) and learning a new scripting language!
						</span><br />
						<span class="question"><strong>Q:</strong>How old am I?</span><br />
						<span class="answer"><strong>A:</strong>
							28yrs Young
						</span><br /><br />
						<span class="question"><strong>Q:</strong>What skills do I possess?</span><br />
						<span class="answer"><strong>A:</strong>
							Star Wars EU Facts<br />
							Tolkienlore<br />
							Fast Learner/Easy To Teach<br />
							Carpentry/Finish Work<br />
							Facebook App IQ score of 165
						</span><br /><br />
						<span class="question"><strong>Q:</strong>Family?</span><br />
						<span class="answer"><strong>A:</strong>
							1 Wife & 2 Boys
						</span><br /><br />
						<span class="question"><strong>Q:</strong>Hobbies?</span><br />
						<span class="answer"><strong>A:</strong>
							jQuery Plugin writing<br />
							Carpentry<br />
							Cooking with my Wife<br />
							Eating My Wife's Cooking
						</span><br /><br />
					</p>
				</div>
			</div>
		</section>
		<section id="story-portfolio" style="background-color:black">
			<!--<img src="images/ama-beach-joy-run.jpg" style="position:absolute;right:5px;" />-->
			<div class="portfolioSlide animate" anim-detached="false">
				<ul>
					<li>
						<h3>Javascript Application<br />Form Editor</h3>
						<a class="iframe" href="formsUI.html"><img src="images/formsui-thumbnail.jpg" /></a>
						
					</li>	
					<li>
						<h3>Website</h3>
						<a class="iframe" href="http://www.ibewsjcu.org"><img src="images/port-image-6.jpg" /></a>
					</li>	
					<li>
						<h3>jQuery Plugin</h3>
						<a class="iframe" href="polaroid.html"><img src="images/port-image-7.jpg" /></a>						
					</li>								
					<li>
						<h3>jQuery Plugin<h3>
						<a class="iframe" href="zoom-it.html"><img src="images/port-image-2.jpg" /></a>
						
					</li>
					<li>
						<h3>Website Mockup</h3>
						<a class="iframe" href="http://www.frecklesinc.com"><img src="images/port-image-4.jpg" /></a>
						
					</li>		
					<li>
						<h3>Old Portfolio Site<h3>
						<a class="iframe" href="portfoliopages/portfolio3/"><img src="images/port-image-1.jpg" /></a>
						
					</li>
				</ul>
			</div>
			<script>$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});</script>
			<div class="story">
				<div class="story-content">
					<h2>Portfolio</h2>
					<div>
						<p>
							This section is being actively worked on.<br /> The most recent entry is the FormsUI form drag and drop editor that I am currently working on.  I am %80 pecent complete on the client side and %50 percent complete on the server side.<br /> Client side languages: 80% Vanilla Javascript and 20% jQuery.<br /><br />To view the code on any of these, right click and "View Framesource" for each pop-up.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section id="story-resume">
		<img src="images/ar-bg-page.jpg" class="bg animate" />
			<div class="story">
				<h2 style="margin-top:20%;">Resume</h2>
				<p> Resume available shortly...</p>
			</div>
		</section>
		<section id="story-contact">
			<div class="story">
				<h2 style="margin-top:20%;">Contact</h2>
					<p> Contact form available shortly.  Please feel free to email me at <a href="mailto:andiruda@gmail.com">andiruda@gmail.com</a></p>
			</div>
		</section>
	
		
<?php  include 'includes/footer.inc'; ?>
