<?php 
	/* Main page with two forms: sign up and log in */
	require 'php/db.php';
	session_start();

	$Username = "";
	$items = "";
	$logged_check = false;

	if(isset($_SESSION["userId"])){
		$logged_check = true;
		$Username = $_SESSION["firstname"];
	}

?>
<!DOCTYPE html>
<html>
	<head>
		<link rel="icon" href="/StoreFront/pageStructure/img/websiteIcon.png">
		<meta name="viewport" content="width=device-width, maximum-scale=0.5, minimum-scale=0.5, initial-scale=0.5, user-scalable=0">
		<meta charset="utf-8">
		<script type="text/javascript" src="/StoreFront/pageStructure/scripts/jquery-min.js"></script>
		
		<link rel="stylesheet" type="text/css" href="/StoreFront/structureFooter/footerStyle.css">
		<link rel="stylesheet" type="text/css" href="/StoreFront/pageStructure/css/tagStyles.css">
		<link rel="stylesheet" type="text/css" href="/StoreFront/pageStructure/css/headerStyle.css">
		<link rel="stylesheet" type="text/css" href="/StoreFront/pageStructure/css/secondHeaderStyle.css">
		<link rel="stylesheet" type="text/css" href="/StoreFront/pageStructure/css/panelStyles.css">
		<link rel="stylesheet" type="text/css" href="/StoreFront/pageStructure/css/loginSlidingWindow.css">
		<link rel="stylesheet" type="text/css" href="/StoreFront/pageStructure/css/helpSlidingWindow.css">
		<link rel="stylesheet" type="text/css" href="/StoreFront/pageStructure/css/breadcrumbs.css">
		<link rel="stylesheet" type="text/css" href="/StoreFront/pageStructure/css/fluidCss.css">

		<script type="text/javascript" src="/StoreFront/pageStructure/scripts/fixedHeader.js"></script>
		
		<?php
			if(file_exists("customCss.php")){
				include "customCss.php";
			}
			
			
		?>
	</head>
	<body>
		<div class="pageContentWrapper">
			<div id="head" class="sticky">
				<!-- FIRST HEADER -->
				<div id="firstHead" class="firstHeader" onmouseenter="showSecondHeader()" 
				ontouchstart='showSecondHeader()' >
					<div onclick="window.open('/StoreFront/home/','_self')" id="teliaIcon">Storefront</div>
					
					<div id="showUsername"><?php echo $Username; ?></div>
					<button id="userIcon" onclick="openSlideInWindow()"></button>
				</div>

				<!-- SECOND HEADER -->
				<div id="secondHead" class="secondHeader">
					<button class="headerButton" onclick="scrollDownTo('Top list')">Top list</button>	
					<button class="headerButton" onclick="scrollDownTo('Free')">Free</button>
					<button class="headerButton" onclick="scrollDownTo('Most liked')">Most liked</button>
					<div class="dropdown" ><!-- onmouseenter="openDropdown()" onmouseleave="closeDropDown()" -->
						<button class="headerButton" id="seeMoreButton" style="display:inline;" >See more &nbsp;<i class="down"></i></button>
						
						    <div class="dropdown-content" id="seeMoreContent">
								<div class="column">     
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=Most bought')">Most bought</button>
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=SMS')">SMS</button>
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=Call')">Call</button>
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=Fun')">Fun</button>								
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=Mobile')">Mobile</button>
								
								</div>	
								<div class="column">   
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=For new started company')">New Company</button>
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=Company')">Company</button>
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=industry')">Industry</button>
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=Employer')">Employer</button>
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=Management')">Management</button>
								</div>                   
								<div class="column">        
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=Combined API')">Combined API</button>
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=Payment')" >Payment</button>
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=Statistics API')">Statistics API</button>
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=Cloud')">Cloud</button>
								<button class="dropdownButton" onclick="smartJsLink('/StoreFront/category/?cat=All')">All</button>
								</div>
							</div>
					</div> 
				
					<div id="searchBar"><input type="text" id="searchInput"><div id="searchIcon" onclick="filterApi()"></div></div>
					
					<?php 
						if(file_exists($_SERVER["DOCUMENT_ROOT"]."/StoreFront/pageStructure/php/checkAPI.php")){
							require $_SERVER["DOCUMENT_ROOT"]."/StoreFront/pageStructure/php/checkAPI.php";
						} 
					?>
					
					<div id="shoppingBag">
						<div id="itemCount" <?php if($logged_check && $items > 0) echo "style = 'display:block;'"; ?>><?php echo $items; ?></div> <!-- numbers of items in checkAPI.php -->
						<div id="trolley" class="flatSurface" onclick="window.location='/StoreFront/checkout/'" <?php if($logged_check) echo "style = 'display:flex'"?>></div>
					</div>

					<div id="helpContact"  class="flatSurface"  onclick="openHelpWindow()"></div>
				</div>

				<!-- THIRD HEADER / BREADCRUMBS -->
				<div id="thirdHead" class="thirdHeader">
					<ul class="breadcrumbs">
    					<li id="homeBreadcrumb" style="display:none;"><a href="/StoreFront/home/" id="firstPage">Home</a></li>
						<li><a href="" id="secondPage"></a></li>
					</ul>
				</div>
			</div>
			
			<!-- HELP WINDOW -->
			<div class="helpWindow">
				<div class="posisitonOfTheHelpWindow">
					<?php
						require $_SERVER["DOCUMENT_ROOT"].'/StoreFront/pageStructure/panelParts/helpWindow.php';
					?>	
				</div>
			</div>

			<!-- LOGIN WINDOW -->
			<div class="loginWindow">
				<div class="positionOfTheloginWindow">
						
					<?php
						if(isset($_SESSION["userId"]) === false){
							require $_SERVER["DOCUMENT_ROOT"].'/StoreFront/pageStructure/panelParts/loginWindow.php';
						}else{
							require $_SERVER["DOCUMENT_ROOT"].'/StoreFront/pageStructure/panelParts/signedIn.php';
						}
					?>
				</div>
			</div>

			<!-- CONTENT -->
			<div class="content">
				<div id="contentID">
					<?php
						if(file_exists("content.php")){
							include "content.php";
						}
					?>
				</div>
			<!--Real content end-->
			</div>
		</div>
		
		<!-- FOOTER -->
		<div class="footer">
			<?php  
				include $_SERVER["DOCUMENT_ROOT"]."/StoreFront/structureFooter/content.php";
			?>
		</div>

		<?php
		if(file_exists("scripts.php")){
			include "scripts.php";
		}
		?>
		<script type="text/javascript" src="/StoreFront/pageStructure/scripts/loginSlidingWindow.js"></script>
		<script type="text/javascript" src="/StoreFront/pageStructure/scripts/signinUser.js"></script>
		<script type="text/javascript" src="/StoreFront/pageStructure/scripts/scrollDownFunction.js"></script>
		<script type="text/javascript" src="/StoreFront/pageStructure/scripts/helpSlidingWindow.js"></script>
		<script type="text/javascript" src="/StoreFront/pageStructure/scripts/registerUser.js"></script>
		<script type="text/javascript" src="/StoreFront/pageStructure/scripts/signOutUser.js"></script>
		<script type="text/javascript" src="/StoreFront/pageStructure/scripts/filterApiFunc.js"></script>
		<script type="text/javascript" src="/StoreFront/pageStructure/scripts/genericFunctions.js"></script>
		
		<script>
		/* function for breadcrumbs displaying in which interface the user is in */

		var pathname = window.location.pathname;
		switch(pathname) {
    	case "/StoreFront/home/":
        	break;
    	case "/StoreFront/api/":
        	document.getElementById("homeBreadcrumb").style.display="inline";

        	$('.breadcrumbs li+li').attr('content-before','/');
        	document.getElementById('secondPage').innerHTML = "API";
        	break;
    	case "/StoreFront/apiPackage/":
        	document.getElementById("homeBreadcrumb").style.display="inline";

        	$('.breadcrumbs li+li').attr('content-before','/');
        	document.getElementById('secondPage').innerHTML = "APIpackage";
        	break;
   		case "/StoreFront/category/":
        	document.getElementById("homeBreadcrumb").style.display="inline";

        	$('.breadcrumbs li+li').attr('content-before','/');
        	document.getElementById('secondPage').innerHTML = getURL("cat").replace(/[&\/\\#,+()$~%207.'":*?<>{}]/g, ' ');
        	break;
    	case "/StoreFront/profile/":
        	document.getElementById("homeBreadcrumb").style.display="inline";

        	$('.breadcrumbs li+li').attr('content-before','/');   
       	 	document.getElementById('secondPage').innerHTML = "Profile";
        	break;
    	case "/StoreFront/checkout/":
        	document.getElementById("homeBreadcrumb").style.display="inline";

        	$('.breadcrumbs li+li').attr('content-before','/');   
        	document.getElementById('secondPage').innerHTML = "Checkout";
        	break;
    	default:
        	break;
		}
		</script>
	</body>
</html>
