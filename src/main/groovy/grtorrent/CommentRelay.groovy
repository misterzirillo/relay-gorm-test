package grtorrent

import io.cirill.relay.annotation.RelayMutation
import io.cirill.relay.annotation.RelayMutationInput
import io.cirill.relay.annotation.RelayQuery

/**
 * grtorrent
 * @author mcirillo
 */
trait CommentRelay {

	@RelayMutation(output = ['author', 'text'])
	static def addComment(
			@RelayMutationInput(name = 'author') String name,
			@RelayMutationInput(name = 'text') String text
	) {
		Comment comment = new Comment(author: name, text: text)
		comment.save()
	}

	@RelayQuery
	static List<Comment> allComments() {
		Comment.findAll()*.asType(Comment)
	}

}
