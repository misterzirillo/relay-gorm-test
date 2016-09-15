package grtorrent

import grails.converters.JSON
import graphql.ExecutionResult

class GraphqlController {

    def relayService

    def index() {
        String query = request.JSON.query.toString()
	    Map vars = request.JSON.variables
	    ExecutionResult result = relayService.query(query, null, vars)
	    def response = [:]
	    if (result.data) {
		    response.data = result.data
	    }
	    if (result.errors) {
		    response.errors = result.errors
	    }
	    render(response as JSON)
    }

    def introspect() {
        render(relayService.introspect() as JSON)
    }

}
