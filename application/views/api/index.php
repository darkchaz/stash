<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Stash</title>
	<link rel="stylesheet"  href="/assets/css/jquery.mobile.min.css">
	<link rel="stylesheet" href="/assets/css/jqm-demos.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
	<script src="/assets/js/jquery.js"></script>
	<script src="/assets/js/app.js"></script>
	<script src="/assets/js/jquery.mobile.min.js"></script>
</head>
<body>
<div data-role="page" class="jqm-demos jqm-demos-index">

	<div data-role="header" class="jqm-header">
        <h1 class="jqm-logo"><a href="/app"><img src="/assets/img/stash.png" alt="jQuery Mobile Framework"></a></h1>
		<a href="#" class="jqm-navmenu-link" data-icon="bars" data-iconpos="notext">Navigation</a>
		<a href="#" class="jqm-search-link" data-icon="search" data-iconpos="notext">Search</a>

	
	<div class="jqm-search">
	    <ul class="jqm-list">
			<li data-section="Widgets" data-filtertext="Homepage"><a href="/app/">Stash Home</a></li>
	    </ul>
	</div>
	
	</div>

	<div data-role="content" class="jqm-content">

		<h1>The Stash App</h1>

		<p class="jqm-intro">Take control of what you already own!</p>

		<ul data-role="listview" data-inset="true" data-filter="true" data-theme="d" data-divider-theme="d" data-icon="false" data-filter-placeholder="Search Feed..." data-global-nav="demos" class="jqm-list">
			<li data-role="list-divider">
				<img src="/assets/img/sefi.gif" style="width:40px;height:40px;margin:4px">
				<span class='name'>Sefi Grossman</span> added 2 items
			</li>
			<li data-section="sefi" data-filtertext="Apple Macbook Pro 17, Apple 27 LED Cinema Display sefi">
				<a href="examples/" data-ajax="true"><p><strong>Apple Macbook Pro 17", Apple 27" LED Cinema Display</strong></p></a>	
				<div  class='gallery'>
					<img src='assets/img/27LED.jpg'/>
				</div>
			</li>
			
			<li data-role="list-divider">
				<img src="/assets/img/chaz.gif" style="width:40px;height:40px;margin:4px;float:right;">
				<span class='name'>Charles</span> added 1 item
			</li>
			<li data-section="chaz" data-filtertext="Aston Martin DB9 chaz">
				<a href="examples/" data-ajax="true"><p><strong>Aston Martin DB9</strong></p></a>	
			
						
				<div class="gallery">
					<img src='/assets/img/db9.jpeg'/>	
				</div>	
			</li>

		</ul>

	</div><!-- /content -->

	<div data-role="footer" class="jqm-footer">
		<p class="jqm-version"></p>
		<p>Copyright 2013 StashApp</p>
	</div>


    <div data-role="panel" class="jqm-nav-panel jqm-navmenu-panel" data-position="left" data-display="reveal" data-theme="c">
        <ul data-role="listview" data-theme="d" data-divider-theme="d" data-icon="false" data-global-nav="demos" class="jqm-list">
            <li data-role="list-divider">App Navigation</li>
			<li><a href="./">Home</a></li>
            <li><a href="intro/">Introduction</a></li>
            <li><a href="examples/">Demo Showcase</a></li>
            <li><a href="faq/">Questions & Answers</a></li>
			<li><a href="intro/rwd.html">Going Responsive</a></li>
        </ul>
	</div>


</div>
</body>
</html>
