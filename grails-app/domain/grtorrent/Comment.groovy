package grtorrent

import graphql.Scalars
import io.cirill.relay.annotation.RelayField
import io.cirill.relay.annotation.RelayProxyField
import io.cirill.relay.annotation.RelayType
import io.cirill.relay.dsl.GQLFieldSpec

@RelayType
class Comment implements CommentRelay {

    static hasOne = [
            author: Viewer
    ]

	static constraints = {
		text blank:false
	}

	Date dateCreated

	@RelayProxyField
	static dateProxy = {
		GQLFieldSpec.field {
			name 'dateCreatedMs'
			description 'Date comment was created in ms from epoch'
			type Scalars.GraphQLLong
			dataFetcher { env ->
				(env.source as Comment).dateCreated.getTime()
			}
		}
	}

    @RelayField
    String text

	@RelayField
	Viewer author

}
