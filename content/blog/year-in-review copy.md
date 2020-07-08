---
title: "Showing our work: Eviction Lab's Housing Policy Scorecard"
subtitle: How we pivoted in a pandemic to meet an urgent need.
date: "2019-02-24"
blogimage: "/images/blog/el-scorecard-social-00008.jpg"
socialdescription: How we pivoted in a pandemic to meet an urgent need.
social_image: "/images/blog/el-scorecard-social-00008.jpg"
description: As we at Hyperobjekt gear up for a promising 2020, we reflect upon this past year with feelings of gratitude and accomplishment. It was an intensely-eventful time for our team, full of opportunities to perform challenging, creative work aligned with our values. 
---
<i class="blogintro">This is the first in a series of articles from Hyperobjekt that present detailed, first-person technical walkthroughs of our team members’ work on our latest projects. We hope that sharing our process in this way will be of interest to developers, designers, and others, as we have been informed by learning about the approaches and techniques of others in our field.</i>
 

<h3>James Minton, Creative Director</h3>

The typical project development cycle for us is much like any other agency's: a discovery phase, mockups, kicking off development, and then—allowing for a few wrenches thrown along the way—final tweaks and product launch. In other words, the work follows a more or less orderly sequence from concept to execution.

But then came COVID-19, which has humbled the entire globe and disrupted countless best-laid plans. Most of us have faced the need to reassess goals and adjust working lives, and as a team, we’ve had to adapt and reshuffle as projects have been delayed and plans revised. 

But at the same time, much of the work of Hyperobjekt’s clients—including on <a href="https://evictionlab.org/" target="_blank">evictions</a>, <a href="https://basicincome.stanford.edu" target="_blank">universal basic income</a>, and <a href="https://edopportunity.org" target="_blank">educational opportunity</a>—has been thrust in the spotlight during this crisis. The times call for timely responses on these issues, so we have retooled for rapid turnarounds and released a steady stream of new apps and updates to support our clients’ efforts.

One of those apps is the <a href="https://evictionlab.org/covid-policy-scorecard" target="_blank">Housing Policy Scorecard</a> we created for The Eviction Lab at Princeton. Conceived in response to a pandemic which has caused the worst economic hardship in nearly a century and heightened millions of renters’ vulnerability to eviction, the scorecard is a constantly-updated overview of states’ responses (or lack thereof) to this impending threat. This tool has since become an essential reference used by journalists, policymakers, and the public to gauge the efficacy of their states' protections.

<img src="/images/blog/scorecard-app.jpg" />
<p class="blogcaption">The COVID-19 Housing Policy Scorecard.</p>

In keeping with the need for a fast launch (which necessitated starting to code even while the data structure was still coming together) and an application flexible enough to adjust to rapidly-changing circumstances, we took an approach that favored simplicity, adaptability, and future-proofing, versus an overdetermined design that would’ve boxed us in and required restructuring down the road. 

In this case, having options seemed better than being attached to plans. 

<h3>Amy Groshek, project developer</h3>

Time was at a premium. State-level housing protections were changing rapidly, and the Lab requested a nimble solution that could be built and released iteratively, while they refined their data. In hindsight, this was a wise approach, as the Lab found it necessary to change both the data structure and format of certain columns after development was underway. 

The team at Princeton had used Google Spreadsheets as a data source for ther aspects of [their web site](https://evictionlab.org), so that seemed like a useful solution that would encourage rapid collation of data. The scorecard could fetch the spreadsheet data easily, as JSON via AJAX request. However, the lack of structure in Google Spreadsheets posed potential problems. We avoided a great deal of difficulty by instating multiple sticky headings in the spreadsheet itself. The first row was the machine-readable column key for parsing the columns. The next row was a human-readable title for the column contents. The third row contained an example entry. When parsing the JSON, I simply discarded the unnecessary rows. 

<img src="/images/blog/scorecard-sheet.jpg" />
<p class="blogcaption">The Google Sheet which serves as the app's database.</p>


The interactive scorecard was to be presented in a <a href="https://gohugo.io" target="_blank">Hugo</a> site, and the scorecard itself was certainly complex enough to warrant an <a href="https://www.guru99.com/mvc-tutorial.html" target="_blank">MVC framework</a>. I considered building the entire scorecard as a React app. However, publishing and re-publishing the scorecard as a JavaScript library or <a href="https://www.npmjs.com/" target="_blank">NPM</a> module, then making subsequent commits to the Hugo repository, would have both slowed down development and created hurdles for team members who would later fine-tune styling and other aspects of visual presentation. I instead opted for an old-fashioned JavaScript implementation, which would load and parse the GSheets JSON, generate the requisite HTML using <a href="https://handlebarsjs.com/" target="_blank">Handlebars.js</a>() templates (one for the scorecard page and one for the individual state pages), then inject the content into the page.  jQuery was used for DOM manipulation. I authored the functionality as a `rankings` object, which contained both the arrays and objects which dictated the filters and other features of the scorecard and the functions necessary to fetch and build the scorecard pages. This isolated the functionality from other scripts and pages on the Hugo site while still allowing other team members to edit the templates and styling in parallel. 

Regarding animations: jQuery’s `hide()` and `show()`, no matter how much you fine-tune the options, don’t even come close to the animation quality of CSS transitions, so in most cases I chose to toggle classes with jQuery and handle the animations in SCSS.

Regarding accessibility: The tooltips presented quite a problem for a11y: several tooltip plugins claiming to be accessible didn’t test well for me, or couldn’t handle screen resize and overflow issues with nuance. This is one place where exhaustive standards for visual presentation simply don’t cohere with current a11y best-practices. In the end, I simply resorted to aria-label or aria-labelledby to add tooltip text to the screen reader queue for filter selection.

Another feature is the “sticky sub-header” for filtering the scorecard based on states’ policies. We discussed and experimented with several different presentations for these filters. Knowing that we weren’t working with a genuine MVC framework and each additional UI element added a significant amount of technical debt in terms of responsiveness, a11y, and feature collisions, I fought to keep the filters inline, and in general to keep the UI as simple as possible. I’m ultimately very pleased, when testing at different device widths, with how stable and naturally responsive the UI is, and glad that we arrived at this solution.

<img src="/images/blog/scorecard-filters.jpg" />
<p class="blogcaption">The Scorecard's filter options.</p>

Lastly, we needed a strategy for showing each state’s details. Originally, these were to be displayed in a pane or dialog that would appear when a state was selected from the scorecard. In the end, because it would both improve SEO and offer a more stable interface, we decided to simply create unique Hugo pages for each of these states. I wrote a Hugo template to declare the state abbreviation as a JavaScript variable on page load, allowing the rankings init to detect and load the correct state details data. Once again, this allows us to present detailed data in a natural and intuitive navigation structure without further taxing an already relatively complex interactive UI.

<img src="/images/blog/scorecard-page.jpg" />
<p class="blogcaption">The Scorecard's individual state page for New York.</p>




