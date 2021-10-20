class CommunitiesController < ApplicationController
    wrap_parameters format: []
    
    def index 
        i = Community.all 
        render json: i, status: :ok
    end 
end
