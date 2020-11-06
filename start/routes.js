'use strict'

const Route = use('Route')

Route.get('/', () => {
    return {hello: 'world'};
});

Route.post('/startConversation', async ({request}) => {
    const Database = use('Database')
    const conversationId = await Database
        .table('conversations')
        .insert({
            app_id: request.input('on'),
            with_user_id: request.input('with'),
            by_user_id: 34,
        });
    return {conversationId: `${conversationId}`};
})
