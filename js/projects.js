'use strict';

const projects = [
	{
		name: 'Algorithm Visualizer',
		description:
			'An app that displays a graphical representation of a variety of different search algorithms to find the shortest path between two points.',
		tags: ['React', 'Javascript', 'CSS'],
		image: '../imgs/gifs/algo-vis.gif',
		url: 'skyles-algo-visualizer.netlify.app',
		github: 'https://github.com/tskyles/algorithim_visualizer',
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
			text: 'Website',
		});
		const githubLink = $('<a/>', {
			id: 'github_link',
			href: project.github,
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
