require 'bundler'
Bundler.require

require 'sinatra/base'

require './models/users'

require './controllers/application_controller'
require './controllers/users_controller'

map('/') { run ApplicationController }
