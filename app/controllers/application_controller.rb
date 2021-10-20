class ApplicationController < ActionController::API
    include ActionController::Cookies
      # before_action :confirm_authentication
    
    def current_user
        # use session to see who's currently logged in
        @current_user ||= User.find_by_id(session[:user_id])
      end
end
