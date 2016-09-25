import React from 'react';
import Relay from 'react-relay';

/** Comment **/
class Comment extends React.Component {
	render () {

		const { author, text, dateCreatedMs } = this.props.comment;
		const date = new Date(dateCreatedMs);

		return (
			<div className="comment">
				<h4 className="commentAuthor">
					{author.name}
				</h4>
				<span>
					says:
				</span>
				<blockquote>{text}</blockquote>
				<span>
					{date.toDateString()}
				</span>
			</div>
		);
	}
}

export default Relay.createContainer(Comment, {
	fragments: {
		comment: () => Relay.QL`fragment on Comment { id, text, dateCreatedMs, author { name } }`
	}
});
