// Objects defined below
var work = {
	"jobs":[
		{
		"employer":"Elsevier",
		"title":"Project Coordinator",
		"location":"St. Louis, MO",
		"dates":"1997-1999",
		"description":"Managed creation and maintenance of several online versions of medical journals"
		},
		{
		"employer":"Bradford and Galt",
		"title":"Technical Consultant",
		"location":"St. Louis, MO",
		"dates":"1999-2000",
		"description":"Consultant specializing in HTML and Javascript"
		},
		{
		"employer":"AT&T",
		"title":"Senior Technical Architect",
		"location":"St. Louis, MO",
		"dates":"2000-Present",
		"description":"Software developer for both internal and customer-facing web applications."
		}
	]

}
var projects = {
	"display":function() {
		console.log("Projects: " + JSON.stringify(this.projects));
		if (this.projects.length > 0) {
			for (thisProject in this.projects) {
				var prj = this.projects[thisProject];
				$('#projects').append(HTMLprojectStart);
				var thisTitle = HTMLprojectTitle.replace("%data%",prj.title);
				$('.project-entry:last').append(thisTitle);
				var thisDate = HTMLprojectDates.replace("%data%",prj.dates);
				$('.project-entry:last').append(thisDate);
				var thisDesc = HTMLprojectDescription.replace("%data%",prj.description);
				$('.project-entry:last').append(thisDesc);
				for (image in prj.images) {
					var thisImg = HTMLprojectImage.replace("%data%",prj.images[image]);
					$('.project-entry:last').append(thisImg);
				}
			}
		}
	},
	"projects":[
		{
		"title":"SBC My Services",
		"dates":"2002-2003",
		"description":"My Services display page for www.sbc.com",
		"images":["http://placehold.it/200x100","http://placehold.it/580x100","http://placehold.it/100x100"]

		},
		{
		"title":"Ticketsearch",
		"dates":"2009-2013",
		"description":"AT&T trouble ticket search/display web application",
		"images":["http://placehold.it/100x100","http://placehold.it/580x120","http://placehold.it/580x20"]
		},
		{
		"title":"att.net Web Directory",
		"dates":"2013-Present",
		"description":"Legacy att.net landing page",
		"images":[
			"http://www.att.net/design/CDLS30/img/logos/uh-head-icons-sprite.png",
			"http://www.att.net/design/CDLS30/img/logos/att-net_pby_logo_sprite.png",
			"http://www.att.net/design/CDLS30/img/wd/Lrec-3screen-Nothomepage.jpg"
		]
		}
	]

}
projects.display();
var bio = {
	"name":"Pat Nellesen",
	"role":"Senior Technical Architect",
	"contacts":{
		"mobile":"314-954-6146",
		"email":"pat@pnellesen.com",
		"github":"pnellesen",
		"twitter":"n/a",
		"location":"St. Peters, MO"
	},
	"welcomeMessage":"Welcome to my Resume",
	"skills":["HTML","Javascript","CSS","JQuery","SQL"]
}

var education = {
	"schools": [
		{
			"name":"Truman State University",
			"location":"Kirksville, MO",
			"degree":"BS",
			"majors":["Physics"],
			"dates":1983,
			"url":"http://www.trumanstate.edu"
		},
		{
			"name":"UMSL",
			"location":"St. Louis, MO",
			"degree":"BS",
			"majors":["Physics"],
			"dates":1992,
			"url":"http://www.umsl.edu"
		},
		{
			"name":"UMSL",
			"location":"St. Louis, MO",
			"degree":"MS",
			"majors":["Physics"],
			"dates":1996,
			"url":"http://www.umsl.edu"
		}
	],
	"onlineCourses":[
		{
			"title":"Introduction to Javascript",
			"school":"ZDNet University",
			"dates":2000,
			"url":"http://www.zdnet.com"
		},
		{
			"title":"Front End Web Developer Nanodegree",
			"school":"Udacity",
			"dates":2014,
			"url":"http://www.udacity.com"
		}
	]
}
// skills
var myHeaderName = HTMLheaderName.replace("%data%",bio.name);
$('#header').append(myHeaderName);
if ((typeof bio != "undefined") && (bio.skills) && (bio.skills.length > 0)) {
	$('#header').append(HTMLskillsStart);
	for (i = 0;i < bio.skills.length; i++) {
		$('#skills').append(HTMLskills.replace("%data%", bio.skills[i]));
	}

}
// jobs

function displaywork() {
	if ((typeof work != "undefined") && (work.jobs) && (work.jobs.length > 0)) {
		for (thisJob in work.jobs) {
			$('#workExperience').append(HTMLworkStart);

			var thisEmployer = HTMLworkEmployer.replace("%data%",work.jobs[thisJob].employer);
			var thisTitle = HTMLworkTitle.replace("%data%",work.jobs[thisJob].title);
			$('.work-entry:last').append(thisEmployer + thisTitle);

			var thisLocation = HTMLworkLocation.replace("%data%",work.jobs[thisJob].location);
			$('.work-entry:last').append(thisLocation);

			var thisDateRange = HTMLworkDates.replace("%data%",work.jobs[thisJob].dates);
			$('.work-entry:last').append(thisDateRange);

			var thisDescription = HTMLworkDescription.replace("%data%",work.jobs[thisJob].description);
			$('.work-entry:last').append(thisDescription);

		}
	}
}
$('#main').append(internationalizeButton);

function inName(strName) {
	if (strName === undefined) strName = $('#name').html();
	console.log("strName: " + strName);
	var fname = "";
	var lname = "";
	var fullname = "";
	if (strName.length > 0) {
		var arrNames = strName.split(" ");
		fname = strName.split(" ")[0].toLowerCase();
		fname = fname.charAt(0).toUpperCase() + fname.slice(1);
		fullname = fname;
		if (arrNames.length > 1) {
			lname = strName.split(" ")[1].toUpperCase();
			if (lname.length > 0) fullname = fname + " " + lname;
		}
	}
	return fullname;
}
