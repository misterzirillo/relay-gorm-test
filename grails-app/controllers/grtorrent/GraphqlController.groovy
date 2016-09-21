package grtorrent

import grails.converters.JSON
import graphql.ExecutionResult

class GraphqlController {

    def relayService

    def index() {
        String query = request.JSON.query.toString()
	    Map vars = request.JSON.variables
	    def result = relayService.query(query, null, vars)

	    render(result as JSON)
    }

    def introspect() {
        render(relayService.introspect() as JSON)
    }

}
