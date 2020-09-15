'use strict';

const projects = [
	{
		name: 'Algorithm Visualizer',
		description:
			'An app that displays a graphical representation of a variety of different search algorithms to find the shortest path between two points.',
		tags: ['React', 'Javascript', 'CSS'],
		image: '../imgs/gifs/algo-vis.gif',
		url: 'https://skyles-algo-visualizer.netlify.app',
		github: 'https://github.com/tskyles/algorithim_visualizer',
	},
	{
		name: 'Smart Mirror',
		description:
			'A modular smart mirror display application created using node.js for use with a raspberry pi.',
		tags: ['Javascript', 'CSS', 'HTML', 'EJS', 'Node', 'Express'],
		image: '../imgs/gifs/smart-mirror.gif',
		url: 'https://skyles-smart-mirror.herokuapp.com/',
		github: 'https://github.com/tskyles/smart-mirror',
	},
	{
		name: 'Pocket Gallery',
		description:
			"An application that allows a user to search and save works of art from the Harvard Art Museum's online gallery.",
		tags: ['Javascript', 'CSS', 'HTML', 'EJS', 'Node', 'Express', 'PostgreSQL'],
		image: '../imgs/gifs/pocket-gallery.gif',
		url: 'http://www.pocketgallery.art',
		github: 'https://github.com/Renaissance-devs/pocket_gallery',
	},
];

$(function () {
	for (let project of projects) {
		const skillDiv = $('<div class="skills-wrapper"></div>');
		for (let tag of project.tags) {
			skillDiv.append(
				`<span class='skill-tag ${tag.toLowerCase()}'>${tag}</span>`
			);
		}
		const h4 = $(`<h4>${project.name}</h4>`);
		const p = $(`<p>${project.description}</p>`);
		const displayDiv = $("<div class='project-display'></div>");
		const infoDiv = $("<div class='project-info'></div>");
		const infoWrap = $("<div class='info-wrapper'></div>");
		const imageWrap = $("<div class='image-wrapper'></div>");
		const image = $('<img />', {
			class: 'project',
			src: project.image,
			alt: project.name,
		});
		const buttonWrap = $("<div class='button-wrapper'></div>");
		const urlLink = $('<a/>', {
			id: 'url_link',
			href: project.url,
			target: '_blank',
			text: 'Website',
		});
		const githubLink = $('<a/>', {
			id: 'github_link',
			href: project.github,
			target: '_blank',
			text: 'GitHub',
		});
		buttonWrap.append(urlLink).append(githubLink);
		infoDiv.append(h4);
		infoDiv.append(skillDiv);
		infoWrap.append(p);
		infoDiv.append(infoWrap).append(buttonWrap);
		imageWrap.append(image);

		$(displayDiv).append(infoDiv).append(imageWrap);
		$('#project_wrapper').append(displayDiv);
	}
});
