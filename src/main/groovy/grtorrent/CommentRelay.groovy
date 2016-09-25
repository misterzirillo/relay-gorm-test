package grtorrent

import graphql.Scalars
import graphql.relay.SimpleListConnection
import graphql.schema.DataFetcher
import graphql.schema.DataFetchingEnvironment
import io.cirill.relay.RelayHelpers
import io.cirill.relay.annotation.RelayMutation
import io.cirill.relay.dsl.GQLMutationSpec

/**
 * grtorrent
 * @author mcirillo
 */
trait CommentRelay {

	@RelayMutation
	static relayMutations = {
		GQLMutationSpec.field {
			name 'addComment'
			type {
				name 'AddCommentsPayload'
				field {
					name 'viewer'
					type {
						ref 'Viewer'
					}
				}
				field {
					name 'newCommentEdge'
					type {
						name 'NewCommentEdge'
						field {
							name 'cursor'
							type Scalars.GraphQLString
						}
						field {
							name 'node'
							type {
								ref 'Comment'
							}
						}
					}
				}
				field {
					name 'clientMutationId'
					type Scalars.GraphQLString
				}
			}
			inputType {
				name 'AddCommentsInput'
				field {
					name 'authorId'
					type {
						nonNull Scalars.GraphQLID
					}
				}
				field {
					name 'text'
					type {
						nonNull Scalars.GraphQLString
					}
				}
			}
			dataFetcher new AddCommentMutation()
		}
	}

	static class AddCommentMutation implements DataFetcher {
		@Override
		Object get(DataFetchingEnvironment environment) {
			String authorId = environment.arguments.input.authorId
			String text = environment.arguments.input.text
			Viewer viewer = Viewer.findById(RelayHelpers.fromGlobalId(authorId).id.toLong())

			Comment comment = new Comment(text: text, author: viewer)
			viewer.comments.add comment
			comment.save()
			viewer.save()

			def connection = new SimpleListConnection(viewer.comments as List)
			def cursor = connection.cursorForObjectInConnection(comment)

			return [
			        newCommentEdge : [
			                cursor : cursor.value,
					        node : comment
			        ],
					viewer : viewer,
					clientMutationId : environment.arguments.input.clientMutationId
			]
		}
	}

}
