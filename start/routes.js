'use strict'

const Route = use('Route')

Route.get('/', () => {
  return {hello: 'world'};
});