class SessionsController < ApplicationController

 # post '/login'
 def create
  # byebug
    user = User.find_by_username(params[:username])
    if user
      #if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  # delete '/logout'
  def destroy
    session.delete :user_id
    head :no_content
  end
end



