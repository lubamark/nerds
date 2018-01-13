var buttonFeedback = document.querySelector(".feedback-button");
var modalFeedback = document.querySelector(".modal-feedback");
var nameFeedback = document.querySelector("#feedback-name");
var emailFeedback = document.querySelector("#feedback-email");
var messageFeedback = document.querySelector("#feedback-message");
var closeFeedback = document.querySelector(".modal__close");
var submitFeedback = document.querySelector(".feedback-form");

if(buttonFeedback){
	buttonFeedback.addEventListener("click", function(evt){
		evt.preventDefault();
		modalFeedback.classList.add("modal-show");
		nameFeedback.focus();
		
	});

	closeFeedback.addEventListener("click", function(evt){
		evt.preventDefault();
		modalFeedback.classList.remove("modal-show");
		modalFeedback.classList.remove("modal-error");
		
	});

	submitFeedback.addEventListener("submit", function(evt){
		if ( !nameFeedback.value || !emailFeedback.value || !messageFeedback.value){
			evt.preventDefault();
			modalFeedback.classList.remove("modal-error");
			modalFeedback.offsetWidth = modalFeedback.offsetWidth;
			modalFeedback.classList.add("modal-error");
		}
	});
}

window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			if (modalFeedback.classList.contains("modal-show")) {
				modalFeedback.classList.remove("modal-show");
				modalFeedback.classList.remove("modal-error");
			}
		}
	});