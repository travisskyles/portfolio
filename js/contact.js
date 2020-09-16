$(function () {
	$('#submit').click(function () {
		$('#form_message_text').addClass('hidden');
		const name = $('#name');
		const email = $('#email');
		const subject = $('#subject');
		const message = $('#message');
		let isValid = false;

		const data = {
			name: name.val(),
			email: email.val(),
			subject: subject.val(),
			message: message.val(),
		};

		isValid = showError(email, name, subject, message);
		$('#form_message_text').text('Sending...').removeClass('hidden');

		if (isValid) {
			$.ajax({
				type: 'POST',
				url: 'https://tskyles-portfolio-server.herokuapp.com/sendmail',
				// url: 'http://localhost:3000/sendmail',
				data: data,
				success: function (data) {
					console.log(data);
					$('#form_message_text').text(data).removeClass('hidden');
				},
				error: function (data) {
					$('#form_message_text')
						.text('Sorry, there was a issue sending your message...')
						.removeClass('hidden');
				},
			});
		}
	});
});

function showError(email, name, subject, message) {
	if (name[0].validity.valueMissing) {
		$('#form_message_text').text('Please enter a name.').removeClass('hidden');
		return false;
	} else if (email[0].validity.valueMissing) {
		$('#form_message_text')
			.text('Please enter an email address.')
			.removeClass('hidden');
		return false;
	} else if (email[0].validity.typeMismatch) {
		$('#form_message_text').text('Email must be valid.').removeClass('hidden');
		return false;
	} else if (subject[0].validity.valueMissing) {
		$('#form_message_text')
			.text('Please enter a subject.')
			.removeClass('hidden');
		return false;
	} else if (message[0].validity.valueMissing) {
		$('#form_message_text')
			.text('Please enter a message.')
			.removeClass('hidden');
		return false;
	} else {
		return true;
	}
}
