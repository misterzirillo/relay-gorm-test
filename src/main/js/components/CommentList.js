import React from 'react';
import Relay from 'react-relay';
import Comment from './Comment';

/** Comment List **/
class CommentList extends React.Component {
	render () {
		var commentNodes = this.props.viewer.comments.edges.map(function (edge, i) {
			return (
				<Comment key={i} comment={edge.node}/>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
}

export default Relay.createContainer(CommentList, {
	fragments: {
		viewer: () => Relay.QL`fragment on Viewer { comments(first: 10) { pageInfo, edges { node { ${Comment.getFragment('comment')} } } } }`,
	}
});