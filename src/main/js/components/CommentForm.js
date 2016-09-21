import React from 'react';
import AddCommentMutation from './AddCommentMutation';

/** Comment Form **/
export default class CommentForm extends React.Component {

	constructor(props) {
		super(props);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let { _textInput } = this;
		const text = _textInput.value.trim();

		if (!text) {
			return;
		}

		this.props.handleSubmit(text);

		_textInput.value = '';
	};

	render () {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Say something..." ref={ref => this._textInput = ref}/>
				<input type="submit" value="Post" />
			</form>
		);
	}
}