let books = [
	{
		title: "Cyber Security",
		author: "Nina Godbole ",
		image: "images/b1.jpg",
	},
];

function displayBooks() {
	const bookList = document.querySelector(".book-list");
	bookList.innerHTML = "";

	books.forEach((book) => {
		const bookItem = document.createElement("div");
		bookItem.classList.add("book-item");

		const bookInfo = document.createElement("div");
		bookInfo.classList.add("book-info");

		const bookImage = document.createElement("div");
		bookImage.classList.add("book-image");
		const imageElement = document.createElement("img");
		imageElement.src = book.image ? book.image : "placeholder.jpg";
		imageElement.alt = "Book Image";
		bookImage.appendChild(imageElement);

		const bookDetails = document.createElement("div");
		bookDetails.classList.add("book-details");

		const titleAuthor = document.createElement("div");
		titleAuthor.classList.add("title-author");
		const titleParagraph = document.createElement("p");
		titleParagraph.classList.add("title");
		titleParagraph.textContent = `Title: ${book.title}`;
		const authorParagraph = document.createElement("p");
		authorParagraph.classList.add("author");
		authorParagraph.textContent = `Author: ${book.author}`;
		titleAuthor.appendChild(titleParagraph);
		titleAuthor.appendChild(authorParagraph);

		const descriptionParagraph = document.createElement("p");
		descriptionParagraph.classList.add("description");
		descriptionParagraph.textContent =
			"This book, focusing on cyberthreats and cybersecurity, provides the much needed awareness in the times of growing cybercrime episodes. · Comprehensive treatment of important topic - cybersecurity to help readers understand the implications of cybercrime. · The book provides adequate orientation on laws in reference to cybercrime and cybersecurity taking into account the Indian as well as global scenario. · Awareness created through simple practical tips and tricks, educates readers to learn how to avoid becoming victims of cybercrime. · Written by InfoSec domain SME and co-authored by qualified ethical hacking professional who is also a security certified. · Well-presented case illustrations and examples from real life to underline the significance of topics addressed in each chapter.";

		bookDetails.appendChild(titleAuthor);
		bookDetails.appendChild(descriptionParagraph);

		bookInfo.appendChild(bookImage);
		bookInfo.appendChild(bookDetails);

		bookItem.appendChild(bookInfo);
		bookList.appendChild(bookItem);
	});
}

function addBook() {
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const imageInput = document.getElementById("image");
	const image = imageInput.files[0];

	if (title && author) {
		const reader = new FileReader();
		reader.onload = function (e) {
			books.push({ title, author, image: e.target.result });
			displayBooks();
		};
		reader.readAsDataURL(image);
	}

	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	imageInput.value = "";
}

displayBooks();
