class CommunitiesController < ApplicationController
    wrap_parameters format: []

    def index
        c = Community.all 
        render json: Community.all.reverse_order, status: :ok
    end

    def show 
        c = Community.find_by(id:params[:id])
        render json: c, status: :ok
    end

    def create
       c = User.third.communities.create(x)
        if c.valid?
            render json: c, status: :created
        else
            render json: c.errors.full_messages, status: 422
        end
    end 

    def update 
        c = Community.find_by(id:params[:id]) 
        if c 
            c.update(x) 
            render json: Community.all.reverse_order #, status: :created
        else 
            render json: c.errors.full_messages, status: 422
        end
    end

    def destroy
        c = Community.find_by(id:params[:id])
        if c
            c.destroy
            render json: Community.all.reverse_order #, status: 204
        else
            render json: {error: "Could not find entry"}, status: 404
        end
    end

    private

    def x
        params.permit(:title, :description, :contact, :category)
    end
    
end
