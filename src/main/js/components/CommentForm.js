import React from 'react';
import AddCommentMutation from './AddCommentMutation';

/** Comment Form **/
export default class CommentForm extends React.Component {

	constructor(props) {
		super(props);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let { _nameInput, _textInput } = this;
		const author = _nameInput.value.trim();
		const text = _textInput.value.trim();

		if (!text || !author) {
			return;
		}

		this.props.handleSubmit({ author, text });

		_nameInput.value = '';
		_textInput.value = '';
	};

	render () {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your name" ref={ref => this._nameInput = ref}/>
				<input type="text" placeholder="Say something..." ref={ref => this._textInput = ref}/>
				<input type="submit" value="Post" />
			</form>
		);
	}
}