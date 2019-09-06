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
						<span class="question">Who am I?</span><br />
						<span class="answer">
							My name is Andrew (Andi) Ruda.  I am an experienced web application developer that is comfortable spinning up auto-scaling
                            cloud hosted solutions for tiny applets all the way to enterprise level SaaS applications.  I have over 10 years experience
                            developing web based applications on varying tech stacks.  <br>
                            In the past decade I have been: a freelancer, a team member, a manager, and a director.
						</span><br /><br />
						<span class="question">What can I do?</span><br />
						<span class="answer">
							Star Wars EU Facts<br />
							Tolkienlore<br />
							Fast Learner/Easy To Teach<br />
							Carpentry/Finish Work<br />
						</span><br /><br />
						<span class="question">Why Andi!  That is a lovely family in the pictures!</span><br />
						<span class="answer">
							They are amazing, aren't they?!  Unfortunately this picture is outdated as I now have 3 kids (all boys) and my oldest is now 9.
						</span><br /><br />
						<span class="question">Do I have any Hobbies?</span><br />
						<span class="answer">
						    If and when I have any freetime, I enjoy:
                            CrossFit<br>
							Cooking<br>
                            Eating<br>
							Family trips to Costco!
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
					<!--<li>
						<h3>Website Mockup</h3>
						<a class="iframe" href="http://www.frecklesinc.com"><img src="images/port-image-4.jpg" /></a>

					</li>
					<li>
						<h3>Old Portfolio Site<h3>
						<a class="iframe" href="portfoliopages/portfolio3/"><img src="images/port-image-1.jpg" /></a>

					</li>-->
				</ul>
			</div>
			<script>$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});</script>
			<div class="story">
				<div class="story-content">
					<h2>Portfolio</h2>
					<div>
						<p>
							Some very old and outdated (10yrs or so) examples of my early work in JS and FE design/coding.  Newer examples on their way!!
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
