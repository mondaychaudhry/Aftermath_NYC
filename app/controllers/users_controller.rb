class UsersController < ApplicationController
    wrap_parameters format: []

    def index 
        x = User.all
        render json: x, status: :ok
    end

    def show
        x = User.find_by(id:params[:id])
        render json: x, status: :ok
    end 

    def create 
        x = User.create(y)
        if x.valid?
            render json: x, status: :created
        else
            render json: x.errors.full_messages, status: 422
        end
    end

    def update 
        x = User.find_by(id:params[:id])
        if x.update(y)
            render json: x
        else
            render json: x.errors.full_messages, status: 422
        end
    end 

    def destroy
        x = User.find_by(id:params[:id]) 
        if x
            x.destroy
            render json: {}
        else
            render json: {error: "Could not find entry"}, status: 404
        end
    end

    private

    def y
         params.permit(:username, :email, :password_digest)
    end


end
