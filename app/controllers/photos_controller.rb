class PhotosController < ApplicationController

def index 
    x = Photo.last
    render json: x
end

end
