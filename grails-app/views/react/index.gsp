<%--
  Created by IntelliJ IDEA.
  User: mcirillo
  Date: 10/5/15
  Time: 9:39 PM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title></title>
    <asset:reactTemplate src="react/comment-components.jsx" />
    <asset:stylesheet src="react.css" />

</head>
<body>

    <div id="content"></div>
    <script type="text/javascript">
        React.render(
                React.createElement(CommentBox,
                        {
                            url: "${createLink(controller:"comments")}",
                            pollInterval: 10000
                        }),
                document.getElementById('content')
        );
    </script>

</body>
</html>