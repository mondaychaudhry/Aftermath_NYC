class CommunitiesController < ApplicationController
    wrap_parameters format: []

    def index
        c = Community.all 
        render json: c, status: :ok
    end
    
end
