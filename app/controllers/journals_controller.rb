class JournalsController < ApplicationController
    wrap_parameters format: []

    def index 
        j = User.third.journals.reverse_order
        render json: j, status: :ok
    end
    
    def show 
        j = User.third.journals.find_by(id:params[:id])
        render json: j, status: :ok
    end

    def create 
        byebug
        j = User.third.journals.create(x)
        if j.valid?
            render json: j, status: :created
        else
            render json: j.errors.full_messages, status: 422
        end
    end 

    def update 
        j = User.third.journals.find_by(id:params[:id]) 
        if j.update(x) 
            render json: User.third.journals.reverse_order #, status: :created
        else 
            render json: j.errors.full_messages, status: 422
        end
    end

    def destroy
        j = User.third.journals.find_by(id:params[:id])
        if j
            j.destroy
            render json: User.third.journals.reverse_order #, status: 204
        else
            render json: {error: "Could not find entry"}, status: 404
        end
    end

    private

    def x
        params.permit(:title, :entry)
    end

end
