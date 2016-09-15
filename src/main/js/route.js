import Relay from 'react-relay';

export default class CommentsRoute extends Relay.Route {
    static path = '/';
    static queries = {
        viewer: (component) => Relay.QL`query { viewer { ${component.getFragment('viewer')} }}`
    };
    static routeName = 'Route';
}
