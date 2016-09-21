import Relay from 'react-relay';

export default class AddCommentMutation extends Relay.Mutation {

	getMutation() {
		return Relay.QL`mutation { addComment }`;
	}

	getVariables() {
		return { authorId: this.props.viewer.id, text: this.props.text }
	}

	getConfigs() {
		return [{
			type: 'RANGE_ADD',
			parentID: this.props.viewer.id,
			connectionName: 'comments',
			edgeName: 'newCommentEdge',
			rangeBehaviors: {
				// When the ships connection is not under the influence
				// of any call, append the ship to the end of the connection
				'': 'append',
				// Prepend the ship, wherever the connection is sorted by age
				'orderby(newest)': 'prepend',
			}
		}];
	}

	getFatQuery() {
		return  Relay.QL`fragment on AddCommentsPayload { newCommentEdge, viewer { comments } }`;
	}

	static fragments = {
		viewer: () => Relay.QL`fragment on Viewer { id }`
	};
}